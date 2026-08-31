import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

import { getBreadcrumbItems, routeLabels, routeRegistry, routesById } from '../content/routes.ts'
import { gradingService } from '../content/services/grading.ts'
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
const route = routesById['service-grading']

assert.equal(route.path, '/services/grading')
assert.equal(route.primaryKeyword, 'yard grading des moines ia')
assert.deepEqual(route.secondaryKeywords, [
  'lawn grading Des Moines',
  'grading service Des Moines',
  'property grading Des Moines',
  'uneven yard grading Des Moines',
])
assert.equal(route.title, "Yard Grading Service in Des Moines, IA | Mo's Lawn Care")
assert.equal(route.h1, 'Yard Grading Services in Des Moines, IA')
assert.equal(
  route.description,
  "Improve uneven ground and prepare outdoor areas with yard grading services in Des Moines, IA. Tell Mo's what your property needs and get a free estimate.",
)
assert.equal(route.canonicalUrl, 'https://www.moslawncaredsm.com/services/grading')
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
assert.equal(getPublishedServiceDetail('grading'), gradingService)
for (const slug of expectedPublishedSlugs.filter((slug) => slug !== 'grading')) {
  assert(getPublishedServiceDetail(slug), `Previously published service missing: ${slug}`)
}
assert(getPublishedServiceDetail('snow-removal'))
assert.equal(routesById['service-snow-removal'].publicationStatus, 'published')
assert.equal(fs.existsSync(path.join(projectRoot, 'content/services/snow-removal.ts')), true)

const aliases = [
  'yard-grading',
  'lawn-grading',
  'property-grading',
  'uneven-yard-grading',
  'regrading',
  'yard-leveling',
  'lawn-leveling',
  'drainage-grading',
  'drainage-correction',
  'yard-drainage',
  'drainage',
] as const
for (const alias of aliases) {
  assert.equal(getPublishedServiceDetail(alias), undefined, `Grading alias resolves: ${alias}`)
  assert.equal(
    routeRegistry.some(({ path: routePath }) => routePath === `/services/${alias}`),
    false,
    `Grading or drainage alias is registered: ${alias}`,
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
  ],
)

const serviceNode = buildServiceStructuredData(route, {
  name: gradingService.schema.name,
  serviceType: gradingService.schema.serviceType,
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
assert.equal(serviceNode.name, 'Yard Grading Services')
assert.equal(serviceNode.serviceType, 'Yard grading')
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
assert.deepEqual(visibleBreadcrumb.map(({ label }) => label), ['Home', 'Services', 'Grading'])
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
  'engineer',
  'drainage',
  'foundation',
  'excavation',
  'erosion',
  'slope',
  'equipment',
  'material',
  'permit',
  'guarantee',
]) {
  assert.equal(serializedGraph.includes(forbiddenSchemaTerm), false, `Forbidden schema: ${forbiddenSchemaTerm}`)
}

assert.deepEqual(
  gradingService.relatedServices.map(({ routeId }) => routeId),
  ['service-yard-cleanup', 'service-landscaping'],
)
assert.deepEqual(gradingService.serviceArea.cities, [
  'Des Moines',
  'Ankeny',
  'Waukee',
  'Norwalk',
  'Altoona',
])
assert.equal(gradingService.hero.image.provenance, 'existing-neutral-property-image')
assert.equal(gradingService.hero.image.src, '/contact.webp')
assert.equal(gradingService.hero.image.loading, 'lazy')
assert.equal(gradingService.hero.compactHeading, true)
assert.equal('workPreview' in gradingService, false)
assert.doesNotMatch(
  `${gradingService.hero.image.alt} ${gradingService.hero.image.caption}`,
  /des moines|ankeny|waukee|norwalk|altoona|grading project|drainage result|completed by mo/i,
)
assert.match(gradingService.hero.image.caption, /no grading, result, city or customer attribution/i)

const approvedReviewSource = read('components/testimonials.tsx')
assert.deepEqual(gradingService.reviews.items.map(({ name }) => name), [
  'Rick Terrones',
  'Zach Ten Haken',
])
for (const review of gradingService.reviews.items) {
  assert(approvedReviewSource.includes(review.quote), `Review excerpt is not verbatim: ${review.name}`)
  assert.doesNotMatch(review.quote, /grading|uneven ground|regrading|leveling/i)
}
assert.match(gradingService.reviews.introduction, /general company feedback/i)
assert.match(gradingService.reviews.introduction, /not proof of a Grading process/i)

const componentSource = read('components/service-detail-page.tsx')
const dynamicRouteSource = read('app/services/[slug]/page.tsx')
const contentSource = read('content/services/grading.ts')
assert.equal(componentSource.match(/<h1\b/g)?.length, 1)
assert.match(componentSource, /<InteriorPageShell/)
assert.match(componentSource, /buildServiceStructuredData/)
assert.match(componentSource, /routesById\['our-work'\]/)
assert.match(componentSource, /routesById\.contact/)
assert.match(componentSource, /site\.phoneHref/)
assert.doesNotMatch(componentSource, /use client|gtag|generate_lead|form_start|form_submit_error/)
assert.match(dynamicRouteSource, /publishedServiceSlugs\.map/)
assert.match(dynamicRouteSource, /getPublishedServiceDetail\(slug\)/)
assert.match(dynamicRouteSource, /if \(!service\) notFound\(\)/)
assert.doesNotMatch(dynamicRouteSource, /serviceNavigationRouteIds|routeRegistry\.find/)
assert.doesNotMatch(contentSource, /workPreview/)

const visibleBusinessCopy = JSON.stringify({
  hero: gradingService.hero,
  introduction: gradingService.introduction,
  scope: gradingService.scope,
  relatedServices: gradingService.relatedServices,
  propertyContext: gradingService.propertyContext,
  reviewIntroduction: gradingService.reviews.introduction,
  serviceArea: gradingService.serviceArea,
  faqs: gradingService.faqs,
  finalCta: gradingService.finalCta,
}).toLowerCase()

for (const requiredTerm of [
  'yard grading in des moines, ia',
  'lawn grading in des moines',
  'grading service in des moines',
  'property grading in des moines',
  'uneven yard grading in des moines',
  'uneven ground',
  'preparation of an outdoor area',
  'residential',
  'commercial',
  'request a free estimate',
]) {
  assert(visibleBusinessCopy.includes(requiredTerm), `Missing approved commercial term: ${requiredTerm}`)
}

for (const unsupportedAffirmativeClaim of [
  'we fix drainage',
  'we solve drainage',
  'we correct drainage',
  'we improve drainage',
  'we redirect water',
  'water flows away from',
  'protects your foundation',
  'prevents foundation damage',
  'we protect basements',
  'we excavate',
  'excavation expertise',
  'we provide excavation',
  'we prevent erosion',
  'erosion remediation',
  'we are civil engineers',
  'we are drainage engineers',
  'our drainage engineer',
  'we are landscape architects',
  'certified grading specialist',
  'licensed excavation contractor',
  'we use a skid steer',
  'we use an excavator',
  'we use a loader',
  'we compact',
  'we provide topsoil',
  'fill dirt is included',
  'soil delivery is included',
  'we handle permits',
  'utility locating is included',
  '811 coordination',
  'ready for patios',
  'ready for pools',
  'ready for sheds',
  'starting at $',
  'contract required',
]) {
  assert.equal(
    visibleBusinessCopy.includes(unsupportedAffirmativeClaim),
    false,
    `Unsupported affirmative claim: ${unsupportedAffirmativeClaim}`,
  )
}
for (const guaranteedOutcome of [
  'no standing water',
  'eliminates pooling',
  'dry yard',
  'flood prevention',
  'permanent correction',
  'no future settling',
  'perfectly level yard',
  'guaranteed smooth surface',
  'guaranteed drainage',
  'guaranteed leveling',
]) {
  assert.equal(visibleBusinessCopy.includes(guaranteedOutcome), false, `Guaranteed outcome: ${guaranteedOutcome}`)
}
assert.doesNotMatch(visibleBusinessCopy, /\b\d+(?:\.\d+)?%\s+(?:slope|grade)\b/)
assert.doesNotMatch(visibleBusinessCopy, /\b\d+(?:\.\d+)?\s+inches? per foot\b/)
assert.match(visibleBusinessCopy, /does not expand that offering into drainage engineering/)
assert.match(visibleBusinessCopy, /does not advertise drainage engineering or correction/)
assert.match(visibleBusinessCopy, /no engineered plan, exact slope, equipment list or guaranteed outcome/)
assert.match(visibleBusinessCopy, /does not publish a construction use, excavation process, soil material, compaction method/)
assert.match(visibleBusinessCopy, /no price, technical plan, fixed process, permit service or guaranteed ground or water outcome/)
assert.match(visibleBusinessCopy, /not an engineering finding, an exact slope specification/)
assert.match(visibleBusinessCopy, /do not publish a standard process, equipment list, exact slope, soil or material inclusion/)

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

for (const value of collectTranslatableStrings(gradingService)) {
  assert(spanish[value], `Missing service-content Spanish translation: ${value}`)
}
assert.match(spanish[route.h1], /nivelación del terreno/i)
assert.doesNotMatch(
  JSON.stringify(Object.fromEntries([...collectTranslatableStrings(gradingService)].map((key) => [key, spanish[key]]))).toLowerCase(),
  /corregimos el drenaje|protegemos la cimentación|ofrecemos excavación|garantizamos el drenaje|nivelación perfecta/,
)
assert.equal(
  spanish['Low spots, ruts and water running the wrong direction get reshaped so the surface drains and mows cleanly.'],
  undefined,
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
  { url: routesById['service-fall-cleanup-leaf-removal'].canonicalUrl },
  { url: route.canonicalUrl },
  { url: routesById['service-snow-removal'].canonicalUrl },
  { url: routesById['commercial-property-services'].canonicalUrl },
  { url: routesById['service-areas'].canonicalUrl },
  { url: routesById['service-area-ankeny'].canonicalUrl },
  { url: routesById['service-area-waukee'].canonicalUrl },
  { url: routesById['service-area-norwalk'].canonicalUrl },
  { url: routesById['service-area-altoona'].canonicalUrl },
])
assert.equal(buildSitemapEntries().length, 18)
assert.equal(
  buildSitemapEntries().some(({ url }) => url === routesById['service-snow-removal'].canonicalUrl),
  true,
)
for (const alias of aliases) {
  assert.equal(buildSitemapEntries().some(({ url }) => url.endsWith(`/services/${alias}`)), false)
}
assert.equal(routeLabels['service-grading'], 'Grading')

console.log(
  'Task 15 Grading validation passed: exact ten-service publication ownership, WebPage/Service/BreadcrumbList parity, required links, strict engineering/drainage/foundation/excavation/outcome boundaries, neutral media without work preview, general-review labeling, Spanish coverage, alias isolation, and current sitemap lifecycle.',
)
