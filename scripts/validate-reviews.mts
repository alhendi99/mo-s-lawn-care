import assert from 'node:assert/strict'
import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'

import {
  HOME_REVIEW_LIMIT,
  REVIEW_CATEGORIES,
  REVIEWS_BATCH_SIZE,
  REVIEWS_INITIAL_COUNT,
  getDisplayReviewRecords,
  getHomepageReviewRecords,
  getPublicReviewBatch,
  getReviewCategoryCounts,
  reviewRecords,
  toPublicReviewItem,
} from '../content/reviews.ts'
import { getBreadcrumbItems, routesById } from '../content/routes.ts'
import { buildRouteMetadata, buildSitemapEntries } from '../lib/metadata.ts'
import { approvedBusinessFacts, site } from '../lib/site.ts'
import { buildPageStructuredData, serializeStructuredData } from '../lib/structured-data.ts'

const projectRoot = process.cwd()
const read = (relativePath: string) => fs.readFileSync(path.join(projectRoot, relativePath), 'utf8')
const route = routesById.reviews

assert.equal(route.path, '/reviews')
assert.equal(route.primaryKeyword, "mo's lawn care reviews")
assert.deepEqual(route.secondaryKeywords, [
  'lawn care reviews Des Moines',
  "Mo's Lawn Care Des Moines reviews",
  'snow removal reviews Des Moines',
])
assert.equal(route.title, "Mo's Lawn Care Reviews | Des Moines, IA")
assert.equal(route.h1, "What Customers Say About Mo's Lawn Care")
assert.equal(route.description, "Read customer feedback about Mo's Lawn Care and Snow Removal Services LLC in the Des Moines metro, from mowing and cleanup to snow removal.")
assert.equal(route.canonicalUrl, 'https://www.moslawncaredsm.com/reviews')
assert.equal(route.implementationStatus, 'implemented')
assert.equal(route.publicationStatus, 'published')
assert.equal(route.indexability, 'indexable')

const metadata = buildRouteMetadata(route)
assert.equal(metadata.title, route.title)
assert.equal(metadata.description, route.description)
assert.equal(metadata.alternates?.canonical, route.canonicalUrl)
assert.equal((metadata.robots as { index?: boolean }).index, true)

const graph = buildPageStructuredData(route, routesById.home)
const countType = (expected: string) => graph['@graph'].filter(({ '@type': type }) => Array.isArray(type) ? type.includes(expected) : type === expected).length
assert.equal(countType('CollectionPage'), 1)
assert.equal(countType('BreadcrumbList'), 1)
for (const forbidden of ['Review', 'AggregateRating', 'LocalBusiness', 'Person', 'Product', 'Offer', 'Service']) assert.equal(countType(forbidden), 0)
const serializedGraph = serializeStructuredData(graph)
for (const forbidden of ['"review"', '"aggregateRating"', '"reviewRating"', '"ratingValue"', '"ratingCount"', '"reviewCount"']) assert.equal(serializedGraph.includes(forbidden), false, `Forbidden JSON-LD property: ${forbidden}`)

const visibleBreadcrumbs = getBreadcrumbItems(route.id)
assert.deepEqual(visibleBreadcrumbs.map(({ label }) => label), ['Home', 'Reviews'])
assert.deepEqual(visibleBreadcrumbs.map(({ href }) => href), ['/', '/reviews'])
const breadcrumb = graph['@graph'].find(({ '@type': type }) => type === 'BreadcrumbList')
assert(breadcrumb)
const schemaBreadcrumbs = breadcrumb.itemListElement as readonly Record<string, unknown>[]
assert.deepEqual(schemaBreadcrumbs.map(({ name }) => name), ['Home', 'Reviews'])
assert.deepEqual(schemaBreadcrumbs.map(({ item }) => item), [routesById.home.canonicalUrl, route.canonicalUrl])

assert.equal(reviewRecords.length, 106)
assert.equal(getDisplayReviewRecords().length, 106)
assert.equal(new Set(reviewRecords.map(({ id }) => id)).size, reviewRecords.length)
assert.equal(new Set(reviewRecords.map(({ displayOrder }) => displayOrder)).size, reviewRecords.length)
assert.equal(reviewRecords.every(({ id }) => /^google-review-\d{3}$/.test(id)), true)
assert.equal(reviewRecords.every(({ text, reviewerDisplayName }) => text.trim().length > 0 && reviewerDisplayName.trim().length > 0), true)
assert.equal(reviewRecords.every(({ rating }) => rating === null || (Number.isInteger(rating) && rating >= 1 && rating <= 5)), true)
assert.equal(reviewRecords.filter(({ rating }) => rating === 5).length, 104)
assert.equal(reviewRecords.filter(({ rating }) => rating === 4).length, 1)
assert.equal(reviewRecords.filter(({ rating }) => rating === null).length, 1)
assert.equal(reviewRecords.every(({ date, verifiedCity }) => date === null && verifiedCity === null), true)
assert.equal(reviewRecords.every(({ source, provenance }) => source.profileId === 'google-business-profile' && source.directReviewUrl === null && provenance.text === 'legacy-approved' && provenance.category === 'legacy-approved' && provenance.city === 'not-recorded'), true)
assert.equal(reviewRecords.filter(({ text }) => text.replace(/\s+/g, ' ').trim() === 'Good job').length, 2)
assert.equal(new Set(reviewRecords.filter(({ text }) => text.replace(/\s+/g, ' ').trim() === 'Good job').map(({ reviewerDisplayName }) => reviewerDisplayName)).size, 2)

const integrityPayload = reviewRecords.map(({ reviewerDisplayName, text, rating, category }) => ({ reviewerDisplayName, text, rating, category }))
assert.equal(crypto.createHash('sha256').update(JSON.stringify(integrityPayload)).digest('hex'), 'a6a0bb0c430f00b6a23b90ebed6b799acd5486145e41177c15e6481251cae8ee')

assert.deepEqual(REVIEW_CATEGORIES.map(({ id }) => id), ['speed', 'lawn', 'quality', 'price', 'cleanup', 'customer', 'communication', 'professional', 'snow', 'mixed', 'other'])
const categoryCounts = getReviewCategoryCounts()
assert.deepEqual(categoryCounts, { all: 106, speed: 11, lawn: 10, quality: 9, price: 9, cleanup: 9, customer: 7, communication: 6, professional: 6, snow: 5, mixed: 20, other: 14 })
assert.deepEqual(REVIEW_CATEGORIES.filter(({ serviceRouteId }) => serviceRouteId !== null).map(({ serviceRouteId }) => serviceRouteId), ['service-lawn-mowing', 'service-yard-cleanup', 'service-snow-removal'])

assert.equal(HOME_REVIEW_LIMIT, 5)
assert.equal(getHomepageReviewRecords().length, 5)
assert.equal(getHomepageReviewRecords().every(({ homepageEligible }) => homepageEligible), true)
assert.equal(REVIEWS_INITIAL_COUNT, 9)
assert.equal(REVIEWS_BATCH_SIZE, 9)
assert.equal(getPublicReviewBatch('all', 0, REVIEWS_INITIAL_COUNT).length, 9)
assert.equal(getPublicReviewBatch('snow', 0, REVIEWS_BATCH_SIZE).length, 5)
assert.equal(getPublicReviewBatch('all', 99, REVIEWS_BATCH_SIZE).length, 7)
assert.equal(new Set([...getPublicReviewBatch('all', 0), ...getPublicReviewBatch('all', REVIEWS_BATCH_SIZE)].map(({ id }) => id)).size, REVIEWS_BATCH_SIZE * 2)
const publicNullRatingRecord = toPublicReviewItem(reviewRecords.find(({ rating }) => rating === null)!)
assert.equal('rating' in publicNullRatingRecord, false)
assert.equal('verifiedCity' in publicNullRatingRecord, false)

assert.equal(approvedBusinessFacts.reviewSummary.displayCopy, '170+ Google Reviews')
assert.equal(approvedBusinessFacts.reviewSummary.countPolicy, 'minimum-display-copy')
assert.equal(approvedBusinessFacts.reviewSummary.aggregateRatingStructuredData, 'prohibited')
assert.equal(site.googleBusinessProfileHref, approvedBusinessFacts.externalProfiles[0].href)

const pageSource = read('app/reviews/page.tsx')
const collectionServerSource = read('components/reviews-collection.tsx')
const collectionClientSource = read('components/ReviewsCollectionClient.tsx')
const homepageServerSource = read('components/homepage-testimonials.tsx')
const homepageClientSource = read('components/HomepageTestimonialsClient.tsx')
const serviceRendererSource = read('components/service-detail-page.tsx')
assert.equal(pageSource.match(/<h1\b/g)?.length, 1)
assert.match(pageSource, /routeId="reviews"/)
assert.match(pageSource, /buildRouteMetadata\(route\)/)
assert.match(pageSource, /site\.reviewSummary\.displayCopy/)
assert.match(pageSource, /site\.googleBusinessProfileHref/)
assert.match(pageSource, /routesById\['our-work'\]\.path/)
assert.match(pageSource, /routesById\.contact\.path/)
assert.match(collectionServerSource, /getPublicReviewBatch\('all', 0, REVIEWS_INITIAL_COUNT\)/)
assert.match(collectionClientSource, /aria-busy=\{loading\}/)
assert.match(collectionClientSource, /aria-pressed=\{active\}/)
assert.match(collectionClientSource, /collectionStatusRef\.current\?\.focus\(\)/)
assert.match(collectionClientSource, /ids\.has\(id\)/)
assert.doesNotMatch(collectionClientSource, /reviewRecords|getDisplayReviewRecords|legacyReviewRecords/)
assert.match(homepageServerSource, /getHomepageReviewRecords/)
assert.match(homepageClientSource, /data-review-mode="home"/)
assert.doesNotMatch(homepageClientSource, /reviewRecords|legacyReviewRecords|\brating\b|\bStar\b/)
assert.match(serviceRendererSource, /&ldquo;\{review\.quote\}&rdquo;/)
assert.equal(fs.existsSync(path.join(projectRoot, 'components/testimonials.tsx')), false)

for (const serviceFile of fs.readdirSync(path.join(projectRoot, 'content/services')).filter((name) => name.endsWith('.ts') && name !== 'types.ts' && name !== 'index.ts')) {
  const source = read(`content/services/${serviceFile}`)
  if (source.includes('reviews: {')) {
    assert.match(source, /getReviewExcerpt\('google-review-\d{3}'\)/)
    assert.doesNotMatch(source, /\n\s+quote:/)
  }
}

const sourceCorpus = [pageSource, collectionServerSource, collectionClientSource, homepageServerSource, homepageClientSource, read('content/reviews.ts'), read('lib/site.ts'), read('lib/es-translations.json')].join('\n')
assert.doesNotMatch(sourceCorpus, /160 customer reviews|View all 160 Google reviews|5\.0 on Google/)
assert.doesNotMatch(pageSource, /106 Google Reviews|reviewRecords\.length/)
assert.match(collectionClientSource, /feedback records shown/)
assert.doesNotMatch(pageSource, /Des Moines customer review|Ankeny review|Waukee review|Norwalk review|Altoona review/)

assert.equal(routesById.contact.implementationStatus, 'implemented')
assert.equal(routesById.contact.publicationStatus, 'published')
assert.equal(routesById.blog.implementationStatus, 'planned')
assert.equal(routesById.blog.publicationStatus, 'planned')
const sitemap = buildSitemapEntries()
assert.equal(sitemap.length, 22)
assert.equal(sitemap.at(-1)?.url, routesById.contact.canonicalUrl)
assert.equal(sitemap.filter(({ url }) => url === route.canonicalUrl).length, 1)
assert.equal(sitemap.filter(({ url }) => url === routesById.contact.canonicalUrl).length, 1)
assert.equal(sitemap.some(({ url }) => url.endsWith('/blog')), false)

const translations = JSON.parse(read('lib/es-translations.json')) as Record<string, string>
for (const english of [route.h1, 'Customer feedback · governed collection', 'View more reviews on Google', 'Browse by established theme', 'Customer voices, in their own words.', 'Filter customer feedback', 'All feedback', 'Load more reviews', 'Use service pages for approved scope.', 'See the work, then discuss what you need.']) assert(translations[english], `Missing Reviews Spanish translation: ${english}`)

const planSource = read('plan.md')
assert.match(planSource, /### Task 25 — Reviews Page and Review Data Governance\n\n- \*\*Status:\*\* `\[x\]` Completed/)
assert.match(planSource, /### Task 26 — Contact Page and Estimate Integration\n\n- \*\*Status:\*\* `\[x\]` Completed/)

console.log(`Task 25 Reviews validation passed: exact ownership, ${reviewRecords.length} governed/display-eligible records, ${HOME_REVIEW_LIMIT} Homepage records, bounded ${REVIEWS_INITIAL_COUNT}-item SSR, ${REVIEW_CATEGORIES.length} governed categories, rating/count restraint, and exact 22-URL lifecycle.`)
