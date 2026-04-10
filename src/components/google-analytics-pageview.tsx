'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export function GoogleAnalyticsPageView({ measurementId }: { measurementId: string }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!window.gtag) return

    const search = searchParams?.toString()
    const pagePath = search ? `${pathname}?${search}` : pathname

    window.gtag('config', measurementId, { page_path: pagePath })
  }, [measurementId, pathname, searchParams])

  return null
}
