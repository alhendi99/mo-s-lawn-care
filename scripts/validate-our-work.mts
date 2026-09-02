import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

import {
  HOME_COMPARISON_LIMIT,
  HOME_WORK_LIMIT,
  OUR_WORK_INITIAL_COUNT,
  WORK_ALT_TEXT,
  WORK_BATCH_SIZE,
  WORK_SERVICE_TAGS,
  getHomepageWorkRecords,
  getOurWorkRecords,
  getPublicWorkBatch,
  getWorkComparisons,
  workComparisons,
  workRecords,
} from '../content/projects.ts'
import { getBreadcrumbItems, routesById } from '../content/routes.ts'
import { buildRouteMetadata, buildSitemapEntries } from '../lib/metadata.ts'
import { buildPageStructuredData } from '../lib/structured-data.ts'

const projectRoot = process.cwd()
const read = (relativePath: string) => fs.readFileSync(path.join(projectRoot, relativePath), 'utf8')
const route = routesById['our-work']

assert.equal(route.path, '/our-work')
assert.equal(route.primaryKeyword, 'lawn care projects des moines')
assert.deepEqual(route.secondaryKeywords, [
  'landscaping projects Des Moines',
  'lawn care before and after Des Moines',
  'lawn care gallery Des Moines',
  'yard cleanup before after',
])
assert.equal(route.title, "Lawn Care & Landscaping Projects in Des Moines | Mo's")
assert.equal(route.h1, 'Lawn Care & Landscaping Work Across the Des Moines Metro')
assert.equal(route.description, "See lawn care, landscaping, cleanup and snow removal work from Mo's across the Des Moines metro, including before-and-after property transformations.")
assert.equal(route.canonicalUrl, 'https://www.moslawncaredsm.com/our-work')
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
assert.equal(countType('ImageObject'), 0)
for (const forbidden of ['LocalBusiness', 'Review', 'AggregateRating', 'Offer', 'Product', 'Place']) assert.equal(countType(forbidden), 0)
const visibleBreadcrumbs = getBreadcrumbItems(route.id)
assert.deepEqual(visibleBreadcrumbs.map(({ label }) => label), ['Home', 'Our Work'])
assert.deepEqual(visibleBreadcrumbs.map(({ href }) => href), ['/', '/our-work'])
const breadcrumb = graph['@graph'].find(({ '@type': type }) => type === 'BreadcrumbList')
assert(breadcrumb)
const schemaBreadcrumbs = breadcrumb.itemListElement as readonly Record<string, unknown>[]
assert.deepEqual(schemaBreadcrumbs.map(({ name }) => name), ['Home', 'Our Work'])
assert.deepEqual(schemaBreadcrumbs.map(({ item }) => item), [routesById.home.canonicalUrl, route.canonicalUrl])

assert.equal(workRecords.length, 92)
assert.equal(new Set(workRecords.map(({ id }) => id)).size, workRecords.length)
assert.equal(new Set(workRecords.map(({ src }) => src)).size, workRecords.length)
assert.equal(new Set(workRecords.map(({ displayOrder }) => displayOrder)).size, workRecords.length)
assert.equal(workRecords.every(({ width, height }) => width > 0 && height > 0), true)
assert.equal(workRecords.every(({ mediaType }) => mediaType === 'image'), true)
assert.equal(workRecords.every(({ verifiedCity }) => verifiedCity === null), true)
assert.equal(workRecords.every(({ imageObjectEligible }) => imageObjectEligible === false), true)
assert.equal(workRecords.every(({ provenance }) => provenance.authorship === 'unverified' && provenance.service === 'unverified' && provenance.city === 'unverified'), true)
const allowedTags = new Set(WORK_SERVICE_TAGS)
for (const record of workRecords) {
  assert.equal(record.serviceTags.every((tag) => allowedTags.has(tag)), true)
  const alt = WORK_ALT_TEXT[record.altKey]
  assert(alt.en.trim() && alt.es.trim(), `Missing bilingual alt: ${record.id}`)
  assert.doesNotMatch(`${alt.en} ${alt.es}`.toLowerCase(), /mo's lawn care|des moines project|customer property|completed by|transformed by/)
}

const homeRecords = getHomepageWorkRecords()
const fullRecords = getOurWorkRecords()
assert.equal(HOME_WORK_LIMIT, 8)
assert.equal(homeRecords.length, 8)
assert.equal(homeRecords.every(({ homepageEligible }) => homepageEligible), true)
assert.equal(OUR_WORK_INITIAL_COUNT, 12)
assert.equal(WORK_BATCH_SIZE, 12)
assert.equal(fullRecords.length, 89)
assert.equal(fullRecords.every(({ displayEligible }) => displayEligible), true)
assert.equal(workRecords.filter(({ displayEligible }) => !displayEligible).length, 3)
assert.equal(getPublicWorkBatch(0).length, WORK_BATCH_SIZE)
assert.equal(getPublicWorkBatch(WORK_BATCH_SIZE).length, WORK_BATCH_SIZE)
assert.equal(new Set([...getPublicWorkBatch(0), ...getPublicWorkBatch(WORK_BATCH_SIZE)].map(({ id }) => id)).size, WORK_BATCH_SIZE * 2)
assert.equal(getPublicWorkBatch(fullRecords.length - 5).length, 5)

assert.equal(workComparisons.length, 6)
assert.equal(getWorkComparisons('home').length, HOME_COMPARISON_LIMIT)
assert.equal(getWorkComparisons('full').length, 6)
const recordsById = new Map(workRecords.map((record) => [record.id, record]))
const pairedRecordIds = new Set<string>()
for (const pair of workComparisons) {
  assert.notEqual(pair.beforeId, pair.afterId)
  const before = recordsById.get(pair.beforeId)
  const after = recordsById.get(pair.afterId)
  assert(before && after, `Unresolved pair: ${pair.id}`)
  assert.deepEqual(before.comparison, { id: pair.id, side: 'before' })
  assert.deepEqual(after.comparison, { id: pair.id, side: 'after' })
  assert.equal(pairedRecordIds.has(before.id), false)
  assert.equal(pairedRecordIds.has(after.id), false)
  pairedRecordIds.add(before.id)
  pairedRecordIds.add(after.id)
}
assert.equal(workComparisons.some(({ id }) => String(id) === 'comparison-02'), false)
assert.equal(recordsById.get('comparison-asset-before-02')?.displayEligible, false)

const pageSource = read('app/our-work/page.tsx')
const galleryServerSource = read('components/gallery.tsx')
const galleryClientSource = read('components/GalleryClient.tsx')
const comparisonServerSource = read('components/before-after-slider.tsx')
const comparisonClientSource = read('components/BeforeAfterSliderClient.tsx')
const siteSource = read('lib/site.ts')
assert.equal(pageSource.match(/<h1\b/g)?.length, 1)
assert.match(pageSource, /routeId="our-work"/)
assert.match(pageSource, /buildRouteMetadata\(route\)/)
assert.match(pageSource, /<Gallery mode="full" \/>/)
assert.match(pageSource, /<BeforeAfterSlider mode="full" \/>/)
assert.match(galleryServerSource, /getHomepageWorkRecords/)
assert.match(galleryServerSource, /getOurWorkRecords/)
assert.match(galleryServerSource, /slice\(0, OUR_WORK_INITIAL_COUNT\)/)
assert.match(comparisonServerSource, /getWorkComparisons\(mode\)/)
assert.doesNotMatch(galleryClientSource, /workRecords|getOurWorkRecords|lh3\.googleusercontent/)
assert.match(galleryClientSource, /collectionStatusRef\.current\?\.focus\(\)/)
assert.match(galleryClientSource, /aria-busy=\{loading\}/)
assert.doesNotMatch(comparisonClientSource, /workRecords|getWorkComparisons|lh3\.googleusercontent/)
assert.doesNotMatch(siteSource, /export const projects|before2\.webp|Landscaping \/ Lawn Restoration/)
assert.equal(fs.existsSync(path.join(projectRoot, 'data/all_image_urls.txt')), false)

for (const routeId of ['service-lawn-mowing', 'service-landscaping', 'service-yard-cleanup', 'service-snow-removal', 'reviews', 'contact'] as const) {
  assert(pageSource.includes(`'${routeId}'`) || pageSource.includes(`.${routeId}.`), `Missing required link: ${routeId}`)
}
assert.equal(routesById.reviews.implementationStatus, 'implemented')
assert.equal(routesById.reviews.publicationStatus, 'published')
assert.equal(routesById.contact.implementationStatus, 'implemented')
assert.equal(routesById.contact.publicationStatus, 'published')
assert.equal(routesById.blog.implementationStatus, 'implemented')
assert.equal(routesById.blog.publicationStatus, 'published')

const sitemap = buildSitemapEntries()
assert.equal(sitemap.length, 29)
assert.equal(sitemap.some(({ url }) => url.endsWith('/reviews')), true)
assert.equal(sitemap.some(({ url }) => url.endsWith('/contact')), true)
assert.equal(sitemap.some(({ url }) => url.endsWith('/blog')), true)

for (const phrase of ['landscaping projects in des moines', 'lawn care gallery in des moines', 'yard cleanup before-and-after']) {
  assert(pageSource.toLowerCase().includes(phrase), `Missing natural secondary coverage: ${phrase}`)
}
assert.doesNotMatch(`${pageSource}\n${galleryClientSource}`.toLowerCase(), /des moines project|ankeny project|waukee project|norwalk project|altoona project|our project|completed by mo's|transformed by mo's|customer property/)

const translations = JSON.parse(read('lib/es-translations.json')) as Record<string, string>
for (const english of [
  route.h1,
  'Governed visual archive · Des Moines metro',
  'Browse the gallery',
  'See before and after',
  'Verified before-and-after pairings.',
  'Full governed collection',
  'Browse the visual archive.',
  'Load more work',
  'Before view',
  'After view',
  'Before and after comparisons',
]) assert(translations[english], `Missing Our Work Spanish translation: ${english}`)

const planSource = read('plan.md')
assert.match(planSource, /### Task 25 — Reviews Page and Review Data Governance\n\n- \*\*Status:\*\* `\[x\]` Completed/)

console.log(`Task 24 Our Work validation passed: exact ownership, ${workRecords.length} governed records, ${fullRecords.length} display-eligible images, ${workComparisons.length} verified pairs, bounded ${OUR_WORK_INITIAL_COUNT}-item SSR, zero ImageObjects, and current 29-URL lifecycle.`)
