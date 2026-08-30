import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, Inter } from 'next/font/google'
import { ContactLinkTracker } from '@/components/contact-link-tracker'
import { Ga4 } from '@/components/ga4'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Tr } from '@/components/tr'
import { routesById } from '@/content/routes'
import { getGa4Config, isProductionDeployment } from '@/lib/analytics-config'
import { I18nProvider } from '@/lib/i18n'
import { buildRouteMetadata } from '@/lib/metadata'
import './globals.css'

const display = Archivo({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = buildRouteMetadata(routesById.home)

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#102019',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const ga4 = getGa4Config()

  return (
    <html lang="en" className={`${display.variable} ${body.variable} bg-background`}>
      <body className="antialiased">
        <I18nProvider>
          <a href="#main-content" className="skip-link">
            <Tr text="Skip to main content" />
          </a>
          <SiteHeader />
          <div id="main-content" tabIndex={-1} className="outline-none">
            {children}
          </div>
          <SiteFooter />
          {ga4.enabled && <ContactLinkTracker />}
        </I18nProvider>
        {ga4.enabled && <Ga4 measurementId={ga4.measurementId} />}
        {isProductionDeployment() && <Analytics />}
      </body>
    </html>
  )
}
