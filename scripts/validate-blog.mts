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
import { getBreadcrumbItems, routeRegistry, routesById } from '../content/routes.ts'
import type { BlogArticle, PublishedBlogArticle } from '../content/types.ts'
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
const route = routesById.blog

assert.equal(route.path, '/blog')
assert.equal(route.primaryKeyword, 'iowa lawn care tips')
assert.deepEqual(route.secondaryKeywords, [
  'lawn care tips Des Moines',
  'Central Iowa lawn care guide',
  'seasonal lawn care Iowa',
  'Iowa yard care tips',
])
assert.equal(route.title, "Iowa Lawn Care Tips & Seasonal Guides | Mo's Lawn Care")
assert.equal(route.h1, 'Lawn Care Tips for Des Moines & Central Iowa')
assert.equal(route.description, 'Practical lawn care and seasonal property tips for Des Moines and Central Iowa, including mowing, aeration, overseeding, cleanup and year-round planning.')
assert.equal(route.canonicalUrl, 'https://www.moslawncaredsm.com/blog')
assert.equal(route.implementationStatus, 'implemented')
assert.equal(route.publicationStatus, 'published')
assert.equal(route.indexability, 'indexable')

const metadata = buildRouteMetadata(route)
assert.equal(metadata.title, route.title)
assert.equal(metadata.description, route.description)
assert.equal(metadata.alternates?.canonical, route.canonicalUrl)
assert.equal((metadata.robots as { index?: boolean }).index, true)

const hubGraph = buildPageStructuredData(route, routesById.home)
const typeCount = (graph: typeof hubGraph, expected: string) => graph['@graph'].filter(({ '@type': type }) =>
  Array.isArray(type) ? type.includes(expected) : type === expected,
).length
assert.equal(typeCount(hubGraph, 'Blog'), 1)
assert.equal(typeCount(hubGraph, 'CollectionPage'), 0)
assert.equal(typeCount(hubGraph, 'Organization'), 1)
assert.equal(typeCount(hubGraph, 'WebSite'), 1)
assert.equal(typeCount(hubGraph, 'BreadcrumbList'), 1)
assert.equal(typeCount(hubGraph, 'ItemList'), 0)
assert.equal(typeCount(hubGraph, 'Article'), 0)
assert.equal(typeCount(hubGraph, 'BlogPosting'), 0)
assert.equal(hubGraph['@graph'].length, 4)
assert(hubGraph['@graph'].some(({ '@id': id }) => id === ORGANIZATION_ID))
assert(hubGraph['@graph'].some(({ '@id': id }) => id === WEBSITE_ID))
assert.throws(() => buildArticleItemListStructuredData(route, []), /Empty article ItemLists/)

const visibleBreadcrumbs = getBreadcrumbItems(route.id)
assert.deepEqual(visibleBreadcrumbs.map(({ label }) => label), ['Home', 'Blog'])
assert.deepEqual(visibleBreadcrumbs.map(({ href }) => href), ['/', '/blog'])
const breadcrumb = hubGraph['@graph'].find(({ '@type': type }) => type === 'BreadcrumbList')
assert(breadcrumb)
const schemaBreadcrumbs = breadcrumb.itemListElement as readonly Record<string, unknown>[]
assert.deepEqual(schemaBreadcrumbs.map(({ name }) => name), ['Home', 'Blog'])
assert.deepEqual(schemaBreadcrumbs.map(({ position }) => position), [1, 2])
assert.deepEqual(schemaBreadcrumbs.map(({ item }) => item), [routesById.home.canonicalUrl, route.canonicalUrl])

const expectedOwnership = [
  {
    slug: 'when-to-aerate-lawn-iowa',
    title: "When to Aerate Your Lawn in Iowa | Mo's Lawn Care",
    h1: 'When Is the Best Time to Aerate a Lawn in Iowa?',
    description: 'Learn when Iowa lawns generally benefit from aeration, what signs to watch for and how aeration fits into a practical Central Iowa lawn care plan.',
    primaryKeyword: 'when to aerate lawn in iowa',
  },
  {
    slug: 'best-time-to-overseed-lawn-iowa',
    title: "Best Time to Overseed a Lawn in Iowa | Mo's Lawn Care",
    h1: 'What Is the Best Time to Overseed a Lawn in Iowa?',
    description: 'Understand the usual timing considerations for overseeding an Iowa lawn, how weather affects planning and when professional help may make sense.',
    primaryKeyword: 'best time to overseed lawn in iowa',
  },
  {
    slug: 'how-often-to-mow-lawn-iowa',
    title: "How Often Should You Mow a Lawn in Iowa? | Mo's Lawn Care",
    h1: 'How Often Should You Mow Your Lawn in Iowa?',
    description: 'Learn what determines mowing frequency for Iowa lawns, including growth, weather and seasonal conditions, without relying on a rigid schedule.',
    primaryKeyword: 'how often to mow lawn in iowa',
  },
  {
    slug: 'spring-lawn-cleanup-des-moines',
    title: "Spring Lawn Cleanup Checklist for Des Moines Properties | Mo's",
    h1: 'A Spring Lawn Cleanup Checklist for Des Moines Properties',
    description: 'Use this practical spring cleanup checklist to prepare a Des Moines-area yard for the growing season and identify when professional cleanup can help.',
    primaryKeyword: 'spring lawn cleanup checklist des moines',
  },
  {
    slug: 'fall-leaf-cleanup-des-moines',
    title: "Fall Leaf Cleanup Tips for Des Moines Properties | Mo's",
    h1: 'Fall Leaf Cleanup Tips for Des Moines Properties',
    description: 'Plan fall leaf cleanup for a Des Moines-area property with practical timing, organization and disposal considerations for the season.',
    primaryKeyword: 'fall leaf cleanup tips des moines',
  },
  {
    slug: 'central-iowa-lawn-care-calendar',
    title: "Central Iowa Lawn Care Calendar | Mo's Lawn Care",
    h1: 'A Seasonal Lawn Care Calendar for Central Iowa',
    description: 'Plan mowing, cleanup, aeration and other lawn-care decisions through the seasons with a practical Central Iowa property-care calendar.',
    primaryKeyword: 'central iowa lawn care calendar',
  },
] as const

assert.equal(blogArticles.length, 6)
assert.equal(new Set(blogArticles.map(({ slug }) => slug)).size, 6)
assert.deepEqual(blogArticles.map(({ slug, title, h1, description, primaryKeyword }) => ({ slug, title, h1, description, primaryKeyword })), expectedOwnership)
const publishedArticle = blogArticles[0]
const overseedingArticle = blogArticles[1]
const publishedArticles = [publishedArticle, overseedingArticle] as const
const plannedArticles = blogArticles.slice(2)
assert(publishedArticles.every(({ status }) => status === 'published'))
assert(plannedArticles.every(({ status }) => status === 'planned'))
assert(plannedArticles.every(({ secondaryKeywords }) => secondaryKeywords.length === 0))
assert(plannedArticles.every((article) => !('excerpt' in article) && !('content' in article) && !('sources' in article) && !('claimNotes' in article)))
assert.deepEqual(getPublishedArticles(), publishedArticles)
assert.equal(getPublishedArticleBySlug('when-to-aerate-lawn-iowa'), publishedArticle)
assert.equal(getPublishedArticleBySlug('best-time-to-overseed-lawn-iowa'), overseedingArticle)
assert.equal(getPublishedArticleBySlug('not-a-real-article'), undefined)
validateBlogArticles()

const publishedFixture = publishedArticle
const publishedFixtureRegistry: readonly BlogArticle[] = blogArticles
validateBlogArticles(publishedFixtureRegistry)
assert.deepEqual(getPublishedArticles(publishedFixtureRegistry), publishedArticles)
assert.equal(getPublishedArticleBySlug(publishedFixture.slug, publishedFixtureRegistry), publishedFixture)
assert.deepEqual(getPublishedRelatedArticles(publishedFixture, publishedFixtureRegistry), [overseedingArticle])
assert.equal(getPublishedArticleRoute(publishedFixture).publicationStatus, 'published')

const fixtureItemList = buildArticleItemListStructuredData(route, publishedArticles)
assert.equal(fixtureItemList.numberOfItems, 2)
assert.deepEqual(fixtureItemList.itemListElement, publishedArticles.map((article, index) => ({
  '@type': 'ListItem',
  position: index + 1,
  name: article.h1,
  url: routesById[article.routeId].canonicalUrl,
})))
const fixtureArticleNode = buildBlogPostingStructuredData(getPublishedArticleRoute(publishedFixture), publishedFixture)
assert.equal(fixtureArticleNode['@type'], 'BlogPosting')
assert.deepEqual(fixtureArticleNode.publisher, { '@id': ORGANIZATION_ID })
for (const omitted of ['author', 'datePublished', 'dateModified', 'image']) assert.equal(Object.hasOwn(fixtureArticleNode, omitted), false)

const reviewedFixture = { ...publishedFixture, status: 'reviewed' } as const
const reviewedFixtureRegistry: readonly BlogArticle[] = [reviewedFixture, ...blogArticles.slice(1)]
validateBlogArticles(reviewedFixtureRegistry)
assert.deepEqual(getPublishedArticles(reviewedFixtureRegistry), [overseedingArticle])
assert.equal(buildSitemapEntries(routeRegistry, reviewedFixtureRegistry).length, 24)
assert.equal(buildSitemapEntries(routeRegistry, publishedFixtureRegistry).length, 25)
assert.throws(
  () => validateBlogArticles([
    { ...publishedFixture, sources: [] } as unknown as PublishedBlogArticle,
    ...blogArticles.slice(1),
  ]),
  /requires content, sources, and claim notes/,
)

const sitemap = buildSitemapEntries()
assert.equal(sitemap.length, 25)
assert.equal(sitemap.at(-1)?.url, routesById[overseedingArticle.routeId].canonicalUrl)
assert.equal(sitemap.filter(({ url }) => url === route.canonicalUrl).length, 1)
for (const article of publishedArticles) {
  assert.equal(sitemap.filter(({ url }) => url === routesById[article.routeId].canonicalUrl).length, 1)
}
for (const article of plannedArticles) {
  assert.equal(sitemap.some(({ url }) => url === routesById[article.routeId].canonicalUrl), false)
}
assert.equal(routeRegistry.filter(({ publicationStatus }) => publicationStatus === 'published').length, 23)

const hubSource = read('app/blog/page.tsx')
const articleRouteSource = read('app/blog/[slug]/page.tsx')
const articleTemplateSource = read('components/blog-article.tsx')
const homepageTipsSource = read('components/homepage-tips.tsx')
const homepageContentSource = read('content/homepage.ts')
const sitemapSource = read('lib/metadata.ts')
const schemaSource = read('lib/structured-data.ts')

assert.equal(hubSource.match(/<h1\b/g)?.length, 1)
assert.equal(articleTemplateSource.match(/<h1\b/g)?.length, 1)
assert.match(hubSource, /buildRouteMetadata\(route\)/)
assert.match(hubSource, /getPublishedArticles\(\)/)
assert.match(hubSource, /publishedArticles\.map/)
assert.match(hubSource, /buildArticleItemListStructuredData\(route, publishedArticles\)/)
assert.match(hubSource, /publishedArticles\.length > 0/)
assert.match(hubSource, /Published guides will appear here after source and editorial review\./)
for (const article of blogArticles) assert.equal(hubSource.includes(article.slug), false)

assert.match(articleRouteSource, /generateStaticParams\(\)/)
assert.match(articleRouteSource, /getPublishedArticles\(\)\.map/)
assert.equal(articleRouteSource.match(/getPublishedArticleBySlug\(slug\)/g)?.length, 2)
assert.equal(articleRouteSource.match(/notFound\(\)/g)?.length, 2)
assert.doesNotMatch(articleRouteSource, /slug\s*===/)
for (const article of blogArticles) assert.equal(articleRouteSource.includes(article.slug), false)

for (const capability of [
  "type: 'paragraph'",
  "type: 'heading'",
  "type: 'list'",
  "type: 'table'",
  'showTableOfContents',
  'sourceId',
]) assert(read('content/types.ts').includes(capability), `Missing article capability: ${capability}`)
assert.match(articleTemplateSource, /<h2/)
assert.match(articleTemplateSource, /block\.level === 2 \? 'h2' : 'h3'/)
assert.match(articleTemplateSource, /<table/)
assert.match(articleTemplateSource, /id=\{`source-/)
assert.match(articleTemplateSource, /getPublishedRelatedArticles\(article\)/)
assert.match(articleTemplateSource, /routesById\.contact\.path/)

assert.match(homepageTipsSource, /getPublishedArticles\(\)\.slice\(0, 3\)/)
assert.match(homepageTipsSource, /homepageTipArticles\.length > 0/)
assert.match(homepageTipsSource, /Published guides will appear here after source and editorial review\./)
for (const article of blogArticles) {
  assert.equal(homepageTipsSource.includes(article.slug), false)
  assert.equal(homepageContentSource.includes(article.slug), false)
}
assert.match(sitemapSource, /getPublishedArticles\(articles\)/)
assert.match(schemaSource, /article\.status !== 'published'/)

for (const archivePath of [
  'app/blog/category',
  'app/blog/categories',
  'app/blog/tag',
  'app/blog/tags',
  'app/blog/author',
  'app/blog/authors',
  'app/blog/date',
  'app/blog/2026',
  'app/blog/page',
  'app/blog/search',
]) assert.equal(fs.existsSync(path.join(projectRoot, archivePath)), false, `Thin archive exists: ${archivePath}`)

const packageSource = read('package.json')
for (const dependency of ['@contentlayer', 'contentlayer', '@mdx-js', 'next-mdx', 'mongodb', 'mongoose', 'prisma', 'sanity', 'contentful']) {
  assert.equal(packageSource.includes(`"${dependency}"`), false, `Forbidden Blog dependency: ${dependency}`)
}
assert.deepEqual(analyticsEventNames, ['generate_lead', 'form_start', 'form_submit_error', 'click_to_call', 'click_email'])
for (const forbiddenEvent of ['blog_view', 'article_view', 'source_click', 'related_article_click', 'article_cta', 'toc_click']) {
  assert.equal([hubSource, articleRouteSource, articleTemplateSource].some((source) => source.includes(forbiddenEvent)), false)
}

const translations = JSON.parse(read('lib/es-translations.json')) as Record<string, string>
for (const english of [
  route.h1,
  'Blog',
  'Published Guides',
  'Published guides will appear here after source and editorial review.',
  'Sources',
  'Related Reading',
  'Contents',
  'Editorial method',
  'Evidence before publication.',
  'Looking for service information?',
  'Property-specific questions',
]) assert(translations[english], `Missing Blog Spanish translation: ${english}`)

const publishingDoc = read('docs/content-publishing.md')
for (const required of [
  'Iowa State University Extension first',
  'paraphrase',
  'claim',
  'owner approval',
  'status to `published`',
  'Homepage Latest Tips',
  'modifiedOn',
  'safe unpublish',
  'jurisdiction',
  'No CMS',
]) assert(publishingDoc.toLowerCase().includes(required.toLowerCase()), `Publishing workflow missing: ${required}`)

const planSource = read('plan.md')
assert.match(planSource, /### Task 27 — Blog Foundation, Article Template, Publishing Workflow, and Hub\n\n- \*\*Status:\*\* `\[x\]` Completed/)
assert.match(planSource, /### Task 28 — “When to Aerate a Lawn in Iowa” Article\n\n- \*\*Status:\*\* `\[x\]` Completed/)
assert.match(planSource, /### Task 29 — “Best Time to Overseed a Lawn in Iowa” Article\n\n- \*\*Status:\*\* `\[x\]` Completed/)
assert.match(planSource, /### Task 30 — “How Often to Mow a Lawn in Iowa” Article\n\n- \*\*Status:\*\* `\[ \]` Not started/)

console.log('Blog validation passed: exact hub ownership, two published and four planned article records, one publication gate, source/schema safeguards, zero future-draft leakage, and exact 25-URL lifecycle.')
