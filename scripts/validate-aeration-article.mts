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
import { whenToAerateLawnIowa } from '../content/blog/when-to-aerate-lawn-iowa.ts'
import { getBreadcrumbItems, routeRegistry, routesById } from '../content/routes.ts'
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
const article = whenToAerateLawnIowa
const ownershipRoute = routesById['article-when-to-aerate-lawn-iowa']

assert.equal(article.slug, 'when-to-aerate-lawn-iowa')
assert.equal(article.path, '/blog/when-to-aerate-lawn-iowa')
assert.equal(article.primaryKeyword, 'when to aerate lawn in iowa')
assert.deepEqual(article.secondaryKeywords, [
  'best time to aerate lawn in Iowa',
  'core aeration Iowa',
  'aerate lawn in spring or fall Iowa',
])
assert.deepEqual(ownershipRoute.secondaryKeywords, article.secondaryKeywords)
assert.equal(ownershipRoute.secondaryKeywordStatus, 'defined')
assert.equal(article.title, "When to Aerate Your Lawn in Iowa | Mo's Lawn Care")
assert.equal(article.h1, 'When Is the Best Time to Aerate a Lawn in Iowa?')
assert.equal(article.description, 'Learn when Iowa lawns generally benefit from aeration, what signs to watch for and how aeration fits into a practical Central Iowa lawn care plan.')
assert.equal(ownershipRoute.canonicalUrl, 'https://www.moslawncaredsm.com/blog/when-to-aerate-lawn-iowa')
assert.equal(article.status, 'published')
assert.equal(article.publisher, 'organization')
validateBlogArticles()

assert.equal(article.sources.length, 3)
assert.equal(article.claimNotes.length, 6)
assert(article.content.length > 0)
const sourceIds = new Set(article.sources.map(({ id }) => id))
const claimIds = new Set(article.claimNotes.map(({ id }) => id))
assert.equal(sourceIds.size, article.sources.length)
assert.equal(claimIds.size, article.claimNotes.length)
for (const source of article.sources) {
  const sourceUrl = new URL(source.url)
  assert.equal(sourceUrl.protocol, 'https:')
  assert.equal(sourceUrl.hostname, 'yardandgarden.extension.iastate.edu')
  assert.equal(source.publisher, 'Iowa State University Extension and Outreach — Yard and Garden')
  assert.equal(source.reviewedOn, '2026-09-01')
  assert(source.jurisdiction)
  assert(source.scope)
  for (const claimId of source.supportedClaimIds) {
    assert(claimIds.has(claimId), `Source ${source.id} has unknown claim ${claimId}`)
    assert(article.claimNotes.find(({ id }) => id === claimId)?.sourceIds.some((id) => id === source.id))
  }
}
for (const claim of article.claimNotes) {
  assert(claim.sourceIds.length > 0)
  for (const sourceId of claim.sourceIds) {
    assert(sourceIds.has(sourceId), `Claim ${claim.id} has unknown source ${sourceId}`)
    assert(article.sources.find(({ id }) => id === sourceId)?.supportedClaimIds.some((id) => id === claim.id))
  }
}

assert.equal(article.editorialReview.owner, 'Task 28 editorial review')
assert.equal(article.editorialReview.reviewedOn, '2026-09-01')
assert.equal('author' in article, false)
assert.equal('publishedOn' in article, false)
assert.equal('modifiedOn' in article, false)
assert.equal('image' in article, false)

const researchBrief = read('docs/research/task-28-aeration-brief.md')
for (const gate of ['Research Gate: PASS.', 'Differentiation Gate: PASS.', 'Editorial Quality Gate: PASS.']) {
  assert(researchBrief.includes(gate), `Missing editorial gate: ${gate}`)
}
for (const required of [
  'Scope and user intent',
  'Source inventory',
  'Claim ledger',
  'Secondary intent research',
  'SERP and differentiation brief',
  'Spanish claim-strength review: PASS',
]) assert(researchBrief.includes(required), `Research brief missing ${required}`)

const published = getPublishedArticles()
assert.equal(published.length, 4)
assert.equal(published[0], article)
const overseedingArticle = published.find(({ slug }) => slug === 'best-time-to-overseed-lawn-iowa')
assert(overseedingArticle)
assert.equal(getPublishedArticleBySlug(article.slug), article)
assert.deepEqual(getPublishedRelatedArticles(article), [overseedingArticle])
assert.equal(blogArticles.length, 6)
const futureArticles = blogArticles.filter(({ status }) => status === 'planned')
assert.equal(futureArticles.length, 2)
assert(futureArticles.every(({ status }) => status === 'planned'))
assert(futureArticles.every(({ secondaryKeywords }) => secondaryKeywords.length === 0))
assert(futureArticles.every((candidate) => !('content' in candidate) && !('sources' in candidate)))

const publicRoute = getPublishedArticleRoute(article)
assert.equal(publicRoute.implementationStatus, 'implemented')
assert.equal(publicRoute.publicationStatus, 'published')
const metadata = buildRouteMetadata(publicRoute)
assert.equal(metadata.title, article.title)
assert.equal(metadata.description, article.description)
assert.equal(metadata.alternates?.canonical, ownershipRoute.canonicalUrl)
assert.equal((metadata.robots as { index?: boolean }).index, true)
assert.equal((metadata.robots as { follow?: boolean }).follow, true)

const sitemap = buildSitemapEntries()
assert.equal(sitemap.length, 27)
assert.equal(sitemap.filter(({ url }) => url === ownershipRoute.canonicalUrl).length, 1)
for (const future of futureArticles) {
  assert.equal(sitemap.some(({ url }) => url === routesById[future.routeId].canonicalUrl), false)
}
assert.equal(routeRegistry.filter(({ publicationStatus }) => publicationStatus === 'published').length, 23)

const itemList = buildArticleItemListStructuredData(routesById.blog, published)
assert.equal(itemList.numberOfItems, 4)
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
for (const omitted of ['author', 'datePublished', 'dateModified', 'image']) {
  assert.equal(Object.hasOwn(articleNode, omitted), false)
}
const serializedGraph = JSON.stringify(graph)
for (const forbidden of ['FAQPage', 'Review', 'AggregateRating', 'LocalBusiness', 'PostalAddress', 'GeoCoordinates', 'Offer']) {
  assert.equal(serializedGraph.includes(`\"@type\":\"${forbidden}\"`), false)
}

const visibleBreadcrumbs = getBreadcrumbItems(article.routeId)
assert.deepEqual(visibleBreadcrumbs.map(({ label }) => label), ['Home', 'Blog', 'When to Aerate a Lawn in Iowa'])
assert.deepEqual(visibleBreadcrumbs.map(({ href }) => href), ['/', '/blog', article.path])
const schemaBreadcrumb = nodesByType('BreadcrumbList')[0]
const schemaItems = schemaBreadcrumb.itemListElement as readonly Record<string, unknown>[]
assert.deepEqual(schemaItems.map(({ name }) => name), visibleBreadcrumbs.map(({ label }) => label))
assert.deepEqual(schemaItems.map(({ position }) => position), [1, 2, 3])

const inlineLinks = article.content.flatMap((block) => block.type === 'paragraph'
  ? block.content.flatMap((inline) => 'href' in inline && inline.href ? [inline.href] : [])
  : [])
assert(inlineLinks.includes('/blog'))
assert(inlineLinks.includes('/services/aeration-overseeding'))
for (const future of futureArticles) assert.equal(inlineLinks.includes(future.path), false)
assert.deepEqual(article.relatedServicePaths, ['/services/aeration-overseeding'])

const articleRouteSource = read('app/blog/[slug]/page.tsx')
const hubSource = read('app/blog/page.tsx')
const homepageTipsSource = read('components/homepage-tips.tsx')
const templateSource = read('components/blog-article.tsx')
assert.match(articleRouteSource, /getPublishedArticles\(\)\.map/)
assert.match(articleRouteSource, /getPublishedArticleBySlug\(slug\)/)
assert.match(hubSource, /getPublishedArticles\(\)/)
assert.match(hubSource, /buildArticleItemListStructuredData\(route, publishedArticles\)/)
assert.match(homepageTipsSource, /getPublishedArticles\(\)\.slice\(0, 3\)/)
assert.match(templateSource, /getPublishedRelatedArticles\(article\)/)
assert.match(templateSource, /id=\{`source-/)
assert.match(templateSource, /tabIndex=\{-1\}/)
assert.equal(articleRouteSource.includes(article.slug), false)
assert.equal(hubSource.includes(article.slug), false)
assert.equal(homepageTipsSource.includes(article.slug), false)
for (const future of futureArticles) {
  assert.equal([articleRouteSource, hubSource, homepageTipsSource].some((source) => source.includes(future.slug)), false)
}

const translations = JSON.parse(read('lib/es-translations.json')) as Record<string, string>
const visibleArticleStrings = new Set<string>([article.h1, article.excerpt])
for (const block of article.content) {
  if (block.type === 'heading') visibleArticleStrings.add(block.text)
  if (block.type === 'paragraph') block.content.forEach(({ text }) => visibleArticleStrings.add(text))
  if (block.type === 'list') block.items.forEach((item) => visibleArticleStrings.add(item))
  if (block.type === 'table') {
    if (block.caption) visibleArticleStrings.add(block.caption)
    block.headers.forEach((header) => visibleArticleStrings.add(header))
    block.rows.forEach((row) => row.forEach((cell) => visibleArticleStrings.add(cell)))
  }
}
for (const english of visibleArticleStrings) assert(translations[english], `Missing article translation: ${english}`)

assert.deepEqual(analyticsEventNames, ['generate_lead', 'form_start', 'form_submit_error', 'click_to_call', 'click_email'])
for (const forbiddenEvent of ['article_view', 'source_click', 'blog_click', 'toc_click', 'related_article_click', 'aeration_article_cta']) {
  assert.equal([articleRouteSource, hubSource, homepageTipsSource, templateSource].some((source) => source.includes(forbiddenEvent)), false)
}

const planSource = read('plan.md')
assert.match(planSource, /### Task 28 — “When to Aerate a Lawn in Iowa” Article\n\n- \*\*Status:\*\* `\[x\]` Completed/)
assert.match(planSource, /### Task 29 — “Best Time to Overseed a Lawn in Iowa” Article\n\n- \*\*Status:\*\* `\[x\]` Completed/)
assert.match(planSource, /### Task 31 — Des Moines Spring Cleanup Checklist Article\n\n- \*\*Status:\*\* `\[ \]` Not started/)

console.log('Task 28 aeration article validation passed: exact ownership, six sourced claim groups, three editorial gates, four published articles, truthful schema, two isolated future 404 owners, and exact 27-URL lifecycle.')
