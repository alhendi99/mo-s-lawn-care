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
import { howOftenToMowLawnIowa } from '../content/blog/how-often-to-mow-lawn-iowa.ts'
import { springLawnCleanupDesMoines } from '../content/blog/spring-lawn-cleanup-des-moines.ts'
import { whenToAerateLawnIowa } from '../content/blog/when-to-aerate-lawn-iowa.ts'
import { getBreadcrumbItems, routesById } from '../content/routes.ts'
import type { BlogArticle, BlogArticleBlock, BlogClaimNote, BlogSource, PublishedBlogArticle } from '../content/types.ts'
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
const article = centralIowaLawnCareCalendar
const ownershipRoute = routesById['article-central-iowa-lawn-care-calendar']
const children = [
  whenToAerateLawnIowa,
  bestTimeToOverseedLawnIowa,
  howOftenToMowLawnIowa,
  springLawnCleanupDesMoines,
  fallLeafCleanupDesMoines,
] as const satisfies readonly PublishedBlogArticle[]

assert.equal(article.slug, 'central-iowa-lawn-care-calendar')
assert.equal(article.path, '/blog/central-iowa-lawn-care-calendar')
assert.equal(article.primaryKeyword, 'central iowa lawn care calendar')
assert.deepEqual(article.secondaryKeywords, [
  'Iowa lawn care calendar',
  'seasonal lawn care Iowa',
  'Iowa lawn care by season',
])
assert.deepEqual(ownershipRoute.secondaryKeywords, article.secondaryKeywords)
assert.equal(ownershipRoute.secondaryKeywordStatus, 'defined')
assert.equal(article.title, "Central Iowa Lawn Care Calendar | Mo's Lawn Care")
assert.equal(article.h1, 'A Seasonal Lawn Care Calendar for Central Iowa')
assert.equal(article.description, 'Plan mowing, cleanup, aeration and other lawn-care decisions through the seasons with a practical Central Iowa property-care calendar.')
assert.equal(ownershipRoute.canonicalUrl, 'https://www.moslawncaredsm.com/blog/central-iowa-lawn-care-calendar')
assert.equal(article.status, 'published')
assert.equal(article.publisher, 'organization')
validateBlogArticles()

const sources = article.sources as readonly BlogSource[]
const claims = article.claimNotes as readonly BlogClaimNote[]
const blocks = article.content as readonly BlogArticleBlock[]
const sourceIds = new Set(sources.map(({ id }) => id))
const claimIds = new Set(claims.map(({ id }) => id))
for (const expected of [
  'isu-spring-garden',
  'isu-mowing-frequency',
  'isu-summer-dormancy',
  'isu-late-summer-fall',
  'isu-fall-growth-stop',
]) assert(sourceIds.has(expected), `Missing pillar source ${expected}`)
for (const expected of [
  'conditions-over-calendar',
  'spring-transition',
  'active-growth',
  'summer-slowdown',
  'fall-decision-window',
  'leaf-and-growth-separate',
  'fall-growth-end',
  'winter-pause',
]) assert(claimIds.has(expected), `Missing pillar claim ${expected}`)
assert.equal(sourceIds.size, sources.length)
assert.equal(claimIds.size, claims.length)
for (const source of sources) {
  const sourceUrl = new URL(source.url)
  assert.equal(sourceUrl.protocol, 'https:')
  assert.equal(sourceUrl.hostname, 'yardandgarden.extension.iastate.edu')
  assert.equal(source.publisher, 'Iowa State University Extension and Outreach — Yard and Garden')
  assert.equal(source.reviewedOn, '2026-09-02')
  assert(source.jurisdiction?.trim())
  assert(source.scope?.trim())
  assert(source.supportedClaimIds.length > 0)
  for (const claimId of source.supportedClaimIds) {
    assert(claimIds.has(claimId), `Source ${source.id} has unknown claim ${claimId}`)
    assert(claims.find(({ id }) => id === claimId)?.sourceIds.includes(source.id))
  }
}
for (const claim of claims) {
  assert(claim.sourceIds.length > 0)
  for (const sourceId of claim.sourceIds) {
    assert(sourceIds.has(sourceId), `Claim ${claim.id} has unknown source ${sourceId}`)
    assert(sources.find(({ id }) => id === sourceId)?.supportedClaimIds.includes(claim.id))
  }
}

assert.equal(article.editorialReview.owner, 'Task 33 editorial review')
assert.equal(article.editorialReview.reviewedOn, '2026-09-02')
assert.equal('author' in article, false)
assert.equal('publishedOn' in article, false)
assert.equal('modifiedOn' in article, false)
assert.equal('image' in article, false)

const researchBrief = read('docs/research/task-33-central-iowa-calendar-brief.md')
for (const section of [
  'User intent',
  'Pillar role',
  'Research questions',
  'Source inventory',
  'Claim ledger',
  'Child-topic boundary ledger',
  'Service-boundary ledger',
  'Secondary-intent research',
  'SERP gap analysis',
  'Differentiation brief',
  'Anti-duplication audit',
  'Cannibalization review',
  'Municipal-content decision',
  'Editorial Quality Gate',
]) assert(researchBrief.includes(section), `Research brief missing ${section}`)
for (const gate of [
  'Research Gate: PASS.',
  'Differentiation Gate: PASS.',
  'Pillar Value Gate: PASS.',
  'Child Ownership Gate: PASS.',
  'Anti-Duplication Gate: PASS.',
  'Bidirectional Link Gate: PASS.',
  'Service Capability Gate: PASS.',
  'Cannibalization Gate: PASS.',
  'Spanish factual/conditional parity review: PASS.',
  'Editorial Quality Gate: PASS.',
]) assert(researchBrief.includes(gate), `Missing final gate: ${gate}`)
for (const source of sources) assert(researchBrief.includes(source.url) && researchBrief.includes(source.id))
for (const claim of claims) assert(researchBrief.includes(claim.id))

const published = getPublishedArticles()
assert.deepEqual(published, [...children, article])
assert.equal(blogArticles.length, 6)
assert.equal(published.length, 6)
const allArticles: readonly BlogArticle[] = blogArticles
assert.equal(allArticles.filter(({ status }) => status === 'planned').length, 0)
assert.equal(getPublishedArticleBySlug(article.slug), article)
assert.deepEqual(getPublishedRelatedArticles(article), children)
for (const child of children) {
  assert(child.relatedArticlePaths.includes(article.path), `Missing ${child.slug} → pillar relationship`)
  assert(getPublishedRelatedArticles(child).includes(article), `Missing public ${child.slug} → pillar relationship`)
}

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
for (const candidate of published) {
  assert.equal(sitemap.filter(({ url }) => url === routesById[candidate.routeId].canonicalUrl).length, 1)
}
assert.equal(sitemap.at(-1)?.url, ownershipRoute.canonicalUrl)

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
for (const type of ['Organization', 'WebSite', 'WebPage', 'BreadcrumbList', 'BlogPosting']) {
  assert.equal(nodesByType(type).length, 1)
}
assert(graph['@graph'].some(({ '@id': id }) => id === ORGANIZATION_ID))
assert(graph['@graph'].some(({ '@id': id }) => id === WEBSITE_ID))
assert.deepEqual(articleNode.publisher, { '@id': ORGANIZATION_ID })
assert.deepEqual(articleNode.citation, sources.map(({ url }) => url))
for (const omitted of ['author', 'datePublished', 'dateModified', 'image']) {
  assert.equal(Object.hasOwn(articleNode, omitted), false)
}
const serializedGraph = JSON.stringify(graph)
for (const forbidden of ['FAQPage', 'Review', 'AggregateRating', 'LocalBusiness', 'PostalAddress', 'GeoCoordinates', 'Offer']) {
  assert.equal(serializedGraph.includes(`"@type":"${forbidden}"`), false)
}

const breadcrumbs = getBreadcrumbItems(article.routeId)
assert.deepEqual(breadcrumbs.map(({ label }) => label), ['Home', 'Blog', article.h1])
assert.deepEqual(breadcrumbs.map(({ href }) => href), ['/', '/blog', article.path])
const schemaItems = nodesByType('BreadcrumbList')[0].itemListElement as readonly Record<string, unknown>[]
assert.deepEqual(schemaItems.map(({ name }) => name), breadcrumbs.map(({ label }) => label))
assert.deepEqual(schemaItems.map(({ position }) => position), [1, 2, 3])

const inlineLinks = blocks.flatMap((block) => block.type === 'paragraph'
  ? block.content.flatMap((inline) => inline.href ? [inline.href] : [])
  : [])
const childPaths = children.map(({ path }) => path)
for (const childPath of childPaths) assert(inlineLinks.includes(childPath), `Missing contextual child link ${childPath}`)
const servicePaths = [
  '/services/lawn-mowing',
  '/services/aeration-overseeding',
  '/services/spring-cleanup',
  '/services/fall-cleanup-leaf-removal',
] as const
for (const servicePath of servicePaths) assert(inlineLinks.includes(servicePath), `Missing contextual service link ${servicePath}`)
assert(inlineLinks.includes('/contact'))
assert.deepEqual(article.relatedArticlePaths, childPaths)
assert.deepEqual(article.relatedServicePaths, servicePaths)

const articleText = [article.excerpt, ...blocks.flatMap((block) => {
  if (block.type === 'heading') return [block.text]
  if (block.type === 'paragraph') return block.content.map(({ text }) => text)
  if (block.type === 'list') return block.items
  return [...(block.caption ? [block.caption] : []), ...block.headers, ...block.rows.flat()]
})].join(' ')
assert(blocks.some((block) => block.type === 'table'))
assert.equal(blocks.some((block) => block.type === 'list'), false)
for (const required of [
  'Treat the calendar below as orientation',
  'Use five signals to locate the year',
  'This article is not Mo’s annual service calendar',
  'different usual calendar ranges',
]) assert(articleText.includes(required), `Missing pillar distinction: ${required}`)
for (const forbidden of [
  'mid-August through mid-September',
  'April and September',
  '3 inches',
  '4½ inches',
  'little or no grass is visible',
  'Clear —',
  'Observe —',
  'Wait —',
  'SCRUB',
  'bag sticker',
  'this September',
  'right now',
  'spring 2027',
  'current month',
  'our experience',
  'our experts',
  'in conclusion',
  'ultimate calendar',
  'year-round beauty',
]) assert(!articleText.toLowerCase().includes(forbidden.toLowerCase()), `Forbidden pillar copy: ${forbidden}`)
assert.doesNotMatch(articleText, /(?:January|February|March|April|May|June|July|August|September|October|November|December)\s*(?:=|:|—)/i)
assert.doesNotMatch(articleText, /(?:mow|mowing|cut|aerate|seed|overseed|cleanup)\s+(?:every\s+\d+|weekly|biweekly)/i)
assert.doesNotMatch(articleText, /(?:fertili[sz]er|herbicide|pesticide|pre-emergent|fungicide)\s+(?:calendar|schedule|program)/i)
assert.doesNotMatch(articleText, /Mo['’]s[^.!?]*(?:annual maintenance|recurring subscription|automatic aeration|automatic seeding|weekly mowing program|seasonal package)/i)

const childTexts = children.map((child) => [child.excerpt, ...child.content.flatMap((block) => {
  if (block.type === 'heading') return [block.text]
  if (block.type === 'paragraph') return block.content.map(({ text }) => text)
  if (block.type === 'list') return block.items
  return [...block.headers, ...block.rows.flat()]
})].join('\n'))
const normalizeLines = (text: string) => new Set(text.split('\n').map((line) => line.trim().toLowerCase()).filter((line) => line.length > 45))
const pillarLines = normalizeLines(articleText.replaceAll('. ', '.\n'))
for (const [index, childText] of childTexts.entries()) {
  const childLines = normalizeLines(childText.replaceAll('. ', '.\n'))
  const duplicates = [...pillarLines].filter((line) => childLines.has(line))
  assert.deepEqual(duplicates, [], `Pillar duplicates full child sentences from ${children[index].slug}`)
}

const citations = blocks.flatMap((block) => block.type === 'paragraph'
  ? block.content.flatMap((inline) => inline.sourceId ? [inline.sourceId] : [])
  : [])
for (const source of sources) assert(citations.includes(source.id), `Unused visible source: ${source.id}`)

const translations = JSON.parse(read('lib/es-translations.json')) as Record<string, string>
const visibleStrings = new Set<string>([article.h1, article.excerpt])
for (const block of blocks) {
  if (block.type === 'heading') visibleStrings.add(block.text)
  if (block.type === 'paragraph') block.content.forEach(({ text }) => visibleStrings.add(text))
  if (block.type === 'list') block.items.forEach((item) => visibleStrings.add(item))
  if (block.type === 'table') {
    if (block.caption) visibleStrings.add(block.caption)
    block.headers.forEach((header) => visibleStrings.add(header))
    block.rows.forEach((row) => row.forEach((cell) => visibleStrings.add(cell)))
  }
}
for (const source of sources) {
  if (source.jurisdiction !== 'Iowa') visibleStrings.add(source.jurisdiction ?? '')
  visibleStrings.add(source.scope ?? '')
}
for (const english of visibleStrings) assert(translations[english], `Missing article translation: ${english}`)

const routeSource = read('app/blog/[slug]/page.tsx')
const hubSource = read('app/blog/page.tsx')
const homepageSource = read('components/homepage-tips.tsx')
const templateSource = read('components/blog-article.tsx')
assert.match(routeSource, /getPublishedArticles\(\)\.map/)
assert.match(hubSource, /getPublishedArticles\(\)/)
assert.match(homepageSource, /getPublishedArticles\(\)\.slice\(0, 3\)/)
assert.match(templateSource, /getPublishedRelatedArticles\(article\)/)
for (const source of [routeSource, hubSource, homepageSource]) assert.equal(source.includes(article.slug), false)

assert.deepEqual(analyticsEventNames, ['generate_lead', 'form_start', 'form_submit_error', 'click_to_call', 'click_email'])
for (const event of ['article_view', 'pillar_view', 'season_click', 'calendar_click', 'child_article_click', 'source_click', 'related_click', 'service_calendar_click', 'toc_click']) {
  assert.equal([routeSource, hubSource, homepageSource, templateSource].some((source) => source.includes(event)), false)
}

const planSource = read('plan.md')
assert.match(planSource, /### Task 33 — Central Iowa Lawn Care Calendar Pillar Article\n\n- \*\*Status:\*\* `\[x\]` Completed/)
assert.match(planSource, /### Task 34 — Gallery, Image SEO, and Media Performance Optimization\n\n- \*\*Status:\*\* `\[x\]` Completed/)
assert.match(planSource, /### Task 35 — Internal Linking and Content-Cluster Audit\n\n- \*\*Status:\*\* `\[x\]` Completed/)

const baseUrl = process.env.TASK33_BASE_URL
if (baseUrl) {
  const decode = (html: string) => html.replaceAll('&#x27;', "'").replaceAll('&#39;', "'").replaceAll('&amp;', '&').replaceAll('&quot;', '"')
  for (const query of ['', '?lang=es', '?utm_source=google&utm_medium=organic&utm_campaign=calendar&utm_content=guide', '?arbitrary=task33']) {
    const response: Response = await fetch(`${baseUrl}${article.path}${query}`, { redirect: 'manual' })
    assert.equal(response.status, 200)
    assert.equal(response.headers.get('location'), null)
    const html = decode(await response.text())
    assert(html.includes(`<title>${article.title}</title>`))
    assert(html.includes(`<meta name="description" content="${article.description}"`))
    assert.equal(html.match(/<link rel="canonical"/g)?.length, 1)
    assert(html.includes(`<link rel="canonical" href="${ownershipRoute.canonicalUrl}"`))
    assert.equal(html.match(/<h1\b/g)?.length, 1)
    assert.match(html, /name="robots" content="index, follow"/)
    assert(!html.includes('name="keywords"'))
    assert(html.includes('Treat the calendar below as orientation'))
    assert(html.includes('article-sources-heading'))
    for (const source of sources) assert(html.includes(`href="${source.url}"`))
    for (const childPath of childPaths) assert(html.includes(`href="${childPath}"`))
    for (const servicePath of servicePaths) assert(html.includes(`href="${servicePath}"`))
    const graphMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)
    assert(graphMatch)
    assert.deepEqual(JSON.parse(graphMatch[1]), graph)
  }
  for (const candidate of published) {
    const response: Response = await fetch(`${baseUrl}${candidate.path}`, { redirect: 'manual' })
    assert.equal(response.status, 200)
    assert.equal(response.headers.get('location'), null)
    const html = decode(await response.text())
    if (candidate !== article) assert(html.includes(`href="${article.path}"`), `Missing public ${candidate.slug} → pillar link`)
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
  console.log('Task 33 production source QA passed: six article 200s, exact head/query/schema/source/link parity, ten reciprocal cluster directions, six-item hub and 29 sitemap URLs.')
}

console.log('Task 33 Central Iowa calendar validation passed: exact ownership, authoritative claim ledger, condition-led pillar value, five-child bidirectional cluster, service restraint, Spanish coverage, truthful schema and 29-URL lifecycle.')
