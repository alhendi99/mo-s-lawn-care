import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

import { ankenyServiceAreaContent, ankenyServiceItems } from '../content/service-areas/ankeny-ia.ts'
import {
  getPublishedCityServiceArea,
  publishedCityServiceAreas,
  publishedCityServiceAreaSlugs,
} from '../content/service-areas/index.ts'
import {
  norwalkEstimateItems,
  norwalkPriorityItems,
  norwalkRelatedAreaLinks,
  norwalkServiceAreaContent,
  norwalkServiceItems,
  norwalkSupportingLinks,
} from '../content/service-areas/norwalk-ia.ts'
import { waukeeServiceAreaContent, waukeeServiceItems } from '../content/service-areas/waukee-ia.ts'
import { getBreadcrumbItems, routeRegistry, routesById } from '../content/routes.ts'
import { buildRouteMetadata, buildSitemapEntries } from '../lib/metadata.ts'
import { buildPageStructuredData, type StructuredDataNode } from '../lib/structured-data.ts'

const projectRoot = process.cwd()
const read = (relativePath: string) => fs.readFileSync(path.join(projectRoot, relativePath), 'utf8')
const route = routesById['service-area-norwalk']

assert.equal(route.path, '/service-areas/norwalk-ia')
assert.equal(route.primaryKeyword, 'lawn care norwalk ia')
assert.deepEqual(route.secondaryKeywords, [
  'lawn service Norwalk IA',
  'lawn mowing Norwalk',
  'landscaping Norwalk',
  'yard cleanup Norwalk',
  'snow removal Norwalk',
])
assert.equal(route.title, "Lawn Care in Norwalk, IA | Mo's Lawn Care")
assert.equal(route.h1, 'Lawn Care Services in Norwalk, IA')
assert.equal(route.description, 'Professional lawn care in Norwalk, IA, including mowing, landscaping, seasonal cleanups, aeration, weed control and snow removal. Get a free estimate.')
assert.equal(route.canonicalUrl, 'https://www.moslawncaredsm.com/service-areas/norwalk-ia')
assert.equal(route.implementationStatus, 'implemented')
assert.equal(route.publicationStatus, 'published')
assert.equal(route.indexability, 'indexable')

const metadata = buildRouteMetadata(route)
assert.equal(metadata.title, route.title)
assert.equal(metadata.description, route.description)
assert.equal(metadata.alternates?.canonical, route.canonicalUrl)
assert.equal((metadata.robots as { index?: boolean }).index, true)

assert.deepEqual(publishedCityServiceAreaSlugs, ['ankeny-ia', 'waukee-ia', 'norwalk-ia'])
assert.equal(publishedCityServiceAreas.length, 3)
assert.equal(getPublishedCityServiceArea('ankeny-ia'), ankenyServiceAreaContent)
assert.equal(getPublishedCityServiceArea('waukee-ia'), waukeeServiceAreaContent)
assert.equal(getPublishedCityServiceArea('norwalk-ia'), norwalkServiceAreaContent)
for (const invalid of ['altoona-ia', 'des-moines-ia', 'norwalk', 'norwalk-iowa', 'invalid-city']) {
  assert.equal(getPublishedCityServiceArea(invalid), undefined)
}

const expectedServiceIds = [
  'service-lawn-mowing',
  'service-aeration-overseeding',
  'service-landscaping',
  'service-grading',
  'service-yard-cleanup',
  'service-spring-cleanup',
  'service-fertilization-weed-control',
  'service-fall-cleanup-leaf-removal',
  'service-snow-removal',
] as const
assert.deepEqual(norwalkServiceItems.map(({ routeId }) => routeId), expectedServiceIds)
assert.deepEqual(norwalkServiceItems.map(({ position }) => position), [1, 2, 3, 4, 5, 6, 7, 8, 9])
assert.equal(new Set(norwalkServiceItems.map(({ routeId }) => routeId)).size, 9)
assert.equal(new Set(norwalkServiceItems.map(({ href }) => href)).size, 9)
assert.equal(norwalkServiceItems.some(({ routeId }) => String(routeId) === 'service-flower-bed-maintenance'), false)
assert.deepEqual(norwalkServiceItems.map(({ href }) => href), expectedServiceIds.map((id) => routesById[id].path))
assert.deepEqual(norwalkServiceItems.map(({ canonicalUrl }) => canonicalUrl), expectedServiceIds.map((id) => routesById[id].canonicalUrl))
assert(norwalkServiceItems.every(({ evidence }) => /approved .* canonical record explicitly lists Norwalk/i.test(evidence)))
for (const service of norwalkServiceItems) {
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
  name: norwalkServiceAreaContent.schemaItemListName,
  numberOfItems: norwalkServiceItems.length,
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: norwalkServiceItems.map((service) => ({
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
assert.deepEqual(schemaItems.map(({ position }) => position), norwalkServiceItems.map(({ position }) => position))
assert.deepEqual(schemaItems.map(({ name }) => name), norwalkServiceItems.map(({ name }) => name))
assert.deepEqual(schemaItems.map(({ item }) => item), norwalkServiceItems.map(({ canonicalUrl }) => canonicalUrl))

const visibleBreadcrumbs = getBreadcrumbItems(route.id)
assert.deepEqual(visibleBreadcrumbs.map(({ label }) => label), ['Home', 'Service Areas', 'Norwalk'])
assert.deepEqual(visibleBreadcrumbs.map(({ href }) => href), ['/', '/service-areas', '/service-areas/norwalk-ia'])
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

assert.deepEqual(norwalkRelatedAreaLinks.map(({ routeId, href }) => [routeId, href]), [
  ['home', '/'],
  ['service-area-ankeny', '/service-areas/ankeny-ia'],
  ['service-area-waukee', '/service-areas/waukee-ia'],
  ['service-area-altoona', '/service-areas/altoona-ia'],
])
for (const publishedId of ['service-area-ankeny', 'service-area-waukee'] as const) {
  assert.equal(routesById[publishedId].implementationStatus, 'implemented')
  assert.equal(routesById[publishedId].publicationStatus, 'published')
}
assert.equal(routesById['service-area-altoona'].implementationStatus, 'planned')
assert.equal(routesById['service-area-altoona'].publicationStatus, 'planned')
assert.equal(routeRegistry.some(({ path: routePath }) => routePath === '/service-areas/des-moines-ia'), false)
assert.deepEqual(norwalkSupportingLinks.map(({ routeId, href }) => [routeId, href]), [
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
  'service-area-norwalk',
] as const
assert.deepEqual(routeRegistry.filter(({ publicationStatus }) => publicationStatus === 'published').map(({ id }) => id), expectedPublishedIds)
assert.equal(buildSitemapEntries().length, 17)
assert.deepEqual(buildSitemapEntries(), expectedPublishedIds.map((id) => ({ url: routesById[id].canonicalUrl })))

const pageSource = read('app/service-areas/[city]/page.tsx')
const contentSource = read('content/service-areas/norwalk-ia.ts')
const visibleSource = `${pageSource}\n${contentSource}`
assert.equal(pageSource.match(/<h1\b/g)?.length, 1)
assert.match(pageSource, /generateStaticParams/)
assert.match(pageSource, /getPublishedCityServiceArea\(city\)/)
assert.match(pageSource, /notFound\(\)/)
assert.match(pageSource, /structuredDataNodes=\{\[itemListStructuredData\]\}/)
assert.match(pageSource, /content\.services\.map/)
assert.match(visibleSource, /Request a Free Estimate in Norwalk/)
assert.match(pageSource, /routesById\.contact\.path/)
assert.match(pageSource, /routesById\['service-areas'\]\.path/)
for (const phrase of ['Norwalk lawn service', 'lawn mowing in Norwalk', 'landscaping in Norwalk', 'yard cleanup in Norwalk', 'snow removal in Norwalk']) {
  assert.match(visibleSource, new RegExp(phrase, 'i'))
}
assert.doesNotMatch(pageSource, /use client|gtag|generate_lead|service_area_click|city_click|geolocation|<Image|<video|iframe/i)
assert.doesNotMatch(visibleSource, /Norwalk (office|branch|crew|customer|client|project|property|neighborhood|subdivision)|based in Norwalk|located in Norwalk|minutes from Norwalk|nearby|same-day|24\/7|guaranteed response|properties served|local team/i)
assert.doesNotMatch(visibleSource, /year-round contract|continuous maintenance|automatic recurring service|guaranteed all-season availability|seasonal subscription|fixed annual program|automatic snow dispatch|automatic program/i)
assert.match(contentSource, /No frequency, recurring agreement or guaranteed schedule is published here\./)
assert.doesNotMatch(visibleSource, /salting|deicing|ice management|sidewalk clearing|snow hauling|drainage engineering|drainage correction|foundation work|excavation|retaining walls|irrigation|patios|chemical formula|active ingredient|hauling|disposal|dumping/i)
assert.equal(norwalkPriorityItems.length, 3)
assert.equal(norwalkEstimateItems.length, 3)

function strings(value: unknown, result: string[] = []) {
  if (typeof value === 'string') result.push(value)
  else if (Array.isArray(value)) value.forEach((item) => strings(item, result))
  else if (value && typeof value === 'object') Object.values(value).forEach((item) => strings(item, result))
  return result
}
function shingles(value: unknown) {
  const words = strings(value).join(' ').toLowerCase().replace(/ankeny|waukee|norwalk/g, 'city').match(/[a-z0-9]+/g) ?? []
  return new Set(words.slice(0, -4).map((_, index) => words.slice(index, index + 5).join(' ')))
}
function visibleEditorialCopy(content: typeof ankenyServiceAreaContent | typeof waukeeServiceAreaContent | typeof norwalkServiceAreaContent) {
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
const cityRecords = [ankenyServiceAreaContent, waukeeServiceAreaContent, norwalkServiceAreaContent] as const
for (let left = 0; left < cityRecords.length; left += 1) {
  for (let right = left + 1; right < cityRecords.length; right += 1) {
    const leftShingles = shingles(visibleEditorialCopy(cityRecords[left]))
    const rightShingles = shingles(visibleEditorialCopy(cityRecords[right]))
    const shared = [...rightShingles].filter((item) => leftShingles.has(item))
    assert(shared.length / Math.min(leftShingles.size, rightShingles.size) < 0.2, `${cityRecords[left].cityName} and ${cityRecords[right].cityName} copy is too similar`)
  }
}
assert.deepEqual(cityRecords.map(({ editorial }) => editorial.kind), ['property-decision', 'year-spanning', 'priority-map'])
assert.notDeepEqual(norwalkServiceItems.map(({ routeId }) => routeId), ankenyServiceItems.map(({ routeId }) => routeId))
assert.notDeepEqual(norwalkServiceItems.map(({ routeId }) => routeId), waukeeServiceItems.map(({ routeId }) => routeId))
assert.equal(norwalkServiceItems.filter(({ summary }) => [...ankenyServiceItems, ...waukeeServiceItems].some((item) => String(item.summary) === String(summary))).length, 0)

const spanish = JSON.parse(read('lib/es-translations.json')) as Record<string, string>
const { prioritySection, timingSection, estimateSection } = norwalkServiceAreaContent.editorial
const task21EnglishStrings = [
  route.h1,
  ...Object.values(norwalkServiceAreaContent.hero),
  ...Object.values(norwalkServiceAreaContent.servicesSection),
  ...norwalkServiceItems.flatMap(({ name, group, summary }) => [name, group, summary]),
  prioritySection.eyebrow,
  prioritySection.heading,
  prioritySection.introduction,
  ...prioritySection.items.flatMap(({ title, description }) => [title, description]),
  timingSection.eyebrow,
  timingSection.heading,
  timingSection.introduction,
  timingSection.ongoing.heading,
  timingSection.ongoing.description,
  timingSection.timeSpecific.heading,
  timingSection.timeSpecific.description,
  timingSection.note,
  estimateSection.eyebrow,
  estimateSection.heading,
  estimateSection.introduction,
  ...estimateSection.items.flatMap(({ title, description }) => [title, description]),
  ...estimateSection.links.flatMap(({ name, description }) => [name, description]),
  ...Object.values(norwalkServiceAreaContent.relatedSection),
  ...norwalkRelatedAreaLinks.flatMap(({ name, description }) => [name, description]),
  ...Object.values(norwalkServiceAreaContent.finalCta),
]
for (const english of new Set(task21EnglishStrings)) assert(spanish[english], `Missing Task 21 Spanish translation: ${english}`)

const planSource = read('plan.md')
assert.match(planSource, /### Task 22 — Altoona Service-Area Page[\s\S]*?\*\*Status:\*\* `\[ \]` Not started/)

console.log('Task 21 Norwalk validation passed: exact ownership, independently audited nine-service UI/ItemList parity, three-city anti-doorway comparison, strict claim/provenance boundaries, three-city allowlist, Altoona isolation, Spanish coverage, and exact seventeen-URL sitemap lifecycle.')
