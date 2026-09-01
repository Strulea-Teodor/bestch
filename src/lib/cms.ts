export type CmsPage = {
  page_url: string
  title: string
  url_type: 'custom' | 'external'
  url: string
}

export const CMS_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbxnfxQ117Jk87oc9fjIy7KQeUyzO0Jw9-RTLJwLBjzOZeTbEsTGZk1Alk6o7vZ4Tuyp/exec'

let cache: Promise<CmsPage[]> | null = null

/**
 * Fetches the page list from the Google Apps Script CMS.
 * The result promise is memoized so the network request happens only once
 * for the lifetime of the app session. On failure it resolves to an empty
 * list so unknown paths fall through to the 404 page instead of throwing.
 */
export const fetchCmsPages = (): Promise<CmsPage[]> => {
  if (!cache) {
    cache = fetch(CMS_ENDPOINT)
      .then((res) => {
        if (!res.ok) throw new Error(`CMS request failed: ${res.status}`)
        return res.json() as Promise<CmsPage[]>
      })
      .catch((error) => {
        console.error('Failed to load CMS pages', error)
        cache = null // allow a retry on the next mount
        return []
      })
  }

  return cache
}

/** Normalizes a path for robust comparison: single leading slash, no trailing slash, lowercase. */
export const normalizePath = (path: string): string => {
  const trimmed = path.trim().replace(/\/+$/, '').replace(/^\/*/, '/')
  return trimmed.toLowerCase()
}
