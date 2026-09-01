import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

import { ankenyServiceAreaContent, ankenyServiceItems } from '../content/service-areas/ankeny-ia.ts'
import {
  getPublishedCityServiceArea,
  publishedCityServiceAreas,
  publishedCityServiceAreaSlugs,
} from '../content/service-areas/index.ts'
import { norwalkServiceAreaContent } from '../content/service-areas/norwalk-ia.ts'
import {
  waukeeRangeItems,
  waukeeRelatedAreaLinks,
  waukeeRequestPoints,
  waukeeServiceAreaContent,
  waukeeServiceItems,
  waukeeSupportingLinks,
} from '../content/service-areas/waukee-ia.ts'
import { getBreadcrumbItems, routeRegistry, routesById } from '../content/routes.ts'
import { buildRouteMetadata, buildSitemapEntries } from '../lib/metadata.ts'
import { buildPageStructuredData, type StructuredDataNode } from '../lib/structured-data.ts'

const projectRoot = process.cwd()
const read = (relativePath: string) => fs.readFileSync(path.join(projectRoot, relativePath), 'utf8')
const route = routesById['service-area-waukee']

assert.equal(route.path, '/service-areas/waukee-ia')
assert.equal(route.primaryKeyword, 'lawn care waukee ia')
assert.deepEqual(route.secondaryKeywords, [
  'lawn service Waukee IA',
  'lawn mowing Waukee',
  'landscaping Waukee',
  'yard cleanup Waukee',
  'snow removal Waukee',
])
assert.equal(route.title, "Lawn Care in Waukee, IA | Mo's Lawn Care")
assert.equal(route.h1, 'Lawn Care Services in Waukee, IA')
assert.equal(route.description, 'Professional lawn care in Waukee, IA, including mowing, landscaping, seasonal cleanups, aeration, weed control and snow removal. Get a free estimate.')
assert.equal(route.canonicalUrl, 'https://www.moslawncaredsm.com/service-areas/waukee-ia')
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
assert.equal(getPublishedCityServiceArea('waukee-ia'), waukeeServiceAreaContent)
assert.equal(getPublishedCityServiceArea('norwalk-ia'), norwalkServiceAreaContent)
assert(getPublishedCityServiceArea('altoona-ia'))
for (const invalid of ['des-moines-ia', 'waukee', 'waukee-iowa', 'invalid-city']) {
  assert.equal(getPublishedCityServiceArea(invalid), undefined)
}

const expectedServiceIds = [
  'service-spring-cleanup',
  'service-lawn-mowing',
  'service-aeration-overseeding',
  'service-fertilization-weed-control',
  'service-landscaping',
  'service-yard-cleanup',
  'service-grading',
  'service-fall-cleanup-leaf-removal',
  'service-snow-removal',
] as const
assert.deepEqual(waukeeServiceItems.map(({ routeId }) => routeId), expectedServiceIds)
assert.deepEqual(waukeeServiceItems.map(({ position }) => position), [1, 2, 3, 4, 5, 6, 7, 8, 9])
assert.equal(new Set(waukeeServiceItems.map(({ routeId }) => routeId)).size, 9)
assert.equal(new Set(waukeeServiceItems.map(({ href }) => href)).size, 9)
assert.equal(waukeeServiceItems.some(({ routeId }) => String(routeId) === 'service-flower-bed-maintenance'), false)
assert.deepEqual(waukeeServiceItems.map(({ href }) => href), expectedServiceIds.map((id) => routesById[id].path))
assert.deepEqual(waukeeServiceItems.map(({ canonicalUrl }) => canonicalUrl), expectedServiceIds.map((id) => routesById[id].canonicalUrl))
assert(waukeeServiceItems.every(({ evidence }) => /approved .* canonical record explicitly lists Waukee/i.test(evidence)))
for (const service of waukeeServiceItems) {
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
  name: waukeeServiceAreaContent.schemaItemListName,
  numberOfItems: waukeeServiceItems.length,
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: waukeeServiceItems.map((service) => ({
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
assert.deepEqual(schemaItems.map(({ position }) => position), waukeeServiceItems.map(({ position }) => position))
assert.deepEqual(schemaItems.map(({ name }) => name), waukeeServiceItems.map(({ name }) => name))
assert.deepEqual(schemaItems.map(({ item }) => item), waukeeServiceItems.map(({ canonicalUrl }) => canonicalUrl))

const visibleBreadcrumbs = getBreadcrumbItems(route.id)
assert.deepEqual(visibleBreadcrumbs.map(({ label }) => label), ['Home', 'Service Areas', 'Waukee'])
assert.deepEqual(visibleBreadcrumbs.map(({ href }) => href), ['/', '/service-areas', '/service-areas/waukee-ia'])
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

assert.deepEqual(waukeeRelatedAreaLinks.map(({ routeId, href }) => [routeId, href]), [
  ['home', '/'],
  ['service-area-ankeny', '/service-areas/ankeny-ia'],
  ['service-area-norwalk', '/service-areas/norwalk-ia'],
  ['service-area-altoona', '/service-areas/altoona-ia'],
])
assert.equal(routesById['service-area-ankeny'].publicationStatus, 'published')
assert.equal(routesById['service-area-norwalk'].implementationStatus, 'implemented')
assert.equal(routesById['service-area-norwalk'].publicationStatus, 'published')
assert.equal(routesById['service-area-altoona'].implementationStatus, 'implemented')
assert.equal(routesById['service-area-altoona'].publicationStatus, 'published')
assert.equal(routeRegistry.some(({ path: routePath }) => routePath === '/service-areas/des-moines-ia'), false)
assert.deepEqual(waukeeSupportingLinks.map(({ routeId, href }) => [routeId, href]), [
  ['services', '/services'],
  ['service-areas', '/service-areas'],
  ['commercial-property-services', '/commercial-property-services'],
])

const expectedPublishedIds = [
  'home', 'services', 'service-lawn-mowing', 'service-aeration-overseeding',
  'service-fertilization-weed-control', 'service-landscaping',
  'service-flower-bed-maintenance', 'service-yard-cleanup', 'service-spring-cleanup',
  'service-fall-cleanup-leaf-removal', 'service-grading', 'service-snow-removal',
  'commercial-property-services', 'service-areas', 'service-area-ankeny', 'service-area-waukee',
  'service-area-norwalk',
  'service-area-altoona',
  'about',
  'our-work',
  'reviews',
  'contact',
  'blog',
] as const
assert.deepEqual(routeRegistry.filter(({ publicationStatus }) => publicationStatus === 'published').map(({ id }) => id), expectedPublishedIds)
assert.equal(buildSitemapEntries().length, 25)
assert.deepEqual(buildSitemapEntries(), [
  ...expectedPublishedIds.map((id) => ({ url: routesById[id].canonicalUrl })),
  { url: routesById['article-when-to-aerate-lawn-iowa'].canonicalUrl },
  { url: routesById['article-best-time-to-overseed-lawn-iowa'].canonicalUrl },
])

const pageSource = read('app/service-areas/[city]/page.tsx')
const contentSource = read('content/service-areas/waukee-ia.ts')
const visibleSource = `${pageSource}\n${contentSource}`
assert.equal(pageSource.match(/<h1\b/g)?.length, 1)
assert.match(pageSource, /generateStaticParams/)
assert.match(pageSource, /getPublishedCityServiceArea\(city\)/)
assert.match(pageSource, /notFound\(\)/)
assert.match(pageSource, /structuredDataNodes=\{\[itemListStructuredData\]\}/)
assert.match(pageSource, /content\.services\.map/)
assert.match(visibleSource, /Request a Free Estimate in Waukee/)
assert.match(pageSource, /routesById\.contact\.path/)
assert.match(pageSource, /routesById\['service-areas'\]\.path/)
for (const phrase of ['Waukee lawn service', 'lawn mowing', 'landscaping', 'yard cleanup', 'snow removal']) {
  assert.match(visibleSource, new RegExp(phrase, 'i'))
}
assert.doesNotMatch(pageSource, /use client|gtag|generate_lead|service_area_click|city_click|geolocation|<Image|<video|iframe/i)
assert.doesNotMatch(visibleSource, /Waukee (office|branch|crew|customer|client|project)|based in Waukee|located in Waukee|minutes from Waukee|nearby crew|same-day|24\/7|guaranteed response|properties served/i)
assert.doesNotMatch(visibleSource, /year-round contract|continuous maintenance|automatic recurring service|guaranteed all-season availability|seasonal subscription|fixed annual program|automatic snow dispatch|guaranteed schedule/i)
assert.equal(waukeeRangeItems.length, 4)
assert.equal(waukeeRequestPoints.length, 2)

function strings(value: unknown, result: string[] = []) {
  if (typeof value === 'string') result.push(value)
  else if (Array.isArray(value)) value.forEach((item) => strings(item, result))
  else if (value && typeof value === 'object') Object.values(value).forEach((item) => strings(item, result))
  return result
}
function shingles(value: unknown) {
  const words = strings(value).join(' ').toLowerCase().replace(/ankeny|waukee/g, 'city').match(/[a-z0-9]+/g) ?? []
  return new Set(words.slice(0, -4).map((_, index) => words.slice(index, index + 5).join(' ')))
}
function visibleEditorialCopy(content: typeof ankenyServiceAreaContent | typeof waukeeServiceAreaContent) {
  return {
    hero: content.hero,
    servicesSection: content.servicesSection,
    serviceCopy: content.services.map(({ group, summary }) => [group, summary]),
    editorial: content.editorial,
    relatedSection: content.relatedSection,
    relatedCopy: content.relatedAreas.map(({ description }) => description),
    finalCta: content.finalCta,
  }
}
const ankenyShingles = shingles(visibleEditorialCopy(ankenyServiceAreaContent))
const waukeeShingles = shingles(visibleEditorialCopy(waukeeServiceAreaContent))
const sharedShingles = [...waukeeShingles].filter((item) => ankenyShingles.has(item))
assert.notEqual(waukeeServiceAreaContent.editorial.kind, ankenyServiceAreaContent.editorial.kind)
assert.notDeepEqual(waukeeServiceItems.map(({ routeId }) => routeId), ankenyServiceItems.map(({ routeId }) => routeId))
assert.equal(waukeeServiceItems.filter(({ summary }) => ankenyServiceItems.some((item) => String(item.summary) === String(summary))).length, 0)
assert(sharedShingles.length / Math.min(ankenyShingles.size, waukeeShingles.size) < 0.2, 'Waukee copy is too similar to Ankeny')

const spanish = JSON.parse(read('lib/es-translations.json')) as Record<string, string>
const { rangeSection, propertySection, supportingSection } = waukeeServiceAreaContent.editorial
const task20EnglishStrings = [
  route.h1,
  ...Object.values(waukeeServiceAreaContent.hero),
  ...Object.values(waukeeServiceAreaContent.servicesSection),
  ...waukeeServiceItems.flatMap(({ group, summary }) => [group, summary]),
  rangeSection.eyebrow,
  rangeSection.heading,
  rangeSection.introduction,
  ...rangeSection.items.flatMap(({ title, description }) => [title, description]),
  propertySection.eyebrow,
  propertySection.heading,
  propertySection.introduction,
  propertySection.residential,
  propertySection.commercial,
  propertySection.requestHeading,
  ...propertySection.requestPoints,
  supportingSection.eyebrow,
  supportingSection.heading,
  supportingSection.introduction,
  ...supportingSection.links.flatMap(({ name, description }) => [name, description]),
  ...Object.values(waukeeServiceAreaContent.relatedSection),
  ...waukeeRelatedAreaLinks.flatMap(({ name, description }) => [name, description]),
  ...Object.values(waukeeServiceAreaContent.finalCta),
]
for (const english of new Set(task20EnglishStrings)) assert(spanish[english], `Missing Task 20 Spanish translation: ${english}`)

const planSource = read('plan.md')
assert.match(planSource, /### Task 21 — Norwalk Service-Area Page\n\n- \*\*Status:\*\* `\[x\]` Completed/)
assert.match(planSource, /### Task 23 — About Page\n\n- \*\*Status:\*\* `\[x\]` Completed/)

console.log('Task 20 Waukee validation passed: exact ownership, independently audited nine-service UI/ItemList parity, distinct year-spanning editorial structure, strict claim/provenance boundaries, four-city publication stability, Spanish coverage, and current sitemap lifecycle.')
