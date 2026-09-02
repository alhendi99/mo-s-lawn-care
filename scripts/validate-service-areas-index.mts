import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

import { getBreadcrumbItems, routeRegistry, routesById } from '../content/routes.ts'
import {
  serviceAreaHubItems,
  serviceAreaSupportingRouteLinks,
} from '../content/service-areas.ts'
import { buildRouteMetadata, buildSitemapEntries } from '../lib/metadata.ts'
import {
  buildPageStructuredData,
  type StructuredDataNode,
} from '../lib/structured-data.ts'

const projectRoot = process.cwd()
const read = (relativePath: string) => fs.readFileSync(path.join(projectRoot, relativePath), 'utf8')
const route = routesById['service-areas']

assert.equal(route.path, '/service-areas')
assert.equal(route.primaryKeyword, 'lawn care des moines metro')
assert.deepEqual(route.secondaryKeywords, [
  'lawn care service areas Des Moines',
  'lawn care near Des Moines',
  'Des Moines metro lawn service',
])
assert.equal(route.title, "Lawn Care Service Areas Near Des Moines, IA | Mo's Lawn Care")
assert.equal(route.h1, 'Lawn Care Across the Des Moines Metro')
assert.equal(
  route.description,
  "Mo's Lawn Care serves Des Moines, Ankeny, Waukee, Norwalk and Altoona with lawn care, landscaping, seasonal cleanups and snow removal.",
)
assert.equal(route.canonicalUrl, 'https://www.moslawncaredsm.com/service-areas')
assert.equal(route.implementationStatus, 'implemented')
assert.equal(route.publicationStatus, 'published')
assert.equal(route.indexability, 'indexable')

const metadata = buildRouteMetadata(route)
assert.equal(metadata.title, route.title)
assert.equal(metadata.description, route.description)
assert.equal(metadata.alternates?.canonical, route.canonicalUrl)
assert.equal((metadata.robots as { index?: boolean }).index, true)

const expectedAreaIds = [
  'home',
  'service-area-ankeny',
  'service-area-waukee',
  'service-area-norwalk',
  'service-area-altoona',
] as const
const expectedNames = ['Des Moines', 'Ankeny', 'Waukee', 'Norwalk', 'Altoona']
const expectedHrefs = [
  '/',
  '/service-areas/ankeny-ia',
  '/service-areas/waukee-ia',
  '/service-areas/norwalk-ia',
  '/service-areas/altoona-ia',
]

assert.equal(serviceAreaHubItems.length, 5)
assert.deepEqual(serviceAreaHubItems.map(({ routeId }) => routeId), expectedAreaIds)
assert.deepEqual(serviceAreaHubItems.map(({ name }) => name), expectedNames)
assert.deepEqual(serviceAreaHubItems.map(({ href }) => href), expectedHrefs)
assert.deepEqual(serviceAreaHubItems.map(({ position }) => position), [1, 2, 3, 4, 5])
assert.equal(new Set(serviceAreaHubItems.map(({ routeId }) => routeId)).size, 5)
assert.equal(new Set(serviceAreaHubItems.map(({ href }) => href)).size, 5)
assert.equal(serviceAreaHubItems[0].href, '/')
assert.equal(serviceAreaHubItems.slice(1).length, 4)

assert.equal(routesById['service-area-ankeny'].implementationStatus, 'implemented')
assert.equal(routesById['service-area-ankeny'].publicationStatus, 'published')
assert.equal(routesById['service-area-ankeny'].indexability, 'indexable')
assert.equal(routesById['service-area-waukee'].implementationStatus, 'implemented')
assert.equal(routesById['service-area-waukee'].publicationStatus, 'published')
assert.equal(routesById['service-area-waukee'].indexability, 'indexable')
assert.equal(routesById['service-area-norwalk'].implementationStatus, 'implemented')
assert.equal(routesById['service-area-norwalk'].publicationStatus, 'published')
assert.equal(routesById['service-area-norwalk'].indexability, 'indexable')
assert.equal(routesById['service-area-altoona'].implementationStatus, 'implemented')
assert.equal(routesById['service-area-altoona'].publicationStatus, 'published')
assert.equal(routesById['service-area-altoona'].indexability, 'indexable')
assert.equal(routesById.contact.implementationStatus, 'implemented')
assert.equal(routesById.contact.publicationStatus, 'published')
assert.deepEqual(serviceAreaSupportingRouteLinks.map(({ routeId, href }) => [routeId, href]), [
  ['services', '/services'],
  ['contact', '/contact'],
])

const itemListNode: StructuredDataNode = {
  '@type': 'ItemList',
  '@id': `${route.canonicalUrl}#area-list`,
  name: 'Mo’s Lawn Care service areas',
  numberOfItems: serviceAreaHubItems.length,
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: serviceAreaHubItems.map((area) => ({
    '@type': 'ListItem',
    position: area.position,
    name: area.name,
    item: area.canonicalUrl,
  })),
}
const graph = buildPageStructuredData(route, routesById.home, [itemListNode])
const typeCount = (expected: string) => graph['@graph'].filter(({ '@type': type }) =>
  Array.isArray(type) ? type.includes(expected) : type === expected,
).length
assert.equal(typeCount('CollectionPage'), 1)
assert.equal(typeCount('ItemList'), 1)
assert.equal(typeCount('BreadcrumbList'), 1)
assert.equal(typeCount('Organization'), 1)

for (const forbiddenType of [
  'LocalBusiness',
  'Service',
  'Offer',
  'OfferCatalog',
  'Review',
  'AggregateRating',
  'PostalAddress',
]) {
  assert.equal(typeCount(forbiddenType), 0, `Forbidden schema type: ${forbiddenType}`)
}

const schemaItemList = graph['@graph'].find(({ '@type': type }) => type === 'ItemList')
assert(schemaItemList)
const schemaItems = schemaItemList.itemListElement as readonly Record<string, unknown>[]
assert.equal(schemaItemList.numberOfItems, 5)
assert.deepEqual(schemaItems.map(({ position }) => position), [1, 2, 3, 4, 5])
assert.deepEqual(schemaItems.map(({ name }) => name), expectedNames)
assert.deepEqual(schemaItems.map(({ item }) => item), serviceAreaHubItems.map(({ canonicalUrl }) => canonicalUrl))

const visibleBreadcrumbs = getBreadcrumbItems(route.id)
assert.deepEqual(visibleBreadcrumbs.map(({ label }) => label), ['Home', 'Service Areas'])
assert.deepEqual(visibleBreadcrumbs.map(({ href }) => href), ['/', '/service-areas'])
const breadcrumbNode = graph['@graph'].find(({ '@type': type }) => type === 'BreadcrumbList')
assert(breadcrumbNode)
const schemaBreadcrumbs = breadcrumbNode.itemListElement as readonly Record<string, unknown>[]
assert.deepEqual(schemaBreadcrumbs.map(({ name }) => name), ['Home', 'Service Areas'])
assert.deepEqual(schemaBreadcrumbs.map(({ position }) => position), [1, 2])

const forbiddenSchemaKeys = new Set(['address', 'geo', 'latitude', 'longitude', 'price', 'priceRange'])
function assertNoForbiddenKeys(value: unknown) {
  if (Array.isArray(value)) {
    value.forEach(assertNoForbiddenKeys)
    return
  }
  if (!value || typeof value !== 'object') return
  for (const [key, child] of Object.entries(value)) {
    assert.equal(forbiddenSchemaKeys.has(key), false, `Forbidden schema key: ${key}`)
    assertNoForbiddenKeys(child)
  }
}
assertNoForbiddenKeys(graph)

const publishedIds = routeRegistry
  .filter(({ publicationStatus }) => publicationStatus === 'published')
  .map(({ id }) => id)
const expectedPublishedIds = [
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
] as const
assert.deepEqual(publishedIds, expectedPublishedIds)
assert.equal(publishedIds.length, 23)
const expectedSitemapIds = [
  ...expectedPublishedIds,
  'article-when-to-aerate-lawn-iowa',
  'article-best-time-to-overseed-lawn-iowa',
  'article-how-often-to-mow-lawn-iowa',
  'article-spring-lawn-cleanup-des-moines',
  'article-fall-leaf-cleanup-des-moines',
] as const
assert.deepEqual(
  buildSitemapEntries(),
  expectedSitemapIds.map((id) => ({ url: routesById[id].canonicalUrl })),
)

const forbiddenPaths = [
  '/service-areas/des-moines-ia',
  '/service-areas/des-moines',
  '/des-moines-ia',
  '/areas',
  '/locations',
  '/service-area',
  '/service-locations',
  '/areas/ankeny',
  '/service-areas/ankeny',
  '/service-areas/waukee',
  '/service-areas/norwalk',
  '/service-areas/altoona',
]
for (const forbiddenPath of forbiddenPaths) {
  assert.equal(routeRegistry.some(({ path: registeredPath }) => registeredPath === forbiddenPath), false)
}

assert.equal(fs.existsSync(path.join(projectRoot, 'app/service-areas/page.tsx')), true)
assert.equal(fs.existsSync(path.join(projectRoot, 'app/service-areas/[city]/page.tsx')), true)
assert.equal(fs.existsSync(path.join(projectRoot, 'app/service-areas/des-moines-ia/page.tsx')), false)

const pageSource = read('app/service-areas/page.tsx')
const contentSource = read('content/service-areas.ts')
const visibleSource = `${pageSource}\n${contentSource}`
const spanish = JSON.parse(read('lib/es-translations.json')) as Record<string, string>
assert.equal(pageSource.match(/<h1\b/g)?.length, 1)
assert.match(pageSource, /routeId="service-areas"/)
assert.match(pageSource, /serviceAreaHubItems\.map/)
assert.match(pageSource, /structuredDataNodes=\{\[itemListStructuredData\]\}/)
assert.match(visibleSource, /Lawn care service areas · Des Moines/)
assert.match(visibleSource, /lawn care near Des Moines/i)
assert.match(visibleSource, /Des Moines metro lawn service/i)
assert.doesNotMatch(visibleSource, /surrounding areas|surrounding communities|entire Des Moines metro|all surrounding|central Iowa|and beyond/i)
assert.doesNotMatch(pageSource, /use client|gtag|service_area_click|city_click|location_select|area_lead|geolocation|Maps SDK|<Image|<video|iframe/i)
assert.doesNotMatch(visibleSource, /our Ankeny projects|completed work in Waukee|Norwalk customers|Altoona properties we maintain|Des Moines portfolio/i)

const task18EnglishStrings = [
  route.h1,
  'Lawn care service areas · Des Moines',
  'Looking for lawn care near Des Moines? This page organizes Mo’s five approved communities into one clear metro directory, with Des Moines returning to the main homepage and the other areas using their own community links.',
  'Explore Services',
  'Five named communities',
  'A clear Des Moines metro lawn service directory.',
  'The lawn care service areas Mo’s publishes for Des Moines are limited to the five entries below. Each link provides a direct next step without repeating service details.',
  ...serviceAreaHubItems.map(({ description }) => description),
  'Coverage without guesswork',
  'One metro hub. Clear local paths.',
  'Five areas only',
  'Coverage on this page means the five communities shown here. No radius, county or additional-city claim is implied.',
  'Services stay separate',
  'Lawn care, landscaping, seasonal cleanups and snow removal remain broad categories here. The Services hub explains each service in detail.',
  'Scope starts with the property',
  'Use the estimate path to share the property area and broad need without assuming a standard package for every community.',
  'Choose the next path',
  'Match the area to the property need.',
  'Use Services to understand the available service paths, or Contact to start a property-specific estimate conversation.',
  ...serviceAreaSupportingRouteLinks.flatMap(({ eyebrow, description }) => [eyebrow, description]),
]
for (const english of task18EnglishStrings) {
  assert(spanish[english], `Missing Task 18 Spanish translation: ${english}`)
}

const planSource = read('plan.md')
assert.match(planSource, /### Task 20 — Waukee Service-Area Page\n\n- \*\*Status:\*\* `\[x\]` Completed/)
assert.match(planSource, /### Task 23 — About Page\n\n- \*\*Status:\*\* `\[x\]` Completed/)
assert.equal(routesById.home.title, "Lawn Care & Snow Removal in Des Moines, IA | Mo's Lawn Care")
assert.equal(routesById.home.h1, 'Lawn Care & Snow Removal in Des Moines, IA')
assert.equal(routesById.home.canonicalUrl, 'https://www.moslawncaredsm.com/')

console.log(
  'Task 18 Service Areas validation passed: exact five-area UI/ItemList parity, homepage-owned Des Moines path, CollectionPage/BreadcrumbList graph, all four non-Des Moines cities published, strict geographic/schema/alias boundaries, and current sitemap lifecycle.',
)
