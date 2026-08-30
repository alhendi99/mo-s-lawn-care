import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import {
  analyticsEventNames,
  classifyContactHref,
  createAnalyticsClient,
  createFormAnalyticsContext,
  FormStartGuard,
  mapEstimateErrorCode,
  sanitizePagePath,
  SuccessfulLeadDeduper,
  trackSuccessfulEstimateDelivery,
  type AnalyticsEventName,
} from '../lib/analytics.ts'
import { getGa4Config, isValidGa4MeasurementId } from '../lib/analytics-config.ts'
import {
  estimateErrorCodes,
  parseEstimateApiResponse,
  SubmissionInFlightGuard,
  type EstimateApiResponse,
} from '../lib/estimate-contract.ts'

const root = process.cwd()
const source = (path: string) => readFileSync(`${root}/${path}`, 'utf8')

assert.deepEqual(analyticsEventNames, [
  'generate_lead',
  'form_start',
  'form_submit_error',
  'click_to_call',
  'click_email',
])

const syntacticallyValidTestId = `G-${'A1'.repeat(5)}`
assert.equal(isValidGa4MeasurementId(syntacticallyValidTestId), true)
assert.equal(isValidGa4MeasurementId(undefined), false)
assert.equal(isValidGa4MeasurementId(''), false)
assert.equal(isValidGa4MeasurementId('UA-123456-1'), false)
assert.equal(isValidGa4MeasurementId('G-placeholder'), false)

assert.equal(getGa4Config({}).enabled, false)
assert.equal(getGa4Config({ VERCEL_ENV: 'preview' }).enabled, false)
assert.equal(
  getGa4Config({
    VERCEL_ENV: 'production',
    GA4_ENABLED: 'true',
    GA4_ACTIVATION_APPROVED: 'true',
  }).enabled,
  false,
)
assert.equal(
  getGa4Config({
    VERCEL_ENV: 'production',
    GA4_ENABLED: 'true',
    GA4_ACTIVATION_APPROVED: 'false',
    GA4_MEASUREMENT_ID: syntacticallyValidTestId,
  }).enabled,
  false,
)
assert.deepEqual(
  getGa4Config({
    VERCEL_ENV: 'production',
    GA4_ENABLED: 'true',
    GA4_ACTIVATION_APPROVED: 'true',
    GA4_MEASUREMENT_ID: syntacticallyValidTestId,
  }),
  { enabled: true, measurementId: syntacticallyValidTestId, disabledReason: null },
)

type CapturedEvent = { name: AnalyticsEventName; parameters: Readonly<Record<string, string>> }
const captured: CapturedEvent[] = []
const client = createAnalyticsClient((name, parameters) => captured.push({ name, parameters }))
const formContext = createFormAnalyticsContext('homepage_estimate', 'en', '/?utm_source=google')

client.formStart({
  ...formContext,
  email: 'customer@example.com',
  phone: '5155551212',
  message: 'private project details',
} as typeof formContext)
client.formSubmitError(formContext, 'delivery_failed')
client.clickToCall({ pagePath: '/?utm_campaign=gbp', language: 'en' })
client.clickEmail({ pagePath: '/?lang=es', language: 'es' })

assert.deepEqual(captured.map(({ name }) => name), [
  'form_start',
  'form_submit_error',
  'click_to_call',
  'click_email',
])
assert.deepEqual(Object.keys(captured[0].parameters).sort(), [
  'form_id',
  'form_name',
  'language',
  'lead_type',
  'page_path',
  'placement',
])
assert.equal(captured[0].parameters.page_path, '/')
assert.deepEqual(Object.keys(captured[1].parameters).sort(), [
  'error_type',
  'form_id',
  'form_name',
  'language',
  'lead_type',
  'page_path',
  'placement',
])
assert.deepEqual(captured[2].parameters, {
  page_path: '/',
  link_url: 'tel:',
  placement: 'site_contact',
  language: 'en',
})
assert.deepEqual(captured[3].parameters, {
  page_path: '/',
  link_url: 'mailto:',
  placement: 'site_contact',
  language: 'es',
})

assert.doesNotThrow(() => {
  const unavailableAnalytics = createAnalyticsClient(() => {
    throw new Error('analytics transport unavailable')
  })
  unavailableAnalytics.formStart(formContext)
  unavailableAnalytics.generateLead(formContext)
  unavailableAnalytics.formSubmitError(formContext, 'delivery_failed')
  unavailableAnalytics.clickToCall({ pagePath: '/', language: 'en' })
  unavailableAnalytics.clickEmail({ pagePath: '/', language: 'en' })
})

const serializedEvents = JSON.stringify(captured)
for (const forbiddenValue of [
  'customer@example.com',
  '5155551212',
  'private project details',
  'utm_source',
  'utm_campaign',
]) {
  assert.equal(serializedEvents.includes(forbiddenValue), false)
}
for (const forbiddenKey of [
  'name',
  'email',
  'phone',
  'address',
  'message',
  'service',
  'value',
  'currency',
]) {
  assert.equal(captured.some(({ parameters }) => forbiddenKey in parameters), false)
}

const formStartGuard = new FormStartGuard()
assert.equal(formStartGuard.claim('website', 'pointerdown', true), false)
assert.equal(formStartGuard.claim('name', 'focus', true), false)
assert.equal(formStartGuard.claim('name', 'pointerdown', false), false)
assert.equal(formStartGuard.claim('name', 'pointerdown', true), true)
assert.equal(formStartGuard.claim('phone', 'keydown', true), false)

const keyboardStartGuard = new FormStartGuard()
assert.equal(keyboardStartGuard.claim('email', 'keydown', true), true)
assert.equal(keyboardStartGuard.claim('message', 'pointerdown', true), false)

const inFlightGuard = new SubmissionInFlightGuard()
assert.equal(inFlightGuard.claim(), true)
assert.equal(inFlightGuard.claim(), false)
inFlightGuard.release()
assert.equal(inFlightGuard.claim(), true)
inFlightGuard.release()

const sent = parseEstimateApiResponse({
  ok: true,
  delivery: 'sent',
  submissionId: 'submission_12345',
})
const suppressed = parseEstimateApiResponse({ ok: true, delivery: 'suppressed' })
assert.deepEqual(sent, {
  ok: true,
  delivery: 'sent',
  submissionId: 'submission_12345',
})
assert.deepEqual(suppressed, { ok: true, delivery: 'suppressed' })
assert.equal(parseEstimateApiResponse({ ok: true }), null)
assert.equal(parseEstimateApiResponse({ ok: true, delivery: 'sent' }), null)
assert.equal(parseEstimateApiResponse({ ok: false, errorCode: 'raw_server_message' }), null)

for (const errorCode of estimateErrorCodes) {
  assert.deepEqual(parseEstimateApiResponse({ ok: false, errorCode }), { ok: false, errorCode })
  assert.equal(mapEstimateErrorCode(errorCode), errorCode)
}

const leadEvents: CapturedEvent[] = []
const leadClient = createAnalyticsClient((name, parameters) => leadEvents.push({ name, parameters }))
const leadDeduper = new SuccessfulLeadDeduper()
assert.equal(trackSuccessfulEstimateDelivery(sent!, formContext, leadClient, leadDeduper), true)
assert.equal(trackSuccessfulEstimateDelivery(sent!, formContext, leadClient, leadDeduper), false)
assert.equal(
  trackSuccessfulEstimateDelivery(suppressed!, formContext, leadClient, leadDeduper),
  false,
)
for (const errorCode of estimateErrorCodes) {
  const response: EstimateApiResponse = { ok: false, errorCode }
  assert.equal(trackSuccessfulEstimateDelivery(response, formContext, leadClient, leadDeduper), false)
}
assert.deepEqual(leadEvents.map(({ name }) => name), ['generate_lead'])

const persisted = new Map<string, string>()
const storage = {
  getItem(key: string) {
    return persisted.get(key) ?? null
  },
  setItem(key: string, value: string) {
    persisted.set(key, value)
  },
}
const firstLifecycle = new SuccessfulLeadDeduper(storage)
assert.equal(firstLifecycle.claim('stable_submission_1'), true)
const remountedLifecycle = new SuccessfulLeadDeduper(storage)
assert.equal(remountedLifecycle.claim('stable_submission_1'), false)
assert.equal(remountedLifecycle.claim('stable_submission_2'), true)

assert.equal(classifyContactHref('tel:+15158688636'), 'tel')
assert.equal(classifyContactHref('mailto:business@example.com'), 'mailto')
assert.equal(classifyContactHref('https://example.com'), null)
assert.equal(sanitizePagePath('/contact?utm_source=google#form'), '/contact')
assert.equal(sanitizePagePath('https://example.com/private'), '/')

const analyticsSource = source('lib/analytics.ts')
const contactTrackerSource = source('components/contact-link-tracker.tsx')
const routeSource = source('app/api/estimate/route.ts')
const formSource = source('components/estimate-form.tsx')
const envExample = source('.env.example')
const layoutSource = source('app/layout.tsx')

assert.equal(analyticsSource.includes('export function trackEvent'), false)
assert.equal(contactTrackerSource.includes('preventDefault'), false)
assert.equal(contactTrackerSource.includes('textContent'), false)
assert.equal(contactTrackerSource.includes('innerText'), false)
assert.match(routeSource, /delivery: 'suppressed'/)
assert.match(routeSource, /delivery: 'sent', submissionId/)
assert.match(routeSource, /crypto\.randomUUID\(\)/)
assert.match(formSource, /submissionInFlight\.current\.claim\(\)/)
assert.match(formSource, /trackSuccessfulEstimateDelivery\(response/)
assert.match(formSource, /onPointerDownCapture=\{handleMeaningfulInteraction\}/)
assert.match(formSource, /onKeyDownCapture=\{handleMeaningfulInteraction\}/)
assert.match(layoutSource, /ga4\.enabled && <Ga4/)
assert.match(layoutSource, /isProductionDeployment\(\) && <Analytics/)
assert.match(envExample, /^GA4_MEASUREMENT_ID=$/m)
assert.match(envExample, /^GA4_ENABLED=false$/m)
assert.match(envExample, /^GA4_ACTIVATION_APPROVED=false$/m)

console.log(
  'Analytics validation passed: 5 allowlisted events, production gates, explicit estimate outcomes, lead dedupe, form-start/contact boundaries, and PII-safe payloads.',
)
