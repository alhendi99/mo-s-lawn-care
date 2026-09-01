import type { Metadata, MetadataRoute } from 'next'
import { blogArticles, getPublishedArticleRoute, getPublishedArticles } from '../content/blog/index.ts'
import { routeRegistry } from '../content/routes.ts'
import type { BlogArticle, CanonicalRoute } from '../content/types.ts'
import { approvedBusinessFacts } from './site.ts'
import { SITE_ORIGIN } from './site-url.ts'

export type SocialImage = Readonly<{
  url: string
  width: number
  height: number
  alt: string
  type: string
}>

export const DEFAULT_SOCIAL_IMAGE: SocialImage = {
  url: `${SITE_ORIGIN}/logo-512x512.png`,
  width: 512,
  height: 512,
  alt: `${approvedBusinessFacts.displayName} logo`,
  type: 'image/png',
}

export const SITEMAP_URL = `${SITE_ORIGIN}/sitemap.xml`

export function isPublishedIndexableRoute(route: CanonicalRoute) {
  return (
    route.implementationStatus === 'implemented' &&
    route.publicationStatus === 'published' &&
    route.indexability === 'indexable'
  )
}

export function getPublishedIndexableRoutes(
  routes: readonly CanonicalRoute[] = routeRegistry,
) {
  return routes.filter(isPublishedIndexableRoute)
}

function buildRobotsMetadata(route: CanonicalRoute): Metadata['robots'] {
  const isPublic = isPublishedIndexableRoute(route)

  return {
    index: isPublic,
    follow: isPublic,
    googleBot: {
      index: isPublic,
      follow: isPublic,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  }
}

export function buildRouteMetadata(
  route: CanonicalRoute,
  socialImage: SocialImage = DEFAULT_SOCIAL_IMAGE,
): Metadata {
  const socialType = route.pageType === 'blog-article' ? 'article' : 'website'

  return {
    metadataBase: new URL(SITE_ORIGIN),
    title: route.title,
    description: route.description,
    applicationName: approvedBusinessFacts.displayName,
    creator: approvedBusinessFacts.legalName,
    publisher: approvedBusinessFacts.legalName,
    alternates: {
      canonical: route.canonicalUrl,
    },
    robots: buildRobotsMetadata(route),
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
      title: route.title,
      description: route.description,
      url: route.canonicalUrl,
      siteName: approvedBusinessFacts.displayName,
      locale: 'en_US',
      type: socialType,
      images: [socialImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: route.title,
      description: route.description,
      images: [{ url: socialImage.url, alt: socialImage.alt }],
    },
    category: 'Lawn care service',
  }
}

export function buildSitemapEntries(
  routes: readonly CanonicalRoute[] = routeRegistry,
  articles: readonly BlogArticle[] = blogArticles,
): MetadataRoute.Sitemap {
  const routeEntries = getPublishedIndexableRoutes(routes)
    .filter(({ pageType }) => pageType !== 'blog-article')
    .map((route) => ({
      url: route.canonicalUrl,
    }))
  const articleEntries = getPublishedArticles(articles).map((article) => ({
    url: getPublishedArticleRoute(article).canonicalUrl,
  }))

  return [...routeEntries, ...articleEntries]
}

export function buildRobotsFile(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: SITEMAP_URL,
  }
}
