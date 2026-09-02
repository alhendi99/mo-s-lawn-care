import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

import {
  blogArticles,
  getPublishedArticleBySlug,
  getPublishedArticleRoute,
  getPublishedArticles,
  getPublishedRelatedArticles,
  validateBlogArticles,
} from '../content/blog/index.ts'
import { bestTimeToOverseedLawnIowa } from '../content/blog/best-time-to-overseed-lawn-iowa.ts'
import { centralIowaLawnCareCalendar } from '../content/blog/central-iowa-lawn-care-calendar.ts'
import { fallLeafCleanupDesMoines } from '../content/blog/fall-leaf-cleanup-des-moines.ts'
import { whenToAerateLawnIowa } from '../content/blog/when-to-aerate-lawn-iowa.ts'
import { howOftenToMowLawnIowa } from '../content/blog/how-often-to-mow-lawn-iowa.ts'
import { springLawnCleanupDesMoines } from '../content/blog/spring-lawn-cleanup-des-moines.ts'
import { getBreadcrumbItems, routesById } from '../content/routes.ts'
import type { BlogArticle, BlogArticleBlock, BlogClaimNote, BlogSource } from '../content/types.ts'
import { analyticsEventNames } from '../lib/analytics.ts'
import { buildRouteMetadata, buildSitemapEntries } from '../lib/metadata.ts'
import {
  ORGANIZATION_ID,
  WEBSITE_ID,
  buildArticleItemListStructuredData,
  buildBlogPostingStructuredData,
  buildPageStructuredData,
} from '../lib/structured-data.ts'

const projectRoot = process.cwd()
const read = (relativePath: string) => fs.readFileSync(path.join(projectRoot, relativePath), 'utf8')
const article = howOftenToMowLawnIowa
const ownershipRoute = routesById['article-how-often-to-mow-lawn-iowa']

assert.equal(article.slug, 'how-often-to-mow-lawn-iowa')
assert.equal(article.path, '/blog/how-often-to-mow-lawn-iowa')
assert.equal(article.primaryKeyword, 'how often to mow lawn in iowa')
assert.deepEqual(article.secondaryKeywords, [
  'how often should I mow my lawn in Iowa',
  'mowing frequency Iowa',
  'how often to cut grass in Iowa',
])
assert.deepEqual(ownershipRoute.secondaryKeywords, article.secondaryKeywords)
assert.equal(ownershipRoute.secondaryKeywordStatus, 'defined')
assert.equal(article.title, "How Often Should You Mow a Lawn in Iowa? | Mo's Lawn Care")
assert.equal(article.h1, 'How Often Should You Mow Your Lawn in Iowa?')
assert.equal(article.description, 'Learn what determines mowing frequency for Iowa lawns, including growth, weather and seasonal conditions, without relying on a rigid schedule.')
assert.equal(ownershipRoute.canonicalUrl, 'https://www.moslawncaredsm.com/blog/how-often-to-mow-lawn-iowa')
assert.equal(article.status, 'published')
assert.equal(article.publisher, 'organization')
validateBlogArticles()

const sources = article.sources as readonly BlogSource[]
const claims = article.claimNotes as readonly BlogClaimNote[]
const articleBlocks = article.content as readonly BlogArticleBlock[]
assert(sources.length > 0)
assert(claims.length > 0)
const sourceIds = new Set(sources.map(({ id }) => id))
const claimIds = new Set(claims.map(({ id }) => id))
assert.equal(sourceIds.size, sources.length)
assert.equal(claimIds.size, claims.length)
assert(sources.some(({ url, publisher }) => new URL(url).hostname === 'yardandgarden.extension.iastate.edu' && publisher.includes('Iowa State University Extension')))
for (const source of sources) {
  assert.equal(new URL(source.url).protocol, 'https:')
  assert.equal(source.reviewedOn, '2026-09-02')
  assert.equal(new URL(source.url).hostname, 'yardandgarden.extension.iastate.edu')
  assert.equal(source.publisher, 'Iowa State University Extension and Outreach — Yard and Garden')
  assert(source.supportedClaimIds.length > 0)
  assert(source.publisher.trim())
  assert(source.jurisdiction?.trim())
  assert(source.scope?.trim())
  for (const claimId of source.supportedClaimIds) {
    assert(claimIds.has(claimId), `Source ${source.id} has unknown claim ${claimId}`)
    assert(claims.find(({ id }) => id === claimId)?.sourceIds.includes(source.id))
  }
}
for (const claim of claims) {
  for (const sourceId of claim.sourceIds) {
    assert(sourceIds.has(sourceId), `Claim ${claim.id} has unknown source ${sourceId}`)
    assert(sources.find(({ id }) => id === sourceId)?.supportedClaimIds.includes(claim.id))
  }
}

assert.equal(article.editorialReview.owner, 'Task 30 editorial review')
assert.equal(article.editorialReview.reviewedOn, '2026-09-02')
assert.equal('author' in article, false)
assert.equal('publishedOn' in article, false)
assert.equal('modifiedOn' in article, false)
assert.equal('image' in article, false)

const researchBrief = read('docs/research/task-30-mowing-frequency-brief.md')
for (const gate of [
  'Research Gate: PASS.',
  'Differentiation Gate: PASS.',
  'Conditional Municipal/Legal Gate: N/A.',
  'Tasks 28/29/32 Anti-Repetition Gate: PASS.',
  'Cannibalization Gate: PASS.',
  'Editorial Quality Gate: PASS.',
  'Spanish factual-parity review: PASS.',
]) assert(researchBrief.includes(gate), `Missing editorial gate: ${gate}`)
for (const required of [
  'User intent',
  'Research questions',
  'Source inventory',
  'Claim ledger',
  'Municipal/legal decision',
  'Secondary intent research',
  'Representative SERP/content-gap analysis',
  'Differentiation brief',
]) assert(researchBrief.includes(required), `Research brief missing ${required}`)

const published = getPublishedArticles()
assert.deepEqual(published, [whenToAerateLawnIowa, bestTimeToOverseedLawnIowa, article, springLawnCleanupDesMoines, fallLeafCleanupDesMoines, centralIowaLawnCareCalendar])
assert.equal(getPublishedArticleBySlug(article.slug), article)
assert.deepEqual(getPublishedRelatedArticles(article), [centralIowaLawnCareCalendar])
assert.equal(blogArticles.length, 6)
const futureSlugs = new Set<string>()
const allArticles: readonly BlogArticle[] = blogArticles
const futureArticles = allArticles.filter(({ slug }) => futureSlugs.has(slug))
assert.equal(futureArticles.length, 0)
assert(futureArticles.every(({ status }) => status === 'planned'))
assert(futureArticles.every(({ secondaryKeywords }) => secondaryKeywords.length === 0))
assert(futureArticles.every((candidate) => !('content' in candidate) && !('sources' in candidate)))

const publicRoute = getPublishedArticleRoute(article)
const metadata = buildRouteMetadata(publicRoute)
assert.equal(publicRoute.implementationStatus, 'implemented')
assert.equal(publicRoute.publicationStatus, 'published')
assert.equal(metadata.title, article.title)
assert.equal(metadata.description, article.description)
assert.equal(metadata.alternates?.canonical, ownershipRoute.canonicalUrl)
assert.equal((metadata.robots as { index?: boolean }).index, true)
assert.equal((metadata.robots as { follow?: boolean }).follow, true)

const sitemap = buildSitemapEntries()
assert.equal(sitemap.length, 29)
for (const candidate of published) assert.equal(sitemap.filter(({ url }) => url === routesById[candidate.routeId].canonicalUrl).length, 1)
for (const future of futureArticles) assert.equal(sitemap.some(({ url }) => url === routesById[future.routeId].canonicalUrl), false)

const itemList = buildArticleItemListStructuredData(routesById.blog, published)
assert.equal(itemList.numberOfItems, 6)
assert.deepEqual(itemList.itemListElement, published.map((candidate, index) => ({
  '@type': 'ListItem',
  position: index + 1,
  name: candidate.h1,
  url: routesById[candidate.routeId].canonicalUrl,
})))

const articleNode = buildBlogPostingStructuredData(publicRoute, article)
const graph = buildPageStructuredData(publicRoute, routesById.home, [articleNode])
const nodesByType = (type: string) => graph['@graph'].filter((node) => node['@type'] === type)
assert.equal(nodesByType('Organization').length, 1)
assert.equal(nodesByType('WebSite').length, 1)
assert.equal(nodesByType('WebPage').length, 1)
assert.equal(nodesByType('BreadcrumbList').length, 1)
assert.equal(nodesByType('BlogPosting').length, 1)
assert(graph['@graph'].some(({ '@id': id }) => id === ORGANIZATION_ID))
assert(graph['@graph'].some(({ '@id': id }) => id === WEBSITE_ID))
assert.deepEqual(articleNode.publisher, { '@id': ORGANIZATION_ID })
assert.deepEqual(articleNode.citation, article.sources.map(({ url }) => url))
for (const omitted of ['author', 'datePublished', 'dateModified', 'image']) assert.equal(Object.hasOwn(articleNode, omitted), false)
const serializedGraph = JSON.stringify(graph)
for (const forbidden of ['FAQPage', 'Review', 'AggregateRating', 'LocalBusiness', 'PostalAddress', 'GeoCoordinates', 'Offer']) {
  assert.equal(serializedGraph.includes(`\"@type\":\"${forbidden}\"`), false)
}

const visibleBreadcrumbs = getBreadcrumbItems(article.routeId)
assert.deepEqual(visibleBreadcrumbs.map(({ label }) => label), ['Home', 'Blog', article.h1])
assert.deepEqual(visibleBreadcrumbs.map(({ href }) => href), ['/', '/blog', article.path])
const schemaItems = nodesByType('BreadcrumbList')[0].itemListElement as readonly Record<string, unknown>[]
assert.deepEqual(schemaItems.map(({ name }) => name), visibleBreadcrumbs.map(({ label }) => label))
assert.deepEqual(schemaItems.map(({ position }) => position), [1, 2, 3])

const inlineLinks = articleBlocks.flatMap((block) => block.type === 'paragraph'
  ? block.content.flatMap((inline) => inline.href ? [inline.href] : [])
  : [])
assert(inlineLinks.includes('/services/lawn-mowing'))
assert(article.relatedArticlePaths.includes(centralIowaLawnCareCalendar.path))
assert.deepEqual(article.relatedServicePaths, ['/services/lawn-mowing'])

const articleText = [article.excerpt, ...articleBlocks.flatMap((block) => {
  if (block.type === 'heading') return [block.text]
  if (block.type === 'paragraph') return block.content.map(({ text }) => text)
  if (block.type === 'list') return block.items
  return [...block.headers, ...block.rows.flat()]
})].join(' ')
// Guard material claim risks; prose quality is reviewed in the research brief.
const unsupportedFrequency = /(?:mow|mowing|cut|cutting) (?:every (?:\d+|five|seven|ten|two)[^.!?]*?(?:days?|weeks?)|weekly|biweekly)|(?:spring|summer|fall)\s*[:=]\s*\d+\s*(?:days?|weeks?)/i
assert.doesNotMatch(articleText, unsupportedFrequency)
for (const unsafe of ['mow every 7 days', 'mowing weekly', 'cut biweekly', 'summer: 10 days']) assert.match(unsafe, unsupportedFrequency)
assert.match(articleText, /Suppose 3 inches is an appropriate finished height/)
assert.match(articleText, /4½ inches/)
assert.match(articleText, /removing 1½ inches leaves 3 inches/)
assert.match(articleText, /Kentucky bluegrass/)
assert.match(articleText, /no more than one-third/)
assert.match(articleText, /not to mow dormant lawns/)
assert.match(articleText, /after the grass dries/)
assert.match(articleText, /midday mowing may add stress/)
assert.match(articleText, /until the grass stops growing/)
for (const forbidden of ['When it comes to', 'In conclusion', 'our experience', 'our experts', 'this September', 'our weekly program', 'Mo’s mows weekly', 'Mo’s bags', 'Mo’s edges', 'guaranteed schedule']) {
  assert(!articleText.toLowerCase().includes(forbidden.toLowerCase()), `Unsupported copy: ${forbidden}`)
}
for (const source of sources) assert(researchBrief.includes(source.url) && researchBrief.includes(source.id))
for (const claim of claims) assert(researchBrief.includes(claim.id))
const citations = articleBlocks.flatMap((block) => block.type === 'paragraph' ? block.content.flatMap((inline) => inline.sourceId ? [inline.sourceId] : []) : [])
for (const source of sources) assert(citations.includes(source.id), `Unused visible source: ${source.id}`)
assert.match(researchBrief, /No municipal\/legal claim needed — omitted as outside core intent/)

const translations = JSON.parse(read('lib/es-translations.json')) as Record<string, string>
const visibleArticleStrings = new Set<string>([article.h1, article.excerpt])
for (const block of articleBlocks) {
  if (block.type === 'heading') visibleArticleStrings.add(block.text)
  if (block.type === 'paragraph') block.content.forEach(({ text }) => visibleArticleStrings.add(text))
  if (block.type === 'list') block.items.forEach((item) => visibleArticleStrings.add(item))
  if (block.type === 'table') {
    if (block.caption) visibleArticleStrings.add(block.caption)
    block.headers.forEach((header) => visibleArticleStrings.add(header))
    block.rows.forEach((row) => row.forEach((cell) => visibleArticleStrings.add(cell)))
  }
}
for (const source of sources) {
  if (source.jurisdiction !== 'Iowa') visibleArticleStrings.add(source.jurisdiction ?? '')
  visibleArticleStrings.add(source.scope ?? '')
}
for (const english of visibleArticleStrings) assert(translations[english], `Missing article translation: ${english}`)

const articleRouteSource = read('app/blog/[slug]/page.tsx')
const hubSource = read('app/blog/page.tsx')
const homepageTipsSource = read('components/homepage-tips.tsx')
const templateSource = read('components/blog-article.tsx')
assert.match(articleRouteSource, /getPublishedArticles\(\)\.map/)
assert.match(hubSource, /getPublishedArticles\(\)/)
assert.match(homepageTipsSource, /getPublishedArticles\(\)\.slice\(0, 3\)/)
assert.match(templateSource, /getPublishedRelatedArticles\(article\)/)
assert.match(templateSource, /<Tr text=\{source\.jurisdiction\}/)
assert.match(templateSource, /<Tr text=\{source\.scope\}/)
assert.equal(articleRouteSource.includes(article.slug), false)
assert.equal(hubSource.includes(article.slug), false)
assert.equal(homepageTipsSource.includes(article.slug), false)

assert.deepEqual(analyticsEventNames, ['generate_lead', 'form_start', 'form_submit_error', 'click_to_call', 'click_email'])
for (const forbiddenEvent of ['article_view', 'source_click', 'municipality_click', 'disposal_click', 'blog_click', 'toc_click', 'related_article_click', 'mowing_frequency_cta']) {
  assert.equal([articleRouteSource, hubSource, homepageTipsSource, templateSource].some((source) => source.includes(forbiddenEvent)), false)
}

const planSource = read('plan.md')
assert.match(planSource, /### Task 30 — “How Often to Mow a Lawn in Iowa” Article\n\n- \*\*Status:\*\* `\[x\]` Completed/)
assert.match(planSource, /### Task 32 — Des Moines Fall Leaf Cleanup Tips Article\n\n- \*\*Status:\*\* `\[x\]` Completed/)
assert.match(planSource, /### Task 31 — Des Moines Spring Cleanup Checklist Article\n\n- \*\*Status:\*\* `\[x\]` Completed/)

// Optional source/status gate against the already-built local production server.
const baseUrl = process.env.TASK30_BASE_URL
if (baseUrl) {
  const decode = (html: string) => html.replaceAll('&#x27;', "'").replaceAll('&#39;', "'").replaceAll('&amp;', '&').replaceAll('&quot;', '"')
  const documents: string[] = []
  for (const query of ['', '?lang=es', '?utm_source=google&utm_medium=organic&utm_campaign=gbp&utm_content=website_button', '?arbitrary=task30']) {
    const response: Response = await fetch(`${baseUrl}${article.path}${query}`, { redirect: 'manual' })
    assert.equal(response.status, 200)
    assert.equal(response.headers.get('location'), null)
    const html = decode(await response.text())
    documents.push(html)
    assert(html.includes(`<title>${article.title}</title>`))
    assert(html.includes(`<meta name="description" content="${article.description}"`))
    assert.equal(html.match(/<link rel="canonical"/g)?.length, 1)
    assert(html.includes(`<link rel="canonical" href="${ownershipRoute.canonicalUrl}"`))
    assert.equal(html.match(/<h1\b/g)?.length, 1)
    assert.match(html, /name="robots" content="index, follow"/)
    assert(!html.includes('name="keywords"'))
    assert(html.includes('Suppose 3 inches'))
    assert(html.includes('article-sources-heading'))
    assert(html.includes('href="/services/lawn-mowing"'))
    for (const source of sources) assert(html.includes(`href="${source.url}"`))
    for (const future of futureArticles) assert(!html.includes(future.path))
    const graphMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)
    assert(graphMatch)
    assert.deepEqual(JSON.parse(graphMatch[1]), graph)
  }
  for (const candidate of published) {
    const response: Response = await fetch(`${baseUrl}${candidate.path}`, { redirect: 'manual' })
    assert.equal(response.status, 200)
    assert.equal(response.headers.get('location'), null)
  }
  for (const future of futureArticles) {
    const response: Response = await fetch(`${baseUrl}${future.path}`, { redirect: 'manual' })
    assert.equal(response.status, 404)
    assert.equal(response.headers.get('location'), null)
    const html = await response.text()
    assert(html.includes('noindex'))
    assert(html.includes('Mo'))
    assert(!html.includes('rel="canonical"'))
  }
  const xml = await (await fetch(`${baseUrl}/sitemap.xml`)).text()
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1])
  assert.deepEqual(urls, sitemap.map(({ url }) => url))
  const hub = decode(await (await fetch(`${baseUrl}/blog`)).text())
  const listHtml = hub.split('<section id="published-guides"')[1].split('</section>')[0]
  assert.deepEqual([...listHtml.matchAll(/href="(\/blog\/[^"#?]+)"/g)].map((match) => match[1]), published.map(({ path }) => path))
  const hubGraph = JSON.parse(hub.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)![1])
  assert.deepEqual(hubGraph['@graph'].find((node: { '@type': string }) => node['@type'] === 'ItemList'), itemList)
  const home = decode(await (await fetch(baseUrl)).text())
  const tipsHtml = home.split('data-home-section="latest-tips"')[1].split('</section>')[0]
  assert.deepEqual([...tipsHtml.matchAll(/href="(\/blog\/[^"#?]+)"/g)].map((match) => match[1]), published.slice(0, 3).map(({ path }) => path))
  for (const future of futureArticles) {
    assert(!hub.includes(future.path))
    assert(!tipsHtml.includes(future.path))
  }
  console.log('Task 30 production source QA passed: six 200s, exact head/graph/query/links, hub/ItemList/Homepage parity and 29 sitemap URLs.')
}
console.log('Task 30 mowing frequency validation passed: ownership, research/gates, numeric and conditional boundaries, Spanish coverage, published pillar relationship, single publication selector, schema and 29-URL lifecycle.')
