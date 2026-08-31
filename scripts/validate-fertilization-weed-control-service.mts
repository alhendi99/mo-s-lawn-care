import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

import { getBreadcrumbItems, routeLabels, routeRegistry, routesById } from '../content/routes.ts'
import { aerationOverseedingService } from '../content/services/aeration-overseeding.ts'
import { fertilizationWeedControlService } from '../content/services/fertilization-weed-control.ts'
import { flowerBedMaintenanceService } from '../content/services/flower-bed-maintenance.ts'
import { landscapingService } from '../content/services/landscaping.ts'
import {
  getPublishedServiceDetail,
  publishedServiceDetails,
  publishedServiceSlugs,
} from '../content/services/index.ts'
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
const route = routesById['service-fertilization-weed-control']

assert.equal(route.path, '/services/fertilization-weed-control')
assert.equal(route.primaryKeyword, 'lawn fertilization des moines ia')
assert.deepEqual(route.secondaryKeywords, [
  'weed control Des Moines',
  'lawn weed control Des Moines',
  'fertilization service Des Moines',
  'lawn treatment Des Moines',
])
assert.equal(route.title, "Fertilization & Weed Control in Des Moines, IA | Mo's Lawn Care")
assert.equal(route.h1, 'Lawn Fertilization & Weed Control in Des Moines, IA')
assert.equal(
  route.description,
  "Professional lawn fertilization and weed control in Des Moines, IA for healthier, cleaner-looking turf. Request a free estimate from Mo's Lawn Care.",
)
assert.equal(
  route.canonicalUrl,
  'https://www.moslawncaredsm.com/services/fertilization-weed-control',
)
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
])
assert.equal(publishedServiceDetails.length, 9)
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
const unpublishedTaskSlugs = ['snow-removal'] as const

for (const slug of unpublishedTaskSlugs) {
  assert.equal(getPublishedServiceDetail(slug), undefined, `Unpublished service leaked: ${slug}`)
  assert.equal(routesById[`service-${slug}` as keyof typeof routesById].publicationStatus, 'planned')
}

for (const alias of [
  'fertilization',
  'weed-control',
  'lawn-treatment',
  'lawn-fertilizer',
  'herbicide-treatment',
]) {
  assert.equal(getPublishedServiceDetail(alias), undefined, `Competing service alias resolves: ${alias}`)
  assert.equal(
    routeRegistry.some(({ path: routePath }) => routePath === `/services/${alias}`),
    false,
    `Competing service route is registered: ${alias}`,
  )
}
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
  ],
)

const serviceNode = buildServiceStructuredData(route, {
  name: fertilizationWeedControlService.schema.name,
  serviceType: fertilizationWeedControlService.schema.serviceType,
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
assert.equal(serviceNode.name, 'Fertilization & Weed Control')
assert.equal(serviceNode.serviceType, 'Lawn fertilization and weed control')
assert.equal(serviceNode['@id'], `${route.canonicalUrl}#service`)
assert.equal(serviceNode.url, route.canonicalUrl)
assert.equal(serviceNode.description, route.description)
assert.deepEqual(serviceNode.provider, { '@id': ORGANIZATION_ID })

const schemaAreas = serviceNode.areaServed as readonly Record<string, unknown>[]
assert.equal(schemaAreas.length, 5)
assert.deepEqual(
  schemaAreas.map(({ name }) => name),
  approvedBusinessFacts.serviceAreas.map(({ city }) => city),
)

const visibleBreadcrumb = getBreadcrumbItems(route.id)
assert.deepEqual(visibleBreadcrumb.map(({ label }) => label), [
  'Home',
  'Services',
  'Fertilization & Weed Control',
])
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
  'license',
  'certification',
  'Product',
]) {
  assert.equal(serializedGraph.includes(forbiddenSchemaTerm), false, `Forbidden schema: ${forbiddenSchemaTerm}`)
}

assert.deepEqual(
  fertilizationWeedControlService.relatedServices.map(({ routeId }) => routeId),
  ['service-aeration-overseeding', 'service-lawn-mowing', 'services'],
)
assert.deepEqual(fertilizationWeedControlService.serviceArea.cities, [
  'Des Moines',
  'Ankeny',
  'Waukee',
  'Norwalk',
  'Altoona',
])
assert.equal(
  fertilizationWeedControlService.hero.image.provenance,
  'existing-neutral-property-image',
)
assert.equal(
  fertilizationWeedControlService.hero.image.alt,
  'Front lawns with young trees beside homes and driveways',
)

const approvedReviewSource = read('components/testimonials.tsx')
assert.deepEqual(fertilizationWeedControlService.reviews.items.map(({ name }) => name), [
  'Rick Terrones',
  "Ashley O'Connor",
])
for (const review of fertilizationWeedControlService.reviews.items) {
  assert(approvedReviewSource.includes(review.quote), `Review excerpt is not verbatim: ${review.name}`)
  assert.doesNotMatch(review.quote, /fertiliz|weed control/i)
}
assert.match(fertilizationWeedControlService.reviews.introduction, /general customer feedback/i)
assert.match(fertilizationWeedControlService.reviews.introduction, /not proof/i)

const componentSource = read('components/service-detail-page.tsx')
const dynamicRouteSource = read('app/services/[slug]/page.tsx')
const contentSource = read('content/services/fertilization-weed-control.ts')
assert.equal(componentSource.match(/<h1\b/g)?.length, 1)
assert.match(componentSource, /<InteriorPageShell/)
assert.match(componentSource, /buildServiceStructuredData/)
assert.match(componentSource, /routesById\.contact/)
assert.match(componentSource, /site\.phoneHref/)
assert.doesNotMatch(componentSource, /use client|gtag|generate_lead|form_start|form_submit_error/)
assert.match(dynamicRouteSource, /publishedServiceSlugs\.map/)
assert.match(dynamicRouteSource, /getPublishedServiceDetail\(slug\)/)
assert.match(dynamicRouteSource, /if \(!service\) notFound\(\)/)
assert.doesNotMatch(dynamicRouteSource, /serviceNavigationRouteIds|routeRegistry\.find/)

const visibleBusinessCopy = JSON.stringify({
  hero: fertilizationWeedControlService.hero,
  introduction: fertilizationWeedControlService.introduction,
  scope: fertilizationWeedControlService.scope,
  relatedServices: fertilizationWeedControlService.relatedServices,
  propertyContext: fertilizationWeedControlService.propertyContext,
  reviews: fertilizationWeedControlService.reviews,
  serviceArea: fertilizationWeedControlService.serviceArea,
  faqs: fertilizationWeedControlService.faqs,
  finalCta: fertilizationWeedControlService.finalCta,
}).toLowerCase()

for (const requiredTerm of [
  'lawn fertilization in des moines, ia',
  'weed control in des moines',
  'lawn weed control in des moines',
  'fertilization service in des moines',
  'lawn treatment in des moines',
]) {
  assert(visibleBusinessCopy.includes(requiredTerm), `Missing approved keyword/term: ${requiredTerm}`)
}

for (const prohibitedTechnicalTerm of [
  'pre-emergent',
  'post-emergent',
  'broadleaf treatment',
  'spot treatment',
  'blanket application',
  'selective herbicide',
  'non-selective herbicide',
  'active ingredient',
  'n-p-k',
  'granular treatment',
  'liquid treatment',
  'organic treatment',
  'synthetic treatment',
  'soil amendment',
  'micronutrient',
  'mixing instructions',
  're-entry time',
]) {
  assert.equal(visibleBusinessCopy.includes(prohibitedTechnicalTerm), false, `Technical claim: ${prohibitedTechnicalTerm}`)
}

for (const unsupportedAffirmativeClaim of [
  'we diagnose',
  'we inspect and diagnose',
  'we soil test',
  'we identify weed species',
  'we apply targeted',
  'we use seasonal formulas',
  'we provide follow-up treatments',
  'four applications',
  'five applications',
  'six applications',
  'weekly applications',
  'monthly applications',
  'licensed applicator',
  'certified applicator',
  'state approved',
  'epa certified',
  'safe for children',
  'safe for pets',
  'pet-friendly chemicals',
  'environmentally safe',
  'eco-friendly treatment',
  'non-toxic',
  'pollinator-safe',
  'pesticide-free',
  'eliminates weeds',
  'weed-free lawn',
  'kills all weeds',
  'prevents weeds',
  'guarantees greener grass',
  'guarantees thicker turf',
  'permanent weed control',
  'visible results within',
  'starting at $',
]) {
  assert.equal(
    visibleBusinessCopy.includes(unsupportedAffirmativeClaim),
    false,
    `Unsupported affirmative claim: ${unsupportedAffirmativeClaim}`,
  )
}

assert.match(visibleBusinessCopy, /does not publish a fertilizer brand, formula/)
assert.match(visibleBusinessCopy, /does not publish a chemical, product/)
assert.match(visibleBusinessCopy, /no price, contract, fixed visit count, recurring schedule/)
assert.match(visibleBusinessCopy, /no result is guaranteed here/)
assert.match(visibleBusinessCopy, /does not identify weed species or prescribe/)

const spanish = JSON.parse(read('lib/es-translations.json')) as Record<string, string>
assert(spanish[route.h1], `Missing Spanish translation: ${route.h1}`)

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

for (const value of collectTranslatableStrings(fertilizationWeedControlService)) {
  assert(spanish[value], `Missing service-content Spanish translation: ${value}`)
}
assert.match(spanish[route.h1], /Fertilización y control de malezas/)
assert.match(
  spanish[fertilizationWeedControlService.reviews.introduction],
  /no pruebas de un método o resultado/,
)

assert.deepEqual(buildSitemapEntries(), [
  { url: routesById.home.canonicalUrl },
  { url: routesById.services.canonicalUrl },
  { url: routesById['service-lawn-mowing'].canonicalUrl },
  { url: routesById['service-aeration-overseeding'].canonicalUrl },
  { url: route.canonicalUrl },
  { url: routesById['service-landscaping'].canonicalUrl },
  { url: routesById['service-flower-bed-maintenance'].canonicalUrl },
  { url: routesById['service-yard-cleanup'].canonicalUrl },
  { url: routesById['service-spring-cleanup'].canonicalUrl },
  { url: routesById['service-fall-cleanup-leaf-removal'].canonicalUrl },
  { url: routesById['service-grading'].canonicalUrl },
])
for (const slug of unpublishedTaskSlugs) {
  assert.equal(buildSitemapEntries().some(({ url }) => url.endsWith(`/services/${slug}`)), false)
}

assert.equal(routeLabels['service-fertilization-weed-control'], 'Fertilization & Weed Control')

console.log(
  'Task 9 Fertilization and Weed Control validation passed: exact consolidated ownership, nine-service publication allowlist, WebPage/Service/BreadcrumbList parity, required links, chemical/process/regulatory/safety/result restraint, general review and neutral image provenance, Spanish coverage, and sitemap isolation.',
)
