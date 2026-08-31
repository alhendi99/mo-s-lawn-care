import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

import { getBreadcrumbItems, routeLabels, routeRegistry, routesById } from '../content/routes.ts'
import { aerationOverseedingService } from '../content/services/aeration-overseeding.ts'
import { fertilizationWeedControlService } from '../content/services/fertilization-weed-control.ts'
import { flowerBedMaintenanceService } from '../content/services/flower-bed-maintenance.ts'
import {
  getPublishedServiceDetail,
  publishedServiceDetails,
  publishedServiceSlugs,
} from '../content/services/index.ts'
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
const route = routesById['service-flower-bed-maintenance']

assert.equal(route.path, '/services/flower-bed-maintenance')
assert.equal(route.primaryKeyword, 'flower bed maintenance des moines')
assert.deepEqual(route.secondaryKeywords, [
  'landscape bed maintenance Des Moines',
  'flower bed cleanup Des Moines',
  'garden bed maintenance Des Moines',
  'bed cleanup Des Moines',
])
assert.equal(route.title, "Flower Bed Maintenance in Des Moines, IA | Mo's Lawn Care")
assert.equal(route.h1, 'Flower Bed Maintenance in Des Moines, IA')
assert.equal(
  route.description,
  "Keep flower beds clean and maintained with professional bed care in Des Moines, IA. Request a free estimate from Mo's Lawn Care for your property.",
)
assert.equal(
  route.canonicalUrl,
  'https://www.moslawncaredsm.com/services/flower-bed-maintenance',
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
])
assert.equal(publishedServiceDetails.length, 7)
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

const unpublishedTaskSlugs = [
  'fall-cleanup-leaf-removal',
  'grading',
  'snow-removal',
] as const

for (const slug of unpublishedTaskSlugs) {
  assert.equal(getPublishedServiceDetail(slug), undefined, `Unpublished service leaked: ${slug}`)
  assert.equal(routesById[`service-${slug}` as keyof typeof routesById].publicationStatus, 'planned')
}

for (const alias of [
  'flower-bed-cleanup',
  'garden-bed-maintenance',
  'landscape-bed-maintenance',
  'bed-cleanup',
  'garden-cleanup',
]) {
  assert.equal(getPublishedServiceDetail(alias), undefined, `Competing bed-service alias resolves: ${alias}`)
  assert.equal(
    routeRegistry.some(({ path: routePath }) => routePath === `/services/${alias}`),
    false,
    `Competing bed-service route is registered: ${alias}`,
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
  ],
)

const serviceNode = buildServiceStructuredData(route, {
  name: flowerBedMaintenanceService.schema.name,
  serviceType: flowerBedMaintenanceService.schema.serviceType,
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
assert.equal(serviceNode.name, 'Flower Bed Maintenance')
assert.equal(serviceNode.serviceType, 'Flower bed maintenance')
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
  'Flower Bed Maintenance',
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
  'Product',
  'Gardener',
  'Horticulturist',
  'design',
  'installation',
  'planting',
  'mulch',
  'pruning',
  'edging',
  'hauling',
  'guarantee',
]) {
  assert.equal(serializedGraph.includes(forbiddenSchemaTerm), false, `Forbidden schema: ${forbiddenSchemaTerm}`)
}

assert.deepEqual(
  flowerBedMaintenanceService.relatedServices.map(({ routeId }) => routeId),
  [
    'service-landscaping',
    'service-spring-cleanup',
    'service-fall-cleanup-leaf-removal',
    'service-yard-cleanup',
  ],
)
assert.deepEqual(flowerBedMaintenanceService.serviceArea.cities, [
  'Des Moines',
  'Ankeny',
  'Waukee',
  'Norwalk',
  'Altoona',
])
assert.equal(flowerBedMaintenanceService.hero.image.provenance, 'existing-property-care-gallery')
assert.equal(flowerBedMaintenanceService.hero.image.src, '/media/gallery7.webp')
assert.equal(flowerBedMaintenanceService.hero.compactHeading, true)
assert.equal('workPreview' in flowerBedMaintenanceService, false)
assert.doesNotMatch(
  `${flowerBedMaintenanceService.hero.image.alt} ${flowerBedMaintenanceService.hero.image.caption}`,
  /des moines|ankeny|waukee|norwalk|altoona|flower bed maintenance project|bed cleanup result|maintained by mo|residential bed project/i,
)
assert.match(flowerBedMaintenanceService.hero.image.caption, /no service or city attribution/i)

const approvedReviewSource = read('components/testimonials.tsx').replaceAll('\\"', '"')
assert.deepEqual(flowerBedMaintenanceService.reviews.items.map(({ name }) => name), [
  'Tony Dugan',
  'Rick Terrones',
])
for (const review of flowerBedMaintenanceService.reviews.items) {
  assert(approvedReviewSource.includes(review.quote), `Review excerpt is not verbatim: ${review.name}`)
}
assert.match(flowerBedMaintenanceService.reviews.items[0].quote, /landscape beds/i)
assert.doesNotMatch(flowerBedMaintenanceService.reviews.items[1].quote, /flower|landscape bed|garden bed/i)
assert.match(flowerBedMaintenanceService.reviews.introduction, /individual experience/i)
assert.match(flowerBedMaintenanceService.reviews.introduction, /not a standard bed-maintenance process/i)
assert.match(flowerBedMaintenanceService.reviews.introduction, /general company feedback/i)

const componentSource = read('components/service-detail-page.tsx')
const dynamicRouteSource = read('app/services/[slug]/page.tsx')
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
  hero: flowerBedMaintenanceService.hero,
  introduction: flowerBedMaintenanceService.introduction,
  scope: flowerBedMaintenanceService.scope,
  relatedServices: flowerBedMaintenanceService.relatedServices,
  propertyContext: flowerBedMaintenanceService.propertyContext,
  serviceArea: flowerBedMaintenanceService.serviceArea,
  faqs: flowerBedMaintenanceService.faqs,
  finalCta: flowerBedMaintenanceService.finalCta,
}).toLowerCase()

for (const requiredTerm of [
  'flower bed maintenance in des moines',
  'landscape bed maintenance in des moines',
  'flower bed cleanup in des moines',
  'garden bed maintenance in des moines',
  'bed cleanup in des moines',
]) {
  assert(visibleBusinessCopy.includes(requiredTerm), `Missing approved keyword/term: ${requiredTerm}`)
}

for (const unsupportedAffirmativeClaim of [
  'gardening experts',
  'horticulture specialists',
  'plant-health experts',
  'certified gardeners',
  'master gardeners',
  'landscape designers',
  'plant-care professionals',
  'we plant',
  'we select plants',
  'we design',
  'we redesign',
  'we install',
  'includes cutback',
  'we cut back',
  'includes pruning',
  'we prune',
  'includes trimming',
  'we trim',
  'includes edging',
  'we edge',
  'includes mulch',
  'we mulch',
  'we haul',
  'debris hauling',
  'weed pulling',
  'weed treatment',
  'we apply herbicide',
  'we apply pesticide',
  'we fertilize flowers',
  'diagnose plant disease',
  'improve plant health',
  'weekly bed maintenance',
  'monthly service',
  'recurring contract',
  'weed-free beds',
  'perfect edges',
  'guaranteed appearance',
  'increase property value',
  'starting at $',
  'deposit required',
]) {
  assert.equal(
    visibleBusinessCopy.includes(unsupportedAffirmativeClaim),
    false,
    `Unsupported affirmative claim: ${unsupportedAffirmativeClaim}`,
  )
}

for (const unsupportedTaskTerm of [
  'cutback',
  'pruning',
  'trimming',
  'deadheading',
  'plant division',
  'transplanting',
  'soil amendment',
  'decorative stone',
  'rock installation',
  'edging',
  'hauling',
  'disposal',
  'irrigation',
]) {
  assert.equal(visibleBusinessCopy.includes(unsupportedTaskTerm), false, `Unverified task term: ${unsupportedTaskTerm}`)
}

assert.match(visibleBusinessCopy, /do not define a standard gardening process, material package or recurring schedule/)
assert.match(visibleBusinessCopy, /those phrases describe the need; they do not establish a standard task list or process/)
assert.match(visibleBusinessCopy, /exact tasks, timing and any materials must be confirmed/)
assert.match(visibleBusinessCopy, /no image on this page is presented as a flower bed maintenance project/)

const spanish = JSON.parse(read('lib/es-translations.json')) as Record<string, string>
assert(spanish[route.h1], `Missing Spanish translation: ${route.h1}`)

function collectTranslatableStrings(value: unknown, key = '', strings = new Set<string>()) {
  if (typeof value === 'string') {
    if (
      ![
        'slug',
        'routeId',
        'src',
        'provenance',
        'name',
        'cityAttribution',
        'serviceAttribution',
      ].includes(key) &&
      !/^0\d$/.test(value)
    ) {
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

for (const value of collectTranslatableStrings(flowerBedMaintenanceService)) {
  assert(spanish[value], `Missing service-content Spanish translation: ${value}`)
}
assert.match(spanish[route.h1], /mantenimiento de macizos/i)
assert.doesNotMatch(
  spanish[flowerBedMaintenanceService.scope.introduction],
  /ofrecemos poda|instalamos|diseñamos|aplicamos herbicida|incluye acolchado/i,
)

assert.deepEqual(buildSitemapEntries(), [
  { url: routesById.home.canonicalUrl },
  { url: routesById.services.canonicalUrl },
  { url: routesById['service-lawn-mowing'].canonicalUrl },
  { url: routesById['service-aeration-overseeding'].canonicalUrl },
  { url: routesById['service-fertilization-weed-control'].canonicalUrl },
  { url: routesById['service-landscaping'].canonicalUrl },
  { url: route.canonicalUrl },
  { url: routesById['service-yard-cleanup'].canonicalUrl },
  { url: routesById['service-spring-cleanup'].canonicalUrl },
])
for (const slug of unpublishedTaskSlugs) {
  assert.equal(buildSitemapEntries().some(({ url }) => url.endsWith(`/services/${slug}`)), false)
}

assert.equal(routeLabels['service-flower-bed-maintenance'], 'Flower Bed Maintenance')

console.log(
  'Task 11 Flower Bed Maintenance validation passed: exact consolidated ownership, seven-service publication allowlist, WebPage/Service/BreadcrumbList parity, required links, strict gardening/process/material restraint, one neutral hero image without work preview, careful review labeling, Spanish coverage, and sitemap isolation.',
)
