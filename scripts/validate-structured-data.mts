import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

import {
  getPublishedArticleRoute,
  getPublishedArticles,
} from '../content/blog/index.ts'
import { commercialServiceItems } from '../content/commercial-property-services.ts'
import { serviceAreaHubItems } from '../content/service-areas.ts'
import { publishedCityServiceAreas } from '../content/service-areas/index.ts'
import { getBreadcrumbItems, routeRegistry, routesById } from '../content/routes.ts'
import { publishedServiceDetails, servicesIndexItems } from '../content/services/index.ts'
import type {
  CanonicalRoute,
  PublishedBlogArticle,
  RouteId,
} from '../content/types.ts'
import { analyticsEventNames } from '../lib/analytics.ts'
import {
  buildSitemapEntries,
  getPublishedIndexableRoutes,
} from '../lib/metadata.ts'
import { approvedBusinessFacts } from '../lib/site.ts'
import { SITE_ORIGIN } from '../lib/site-url.ts'
import {
  ORGANIZATION_ID,
  WEBSITE_ID,
  buildArticleItemListStructuredData,
  buildBlogPostingStructuredData,
  buildPageStructuredData,
  buildServiceStructuredData,
  getStructuredDataIds,
  serializeStructuredData,
  type StructuredDataDocument,
  type StructuredDataNode,
} from '../lib/structured-data.ts'

type JsonObject = Record<string, unknown>
type ListRecord = Readonly<{
  position: number
  name: string
  canonicalUrl: string
}>

const projectRoot = process.cwd()
const read = (relativePath: string) =>
  fs.readFileSync(path.join(projectRoot, relativePath), 'utf8')

const publishedArticles = getPublishedArticles()
const effectiveRoutes = [
  ...getPublishedIndexableRoutes().filter(({ pageType }) => pageType !== 'blog-article'),
  ...publishedArticles.map(getPublishedArticleRoute),
]
const serviceByRouteId = new Map<RouteId, (typeof publishedServiceDetails)[number]>(
  publishedServiceDetails.map((service) => [service.routeId, service]),
)
const cityByRouteId = new Map<RouteId, (typeof publishedCityServiceAreas)[number]>(
  publishedCityServiceAreas.map((city) => [city.routeId, city]),
)
const articleByRouteId = new Map<RouteId, PublishedBlogArticle>(
  publishedArticles.map((article) => [article.routeId, article]),
)

function buildItemList(
  id: string,
  name: string,
  items: readonly ListRecord[],
): StructuredDataNode {
  return {
    '@type': 'ItemList',
    '@id': id,
    name,
    numberOfItems: items.length,
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    itemListElement: items.map((item) => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.name,
      item: item.canonicalUrl,
    })),
  }
}

function getExpectedList(route: CanonicalRoute): readonly ListRecord[] | null {
  switch (route.pageType) {
    case 'services-index':
      return servicesIndexItems
    case 'commercial-index':
      return commercialServiceItems
    case 'service-areas-index':
      return serviceAreaHubItems
    case 'service-area':
      return cityByRouteId.get(route.id)?.services ?? null
    case 'blog-index':
      return publishedArticles.map((article, index) => ({
        position: index + 1,
        name: article.h1,
        canonicalUrl: getPublishedArticleRoute(article).canonicalUrl,
      }))
    default:
      return null
  }
}

function getAdditionalNodes(route: CanonicalRoute): readonly StructuredDataNode[] {
  switch (route.pageType) {
    case 'services-index':
      return [
        buildItemList(
          `${route.canonicalUrl}#service-list`,
          'Lawn care services for Des Moines properties',
          servicesIndexItems,
        ),
      ]
    case 'service': {
      const service = serviceByRouteId.get(route.id)
      assert(service, `Missing service content for ${route.id}`)
      return [
        buildServiceStructuredData(route, {
          name: service.schema.name,
          serviceType: service.schema.serviceType,
          description: route.description,
        }),
      ]
    }
    case 'commercial-index':
      return [
        buildItemList(
          `${route.canonicalUrl}#commercial-service-list`,
          'Verified commercial property services',
          commercialServiceItems,
        ),
      ]
    case 'service-areas-index':
      return [
        buildItemList(
          `${route.canonicalUrl}#area-list`,
          'Mo’s Lawn Care service areas',
          serviceAreaHubItems,
        ),
      ]
    case 'service-area': {
      const city = cityByRouteId.get(route.id)
      assert(city, `Missing city content for ${route.id}`)
      return [
        buildItemList(
          `${route.canonicalUrl}#service-list`,
          city.schemaItemListName,
          city.services,
        ),
      ]
    }
    case 'blog-index':
      return [buildArticleItemListStructuredData(route, publishedArticles)]
    case 'blog-article': {
      const article = articleByRouteId.get(route.id)
      assert(article, `Missing published article content for ${route.id}`)
      return [buildBlogPostingStructuredData(route, article)]
    }
    default:
      return []
  }
}

function buildExpectedGraph(route: CanonicalRoute) {
  return buildPageStructuredData(route, routesById.home, getAdditionalNodes(route))
}

const expectedPageType = {
  home: 'WebPage',
  'services-index': 'CollectionPage',
  service: 'WebPage',
  'commercial-index': 'WebPage',
  'service-areas-index': 'CollectionPage',
  'service-area': 'WebPage',
  about: 'AboutPage',
  'work-index': 'CollectionPage',
  'reviews-index': 'CollectionPage',
  contact: 'ContactPage',
  'blog-index': 'Blog',
  'blog-article': 'WebPage',
} as const

const forbiddenTypes = new Set([
  'LocalBusiness',
  'PostalAddress',
  'GeoCoordinates',
  'Place',
  'Review',
  'AggregateRating',
  'Product',
  'Offer',
  'AggregateOffer',
  'FAQPage',
  'Person',
  'EmployeeRole',
  'ImageObject',
])
const forbiddenProperties = new Set([
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
  'reviewRating',
  'ratingValue',
  'reviewCount',
  'bestRating',
  'worstRating',
  'price',
  'priceRange',
  'offers',
  'fee',
  'author',
  'editor',
  'reviewedBy',
  'datePublished',
  'dateModified',
  'image',
  'openingHours',
  'openingHoursSpecification',
])
const urlProperties = new Set(['@id', 'url', 'item', 'logo'])

function nodeHasType(node: StructuredDataNode, expected: string) {
  return Array.isArray(node['@type'])
    ? node['@type'].includes(expected)
    : node['@type'] === expected
}

function nodesWithType(graph: StructuredDataDocument, expected: string) {
  return graph['@graph'].filter((node) => nodeHasType(node, expected))
}

function walkJson(value: unknown, visit: (object: JsonObject) => void) {
  if (Array.isArray(value)) {
    for (const item of value) walkJson(item, visit)
  } else if (value && typeof value === 'object') {
    const object = value as JsonObject
    visit(object)
    for (const item of Object.values(object)) walkJson(item, visit)
  }
}

function cleanJson(value: unknown) {
  return JSON.stringify(value)
}

function assertCleanAbsoluteUrl(value: string, label: string, allowEntityFragment = false) {
  const url = new URL(value)
  assert.match(url.protocol, /^https?:$/, `${label} must use HTTP(S)`)
  assert.equal(url.search, '', `${label} must be query-free: ${value}`)
  if (!allowEntityFragment) assert.equal(url.hash, '', `${label} must be fragment-free: ${value}`)
  if (url.origin === SITE_ORIGIN) {
    assert(
      url.pathname === '/' || !url.pathname.endsWith('/'),
      `${label} has trailing-slash drift: ${value}`,
    )
  }
}

function assertNoGraphCollisions(route: CanonicalRoute, graph: StructuredDataDocument) {
  const definitions = new Map<string, StructuredDataNode>()
  for (const node of graph['@graph']) {
    const prior = definitions.get(node['@id'])
    if (prior) {
      assert.deepEqual(node, prior, `Conflicting duplicate @id on ${route.path}: ${node['@id']}`)
    } else {
      definitions.set(node['@id'], node)
    }
  }
  assert.equal(definitions.size, graph['@graph'].length, `Duplicate graph node on ${route.path}`)
}

function assertReferencesResolve(route: CanonicalRoute, graph: StructuredDataDocument) {
  const localIds = new Set(graph['@graph'].map((node) => node['@id']))
  walkJson(graph, (object) => {
    if (typeof object['@id'] !== 'string' || '@type' in object) return
    const id = object['@id']
    assert(
      localIds.has(id) || id === ORGANIZATION_ID || id === WEBSITE_ID,
      `Dangling @id reference on ${route.path}: ${id}`,
    )
  })
}

function assertForbiddenDataAbsent(route: CanonicalRoute, graph: StructuredDataDocument) {
  walkJson(graph, (object) => {
    const types = Array.isArray(object['@type']) ? object['@type'] : [object['@type']]
    for (const type of types) {
      if (typeof type === 'string') {
        assert(!forbiddenTypes.has(type), `Forbidden @type on ${route.path}: ${type}`)
      }
    }
    for (const property of Object.keys(object)) {
      assert(
        !forbiddenProperties.has(property),
        `Forbidden property on ${route.path}: ${property}`,
      )
    }
  })
}

function assertGraphUrls(route: CanonicalRoute, graph: StructuredDataDocument) {
  walkJson(graph, (object) => {
    for (const [property, value] of Object.entries(object)) {
      if (urlProperties.has(property) && typeof value === 'string') {
        assertCleanAbsoluteUrl(value, `${route.path} ${property}`, property === '@id')
      }
      if ((property === 'sameAs' || property === 'citation') && Array.isArray(value)) {
        for (const url of value) {
          assert.equal(typeof url, 'string', `${route.path} ${property} must contain URLs`)
          assertCleanAbsoluteUrl(url as string, `${route.path} ${property}`)
        }
      }
    }
  })
}

function assertBreadcrumbParity(route: CanonicalRoute, graph: StructuredDataDocument) {
  const breadcrumbNodes = nodesWithType(graph, 'BreadcrumbList')
  if (!route.parentId) {
    assert.equal(breadcrumbNodes.length, 0, 'Homepage must not force BreadcrumbList')
    return
  }
  assert.equal(breadcrumbNodes.length, 1, `Expected one BreadcrumbList on ${route.path}`)
  const expected = getBreadcrumbItems(route.id)
  const items = breadcrumbNodes[0].itemListElement as readonly JsonObject[]
  assert.deepEqual(
    items,
    expected.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.isCurrent ? route.canonicalUrl : routesById[item.routeId].canonicalUrl,
    })),
    `Breadcrumb parity failed on ${route.path}`,
  )
}

function assertItemListParity(route: CanonicalRoute, graph: StructuredDataDocument) {
  const expected = getExpectedList(route)
  const itemLists = nodesWithType(graph, 'ItemList')
  if (!expected) {
    assert.equal(itemLists.length, 0, `Unexpected ItemList on ${route.path}`)
    return
  }
  assert.equal(itemLists.length, 1, `Expected one ItemList on ${route.path}`)
  const list = itemLists[0]
  assert.equal(list.numberOfItems, expected.length, `ItemList count mismatch on ${route.path}`)
  const items = list.itemListElement as readonly JsonObject[]
  assert.deepEqual(
    items.map(({ position }) => position),
    expected.map(({ position }) => position),
    `ItemList position mismatch on ${route.path}`,
  )
  assert.deepEqual(
    items.map(({ name }) => name),
    expected.map(({ name }) => name),
    `ItemList name mismatch on ${route.path}`,
  )
  assert.deepEqual(
    items.map((item) => item.item ?? item.url),
    expected.map(({ canonicalUrl }) => canonicalUrl),
    `ItemList URL mismatch on ${route.path}`,
  )
}

function assertRouteContract(route: CanonicalRoute, graph: StructuredDataDocument) {
  assert.equal(graph['@context'], 'https://schema.org')
  assert.equal(nodesWithType(graph, 'Organization').length, 1, `Organization count on ${route.path}`)
  assert.equal(nodesWithType(graph, 'WebSite').length, 1, `WebSite count on ${route.path}`)
  assert.equal(
    nodesWithType(graph, expectedPageType[route.pageType]).length,
    1,
    `Page type mismatch on ${route.path}`,
  )

  const ids = getStructuredDataIds(route)
  const byId = new Map(graph['@graph'].map((node) => [node['@id'], node]))
  assert(byId.has(ORGANIZATION_ID), `Missing central Organization on ${route.path}`)
  assert(byId.has(WEBSITE_ID), `Missing central WebSite on ${route.path}`)
  assert(byId.has(ids.webpage), `Missing canonical WebPage ID on ${route.path}`)
  if (ids.breadcrumb) assert(byId.has(ids.breadcrumb), `Missing breadcrumb ID on ${route.path}`)

  const page = byId.get(ids.webpage)
  assert(page)
  assert.equal(page.url, route.canonicalUrl)
  assert.deepEqual(page.isPartOf, { '@id': WEBSITE_ID })
  assert.deepEqual(page.about, { '@id': ORGANIZATION_ID })
  assert.deepEqual(page.publisher, { '@id': ORGANIZATION_ID })

  if (route.pageType === 'service') {
    assert(ids.service)
    const service = byId.get(ids.service)
    const content = serviceByRouteId.get(route.id)
    assert(service && content, `Missing Service node on ${route.path}`)
    assert.equal(nodesWithType(graph, 'Service').length, 1)
    assert.equal(service.name, content.schema.name)
    assert.equal(service.serviceType, content.schema.serviceType)
    assert.equal(service.description, route.description)
    assert.equal(service.url, route.canonicalUrl)
    assert.deepEqual(service.provider, { '@id': ORGANIZATION_ID })
    assert.deepEqual(
      (service.areaServed as readonly JsonObject[]).map(({ name }) => name),
      approvedBusinessFacts.serviceAreas.map(({ city }) => city),
    )
  } else {
    assert.equal(nodesWithType(graph, 'Service').length, 0, `Unexpected Service on ${route.path}`)
  }

  if (route.pageType === 'blog-article') {
    assert(ids.article)
    const article = byId.get(ids.article)
    const content = articleByRouteId.get(route.id)
    assert(article && content, `Missing BlogPosting on ${route.path}`)
    assert.equal(nodesWithType(graph, 'BlogPosting').length, 1)
    assert.equal(article.headline, content.h1)
    assert.equal(article.description, content.description)
    assert.deepEqual(article.publisher, { '@id': ORGANIZATION_ID })
    assert.deepEqual(article.mainEntityOfPage, { '@id': ids.webpage })
    for (const omitted of ['author', 'datePublished', 'dateModified', 'image']) {
      assert(!Object.hasOwn(article, omitted), `Unsupported article ${omitted} on ${route.path}`)
    }
  } else {
    assert.equal(nodesWithType(graph, 'BlogPosting').length, 0, `Unexpected article on ${route.path}`)
  }

  assertNoGraphCollisions(route, graph)
  assertReferencesResolve(route, graph)
  assertForbiddenDataAbsent(route, graph)
  assertGraphUrls(route, graph)
  assertBreadcrumbParity(route, graph)
  assertItemListParity(route, graph)
}

assert.equal(routeRegistry.length, 29)
assert.equal(effectiveRoutes.length, 29)
assert.equal(new Set(effectiveRoutes.map(({ id }) => id)).size, 29)
assert.equal(new Set(effectiveRoutes.map(({ path }) => path)).size, 29)
assert.equal(publishedArticles.length, 6)
assert.equal(publishedServiceDetails.length, 10)
assert.equal(publishedCityServiceAreas.length, 4)
assert.equal(buildSitemapEntries().length, 29)
assert.deepEqual(
  new Set(buildSitemapEntries().map(({ url }) => url)),
  new Set(effectiveRoutes.map(({ canonicalUrl }) => canonicalUrl)),
)
assert.deepEqual(analyticsEventNames, [
  'generate_lead',
  'form_start',
  'form_submit_error',
  'click_to_call',
  'click_email',
])

const graphs = new Map<RouteId, StructuredDataDocument>()
const globalDefinitions = new Map<string, string>()
const repeatedIds = new Map<string, number>()
for (const route of effectiveRoutes) {
  const graph = buildExpectedGraph(route)
  graphs.set(route.id, graph)
  assertRouteContract(route, graph)
  const serialized = serializeStructuredData(graph)
  assert.deepEqual(JSON.parse(serialized), graph, `Serialization mismatch on ${route.path}`)
  assert(!serialized.includes('<'), `Unsafe less-than character in JSON-LD on ${route.path}`)

  for (const node of graph['@graph']) {
    const definition = cleanJson(node)
    const prior = globalDefinitions.get(node['@id'])
    if (prior) assert.equal(definition, prior, `Global @id collision: ${node['@id']}`)
    else globalDefinitions.set(node['@id'], definition)
    repeatedIds.set(node['@id'], (repeatedIds.get(node['@id']) ?? 0) + 1)
  }
}

assert.equal(repeatedIds.get(ORGANIZATION_ID), 29)
assert.equal(repeatedIds.get(WEBSITE_ID), 29)
for (const [id, count] of repeatedIds) {
  if (id !== ORGANIZATION_ID && id !== WEBSITE_ID) {
    assert.equal(count, 1, `Page-specific @id repeated globally: ${id}`)
  }
}

const organization = graphs.get('home')?.['@graph'].find(({ '@id': id }) => id === ORGANIZATION_ID)
assert(organization)
assert.deepEqual(
  (organization.areaServed as readonly JsonObject[]).map(({ name }) => name),
  ['Des Moines', 'Ankeny', 'Waukee', 'Norwalk', 'Altoona'],
)
assert.deepEqual(
  organization.sameAs,
  approvedBusinessFacts.externalProfiles.map(({ href }) => {
    const url = new URL(href)
    url.search = ''
    url.hash = ''
    return url.toString()
  }),
)

const dangerousValue = `Mo's & \"quoted\" > </script><script>alert('x')</script>\u2028\u2029`
const dangerousGraph = buildPageStructuredData(routesById.home, routesById.home, [
  {
    '@type': 'Thing',
    '@id': `${routesById.home.canonicalUrl}#serialization-fixture`,
    name: dangerousValue,
  },
])
const dangerousJson = serializeStructuredData(dangerousGraph)
assert(!dangerousJson.includes('<'))
assert.deepEqual(JSON.parse(dangerousJson), dangerousGraph)
assert.match(read('components/structured-data.tsx'), /serializeStructuredData\(data\)/)

function decodeHtml(value: string) {
  return value
    .replace(/&#(\d+);/g, (_, number: string) => String.fromCodePoint(Number(number)))
    .replace(/&#x([\da-f]+);/gi, (_, number: string) => String.fromCodePoint(Number.parseInt(number, 16)))
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&apos;', "'")
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
}

function visibleText(value: string) {
  return decodeHtml(
    value
      .replace(/<svg\b[\s\S]*?<\/svg>/gi, ' ')
      .replace(/<[^>]+>/g, ' '),
  ).replace(/\s+/g, ' ').trim()
}

function extractStructuredDataScripts(html: string) {
  return [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)]
    .map((match) => decodeHtml(match[1]))
}

function extractBreadcrumb(html: string) {
  const nav = html.match(/<nav\b[^>]*aria-label=["']Breadcrumb["'][^>]*>([\s\S]*?)<\/nav>/i)
  if (!nav) return []
  return [...nav[1].matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)].map((match) => {
    const link = match[1].match(/<a\b[^>]*href=["']([^"']+)["'][^>]*>/i)
    return { name: visibleText(match[1]), href: link ? decodeHtml(link[1]) : null }
  })
}

function extractSection(html: string, marker: string, nextMarker?: string) {
  const markerIndex = html.indexOf(`id="${marker}"`)
  assert.notEqual(markerIndex, -1, `Missing visible section marker: ${marker}`)
  const start = html.lastIndexOf('<section', markerIndex)
  if (nextMarker) {
    const nextMarkerIndex = html.indexOf(`id="${nextMarker}"`, markerIndex + marker.length)
    const end = html.lastIndexOf('<section', nextMarkerIndex)
    assert(start >= 0 && nextMarkerIndex > markerIndex && end > start, `Could not isolate visible section: ${marker}`)
    return html.slice(start, end)
  }
  const end = html.indexOf('</section>', markerIndex)
  assert(start >= 0 && end > start, `Could not isolate visible section: ${marker}`)
  return html.slice(start, end + '</section>'.length)
}

function extractOrderedListAnchors(section: string) {
  const lists = [...section.matchAll(/<ol\b[^>]*>([\s\S]*?)<\/ol>/gi)]
  return lists.flatMap((list) =>
    [...list[1].matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)]
      .map((match) => ({ href: decodeHtml(match[1]), text: visibleText(match[2]) })),
  )
}

function getVisibleListMarker(route: CanonicalRoute) {
  switch (route.pageType) {
    case 'services-index':
      return 'service-directory'
    case 'commercial-index':
      return 'commercial-services'
    case 'service-areas-index':
      return 'area-directory'
    case 'service-area':
      return `${cityByRouteId.get(route.id)?.slug}-services-heading`
    case 'blog-index':
      return 'published-guides'
    default:
      return null
  }
}

function assertRenderedVisibleParity(route: CanonicalRoute, graph: StructuredDataDocument, html: string) {
  const expectedBreadcrumb = getBreadcrumbItems(route.id)
  const visibleBreadcrumb = extractBreadcrumb(html)
  if (!route.parentId) assert.equal(visibleBreadcrumb.length, 0)
  else {
    assert.deepEqual(
      visibleBreadcrumb.map(({ name }) => name),
      expectedBreadcrumb.map(({ label }) => label),
      `Rendered breadcrumb names differ on ${route.path}`,
    )
    assert.deepEqual(
      visibleBreadcrumb.map(({ href }, index) =>
        href === null && index === visibleBreadcrumb.length - 1
          ? route.path
          : new URL(href as string, SITE_ORIGIN).pathname,
      ),
      expectedBreadcrumb.map(({ href }) => href),
      `Rendered breadcrumb URLs differ on ${route.path}`,
    )
  }

  const expectedList = getExpectedList(route)
  const marker = getVisibleListMarker(route)
  if (!expectedList || !marker) return
  const anchors = extractOrderedListAnchors(extractSection(
    html,
    marker,
    route.pageType === 'commercial-index' ? 'commercial-selection-heading' : undefined,
  ))
  assert.equal(anchors.length, expectedList.length, `Rendered list count differs on ${route.path}`)
  assert.deepEqual(
    anchors.map(({ href }) => new URL(href, SITE_ORIGIN).toString()),
    expectedList.map(({ canonicalUrl }) => canonicalUrl),
    `Rendered list URL order differs on ${route.path}`,
  )
  for (const [index, expected] of expectedList.entries()) {
    assert(
      anchors[index].text.includes(expected.name),
      `Rendered list name differs on ${route.path}: ${expected.name}`,
    )
    assert(
      anchors[index].text.includes(String(expected.position).padStart(2, '0')),
      `Rendered list position differs on ${route.path}: ${expected.position}`,
    )
  }

  assertItemListParity(route, graph)
}

function collectSummary(documents: readonly StructuredDataDocument[]) {
  const counts: Record<string, number> = {}
  const definitions = new Map<string, string>()
  const duplicateIds = new Set<string>()
  let nodes = 0
  for (const document of documents) {
    nodes += document['@graph'].length
    for (const node of document['@graph']) {
      const types = Array.isArray(node['@type']) ? node['@type'] : [node['@type']]
      for (const type of types) counts[type] = (counts[type] ?? 0) + 1
      if (definitions.has(node['@id'])) duplicateIds.add(node['@id'])
      else definitions.set(node['@id'], cleanJson(node))
    }
  }
  return {
    nodes,
    counts,
    uniqueIds: definitions.size,
    repeatedStableIds: duplicateIds.size,
  }
}

async function validateRenderedGraphs(baseUrl: string) {
  const origin = new URL(baseUrl)
  const results = await Promise.all(effectiveRoutes.map(async (route) => {
    const response = await fetch(new URL(route.path, origin))
    assert.equal(response.status, 200, `Rendered status for ${route.path}`)
    const html = await response.text()
    const scripts = extractStructuredDataScripts(html)
    assert.equal(scripts.length, 1, `Expected one coherent JSON-LD script on ${route.path}`)
    const parsed = JSON.parse(scripts[0]) as StructuredDataDocument
    const expected = graphs.get(route.id)
    assert(expected)
    assert.deepEqual(parsed, expected, `Rendered graph differs from governed builder on ${route.path}`)
    assertRouteContract(route, parsed)
    assertRenderedVisibleParity(route, parsed, html)
    const canonical = html.match(/<link\b[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i)
    assert(canonical)
    assert.equal(
      new URL(decodeHtml(canonical[1])).toString(),
      new URL(route.canonicalUrl).toString(),
    )
    return parsed
  }))

  const summary = collectSummary(results)
  console.log(
    `Rendered schema audit passed: ${results.length} routes, ${results.length} JSON-LD scripts, ${summary.nodes} nodes, ${summary.uniqueIds} unique IDs, ${summary.repeatedStableIds} repeated stable IDs, 0 parse failures, 0 forbidden types/properties, 0 ID conflicts, 0 dangling references, 0 breadcrumb mismatches, and 0 ItemList mismatches.`,
  )
  console.log(`Rendered node types: ${Object.entries(summary.counts).map(([type, count]) => `${type}=${count}`).join(', ')}`)
}

async function main() {
  const staticSummary = collectSummary([...graphs.values()])
  console.log(
    `Task 36 static structured-data validation passed: ${effectiveRoutes.length} routes, ${staticSummary.nodes} nodes, ${staticSummary.uniqueIds} unique IDs, ${staticSummary.repeatedStableIds} repeated stable IDs, 10 services, 8 ItemLists, 28 breadcrumbs, and 6 restrained BlogPosting nodes.`,
  )

  const runtimeBaseUrl = process.env.STRUCTURED_DATA_BASE_URL
  if (runtimeBaseUrl) await validateRenderedGraphs(runtimeBaseUrl)
}

main().catch((error: unknown) => {
  console.error(error)
  process.exitCode = 1
})
