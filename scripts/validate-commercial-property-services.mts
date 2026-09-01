import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

import {
  commercialServiceGroups,
  commercialServiceItems,
  commercialSupportingRouteLinks,
} from '../content/commercial-property-services.ts'
import { getBreadcrumbItems, routeRegistry, routesById } from '../content/routes.ts'
import { publishedServiceDetails } from '../content/services/index.ts'
import { buildRouteMetadata, buildSitemapEntries } from '../lib/metadata.ts'
import { buildPageStructuredData, type StructuredDataNode } from '../lib/structured-data.ts'

const projectRoot = process.cwd()
const read = (relativePath: string) => fs.readFileSync(path.join(projectRoot, relativePath), 'utf8')
const route = routesById['commercial-property-services']

assert.equal(route.path, '/commercial-property-services')
assert.equal(route.primaryKeyword, 'commercial lawn care des moines ia')
assert.deepEqual(route.secondaryKeywords, [
  'commercial grounds maintenance Des Moines',
  'commercial property maintenance Des Moines',
  'commercial landscaping Des Moines',
  'commercial lawn service Des Moines',
])
assert.equal(route.title, "Commercial Lawn Care in Des Moines, IA | Mo's Lawn Care")
assert.equal(route.h1, 'Commercial Lawn Care & Property Services in Des Moines')
assert.equal(
  route.description,
  "Commercial lawn care, cleanup, landscaping and snow removal for Des Moines properties. Build a dependable property maintenance plan with Mo's Lawn Care.",
)
assert.equal(route.canonicalUrl, 'https://www.moslawncaredsm.com/commercial-property-services')
assert.equal(route.implementationStatus, 'implemented')
assert.equal(route.publicationStatus, 'published')
assert.equal(route.indexability, 'indexable')

const metadata = buildRouteMetadata(route)
assert.equal(metadata.title, route.title)
assert.equal(metadata.description, route.description)
assert.equal(metadata.alternates?.canonical, route.canonicalUrl)
assert.equal((metadata.robots as { index?: boolean }).index, true)

const expectedServiceIds = [
  'service-lawn-mowing',
  'service-aeration-overseeding',
  'service-fertilization-weed-control',
  'service-landscaping',
  'service-flower-bed-maintenance',
  'service-grading',
  'service-yard-cleanup',
  'service-spring-cleanup',
  'service-fall-cleanup-leaf-removal',
  'service-snow-removal',
] as const
const expectedServiceNames = [
  'Lawn Mowing',
  'Aeration & Seeding',
  'Fertilization & Weed Control',
  'Landscaping',
  'Flower Bed Maintenance',
  'Grading',
  'Yard Cleanup',
  'Spring Cleanup',
  'Fall Cleanup & Leaf Removal',
  'Snow Removal',
]
const registryServiceIds = [
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
] as const

assert.equal(publishedServiceDetails.length, 10)
assert.deepEqual(commercialServiceItems.map(({ routeId }) => routeId), expectedServiceIds)
assert.deepEqual(commercialServiceItems.map(({ name }) => name), expectedServiceNames)
assert.deepEqual(commercialServiceItems.map(({ position }) => position), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
assert.equal(new Set(commercialServiceItems.map(({ routeId }) => routeId)).size, 10)
assert.equal(new Set(commercialServiceItems.map(({ href }) => href)).size, 10)
assert.deepEqual(
  commercialServiceItems.map(({ href }) => href),
  expectedServiceIds.map((id) => routesById[id].path),
)
assert(commercialServiceItems.every(({ summary }) => summary.length >= 70 && summary.length <= 130))
assert(commercialServiceItems.every(({ evidence }) => /approved .*explicit/i.test(evidence)))
assert.deepEqual(commercialServiceGroups.map(({ name }) => name), [
  'Lawn care',
  'Outdoor spaces',
  'Cleanup',
  'Winter',
])

const serviceFiles = new Map(expectedServiceIds.map((id) => {
  const slug = routesById[id].path.split('/').at(-1)
  return [id, `content/services/${slug}.ts`] as const
}))
for (const item of commercialServiceItems) {
  const sourcePath = serviceFiles.get(item.routeId)
  assert(sourcePath)
  const source = read(sourcePath)
  assert.match(source, /residential:/, `Missing residential record: ${item.name}`)
  assert.match(source, /commercial:/, `Missing commercial record: ${item.name}`)
  assert.match(source, /commercial propert|commercial mowing is available|commercial outdoor spaces/i, `No explicit approved commercial evidence: ${item.name}`)
  assert.equal(routesById[item.routeId].publicationStatus, 'published')
}

for (const metadataBackedId of [
  'service-lawn-mowing',
  'service-landscaping',
  'service-snow-removal',
] as const) {
  assert.match(routesById[metadataBackedId].description, /commercial/)
}

const itemListNode: StructuredDataNode = {
  '@type': 'ItemList',
  '@id': `${route.canonicalUrl}#commercial-service-list`,
  name: 'Verified commercial property services',
  numberOfItems: commercialServiceItems.length,
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: commercialServiceItems.map((service) => ({
    '@type': 'ListItem',
    position: service.position,
    name: service.name,
    item: service.canonicalUrl,
  })),
}
const graph = buildPageStructuredData(route, routesById.home, [itemListNode])
const webPages = graph['@graph'].filter(({ '@type': type }) => type === 'WebPage')
const itemLists = graph['@graph'].filter(({ '@type': type }) => type === 'ItemList')
const breadcrumbs = graph['@graph'].filter(({ '@type': type }) => type === 'BreadcrumbList')
assert.equal(webPages.length, 1)
assert.equal(itemLists.length, 1)
assert.equal(breadcrumbs.length, 1)
assert.equal(graph['@graph'].some(({ '@type': type }) => type === 'CollectionPage'), false)
assert.equal(graph['@graph'].some(({ '@type': type }) => type === 'Service'), false)

const schemaItems = itemLists[0].itemListElement as readonly Record<string, unknown>[]
assert.equal(schemaItems.length, commercialServiceItems.length)
assert.deepEqual(schemaItems.map(({ position }) => position), commercialServiceItems.map(({ position }) => position))
assert.deepEqual(schemaItems.map(({ name }) => name), commercialServiceItems.map(({ name }) => name))
assert.deepEqual(schemaItems.map(({ item }) => item), commercialServiceItems.map(({ canonicalUrl }) => canonicalUrl))

const visibleBreadcrumbs = getBreadcrumbItems(route.id)
assert.deepEqual(visibleBreadcrumbs.map(({ label }) => label), ['Home', 'Commercial Property Services'])
const schemaBreadcrumbs = breadcrumbs[0].itemListElement as readonly Record<string, unknown>[]
assert.deepEqual(schemaBreadcrumbs.map(({ name }) => name), visibleBreadcrumbs.map(({ label }) => label))
assert.deepEqual(schemaBreadcrumbs.map(({ position }) => position), [1, 2])

assert.deepEqual(commercialSupportingRouteLinks.map(({ routeId, href }) => [routeId, href]), [
  ['service-areas', '/service-areas'],
  ['our-work', '/our-work'],
  ['reviews', '/reviews'],
  ['contact', '/contact'],
])
assert.equal(routesById['service-areas'].implementationStatus, 'implemented')
assert.equal(routesById['service-areas'].publicationStatus, 'published')
assert.equal(routesById.contact.implementationStatus, 'implemented')
assert.equal(routesById.contact.publicationStatus, 'published')

const publishedIds = routeRegistry
  .filter(({ publicationStatus }) => publicationStatus === 'published')
  .map(({ id }) => id)
assert.deepEqual(publishedIds, ['home', 'services', ...registryServiceIds, 'commercial-property-services', 'service-areas', 'service-area-ankeny', 'service-area-waukee', 'service-area-norwalk', 'service-area-altoona', 'about', 'our-work', 'reviews', 'contact', 'blog'])
assert.equal(publishedIds.length, 23)
assert.equal(routeRegistry.filter(({ publicationStatus }) => publicationStatus === 'published').length, 23)

const expectedSitemap = ['home', 'services', ...registryServiceIds, 'commercial-property-services', 'service-areas', 'service-area-ankeny', 'service-area-waukee', 'service-area-norwalk', 'service-area-altoona', 'about', 'our-work', 'reviews', 'contact', 'blog', 'article-when-to-aerate-lawn-iowa', 'article-best-time-to-overseed-lawn-iowa'] as const
assert.deepEqual(buildSitemapEntries(), expectedSitemap.map((id) => ({ url: routesById[id].canonicalUrl })))

for (const alias of [
  '/commercial-lawn-care',
  '/commercial-landscaping',
  '/commercial-property-maintenance',
  '/commercial-grounds-maintenance',
  '/commercial-lawn-service',
  '/services/commercial-lawn-care',
  '/services/commercial-landscaping',
  '/services/commercial-property-services',
]) {
  assert.equal(routeRegistry.some(({ path: registeredPath }) => registeredPath === alias), false, `Commercial alias is registered: ${alias}`)
}

const pageSource = read('app/commercial-property-services/page.tsx')
const contentSource = read('content/commercial-property-services.ts')
assert.equal(pageSource.match(/<h1\b/g)?.length, 1)
assert.match(pageSource, /routeId="commercial-property-services"/)
assert.match(pageSource, /commercialServiceItems\.filter/)
assert.match(pageSource, /commercialServiceItems\.map/)
assert.match(pageSource, /structuredDataNodes=\{\[itemListStructuredData\]\}/)
assert.doesNotMatch(pageSource, /use client|gtag|generate_lead|form_start|form_submit_error|<Image|<video/)
assert.doesNotMatch(contentSource, /sourceLabel|quote:|reviewer|client logo|portfolio company name/i)

const visibleCopy = `${pageSource}\n${contentSource}`.toLowerCase()
for (const requiredPhrase of [
  'commercial lawn care in des moines, ia',
  'commercial grounds maintenance in des moines',
  'commercial property maintenance in des moines',
  'commercial landscaping in des moines',
  'commercial lawn service in des moines',
]) {
  assert(visibleCopy.includes(requiredPhrase), `Missing commercial phrase: ${requiredPhrase}`)
}
for (const unsupportedClaim of [
  'property maintenance plan product',
  'maintenance contract',
  'annual contract',
  'seasonal agreement',
  'service-level agreement',
  'scheduled weekly service',
  'automatic scheduling',
  'dedicated crew',
  'commercial crew',
  'equipment fleet',
  '24/7 service',
  'emergency response',
  'same-day response',
  'guaranteed response',
  'commercial clients served',
  'properties maintained',
  'acres maintained',
  'office park',
  'apartment complex',
  'retail center',
  'warehouse',
  'industrial facility',
  'commercial portfolio',
  'client logo',
  'guaranteed curb appeal',
]) {
  assert.equal(visibleCopy.includes(unsupportedClaim), false, `Unsupported claim: ${unsupportedClaim}`)
}

const serializedGraph = JSON.stringify(graph).toLowerCase()
for (const forbiddenSchemaTerm of [
  'service"',
  'offercatalog',
  'product',
  'offer',
  'price',
  'review',
  'aggregaterating',
  'localbusiness',
  'address',
  'geo',
]) {
  assert.equal(serializedGraph.includes(forbiddenSchemaTerm), false, `Forbidden schema term: ${forbiddenSchemaTerm}`)
}

const serviceBodies = publishedServiceDetails.map((service) => JSON.stringify(service).toLowerCase())
const summaries = commercialServiceItems.map(({ summary }) => summary.toLowerCase())
for (const summary of summaries) {
  assert(serviceBodies.every((body) => !body.includes(summary)), `Commercial summary duplicates a service body: ${summary}`)
}

const spanish = JSON.parse(read('lib/es-translations.json')) as Record<string, string>
for (const source of [route.h1, ...commercialServiceItems.flatMap(({ group, summary }) => [group, summary])]) {
  assert(spanish[source], `Missing Spanish translation: ${source}`)
}

console.log(
  `Task 17 Commercial Property Services validation passed: ${commercialServiceItems.length} evidence-backed services, exact WebPage/ItemList/BreadcrumbList parity, current sitemap lifecycle, and published city routes preserved.`,
)
