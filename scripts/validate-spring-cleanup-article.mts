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
import { fallLeafCleanupDesMoines } from '../content/blog/fall-leaf-cleanup-des-moines.ts'
import { howOftenToMowLawnIowa } from '../content/blog/how-often-to-mow-lawn-iowa.ts'
import { springLawnCleanupDesMoines } from '../content/blog/spring-lawn-cleanup-des-moines.ts'
import { whenToAerateLawnIowa } from '../content/blog/when-to-aerate-lawn-iowa.ts'
import { getBreadcrumbItems, routesById } from '../content/routes.ts'
import type { BlogArticleBlock, BlogClaimNote, BlogSource } from '../content/types.ts'
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
const article = springLawnCleanupDesMoines
const ownershipRoute = routesById['article-spring-lawn-cleanup-des-moines']

assert.equal(article.slug, 'spring-lawn-cleanup-des-moines')
assert.equal(article.path, '/blog/spring-lawn-cleanup-des-moines')
assert.equal(article.primaryKeyword, 'spring lawn cleanup checklist des moines')
assert.deepEqual(article.secondaryKeywords, [
  'spring yard cleanup checklist Des Moines',
  'spring lawn care checklist Des Moines',
  'spring lawn cleanup tips Iowa',
])
assert.deepEqual(ownershipRoute.secondaryKeywords, article.secondaryKeywords)
assert.equal(ownershipRoute.secondaryKeywordStatus, 'defined')
assert.equal(article.title, "Spring Lawn Cleanup Checklist for Des Moines Properties | Mo's")
assert.equal(article.h1, 'A Spring Lawn Cleanup Checklist for Des Moines Properties')
assert.equal(article.description, 'Use this practical spring cleanup checklist to prepare a Des Moines-area yard for the growing season and identify when professional cleanup can help.')
assert.equal(ownershipRoute.canonicalUrl, 'https://www.moslawncaredsm.com/blog/spring-lawn-cleanup-des-moines')
assert.equal(article.status, 'published')
assert.equal(article.publisher, 'organization')
validateBlogArticles()

const sources = article.sources as readonly BlogSource[]
const claims = article.claimNotes as readonly BlogClaimNote[]
const blocks = article.content as readonly BlogArticleBlock[]
const sourceIds = new Set(sources.map(({ id }) => id))
const claimIds = new Set(claims.map(({ id }) => id))
assert.equal(sourceIds.size, sources.length)
assert.equal(claimIds.size, claims.length)
assert(sources.some(({ id, publisher }) => id === 'isu-spring-garden' && publisher.includes('Iowa State University Extension')))
assert(sources.some(({ id, publisher }) => id === 'mwa-des-moines' && publisher === 'Metro Waste Authority'))
for (const source of sources) {
  assert.equal(new URL(source.url).protocol, 'https:')
  assert.equal(source.reviewedOn, '2026-09-02')
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
assert.equal(sources.find(({ id }) => id === 'mwa-des-moines')?.jurisdiction, 'City of Des Moines')
assert.match(sources.find(({ id }) => id === 'mwa-des-moines')?.scope ?? '', /annual operating details intentionally omitted/)
assert.match(claims.find(({ id }) => id === 'bed-wet-soil')?.reviewNote ?? '', /Scoped to bed work/)
assert.match(claims.find(({ id }) => id === 'other-city-boundary')?.reviewNote ?? '', /No details invented/)

assert.equal(article.editorialReview.owner, 'Task 31 editorial review')
assert.equal(article.editorialReview.reviewedOn, '2026-09-02')
assert.equal('author' in article, false)
assert.equal('publishedOn' in article, false)
assert.equal('modifiedOn' in article, false)
assert.equal('image' in article, false)

const researchBrief = read('docs/research/task-31-spring-cleanup-brief.md')
for (const section of [
  'User intent',
  'Research scope',
  'Authoritative source inventory',
  'Claim ledger',
  'Municipal / jurisdiction ledger',
  'Secondary keyword research',
  'Representative SERP / content-gap analysis',
  'Differentiation brief',
]) assert(researchBrief.includes(section), `Research brief missing ${section}`)
for (const gate of [
  'Research Gate: PASS.',
  'Differentiation Gate: PASS.',
  'Tasks 28/29/30/32 Anti-Repetition Gate: PASS.',
  'Municipal/Jurisdiction Gate: PASS.',
  'Service Capability Gate: PASS.',
  'Cannibalization Gate: PASS.',
  'Spanish factual/scope parity review: PASS.',
  'Editorial Quality Gate: PASS.',
]) assert(researchBrief.includes(gate), `Missing final gate: ${gate}`)
for (const source of sources) assert(researchBrief.includes(source.url) && researchBrief.includes(source.id))
for (const claim of claims) assert(researchBrief.includes(claim.id))

const published = getPublishedArticles()
assert.deepEqual(published, [
  whenToAerateLawnIowa,
  bestTimeToOverseedLawnIowa,
  howOftenToMowLawnIowa,
  article,
  fallLeafCleanupDesMoines,
])
assert.equal(getPublishedArticleBySlug(article.slug), article)
assert.deepEqual(getPublishedRelatedArticles(article), [])
assert.equal(blogArticles.length, 6)
const futureArticle = blogArticles.find(({ slug }) => slug === 'central-iowa-lawn-care-calendar')
assert(futureArticle)
assert.equal(futureArticle.status, 'planned')
assert.deepEqual(futureArticle.secondaryKeywords, [])
assert(!('content' in futureArticle) && !('sources' in futureArticle))

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
assert.equal(sitemap.length, 28)
for (const candidate of published) {
  assert.equal(sitemap.filter(({ url }) => url === routesById[candidate.routeId].canonicalUrl).length, 1)
}
assert.equal(sitemap.some(({ url }) => url === routesById[futureArticle.routeId].canonicalUrl), false)

const itemList = buildArticleItemListStructuredData(routesById.blog, published)
assert.equal(itemList.numberOfItems, 5)
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
for (const omitted of ['author', 'datePublished', 'dateModified', 'image']) assert.equal(Object.hasOwn(articleNode, omitted), false)
const serializedGraph = JSON.stringify(graph)
for (const forbidden of ['FAQPage', 'Review', 'AggregateRating', 'LocalBusiness', 'PostalAddress', 'GeoCoordinates', 'Offer']) {
  assert.equal(serializedGraph.includes(`"@type":"${forbidden}"`), false)
}

const breadcrumbs = getBreadcrumbItems(article.routeId)
assert.deepEqual(breadcrumbs.map(({ label }) => label), ['Home', 'Blog', article.h1])
assert.deepEqual(breadcrumbs.map(({ href }) => href), ['/', '/blog', article.path])
const schemaItems = nodesByType('BreadcrumbList')[0].itemListElement as readonly Record<string, unknown>[]
assert.deepEqual(schemaItems.map(({ name }) => name), breadcrumbs.map(({ label }) => label))

const inlineLinks = blocks.flatMap((block) => block.type === 'paragraph'
  ? block.content.flatMap((inline) => inline.href ? [inline.href] : [])
  : [])
for (const required of [
  '/blog',
  '/contact',
  '/services/spring-cleanup',
  '/blog/when-to-aerate-lawn-iowa',
  '/blog/best-time-to-overseed-lawn-iowa',
  '/blog/how-often-to-mow-lawn-iowa',
  'https://www.mwatoday.com/collection-drop-off/des-moines/',
]) assert(inlineLinks.includes(required), `Missing required link: ${required}`)
assert.equal(inlineLinks.includes(futureArticle.path), false)
assert.deepEqual(article.relatedServicePaths, ['/services/spring-cleanup'])

const articleText = [article.excerpt, ...blocks.flatMap((block) => {
  if (block.type === 'heading') return [block.text]
  if (block.type === 'paragraph') return block.content.map(({ text }) => text)
  if (block.type === 'list') return block.items
  return [...block.headers, ...block.rows.flat()]
})].join(' ')
assert(blocks.some((block) => block.type === 'list' && block.style === 'checklist'))
assert.match(articleText, /property review/)
assert.match(articleText, /not a list of tasks included with Mo’s Spring Cleanup service/)
assert.match(articleText, /no set date to start mowing/)
assert.match(articleText, /moist—not dry or wet/)
assert.match(articleText, /City of Des Moines instruction is not a metro-wide rule/)
assert.match(articleText, /annual dates, fees, container rules and event details/)
assert.match(articleText, /does not publish this article’s property-review checklist as a package/)
for (const forbidden of [
  'Spring is here in Des Moines',
  'this spring',
  'right now',
  'spring 2027',
  'after this winter',
  'our spring checklist',
  'our experience',
  'our local crews',
  'in conclusion',
  'when it comes to',
]) assert.equal(articleText.toLowerCase().includes(forbidden.toLowerCase()), false, `Forbidden article pattern: ${forbidden}`)
assert.doesNotMatch(articleText, /Mo’s (?:Spring Cleanup )?(?:includes|provides|performs|will) [^.!?]*(?:raking|bagging|hauling|disposal|mowing|aeration|seeding|pruning|bed work|treatments)/i)
assert.match(articleText, /does not show that Mo’s bags, hauls or disposes/)
assert.match(articleText, /does not publish this article’s property-review checklist as a package or promise/)
for (const riskyInstruction of [/fertiliz/i, /pre-emergent/i, /herbicide/i, /pesticide/i, /power rake the lawn/i, /roll the lawn/i]) {
  assert.doesNotMatch(articleText, riskyInstruction)
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
for (const event of ['article_view', 'checklist_click', 'checklist_complete', 'source_click', 'municipal_click', 'spring_cta', 'toc_click']) {
  assert.equal([routeSource, hubSource, homepageSource, templateSource].some((source) => source.includes(event)), false)
}

const planSource = read('plan.md')
assert.match(planSource, /### Task 31 — Des Moines Spring Cleanup Checklist Article\n\n- \*\*Status:\*\* `\[x\]` Completed/)
assert.match(planSource, /### Task 33 — Central Iowa Lawn Care Calendar Pillar Article\n\n- \*\*Status:\*\* `\[ \]` Not started/)

const baseUrl = process.env.TASK31_BASE_URL
if (baseUrl) {
  const decode = (html: string) => html.replaceAll('&#x27;', "'").replaceAll('&#39;', "'").replaceAll('&amp;', '&').replaceAll('&quot;', '"')
  for (const query of ['', '?lang=es', '?utm_source=google&utm_medium=organic&utm_campaign=spring&utm_content=guide', '?arbitrary=task31']) {
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
    assert(html.includes('property review'))
    assert(html.includes('article-sources-heading'))
    for (const source of sources) assert(html.includes(`href="${source.url}"`))
    assert(!html.includes(futureArticle.path))
  }
  for (const candidate of published) {
    const response: Response = await fetch(`${baseUrl}${candidate.path}`, { redirect: 'manual' })
    assert.equal(response.status, 200)
    assert.equal(response.headers.get('location'), null)
  }
  const futureResponse = await fetch(`${baseUrl}${futureArticle.path}`, { redirect: 'manual' })
  assert.equal(futureResponse.status, 404)
  assert.equal(futureResponse.headers.get('location'), null)
  const futureHtml = await futureResponse.text()
  assert(futureHtml.includes('noindex'))
  assert(!futureHtml.includes('rel="canonical"'))
  const xml = await (await fetch(`${baseUrl}/sitemap.xml`)).text()
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1])
  assert.deepEqual(urls, sitemap.map(({ url }) => url))
  const hub = decode(await (await fetch(`${baseUrl}/blog`)).text())
  const listHtml = hub.split('<section id="published-guides"')[1].split('</section>')[0]
  assert.deepEqual([...listHtml.matchAll(/href="(\/blog\/[^"#?]+)"/g)].map((match) => match[1]), published.map(({ path }) => path))
  const home = decode(await (await fetch(baseUrl)).text())
  const tipsHtml = home.split('data-home-section="latest-tips"')[1].split('</section>')[0]
  assert.deepEqual([...tipsHtml.matchAll(/href="(\/blog\/[^"#?]+)"/g)].map((match) => match[1]), published.slice(0, 3).map(({ path }) => path))
  assert(!hub.includes(futureArticle.path))
  assert(!tipsHtml.includes(futureArticle.path))
  console.log('Task 31 production source QA passed: five 200s, Task 33 branded 404, exact head/query/source/schema surfaces and 28 sitemap URLs.')
}

console.log('Task 31 spring cleanup article validation passed: exact ownership, reciprocal research and municipal ledgers, checklist/service separation, five published articles, Task 33 isolation, truthful schema and 28-URL lifecycle.')
