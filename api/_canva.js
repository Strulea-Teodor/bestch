// Shared logic for the same-origin Canva reverse proxy.
// Used by both the Vercel serverless function (api/proxy/[...path].js) and the
// Vite dev middleware (vite.config.ts) so behaviour is identical locally and in prod.
//
// Published Canva sites (*.my.canva.site) send `x-frame-options: SAMEORIGIN` and
// a `frame-ancestors` CSP, and serve NO CORS headers. To embed one responsively
// we route every request (HTML + JS + CSS + fonts + images + runtime XHR) through
// this proxy under a path prefix, so from the browser's point of view all of it is
// same-origin. That keeps fonts/images working (they'd otherwise be CORS-blocked)
// and preserves the assets' SRI integrity hashes (bytes pass through untouched).

export const PROXY_PREFIX = '/api/proxy/'

// Only *.my.canva.site hosts may be proxied — prevents this endpoint from
// becoming an open proxy / SSRF vector.
export function isAllowedHost(host) {
  return typeof host === 'string' && /^[a-z0-9-]+(\.[a-z0-9-]+)*\.my\.canva\.site$/i.test(host)
}

const USER_AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36'

// Injected at the top of <head> so it runs before the site's deferred scripts.
// Rewrites any request the app makes to the Canva origin (or a root-absolute
// path) so it goes back through this proxy and stays same-origin.
function requestShim(host) {
  const prefix = `${PROXY_PREFIX}${host}/`
  const origin = `https://${host}`
  return (
    '<script>(function(){' +
    `var P=${JSON.stringify(prefix)},O=${JSON.stringify(origin)};` +
    'function rw(u){try{if(typeof u!=="string")return u;' +
    'if(u.indexOf(O)===0){var r=u.slice(O.length);return P+(r.charAt(0)==="/"?r.slice(1):r);}' +
    'if(u.charAt(0)==="/"&&u.indexOf(P)!==0&&u.charAt(1)!=="/")return P+u.slice(1);' +
    'return u;}catch(e){return u;}}' +
    'var f=window.fetch;if(f){window.fetch=function(i,n){' +
    'if(typeof i==="string")i=rw(i);else if(i&&i.url){try{i=new Request(rw(i.url),i);}catch(e){}}' +
    'return f.call(this,i,n);};}' +
    'var o=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(m,u){' +
    'try{arguments[1]=rw(u);}catch(e){}return o.apply(this,arguments);};' +
    '})();</script>'
  )
}

/**
 * Proxies one request to a Canva site.
 * @param {string} subpath  path after PROXY_PREFIX, e.g. "host.my.canva.site/_assets/x.js"
 * @param {string} rawQuery raw query string without the leading "?"
 * @returns {Promise<{status:number, contentType:string, body:Buffer, immutable:boolean}>}
 */
export async function proxyCanva(subpath, rawQuery) {
  const slash = subpath.indexOf('/')
  const host = slash === -1 ? subpath : subpath.slice(0, slash)
  const rest = slash === -1 ? '' : subpath.slice(slash + 1)

  if (!isAllowedHost(host)) {
    return { status: 403, contentType: 'text/plain', body: Buffer.from('Host not allowed'), immutable: false }
  }

  const target = `https://${host}/${rest}${rawQuery ? `?${rawQuery}` : ''}`
  const upstream = await fetch(target, { headers: { 'user-agent': USER_AGENT, accept: '*/*' } })
  const contentType = upstream.headers.get('content-type') || 'application/octet-stream'

  if (contentType.includes('text/html')) {
    let html = await upstream.text()
    const base = `${PROXY_PREFIX}${host}/`

    // Point relative URLs at the proxy path (keeps everything same-origin).
    if (/<base\b[^>]*>/i.test(html)) {
      html = html.replace(/<base\b[^>]*>/i, `<base href="${base}">`)
    } else {
      html = html.replace(/<head([^>]*)>/i, `<head$1><base href="${base}">`)
    }

    // Remove any in-document CSP that would re-impose framing restrictions.
    html = html.replace(/<meta[^>]+http-equiv=["']?content-security-policy["']?[^>]*>/gi, '')

    // Inject the request shim right after the (rewritten) <base>, before other scripts.
    html = html.replace(/(<base\b[^>]*>)/i, `$1${requestShim(host)}`)

    return { status: upstream.status, contentType: 'text/html; charset=utf-8', body: Buffer.from(html), immutable: false }
  }

  // Non-HTML: stream bytes through unchanged. Content-hashed assets are immutable.
  const body = Buffer.from(await upstream.arrayBuffer())
  const immutable = /(^|\/)_assets\//.test(rest)
  return { status: upstream.status, contentType, body, immutable }
}
