import type { CanonicalPath } from '../lib/site-url.ts'

export const routeIds = [
  'home',
  'services',
  'service-lawn-mowing',
  'service-aeration-overseeding',
  'service-fertilization-weed-control',
  'service-landscaping',
  'service-flower-bed-maintenance',
  'service-yard-cleanup',
  'service-spring-cleanup',
  'service-fall-cleanup-leaf-removal',
  'service-grading',
  'service-snow-removal',
  'commercial-property-services',
  'service-areas',
  'service-area-ankeny',
  'service-area-waukee',
  'service-area-norwalk',
  'service-area-altoona',
  'about',
  'our-work',
  'reviews',
  'contact',
  'blog',
  'article-when-to-aerate-lawn-iowa',
  'article-best-time-to-overseed-lawn-iowa',
  'article-how-often-to-mow-lawn-iowa',
  'article-spring-lawn-cleanup-des-moines',
  'article-fall-leaf-cleanup-des-moines',
  'article-central-iowa-lawn-care-calendar',
] as const

export type RouteId = (typeof routeIds)[number]

export type RoutePageType =
  | 'home'
  | 'services-index'
  | 'service'
  | 'commercial-index'
  | 'service-areas-index'
  | 'service-area'
  | 'about'
  | 'work-index'
  | 'reviews-index'
  | 'contact'
  | 'blog-index'
  | 'blog-article'

export type SecondaryKeywordStatus = 'defined' | 'pending-research'
export type RouteImplementationStatus = 'implemented' | 'planned'
export type RoutePublicationStatus = 'published' | 'planned'

export type CanonicalRoute = Readonly<{
  id: RouteId
  path: CanonicalPath
  canonicalUrl: string
  pageType: RoutePageType
  parentId: RouteId | null
  primaryKeyword: string
  secondaryKeywords: readonly string[]
  secondaryKeywordStatus: SecondaryKeywordStatus
  title: string
  h1: string
  description: string
  implementationStatus: RouteImplementationStatus
  publicationStatus: RoutePublicationStatus
  indexability: 'indexable'
  inboundLinkIds: readonly RouteId[]
  outboundLinkIds: readonly RouteId[]
}>

export type CanonicalRouteInput = Omit<CanonicalRoute, 'canonicalUrl'>
