import { routesById } from '../routes.ts'
import type {
  BlogArticle,
  CanonicalRoute,
  PublishedBlogArticle,
} from '../types.ts'
import { bestTimeToOverseedLawnIowa } from './best-time-to-overseed-lawn-iowa.ts'
import { centralIowaLawnCareCalendar } from './central-iowa-lawn-care-calendar.ts'
import { fallLeafCleanupDesMoines } from './fall-leaf-cleanup-des-moines.ts'
import { howOftenToMowLawnIowa } from './how-often-to-mow-lawn-iowa.ts'
import { springLawnCleanupDesMoines } from './spring-lawn-cleanup-des-moines.ts'
import { whenToAerateLawnIowa } from './when-to-aerate-lawn-iowa.ts'

export const blogArticles = [
  whenToAerateLawnIowa,
  bestTimeToOverseedLawnIowa,
  howOftenToMowLawnIowa,
  springLawnCleanupDesMoines,
  fallLeafCleanupDesMoines,
  centralIowaLawnCareCalendar,
] as const satisfies readonly BlogArticle[]

export function getPublishedArticles(
  articles: readonly BlogArticle[] = blogArticles,
): readonly PublishedBlogArticle[] {
  return articles.filter(
    (article): article is PublishedBlogArticle => article.status === 'published',
  )
}

export function getPublishedArticleBySlug(
  slug: string,
  articles: readonly BlogArticle[] = blogArticles,
) {
  return getPublishedArticles(articles).find((article) => article.slug === slug)
}

export function getPublishedRelatedArticles(
  article: PublishedBlogArticle,
  articles: readonly BlogArticle[] = blogArticles,
) {
  const relatedPaths = new Set(article.relatedArticlePaths)
  return getPublishedArticles(articles).filter(({ path }) => relatedPaths.has(path))
}

export function getPublishedArticleRoute(article: PublishedBlogArticle): CanonicalRoute {
  const route = routesById[article.routeId]
  return {
    ...route,
    implementationStatus: 'implemented',
    publicationStatus: 'published',
  }
}

function requireNonEmpty(value: string, field: string, slug: string) {
  if (!value.trim()) throw new Error(`Blog article ${slug} has an empty ${field}`)
}

function requireIsoDate(value: string, field: string, slug: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || Number.isNaN(Date.parse(`${value}T00:00:00Z`))) {
    throw new Error(`Blog article ${slug} has an invalid ${field}`)
  }
}

export function validateBlogArticles(articles: readonly BlogArticle[] = blogArticles) {
  const slugs = new Set<string>()
  const paths = new Set(articles.map(({ path }) => path))

  for (const article of articles) {
    if (slugs.has(article.slug)) throw new Error(`Duplicate blog slug: ${article.slug}`)
    slugs.add(article.slug)

    const route = routesById[article.routeId]
    if (route.pageType !== 'blog-article') {
      throw new Error(`Blog record ${article.slug} does not use a blog article route`)
    }
    if (article.path !== route.path || article.path !== `/blog/${article.slug}`) {
      throw new Error(`Blog route mismatch: ${article.slug}`)
    }
    for (const field of ['title', 'h1', 'description', 'primaryKeyword'] as const) {
      if (article[field] !== route[field]) {
        throw new Error(`Blog ownership mismatch for ${article.slug}: ${field}`)
      }
    }
    if (
      article.secondaryKeywords.length !== route.secondaryKeywords.length ||
      article.secondaryKeywords.some((keyword, index) => keyword !== route.secondaryKeywords[index])
    ) {
      throw new Error(`Blog ownership mismatch for ${article.slug}: secondaryKeywords`)
    }
    const expectedKeywordStatus = article.status === 'planned' ? 'pending-research' : 'defined'
    if (route.secondaryKeywordStatus !== expectedKeywordStatus) {
      throw new Error(`Blog ownership mismatch for ${article.slug}: secondaryKeywordStatus`)
    }
    if (article.publisher !== 'organization') {
      throw new Error(`Blog article ${article.slug} must use the central Organization publisher`)
    }

    for (const servicePath of article.relatedServicePaths) {
      const serviceRoute = Object.values(routesById).find(({ path }) => path === servicePath)
      if (!serviceRoute || serviceRoute.pageType !== 'service') {
        throw new Error(`Invalid related service path for ${article.slug}: ${servicePath}`)
      }
    }
    for (const relatedPath of article.relatedArticlePaths) {
      if (relatedPath === article.path || !paths.has(relatedPath)) {
        throw new Error(`Invalid related article path for ${article.slug}: ${relatedPath}`)
      }
    }

    if (article.status === 'planned') {
      if (article.secondaryKeywords.length !== 0) {
        throw new Error(`Planned article ${article.slug} cannot invent secondary keywords`)
      }
      continue
    }

    requireNonEmpty(article.excerpt, 'excerpt', article.slug)
    if (article.content.length === 0 || article.sources.length === 0 || article.claimNotes.length === 0) {
      throw new Error(`Reviewed article ${article.slug} requires content, sources, and claim notes`)
    }

    const sourceIds = new Set<string>()
    const claimIds = new Set(article.claimNotes.map(({ id }) => id))
    if (claimIds.size !== article.claimNotes.length) {
      throw new Error(`Blog article ${article.slug} has duplicate claim IDs`)
    }

    for (const source of article.sources) {
      requireNonEmpty(source.id, 'source ID', article.slug)
      requireNonEmpty(source.title, 'source title', article.slug)
      requireNonEmpty(source.publisher, 'source publisher', article.slug)
      requireIsoDate(source.reviewedOn, 'source review date', article.slug)
      const sourceUrl = new URL(source.url)
      if (!['http:', 'https:'].includes(sourceUrl.protocol)) {
        throw new Error(`Blog source must use HTTP(S): ${source.url}`)
      }
      if (sourceIds.has(source.id)) throw new Error(`Duplicate source ID: ${source.id}`)
      sourceIds.add(source.id)
      if (source.supportedClaimIds.length === 0) {
        throw new Error(`Blog source ${source.id} must map to at least one claim`)
      }
      for (const claimId of source.supportedClaimIds) {
        if (!claimIds.has(claimId)) throw new Error(`Unknown claim ${claimId} in source ${source.id}`)
      }
    }

    for (const claim of article.claimNotes) {
      requireNonEmpty(claim.id, 'claim ID', article.slug)
      requireNonEmpty(claim.summary, 'claim summary', article.slug)
      if (claim.sourceIds.length === 0) throw new Error(`Claim ${claim.id} has no source`)
      for (const sourceId of claim.sourceIds) {
        if (!sourceIds.has(sourceId)) throw new Error(`Claim ${claim.id} has unknown source ${sourceId}`)
      }
    }

    const headingIds = new Set<string>()
    let headingCount = 0
    for (const block of article.content) {
      if (block.type === 'heading') {
        requireNonEmpty(block.id, 'heading ID', article.slug)
        if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(block.id) || headingIds.has(block.id)) {
          throw new Error(`Invalid or duplicate heading ID in ${article.slug}: ${block.id}`)
        }
        headingIds.add(block.id)
        headingCount += 1
      }
      if (block.type === 'paragraph') {
        if (block.content.length === 0) throw new Error(`Empty paragraph in ${article.slug}`)
        for (const inline of block.content) {
          requireNonEmpty(inline.text, 'paragraph text', article.slug)
          if (inline.sourceId && !sourceIds.has(inline.sourceId)) {
            throw new Error(`Unknown inline source ${inline.sourceId} in ${article.slug}`)
          }
          if (inline.href) {
            if (inline.href.startsWith('/')) {
              const internalRoute = Object.values(routesById).find(({ path }) => path === inline.href)
              if (!internalRoute) {
                throw new Error(`Unknown internal article link in ${article.slug}: ${inline.href}`)
              }
            } else {
              const inlineUrl = new URL(inline.href)
              if (!['http:', 'https:'].includes(inlineUrl.protocol)) {
                throw new Error(`Blog article link must use HTTP(S): ${inline.href}`)
              }
            }
          }
        }
      }
      if (block.type === 'list' && block.items.length === 0) {
        throw new Error(`Empty list in ${article.slug}`)
      }
      if (block.type === 'table') {
        if (block.headers.length === 0 || block.rows.some((row) => row.length !== block.headers.length)) {
          throw new Error(`Invalid table shape in ${article.slug}`)
        }
      }
    }
    if (article.showTableOfContents && headingCount < 2) {
      throw new Error(`Table of contents requires at least two headings: ${article.slug}`)
    }

    requireNonEmpty(article.editorialReview.owner, 'editorial review owner', article.slug)
    requireIsoDate(article.editorialReview.reviewedOn, 'editorial review date', article.slug)
    if (article.author) requireNonEmpty(article.author.name, 'author name', article.slug)
    if (article.publishedOn) requireIsoDate(article.publishedOn, 'publication date', article.slug)
    if (article.modifiedOn) {
      requireIsoDate(article.modifiedOn, 'modified date', article.slug)
      if (!article.publishedOn || article.modifiedOn < article.publishedOn) {
        throw new Error(`Modified date requires an earlier real publication date: ${article.slug}`)
      }
    }
    if (article.image) {
      requireNonEmpty(article.image.src, 'image source', article.slug)
      requireNonEmpty(article.image.alt, 'image alt', article.slug)
      requireNonEmpty(article.image.provenance, 'image provenance', article.slug)
      if (article.image.width <= 0 || article.image.height <= 0) {
        throw new Error(`Blog image requires positive dimensions: ${article.slug}`)
      }
    }
  }

  return articles
}

validateBlogArticles()
