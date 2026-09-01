import assert from 'node:assert/strict'
import {
  companyNavigationRouteIds,
  companyNavigationRoutes,
  footerServiceNavigationRouteIds,
  footerServiceNavigationRoutes,
  getBreadcrumbItems,
  primaryNavigationRouteIds,
  primaryNavigationRoutes,
  routeRegistry,
  routesById,
  serviceAreaNavigationRouteIds,
  serviceAreaNavigationRoutes,
  serviceNavigationRouteIds,
  serviceNavigationRoutes,
} from '../content/routes.ts'
import type { RouteId } from '../content/types.ts'
import { buildSitemapEntries } from '../lib/metadata.ts'
import {
  buildBreadcrumbStructuredData,
  buildPageStructuredData,
} from '../lib/structured-data.ts'

const expectedPrimaryIds = [
  'services',
  'service-areas',
  'our-work',
  'reviews',
  'blog',
  'about',
  'contact',
] as const

const expectedServiceIds = [
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
] as const

const expectedFooterServiceIds = [
  'service-lawn-mowing',
  'service-aeration-overseeding',
  'service-fertilization-weed-control',
  'service-landscaping',
  'service-yard-cleanup',
  'service-spring-cleanup',
  'service-fall-cleanup-leaf-removal',
  'service-grading',
  'service-snow-removal',
] as const

const expectedAreaIds = [
  'home',
  'service-area-ankeny',
  'service-area-waukee',
  'service-area-norwalk',
  'service-area-altoona',
] as const

const expectedCompanyIds = ['about', 'our-work', 'reviews', 'blog', 'contact'] as const

assert.deepEqual(primaryNavigationRouteIds, expectedPrimaryIds)
assert.deepEqual(serviceNavigationRouteIds, expectedServiceIds)
assert.deepEqual(footerServiceNavigationRouteIds, expectedFooterServiceIds)
assert.deepEqual(serviceAreaNavigationRouteIds, expectedAreaIds)
assert.deepEqual(companyNavigationRouteIds, expectedCompanyIds)
assert.deepEqual(primaryNavigationRoutes.map(({ id }) => id), expectedPrimaryIds)
assert.deepEqual(serviceNavigationRoutes.map(({ id }) => id), expectedServiceIds)
assert.deepEqual(footerServiceNavigationRoutes.map(({ id }) => id), expectedFooterServiceIds)
assert.deepEqual(serviceAreaNavigationRoutes.map(({ id }) => id), expectedAreaIds)
assert.deepEqual(companyNavigationRoutes.map(({ id }) => id), expectedCompanyIds)
assert.equal(serviceNavigationRoutes.length, 10)
assert.equal(footerServiceNavigationRoutes.length, 9)
assert(!footerServiceNavigationRouteIds.includes('service-flower-bed-maintenance' as never))
assert.equal(serviceAreaNavigationRoutes.length, 5)
assert.equal(serviceAreaNavigationRoutes[0]?.label, 'Des Moines')
assert.equal(serviceAreaNavigationRoutes[0]?.href, '/')

const registeredPaths = new Set(routeRegistry.map(({ path }) => path))
const generatedLinks = [
  ...primaryNavigationRoutes,
  ...serviceNavigationRoutes,
  ...footerServiceNavigationRoutes,
  ...serviceAreaNavigationRoutes,
  ...companyNavigationRoutes,
]

for (const link of generatedLinks) {
  assert(registeredPaths.has(link.href), `Navigation href is not registered: ${link.href}`)
  assert(!link.href.includes('?') && !link.href.includes('#'), `Navigation href is not clean: ${link.href}`)
}

for (const route of routeRegistry) {
  const items = getBreadcrumbItems(route.id)
  assert(items.length >= 1)
  assert.equal(items[0]?.routeId, 'home')
  assert.equal(items.at(-1)?.routeId, route.id)
  assert.equal(items.filter(({ isCurrent }) => isCurrent).length, 1)
  assert.equal(new Set(items.map(({ routeId }) => routeId)).size, items.length)

  if (route.id === 'home') {
    assert.equal(buildBreadcrumbStructuredData(route), null)
    continue
  }

  assert(route.parentId)
  assert(route.inboundLinkIds.length > 0, `Interior route has no planned inbound links: ${route.id}`)
  assert(
    routesById[route.parentId].outboundLinkIds.includes(route.id as never),
    `Parent ${route.parentId} does not link to ${route.id}`,
  )

  const breadcrumb = buildBreadcrumbStructuredData(route)
  assert(breadcrumb)
  assert.equal(breadcrumb['@type'], 'BreadcrumbList')
  const schemaItems = breadcrumb.itemListElement as readonly Record<string, unknown>[]
  assert.equal(schemaItems.length, items.length)
  assert.deepEqual(schemaItems.map(({ name }) => name), items.map(({ label }) => label))
  assert.deepEqual(schemaItems.map(({ position }) => position), items.map((_, index) => index + 1))
  assert.equal(schemaItems.at(-1)?.item, route.canonicalUrl)
}

const serviceGraph = buildPageStructuredData(
  routesById['service-lawn-mowing'],
  routesById.home,
)
const breadcrumbNodes = serviceGraph['@graph'].filter(({ '@type': type }) => type === 'BreadcrumbList')
assert.equal(breadcrumbNodes.length, 1)
const servicePageNode = serviceGraph['@graph'].find(
  ({ '@id': id }) => id === `${routesById['service-lawn-mowing'].canonicalUrl}#webpage`,
)
assert.deepEqual(servicePageNode?.breadcrumb, {
  '@id': `${routesById['service-lawn-mowing'].canonicalUrl}#breadcrumb`,
})

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
  { url: routesById['article-fall-leaf-cleanup-des-moines'].canonicalUrl },
])
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
assert(
  routeRegistry.every(
    (route) =>
      route.id === 'home' ||
      route.id === 'services' ||
      route.id === 'service-lawn-mowing' ||
      route.id === 'service-aeration-overseeding' ||
      route.id === 'service-fertilization-weed-control' ||
      route.id === 'service-landscaping' ||
      route.id === 'service-flower-bed-maintenance' ||
      route.id === 'service-yard-cleanup' ||
      route.id === 'service-spring-cleanup' ||
      route.id === 'service-fall-cleanup-leaf-removal' ||
      route.id === 'service-grading' ||
      route.id === 'service-snow-removal' ||
      route.id === 'commercial-property-services' ||
      route.id === 'service-areas' ||
      route.id === 'service-area-ankeny' ||
      route.id === 'service-area-waukee' ||
      route.id === 'service-area-norwalk' ||
      route.id === 'service-area-altoona' ||
      route.id === 'about' ||
      route.id === 'our-work' ||
      route.id === 'reviews' ||
      route.id === 'contact' ||
      route.id === 'blog' ||
      route.publicationStatus === 'planned',
  ),
)

const allDetailIds = routeRegistry
  .filter(({ parentId }) => parentId !== null)
  .map(({ id }) => id as RouteId)
assert.equal(allDetailIds.length, routeRegistry.length - 1)

console.log(
  `Task 3 navigation validation passed: ${primaryNavigationRoutes.length} global routes, ${serviceNavigationRoutes.length} services, ${serviceAreaNavigationRoutes.length} areas, ${companyNavigationRoutes.length} company links, and ${routeRegistry.length - 1} interior breadcrumb hierarchies.`,
)
