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
const article = fallLeafCleanupDesMoines
const ownershipRoute = routesById['article-fall-leaf-cleanup-des-moines']

assert.equal(article.slug, 'fall-leaf-cleanup-des-moines')
assert.equal(article.path, '/blog/fall-leaf-cleanup-des-moines')
assert.equal(article.primaryKeyword, 'fall leaf cleanup tips des moines')
assert.deepEqual(article.secondaryKeywords, [
  'when to remove leaves from lawn',
  'how to manage leaves on lawn',
  'Des Moines yard waste leaves',
])
assert.deepEqual(ownershipRoute.secondaryKeywords, article.secondaryKeywords)
assert.equal(ownershipRoute.secondaryKeywordStatus, 'defined')
assert.equal(article.title, "Fall Leaf Cleanup Tips for Des Moines Properties | Mo's")
assert.equal(article.h1, 'Fall Leaf Cleanup Tips for Des Moines Properties')
assert.equal(article.description, 'Plan fall leaf cleanup for a Des Moines-area property with practical timing, organization and disposal considerations for the season.')
assert.equal(ownershipRoute.canonicalUrl, 'https://www.moslawncaredsm.com/blog/fall-leaf-cleanup-des-moines')
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
assert(sources.some(({ url, publisher }) => url.includes('cityofdesmoines') && publisher === 'City of Des Moines Public Works'))
assert(sources.some(({ url, publisher }) => new URL(url).hostname === 'www.mwatoday.com' && publisher === 'Metro Waste Authority'))
for (const source of sources) {
  assert.equal(new URL(source.url).protocol, 'https:')
  assert.equal(source.reviewedOn, '2026-09-01')
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

const municipalSources = sources.filter(({ publisher }) => publisher === 'City of Des Moines Public Works' || publisher === 'Metro Waste Authority')
assert(municipalSources.length > 0)
assert(municipalSources.every(({ jurisdiction, scope }) => jurisdiction?.includes('Des Moines') || scope?.includes('Des Moines')))
assert(sources.find(({ id }) => id === 'des-moines-scrub-2026')?.scope?.includes('Dated 2026'))
assert(sources.find(({ id }) => id === 'mwa-yard-waste-2026')?.scope?.includes('posted February 2, 2026'))
assert(claims.find(({ id }) => id === 'city-program-boundary')?.reviewNote?.includes('City-only'))
assert(claims.find(({ id }) => id === 'other-cities-boundary')?.reviewNote?.includes('without inventing details'))

assert.equal(article.editorialReview.owner, 'Task 32 editorial review')
assert.equal(article.editorialReview.reviewedOn, '2026-09-01')
assert.equal('author' in article, false)
assert.equal('publishedOn' in article, false)
assert.equal('modifiedOn' in article, false)
assert.equal('image' in article, false)

const researchBrief = read('docs/research/task-32-fall-leaf-cleanup-brief.md')
for (const gate of [
  'Research Gate: PASS.',
  'Differentiation Gate: PASS.',
  'Jurisdiction Gate: PASS.',
  'Tasks 28–29 Anti-Repetition Gate: PASS.',
  'Cannibalization Gate: PASS.',
  'Editorial Quality Gate: PASS.',
  'Spanish jurisdiction-parity review: PASS.',
]) assert(researchBrief.includes(gate), `Missing editorial gate: ${gate}`)
for (const required of [
  'User intent',
  'Research questions',
  'Source inventory',
  'Claim ledger',
  'Municipal/Jurisdiction ledger',
  'Secondary intent research',
  'Representative SERP/content-gap analysis',
  'Differentiation brief',
]) assert(researchBrief.includes(required), `Research brief missing ${required}`)

const published = getPublishedArticles()
assert.deepEqual(published, [whenToAerateLawnIowa, bestTimeToOverseedLawnIowa, howOftenToMowLawnIowa, springLawnCleanupDesMoines, article, centralIowaLawnCareCalendar])
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
assert.deepEqual(visibleBreadcrumbs.map(({ label }) => label), ['Home', 'Blog', 'Fall Leaf Cleanup Tips for Des Moines Properties'])
assert.deepEqual(visibleBreadcrumbs.map(({ href }) => href), ['/', '/blog', article.path])
const schemaItems = nodesByType('BreadcrumbList')[0].itemListElement as readonly Record<string, unknown>[]
assert.deepEqual(schemaItems.map(({ name }) => name), visibleBreadcrumbs.map(({ label }) => label))
assert.deepEqual(schemaItems.map(({ position }) => position), [1, 2, 3])

const inlineLinks = articleBlocks.flatMap((block) => block.type === 'paragraph'
  ? block.content.flatMap((inline) => inline.href ? [inline.href] : [])
  : [])
for (const required of [
  '/blog',
  '/services/fall-cleanup-leaf-removal',
  '/contact',
  'https://www.mwatoday.com/collection-drop-off/des-moines/',
  'https://cms2.revize.com/revize/cityofdesmoines/Documents/Departments/Public%20Works/Garbage%20Recycling/SCRUB/Printable%20SCRUB%20Calendar%20for%202026%20by%20Des%20Moines%20Public%20Works.pdf?t=202602031209170',
]) assert(inlineLinks.includes(required), `Missing required article link: ${required}`)
assert(article.relatedArticlePaths.includes(centralIowaLawnCareCalendar.path))
assert.deepEqual(article.relatedServicePaths, ['/services/fall-cleanup-leaf-removal'])

const articleHeadings = articleBlocks.flatMap((block) => block.type === 'heading' ? [block.text] : [])
const priorHeadings = new Set<string>([whenToAerateLawnIowa, bestTimeToOverseedLawnIowa].flatMap(({ content }) => content.flatMap((block) => block.type === 'heading' ? [block.text] : [])))
assert(articleHeadings.every((heading) => !priorHeadings.has(heading)))
assert(articleBlocks.some((block) => block.type === 'table'))
assert(articleBlocks.some((block) => block.type === 'list' && block.style === 'checklist'))
const articleText = [article.excerpt, ...articleHeadings, ...articleBlocks.flatMap((block) => {
  if (block.type === 'paragraph') return block.content.map(({ text }) => text)
  if (block.type === 'list') return block.items
  if (block.type === 'table') return [...block.headers, ...block.rows.flat()]
  return []
})].join(' ')
for (const forbidden of ['When autumn arrives', 'Fall is a beautiful time', 'When it comes to', "It's important to note", 'In conclusion', 'Ultimately', 'our experience', 'our experts', 'every 7 days', 'this September', 'right now in Des Moines', 'Mo’s hauls', 'Mo’s bags']) {
  assert.equal(articleText.toLowerCase().includes(forbidden.toLowerCase()), false, `Forbidden article pattern: ${forbidden}`)
}

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
for (const forbiddenEvent of ['article_view', 'source_click', 'municipality_click', 'disposal_click', 'blog_click', 'toc_click', 'related_article_click', 'fall_cleanup_article_cta']) {
  assert.equal([articleRouteSource, hubSource, homepageTipsSource, templateSource].some((source) => source.includes(forbiddenEvent)), false)
}

const planSource = read('plan.md')
assert.match(planSource, /### Task 32 — Des Moines Fall Leaf Cleanup Tips Article\n\n- \*\*Status:\*\* `\[x\]` Completed/)
assert.match(planSource, /### Task 31 — Des Moines Spring Cleanup Checklist Article\n\n- \*\*Status:\*\* `\[x\]` Completed/)

console.log('Task 32 fall leaf cleanup article validation passed: exact ownership, authoritative claim and jurisdiction ledgers, six published articles, truthful schema, published Task 33 relationship, and exact 29-URL lifecycle.')
