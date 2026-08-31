import assert from 'node:assert/strict'
import { routeRegistry, routesById } from '../content/routes.ts'
import type { CanonicalRoute } from '../content/types.ts'
import {
  DEFAULT_SOCIAL_IMAGE,
  SITEMAP_URL,
  buildRobotsFile,
  buildRouteMetadata,
  buildSitemapEntries,
  getPublishedIndexableRoutes,
  isPublishedIndexableRoute,
} from '../lib/metadata.ts'
import { approvedBusinessFacts } from '../lib/site.ts'
import {
  ORGANIZATION_ID,
  WEBSITE_ID,
  buildPageStructuredData,
  getStructuredDataIds,
  serializeStructuredData,
} from '../lib/structured-data.ts'

type MetadataRecord = Record<string, unknown>

function asRecord(value: unknown) {
  assert(value && typeof value === 'object' && !Array.isArray(value))
  return value as MetadataRecord
}

function collectObjectKeys(value: unknown, keys = new Set<string>()) {
  if (!value || typeof value !== 'object') return keys

  if (Array.isArray(value)) {
    for (const item of value) collectObjectKeys(item, keys)
    return keys
  }

  for (const [key, nestedValue] of Object.entries(value)) {
    keys.add(key)
    collectObjectKeys(nestedValue, keys)
  }

  return keys
}

const routeMetadata = routeRegistry.map((route) => {
  const metadata = buildRouteMetadata(route)
  const alternates = asRecord(metadata.alternates)
  const robots = asRecord(metadata.robots)
  const googleBot = asRecord(robots.googleBot)
  const openGraph = asRecord(metadata.openGraph)
  const twitter = asRecord(metadata.twitter)
  const expectedPublic = isPublishedIndexableRoute(route)

  assert.equal(metadata.title, route.title)
  assert.equal(metadata.description, route.description)
  assert.equal(alternates.canonical, route.canonicalUrl)
  assert.equal(robots.index, expectedPublic)
  assert.equal(robots.follow, expectedPublic)
  assert.equal(googleBot.index, expectedPublic)
  assert.equal(googleBot.follow, expectedPublic)
  assert.equal(openGraph.title, route.title)
  assert.equal(openGraph.description, route.description)
  assert.equal(openGraph.url, route.canonicalUrl)
  assert.equal(openGraph.type, route.pageType === 'blog-article' ? 'article' : 'website')
  assert.equal(twitter.title, route.title)
  assert.equal(twitter.description, route.description)
  assert.equal(twitter.card, 'summary_large_image')
  assert(!Object.hasOwn(metadata, 'keywords'))

  return metadata
})

assert.equal(new Set(routeMetadata.map(({ title }) => title)).size, routeRegistry.length)
assert.equal(new Set(routeMetadata.map(({ description }) => description)).size, routeRegistry.length)
assert.equal(DEFAULT_SOCIAL_IMAGE.url, `${approvedBusinessFacts.origin}/logo-512x512.png`)

const publishedRoutes = getPublishedIndexableRoutes()
assert.deepEqual(publishedRoutes.map(({ id }) => id), [
  'home',
  'services',
  'service-lawn-mowing',
  'service-aeration-overseeding',
  'service-fertilization-weed-control',
  'service-landscaping',
  'service-flower-bed-maintenance',
  'service-yard-cleanup',
  'service-spring-cleanup',
])
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
])

const completedRegistry: CanonicalRoute[] = routeRegistry.map((route) => ({
  ...route,
  implementationStatus: 'implemented',
  publicationStatus: 'published',
}))
const completedSitemap = buildSitemapEntries(completedRegistry)
assert.equal(completedSitemap.length, 29)
assert.equal(new Set(completedSitemap.map(({ url }) => url)).size, 29)
for (const { url } of completedSitemap) {
  assert.equal(new URL(url).origin, approvedBusinessFacts.origin)
  assert.equal(new URL(url).search, '')
  assert.equal(new URL(url).hash, '')
}

const robotsFile = buildRobotsFile()
assert.equal(robotsFile.sitemap, SITEMAP_URL)
assert.deepEqual(robotsFile.rules, { userAgent: '*', allow: '/' })

const homepageGraph = buildPageStructuredData(routesById.home, routesById.home)
const serializedGraph = serializeStructuredData(homepageGraph)
assert.deepEqual(JSON.parse(serializedGraph), homepageGraph)
assert.equal(homepageGraph['@context'], 'https://schema.org')
assert.equal(homepageGraph['@graph'].length, 3)

const organization = homepageGraph['@graph'].find((node) => node['@id'] === ORGANIZATION_ID)
const website = homepageGraph['@graph'].find((node) => node['@id'] === WEBSITE_ID)
const webpage = homepageGraph['@graph'].find(
  (node) => node['@id'] === `${routesById.home.canonicalUrl}#webpage`,
)
assert(organization)
assert(website)
assert(webpage)
assert.equal(organization['@type'], 'Organization')
assert.deepEqual(organization.sameAs, approvedBusinessFacts.externalProfiles.map(({ href }) => href))
assert.equal((organization.areaServed as readonly unknown[]).length, 5)
assert.deepEqual(website.publisher, { '@id': ORGANIZATION_ID })
assert.deepEqual(webpage.isPartOf, { '@id': WEBSITE_ID })
assert.deepEqual(webpage.about, { '@id': ORGANIZATION_ID })

const forbiddenSchemaKeys = new Set([
  'LocalBusiness',
  'address',
  'streetAddress',
  'addressLocality',
  'addressRegion',
  'postalCode',
  'geo',
  'latitude',
  'longitude',
  'aggregateRating',
  'review',
  'priceRange',
  'foundingDate',
  'openingHours',
  'openingHoursSpecification',
])
const schemaKeys = collectObjectKeys(homepageGraph)
for (const key of forbiddenSchemaKeys) assert(!schemaKeys.has(key), `Forbidden schema key: ${key}`)
assert(!serializedGraph.includes('LocalBusiness'))

const serviceIds = getStructuredDataIds(routesById['service-lawn-mowing'])
assert.equal(serviceIds.service, `${routesById['service-lawn-mowing'].canonicalUrl}#service`)
assert.equal(serviceIds.breadcrumb, `${routesById['service-lawn-mowing'].canonicalUrl}#breadcrumb`)
const articleIds = getStructuredDataIds(routesById['article-when-to-aerate-lawn-iowa'])
assert.equal(articleIds.article, `${routesById['article-when-to-aerate-lawn-iowa'].canonicalUrl}#article`)

const escapedGraph = buildPageStructuredData(routesById.home, routesById.home, [
  {
    '@type': 'Thing',
    '@id': `${routesById.home.canonicalUrl}#escape-test`,
    name: '</script><script>alert(1)</script>',
  },
])
const escapedSerialization = serializeStructuredData(escapedGraph)
assert(!escapedSerialization.includes('<'))
assert.deepEqual(JSON.parse(escapedSerialization), escapedGraph)

console.log(
  `Task 2 SEO validation passed: ${routeMetadata.length} route metadata records, ${publishedRoutes.length} current sitemap URL, a 29-URL completion path, and ${homepageGraph['@graph'].length} linked JSON-LD nodes.`,
)
