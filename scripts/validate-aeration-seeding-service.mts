import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

import { getBreadcrumbItems, routeLabels, routeRegistry, routesById } from '../content/routes.ts'
import { aerationOverseedingService } from '../content/services/aeration-overseeding.ts'
import { fertilizationWeedControlService } from '../content/services/fertilization-weed-control.ts'
import { flowerBedMaintenanceService } from '../content/services/flower-bed-maintenance.ts'
import { landscapingService } from '../content/services/landscaping.ts'
import { springCleanupService } from '../content/services/spring-cleanup.ts'
import { yardCleanupService } from '../content/services/yard-cleanup.ts'
import {
  getPublishedServiceDetail,
  publishedServiceDetails,
  publishedServiceSlugs,
} from '../content/services/index.ts'
import { buildRouteMetadata, buildSitemapEntries } from '../lib/metadata.ts'
import { approvedBusinessFacts } from '../lib/site.ts'
import {
  ORGANIZATION_ID,
  buildPageStructuredData,
  buildServiceStructuredData,
} from '../lib/structured-data.ts'

const projectRoot = process.cwd()
const read = (relativePath: string) => fs.readFileSync(path.join(projectRoot, relativePath), 'utf8')
const route = routesById['service-aeration-overseeding']

assert.equal(route.path, '/services/aeration-overseeding')
assert.equal(route.primaryKeyword, 'lawn aeration des moines ia')
assert.deepEqual(route.secondaryKeywords, [
  'aeration service Des Moines',
  'lawn seeding Des Moines',
  'overseeding Des Moines',
  'core aeration Des Moines',
  'aeration and seeding Des Moines',
])
assert.equal(route.title, "Lawn Aeration & Seeding in Des Moines, IA | Mo's Lawn Care")
assert.equal(route.h1, 'Lawn Aeration & Seeding in Des Moines, IA')
assert.equal(
  route.description,
  "Improve thin or compacted lawns with aeration and seeding services in Des Moines, IA. See how Mo's can help and request a free property estimate.",
)
assert.equal(
  route.canonicalUrl,
  'https://www.moslawncaredsm.com/services/aeration-overseeding',
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
  'snow-removal',
])
assert.equal(publishedServiceDetails.length, 10)
assert.equal(getPublishedServiceDetail('aeration-overseeding'), aerationOverseedingService)
assert(getPublishedServiceDetail('lawn-mowing'))
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

for (const alias of ['aeration', 'seeding', 'overseeding', 'core-aeration', 'lawn-seeding']) {
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
  name: aerationOverseedingService.schema.name,
  serviceType: aerationOverseedingService.schema.serviceType,
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
assert.equal(serviceNode.name, 'Aeration and Seeding')
assert.equal(serviceNode.serviceType, 'Lawn aeration and seeding')
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
  'Aeration & Seeding',
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
  'guarantee',
]) {
  assert.equal(serializedGraph.includes(forbiddenSchemaTerm), false, `Forbidden schema: ${forbiddenSchemaTerm}`)
}

assert.deepEqual(
  aerationOverseedingService.relatedServices.map(({ routeId }) => routeId),
  [
    'service-fertilization-weed-control',
    'service-lawn-mowing',
    'service-spring-cleanup',
    'services',
  ],
)
assert.deepEqual(aerationOverseedingService.serviceArea.cities, [
  'Des Moines',
  'Ankeny',
  'Waukee',
  'Norwalk',
  'Altoona',
])
assert.equal(aerationOverseedingService.hero.image.provenance, 'existing-neutral-property-image')
assert.equal(
  aerationOverseedingService.hero.image.alt,
  'Front lawn with young trees beside homes and driveways',
)
assert.deepEqual(aerationOverseedingService.reviews.items.map(({ name }) => name), [
  'Lori Stiles',
  'Mark McGrew',
])
assert(aerationOverseedingService.reviews.items.every(({ quote }) => /aerat/i.test(quote)))
const approvedReviewSource = read('content/reviews.ts')
for (const review of aerationOverseedingService.reviews.items) {
  assert(approvedReviewSource.includes(review.quote), `Review excerpt is not verbatim: ${review.name}`)
}

const componentSource = read('components/service-detail-page.tsx')
const dynamicRouteSource = read('app/services/[slug]/page.tsx')
const contentSource = read('content/services/aeration-overseeding.ts')
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

for (const futureArticle of [
  'when-to-aerate-lawn-iowa',
  'best-time-to-overseed-lawn-iowa',
]) {
  assert.doesNotMatch(componentSource, new RegExp(futureArticle))
  assert.doesNotMatch(contentSource, new RegExp(futureArticle))
}

const visibleBusinessCopy = JSON.stringify({
  hero: aerationOverseedingService.hero,
  introduction: aerationOverseedingService.introduction,
  scope: aerationOverseedingService.scope,
  relatedServices: aerationOverseedingService.relatedServices,
  propertyContext: aerationOverseedingService.propertyContext,
  serviceArea: aerationOverseedingService.serviceArea,
  faqs: aerationOverseedingService.faqs,
  finalCta: aerationOverseedingService.finalCta,
}).toLowerCase()

for (const requiredTerm of [
  'aeration and seeding',
  'lawn aeration in des moines, ia',
  'aeration service in des moines',
  'lawn seeding in des moines',
  'overseeding in des moines',
  'core aeration in des moines',
]) {
  assert(visibleBusinessCopy.includes(requiredTerm), `Missing approved keyword/term: ${requiredTerm}`)
}

for (const unsupportedAffirmativeClaim of [
  'we pull cores',
  'mo\'s pulls cores',
  'we use a core aerator',
  'we use a slit seeder',
  'we broadcast seed',
  'seed directly into the holes',
  'our seed blend',
  'our seed mix',
  'two passes',
  'fertilization is included',
  'weed control is included',
  'guarantees a thicker lawn',
  'guarantees germination',
  'will fix compacted soil',
  'ensures germination',
  'eliminates bare spots',
  'watering every day',
]) {
  assert.equal(
    visibleBusinessCopy.includes(unsupportedAffirmativeClaim),
    false,
    `Unsupported affirmative claim: ${unsupportedAffirmativeClaim}`,
  )
}
assert.match(visibleBusinessCopy, /does not publish equipment, plug dimensions/)
assert.match(visibleBusinessCopy, /seed blend, cultivar and placement method are not published/)
assert.match(visibleBusinessCopy, /does not publish a universal date/)
assert.match(visibleBusinessCopy, /no treatment package is presented/)
assert.match(visibleBusinessCopy, /no result or germination guarantee is published/)

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

for (const value of collectTranslatableStrings(aerationOverseedingService)) {
  assert(spanish[value], `Missing service-content Spanish translation: ${value}`)
}

assert.deepEqual(buildSitemapEntries(), [
  { url: routesById.home.canonicalUrl },
  { url: routesById.services.canonicalUrl },
  { url: routesById['service-lawn-mowing'].canonicalUrl },
  { url: route.canonicalUrl },
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
  { url: routesById['our-work'].canonicalUrl },
  { url: routesById.reviews.canonicalUrl },
  { url: routesById.contact.canonicalUrl },
  { url: routesById.blog.canonicalUrl },
  { url: routesById['article-when-to-aerate-lawn-iowa'].canonicalUrl },
  { url: routesById['article-best-time-to-overseed-lawn-iowa'].canonicalUrl },
  { url: routesById['article-how-often-to-mow-lawn-iowa'].canonicalUrl },
  { url: routesById['article-spring-lawn-cleanup-des-moines'].canonicalUrl },
  { url: routesById['article-fall-leaf-cleanup-des-moines'].canonicalUrl },
])
for (const futureArticle of [
  routesById['article-central-iowa-lawn-care-calendar'].canonicalUrl,
]) {
  assert.equal(buildSitemapEntries().some(({ url }) => url === futureArticle), false)
}

assert.equal(routeLabels['service-aeration-overseeding'], 'Aeration & Seeding')

console.log(
  'Task 8 Aeration and Seeding validation passed: exact consolidated ownership, ten published service details, WebPage/Service/BreadcrumbList parity, required links, article boundaries, claim restraint, approved aeration reviews, Spanish coverage, and sitemap isolation.',
)
