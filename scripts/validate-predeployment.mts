import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

import {
  getPublishedArticleRoute,
  getPublishedArticles,
} from '../content/blog/index.ts'
import { workRecords } from '../content/projects.ts'
import { routeRegistry, routesById } from '../content/routes.ts'
import type { CanonicalRoute } from '../content/types.ts'
import {
  buildRobotsFile,
  buildSitemapEntries,
  getPublishedIndexableRoutes,
} from '../lib/metadata.ts'
import { approvedBusinessFacts } from '../lib/site.ts'
import { SITE_ORIGIN } from '../lib/site-url.ts'

const projectRoot = process.cwd()
const read = (relativePath: string) => fs.readFileSync(path.join(projectRoot, relativePath), 'utf8')
const publishedArticles = getPublishedArticles()
const effectiveRoutes: readonly CanonicalRoute[] = [
  ...getPublishedIndexableRoutes().filter(({ pageType }) => pageType !== 'blog-article'),
  ...publishedArticles.map(getPublishedArticleRoute),
]
const expectedPaths = effectiveRoutes.map(({ path }) => path)

assert.equal(routeRegistry.length, 29)
assert.equal(effectiveRoutes.length, 29)
assert.equal(new Set(expectedPaths).size, 29)
assert.equal(publishedArticles.length, 6)
assert.deepEqual(buildSitemapEntries().map(({ url }) => new URL(url).pathname), expectedPaths)
assert.deepEqual(buildRobotsFile(), {
  rules: { userAgent: '*', allow: '/' },
  sitemap: `${SITE_ORIGIN}/sitemap.xml`,
})

for (const route of effectiveRoutes) {
  assert.equal(route.implementationStatus, 'implemented', `${route.id} is not implemented`)
  assert.equal(route.publicationStatus, 'published', `${route.id} is not published`)
  assert.equal(route.indexability, 'indexable', `${route.id} is not indexable`)
  assert.equal(route.canonicalUrl, new URL(route.path, SITE_ORIGIN).toString())
  assert(!/[?#]/.test(route.path), `Unsafe canonical path: ${route.path}`)
  assert(route.path === '/' || !route.path.endsWith('/'), `Trailing canonical path: ${route.path}`)
}

for (const forbiddenPath of [
  '/service-areas/des-moines-ia',
  '/service-areas/des-moines',
  '/des-moines-ia',
  '/services/ground-clearance',
  '/services/leaves-removal',
  '/es',
]) {
  assert(!expectedPaths.includes(forbiddenPath as (typeof expectedPaths)[number]))
}

assert.equal(routesById.home.primaryKeyword, 'lawn care des moines ia')
assert.equal(effectiveRoutes.filter(({ path }) => path.includes('des-moines-ia')).length, 0)
assert.equal(effectiveRoutes.filter(({ pageType }) => pageType === 'service-area').length, 4)
assert.equal(effectiveRoutes.filter(({ pageType }) => pageType === 'service').length, 10)
assert.equal(effectiveRoutes.filter(({ pageType }) => pageType === 'blog-article').length, 6)
assert.match(read('components/hero-video.tsx'), /setTimeout\(\(\) => setVideoEnabled\(true\), 2500\)/)
assert.match(read('components/gallery.tsx'), /slice\(0, OUR_WORK_INITIAL_COUNT\)/)
assert.match(read('components/GalleryClient.tsx'), /limit=\$\{batchSize\}/)
assert.match(read('plan.md'), /### Task 36 — Structured Data Validation and Hardening\n\n- \*\*Status:\*\* `\[x\]` Completed/)
assert.match(read('plan.md'), /### Task 38 — GA4 Production Validation and Manual Account Actions\n\n- \*\*Status:\*\* `\[x\]` Completed/)
assert.match(read('plan.md'), /### Task 39 — Documentation, Final Cleanup, and Implementation Gate Closure\n\n- \*\*Status:\*\* `\[x\]` Completed/)

function decodeHtml(value: string) {
  return value.replace(/&(#x[0-9a-f]+|#\d+|amp|apos|quot|lt|gt|nbsp);/gi, (entity, body: string) => {
    if (body.toLowerCase().startsWith('#x')) return String.fromCodePoint(Number.parseInt(body.slice(2), 16))
    if (body.startsWith('#')) return String.fromCodePoint(Number.parseInt(body.slice(1), 10))
    return ({ amp: '&', apos: "'", quot: '"', lt: '<', gt: '>', nbsp: ' ' } as Record<string, string>)[body.toLowerCase()] ?? entity
  })
}

function normalizeText(value: string) {
  return decodeHtml(value.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim())
}

function attributes(tag: string) {
  const values = new Map<string, string>()
  for (const match of tag.matchAll(/([:\w-]+)\s*=\s*(["'])([\s\S]*?)\2/g)) {
    values.set(match[1].toLowerCase(), decodeHtml(match[3]))
  }
  return values
}

function tags(html: string, tagName: string) {
  return [...html.matchAll(new RegExp(`<${tagName}\\b[^>]*>`, 'gi'))].map(({ 0: tag }) => attributes(tag))
}

function tagContent(html: string, tagName: string) {
  return [...html.matchAll(new RegExp(`<${tagName}\\b[^>]*>([\\s\\S]*?)<\\/${tagName}>`, 'gi'))]
    .map((match) => normalizeText(match[1]))
}

function namedContent(html: string, tagName: string, name: string) {
  return tags(html, tagName).find((tag) => tag.get('name')?.toLowerCase() === name.toLowerCase())?.get('content')
}

function linkedHref(html: string, rel: string) {
  return tags(html, 'link').find((tag) => tag.get('rel')?.split(/\s+/).includes(rel))?.get('href')
}

function assertHeadAndSource(route: CanonicalRoute, html: string, context: string) {
  assert.equal(tagContent(html, 'title')[0], route.title, `${context}: title mismatch`)
  assert.equal(namedContent(html, 'meta', 'description'), route.description, `${context}: description mismatch`)
  const canonical = linkedHref(html, 'canonical')
  assert(canonical, `${context}: canonical missing`)
  assert.equal(new URL(canonical).toString(), new URL(route.canonicalUrl).toString(), `${context}: canonical mismatch`)
  assert.equal(tagContent(html, 'h1').length, 1, `${context}: expected one H1`)
  assert.equal(tagContent(html, 'h1')[0], route.h1, `${context}: H1 mismatch`)
  assert.match(html, /<main\b/i, `${context}: missing server-rendered main`)
  assert(!namedContent(html, 'meta', 'keywords'), `${context}: meta keywords present`)
  const robots = namedContent(html, 'meta', 'robots')?.toLowerCase() ?? ''
  assert(!robots.includes('noindex'), `${context}: accidental noindex`)
  assert(!robots.includes('nofollow'), `${context}: accidental nofollow`)
  assert.equal(tags(html, 'link').some((tag) => tag.get('hreflang')), false, `${context}: unexpected hreflang`)

  const jsonLd = [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)]
  assert.equal(jsonLd.length, 1, `${context}: expected one JSON-LD graph`)
  assert.doesNotThrow(() => JSON.parse(jsonLd[0][1]), `${context}: invalid JSON-LD`)
  if (route.path !== '/') {
    assert(tags(html, 'nav').some((tag) => tag.get('aria-label') === 'Breadcrumb'), `${context}: missing breadcrumb`)
  }
}

async function mapBounded<T, R>(items: readonly T[], concurrency: number, task: (item: T) => Promise<R>) {
  const results: R[] = new Array(items.length)
  let nextIndex = 0
  async function worker() {
    while (nextIndex < items.length) {
      const index = nextIndex++
      results[index] = await task(items[index])
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, worker))
  return results
}

async function fetchHtml(url: URL, expectedStatus: number) {
  const response = await fetch(url, { redirect: 'manual', signal: AbortSignal.timeout(20_000) })
  assert.equal(response.status, expectedStatus, `${url.pathname}${url.search} returned ${response.status}`)
  assert(!response.headers.get('location'), `${url.pathname}${url.search} redirected unexpectedly`)
  return response.text()
}

async function validateRoutes(baseUrl: URL) {
  await mapBounded(effectiveRoutes, 6, async (route) => {
    const html = await fetchHtml(new URL(route.path, baseUrl), 200)
    assertHeadAndSource(route, html, route.path)
  })

  const query = '?lang=es&utm_source=task37&utm_medium=test'
  await mapBounded(effectiveRoutes, 6, async (route) => {
    const html = await fetchHtml(new URL(`${route.path}${query}`, baseUrl), 200)
    assertHeadAndSource(route, html, `${route.path}${query}`)
  })

  for (const route of [routesById.home, routesById.contact, routesById['service-aeration-overseeding']]) {
    const html = await fetchHtml(new URL(`${route.path}?service=fake&city=chicago&form_id=arbitrary`, baseUrl), 200)
    assertHeadAndSource(route, html, `${route.path} arbitrary context query`)
  }
}

async function validateSitemapAndRobots(baseUrl: URL) {
  const sitemapResponse = await fetch(new URL('/sitemap.xml', baseUrl), { redirect: 'manual' })
  assert.equal(sitemapResponse.status, 200)
  const sitemap = await sitemapResponse.text()
  const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => decodeHtml(match[1]))
  assert.equal(locations.length, 29)
  assert.deepEqual(locations, effectiveRoutes.map(({ canonicalUrl }) => canonicalUrl))
  assert.equal(new Set(locations).size, 29)
  assert(!/<lastmod>/i.test(sitemap), 'Sitemap contains synthetic lastmod values')
  for (const location of locations) {
    const url = new URL(location)
    assert.equal(url.origin, SITE_ORIGIN)
    assert.equal(url.search, '')
    assert.equal(url.hash, '')
  }

  const robotsResponse = await fetch(new URL('/robots.txt', baseUrl), { redirect: 'manual' })
  assert.equal(robotsResponse.status, 200)
  const robots = await robotsResponse.text()
  assert.match(robots, /User-Agent:\s*\*/i)
  assert.match(robots, /Allow:\s*\//i)
  assert.match(robots, new RegExp(`Sitemap:\\s*${SITE_ORIGIN.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\/sitemap\\.xml`, 'i'))
  assert.doesNotMatch(robots, /Disallow:\s*\//i)
}

async function validateNotFoundAndRedirects(baseUrl: URL) {
  const invalidPaths = [
    '/task-37-unknown-route',
    '/services/not-a-service',
    '/service-areas/not-a-city',
    '/blog/not-an-article',
    '/service-areas/des-moines-ia',
    '/tag/lawn-care',
    '/author/mos-lawn-care',
    '/services/leaf-removal',
  ]
  for (const invalidPath of invalidPaths) {
    const html = await fetchHtml(new URL(invalidPath, baseUrl), 404)
    assert.equal(linkedHref(html, 'canonical'), undefined, `${invalidPath}: 404 exposes a canonical`)
    assert.match(normalizeText(html), /This patch of lawn doesn't exist\./, `${invalidPath}: branded 404 copy missing`)
  }

  for (const canonicalPath of ['/services', '/services/aeration-overseeding', '/service-areas/ankeny-ia', '/blog/central-iowa-lawn-care-calendar']) {
    const response = await fetch(new URL(`${canonicalPath}/`, baseUrl), { redirect: 'manual' })
    assert([307, 308].includes(response.status), `${canonicalPath}/ did not normalize directly`)
    const location = response.headers.get('location')
    assert(location, `${canonicalPath}/ normalization has no location`)
    const normalized = new URL(location, baseUrl)
    assert.equal(normalized.pathname, canonicalPath)
    const target = await fetch(normalized, { redirect: 'manual' })
    assert.equal(target.status, 200, `${canonicalPath}/ normalization target failed`)
    assert.equal(target.headers.get('location'), null, `${canonicalPath}/ normalization chained`)
  }
}

async function validateExternalReachability() {
  const externalUrls = new Set<string>([
    ...approvedBusinessFacts.externalProfiles.map(({ href }) => href),
    ...publishedArticles.flatMap(({ sources }) => sources.map(({ url }) => url)),
    ...workRecords.map(({ src }) => src).filter((src) => /^https?:\/\//.test(src)),
  ])
  const results = await mapBounded([...externalUrls], 8, async (url) => {
    try {
      let response = await fetch(url, { method: 'HEAD', redirect: 'follow', signal: AbortSignal.timeout(20_000) })
      if (!response.ok) {
        response = await fetch(url, {
          headers: { Range: 'bytes=0-0' },
          redirect: 'follow',
          signal: AbortSignal.timeout(20_000),
        })
      }
      if (response.ok) return { status: 'reachable' as const, detail: url }
      if ([401, 403, 429].includes(response.status)) {
        return { status: 'restricted' as const, detail: `${response.status} ${url}` }
      }
      return { status: 'failed' as const, detail: `${response.status} ${url}` }
    } catch (error) {
      return { status: 'failed' as const, detail: `${error instanceof Error ? error.name : 'Error'} ${url}` }
    }
  })
  const failed = results.filter(({ status }) => status === 'failed')
  const restricted = results.filter(({ status }) => status === 'restricted')
  assert.deepEqual(failed, [], `External reachability failures:\n${failed.map(({ detail }) => detail).join('\n')}`)
  if (restricted.length > 0) {
    console.log(`External automated-client restrictions (${restricted.length}):\n${restricted.map(({ detail }) => detail).join('\n')}`)
  }
  console.log(`External reachability passed: ${results.length - restricted.length}/${externalUrls.size} direct automated responses; ${restricted.length} restricted responses require independent confirmation.`)
}

async function validateProduction(baseUrlValue: string) {
  const baseUrl = new URL(baseUrlValue)
  await validateRoutes(baseUrl)
  await validateSitemapAndRobots(baseUrl)
  await validateNotFoundAndRedirects(baseUrl)
  console.log('Task 37 production source gate passed: 29/29 routes and query variants, exact head/H1/canonical/source/schema, 29-URL sitemap, robots, eight true 404s, and four direct local slash normalizations.')
}

const baseUrl = process.env.PREDEPLOYMENT_BASE_URL
const checkExternal = process.env.PREDEPLOYMENT_EXTERNAL === '1'

Promise.resolve()
  .then(() => baseUrl ? validateProduction(baseUrl) : undefined)
  .then(() => checkExternal ? validateExternalReachability() : undefined)
  .then(() => {
    console.log('Task 37 predeployment validation passed: exact public lifecycle, route families, sitemap/robots, prohibited-route isolation, Task 34 media bounds, and Tasks 36–39 completion.')
  })
  .catch((error: unknown) => {
    console.error(error)
    process.exitCode = 1
  })
