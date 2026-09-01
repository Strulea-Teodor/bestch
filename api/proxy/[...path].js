// Vercel serverless catch-all: GET /api/proxy/<host>/<path...>
// Same-origin reverse proxy for published Canva sites so they can be embedded
// in an <iframe> responsively. See api/_canva.js for the rewriting logic.
import { proxyCanva } from '../_canva.js'

export default async function handler(req, res) {
  const url = new URL(req.url, 'http://localhost')
  const subpath = url.pathname.replace(/^\/api\/proxy\//, '')
  const rawQuery = url.search.slice(1)

  try {
    const result = await proxyCanva(subpath, rawQuery)

    res.setHeader('Content-Type', result.contentType)
    if (result.immutable) {
      // Canva asset filenames are content-hashed → safe to cache forever.
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
    } else {
      res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600')
    }
    // Intentionally do NOT forward X-Frame-Options / CSP so this is embeddable.
    res.status(result.status).send(result.body)
  } catch (error) {
    res.status(502).send(`Canva proxy error: ${error.message}`)
  }
}
