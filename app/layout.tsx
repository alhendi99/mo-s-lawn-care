import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, Inter } from 'next/font/google'
import { routesById } from '@/content/routes'
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
  return (
    <html lang="en" className={`${display.variable} ${body.variable} bg-background`}>
      <body className="antialiased">
        <I18nProvider>{children}</I18nProvider>
        {process.env.VERCEL === '1' && <Analytics />}
      </body>
    </html>
  )
}
