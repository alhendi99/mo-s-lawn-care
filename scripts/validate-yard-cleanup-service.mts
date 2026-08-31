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
const route = routesById['service-yard-cleanup']

assert.equal(route.path, '/services/yard-cleanup')
assert.equal(route.primaryKeyword, 'yard cleanup des moines ia')
assert.deepEqual(route.secondaryKeywords, [
  'yard cleanup service Des Moines',
  'overgrown yard cleanup Des Moines',
  'property cleanup Des Moines',
  'ground clearance Des Moines',
  'overgrown lawn cleanup Des Moines',
])
assert.equal(route.title, "Yard Cleanup Service in Des Moines, IA | Mo's Lawn Care")
assert.equal(route.h1, 'Yard Cleanup Service in Des Moines, IA')
assert.equal(
  route.description,
  "Get overgrown yards and outdoor areas back under control with professional yard cleanup in Des Moines, IA. Contact Mo's for a free property estimate.",
)
assert.equal(route.canonicalUrl, 'https://www.moslawncaredsm.com/services/yard-cleanup')
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
])
assert.equal(publishedServiceDetails.length, 8)
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
  'grading',
  'snow-removal',
] as const

for (const slug of unpublishedTaskSlugs) {
  assert.equal(getPublishedServiceDetail(slug), undefined, `Unpublished service leaked: ${slug}`)
  assert.equal(routesById[`service-${slug}` as keyof typeof routesById].publicationStatus, 'planned')
}

const consolidatedAliases = [
  'overgrown-yard-cleanup',
  'overgrown-yards-cleanup',
  'ground-clearance',
  'property-cleanup',
  'overgrown-lawn-cleanup',
] as const

for (const alias of consolidatedAliases) {
  assert.equal(getPublishedServiceDetail(alias), undefined, `Competing cleanup alias resolves: ${alias}`)
  assert.equal(
    routeRegistry.some(({ path: routePath }) => routePath === `/services/${alias}`),
    false,
    `Competing cleanup route is registered: ${alias}`,
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
  ],
)

const serviceNode = buildServiceStructuredData(route, {
  name: yardCleanupService.schema.name,
  serviceType: yardCleanupService.schema.serviceType,
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
assert.equal(serviceNode.name, 'Yard Cleanup Service')
assert.equal(serviceNode.serviceType, 'Yard cleanup')
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
assert.deepEqual(visibleBreadcrumb.map(({ label }) => label), ['Home', 'Services', 'Yard Cleanup'])
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
  'hauling',
  'disposal',
  'equipment',
  'excavation',
  'grading',
  'lot clearing',
  'tree removal',
  'stump removal',
  'hazardous waste',
  'guarantee',
]) {
  assert.equal(serializedGraph.toLowerCase().includes(forbiddenSchemaTerm.toLowerCase()), false, `Forbidden schema: ${forbiddenSchemaTerm}`)
}

assert.deepEqual(
  yardCleanupService.relatedServices.map(({ routeId }) => routeId),
  [
    'service-lawn-mowing',
    'service-spring-cleanup',
    'service-fall-cleanup-leaf-removal',
    'service-grading',
    'service-landscaping',
  ],
)
assert.deepEqual(yardCleanupService.serviceArea.cities, [
  'Des Moines',
  'Ankeny',
  'Waukee',
  'Norwalk',
  'Altoona',
])
assert.equal(yardCleanupService.hero.image.provenance, 'existing-neutral-property-image')
assert.equal(yardCleanupService.hero.image.src, '/contact.webp')
assert.equal(yardCleanupService.hero.compactHeading, true)
assert.equal('workPreview' in yardCleanupService, false)
assert.doesNotMatch(
  `${yardCleanupService.hero.image.alt} ${yardCleanupService.hero.image.caption}`,
  /des moines|ankeny|waukee|norwalk|altoona|yard cleanup project|ground clearance project|overgrown-yard cleanup|completed by mo/i,
)
assert.match(yardCleanupService.hero.image.caption, /no cleanup, result, city or customer attribution/i)

const approvedReviewSource = read('components/testimonials.tsx').replaceAll('\\"', '"')
assert.deepEqual(yardCleanupService.reviews.items.map(({ name }) => name), [
  'Morgan Wentland',
  'Danielle Russell',
])
for (const review of yardCleanupService.reviews.items) {
  assert(approvedReviewSource.includes(review.quote), `Review excerpt is not verbatim: ${review.name}`)
  assert.match(review.quote, /yard (?:clean up|cleaned up)/i)
}
assert.match(yardCleanupService.reviews.introduction, /individual customer experiences/i)
assert.match(yardCleanupService.reviews.introduction, /not proof of a standard process/i)
assert.match(yardCleanupService.reviews.introduction, /turnaround or guaranteed result/i)

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
  hero: yardCleanupService.hero,
  introduction: yardCleanupService.introduction,
  scope: yardCleanupService.scope,
  relatedServices: yardCleanupService.relatedServices,
  propertyContext: yardCleanupService.propertyContext,
  reviewIntroduction: yardCleanupService.reviews.introduction,
  serviceArea: yardCleanupService.serviceArea,
  faqs: yardCleanupService.faqs,
  finalCta: yardCleanupService.finalCta,
}).toLowerCase()

for (const requiredTerm of [
  'yard cleanup in des moines, ia',
  'yard cleanup service in des moines',
  'overgrown yard cleanup in des moines',
  'property cleanup in des moines',
  'ground clearance in des moines',
  'overgrown lawn cleanup in des moines',
]) {
  assert(visibleBusinessCopy.includes(requiredTerm), `Missing approved keyword/term: ${requiredTerm}`)
}
assert.match(visibleBusinessCopy, /yard cleanup, overgrown yards cleanup and ground clearance share this one service path/)
assert.match(visibleBusinessCopy, /ground clearance is an ordinary property-care label/)
assert.match(visibleBusinessCopy, /not a claim of heavy land-clearing work/)

for (const unsupportedAffirmativeClaim of [
  'we haul',
  'debris hauling service',
  'we dispose',
  'dump fees',
  'junk removal',
  'trash removal',
  'hazardous waste service',
  'chemical waste service',
  'construction cleanup',
  'construction debris removal',
  'lot clearing service',
  'major lot clearing',
  'forestry clearing',
  'tree removal service',
  'stump removal service',
  'brush hauling',
  'branch hauling',
  'skid steer',
  'excavator',
  'bulldozer',
  'dump trailer',
  'dump truck',
  'brush cutter',
  'forestry mower',
  'chipper',
  'stump grinder',
  'we excavate',
  'excavation service',
  'we grade',
  'drainage correction',
  'site preparation',
  'land development',
  'same-day cleanup',
  'next-day cleanup',
  'weekly cleanup',
  'monthly cleanup',
  'guaranteed turnaround',
  'guaranteed cleanup',
  'completely clears your property',
  'restores any yard',
  'permanent cleanup',
  'increase property value',
  'starting at $',
  'contract required',
]) {
  assert.equal(
    visibleBusinessCopy.includes(unsupportedAffirmativeClaim),
    false,
    `Unsupported affirmative claim: ${unsupportedAffirmativeClaim}`,
  )
}

assert.match(visibleBusinessCopy, /do not define a standard task list, equipment list or disposal process/)
assert.match(visibleBusinessCopy, /no recurring cleanup schedule or standard maintenance agreement/)
assert.match(visibleBusinessCopy, /does not establish heavy lot clearing, excavation, demolition, grading or land-development work/)
assert.match(visibleBusinessCopy, /do not publish a standard task list, equipment list, hauling service or disposal process/)
assert.match(visibleBusinessCopy, /no image on this page is presented as a yard cleanup/)

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

for (const value of collectTranslatableStrings(yardCleanupService)) {
  assert(spanish[value], `Missing service-content Spanish translation: ${value}`)
}
assert.match(spanish[route.h1], /limpieza de jardín/i)
assert.match(spanish[yardCleanupService.scope.items[2].description], /no establece/i)
assert.doesNotMatch(
  spanish[yardCleanupService.scope.items[2].description],
  /ofrecemos excavación|incluye nivelación|maquinaria pesada disponible/i,
)

assert.deepEqual(buildSitemapEntries(), [
  { url: routesById.home.canonicalUrl },
  { url: routesById.services.canonicalUrl },
  { url: routesById['service-lawn-mowing'].canonicalUrl },
  { url: routesById['service-aeration-overseeding'].canonicalUrl },
  { url: routesById['service-fertilization-weed-control'].canonicalUrl },
  { url: routesById['service-landscaping'].canonicalUrl },
  { url: routesById['service-flower-bed-maintenance'].canonicalUrl },
  { url: route.canonicalUrl },
  { url: routesById['service-spring-cleanup'].canonicalUrl },
  { url: routesById['service-fall-cleanup-leaf-removal'].canonicalUrl },
])
for (const slug of unpublishedTaskSlugs) {
  assert.equal(buildSitemapEntries().some(({ url }) => url.endsWith(`/services/${slug}`)), false)
}
for (const alias of consolidatedAliases) {
  assert.equal(buildSitemapEntries().some(({ url }) => url.endsWith(`/services/${alias}`)), false)
}

assert.equal(routeLabels['service-yard-cleanup'], 'Yard Cleanup')

console.log(
  'Task 12 Yard Cleanup validation passed: exact consolidated ownership, eight-service publication allowlist, WebPage/Service/BreadcrumbList parity, required links, strict ordinary-cleanup boundaries, neutral hero without work preview, cleanup-specific review labeling, Spanish coverage, and sitemap isolation.',
)
