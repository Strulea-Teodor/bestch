import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import PageNotFound from '../404-page'
import LoadingScreen from '../../components/loading-screen'
import { fetchCmsPages, normalizePath, type CmsPage } from '../../lib/cms'

/**
 * Shown for spreadsheet entries of type "custom" that don't have a matching
 * route in the app yet. Adding a real <Route> for the path takes precedence
 * over this catch-all, so the message disappears automatically.
 */
const NoCustomPage = ({ page }: { page: CmsPage }) => {
  const { t } = useTranslation()

  useEffect(() => {
    const previousTitle = document.title
    document.title = page.title

    return () => {
      document.title = previousTitle
    }
  }, [page.title])

  return (
    <div className="max-w-[1400px] h-[90vh] mx-auto text-white xl:px-[75px] px-[18px] flex flex-col justify-center items-center">
      <p className="text-lg opacity-80">{t('There is no custom page for this route')}</p>
    </div>
  )
}

const ExternalRedirect = ({ page }: { page: CmsPage }) => {
  useEffect(() => {
    window.location.replace(page.url)
  }, [page.url])

  return <LoadingScreen />
}

const CmsRouter = () => {
  const { pathname } = useLocation()
  const [pages, setPages] = useState<CmsPage[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true

    fetchCmsPages().then((result) => {
      if (!active) return
      setPages(result)
      setLoading(false)
    })

    return () => {
      active = false
    }
  }, [])

  if (loading) return <LoadingScreen />

  const page = pages.find(
    (candidate) => normalizePath(candidate.page_url) === normalizePath(pathname)
  )

  if (!page) return <PageNotFound />

  if (page.url_type === 'external') return <ExternalRedirect page={page} />

  return <NoCustomPage page={page} />
}

export default CmsRouter
