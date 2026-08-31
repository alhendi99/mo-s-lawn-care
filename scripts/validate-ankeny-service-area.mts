import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

import {
  ankenyCareSteps,
  ankenyEstimateDetails,
  ankenyRelatedAreaLinks,
  ankenyServiceAreaContent,
  ankenyServiceItems,
} from '../content/service-areas/ankeny-ia.ts'
import {
  getPublishedCityServiceArea,
  publishedCityServiceAreas,
  publishedCityServiceAreaSlugs,
} from '../content/service-areas/index.ts'
import { getBreadcrumbItems, routeRegistry, routesById } from '../content/routes.ts'
import { buildRouteMetadata, buildSitemapEntries } from '../lib/metadata.ts'
import { buildPageStructuredData, type StructuredDataNode } from '../lib/structured-data.ts'

const projectRoot = process.cwd()
const read = (relativePath: string) => fs.readFileSync(path.join(projectRoot, relativePath), 'utf8')
const route = routesById['service-area-ankeny']

assert.equal(route.path, '/service-areas/ankeny-ia')
assert.equal(route.primaryKeyword, 'lawn care ankeny ia')
assert.deepEqual(route.secondaryKeywords, [
  'lawn service Ankeny IA',
  'lawn mowing Ankeny',
  'landscaping Ankeny',
  'yard cleanup Ankeny',
  'snow removal Ankeny',
])
assert.equal(route.title, "Lawn Care in Ankeny, IA | Mo's Lawn Care")
assert.equal(route.h1, 'Lawn Care Services in Ankeny, IA')
assert.equal(route.description, 'Professional lawn care in Ankeny, IA, including mowing, landscaping, seasonal cleanups, aeration, weed control and snow removal. Get a free estimate.')
assert.equal(route.canonicalUrl, 'https://www.moslawncaredsm.com/service-areas/ankeny-ia')
assert.equal(route.implementationStatus, 'implemented')
assert.equal(route.publicationStatus, 'published')
assert.equal(route.indexability, 'indexable')

const metadata = buildRouteMetadata(route)
assert.equal(metadata.title, route.title)
assert.equal(metadata.description, route.description)
assert.equal(metadata.alternates?.canonical, route.canonicalUrl)
assert.equal((metadata.robots as { index?: boolean }).index, true)

assert.deepEqual(publishedCityServiceAreaSlugs, ['ankeny-ia', 'waukee-ia', 'norwalk-ia', 'altoona-ia'])
assert.equal(publishedCityServiceAreas.length, 4)
assert.equal(getPublishedCityServiceArea('ankeny-ia'), ankenyServiceAreaContent)
assert(getPublishedCityServiceArea('waukee-ia'))
assert(getPublishedCityServiceArea('norwalk-ia'))
assert(getPublishedCityServiceArea('altoona-ia'))
for (const invalid of ['des-moines-ia', 'ankeny', 'ankeny-iowa', 'invalid-city']) {
  assert.equal(getPublishedCityServiceArea(invalid), undefined)
}

const expectedServiceIds = [
  'service-lawn-mowing',
  'service-aeration-overseeding',
  'service-fertilization-weed-control',
  'service-landscaping',
  'service-yard-cleanup',
  'service-spring-cleanup',
  'service-fall-cleanup-leaf-removal',
  'service-grading',
  'service-snow-removal',
] as const
assert.deepEqual(ankenyServiceItems.map(({ routeId }) => routeId), expectedServiceIds)
assert.deepEqual(ankenyServiceItems.map(({ position }) => position), [1, 2, 3, 4, 5, 6, 7, 8, 9])
assert.equal(new Set(ankenyServiceItems.map(({ routeId }) => routeId)).size, 9)
assert.equal(new Set(ankenyServiceItems.map(({ href }) => href)).size, 9)
assert.equal(ankenyServiceItems.some(({ routeId }) => String(routeId) === 'service-flower-bed-maintenance'), false)
assert.deepEqual(ankenyServiceItems.map(({ href }) => href), expectedServiceIds.map((id) => routesById[id].path))
assert.deepEqual(ankenyServiceItems.map(({ canonicalUrl }) => canonicalUrl), expectedServiceIds.map((id) => routesById[id].canonicalUrl))
assert(ankenyServiceItems.every(({ evidence }) => /approved .* canonical record explicitly lists Ankeny/i.test(evidence)))
for (const service of ankenyServiceItems) {
  const slug = service.href.split('/').at(-1)
  assert(slug)
  const source = read(`content/services/${slug}.ts`)
  assert.match(source, /cities: \['Des Moines', 'Ankeny', 'Waukee', 'Norwalk', 'Altoona'\]/)
  assert.equal(routesById[service.routeId].implementationStatus, 'implemented')
  assert.equal(routesById[service.routeId].publicationStatus, 'published')
}

const itemListNode: StructuredDataNode = {
  '@type': 'ItemList',
  '@id': `${route.canonicalUrl}#service-list`,
  name: 'Lawn care services available for Ankeny estimate requests',
  numberOfItems: ankenyServiceItems.length,
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: ankenyServiceItems.map((service) => ({
    '@type': 'ListItem',
    position: service.position,
    name: service.name,
    item: service.canonicalUrl,
  })),
}
const graph = buildPageStructuredData(route, routesById.home, [itemListNode])
const typeCount = (expected: string) => graph['@graph'].filter(({ '@type': type }) => Array.isArray(type) ? type.includes(expected) : type === expected).length
assert.equal(typeCount('WebPage'), 1)
assert.equal(typeCount('ItemList'), 1)
assert.equal(typeCount('BreadcrumbList'), 1)
assert.equal(typeCount('Organization'), 1)
assert.equal(typeCount('WebSite'), 1)
for (const forbiddenType of ['LocalBusiness', 'Service', 'Offer', 'OfferCatalog', 'Product', 'Review', 'AggregateRating', 'PostalAddress', 'Place']) {
  assert.equal(typeCount(forbiddenType), 0, `Forbidden schema type: ${forbiddenType}`)
}
const schemaItemList = graph['@graph'].find(({ '@type': type }) => type === 'ItemList')
assert(schemaItemList)
const schemaItems = schemaItemList.itemListElement as readonly Record<string, unknown>[]
assert.equal(schemaItemList.numberOfItems, 9)
assert.deepEqual(schemaItems.map(({ position }) => position), ankenyServiceItems.map(({ position }) => position))
assert.deepEqual(schemaItems.map(({ name }) => name), ankenyServiceItems.map(({ name }) => name))
assert.deepEqual(schemaItems.map(({ item }) => item), ankenyServiceItems.map(({ canonicalUrl }) => canonicalUrl))

const visibleBreadcrumbs = getBreadcrumbItems(route.id)
assert.deepEqual(visibleBreadcrumbs.map(({ label }) => label), ['Home', 'Service Areas', 'Ankeny'])
assert.deepEqual(visibleBreadcrumbs.map(({ href }) => href), ['/', '/service-areas', '/service-areas/ankeny-ia'])
const breadcrumbNode = graph['@graph'].find(({ '@type': type }) => type === 'BreadcrumbList')
assert(breadcrumbNode)
const schemaBreadcrumbs = breadcrumbNode.itemListElement as readonly Record<string, unknown>[]
assert.deepEqual(schemaBreadcrumbs.map(({ name }) => name), visibleBreadcrumbs.map(({ label }) => label))
assert.deepEqual(schemaBreadcrumbs.map(({ position }) => position), [1, 2, 3])

const forbiddenSchemaKeys = new Set(['address', 'streetAddress', 'addressLocality', 'postalCode', 'geo', 'latitude', 'longitude', 'price', 'priceRange', 'review', 'aggregateRating'])
function assertNoForbiddenKeys(value: unknown) {
  if (Array.isArray(value)) return value.forEach(assertNoForbiddenKeys)
  if (!value || typeof value !== 'object') return
  for (const [key, child] of Object.entries(value)) {
    assert.equal(forbiddenSchemaKeys.has(key), false, `Forbidden schema key: ${key}`)
    assertNoForbiddenKeys(child)
  }
}
assertNoForbiddenKeys(graph)

assert.deepEqual(ankenyRelatedAreaLinks.map(({ routeId, href }) => [routeId, href]), [
  ['home', '/'],
  ['service-area-waukee', '/service-areas/waukee-ia'],
  ['service-area-norwalk', '/service-areas/norwalk-ia'],
  ['service-area-altoona', '/service-areas/altoona-ia'],
])
assert.equal(routesById['service-area-waukee'].implementationStatus, 'implemented')
assert.equal(routesById['service-area-waukee'].publicationStatus, 'published')
assert.equal(routesById['service-area-norwalk'].implementationStatus, 'implemented')
assert.equal(routesById['service-area-norwalk'].publicationStatus, 'published')
assert.equal(routesById['service-area-altoona'].implementationStatus, 'implemented')
assert.equal(routesById['service-area-altoona'].publicationStatus, 'published')
assert.equal(routeRegistry.some(({ path: routePath }) => routePath === '/service-areas/des-moines-ia'), false)
assert.equal(routesById.home.primaryKeyword, 'lawn care des moines ia')
assert.equal(routesById.home.canonicalUrl, 'https://www.moslawncaredsm.com/')

const publishedIds = routeRegistry.filter(({ publicationStatus }) => publicationStatus === 'published').map(({ id }) => id)
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
] as const
assert.deepEqual(publishedIds, expectedPublishedIds)
assert.equal(buildSitemapEntries().length, 19)
assert.deepEqual(buildSitemapEntries(), expectedPublishedIds.map((id) => ({ url: routesById[id].canonicalUrl })))

const pageSource = read('app/service-areas/[city]/page.tsx')
const contentSource = read('content/service-areas/ankeny-ia.ts')
const visibleSource = `${pageSource}\n${contentSource}`
assert.equal(pageSource.match(/<h1\b/g)?.length, 1)
assert.match(pageSource, /generateStaticParams/)
assert.match(pageSource, /getPublishedCityServiceArea\(city\)/)
assert.match(pageSource, /notFound\(\)/)
assert.match(pageSource, /structuredDataNodes=\{\[itemListStructuredData\]\}/)
assert.match(pageSource, /content\.services\.map/)
assert.match(visibleSource, /Request a Free Estimate in Ankeny/)
assert.match(pageSource, /routesById\.contact\.path/)
assert.match(pageSource, /routesById\['service-areas'\]\.path/)
assert.match(visibleSource, /lawn service guide/i)
assert.match(visibleSource, /Lawn mowing in Ankeny/)
assert.match(visibleSource, /landscaping in Ankeny/)
assert.match(visibleSource, /yard cleanup in Ankeny/)
assert.match(visibleSource, /snow removal in Ankeny/)
assert.doesNotMatch(pageSource, /use client|gtag|generate_lead|service_area_click|city_click|geolocation|<Image|<video|iframe/i)
assert.doesNotMatch(visibleSource, /Ankeny (office|branch|crew|customer|client|project)|based in Ankeny|located in Ankeny|minutes from Ankeny|nearby crew|same-day|24\/7|guaranteed response|properties served/i)
assert.equal(ankenyCareSteps.length, 3)
assert.equal(ankenyEstimateDetails.length, 3)

const spanish = JSON.parse(read('lib/es-translations.json')) as Record<string, string>
const task19EnglishStrings = [
  route.h1,
  'Ankeny property care',
  'Use this Ankeny lawn service guide to compare mowing, lawn-condition care, landscaping, yard cleanup and seasonal options before requesting a property-specific estimate.',
  'Request a Free Estimate in Ankeny',
  'Choose by property need',
  'Nine clear service paths for Ankeny.',
  'Lawn mowing in Ankeny, landscaping in Ankeny, yard cleanup in Ankeny and snow removal in Ankeny each retain their own service details. The links below help keep those choices distinct.',
  ...ankenyServiceItems.flatMap(({ group, summary }) => [group, summary]),
  'Explore all Services',
  'A practical way to choose',
  'Build the request around the property.',
  'The useful distinction is the work to discuss—not a city-wide package or a promise that every property follows the same plan.',
  ...ankenyCareSteps.flatMap(({ title, description }) => [title, description]),
  'Residential and commercial context',
  'What helps frame an estimate request.',
  'Mo’s approved service records support residential and commercial property conversations. These three details help establish the starting point without inventing a standard package.',
  ...ankenyEstimateDetails.flatMap(({ title, description }) => [title, description]),
  'Coverage hierarchy',
  'Other service areas.',
  'Use the Service Areas hub to review the full five-community directory. These links do not imply proximity, an office or a response time.',
  'View Service Areas',
  ...ankenyRelatedAreaLinks.map(({ description }) => description),
  'Ankeny estimate path',
  'Share the property area and main service concern through Mo’s established contact path.',
  'Start an Estimate Request',
]
for (const english of new Set(task19EnglishStrings)) assert(spanish[english], `Missing Task 19 Spanish translation: ${english}`)

const planSource = read('plan.md')
assert.match(planSource, /### Task 21 — Norwalk Service-Area Page\n\n- \*\*Status:\*\* `\[x\]` Completed/)
assert.match(planSource, /### Task 23 — About Page\n\n- \*\*Status:\*\* `\[x\]` Completed/)

console.log('Task 19 Ankeny validation passed: exact ownership, nine approved service links with UI/ItemList parity, WebPage/BreadcrumbList schema, four-city publication stability, strict claim boundaries, Spanish coverage, and current sitemap lifecycle.')
