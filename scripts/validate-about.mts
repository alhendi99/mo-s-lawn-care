import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

import {
  aboutAreaLinks,
  aboutServiceGroups,
  resolvedAboutSupportingLinks,
} from '../content/about.ts'
import { getBreadcrumbItems, routeRegistry, routesById } from '../content/routes.ts'
import { buildRouteMetadata, buildSitemapEntries } from '../lib/metadata.ts'
import { approvedBusinessFacts } from '../lib/site.ts'
import {
  ORGANIZATION_ID,
  WEBSITE_ID,
  buildPageStructuredData,
} from '../lib/structured-data.ts'

const projectRoot = process.cwd()
const read = (relativePath: string) => fs.readFileSync(path.join(projectRoot, relativePath), 'utf8')
const route = routesById.about

assert.equal(route.path, '/about')
assert.equal(route.primaryKeyword, "mo's lawn care des moines")
assert.deepEqual(route.secondaryKeywords, [
  'lawn care company Des Moines',
  'local lawn care company Des Moines',
  "Mo's Lawn Care Iowa",
])
assert.equal(route.title, "About Mo's Lawn Care | Des Moines, IA")
assert.equal(route.h1, "About Mo's Lawn Care")
assert.equal(
  route.description,
  "Learn about Mo's Lawn Care and Snow Removal Services LLC, the team helping residential and commercial properties across the Des Moines metro.",
)
assert.equal(route.canonicalUrl, 'https://www.moslawncaredsm.com/about')
assert.equal(route.implementationStatus, 'implemented')
assert.equal(route.publicationStatus, 'published')
assert.equal(route.indexability, 'indexable')

const metadata = buildRouteMetadata(route)
assert.equal(metadata.title, route.title)
assert.equal(metadata.description, route.description)
assert.equal(metadata.alternates?.canonical, route.canonicalUrl)
assert.equal((metadata.robots as { index?: boolean }).index, true)

assert.equal(approvedBusinessFacts.legalName, "Mo's Lawn Care & Snow Removal Services LLC")
assert.equal(approvedBusinessFacts.businessPresence.type, 'service-area-business')
assert.equal(approvedBusinessFacts.businessPresence.publicStreetAddress.status, 'not-approved-for-publication')
assert.equal(approvedBusinessFacts.reviewSummary.displayCopy, '170+ Google Reviews')
assert.equal(approvedBusinessFacts.reviewSummary.aggregateRatingStructuredData, 'prohibited')
assert.equal(approvedBusinessFacts.openingHours.displayCopy, 'Every day, 8:00 AM–6:00 PM')
assert.deepEqual(approvedBusinessFacts.serviceAreas.map(({ city }) => city), [
  'Des Moines',
  'Ankeny',
  'Waukee',
  'Norwalk',
  'Altoona',
])

const graph = buildPageStructuredData(route, routesById.home)
const typeCount = (expected: string) => graph['@graph'].filter(({ '@type': type }) =>
  Array.isArray(type) ? type.includes(expected) : type === expected,
).length
assert.equal(typeCount('AboutPage'), 1)
assert.equal(typeCount('Organization'), 1)
assert.equal(typeCount('WebSite'), 1)
assert.equal(typeCount('BreadcrumbList'), 1)
assert.equal(graph['@graph'].length, 4)

const organization = graph['@graph'].find(({ '@id': id }) => id === ORGANIZATION_ID)
const website = graph['@graph'].find(({ '@id': id }) => id === WEBSITE_ID)
const aboutPage = graph['@graph'].find(({ '@type': type }) => type === 'AboutPage')
assert(organization)
assert(website)
assert(aboutPage)
assert.equal(organization.legalName, approvedBusinessFacts.legalName)
assert.deepEqual(website.publisher, { '@id': ORGANIZATION_ID })
assert.deepEqual(aboutPage.about, { '@id': ORGANIZATION_ID })
assert.deepEqual(aboutPage.publisher, { '@id': ORGANIZATION_ID })
assert.deepEqual(aboutPage.isPartOf, { '@id': WEBSITE_ID })

const visibleBreadcrumbs = getBreadcrumbItems(route.id)
assert.deepEqual(visibleBreadcrumbs.map(({ label }) => label), ['Home', 'About'])
assert.deepEqual(visibleBreadcrumbs.map(({ href }) => href), ['/', '/about'])
const breadcrumb = graph['@graph'].find(({ '@type': type }) => type === 'BreadcrumbList')
assert(breadcrumb)
const schemaBreadcrumbs = breadcrumb.itemListElement as readonly Record<string, unknown>[]
assert.deepEqual(schemaBreadcrumbs.map(({ name }) => name), visibleBreadcrumbs.map(({ label }) => label))
assert.deepEqual(schemaBreadcrumbs.map(({ position }) => position), [1, 2])
assert.deepEqual(schemaBreadcrumbs.map(({ item }) => item), [routesById.home.canonicalUrl, route.canonicalUrl])

for (const forbiddenType of [
  'LocalBusiness',
  'Person',
  'EmployeeRole',
  'PostalAddress',
  'Place',
  'Review',
  'AggregateRating',
  'Offer',
  'Product',
]) {
  assert.equal(typeCount(forbiddenType), 0, `Forbidden schema type: ${forbiddenType}`)
}

const forbiddenSchemaKeys = new Set([
  'address',
  'streetAddress',
  'addressLocality',
  'postalCode',
  'geo',
  'latitude',
  'longitude',
  'founder',
  'foundingDate',
  'employee',
  'numberOfEmployees',
  'award',
  'aggregateRating',
  'review',
  'price',
  'priceRange',
])
function assertNoForbiddenKeys(value: unknown) {
  if (Array.isArray(value)) {
    value.forEach(assertNoForbiddenKeys)
    return
  }
  if (!value || typeof value !== 'object') return
  for (const [key, child] of Object.entries(value)) {
    assert.equal(forbiddenSchemaKeys.has(key), false, `Forbidden schema key: ${key}`)
    assertNoForbiddenKeys(child)
  }
}
assertNoForbiddenKeys(graph)

const expectedServiceIds = [
  'service-lawn-mowing',
  'service-aeration-overseeding',
  'service-fertilization-weed-control',
  'service-landscaping',
  'service-flower-bed-maintenance',
  'service-grading',
  'service-yard-cleanup',
  'service-spring-cleanup',
  'service-fall-cleanup-leaf-removal',
  'service-snow-removal',
] as const
const registryServiceIds = [
  'service-lawn-mowing',
  'service-aeration-overseeding',
  'service-fertilization-weed-control',
  'service-landscaping',
  'service-flower-bed-maintenance',
  'service-yard-cleanup',
  'service-spring-cleanup',
  'service-fall-cleanup-leaf-removal',
  'service-grading',
  'service-snow-removal',
] as const
assert.deepEqual(aboutServiceGroups.flatMap(({ routeIds }) => routeIds), expectedServiceIds)
assert.equal(new Set(aboutServiceGroups.flatMap(({ routeIds }) => routeIds)).size, 10)
for (const routeId of expectedServiceIds) {
  assert.equal(routesById[routeId].implementationStatus, 'implemented')
  assert.equal(routesById[routeId].publicationStatus, 'published')
}

assert.deepEqual(aboutAreaLinks.map(({ name }) => name), ['Des Moines', 'Ankeny', 'Waukee', 'Norwalk', 'Altoona'])
assert.deepEqual(aboutAreaLinks.map(({ href }) => href), [
  '/',
  '/service-areas/ankeny-ia',
  '/service-areas/waukee-ia',
  '/service-areas/norwalk-ia',
  '/service-areas/altoona-ia',
])
assert.deepEqual(resolvedAboutSupportingLinks.map(({ routeId, href }) => [routeId, href]), [
  ['services', '/services'],
  ['service-areas', '/service-areas'],
  ['our-work', '/our-work'],
  ['reviews', '/reviews'],
  ['contact', '/contact'],
])
for (const futureId of ['contact', 'blog'] as const) {
  assert.equal(routesById[futureId].implementationStatus, 'planned')
  assert.equal(routesById[futureId].publicationStatus, 'planned')
}

const expectedPublishedIds = [
  'home',
  'services',
  ...registryServiceIds,
  'commercial-property-services',
  'service-areas',
  'service-area-ankeny',
  'service-area-waukee',
  'service-area-norwalk',
  'service-area-altoona',
  'about',
  'our-work',
  'reviews',
] as const
assert.deepEqual(
  routeRegistry.filter(({ publicationStatus }) => publicationStatus === 'published').map(({ id }) => id),
  expectedPublishedIds,
)
assert.equal(buildSitemapEntries().length, 21)
assert.deepEqual(buildSitemapEntries(), expectedPublishedIds.map((id) => ({ url: routesById[id].canonicalUrl })))

const pageSource = read('app/about/page.tsx')
const contentSource = read('content/about.ts')
const visibleSource = `${pageSource}\n${contentSource}`
const visibleLower = visibleSource.toLowerCase()
assert.equal(pageSource.match(/<h1\b/g)?.length, 1)
assert.match(pageSource, /routeId="about"/)
assert.match(pageSource, /buildRouteMetadata\(route\)/)
assert.match(pageSource, /site\.companyName/)
assert.match(pageSource, /site\.reviewSummary\.displayCopy/)
assert.match(pageSource, /site\.openingHours\.displayCopy/)
assert.match(pageSource, /aboutServiceGroups\.map/)
assert.match(pageSource, /aboutAreaLinks\.map/)
assert.match(pageSource, /resolvedAboutSupportingLinks\.map/)
assert.doesNotMatch(pageSource, /use client|<Image|<video|iframe|mapbox|geolocation|gtag|about_view|about_cta|company_lead/i)

for (const phrase of [
  "mo's lawn care · iowa",
  'lawn care company in des moines',
  'local lawn care company in des moines',
]) {
  assert(visibleLower.includes(phrase), `Missing natural keyword coverage: ${phrase}`)
}
for (const unsupportedClaim of [
  'founded',
  'founder',
  'since 19',
  'since 20',
  'years in business',
  'family-owned',
  'family owned',
  'locally owned',
  'licensed',
  'bonded',
  'insured',
  'certified',
  'accredited',
  'award-winning',
  'award winning',
  'employee count',
  'crew count',
  'fleet',
  'trucks',
  'customers served',
  'properties served',
  'projects completed',
  'office',
  'branch',
  'headquarters',
  'street address',
  'top-rated',
  'best in des moines',
  'leading company',
  'premier company',
]) {
  assert.equal(visibleLower.includes(unsupportedClaim), false, `Unsupported visible claim: ${unsupportedClaim}`)
}

const spanish = JSON.parse(read('lib/es-translations.json')) as Record<string, string>
const aboutEnglishStrings = [
  route.h1,
  "Mo's Lawn Care · Iowa service area business",
  'is a Service Area Business helping residential and commercial properties in Des Moines, Ankeny, Waukee, Norwalk and Altoona.',
  'For people comparing a lawn care company in Des Moines or searching for a local lawn care company in Des Moines, this page keeps the published company facts concise and points to the canonical details.',
  'Published company facts',
  'Trust starts with what can be verified.',
  "Mo's Lawn Care in Iowa is presented through approved business facts, published service records and direct contact paths—not an invented company story.",
  'Business identity',
  'Property context',
  'Residential and commercial',
  'Review signal',
  'Published hours',
  "What Mo's helps with",
  'Published services, grouped without expanding their scope.',
  'The company handles lawn care, outdoor-space work, property cleanup and snow removal through ten canonical service pages. Exact inclusions remain property- and estimate-specific.',
  ...aboutServiceGroups.flatMap(({ name, description }) => [name, description]),
  'Five-area coverage',
  'One company identity across five approved communities.',
  'Des Moines returns to the homepage. Ankeny, Waukee, Norwalk and Altoona each use their published service-area page.',
  'Explore Service Areas',
  'Choose the next canonical path',
  'Company context should lead to useful details.',
  ...resolvedAboutSupportingLinks.flatMap(({ eyebrow, description }) => [eyebrow, description]),
  'Property-specific next step',
  "Tell Mo's what the property needs.",
  'Share the property type, approved service area and broad need through the estimate path. Exact scope is confirmed for the request.',
]
for (const english of aboutEnglishStrings) assert(spanish[english], `Missing About Spanish translation: ${english}`)

const planSource = read('plan.md')
assert.match(planSource, /### Task 25 — Reviews Page and Review Data Governance\n\n- \*\*Status:\*\* `\[x\]` Completed/)

console.log(
  'Task 23 About validation passed: exact ownership, verified company facts, AboutPage/Organization/WebSite/BreadcrumbList graph, five-area and ten-service scope, required links, future-route isolation, Spanish coverage, and current lifecycle-derived sitemap.',
)
