import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

import { ankenyServiceAreaContent, ankenyServiceItems } from '../content/service-areas/ankeny-ia.ts'
import {
  altoonaRelatedAreaLinks,
  altoonaRequestItems,
  altoonaScopeItems,
  altoonaServiceAreaContent,
  altoonaServiceItems,
  altoonaSupportingLinks,
} from '../content/service-areas/altoona-ia.ts'
import {
  getPublishedCityServiceArea,
  publishedCityServiceAreas,
  publishedCityServiceAreaSlugs,
} from '../content/service-areas/index.ts'
import { norwalkServiceAreaContent, norwalkServiceItems } from '../content/service-areas/norwalk-ia.ts'
import { waukeeServiceAreaContent, waukeeServiceItems } from '../content/service-areas/waukee-ia.ts'
import { getBreadcrumbItems, routeRegistry, routesById } from '../content/routes.ts'
import { buildRouteMetadata, buildSitemapEntries } from '../lib/metadata.ts'
import { buildPageStructuredData, type StructuredDataNode } from '../lib/structured-data.ts'

const projectRoot = process.cwd()
const read = (relativePath: string) => fs.readFileSync(path.join(projectRoot, relativePath), 'utf8')
const route = routesById['service-area-altoona']

assert.equal(route.path, '/service-areas/altoona-ia')
assert.equal(route.primaryKeyword, 'lawn care altoona ia')
assert.deepEqual(route.secondaryKeywords, [
  'lawn service Altoona IA',
  'lawn mowing Altoona',
  'landscaping Altoona',
  'yard cleanup Altoona',
  'snow removal Altoona',
])
assert.equal(route.title, "Lawn Care in Altoona, IA | Mo's Lawn Care")
assert.equal(route.h1, 'Lawn Care Services in Altoona, IA')
assert.equal(route.description, 'Professional lawn care in Altoona, IA, including mowing, landscaping, seasonal cleanups, aeration, weed control and snow removal. Get a free estimate.')
assert.equal(route.canonicalUrl, 'https://www.moslawncaredsm.com/service-areas/altoona-ia')
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
assert.equal(getPublishedCityServiceArea('altoona-ia'), altoonaServiceAreaContent)
for (const invalid of ['des-moines-ia', 'altoona', 'altoona-iowa', 'invalid-city']) {
  assert.equal(getPublishedCityServiceArea(invalid), undefined)
}

const expectedServiceIds = [
  'service-landscaping',
  'service-grading',
  'service-yard-cleanup',
  'service-lawn-mowing',
  'service-fertilization-weed-control',
  'service-aeration-overseeding',
  'service-spring-cleanup',
  'service-fall-cleanup-leaf-removal',
  'service-snow-removal',
] as const
assert.deepEqual(altoonaServiceItems.map(({ routeId }) => routeId), expectedServiceIds)
assert.deepEqual(altoonaServiceItems.map(({ position }) => position), [1, 2, 3, 4, 5, 6, 7, 8, 9])
assert.equal(new Set(altoonaServiceItems.map(({ routeId }) => routeId)).size, 9)
assert.equal(new Set(altoonaServiceItems.map(({ href }) => href)).size, 9)
assert.equal(altoonaServiceItems.some(({ routeId }) => String(routeId) === 'service-flower-bed-maintenance'), false)
assert.deepEqual(altoonaServiceItems.map(({ href }) => href), expectedServiceIds.map((id) => routesById[id].path))
assert.deepEqual(altoonaServiceItems.map(({ canonicalUrl }) => canonicalUrl), expectedServiceIds.map((id) => routesById[id].canonicalUrl))
assert(altoonaServiceItems.every(({ evidence }) => /approved .* canonical record explicitly lists Altoona/i.test(evidence)))
for (const service of altoonaServiceItems) {
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
  name: altoonaServiceAreaContent.schemaItemListName,
  numberOfItems: altoonaServiceItems.length,
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: altoonaServiceItems.map((service) => ({
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
assert.deepEqual(schemaItems.map(({ position }) => position), altoonaServiceItems.map(({ position }) => position))
assert.deepEqual(schemaItems.map(({ name }) => name), altoonaServiceItems.map(({ name }) => name))
assert.deepEqual(schemaItems.map(({ item }) => item), altoonaServiceItems.map(({ canonicalUrl }) => canonicalUrl))

const visibleBreadcrumbs = getBreadcrumbItems(route.id)
assert.deepEqual(visibleBreadcrumbs.map(({ label }) => label), ['Home', 'Service Areas', 'Altoona'])
assert.deepEqual(visibleBreadcrumbs.map(({ href }) => href), ['/', '/service-areas', '/service-areas/altoona-ia'])
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

assert.deepEqual(altoonaRelatedAreaLinks.map(({ routeId, href }) => [routeId, href]), [
  ['home', '/'],
  ['service-area-ankeny', '/service-areas/ankeny-ia'],
  ['service-area-waukee', '/service-areas/waukee-ia'],
  ['service-area-norwalk', '/service-areas/norwalk-ia'],
])
for (const publishedId of ['service-area-ankeny', 'service-area-waukee', 'service-area-norwalk', 'service-area-altoona'] as const) {
  assert.equal(routesById[publishedId].implementationStatus, 'implemented')
  assert.equal(routesById[publishedId].publicationStatus, 'published')
}
assert.equal(routeRegistry.some(({ path: routePath }) => routePath === '/service-areas/des-moines-ia'), false)
assert.deepEqual(altoonaSupportingLinks.map(({ routeId, href }) => [routeId, href]), [
  ['services', '/services'],
  ['commercial-property-services', '/commercial-property-services'],
  ['service-areas', '/service-areas'],
])

const expectedPublishedIds = [
  'home', 'services', 'service-lawn-mowing', 'service-aeration-overseeding',
  'service-fertilization-weed-control', 'service-landscaping',
  'service-flower-bed-maintenance', 'service-yard-cleanup', 'service-spring-cleanup',
  'service-fall-cleanup-leaf-removal', 'service-grading', 'service-snow-removal',
  'commercial-property-services', 'service-areas', 'service-area-ankeny', 'service-area-waukee',
  'service-area-norwalk', 'service-area-altoona',
  'about',
] as const
assert.deepEqual(routeRegistry.filter(({ publicationStatus }) => publicationStatus === 'published').map(({ id }) => id), expectedPublishedIds)
assert.equal(buildSitemapEntries().length, 19)
assert.deepEqual(buildSitemapEntries(), expectedPublishedIds.map((id) => ({ url: routesById[id].canonicalUrl })))
assert.equal(routesById.about.implementationStatus, 'implemented')
assert.equal(routesById.about.publicationStatus, 'published')

const forbiddenRegisteredPaths = [
  '/service-areas/des-moines-ia', '/service-areas/altoona', '/service-areas/altoona-iowa',
  '/ankeny/lawn-mowing', '/waukee/snow-removal', '/services/lawn-mowing/altoona',
  '/service-areas/altoona-ia/snow-removal',
]
for (const forbiddenPath of forbiddenRegisteredPaths) {
  assert.equal(routeRegistry.some(({ path: routePath }) => routePath === forbiddenPath), false)
}

const pageSource = read('app/service-areas/[city]/page.tsx')
const contentSource = read('content/service-areas/altoona-ia.ts')
const visibleSource = `${pageSource}\n${contentSource}`
assert.equal(pageSource.match(/<h1\b/g)?.length, 1)
assert.match(pageSource, /generateStaticParams/)
assert.match(pageSource, /getPublishedCityServiceArea\(city\)/)
assert.match(pageSource, /notFound\(\)/)
assert.match(pageSource, /structuredDataNodes=\{\[itemListStructuredData\]\}/)
assert.match(pageSource, /content\.services\.map/)
assert.match(pageSource, /content\.editorial\.kind === 'scope-builder'/)
assert.match(visibleSource, /Request a Free Estimate in Altoona/)
assert.match(pageSource, /routesById\.contact\.path/)
assert.match(pageSource, /routesById\['service-areas'\]\.path/)
for (const phrase of ['Altoona lawn service', 'lawn mowing in Altoona', 'landscaping in Altoona', 'yard cleanup in Altoona', 'snow removal in Altoona']) {
  assert.match(visibleSource, new RegExp(phrase, 'i'))
}
assert.doesNotMatch(pageSource, /use client|gtag|generate_lead|service_area_click|city_click|geolocation|<Image|<video|iframe/i)
assert.doesNotMatch(visibleSource, /Altoona (office|branch|crew|customer|client|project|property|neighborhood|subdivision|work)|based in Altoona|located in Altoona|minutes from Altoona|nearby|same-day|24\/7|properties served|local team/i)
assert.match(contentSource, /without assuming availability, a fixed calendar or a guaranteed response/)
assert.doesNotMatch(visibleSource, /year-round contract|maintenance agreement|automatic recurring service|guaranteed all-season availability|seasonal subscription|fixed annual program|automatic snow dispatch|automatic program/i)
assert.doesNotMatch(visibleSource, /salting|deicing|ice management|sidewalk clearing|snow hauling|drainage engineering|drainage correction|foundation work|excavation|retaining walls|irrigation|patios|chemical formula|active ingredient|hauling|disposal|dumping/i)
assert.doesNotMatch(visibleSource, /Altoona (review|testimonial|image|photo)|review from Altoona|work in Altoona|completed in Altoona/i)
assert.equal(altoonaScopeItems.length, 3)
assert.equal(altoonaRequestItems.length, 3)

function strings(value: unknown, result: string[] = []) {
  if (typeof value === 'string') result.push(value)
  else if (Array.isArray(value)) value.forEach((item) => strings(item, result))
  else if (value && typeof value === 'object') Object.values(value).forEach((item) => strings(item, result))
  return result
}
function shingles(value: unknown) {
  const words = strings(value).join(' ').toLowerCase().replace(/ankeny|waukee|norwalk|altoona/g, 'city').match(/[a-z0-9]+/g) ?? []
  return new Set(words.slice(0, -4).map((_, index) => words.slice(index, index + 5).join(' ')))
}
function visibleEditorialCopy(content: typeof ankenyServiceAreaContent | typeof waukeeServiceAreaContent | typeof norwalkServiceAreaContent | typeof altoonaServiceAreaContent) {
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
const cityRecords = [ankenyServiceAreaContent, waukeeServiceAreaContent, norwalkServiceAreaContent, altoonaServiceAreaContent] as const
const similarityResults: string[] = []
for (let left = 0; left < cityRecords.length; left += 1) {
  for (let right = left + 1; right < cityRecords.length; right += 1) {
    const leftShingles = shingles(visibleEditorialCopy(cityRecords[left]))
    const rightShingles = shingles(visibleEditorialCopy(cityRecords[right]))
    const shared = [...rightShingles].filter((item) => leftShingles.has(item))
    const similarity = shared.length / Math.min(leftShingles.size, rightShingles.size)
    similarityResults.push(`${cityRecords[left].cityName}/${cityRecords[right].cityName}: ${(similarity * 100).toFixed(1)}%`)
    assert(similarity < 0.2, `${cityRecords[left].cityName} and ${cityRecords[right].cityName} copy is too similar`)
  }
}
assert.deepEqual(cityRecords.map(({ editorial }) => editorial.kind), ['property-decision', 'year-spanning', 'priority-map', 'scope-builder'])
for (const existingItems of [ankenyServiceItems, waukeeServiceItems, norwalkServiceItems]) {
  assert.notDeepEqual(altoonaServiceItems.map(({ routeId }) => routeId), existingItems.map(({ routeId }) => routeId))
  assert.equal(altoonaServiceItems.filter(({ summary }) => existingItems.some((item) => String(item.summary) === String(summary))).length, 0)
}

const spanish = JSON.parse(read('lib/es-translations.json')) as Record<string, string>
const { scopeSection, readinessSection } = altoonaServiceAreaContent.editorial
const task22EnglishStrings = [
  route.h1,
  ...Object.values(altoonaServiceAreaContent.hero),
  ...Object.values(altoonaServiceAreaContent.servicesSection),
  ...altoonaServiceItems.flatMap(({ name, group, summary }) => [name, group, summary]),
  scopeSection.eyebrow,
  scopeSection.heading,
  scopeSection.introduction,
  ...scopeSection.items.flatMap(({ title, description }) => [title, description]),
  readinessSection.eyebrow,
  readinessSection.heading,
  readinessSection.introduction,
  ...readinessSection.contexts.flatMap(({ title, description }) => [title, description]),
  readinessSection.requestHeading,
  readinessSection.requestIntroduction,
  ...readinessSection.items.flatMap(({ title, description }) => [title, description]),
  ...readinessSection.links.flatMap(({ name, description }) => [name, description]),
  ...Object.values(altoonaServiceAreaContent.relatedSection),
  ...altoonaRelatedAreaLinks.flatMap(({ name, description }) => [name, description]),
  ...Object.values(altoonaServiceAreaContent.finalCta),
]
for (const english of new Set(task22EnglishStrings)) assert(spanish[english], `Missing Task 22 Spanish translation: ${english}`)

const planSource = read('plan.md')
assert.match(planSource, /### Task 23 — About Page[\s\S]*?\*\*Status:\*\* `\[x\]` Completed/)

console.log(`Task 22 Altoona validation passed: exact ownership, independent nine-service audit, four-city UI/ItemList/schema/lifecycle parity, strict claim/provenance boundaries, Spanish coverage, current nineteen-URL sitemap, and four-city similarities (${similarityResults.join('; ')}).`)
