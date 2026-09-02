import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

import { getBreadcrumbItems, routeLabels, routeRegistry, routesById } from '../content/routes.ts'
import {
  getPublishedServiceDetail,
  publishedServiceDetails,
  publishedServiceSlugs,
} from '../content/services/index.ts'
import { snowRemovalService } from '../content/services/snow-removal.ts'
import { buildRouteMetadata, buildSitemapEntries } from '../lib/metadata.ts'
import { approvedBusinessFacts, seasons } from '../lib/site.ts'
import {
  ORGANIZATION_ID,
  buildPageStructuredData,
  buildServiceStructuredData,
} from '../lib/structured-data.ts'

const projectRoot = process.cwd()
const read = (relativePath: string) => fs.readFileSync(path.join(projectRoot, relativePath), 'utf8')
const route = routesById['service-snow-removal']

assert.equal(route.path, '/services/snow-removal')
assert.equal(route.primaryKeyword, 'snow removal des moines ia')
assert.deepEqual(route.secondaryKeywords, [
  'snow removal service Des Moines',
  'residential snow removal Des Moines',
  'commercial snow removal Des Moines',
  'driveway snow removal Des Moines',
])
assert.equal(route.title, "Snow Removal Service in Des Moines, IA | Mo's Lawn Care")
assert.equal(route.h1, 'Snow Removal Service in Des Moines, IA')
assert.equal(
  route.description,
  "Reliable snow removal for residential and commercial properties in Des Moines, IA. Keep driveways and access areas clear with Mo's. Request an estimate.",
)
assert.equal(route.canonicalUrl, 'https://www.moslawncaredsm.com/services/snow-removal')
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
  'grading',
  'snow-removal',
] as const
assert.deepEqual(publishedServiceSlugs, expectedPublishedSlugs)
assert.equal(publishedServiceDetails.length, 10)
assert.equal(getPublishedServiceDetail('snow-removal'), snowRemovalService)
for (const slug of expectedPublishedSlugs.slice(0, -1)) {
  assert(getPublishedServiceDetail(slug), `Previously published service missing: ${slug}`)
}

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
assert.equal(routesById['service-areas'].implementationStatus, 'implemented')
assert.equal(routesById['service-areas'].publicationStatus, 'published')
assert.equal(routesById.contact.implementationStatus, 'implemented')
assert.equal(routesById.contact.publicationStatus, 'published')

const aliases = [
  'snow-plowing',
  'snow-plow',
  'snow-clearing',
  'driveway-snow-removal',
  'residential-snow-removal',
  'commercial-snow-removal',
  'ice-management',
  'salting',
  'deicing',
  'de-icing',
] as const
for (const alias of aliases) {
  assert.equal(getPublishedServiceDetail(alias), undefined, `Snow alias resolves: ${alias}`)
  assert.equal(
    routeRegistry.some(({ path: routePath }) => routePath === `/services/${alias}`),
    false,
    `Snow alias is registered: ${alias}`,
  )
}
for (const cityAlias of [
  'snow-removal-ankeny',
  'snow-removal-waukee',
  'snow-removal-norwalk',
  'snow-removal-altoona',
  'des-moines-snow-removal',
]) {
  assert.equal(getPublishedServiceDetail(cityAlias), undefined, `City Snow alias resolves: ${cityAlias}`)
  assert.equal(
    routeRegistry.some(({ path: routePath }) => routePath.endsWith(`/${cityAlias}`)),
    false,
    `City Snow alias is registered: ${cityAlias}`,
  )
}
assert.equal(getPublishedServiceDetail('not-a-real-service'), undefined)

const serviceNode = buildServiceStructuredData(route, {
  name: snowRemovalService.schema.name,
  serviceType: snowRemovalService.schema.serviceType,
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
assert.equal(serviceNode.name, 'Snow Removal Service')
assert.equal(serviceNode.serviceType, 'Snow removal')
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
assert.deepEqual(visibleBreadcrumb.map(({ label }) => label), ['Home', 'Services', 'Snow Removal'])
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
  '24/7',
  'emergency',
  'trigger',
  'ice management',
  'salting',
  'deicing',
  'sidewalk',
  'response time',
  'service window',
  'equipment',
  'contract',
]) {
  assert.equal(serializedGraph.includes(forbiddenSchemaTerm), false, `Forbidden schema: ${forbiddenSchemaTerm}`)
}

assert.deepEqual(
  snowRemovalService.relatedServices.map(({ routeId }) => routeId),
  ['commercial-property-services', 'service-areas', 'reviews'],
)
assert.deepEqual(snowRemovalService.serviceArea.cities, [
  'Des Moines',
  'Ankeny',
  'Waukee',
  'Norwalk',
  'Altoona',
])
assert.equal(snowRemovalService.hero.image.provenance, 'existing-seasonal-image')
assert.equal(snowRemovalService.hero.image.src, '/seasons/winter.png')
assert.equal(snowRemovalService.hero.image.loading, 'lazy')
assert.equal(snowRemovalService.hero.compactHeading, true)
assert.equal('workPreview' in snowRemovalService, false)
assert.doesNotMatch(
  `${snowRemovalService.hero.image.alt} ${snowRemovalService.hero.image.caption}`,
  /des moines|ankeny|waukee|norwalk|altoona|mo.?s snow removal work|completed project|customer property/i,
)
assert.match(snowRemovalService.hero.image.alt, /snow-covered home.*driveway/i)
assert.match(
  snowRemovalService.hero.image.caption,
  /no service, project, city or customer attribution/i,
)

const approvedReviewSource = read('content/reviews.ts')
assert.deepEqual(snowRemovalService.reviews.items.map(({ name }) => name), [
  'Erick & Deanna Van Cura',
  'Elizabeth Hoffmann',
])
for (const review of snowRemovalService.reviews.items) {
  assert(approvedReviewSource.includes(review.quote), `Review excerpt is not verbatim: ${review.name}`)
  assert.match(review.quote, /snow/i)
}
assert.match(snowRemovalService.reviews.introduction, /individual Snow Removal experiences/i)
assert.match(snowRemovalService.reviews.introduction, /do not establish standard availability/i)

const componentSource = read('components/service-detail-page.tsx')
const dynamicRouteSource = read('app/services/[slug]/page.tsx')
const contentSource = read('content/services/snow-removal.ts')
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
assert.doesNotMatch(contentSource, /workPreview/)

const visibleBusinessCopy = JSON.stringify({
  hero: snowRemovalService.hero,
  introduction: snowRemovalService.introduction,
  scope: snowRemovalService.scope,
  relatedServices: snowRemovalService.relatedServices,
  propertyContext: snowRemovalService.propertyContext,
  reviewIntroduction: snowRemovalService.reviews.introduction,
  serviceArea: snowRemovalService.serviceArea,
  faqs: snowRemovalService.faqs,
  finalCta: snowRemovalService.finalCta,
}).toLowerCase()

for (const requiredTerm of [
  'snow removal in des moines, ia',
  'snow removal service in des moines',
  'residential snow removal in des moines',
  'commercial snow removal in des moines',
  'driveway snow removal in des moines',
  'residential properties',
  'commercial properties',
  'driveway',
  'access area',
  'request an estimate',
]) {
  assert(visibleBusinessCopy.includes(requiredTerm), `Missing approved Snow term: ${requiredTerm}`)
}

for (const unsupportedAffirmativeClaim of [
  'available 24/7',
  '24-hour snow service',
  'around-the-clock',
  'emergency snow removal',
  'immediate dispatch',
  'same-day snow removal',
  'same-night service',
  'before opening',
  'before your commute',
  'we monitor forecasts',
  'automatic dispatch',
  'after every storm',
  'during every storm',
  'we provide ice management',
  'ice management is included',
  'salting is included',
  'we apply salt',
  'we use brine',
  'deicing is included',
  'sidewalk clearing is included',
  'we clear sidewalks',
  'walkway clearing is included',
  'we clear walks',
  'we clear entries',
  'we clear entrances',
  'parking lot snow removal',
  'we clear parking lots',
  'loading dock clearing',
  'we haul snow',
  'snow hauling',
  'off-site snow removal',
  'we relocate snow',
  'snow plowing',
  'we plow',
  'we shovel',
  'skid steer',
  'snow blower',
  'plow truck',
  'seasonal contract',
  'per-push',
  'automatic storm service',
  'starting at $',
  'per-inch pricing',
  'slip-and-fall prevention',
  'liability reduction',
  'ada compliance',
  'guaranteed safe access',
]) {
  assert.equal(
    visibleBusinessCopy.includes(unsupportedAffirmativeClaim),
    false,
    `Unsupported affirmative claim: ${unsupportedAffirmativeClaim}`,
  )
}
assert.doesNotMatch(visibleBusinessCopy, /\b(?:one|two|three|four|five|six|seven|eight|nine|ten|\d+(?:\.\d+)?)\s+inches?\b/)
assert.doesNotMatch(visibleBusinessCopy, /within\s+\d+\s+hours?/)
assert.doesNotMatch(visibleBusinessCopy, /(?:from|between)\s+\d{1,2}(?::\d{2})?\s*(?:a\.?m\.?|p\.?m\.?).*(?:to|and)\s+\d{1,2}/)
assert.match(visibleBusinessCopy, /specific surfaces and operating details are not assumed/)
assert.match(visibleBusinessCopy, /sidewalks, walks, entries and other specific surfaces are not presented as standard inclusions/)
assert.match(visibleBusinessCopy, /does not publish a snow-depth trigger, emergency service, exact service window or guaranteed response time/)
assert.match(visibleBusinessCopy, /does not establish parking-lot capacity, a commercial contract or a guaranteed operating schedule/)

const winter = seasons.find(({ key }) => key === 'winter')
assert(winter)
assert.equal(
  winter.copy,
  'Snow Removal keeps the focus on driveways and access areas for residential and commercial properties. Exact property scope is confirmed through an estimate.',
)
assert.doesNotMatch(winter.copy, /walks|walkways|entries|entrances|sidewalks/i)

const spanish = JSON.parse(read('lib/es-translations.json')) as Record<string, string>
assert(spanish[route.h1], `Missing Spanish translation: ${route.h1}`)

function collectTranslatableStrings(value: unknown, key = '', strings = new Set<string>()) {
  if (typeof value === 'string') {
    if (!['slug', 'routeId', 'src', 'provenance', 'name', 'loading'].includes(key) && !/^0\d$/.test(value)) {
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

for (const value of collectTranslatableStrings(snowRemovalService)) {
  assert(spanish[value], `Missing service-content Spanish translation: ${value}`)
}
assert.match(spanish[route.h1], /retiro de nieve/i)
const translatedSnowCopy = JSON.stringify(
  Object.fromEntries([...collectTranslatableStrings(snowRemovalService)].map((key) => [key, spanish[key]])),
).toLowerCase()
for (const unsupportedSpanishClaim of [
  'servicio 24 horas',
  'servicio de emergencia incluido',
  'garantizamos la respuesta',
  'incluye las aceras',
  'incluye la aplicación de sal',
  'despejamos estacionamientos',
]) {
  assert.equal(translatedSnowCopy.includes(unsupportedSpanishClaim), false)
}
assert.equal(
  spanish['When the snow comes, the job is access. Driveways, walks and entries cleared so you can get out and people can get in.'],
  undefined,
)
assert.equal(
  spanish['Driveways, walkways and entries cleared so the property stays usable through the storm.'],
  undefined,
)
assert.equal(spanish['Ready by morning.'], undefined)

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
  { url: routesById['service-fall-cleanup-leaf-removal'].canonicalUrl },
  { url: routesById['service-grading'].canonicalUrl },
  { url: route.canonicalUrl },
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
assert.equal(buildSitemapEntries().length, 28)
for (const alias of aliases) {
  assert.equal(buildSitemapEntries().some(({ url }) => url.endsWith(`/services/${alias}`)), false)
}
assert.equal(routeLabels['service-snow-removal'], 'Snow Removal')

console.log(
  'Task 16 Snow Removal validation passed: exact tenth-service publication ownership, residential/commercial driveway and access-area scope, WebPage/Service/BreadcrumbList parity, required supporting links with later routes lifecycle-correct, strict operational and safety boundaries, seasonal image without work-preview attribution, snow-specific individual-review framing, Spanish coverage, alias isolation, and current sitemap lifecycle.',
)
