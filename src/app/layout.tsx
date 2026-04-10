import type { Metadata } from 'next'
import Script from 'next/script'
import { Suspense } from 'react'
import './globals.css'
import { siteConfig } from '@/lib/data'
import { GoogleAnalyticsPageView } from '../components/google-analytics-pageview'

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  return (
    <html lang="en">
      <body>
        {gaMeasurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaMeasurementId}', { send_page_view: false });
              `}
            </Script>
            <Suspense fallback={null}>
              <GoogleAnalyticsPageView measurementId={gaMeasurementId} />
            </Suspense>
          </>
        ) : null}
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        {children}
      </body>
    </html>
  )
}
