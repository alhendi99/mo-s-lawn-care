import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

import {
  getPublishedArticleRoute,
  getPublishedArticles,
} from '../content/blog/index.ts'
import { aerationOverseedingService } from '../content/services/aeration-overseeding.ts'
import { fallCleanupLeafRemovalService } from '../content/services/fall-cleanup-leaf-removal.ts'
import { fertilizationWeedControlService } from '../content/services/fertilization-weed-control.ts'
import { flowerBedMaintenanceService } from '../content/services/flower-bed-maintenance.ts'
import { gradingService } from '../content/services/grading.ts'
import { landscapingService } from '../content/services/landscaping.ts'
import { lawnMowingService } from '../content/services/lawn-mowing.ts'
import { snowRemovalService } from '../content/services/snow-removal.ts'
import { springCleanupService } from '../content/services/spring-cleanup.ts'
import type { ServiceDetailContent } from '../content/services/types.ts'
import { yardCleanupService } from '../content/services/yard-cleanup.ts'
import {
  companyNavigationRouteIds,
  footerServiceNavigationRouteIds,
  getBreadcrumbItems,
  primaryNavigationRouteIds,
  routeLabels,
  routeRegistry,
  routesById,
  serviceAreaNavigationRouteIds,
  serviceNavigationRouteIds,
} from '../content/routes.ts'
import type { RouteId } from '../content/types.ts'
import { analyticsEventNames } from '../lib/analytics.ts'
import {
  buildSitemapEntries,
  getPublishedIndexableRoutes,
} from '../lib/metadata.ts'
import { SITE_ORIGIN } from '../lib/site-url.ts'

const projectRoot = process.cwd()
const read = (relativePath: string) => fs.readFileSync(path.join(projectRoot, relativePath), 'utf8')

const publishedArticles = getPublishedArticles()
const effectiveRoutes = [
  ...getPublishedIndexableRoutes().filter(({ pageType }) => pageType !== 'blog-article'),
  ...publishedArticles.map(getPublishedArticleRoute),
]
const effectiveRouteIds = new Set<RouteId>(effectiveRoutes.map(({ id }) => id))
const effectivePaths = new Set<string>(effectiveRoutes.map(({ path }) => path))

assert.equal(effectiveRoutes.length, 29)
assert.equal(new Set(effectiveRoutes.map(({ id }) => id)).size, 29)
assert.equal(effectivePaths.size, 29)
assert.equal(routeRegistry.length, 29)
assert.equal(publishedArticles.length, 6)

const forbiddenPaths = [
  '/service-areas/des-moines-ia',
  '/service-areas/des-moines',
  '/des-moines',
]
for (const route of effectiveRoutes) {
  assert(route.path === '/' || !route.path.endsWith('/'), `Trailing canonical path: ${route.path}`)
  assert(!/[?#]/.test(route.path), `Query or fragment in canonical path: ${route.path}`)
  assert(!forbiddenPaths.includes(route.path), `Forbidden Des Moines route: ${route.path}`)
  for (const linkedId of [...route.inboundLinkIds, ...route.outboundLinkIds]) {
    assert(effectiveRouteIds.has(linkedId), `${route.id} references unpublished route ${linkedId}`)
  }
}

const sitemap = buildSitemapEntries()
assert.equal(sitemap.length, 29)
assert.deepEqual(
  new Set(sitemap.map(({ url }) => new URL(url).pathname)),
  effectivePaths,
)

const services = [
  lawnMowingService,
  aerationOverseedingService,
  fertilizationWeedControlService,
  landscapingService,
  flowerBedMaintenanceService,
  yardCleanupService,
  springCleanupService,
  fallCleanupLeafRemovalService,
  gradingService,
  snowRemovalService,
] as const
type ServiceContentRouteId = (typeof services)[number]['routeId']

const serviceMatrix = {
  'service-lawn-mowing': [
    'service-aeration-overseeding',
    'service-fertilization-weed-control',
    'service-yard-cleanup',
    'commercial-property-services',
    'our-work',
    'article-how-often-to-mow-lawn-iowa',
    'contact',
  ],
  'service-aeration-overseeding': [
    'service-fertilization-weed-control',
    'service-lawn-mowing',
    'service-spring-cleanup',
    'article-when-to-aerate-lawn-iowa',
    'article-best-time-to-overseed-lawn-iowa',
    'services',
    'contact',
  ],
  'service-fertilization-weed-control': [
    'service-aeration-overseeding',
    'service-lawn-mowing',
    'services',
    'contact',
  ],
  'service-landscaping': [
    'service-flower-bed-maintenance',
    'service-grading',
    'service-yard-cleanup',
    'our-work',
    'commercial-property-services',
    'contact',
  ],
  'service-flower-bed-maintenance': [
    'service-landscaping',
    'service-spring-cleanup',
    'service-fall-cleanup-leaf-removal',
    'service-yard-cleanup',
    'contact',
  ],
  'service-yard-cleanup': [
    'service-lawn-mowing',
    'service-spring-cleanup',
    'service-fall-cleanup-leaf-removal',
    'service-grading',
    'service-landscaping',
    'contact',
  ],
  'service-spring-cleanup': [
    'service-lawn-mowing',
    'service-flower-bed-maintenance',
    'service-yard-cleanup',
    'service-landscaping',
    'article-spring-lawn-cleanup-des-moines',
    'contact',
  ],
  'service-fall-cleanup-leaf-removal': [
    'service-yard-cleanup',
    'service-lawn-mowing',
    'service-snow-removal',
    'article-fall-leaf-cleanup-des-moines',
    'contact',
  ],
  'service-grading': ['service-yard-cleanup', 'service-landscaping', 'our-work', 'contact'],
  'service-snow-removal': ['commercial-property-services', 'service-areas', 'reviews', 'contact'],
} as const satisfies Readonly<Record<ServiceContentRouteId, readonly RouteId[]>>

const standardServiceDestinations = new Set<RouteId>([
  'services',
  'commercial-property-services',
  'our-work',
  'contact',
])
for (const serviceRecord of services) {
  const service: ServiceDetailContent = serviceRecord
  const semanticDestinations = new Set<RouteId>([
    ...service.relatedServices.map(({ routeId }) => routeId),
    ...(service.helpfulResources?.items.map(({ routeId }) => routeId) ?? []),
    ...standardServiceDestinations,
  ])
  for (const requiredId of serviceMatrix[serviceRecord.routeId]) {
    assert(
      semanticDestinations.has(requiredId),
      `Missing service relationship ${service.routeId} -> ${requiredId}`,
    )
  }
}

const expectedHelpfulResources = new Map<RouteId, readonly RouteId[]>([
  ['service-lawn-mowing', ['article-how-often-to-mow-lawn-iowa']],
  [
    'service-aeration-overseeding',
    ['article-when-to-aerate-lawn-iowa', 'article-best-time-to-overseed-lawn-iowa'],
  ],
  ['service-spring-cleanup', ['article-spring-lawn-cleanup-des-moines']],
  ['service-fall-cleanup-leaf-removal', ['article-fall-leaf-cleanup-des-moines']],
])
const spanish = JSON.parse(read('lib/es-translations.json')) as Record<string, string>
for (const serviceRecord of services) {
  const service: ServiceDetailContent = serviceRecord
  const expected = expectedHelpfulResources.get(service.routeId) ?? []
  const actual = service.helpfulResources?.items.map(({ routeId }) => routeId) ?? []
  assert.deepEqual(actual, expected, `Unexpected Helpful Resources set for ${service.routeId}`)
  if (!service.helpfulResources) continue

  const strings = [
    service.helpfulResources.eyebrow,
    service.helpfulResources.heading,
    service.helpfulResources.description,
    ...service.helpfulResources.items.flatMap(({ eyebrow, description }) => [eyebrow, description]),
  ]
  for (const value of strings) {
    assert(value.trim(), `Empty Helpful Resources copy on ${service.routeId}`)
    assert(spanish[value]?.trim(), `Missing Spanish Helpful Resources translation: ${value}`)
    assert.doesNotMatch(value, /https?:\/\/|www\./i, `Raw URL used as resource copy: ${value}`)
    assert.doesNotMatch(
      value,
      /lawn mowing frequency lawn care mowing tips|des moines ia lawn care service/i,
      `Keyword-stuffed resource copy: ${value}`,
    )
  }
  assert.match(service.helpfulResources.description, /informational/i)
  assert.match(service.helpfulResources.description, /not|do not/i)
}

for (const [serviceId, articleIds] of expectedHelpfulResources) {
  for (const articleId of articleIds) {
    const article = publishedArticles.find(({ routeId }) => routeId === articleId)
    assert(article, `Helpful resource is not published: ${articleId}`)
    assert(
      article.relatedServicePaths.includes(routesById[serviceId].path),
      `Missing article reciprocity ${articleId} -> ${serviceId}`,
    )
  }
}

const pillarId = 'article-central-iowa-lawn-care-calendar'
const childIds = [
  'article-when-to-aerate-lawn-iowa',
  'article-best-time-to-overseed-lawn-iowa',
  'article-how-often-to-mow-lawn-iowa',
  'article-spring-lawn-cleanup-des-moines',
  'article-fall-leaf-cleanup-des-moines',
] as const
const pillar = publishedArticles.find(({ routeId }) => routeId === pillarId)
assert(pillar)
assert.deepEqual(pillar.relatedArticlePaths, childIds.map((id) => routesById[id].path))
for (const childId of childIds) {
  const child = publishedArticles.find(({ routeId }) => routeId === childId)
  assert(child?.relatedArticlePaths.includes(routesById[pillarId].path), `${childId} does not link to pillar`)
}

const globalDestinationIds = new Set<RouteId>([
  'home',
  ...primaryNavigationRouteIds,
  ...serviceNavigationRouteIds,
  ...footerServiceNavigationRouteIds,
  ...serviceAreaNavigationRouteIds,
  ...companyNavigationRouteIds,
])
assert.deepEqual(serviceAreaNavigationRouteIds, [
  'home',
  'service-area-ankeny',
  'service-area-waukee',
  'service-area-norwalk',
  'service-area-altoona',
])

const staticGraph = new Map<RouteId, Set<RouteId>>(
  effectiveRoutes.map(({ id }) => [id, new Set<RouteId>()]),
)
for (const route of effectiveRoutes) {
  const destinations = staticGraph.get(route.id)
  assert(destinations)
  for (const destinationId of globalDestinationIds) {
    if (destinationId !== route.id) destinations.add(destinationId)
  }
  for (const crumb of getBreadcrumbItems(route.id)) {
    if (!crumb.isCurrent) destinations.add(crumb.routeId)
  }
  for (const destinationId of route.outboundLinkIds) {
    if (destinationId !== route.id) destinations.add(destinationId)
  }
  assert(route.outboundLinkIds.length > 0, `No contextual route relationship for ${route.path}`)
}

function summarizeGraph(graph: ReadonlyMap<RouteId, ReadonlySet<RouteId>>) {
  const inbound = new Map<RouteId, Set<RouteId>>(
    effectiveRoutes.map(({ id }) => [id, new Set<RouteId>()]),
  )
  for (const [source, destinations] of graph) {
    for (const destination of destinations) inbound.get(destination)?.add(source)
  }
  for (const route of effectiveRoutes) {
    if (route.id !== 'home') assert((inbound.get(route.id)?.size ?? 0) > 0, `Orphan route: ${route.path}`)
  }

  const depth = new Map<RouteId, number>([['home', 0]])
  const queue: RouteId[] = ['home']
  while (queue.length > 0) {
    const source = queue.shift()
    assert(source)
    for (const destination of graph.get(source) ?? []) {
      if (!depth.has(destination)) {
        depth.set(destination, (depth.get(source) ?? 0) + 1)
        queue.push(destination)
      }
    }
  }
  assert.equal(depth.size, 29, 'Not every canonical route is reachable from /')
  const maxDepth = Math.max(...depth.values())
  assert(maxDepth <= 3, `Maximum crawl depth is ${maxDepth}`)
  return { inbound, depth, maxDepth }
}

summarizeGraph(staticGraph)

const sourceFiles = ['app', 'components'].flatMap((directory) => {
  const walk = (current: string): string[] => fs.readdirSync(current, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(current, entry.name)
    return entry.isDirectory() ? walk(entryPath) : [entryPath]
  })
  return walk(path.join(projectRoot, directory)).filter((file) => /\.(?:ts|tsx)$/.test(file))
})
for (const file of sourceFiles) {
  const source = fs.readFileSync(file, 'utf8')
  for (const match of source.matchAll(/href\s*=\s*["']([^"']+)["']/g)) {
    const href = match[1]
    if (!href.startsWith('/')) continue
    const url = new URL(href, SITE_ORIGIN)
    assert(!url.search, `Query-bearing internal href in ${path.relative(projectRoot, file)}: ${href}`)
    assert(
      url.pathname === '/' || !url.pathname.endsWith('/'),
      `Redirect-dependent internal href in ${path.relative(projectRoot, file)}: ${href}`,
    )
  }
}

assert.deepEqual(analyticsEventNames, [
  'generate_lead',
  'form_start',
  'form_submit_error',
  'click_to_call',
  'click_email',
])
assert.match(read('components/service-detail-page.tsx'), /content\.helpfulResources/)
assert.doesNotMatch(read('components/service-detail-page.tsx'), /gtag|internal_link_click|resource_click/)
assert.match(read('components/hero-video.tsx'), /setTimeout\(\(\) => setVideoEnabled\(true\), 2500\)/)
assert.match(read('components/gallery.tsx'), /slice\(0, OUR_WORK_INITIAL_COUNT\)/)
assert.match(read('plan.md'), /### Task 35 — Internal Linking and Content-Cluster Audit\n\n- \*\*Status:\*\* `\[x\]` Completed/)
assert.match(read('plan.md'), /### Task 36 — Structured Data Validation and Hardening\n\n- \*\*Status:\*\* `\[x\]` Completed/)

async function validateRenderedGraph(renderedBaseUrl: string) {
  const baseUrl = new URL(renderedBaseUrl)
  const routeIdByPath = new Map<string, RouteId>(effectiveRoutes.map(({ path, id }) => [path, id]))
  const renderedGraph = new Map<RouteId, Set<RouteId>>(
    effectiveRoutes.map(({ id }) => [id, new Set<RouteId>()]),
  )
  const contextualGraph = new Map<RouteId, Set<RouteId>>(
    effectiveRoutes.map(({ id }) => [id, new Set<RouteId>()]),
  )
  let anchorCount = 0

  const normalizePath = (pathname: string) => pathname === '/' ? '/' : pathname.replace(/\/$/, '')
  const anchorText = (value: string) => value
    .replace(/<[^>]*>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  for (const route of effectiveRoutes) {
    const response = await fetch(new URL(route.path, baseUrl), { redirect: 'manual' })
    assert.equal(response.status, 200, `${route.path} returned ${response.status}`)
    const html = await response.text()
    const mainHtml = html.match(/<main\b[\s\S]*?<\/main>/i)?.[0]
    assert(mainHtml, `${route.path} has no rendered main element`)

    const collect = (fragment: string, graph: Map<RouteId, Set<RouteId>>, countAnchors: boolean) => {
      for (const match of fragment.matchAll(/<a\b([^>]*?)href=["']([^"']+)["']([^>]*)>([\s\S]*?)<\/a>/gi)) {
        const href = match[2]
        if (/^(?:tel:|mailto:|#)/.test(href)) continue
        const url = new URL(href, baseUrl)
        const isLocal = url.origin === baseUrl.origin
        const isProductionAbsolute = href.startsWith(SITE_ORIGIN)
        if (!isLocal && !isProductionAbsolute) continue
        if (countAnchors) anchorCount += 1

        assert(!isProductionAbsolute, `${route.path} uses an absolute production internal href: ${href}`)
        assert(!url.search, `${route.path} uses a query-bearing internal href: ${href}`)
        assert(
          url.pathname === '/' || !url.pathname.endsWith('/'),
          `${route.path} uses a redirect-dependent href: ${href}`,
        )
        const destinationPath = normalizePath(url.pathname)
        assert(!forbiddenPaths.includes(destinationPath), `${route.path} links forbidden path ${href}`)
        const destinationId = routeIdByPath.get(destinationPath)
        assert(destinationId, `${route.path} links noncanonical or unpublished path ${href}`)
        assert(anchorText(match[4]), `${route.path} has an empty anchor for ${href}`)
        assert.doesNotMatch(anchorText(match[4]), /^https?:\/\//, `${route.path} uses a raw URL anchor`)
        if (destinationId !== route.id) graph.get(route.id)?.add(destinationId)
      }
    }

    collect(html, renderedGraph, true)
    collect(mainHtml, contextualGraph, false)
  }

  const renderedSummary = summarizeGraph(renderedGraph)
  for (const route of effectiveRoutes) {
    assert(
      (contextualGraph.get(route.id)?.size ?? 0) > 0,
      `${route.path} has no contextual outbound canonical link`,
    )
  }
  for (const [sourceId, destinationIds] of Object.entries(serviceMatrix) as [RouteId, readonly RouteId[]][]) {
    for (const destinationId of destinationIds) {
      assert(
        contextualGraph.get(sourceId)?.has(destinationId),
        `Rendered service relationship missing ${sourceId} -> ${destinationId}`,
      )
    }
  }
  for (const [serviceId, articleIds] of expectedHelpfulResources) {
    for (const articleId of articleIds) {
      assert(contextualGraph.get(serviceId)?.has(articleId), `Rendered reciprocity missing ${serviceId} -> ${articleId}`)
      assert(contextualGraph.get(articleId)?.has(serviceId), `Rendered reciprocity missing ${articleId} -> ${serviceId}`)
    }
  }
  assert.deepEqual(
    childIds.filter((id) => contextualGraph.get(pillarId)?.has(id)),
    [...childIds],
  )
  for (const childId of childIds) assert(contextualGraph.get(childId)?.has(pillarId))

  const uniqueEdgeCount = [...renderedGraph.values()].reduce((total, destinations) => total + destinations.size, 0)
  const contextualEdgeCount = [...contextualGraph.values()].reduce((total, destinations) => total + destinations.size, 0)
  console.log(
    `Rendered Task 35 graph passed: 29 routes, ${anchorCount} internal anchors, ${uniqueEdgeCount} unique canonical edges, ${contextualEdgeCount} main-content edges, zero orphans, maximum depth ${renderedSummary.maxDepth}, and zero invalid/query/redirect-dependent links.`,
  )
}

const successMessage =
  'Task 35 internal-link validation passed: 29 canonical routes, complete service matrix, five reciprocal service/article relationships, exact five-child calendar cluster, clean canonical paths, restrained bilingual Helpful Resources, unchanged analytics, and preserved Task 34 contracts.'
const renderedBaseUrl = process.env.INTERNAL_LINK_BASE_URL
if (renderedBaseUrl) {
  validateRenderedGraph(renderedBaseUrl)
    .then(() => console.log(successMessage))
    .catch((error: unknown) => {
      console.error(error)
      process.exitCode = 1
    })
} else {
  console.log(successMessage)
}
