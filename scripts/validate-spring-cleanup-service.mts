import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

import { getBreadcrumbItems, routeLabels, routeRegistry, routesById } from '../content/routes.ts'
import {
  getPublishedServiceDetail,
  publishedServiceDetails,
  publishedServiceSlugs,
} from '../content/services/index.ts'
import { springCleanupService } from '../content/services/spring-cleanup.ts'
import { buildRouteMetadata, buildSitemapEntries } from '../lib/metadata.ts'
import { approvedBusinessFacts } from '../lib/site.ts'
import {
  ORGANIZATION_ID,
  buildPageStructuredData,
  buildServiceStructuredData,
} from '../lib/structured-data.ts'

const projectRoot = process.cwd()
const read = (relativePath: string) => fs.readFileSync(path.join(projectRoot, relativePath), 'utf8')
const route = routesById['service-spring-cleanup']

assert.equal(route.path, '/services/spring-cleanup')
assert.equal(route.primaryKeyword, 'spring cleanup des moines ia')
assert.deepEqual(route.secondaryKeywords, [
  'spring yard cleanup Des Moines',
  'spring lawn cleanup Des Moines',
  'seasonal yard cleanup Des Moines',
])
assert.equal(route.title, "Spring Yard Cleanup in Des Moines, IA | Mo's Lawn Care")
assert.equal(route.h1, 'Spring Yard Cleanup in Des Moines, IA')
assert.equal(
  route.description,
  "Prepare your property for the growing season with spring yard cleanup in Des Moines, IA. Request a free estimate from Mo's Lawn Care.",
)
assert.equal(route.canonicalUrl, 'https://www.moslawncaredsm.com/services/spring-cleanup')
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
assert.equal(getPublishedServiceDetail('spring-cleanup'), springCleanupService)
for (const slug of [
  'lawn-mowing',
  'aeration-overseeding',
  'fertilization-weed-control',
  'landscaping',
  'flower-bed-maintenance',
  'yard-cleanup',
]) {
  assert(getPublishedServiceDetail(slug), `Previously published service missing: ${slug}`)
}
assert(getPublishedServiceDetail('grading'))
assert(getPublishedServiceDetail('snow-removal'))

const aliases = [
  'spring-yard-cleanup',
  'spring-lawn-cleanup',
  'seasonal-yard-cleanup',
  'spring-property-cleanup',
  'spring-cleanup-des-moines',
] as const
for (const alias of aliases) {
  assert.equal(getPublishedServiceDetail(alias), undefined, `Spring Cleanup alias resolves: ${alias}`)
  assert.equal(
    routeRegistry.some(({ path: routePath }) => routePath === `/services/${alias}`),
    false,
    `Spring Cleanup alias is registered: ${alias}`,
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
  name: springCleanupService.schema.name,
  serviceType: springCleanupService.schema.serviceType,
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
assert.equal(serviceNode.name, 'Spring Yard Cleanup')
assert.equal(serviceNode.serviceType, 'Spring cleanup')
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
assert.deepEqual(visibleBreadcrumb.map(({ label }) => label), ['Home', 'Services', 'Spring Cleanup'])
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
]) {
  assert.equal(serializedGraph.includes(forbiddenSchemaTerm), false, `Forbidden schema: ${forbiddenSchemaTerm}`)
}
const serializedServiceNode = JSON.stringify(serviceNode).toLowerCase()
for (const forbiddenServiceClaim of [
  'guarantee',
  'debris removal',
  'hauling',
  'disposal',
  'fertilizer',
  'aeration',
  'seeding',
  'fixed schedule',
  'weather promise',
]) {
  assert.equal(
    serializedServiceNode.includes(forbiddenServiceClaim),
    false,
    `Forbidden Service claim: ${forbiddenServiceClaim}`,
  )
}

assert.deepEqual(
  springCleanupService.relatedServices.map(({ routeId }) => routeId),
  [
    'service-lawn-mowing',
    'service-flower-bed-maintenance',
    'service-yard-cleanup',
    'service-landscaping',
  ],
)
assert.deepEqual(springCleanupService.serviceArea.cities, [
  'Des Moines',
  'Ankeny',
  'Waukee',
  'Norwalk',
  'Altoona',
])
assert.equal(springCleanupService.hero.image.provenance, 'existing-neutral-property-image')
assert.equal(springCleanupService.hero.image.src, '/contact.webp')
assert.equal(springCleanupService.hero.compactHeading, true)
assert.equal('workPreview' in springCleanupService, false)
assert.doesNotMatch(
  `${springCleanupService.hero.image.alt} ${springCleanupService.hero.image.caption}`,
  /des moines|ankeny|waukee|norwalk|altoona|spring cleanup project|spring date|completed by mo/i,
)
assert.match(springCleanupService.hero.image.caption, /no spring, service, result, city or customer attribution/i)

const approvedReviewSource = read('content/reviews.ts')
assert.deepEqual(springCleanupService.reviews.items.map(({ name }) => name), [
  'Rick Terrones',
  'Zach Ten Haken',
])
for (const review of springCleanupService.reviews.items) {
  assert(approvedReviewSource.includes(review.quote), `Review excerpt is not verbatim: ${review.name}`)
  assert.doesNotMatch(review.quote, /spring cleanup|spring yard|spring lawn|seasonal cleanup/i)
}
assert.match(springCleanupService.reviews.introduction, /general company feedback/i)
assert.match(springCleanupService.reviews.introduction, /not proof of a Spring Cleanup task/i)

const componentSource = read('components/service-detail-page.tsx')
const dynamicRouteSource = read('app/services/[slug]/page.tsx')
const contentSource = read('content/services/spring-cleanup.ts')
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
assert.doesNotMatch(componentSource, /Helpful Resources|spring-lawn-cleanup-des-moines/)
assert.doesNotMatch(contentSource, /Helpful Resources|spring-lawn-cleanup-des-moines|checklist/i)
assert.equal(fs.existsSync(path.join(projectRoot, 'content/blog/spring-lawn-cleanup-des-moines.ts')), true)
assert.equal(fs.existsSync(path.join(projectRoot, 'app/blog/[slug]/page.tsx')), true)
assert.equal(routesById['article-spring-lawn-cleanup-des-moines'].publicationStatus, 'planned')

const visibleBusinessCopy = JSON.stringify({
  hero: springCleanupService.hero,
  introduction: springCleanupService.introduction,
  scope: springCleanupService.scope,
  relatedServices: springCleanupService.relatedServices,
  propertyContext: springCleanupService.propertyContext,
  reviewIntroduction: springCleanupService.reviews.introduction,
  serviceArea: springCleanupService.serviceArea,
  faqs: springCleanupService.faqs,
  finalCta: springCleanupService.finalCta,
}).toLowerCase()

for (const requiredTerm of [
  'spring cleanup in des moines, ia',
  'spring yard cleanup in des moines',
  'spring lawn cleanup in des moines',
  'seasonal yard cleanup in des moines',
  'request a free estimate',
  'professional service',
]) {
  assert(visibleBusinessCopy.includes(requiredTerm), `Missing approved commercial term: ${requiredTerm}`)
}
for (const informationalPattern of [
  'spring cleanup checklist',
  'step-by-step',
  'do it yourself',
  'do-it-yourself',
  'first,',
  'next,',
  'finally,',
  'lawn care calendar',
  'municipal collection',
  'yard-waste rules',
]) {
  assert.equal(visibleBusinessCopy.includes(informationalPattern), false, `Article intent leaked: ${informationalPattern}`)
}

for (const unverifiedTaskTerm of [
  'debris',
  'leaves',
  'branches',
  'bagging',
  'loading',
  'hauling',
  'disposal',
  'dump fee',
  'cutback',
  'pruning',
  'deadheading',
  'edging',
  'mulch',
  'weed removal',
  'weed treatment',
  'fertilization',
  'fertilizer',
  'herbicide',
  'pesticide',
  'aeration',
  'overseeding',
  'seeding',
  'dethatching',
  'tree removal',
  'stump removal',
]) {
  assert.equal(visibleBusinessCopy.includes(unverifiedTaskTerm), false, `Unverified task term: ${unverifiedTaskTerm}`)
}
for (const unsupportedAffirmativeClaim of [
  'mowing is included',
  'includes mowing',
  'first mowing is included',
  'we remove',
  'we haul',
  'we dispose',
  'every march',
  'early april',
  'before april 15',
  'after the final frost',
  'as soon as snow melts',
  'regardless of weather',
  'guaranteed spring availability',
  'guaranteed completion',
  'healthier lawn',
  'faster green-up',
  'prevents disease',
  'prevents weeds',
  'increases property value',
  'starting at $',
  'contract required',
]) {
  assert.equal(
    visibleBusinessCopy.includes(unsupportedAffirmativeClaim),
    false,
    `Unsupported affirmative claim: ${unsupportedAffirmativeClaim}`,
  )
}
assert.match(visibleBusinessCopy, /do not define a standard task list, process or seasonal schedule/)
assert.match(visibleBusinessCopy, /exact scope confirmed by estimate/)
assert.match(visibleBusinessCopy, /no automatic mowing inclusion is published/)
assert.match(visibleBusinessCopy, /does not publish fixed spring dates/)
assert.match(visibleBusinessCopy, /no price, fixed date, weather promise or guaranteed outcome/)

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

for (const value of collectTranslatableStrings(springCleanupService)) {
  assert(spanish[value], `Missing service-content Spanish translation: ${value}`)
}
assert.match(spanish[route.h1], /limpieza de jardín en primavera/i)
assert.doesNotMatch(
  spanish[springCleanupService.scope.introduction],
  /retiramos|transportamos|podamos|bordeamos|fertilizamos|aireamos/i,
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
  { url: route.canonicalUrl },
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
for (const alias of aliases) {
  assert.equal(buildSitemapEntries().some(({ url }) => url.endsWith(`/services/${alias}`)), false)
}
assert.equal(
  buildSitemapEntries().some(
    ({ url }) => url === routesById['article-spring-lawn-cleanup-des-moines'].canonicalUrl,
  ),
  true,
)
assert.equal(routeLabels['service-spring-cleanup'], 'Spring Cleanup')

console.log(
  'Task 13 Spring Cleanup validation passed: exact commercial ownership, ten-service publication allowlist, WebPage/Service/BreadcrumbList parity, required links, strict capability and article-intent boundaries, neutral hero without work preview, general-review labeling, Spanish coverage, and current sitemap isolation.',
)
