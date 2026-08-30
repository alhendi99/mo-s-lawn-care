import type { CanonicalRoute } from '../content/types.ts'
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
    case 'commercial-index':
    case 'service-areas-index':
    case 'work-index':
    case 'reviews-index':
      return 'CollectionPage'
    case 'blog-index':
      return ['Blog', 'CollectionPage'] as const
    default:
      return 'WebPage'
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
    sameAs: externalProfiles.map(({ href }) => href),
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
  }
}

export function buildPageStructuredData(
  route: CanonicalRoute,
  homeRoute: CanonicalRoute,
  additionalNodes: readonly StructuredDataNode[] = [],
): StructuredDataDocument {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrganizationNode(homeRoute),
      buildWebsiteNode(homeRoute),
      buildWebPageNode(route),
      ...additionalNodes,
    ],
  }
}

export function serializeStructuredData(data: StructuredDataDocument) {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}
