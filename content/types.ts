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

export type BlogArticleRouteId = Extract<RouteId, `article-${string}`>
export type BlogArticleStatus = 'planned' | 'reviewed' | 'published'

export type BlogArticleInline = Readonly<{
  text: string
  sourceId?: string
  href?: string
}>

export type BlogArticleBlock =
  | Readonly<{
      type: 'paragraph'
      content: readonly BlogArticleInline[]
    }>
  | Readonly<{
      type: 'heading'
      level: 2 | 3
      id: string
      text: string
    }>
  | Readonly<{
      type: 'list'
      style: 'unordered' | 'ordered' | 'checklist'
      items: readonly string[]
    }>
  | Readonly<{
      type: 'table'
      caption?: string
      headers: readonly string[]
      rows: readonly (readonly string[])[]
    }>

export type BlogSource = Readonly<{
  id: string
  title: string
  publisher: string
  url: string
  reviewedOn: string
  supportedClaimIds: readonly string[]
  jurisdiction?: string
  scope?: string
}>

export type BlogClaimNote = Readonly<{
  id: string
  summary: string
  sourceIds: readonly string[]
  reviewNote?: string
}>

export type BlogEditorialReview = Readonly<{
  owner: string
  reviewedOn: string
}>

export type BlogAuthor = Readonly<{
  name: string
  approval: 'owner-confirmed'
}>

export type BlogArticleImage = Readonly<{
  src: string
  alt: string
  width: number
  height: number
  provenance: string
  approval: 'verified'
}>

type BlogArticleOwnership = Readonly<{
  routeId: BlogArticleRouteId
  slug: string
  path: CanonicalPath
  title: string
  h1: string
  description: string
  primaryKeyword: string
  publisher: 'organization'
  relatedServicePaths: readonly CanonicalPath[]
  relatedArticlePaths: readonly CanonicalPath[]
}>

export type PlannedBlogArticle = BlogArticleOwnership & Readonly<{
  status: 'planned'
  secondaryKeywords: readonly []
}>

type ReviewedBlogArticleFields = Readonly<{
  secondaryKeywords: readonly string[]
  excerpt: string
  content: readonly [BlogArticleBlock, ...BlogArticleBlock[]]
  sources: readonly [BlogSource, ...BlogSource[]]
  claimNotes: readonly BlogClaimNote[]
  editorialReview: BlogEditorialReview
  author?: BlogAuthor
  publishedOn?: string
  modifiedOn?: string
  image?: BlogArticleImage
  showTableOfContents?: boolean
}>

export type ReviewedBlogArticle = BlogArticleOwnership & ReviewedBlogArticleFields & Readonly<{
  status: 'reviewed'
}>

export type PublishedBlogArticle = BlogArticleOwnership & ReviewedBlogArticleFields & Readonly<{
  status: 'published'
}>

export type BlogArticle = PlannedBlogArticle | ReviewedBlogArticle | PublishedBlogArticle
