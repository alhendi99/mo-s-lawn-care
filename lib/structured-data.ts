import { getBreadcrumbItems } from '../content/routes.ts'
import type { CanonicalRoute, PublishedBlogArticle } from '../content/types.ts'
import { approvedBusinessFacts } from './site.ts'
import { SITE_ORIGIN } from './site-url.ts'

export type StructuredDataNode = Readonly<
  {
    '@type': string | readonly string[]
    '@id': string
  } & Record<string, unknown>
>

export type StructuredDataDocument = Readonly<{
  '@context': 'https://schema.org'
  '@graph': readonly StructuredDataNode[]
}>

export const ORGANIZATION_ID = `${SITE_ORIGIN}/#organization`
export const WEBSITE_ID = `${SITE_ORIGIN}/#website`

function getCleanExternalStructuredDataUrl(value: string) {
  const url = new URL(value)
  url.search = ''
  url.hash = ''
  return url.toString()
}

export function getStructuredDataIds(route: CanonicalRoute) {
  return {
    organization: ORGANIZATION_ID,
    website: WEBSITE_ID,
    webpage: `${route.canonicalUrl}#webpage`,
    breadcrumb: route.parentId ? `${route.canonicalUrl}#breadcrumb` : undefined,
    service: route.pageType === 'service' ? `${route.canonicalUrl}#service` : undefined,
    article: route.pageType === 'blog-article' ? `${route.canonicalUrl}#article` : undefined,
  } as const
}

function getWebPageType(route: CanonicalRoute) {
  switch (route.pageType) {
    case 'about':
      return 'AboutPage'
    case 'contact':
      return 'ContactPage'
    case 'services-index':
    case 'service-areas-index':
    case 'work-index':
    case 'reviews-index':
      return 'CollectionPage'
    case 'blog-index':
      return 'Blog'
    default:
      return 'WebPage'
  }
}

export function buildArticleItemListStructuredData(
  blogRoute: CanonicalRoute,
  articles: readonly PublishedBlogArticle[],
): StructuredDataNode {
  if (blogRoute.pageType !== 'blog-index') {
    throw new Error(`Article ItemList requires the Blog route: ${blogRoute.id}`)
  }
  if (articles.length === 0) {
    throw new Error('Empty article ItemLists must be omitted')
  }
  if (articles.some(({ status }) => status !== 'published')) {
    throw new Error('Article ItemList accepts published records only')
  }

  return {
    '@type': 'ItemList',
    '@id': `${blogRoute.canonicalUrl}#published-guides`,
    name: 'Published lawn care guides',
    numberOfItems: articles.length,
    itemListElement: articles.map((article, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: article.h1,
      url: new URL(article.path, SITE_ORIGIN).toString(),
    })),
  }
}

export function buildBlogPostingStructuredData(
  route: CanonicalRoute,
  article: PublishedBlogArticle,
): StructuredDataNode {
  if (route.pageType !== 'blog-article' || route.id !== article.routeId) {
    throw new Error(`BlogPosting route mismatch: ${article.slug}`)
  }
  if (article.status !== 'published') {
    throw new Error(`BlogPosting requires a published article: ${article.slug}`)
  }

  return {
    '@type': 'BlogPosting',
    '@id': `${route.canonicalUrl}#article`,
    url: route.canonicalUrl,
    headline: article.h1,
    description: article.description,
    inLanguage: 'en-US',
    mainEntityOfPage: { '@id': `${route.canonicalUrl}#webpage` },
    isPartOf: { '@id': WEBSITE_ID },
    publisher: { '@id': ORGANIZATION_ID },
    citation: article.sources.map(({ url }) => getCleanExternalStructuredDataUrl(url)),
    ...(article.author
      ? { author: { '@type': 'Person', name: article.author.name } }
      : {}),
    ...(article.publishedOn ? { datePublished: article.publishedOn } : {}),
    ...(article.modifiedOn ? { dateModified: article.modifiedOn } : {}),
    ...(article.image
      ? {
          image: {
            '@type': 'ImageObject',
            url: new URL(article.image.src, SITE_ORIGIN).toString(),
            width: article.image.width,
            height: article.image.height,
            caption: article.image.alt,
          },
        }
      : {}),
  }
}

function buildOrganizationNode(homeRoute: CanonicalRoute): StructuredDataNode {
  const { phone, email, serviceAreas, externalProfiles } = approvedBusinessFacts

  return {
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: approvedBusinessFacts.displayName,
    legalName: approvedBusinessFacts.legalName,
    description: homeRoute.description,
    url: homeRoute.canonicalUrl,
    logo: `${SITE_ORIGIN}/logo-512x512.png`,
    telephone: phone.e164,
    email: email.address,
    areaServed: serviceAreas.map(({ city, region }) => ({
      '@type': 'City',
      name: city,
      containedInPlace: {
        '@type': 'State',
        name: region,
      },
    })),
    sameAs: externalProfiles.map(({ href }) => getCleanExternalStructuredDataUrl(href)),
  }
}

function buildWebsiteNode(homeRoute: CanonicalRoute): StructuredDataNode {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: homeRoute.canonicalUrl,
    name: approvedBusinessFacts.displayName,
    description: homeRoute.description,
    inLanguage: 'en-US',
    publisher: { '@id': ORGANIZATION_ID },
  }
}

function buildWebPageNode(route: CanonicalRoute): StructuredDataNode {
  const ids = getStructuredDataIds(route)

  return {
    '@type': getWebPageType(route),
    '@id': ids.webpage,
    url: route.canonicalUrl,
    name: route.title,
    description: route.description,
    inLanguage: 'en-US',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORGANIZATION_ID },
    publisher: { '@id': ORGANIZATION_ID },
    ...(ids.breadcrumb ? { breadcrumb: { '@id': ids.breadcrumb } } : {}),
  }
}

export function buildBreadcrumbStructuredData(route: CanonicalRoute): StructuredDataNode | null {
  const id = getStructuredDataIds(route).breadcrumb
  if (!id) return null

  return {
    '@type': 'BreadcrumbList',
    '@id': id,
    itemListElement: getBreadcrumbItems(route.id).map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.isCurrent ? route.canonicalUrl : new URL(item.href, SITE_ORIGIN).toString(),
    })),
  }
}

export function buildServiceStructuredData(
  route: CanonicalRoute,
  service: Readonly<{
    name: string
    serviceType: string
    description: string
  }>,
): StructuredDataNode {
  if (route.pageType !== 'service') {
    throw new Error(`Service structured data requires a service route: ${route.id}`)
  }

  return {
    '@type': 'Service',
    '@id': `${route.canonicalUrl}#service`,
    name: service.name,
    serviceType: service.serviceType,
    url: route.canonicalUrl,
    description: service.description,
    provider: { '@id': ORGANIZATION_ID },
    areaServed: approvedBusinessFacts.serviceAreas.map(({ city, region }) => ({
      '@type': 'City',
      name: city,
      containedInPlace: {
        '@type': 'State',
        name: region,
      },
    })),
  }
}

export function buildPageStructuredData(
  route: CanonicalRoute,
  homeRoute: CanonicalRoute,
  additionalNodes: readonly StructuredDataNode[] = [],
): StructuredDataDocument {
  const breadcrumb = buildBreadcrumbStructuredData(route)

  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrganizationNode(homeRoute),
      buildWebsiteNode(homeRoute),
      buildWebPageNode(route),
      ...(breadcrumb ? [breadcrumb] : []),
      ...additionalNodes,
    ],
  }
}

export function serializeStructuredData(data: StructuredDataDocument) {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}
