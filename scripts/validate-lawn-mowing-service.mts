import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

import { getBreadcrumbItems, routeLabels, routeRegistry, routesById } from '../content/routes.ts'
import {
  getPublishedServiceDetail,
  publishedServiceDetails,
  publishedServiceSlugs,
} from '../content/services/index.ts'
import { aerationOverseedingService } from '../content/services/aeration-overseeding.ts'
import { fertilizationWeedControlService } from '../content/services/fertilization-weed-control.ts'
import { flowerBedMaintenanceService } from '../content/services/flower-bed-maintenance.ts'
import { landscapingService } from '../content/services/landscaping.ts'
import { lawnMowingService } from '../content/services/lawn-mowing.ts'
import { springCleanupService } from '../content/services/spring-cleanup.ts'
import { yardCleanupService } from '../content/services/yard-cleanup.ts'
import { buildRouteMetadata, buildSitemapEntries } from '../lib/metadata.ts'
import { approvedBusinessFacts } from '../lib/site.ts'
import {
  ORGANIZATION_ID,
  buildPageStructuredData,
  buildServiceStructuredData,
} from '../lib/structured-data.ts'

const projectRoot = process.cwd()
const read = (relativePath: string) => fs.readFileSync(path.join(projectRoot, relativePath), 'utf8')
const route = routesById['service-lawn-mowing']

assert.equal(route.path, '/services/lawn-mowing')
assert.equal(route.primaryKeyword, 'lawn mowing des moines ia')
assert.deepEqual(route.secondaryKeywords, [
  'lawn mowing service Des Moines',
  'grass cutting service Des Moines',
  'residential lawn mowing Des Moines',
  'lawn maintenance Des Moines',
])
assert.equal(route.title, "Lawn Mowing Service in Des Moines, IA | Mo's Lawn Care")
assert.equal(route.h1, 'Lawn Mowing Service in Des Moines, IA')
assert.equal(
  route.description,
  "Keep your property sharp with professional lawn mowing in Des Moines, IA. Residential and commercial service available. Request a free estimate from Mo's.",
)
assert.equal(route.canonicalUrl, 'https://www.moslawncaredsm.com/services/lawn-mowing')
assert.equal(route.implementationStatus, 'implemented')
assert.equal(route.publicationStatus, 'published')
assert.equal(route.indexability, 'indexable')

const metadata = buildRouteMetadata(route)
assert.equal(metadata.title, route.title)
assert.equal(metadata.description, route.description)
assert.equal(metadata.alternates?.canonical, route.canonicalUrl)
assert.equal((metadata.robots as { index?: boolean }).index, true)

assert.deepEqual(publishedServiceSlugs, [
  'lawn-mowing',
  'aeration-overseeding',
  'fertilization-weed-control',
  'landscaping',
  'flower-bed-maintenance',
  'yard-cleanup',
  'spring-cleanup',
  'fall-cleanup-leaf-removal',
  'grading',
  'snow-removal',
])
assert.equal(publishedServiceDetails.length, 10)
assert.equal(getPublishedServiceDetail('lawn-mowing'), lawnMowingService)
assert.equal(getPublishedServiceDetail('aeration-overseeding'), aerationOverseedingService)
assert.equal(
  getPublishedServiceDetail('fertilization-weed-control'),
  fertilizationWeedControlService,
)
assert.equal(getPublishedServiceDetail('landscaping'), landscapingService)
assert.equal(getPublishedServiceDetail('flower-bed-maintenance'), flowerBedMaintenanceService)
assert.equal(getPublishedServiceDetail('yard-cleanup'), yardCleanupService)
assert.equal(getPublishedServiceDetail('spring-cleanup'), springCleanupService)

assert(getPublishedServiceDetail('grading'))
assert(getPublishedServiceDetail('snow-removal'))
assert.equal(getPublishedServiceDetail('not-a-real-service'), undefined)
assert.deepEqual(
  routeRegistry.filter(({ publicationStatus }) => publicationStatus === 'published').map(({ id }) => id),
  [
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
  ],
)

const serviceNode = buildServiceStructuredData(route, {
  name: lawnMowingService.schema.name,
  serviceType: lawnMowingService.schema.serviceType,
  description: route.description,
})
const graph = buildPageStructuredData(route, routesById.home, [serviceNode])
const graphNodes = graph['@graph']
const webpageNodes = graphNodes.filter(({ '@type': type }) => type === 'WebPage')
const serviceNodes = graphNodes.filter(({ '@type': type }) => type === 'Service')
const breadcrumbNodes = graphNodes.filter(({ '@type': type }) => type === 'BreadcrumbList')
assert.equal(webpageNodes.length, 1)
assert.equal(serviceNodes.length, 1)
assert.equal(breadcrumbNodes.length, 1)
assert.equal(serviceNode['@id'], `${route.canonicalUrl}#service`)
assert.deepEqual(serviceNode.provider, { '@id': ORGANIZATION_ID })
assert.equal(serviceNode.url, route.canonicalUrl)
assert.equal(serviceNode.description, route.description)

const schemaAreas = serviceNode.areaServed as readonly Record<string, unknown>[]
assert.equal(schemaAreas.length, 5)
assert.deepEqual(
  schemaAreas.map(({ name }) => name),
  approvedBusinessFacts.serviceAreas.map(({ city }) => city),
)

const visibleBreadcrumb = getBreadcrumbItems(route.id)
assert.deepEqual(visibleBreadcrumb.map(({ label }) => label), ['Home', 'Services', 'Lawn Mowing'])
const schemaBreadcrumb = breadcrumbNodes[0].itemListElement as readonly Record<string, unknown>[]
assert.deepEqual(schemaBreadcrumb.map(({ name }) => name), visibleBreadcrumb.map(({ label }) => label))
assert.deepEqual(schemaBreadcrumb.map(({ position }) => position), [1, 2, 3])
assert.equal(schemaBreadcrumb.at(-1)?.item, route.canonicalUrl)

const serializedGraph = JSON.stringify(graph)
for (const forbiddenSchemaTerm of [
  'Review',
  'AggregateRating',
  'aggregateRating',
  'FAQPage',
  'Offer',
  'price',
  'address',
  'geo',
  'guarantee',
]) {
  assert.equal(serializedGraph.includes(forbiddenSchemaTerm), false, `Forbidden schema: ${forbiddenSchemaTerm}`)
}

assert.deepEqual(
  lawnMowingService.relatedServices.map(({ routeId }) => routeId),
  [
    'service-aeration-overseeding',
    'service-fertilization-weed-control',
    'service-yard-cleanup',
  ],
)
assert.deepEqual(lawnMowingService.serviceArea.cities, [
  'Des Moines',
  'Ankeny',
  'Waukee',
  'Norwalk',
  'Altoona',
])
assert.equal(lawnMowingService.hero.image.provenance, 'existing-property-care-gallery')
assert.deepEqual(lawnMowingService.schema, {
  name: 'Lawn Mowing Service',
  serviceType: 'Lawn mowing',
})
assert.equal(
  lawnMowingService.hero.image.alt,
  'Green lawn with visible mowing lines beside homes and sidewalks',
)
assert.deepEqual(lawnMowingService.reviews.items.map(({ name }) => name), [
  'Erick & Deanna Van Cura',
  'Lori Stiles',
])
assert(lawnMowingService.reviews.items.every(({ quote }) => /mow/i.test(quote)))

const componentSource = read('components/service-detail-page.tsx')
const dynamicRouteSource = read('app/services/[slug]/page.tsx')
const contentSource = read('content/services/lawn-mowing.ts')
assert.equal(componentSource.match(/<h1\b/g)?.length, 1)
assert.match(componentSource, /<InteriorPageShell/)
assert.match(componentSource, /buildServiceStructuredData/)
assert.match(componentSource, /routesById\['commercial-property-services'\]/)
assert.match(componentSource, /routesById\['our-work'\]/)
assert.match(componentSource, /routesById\.contact/)
assert.match(componentSource, /site\.phoneHref/)
assert.doesNotMatch(componentSource, /use client|gtag|generate_lead|form_start|form_submit_error/)
assert.doesNotMatch(componentSource, /article-how-often-to-mow-lawn-iowa|how-often-to-mow-lawn-iowa/)
assert.doesNotMatch(contentSource, /article-how-often-to-mow-lawn-iowa|how-often-to-mow-lawn-iowa/)

assert.match(dynamicRouteSource, /export const dynamicParams = true/)
assert.match(dynamicRouteSource, /publishedServiceSlugs\.map/)
assert.match(dynamicRouteSource, /getPublishedServiceDetail\(slug\)/)
assert.match(dynamicRouteSource, /if \(!service\) notFound\(\)/)
assert.doesNotMatch(dynamicRouteSource, /serviceNavigationRouteIds|routeRegistry\.find/)

const businessCopy = JSON.stringify({
  hero: lawnMowingService.hero,
  introduction: lawnMowingService.introduction,
  scope: lawnMowingService.scope,
  relatedServices: lawnMowingService.relatedServices,
  propertyContext: lawnMowingService.propertyContext,
  serviceArea: lawnMowingService.serviceArea,
  faqs: lawnMowingService.faqs,
  finalCta: lawnMowingService.finalCta,
}).toLowerCase()
for (const unsupportedClaim of [
  'we mow weekly',
  'weekly mowing is available',
  'biweekly mowing is available',
  'includes edging',
  'bagging is included',
  'we remove clippings',
  'zero-turn',
  'mowing height',
  'per visit',
  'starting at $',
  'guaranteed',
  'des moines mowing project',
]) {
  assert.equal(businessCopy.includes(unsupportedClaim), false, `Unsupported claim: ${unsupportedClaim}`)
}
assert.match(businessCopy, /does not publish a fixed mowing frequency/)
assert.match(businessCopy, /not listed as standard mowing inclusions/)
assert.match(businessCopy, /prices and contract terms are not published/)

const spanish = JSON.parse(read('lib/es-translations.json')) as Record<string, string>
const translatedComponentStrings = [
  route.h1,
  'Existing property-care gallery image · no city or customer attribution',
  'Related lawn needs',
  'When mowing is not the whole question.',
  'Use the condition you see outside to choose the closest service path.',
  'Residential',
  'Commercial',
  'Property-care portfolio',
  'Lawn mowing FAQs',
  'Useful answers before you request an estimate.',
]
for (const value of translatedComponentStrings) {
  assert(spanish[value], `Missing Spanish translation: ${value}`)
}

function collectTranslatableStrings(value: unknown, key = '', strings = new Set<string>()) {
  if (typeof value === 'string') {
    if (!['slug', 'routeId', 'src', 'provenance', 'name'].includes(key) && !/^0\d$/.test(value)) {
      strings.add(value)
    }
    return strings
  }
  if (Array.isArray(value)) {
    for (const item of value) collectTranslatableStrings(item, key, strings)
    return strings
  }
  if (value && typeof value === 'object') {
    for (const [nestedKey, nestedValue] of Object.entries(value)) {
      collectTranslatableStrings(nestedValue, nestedKey, strings)
    }
  }
  return strings
}

for (const value of collectTranslatableStrings(lawnMowingService)) {
  assert(spanish[value], `Missing service-content Spanish translation: ${value}`)
}

assert.deepEqual(buildSitemapEntries(), [
  { url: routesById.home.canonicalUrl },
  { url: routesById.services.canonicalUrl },
  { url: route.canonicalUrl },
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
  { url: routesById['service-area-ankeny'].canonicalUrl },
  { url: routesById['service-area-waukee'].canonicalUrl },
  { url: routesById['service-area-norwalk'].canonicalUrl },
  { url: routesById['service-area-altoona'].canonicalUrl },
  { url: routesById.about.canonicalUrl },
])

assert.equal(routeLabels['service-lawn-mowing'], 'Lawn Mowing')

console.log(
  'Task 7 Lawn Mowing validation passed: exact ownership within the ten-service publication allowlist, WebPage/Service/BreadcrumbList parity, five approved areas, required links, provenance/claim restraint, Spanish coverage, and sitemap isolation.',
)
