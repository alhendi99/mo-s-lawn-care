import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

import {
  getBreadcrumbItems,
  routeLabels,
  routeRegistry,
  routesById,
  serviceNavigationRouteIds,
} from '../content/routes.ts'
import {
  servicesIndexItems,
  servicesIndexSupportingLinks,
} from '../content/services/index.ts'
import { buildRouteMetadata, buildSitemapEntries } from '../lib/metadata.ts'
import { buildPageStructuredData, type StructuredDataNode } from '../lib/structured-data.ts'

const projectRoot = process.cwd()
const read = (relativePath: string) => fs.readFileSync(path.join(projectRoot, relativePath), 'utf8')
const servicesRoute = routesById.services

assert.equal(servicesRoute.title, "Lawn Care Services in Des Moines, IA | Mo's Lawn Care")
assert.equal(servicesRoute.h1, 'Lawn Care Services for Des Moines Properties')
assert.equal(
  servicesRoute.description,
  "Explore Mo's Lawn Care services in Des Moines, including mowing, aeration and seeding, weed control, landscaping, cleanups, grading and snow removal.",
)
assert.equal(servicesRoute.canonicalUrl, 'https://www.moslawncaredsm.com/services')
assert.equal(servicesRoute.primaryKeyword, 'lawn care services des moines ia')
assert.equal(servicesRoute.implementationStatus, 'implemented')
assert.equal(servicesRoute.publicationStatus, 'published')

const metadata = buildRouteMetadata(servicesRoute)
assert.equal(metadata.title, servicesRoute.title)
assert.equal(metadata.description, servicesRoute.description)
assert.equal(metadata.alternates?.canonical, servicesRoute.canonicalUrl)
assert.equal((metadata.robots as { index?: boolean }).index, true)

const expectedNames = [
  'Lawn Mowing',
  'Aeration & Seeding',
  'Fertilization & Weed Control',
  'Landscaping',
  'Flower Bed Maintenance',
  'Yard Cleanup',
  'Spring Cleanup',
  'Fall Cleanup & Leaf Removal',
  'Grading',
  'Snow Removal',
]
const expectedHrefs = [
  '/services/lawn-mowing',
  '/services/aeration-overseeding',
  '/services/fertilization-weed-control',
  '/services/landscaping',
  '/services/flower-bed-maintenance',
  '/services/yard-cleanup',
  '/services/spring-cleanup',
  '/services/fall-cleanup-leaf-removal',
  '/services/grading',
  '/services/snow-removal',
]

assert.equal(servicesIndexItems.length, 10)
assert.deepEqual(servicesIndexItems.map(({ id }) => id), serviceNavigationRouteIds)
assert.deepEqual(servicesIndexItems.map(({ name }) => name), expectedNames)
assert.deepEqual(servicesIndexItems.map(({ href }) => href), expectedHrefs)
assert.deepEqual(servicesIndexItems.map(({ position }) => position), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
assert.equal(new Set(servicesIndexItems.map(({ href }) => href)).size, 10)
assert(servicesIndexItems.every(({ summary }) => summary.length >= 60))

const itemListNode: StructuredDataNode = {
  '@type': 'ItemList',
  '@id': `${servicesRoute.canonicalUrl}#service-list`,
  name: 'Lawn care services for Des Moines properties',
  numberOfItems: servicesIndexItems.length,
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: servicesIndexItems.map((service) => ({
    '@type': 'ListItem',
    position: service.position,
    name: service.name,
    item: service.canonicalUrl,
  })),
}
const graph = buildPageStructuredData(servicesRoute, routesById.home, [itemListNode])
const collectionPage = graph['@graph'].find(({ '@id': id }) => id === `${servicesRoute.canonicalUrl}#webpage`)
const itemList = graph['@graph'].find(({ '@type': type }) => type === 'ItemList')
const breadcrumb = graph['@graph'].find(({ '@type': type }) => type === 'BreadcrumbList')
assert.equal(collectionPage?.['@type'], 'CollectionPage')
assert(itemList)
assert(breadcrumb)

const schemaItems = itemList.itemListElement as readonly Record<string, unknown>[]
assert.equal(schemaItems.length, 10)
assert.deepEqual(schemaItems.map(({ position }) => position), servicesIndexItems.map(({ position }) => position))
assert.deepEqual(schemaItems.map(({ name }) => name), servicesIndexItems.map(({ name }) => name))
assert.deepEqual(schemaItems.map(({ item }) => item), servicesIndexItems.map(({ canonicalUrl }) => canonicalUrl))

const visibleBreadcrumbs = getBreadcrumbItems('services')
assert.deepEqual(visibleBreadcrumbs.map(({ label }) => label), ['Home', 'Services'])
const schemaBreadcrumbs = breadcrumb.itemListElement as readonly Record<string, unknown>[]
assert.deepEqual(schemaBreadcrumbs.map(({ name }) => name), visibleBreadcrumbs.map(({ label }) => label))
assert.deepEqual(schemaBreadcrumbs.map(({ position }) => position), [1, 2])

assert.deepEqual(
  servicesIndexSupportingLinks.map(({ id, href }) => [id, href]),
  [
    ['commercial-property-services', '/commercial-property-services'],
    ['service-areas', '/service-areas'],
    ['contact', '/contact'],
  ],
)

const prohibitedPaths = [
  '/services/ground-clearance',
  '/services/leaves-removal',
  '/services/residential',
]
for (const prohibitedPath of prohibitedPaths) {
  assert(!routeRegistry.some(({ path }) => path === prohibitedPath), `Prohibited route exists: ${prohibitedPath}`)
}
assert(
  routeRegistry.every(({ path }) => !/^\/services\/[^/]+\/(?:des-moines|ankeny|waukee|norwalk|altoona)(?:-ia)?$/.test(path)),
  'A prohibited city/service combination is registered',
)

const servicesRouteFiles = fs.readdirSync(path.join(projectRoot, 'app/services'), { recursive: true })
  .map(String)
  .filter((file) => file.endsWith('.tsx') || file.endsWith('.ts'))
assert.deepEqual(servicesRouteFiles.sort(), ['[slug]/page.tsx', 'page.tsx'])

const pageSource = read('app/services/page.tsx')
assert.equal(pageSource.match(/<h1\b/g)?.length, 1)
assert.match(pageSource, /<InteriorPageShell routeId="services"/)
assert.match(pageSource, /servicesIndexItems\.map/)
assert.doesNotMatch(pageSource, /use client/)
assert.doesNotMatch(pageSource, /gtag|generate_lead|form_start|form_submit_error/)

assert.deepEqual(buildSitemapEntries(), [
  { url: routesById.home.canonicalUrl },
  { url: servicesRoute.canonicalUrl },
  { url: routesById['service-lawn-mowing'].canonicalUrl },
  { url: routesById['service-aeration-overseeding'].canonicalUrl },
  { url: routesById['service-fertilization-weed-control'].canonicalUrl },
  { url: routesById['service-landscaping'].canonicalUrl },
  { url: routesById['service-flower-bed-maintenance'].canonicalUrl },
  { url: routesById['service-yard-cleanup'].canonicalUrl },
  { url: routesById['service-spring-cleanup'].canonicalUrl },
  { url: routesById['service-fall-cleanup-leaf-removal'].canonicalUrl },
  { url: routesById['service-grading'].canonicalUrl },
  { url: routesById['service-snow-removal'].canonicalUrl },
  { url: routesById['commercial-property-services'].canonicalUrl },
  { url: routesById['service-areas'].canonicalUrl },
])
assert.equal(routeLabels.services, 'Services')

console.log(
  `Task 6 Services Index validation passed: ${servicesIndexItems.length} canonical services, ${servicesIndexSupportingLinks.length} supporting hubs, CollectionPage/ItemList/BreadcrumbList parity, and no prohibited service variants.`,
)
