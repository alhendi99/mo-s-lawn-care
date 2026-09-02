import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

import { getBreadcrumbItems, routeRegistry, routesById } from '../content/routes.ts'
import {
  analyticsEventNames,
  createAnalyticsClient,
  createFormAnalyticsContext,
  SuccessfulLeadDeduper,
  trackSuccessfulEstimateDelivery,
  type AnalyticsEventName,
} from '../lib/analytics.ts'
import { parseEstimateApiResponse } from '../lib/estimate-contract.ts'
import { buildRouteMetadata, buildSitemapEntries } from '../lib/metadata.ts'
import { approvedBusinessFacts, services, site } from '../lib/site.ts'
import {
  ORGANIZATION_ID,
  WEBSITE_ID,
  buildPageStructuredData,
} from '../lib/structured-data.ts'

const projectRoot = process.cwd()
const read = (relativePath: string) => fs.readFileSync(path.join(projectRoot, relativePath), 'utf8')
const route = routesById.contact

assert.equal(route.path, '/contact')
assert.equal(route.primaryKeyword, 'lawn care estimate des moines')
assert.deepEqual(route.secondaryKeywords, [
  'lawn care quote Des Moines',
  'free lawn estimate Des Moines',
  "contact Mo's Lawn Care",
])
assert.equal(route.title, "Contact Mo's Lawn Care | Free Estimate in Des Moines, IA")
assert.equal(route.h1, 'Request a Free Property Estimate')
assert.equal(
  route.description,
  "Tell Mo's Lawn Care what your Des Moines-area property needs. Request a free estimate for mowing, landscaping, cleanup, lawn treatments or snow removal.",
)
assert.equal(route.canonicalUrl, 'https://www.moslawncaredsm.com/contact')
assert.equal(route.implementationStatus, 'implemented')
assert.equal(route.publicationStatus, 'published')
assert.equal(route.indexability, 'indexable')

const metadata = buildRouteMetadata(route)
assert.equal(metadata.title, route.title)
assert.equal(metadata.description, route.description)
assert.equal(metadata.alternates?.canonical, route.canonicalUrl)
assert.equal((metadata.robots as { index?: boolean }).index, true)

const graph = buildPageStructuredData(route, routesById.home)
const typeCount = (expected: string) => graph['@graph'].filter(({ '@type': type }) =>
  Array.isArray(type) ? type.includes(expected) : type === expected,
).length
assert.equal(typeCount('ContactPage'), 1)
assert.equal(typeCount('Organization'), 1)
assert.equal(typeCount('WebSite'), 1)
assert.equal(typeCount('BreadcrumbList'), 1)
assert.equal(graph['@graph'].length, 4)
assert(graph['@graph'].some(({ '@id': id }) => id === ORGANIZATION_ID))
assert(graph['@graph'].some(({ '@id': id }) => id === WEBSITE_ID))

const visibleBreadcrumbs = getBreadcrumbItems(route.id)
assert.deepEqual(visibleBreadcrumbs.map(({ label }) => label), ['Home', 'Contact'])
assert.deepEqual(visibleBreadcrumbs.map(({ href }) => href), ['/', '/contact'])
const breadcrumb = graph['@graph'].find(({ '@type': type }) => type === 'BreadcrumbList')
assert(breadcrumb)
const schemaBreadcrumbs = breadcrumb.itemListElement as readonly Record<string, unknown>[]
assert.deepEqual(schemaBreadcrumbs.map(({ name }) => name), ['Home', 'Contact'])
assert.deepEqual(schemaBreadcrumbs.map(({ position }) => position), [1, 2])
assert.deepEqual(schemaBreadcrumbs.map(({ item }) => item), [routesById.home.canonicalUrl, route.canonicalUrl])

for (const forbiddenType of [
  'LocalBusiness',
  'PostalAddress',
  'Place',
  'GeoCoordinates',
  'Review',
  'AggregateRating',
  'Offer',
  'Product',
]) assert.equal(typeCount(forbiddenType), 0, `Forbidden Contact schema type: ${forbiddenType}`)

const forbiddenSchemaKeys = new Set([
  'address',
  'streetAddress',
  'addressLocality',
  'postalCode',
  'geo',
  'latitude',
  'longitude',
  'aggregateRating',
  'review',
  'price',
  'priceRange',
])
function assertNoForbiddenKeys(value: unknown) {
  if (Array.isArray(value)) return value.forEach(assertNoForbiddenKeys)
  if (!value || typeof value !== 'object') return
  for (const [key, child] of Object.entries(value)) {
    assert.equal(forbiddenSchemaKeys.has(key), false, `Forbidden Contact schema key: ${key}`)
    assertNoForbiddenKeys(child)
  }
}
assertNoForbiddenKeys(graph)

assert.deepEqual(approvedBusinessFacts.serviceAreas.map(({ city }) => city), [
  'Des Moines',
  'Ankeny',
  'Waukee',
  'Norwalk',
  'Altoona',
])
assert.equal(approvedBusinessFacts.businessPresence.type, 'service-area-business')
assert.equal(approvedBusinessFacts.businessPresence.publicStreetAddress.status, 'not-approved-for-publication')

const pageSource = read('app/contact/page.tsx')
const homepageSource = read('components/estimate-section.tsx')
const formSource = read('components/estimate-form.tsx')
const apiSource = read('app/api/estimate/route.ts')
const emailSource = read('components/estimate-request-email.tsx')
const analyticsSource = read('lib/analytics.ts')
const contactTrackerSource = read('components/contact-link-tracker.tsx')
const allComponentSource = fs.readdirSync(path.join(projectRoot, 'components'))
  .filter((name) => name.endsWith('.tsx'))
  .map((name) => read(`components/${name}`))
  .join('\n')

assert.equal(pageSource.match(/<h1\b/g)?.length, 1)
assert.match(pageSource, /buildRouteMetadata\(route\)/)
assert.match(pageSource, /routeId="contact"/)
assert.match(pageSource, /<EstimateForm placement="contact_page" \/>/)
assert.match(homepageSource, /<EstimateForm placement="homepage_estimate" \/>/)
assert.equal(allComponentSource.match(/export function EstimateForm\b/g)?.length, 1)
assert.equal(fs.existsSync(path.join(projectRoot, 'app/api/contact/route.ts')), false)
assert.equal(fs.existsSync(path.join(projectRoot, 'app/api/quote/route.ts')), false)
assert.equal(fs.existsSync(path.join(projectRoot, 'app/api/contact-estimate/route.ts')), false)
assert.equal(apiSource.match(/export async function POST\b/g)?.length, 1)
assert.equal(apiSource.match(/new Resend\(/g)?.length, 1)
assert.match(apiSource, /html: EstimateRequestEmail\(/)
assert.doesNotMatch(apiSource, /react: EstimateRequestEmail\(/)
assert.match(emailSource, /function escapeHtml\(/)
assert.match(emailSource, /replace\(\/\[&<>"'\]\/g/)
assert.equal(site.formEndpoint, '/api/estimate')
assert.match(formSource, /fetch\(site\.formEndpoint/)

assert.match(formSource, /placement === 'contact_page'/)
assert.match(formSource, /'contact-estimate'/)
assert.match(formSource, /'homepage-estimate'/)
assert.match(formSource, /data-estimate-placement=\{controlledPlacement\}/)
assert.doesNotMatch(formSource, /id="(?:name|phone|email|service|message|website)"/)
assert.match(formSource, /fieldId\('name-error'\)/)
assert.match(formSource, /fieldId\('status'\)/)
assert.match(formSource, /statusRef\.current\?\.focus\(\)/)
assert.match(formSource, /requiredFields: FieldName\[\] = \['name', 'phone'\]/)
assert.match(formSource, /phoneDigits\.length < 10/)
assert.match(formSource, /aria-invalid=\{Boolean\(errors\.email\)\}/)
assert.match(formSource, /aria-busy=\{status === 'sending'\}/)
assert.match(formSource, /disabled=\{status === 'sending'\}/)
assert.match(formSource, /form\.reset\(\)/)
assert.match(formSource, /website: String\(formData\.get\('website'\)/)
assert.match(apiSource, /delivery: 'suppressed'/)
assert.match(apiSource, /services\.some\(/)
assert.match(apiSource, /requestedService === 'Not sure yet'/)

for (const source of [pageSource, formSource]) {
  assert.doesNotMatch(source, /useSearchParams|searchParams|location\.search/)
}
assert.doesNotMatch(pageSource, /form_id|service=|city=/)
assert.deepEqual(
  createFormAnalyticsContext('spoofed' as 'contact_page', 'en', '/contact?service=fake&city=chicago&form_id=arbitrary'),
  {
    formId: 'estimate_form',
    formName: 'estimate_request',
    leadType: 'estimate_request',
    pagePath: '/contact',
    placement: 'homepage_estimate',
    language: 'en',
  },
)

assert.deepEqual(analyticsEventNames, [
  'generate_lead',
  'form_start',
  'form_submit_error',
  'click_to_call',
  'click_email',
])
assert.equal(analyticsSource.includes('export function trackEvent'), false)
assert.equal(contactTrackerSource.includes('preventDefault'), false)

type CapturedEvent = { name: AnalyticsEventName; parameters: Readonly<Record<string, string>> }
const captured: CapturedEvent[] = []
const client = createAnalyticsClient((name, parameters) => captured.push({ name, parameters }))
const homepageContext = createFormAnalyticsContext('homepage_estimate', 'en', '/?utm_source=test')
const contactContext = createFormAnalyticsContext('contact_page', 'es', '/contact?service=fake&city=chicago')
const deduper = new SuccessfulLeadDeduper()
const homepageSent = parseEstimateApiResponse({ ok: true, delivery: 'sent', submissionId: 'homepage_delivery_1' })
const contactSent = parseEstimateApiResponse({ ok: true, delivery: 'sent', submissionId: 'contact_delivery_1' })
const suppressed = parseEstimateApiResponse({ ok: true, delivery: 'suppressed' })
assert(homepageSent && contactSent && suppressed)
assert.equal(trackSuccessfulEstimateDelivery(homepageSent, homepageContext, client, deduper), true)
assert.equal(trackSuccessfulEstimateDelivery(homepageSent, homepageContext, client, deduper), false)
assert.equal(trackSuccessfulEstimateDelivery(contactSent, contactContext, client, deduper), true)
assert.equal(trackSuccessfulEstimateDelivery(contactSent, contactContext, client, deduper), false)
assert.equal(trackSuccessfulEstimateDelivery(suppressed, contactContext, client, deduper), false)
client.formSubmitError(contactContext, 'delivery_failed')
assert.deepEqual(captured.map(({ name }) => name), [
  'generate_lead',
  'generate_lead',
  'form_submit_error',
])
const serializedEvents = JSON.stringify(captured)
for (const forbidden of [
  'utm_source',
  'service=fake',
  'city=chicago',
  'customer@example.com',
  '5155551212',
  'private project details',
]) assert.equal(serializedEvents.includes(forbidden), false)
for (const event of captured) {
  for (const forbiddenKey of ['name', 'email', 'phone', 'message', 'service', 'city', 'query', 'submission_id']) {
    assert.equal(forbiddenKey in event.parameters, false, `PII/context key entered analytics: ${forbiddenKey}`)
  }
}

assert.match(pageSource, /href=\{site\.phoneHref\}/)
assert.match(pageSource, /href=\{site\.emailHref\}/)
assert.match(pageSource, /routesById\.services\.path/)
assert.match(pageSource, /routesById\['service-areas'\]\.path/)
assert.equal(site.phoneHref.startsWith('tel:'), true)
assert.equal(site.emailHref.startsWith('mailto:'), true)

assert.deepEqual(services, [
  'Mowing Service',
  'Fertilizing and Weed Control',
  'Flower Beds Maintenance',
  'Overgrown Yards Cleanup',
  'Spring Cleanup',
  'Fall Cleanup',
  'Leaves Removal',
  'Snow Removal',
  'Ground Clearance',
  'Grading',
  'Aeration and Seeding',
  'Landscaping',
])

const sitemap = buildSitemapEntries()
assert.equal(sitemap.length, 29)
assert.equal(sitemap.at(-1)?.url, routesById['article-central-iowa-lawn-care-calendar'].canonicalUrl)
assert.equal(sitemap.filter(({ url }) => url === route.canonicalUrl).length, 1)
assert.equal(routesById.blog.implementationStatus, 'implemented')
assert.equal(routesById.blog.publicationStatus, 'published')
assert.equal(sitemap.some(({ url }) => url === routesById.blog.canonicalUrl), true)
assert.equal(fs.existsSync(path.join(projectRoot, 'app/blog/page.tsx')), true)

const translations = JSON.parse(read('lib/es-translations.json')) as Record<string, string>
for (const english of [
  route.h1,
  'Free estimate · Des Moines-area properties',
  'Share the property, the service you want to discuss and any useful details. Submit the form, or use the phone and email options below.',
  "Other ways to contact Mo's",
  'Phone and email remain available if you cannot use the online form.',
  'Estimate details are property-specific. This page does not publish prices, schedules or availability promises.',
  'Useful next paths',
  'Explore before you request.',
  'Browse Services',
  'Review the ten published service paths and choose the closest match for your property.',
  'View Service Areas',
  "Mo's serves Des Moines, Ankeny, Waukee, Norwalk and Altoona.",
  'Sending your request…',
]) assert(translations[english], `Missing Contact Spanish translation: ${english}`)

const planSource = read('plan.md')
assert.match(planSource, /### Task 29 — “Best Time to Overseed a Lawn in Iowa” Article\n\n- \*\*Status:\*\* `\[x\]` Completed/)

console.log('Task 26 Contact validation passed: exact ownership/schema, one shared form/backend, controlled placements and services, query/PII boundaries, exact-once leads, native contact paths, and current 29-URL lifecycle.')
