import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { analyticsEventNames } from '../lib/analytics.ts'
import { getGa4Config } from '../lib/analytics-config.ts'
import { buildSitemapEntries } from '../lib/metadata.ts'
import { approvedBusinessFacts } from '../lib/site.ts'

const root = process.cwd()
const read = (path: string) => readFileSync(resolve(root, path), 'utf8')
const operations = read('docs/operations.md')
const publishing = read('docs/content-publishing.md')
const guidance = read('docs/blog-writing-guidance.md')
const envExample = read('.env.example')
const packageJson = JSON.parse(read('package.json')) as { scripts?: Record<string, string> }
const plan = read('plan.md')

const requiredOperationsHeadings = [
  '## Production baseline',
  '## GA4 and privacy operations',
  '## Resend operations',
  '## Approved business facts',
  '## Search Console and Google Business Profile',
  '## Environment examples',
  '## Supported validation commands',
  '## Deployment and rollback',
  '## Manual post-deployment QA reconciliation',
  '## Phase 1 closure record',
]
for (const heading of requiredOperationsHeadings) assert.match(operations, new RegExp(heading))

const expectedEvents = [
  'generate_lead',
  'form_start',
  'form_submit_error',
  'click_to_call',
  'click_email',
]
assert.deepEqual(analyticsEventNames, expectedEvents)
for (const eventName of expectedEvents) assert.ok(operations.includes(`\`${eventName}\``))
assert.match(operations, /generate_lead[^\n]+Sole governed Key Event/)
assert.match(operations, /Enhanced Measurement: OFF/)
assert.match(operations, /Google Signals: disabled/)
assert.match(operations, /no Google Tag Manager/)
assert.match(operations, /custom dimensions: none currently required/)
for (const forbiddenParameter of [
  'names',
  'phone numbers',
  'email addresses',
  'street addresses',
  'messages',
  'property/project text',
  'free text',
  'service or form values',
  'submission IDs',
  'raw query strings',
  'UTM values',
]) {
  assert.match(operations, new RegExp(forbiddenParameter.replace('/', '\\/')))
}

const enabledGa4 = getGa4Config({
  VERCEL_ENV: 'production',
  GA4_ENABLED: 'true',
  GA4_ACTIVATION_APPROVED: 'true',
  GA4_MEASUREMENT_ID: 'G-ABCDEF1234',
})
assert.equal(enabledGa4.enabled, true)
for (const variable of ['GA4_MEASUREMENT_ID', 'GA4_ENABLED', 'GA4_ACTIVATION_APPROVED']) {
  assert.ok(operations.includes(variable))
}
assert.match(envExample, /^GA4_MEASUREMENT_ID=$/m)
assert.match(envExample, /^GA4_ENABLED=false$/m)
assert.match(envExample, /^GA4_ACTIVATION_APPROVED=false$/m)

for (const variable of ['RESEND_API_KEY', 'RESEND_FROM_EMAIL', 'RESEND_TO_EMAIL']) {
  assert.match(operations, new RegExp(`^${variable}$`, 'm'))
  assert.match(envExample, new RegExp(`^${variable}=$`, 'm'))
}
assert.match(operations, /same Resend account\/team/)
assert.match(operations, /verified sender domain is `moslawncaredsm\.com`/)
assert.match(operations, /production sender is `website@moslawncaredsm\.com`/)

assert.equal(approvedBusinessFacts.businessPresence.type, 'service-area-business')
assert.deepEqual(
  approvedBusinessFacts.serviceAreas.map(({ city }) => city),
  ['Des Moines', 'Ankeny', 'Waukee', 'Norwalk', 'Altoona'],
)
assert.equal(approvedBusinessFacts.openingHours.displayCopy, 'Every day, 8:00 AM–6:00 PM')
assert.equal(approvedBusinessFacts.reviewSummary.displayCopy, '170+ Google Reviews')
assert.equal(approvedBusinessFacts.reviewSummary.aggregateRatingStructuredData, 'prohibited')
for (const city of approvedBusinessFacts.serviceAreas.map(({ city }) => city)) {
  assert.match(operations, new RegExp(city))
}
assert.match(operations, /public street address: none approved/)
assert.match(operations, /geo coordinates: prohibited/)
assert.match(operations, /`aggregateRating`/)

assert.equal(buildSitemapEntries().length, 29)
assert.match(operations, /`sc-domain:moslawncaredsm\.com`/)
assert.match(operations, /Successful with 29 discovered URLs/)
assert.match(operations, /Unknown to Google/)
const gbpUrl = 'https://www.moslawncaredsm.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp&utm_content=website_button'
assert.match(operations, new RegExp(gbpUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))
assert.match(operations, /approved, client-managed, and pending independent external completion/)

const documentedCommands = [...operations.matchAll(/`(pnpm [^`]+)`/g)].map((match) => match[1])
assert.ok(documentedCommands.length >= 10)
for (const command of documentedCommands) {
  if (command.startsWith('pnpm exec ')) continue
  const scriptName = command.slice('pnpm '.length).split(/\s+/, 1)[0]
  assert.ok(packageJson.scripts?.[scriptName], `Documented command has no package script: ${command}`)
}
assert.match(operations, /Unavailable — ESLint is not installed/)

for (const requirement of [
  '`plan.md` Section E',
  '`docs/blog-writing-guidance.md`',
  'Research, Differentiation, Editorial Quality, and STOP gates',
  '`getPublishedArticles()`',
  'Homepage uses the first three published records in registry order',
  'Never hardcode an article URL into the sitemap',
  'explicit Spanish translations',
  'bidirectional article/service and cluster review',
  'Schema must never be stronger than visible, approved content',
]) {
  assert.match(publishing, new RegExp(requirement.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))
}
assert.match(guidance, /# 3\. Mandatory Research Gate/)
assert.match(guidance, /# 5\. Mandatory Differentiation Gate/)
assert.match(guidance, /# 30\. Editorial Quality Gate/)
assert.match(guidance, /# 32\. STOP Rule/)

for (const content of [operations, publishing, envExample, plan]) {
  assert.doesNotMatch(content, /\bre_[A-Za-z0-9]{20,}\b/)
  assert.doesNotMatch(content, /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/)
  assert.doesNotMatch(content, /\b(?:ghp|github_pat)_[A-Za-z0-9_]{20,}\b/)
}
for (const line of envExample.split('\n')) {
  const match = line.match(/^(RESEND_API_KEY|RESEND_FROM_EMAIL|RESEND_TO_EMAIL|GA4_MEASUREMENT_ID)=(.*)$/)
  if (match) assert.equal(match[2], '', `${match[1]} must remain an empty example placeholder`)
}

assert.match(plan, /Tasks 1–39 complete/)
assert.match(plan, /Phase 1 rollout closed/)
assert.match(plan, /### Task 39 — Documentation, Final Cleanup, and Implementation Gate Closure[\s\S]*?\*\*Status:\*\* `\[x\]` Completed/)
assert.doesNotMatch(operations, /Task 40/)

console.log('Task 39 operations documentation validation passed: publishing, analytics/privacy, Resend, approved business facts, external-account state, command matrix, deployment, QA reconciliation, and secret placeholders are consistent.')
