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
const route = routesById['service-landscaping']

assert.equal(route.path, '/services/landscaping')
assert.equal(route.primaryKeyword, 'landscaping des moines ia')
assert.deepEqual(route.secondaryKeywords, [
  'landscaping services Des Moines',
  'landscaping company Des Moines',
  'residential landscaping Des Moines',
  'landscape maintenance Des Moines',
])
assert.equal(route.title, "Landscaping Services in Des Moines, IA | Mo's Lawn Care")
assert.equal(route.h1, 'Landscaping Services in Des Moines, IA')
assert.equal(
  route.description,
  "Upgrade and maintain your outdoor space with landscaping services in Des Moines, IA. View Mo's work and request a free residential or commercial estimate.",
)
assert.equal(route.canonicalUrl, 'https://www.moslawncaredsm.com/services/landscaping')
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

for (const alias of [
  'landscape-design',
  'landscaping-services',
  'landscape-maintenance',
  'residential-landscaping',
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
  ],
)

const serviceNode = buildServiceStructuredData(route, {
  name: landscapingService.schema.name,
  serviceType: landscapingService.schema.serviceType,
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
assert.equal(serviceNode.name, 'Landscaping Services')
assert.equal(serviceNode.serviceType, 'Landscaping')
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
assert.deepEqual(visibleBreadcrumb.map(({ label }) => label), ['Home', 'Services', 'Landscaping'])
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
  'LandscapeArchitect',
  'architect',
  'engineer',
  'construction',
  'drainage',
]) {
  assert.equal(serializedGraph.includes(forbiddenSchemaTerm), false, `Forbidden schema: ${forbiddenSchemaTerm}`)
}

assert.deepEqual(
  landscapingService.relatedServices.map(({ routeId }) => routeId),
  ['service-flower-bed-maintenance', 'service-grading', 'service-yard-cleanup'],
)
assert.deepEqual(landscapingService.serviceArea.cities, [
  'Des Moines',
  'Ankeny',
  'Waukee',
  'Norwalk',
  'Altoona',
])
assert.equal(landscapingService.hero.image.provenance, 'existing-property-care-gallery')
assert.equal(landscapingService.hero.compactHeading, true)
assert.equal(landscapingService.workPreview?.images.length, 3)
assert(landscapingService.workPreview)
for (const image of landscapingService.workPreview.images) {
  assert.match(image.src, /^\/media\/gallery(?:7|9|11)\.webp$/)
  assert.equal(image.provenance, 'existing-property-care-gallery')
  assert.equal(image.cityAttribution, null)
  assert.equal(image.serviceAttribution, null)
  assert(!/des moines|ankeny|waukee|norwalk|altoona/i.test(`${image.alt} ${image.caption}`))
  assert(!/landscap|install|design|project/i.test(`${image.alt} ${image.caption}`))
}

const approvedReviewSource = read('content/reviews.ts')
for (const review of landscapingService.reviews.items) {
  assert(approvedReviewSource.includes(review.quote), `Review excerpt is not verbatim: ${review.name}`)
  assert.doesNotMatch(review.quote, /landscap/i)
}
assert.match(landscapingService.reviews.introduction, /general company feedback/i)
assert.match(landscapingService.reviews.introduction, /not proof of a landscaping capability/i)

const componentSource = read('components/service-detail-page.tsx')
const dynamicRouteSource = read('app/services/[slug]/page.tsx')
const contentSource = read('content/services/landscaping.ts')
assert.equal(componentSource.match(/<h1\b/g)?.length, 1)
assert.match(componentSource, /<InteriorPageShell/)
assert.match(componentSource, /buildServiceStructuredData/)
assert.match(componentSource, /content\.workPreview/)
assert.match(componentSource, /routesById\['our-work'\]/)
assert.match(componentSource, /routesById\['commercial-property-services'\]/)
assert.match(componentSource, /routesById\.contact/)
assert.match(componentSource, /site\.phoneHref/)
assert.doesNotMatch(componentSource, /use client|gtag|generate_lead|form_start|form_submit_error/)
assert.match(dynamicRouteSource, /publishedServiceSlugs\.map/)
assert.match(dynamicRouteSource, /getPublishedServiceDetail\(slug\)/)
assert.match(dynamicRouteSource, /if \(!service\) notFound\(\)/)
assert.doesNotMatch(dynamicRouteSource, /serviceNavigationRouteIds|routeRegistry\.find/)

const visibleBusinessCopy = JSON.stringify({
  hero: landscapingService.hero,
  introduction: landscapingService.introduction,
  scope: landscapingService.scope,
  relatedServices: landscapingService.relatedServices,
  propertyContext: landscapingService.propertyContext,
  workPreview: landscapingService.workPreview,
  reviews: landscapingService.reviews,
  serviceArea: landscapingService.serviceArea,
  faqs: landscapingService.faqs,
  finalCta: landscapingService.finalCta,
}).toLowerCase()

for (const requiredTerm of [
  'landscaping in des moines, ia',
  'landscaping services in des moines',
  'landscaping company in des moines',
  'residential landscaping in des moines',
  'landscape maintenance in des moines',
]) {
  assert(visibleBusinessCopy.includes(requiredTerm), `Missing approved keyword/term: ${requiredTerm}`)
}

for (const unsupportedAffirmativeClaim of [
  'we design',
  'our design process',
  'custom landscape plan',
  'landscape architecture',
  'landscape architect',
  'architectural design',
  'we install',
  'installation services',
  'we construct',
  'construction services',
  'we build patios',
  'we build retaining walls',
  'retaining wall installation',
  'patio installation',
  'paver installation',
  'irrigation installation',
  'landscape lighting installation',
  'drainage correction',
  'we improve drainage',
  'we provide drainage engineering',
  'includes drainage engineering',
  'grading is included',
  'excavation services',
  'tree removal',
  'stump grinding',
  'sod installation',
  'planting program',
  'guaranteed curb appeal',
  'increase property value',
  'maintenance-free',
  'starting at $',
  'minimum project',
  'deposit required',
  'financing available',
]) {
  assert.equal(
    visibleBusinessCopy.includes(unsupportedAffirmativeClaim),
    false,
    `Unsupported affirmative claim: ${unsupportedAffirmativeClaim}`,
  )
}

assert.match(visibleBusinessCopy, /do not define a standard design, installation, construction or maintenance package/)
assert.match(visibleBusinessCopy, /no drawings, material plan, formal project sequence, price, contract or result guarantee/)
assert.match(visibleBusinessCopy, /no city or exact service attribution/)
assert.match(visibleBusinessCopy, /full 79-image source list is not sent to this page/)

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

for (const value of collectTranslatableStrings(landscapingService)) {
  assert(spanish[value], `Missing service-content Spanish translation: ${value}`)
}
assert.match(spanish[route.h1], /paisajismo/i)
assert.doesNotMatch(
  spanish[landscapingService.scope.introduction],
  /diseñamos|instalamos|construimos|ingeniería de drenaje/i,
)

assert.deepEqual(buildSitemapEntries(), [
  { url: routesById.home.canonicalUrl },
  { url: routesById.services.canonicalUrl },
  { url: routesById['service-lawn-mowing'].canonicalUrl },
  { url: routesById['service-aeration-overseeding'].canonicalUrl },
  { url: routesById['service-fertilization-weed-control'].canonicalUrl },
  { url: route.canonicalUrl },
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
  { url: routesById['our-work'].canonicalUrl },
  { url: routesById.reviews.canonicalUrl },
  { url: routesById.contact.canonicalUrl },
  { url: routesById.blog.canonicalUrl },
  { url: routesById['article-when-to-aerate-lawn-iowa'].canonicalUrl },
  { url: routesById['article-best-time-to-overseed-lawn-iowa'].canonicalUrl },
  { url: routesById['article-how-often-to-mow-lawn-iowa'].canonicalUrl },
  { url: routesById['article-spring-lawn-cleanup-des-moines'].canonicalUrl },
  { url: routesById['article-fall-leaf-cleanup-des-moines'].canonicalUrl },
  { url: routesById['article-central-iowa-lawn-care-calendar'].canonicalUrl },
])

assert.equal(routeLabels['service-landscaping'], 'Landscaping')

console.log(
  'Task 10 Landscaping validation passed: exact ownership, ten-service publication allowlist, WebPage/Service/BreadcrumbList parity, required links, capability restraint, neutral three-image provenance, general-review labeling, Spanish coverage, and sitemap isolation.',
)
