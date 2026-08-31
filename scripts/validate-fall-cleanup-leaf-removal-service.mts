import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

import { getBreadcrumbItems, routeLabels, routeRegistry, routesById } from '../content/routes.ts'
import { fallCleanupLeafRemovalService } from '../content/services/fall-cleanup-leaf-removal.ts'
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
const route = routesById['service-fall-cleanup-leaf-removal']

assert.equal(route.path, '/services/fall-cleanup-leaf-removal')
assert.equal(route.primaryKeyword, 'leaf removal des moines ia')
assert.deepEqual(route.secondaryKeywords, [
  'fall cleanup Des Moines',
  'fall yard cleanup Des Moines',
  'leaf cleanup Des Moines',
  'leaf removal service Des Moines',
])
assert.equal(route.title, "Fall Cleanup & Leaf Removal in Des Moines, IA | Mo's Lawn Care")
assert.equal(route.h1, 'Fall Cleanup & Leaf Removal in Des Moines, IA')
assert.equal(
  route.description,
  "Clear leaves and seasonal debris with fall cleanup and leaf removal in Des Moines, IA. Request a free estimate from Mo's Lawn Care.",
)
assert.equal(
  route.canonicalUrl,
  'https://www.moslawncaredsm.com/services/fall-cleanup-leaf-removal',
)
assert.equal(route.implementationStatus, 'implemented')
assert.equal(route.publicationStatus, 'published')
assert.equal(route.indexability, 'indexable')

const metadata = buildRouteMetadata(route)
assert.equal(metadata.title, route.title)
assert.equal(metadata.description, route.description)
assert.equal(metadata.alternates?.canonical, route.canonicalUrl)
assert.equal((metadata.robots as { index?: boolean }).index, true)

const expectedPublishedSlugs = [
  'lawn-mowing',
  'aeration-overseeding',
  'fertilization-weed-control',
  'landscaping',
  'flower-bed-maintenance',
  'yard-cleanup',
  'spring-cleanup',
  'fall-cleanup-leaf-removal',
] as const
assert.deepEqual(publishedServiceSlugs, expectedPublishedSlugs)
assert.equal(publishedServiceDetails.length, 8)
assert.equal(
  getPublishedServiceDetail('fall-cleanup-leaf-removal'),
  fallCleanupLeafRemovalService,
)
for (const slug of expectedPublishedSlugs.slice(0, -1)) {
  assert(getPublishedServiceDetail(slug), `Previously published service missing: ${slug}`)
}

const unpublishedTaskSlugs = ['grading', 'snow-removal'] as const
for (const slug of unpublishedTaskSlugs) {
  assert.equal(getPublishedServiceDetail(slug), undefined, `Unpublished service leaked: ${slug}`)
  assert.equal(routesById[`service-${slug}`].publicationStatus, 'planned')
}

const aliases = [
  'fall-cleanup',
  'leaf-removal',
  'leaves-removal',
  'fall-yard-cleanup',
  'leaf-cleanup',
  'fall-leaf-removal',
  'seasonal-leaf-cleanup',
] as const
for (const alias of aliases) {
  assert.equal(getPublishedServiceDetail(alias), undefined, `Fall/leaf alias resolves: ${alias}`)
  assert.equal(
    routeRegistry.some(({ path: routePath }) => routePath === `/services/${alias}`),
    false,
    `Fall/leaf alias is registered: ${alias}`,
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
  name: fallCleanupLeafRemovalService.schema.name,
  serviceType: fallCleanupLeafRemovalService.schema.serviceType,
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
assert.equal(serviceNode.name, 'Fall Cleanup & Leaf Removal')
assert.equal(serviceNode.serviceType, 'Fall cleanup and leaf removal')
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
  'Fall Cleanup & Leaf Removal',
])
const schemaBreadcrumb = breadcrumbNodes[0].itemListElement as readonly Record<string, unknown>[]
assert.deepEqual(schemaBreadcrumb.map(({ name }) => name), visibleBreadcrumb.map(({ label }) => label))
assert.deepEqual(schemaBreadcrumb.map(({ position }) => position), [1, 2, 3])
assert.equal(schemaBreadcrumb.at(-1)?.item, route.canonicalUrl)

const serializedGraph = JSON.stringify(graph).toLowerCase()
for (const forbiddenSchemaTerm of [
  'review',
  'aggregaterating',
  'faqpage',
  'offer',
  'price',
  'address',
  'geo',
  'equipment',
  'municipal',
  'curbside',
  'bagging',
  'hauling',
  'disposal',
  'hard-surface',
  'guarantee',
]) {
  assert.equal(serializedGraph.includes(forbiddenSchemaTerm), false, `Forbidden schema: ${forbiddenSchemaTerm}`)
}

assert.deepEqual(
  fallCleanupLeafRemovalService.relatedServices.map(({ routeId }) => routeId),
  ['service-yard-cleanup', 'service-lawn-mowing', 'service-snow-removal'],
)
assert.deepEqual(fallCleanupLeafRemovalService.serviceArea.cities, [
  'Des Moines',
  'Ankeny',
  'Waukee',
  'Norwalk',
  'Altoona',
])
assert.equal(fallCleanupLeafRemovalService.hero.image.provenance, 'existing-neutral-property-image')
assert.equal(fallCleanupLeafRemovalService.hero.image.src, '/contact.webp')
assert.equal(fallCleanupLeafRemovalService.hero.compactHeading, true)
assert.equal('workPreview' in fallCleanupLeafRemovalService, false)
assert.doesNotMatch(
  `${fallCleanupLeafRemovalService.hero.image.alt} ${fallCleanupLeafRemovalService.hero.image.caption}`,
  /des moines|ankeny|waukee|norwalk|altoona|fall cleanup project|leaf removal project|fall date|completed by mo/i,
)
assert.match(
  fallCleanupLeafRemovalService.hero.image.caption,
  /no fall, leaf service, result, city or customer attribution/i,
)

const approvedReviewSource = read('components/testimonials.tsx')
assert.deepEqual(fallCleanupLeafRemovalService.reviews.items.map(({ name }) => name), [
  'Rick Terrones',
  'Zach Ten Haken',
])
for (const review of fallCleanupLeafRemovalService.reviews.items) {
  assert(approvedReviewSource.includes(review.quote), `Review excerpt is not verbatim: ${review.name}`)
  assert.doesNotMatch(review.quote, /leaf removal|leaf cleanup|fall cleanup|fall yard cleanup/i)
}
assert.match(fallCleanupLeafRemovalService.reviews.introduction, /general company feedback/i)
assert.match(fallCleanupLeafRemovalService.reviews.introduction, /not proof of a fall-service task/i)

const componentSource = read('components/service-detail-page.tsx')
const dynamicRouteSource = read('app/services/[slug]/page.tsx')
const contentSource = read('content/services/fall-cleanup-leaf-removal.ts')
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

const futureArticleSlug = 'fall-leaf-cleanup-des-moines'
assert.doesNotMatch(componentSource, /Helpful Resources|fall-leaf-cleanup-des-moines/)
assert.doesNotMatch(contentSource, /Helpful Resources|fall-leaf-cleanup-des-moines/i)
assert.equal(fs.existsSync(path.join(projectRoot, `content/blog/${futureArticleSlug}.ts`)), false)
assert.equal(fs.existsSync(path.join(projectRoot, 'app/blog/[slug]/page.tsx')), false)
assert.equal(routesById['article-fall-leaf-cleanup-des-moines'].publicationStatus, 'planned')

const visibleBusinessCopy = JSON.stringify({
  hero: fallCleanupLeafRemovalService.hero,
  introduction: fallCleanupLeafRemovalService.introduction,
  scope: fallCleanupLeafRemovalService.scope,
  relatedServices: fallCleanupLeafRemovalService.relatedServices,
  propertyContext: fallCleanupLeafRemovalService.propertyContext,
  reviewIntroduction: fallCleanupLeafRemovalService.reviews.introduction,
  serviceArea: fallCleanupLeafRemovalService.serviceArea,
  faqs: fallCleanupLeafRemovalService.faqs,
  finalCta: fallCleanupLeafRemovalService.finalCta,
}).toLowerCase()

for (const requiredTerm of [
  'leaf removal in des moines, ia',
  'fall cleanup in des moines',
  'fall yard cleanup in des moines',
  'leaf cleanup in des moines',
  'leaf removal service in des moines',
  'fall cleanup and leaf removal',
  'seasonal debris',
  'request a free estimate',
]) {
  assert(visibleBusinessCopy.includes(requiredTerm), `Missing approved commercial term: ${requiredTerm}`)
}
for (const informationalPattern of [
  'fall leaf cleanup tips',
  'step-by-step',
  'do it yourself',
  'do-it-yourself',
  'checklist',
  'helpful resources',
  'municipal guide',
  'yard-waste guide',
]) {
  assert.equal(visibleBusinessCopy.includes(informationalPattern), false, `Article intent leaked: ${informationalPattern}`)
}
for (const unsupportedAffirmativeClaim of [
  'we bag',
  'we collect',
  'we haul',
  'we dispose',
  'we compost',
  'we recycle',
  'curb placement is included',
  'municipal collection',
  'city leaf collection',
  'yard waste bags',
  'leaf bags are included',
  'we blow',
  'sidewalk clearing is included',
  'driveway clearing is included',
  'patio clearing is included',
  'branch removal is included',
  'brush removal is included',
  'leaf vacuum',
  'backpack blower',
  'dump trailer',
  'dump truck',
  'mowing is included',
  'final mowing is included',
  'before first snow',
  'regardless of weather',
  'we guarantee completion',
  'every leaf',
  '100% removal',
  'guaranteed clean lawn',
  'starting at $',
  'seasonal package',
  'annual contract',
]) {
  assert.equal(
    visibleBusinessCopy.includes(unsupportedAffirmativeClaim),
    false,
    `Unsupported affirmative claim: ${unsupportedAffirmativeClaim}`,
  )
}
assert.match(visibleBusinessCopy, /one page owns both commercial intents/)
assert.match(visibleBusinessCopy, /do not publish collection, bagging, hauling, disposal/)
assert.match(visibleBusinessCopy, /no automatic mowing inclusion is published/)
assert.match(visibleBusinessCopy, /no bundle or automatic transition is published/)
assert.match(visibleBusinessCopy, /does not publish fixed fall dates/)
assert.match(visibleBusinessCopy, /no price, package, fixed schedule or guaranteed removal result/)

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

for (const value of collectTranslatableStrings(fallCleanupLeafRemovalService)) {
  assert(spanish[value], `Missing service-content Spanish translation: ${value}`)
}
assert.match(spanish[route.h1], /limpieza de otoño y retiro de hojas/i)
assert.doesNotMatch(
  spanish[fallCleanupLeafRemovalService.scope.introduction],
  /embolsamos|recogemos|transportamos|desechamos|soplamos|garantizamos/i,
)

assert.deepEqual(buildSitemapEntries(), [
  { url: routesById.home.canonicalUrl },
  { url: routesById.services.canonicalUrl },
  { url: routesById['service-lawn-mowing'].canonicalUrl },
  { url: routesById['service-aeration-overseeding'].canonicalUrl },
  { url: routesById['service-fertilization-weed-control'].canonicalUrl },
  { url: routesById['service-landscaping'].canonicalUrl },
  { url: routesById['service-flower-bed-maintenance'].canonicalUrl },
  { url: routesById['service-yard-cleanup'].canonicalUrl },
  { url: routesById['service-spring-cleanup'].canonicalUrl },
  { url: route.canonicalUrl },
])
for (const slug of [...unpublishedTaskSlugs, ...aliases]) {
  assert.equal(buildSitemapEntries().some(({ url }) => url.endsWith(`/services/${slug}`)), false)
}
assert.equal(
  buildSitemapEntries().some(
    ({ url }) => url === routesById['article-fall-leaf-cleanup-des-moines'].canonicalUrl,
  ),
  false,
)
assert.equal(routeLabels['service-fall-cleanup-leaf-removal'], 'Fall Cleanup & Leaf Removal')

console.log(
  'Task 14 Fall Cleanup & Leaf Removal validation passed: exact consolidated commercial ownership, eight-service publication allowlist, WebPage/Service/BreadcrumbList parity, required links with Snow Removal still planned, strict capability and article-intent boundaries, neutral hero without work preview, general-review labeling, Spanish coverage, alias isolation, and ten-URL sitemap isolation.',
)
