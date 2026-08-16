import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, Inter } from 'next/font/google'
import { SITE_ORIGIN } from '@/lib/site-url'
import { I18nProvider } from '@/lib/i18n'
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: "Lawn Care Service in Des Moines, Iowa | Mo's Lawn Care",
  description:
    "Need a lawn care service in Des Moines, Iowa? Mo's provides lawn care, landscaping, leaf and yard cleanup, and snow removal. Request a free estimate.",
  applicationName: "Mo's Lawn Care",
  authors: [{ name: "Mo's Lawn Care and Snow Removal Services LLC", url: SITE_ORIGIN }],
  creator: "Mo's Lawn Care and Snow Removal Services LLC",
  publisher: "Mo's Lawn Care and Snow Removal Services LLC",
  keywords: [
    'lawn care service in Des Moines Iowa',
    'Des Moines lawn care',
    'snow removal Des Moines',
    'leaf cleanup Des Moines',
    'yard cleanup Des Moines',
    'landscaping Des Moines',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon', sizes: 'any' },
      { url: '/logo-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/logo-48x48.png', type: 'image/png', sizes: '48x48' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/logo-180x180.png', type: 'image/png', sizes: '180x180' }],
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    title: "Lawn Care Service in Des Moines, Iowa | Mo's Lawn Care",
    description:
      "Year-round lawn care, landscaping, cleanups, and snow removal from Mo's Lawn Care in Des Moines, Iowa.",
    url: '/',
    siteName: "Mo's Lawn Care",
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/seasons/summer.png',
        width: 1672,
        height: 941,
        alt: "A maintained Des Moines lawn representing Mo's Lawn Care services",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lawn Care Service in Des Moines, Iowa | Mo's Lawn Care",
    description:
      "Year-round lawn care, landscaping, cleanups, and snow removal from Mo's Lawn Care in Des Moines, Iowa.",
    images: [
      {
        url: '/seasons/summer.png',
        alt: "A maintained Des Moines lawn representing Mo's Lawn Care services",
      },
    ],
  },
  category: 'Lawn care service',
}

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
