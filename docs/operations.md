# Phase 1 operating runbook

This runbook owns durable production, account, validation, deployment, and approved-business-fact procedures for the Phase 1 site. `plan.md` remains authoritative for task authorization, SEO ownership, lifecycle, and historical checkpoints. `AGENTS.md` remains authoritative for repository execution rules. Article work additionally follows `docs/content-publishing.md` and the complete `docs/blog-writing-guidance.md` gate; this runbook does not authorize future expansion.

## Production baseline

- Canonical origin: `https://www.moslawncaredsm.com`
- Deployment source: GitHub `main` → automatic Vercel Production deployment
- Production application source verified on 2026-09-03: `4034574b55de9eed20c37589edfcbec307ba8bac`
- Public lifecycle: exactly 29 canonical, indexable URLs derived from the route and Blog registries
- Phase 1 closeout commits after `4034574` are local documentation commits until the user intentionally pushes them; do not describe a local documentation commit as deployed

Do not add a route, city, article, alias, redirect, schema entity, or sitemap URL through this document. A separately authorized task must first change the governing ownership/lifecycle record and pass its complete Definition of Done.

## GA4 and privacy operations

### Production activation

The site uses one direct `gtag.js` installation and no Google Tag Manager container. GA4 enables only when all of these conditions pass:

1. Vercel sets `VERCEL_ENV=production`.
2. `GA4_ENABLED=true`.
3. `GA4_ACTIVATION_APPROVED=true`.
4. `GA4_MEASUREMENT_ID` is present and matches the validated `G-...` format.

The current approved account is GA4 property `lawn-care-216f3` (property ID `548623677`), web stream `lawn-care` (stream ID `15382811142`), Measurement ID `G-3WGKSK6KBP`, for the canonical production origin. The ID is not a secret, but `.env.example` intentionally uses an empty placeholder. Preview, local, and test environments fail closed and must not send to this production property.

Production account policy is:

- Enhanced Measurement: OFF
- Google Signals: disabled
- ad-personalization signals: disabled in the tag
- consent: site-owner-approved direct loading without a consent UI
- Vercel Analytics: separate from GA4 and active only in Vercel Production through its own integration
- custom dimensions: none currently required

Revisit consent and data-processing requirements before changing jurisdictions, data collection, advertising features, or account settings. Do not silently treat the current owner decision as approval for broader tracking.

### Governed events

The exact allowlist is:

| Event | Trigger | Key Event status |
| --- | --- | --- |
| `generate_lead` | Once, only after the provider-confirmed API response reports `delivery: sent`; stable submission identity prevents duplicates | Sole governed Key Event |
| `form_start` | First meaningful trusted interaction with a real field, once per form instance | Non-key |
| `form_submit_error` | Bounded qualifying backend/network/response failure | Non-key |
| `click_to_call` | Activation of a real `tel:` link without blocking native behavior | Non-key |
| `click_email` | Activation of a real `mailto:` link without blocking native behavior | Non-key |

A provider failure, validation failure, honeypot suppression, malformed response, or unconfirmed delivery must not emit `generate_lead`. Do not add page-, service-, city-, article-, or arbitrary-event names without a separately authorized contract change.

Analytics parameters are a fixed, bounded context only. Never send names, phone numbers, email addresses, street addresses, messages, property/project text, free text, service or form values, submission IDs, raw query strings, UTM values, or arbitrary DOM values to GA4. Do not register custom dimensions unless a governed parameter has a real reporting requirement and receives separate approval.

For troubleshooting, first run `pnpm validate:analytics` and `pnpm validate:contact`. In Production, confirm a single `gtag.js` request, the approved Measurement ID, and the absence of GTM. Use Realtime/DebugView without copying customer or test-form values into documentation. A safe real submission requires explicit approval and provider-delivery verification; do not create repeated test leads for routine checks.

## Resend operations

The estimate endpoint requires these server-only variables:

```text
RESEND_API_KEY
RESEND_FROM_EMAIL
RESEND_TO_EMAIL
```

The verified sender domain is `moslawncaredsm.com`, and the production sender is `website@moslawncaredsm.com`. Keep the recipient private unless separately approved for publication. Never put the API key, recipient, token, or account credential in repository files, command output, screenshots, or operating records.

The `RESEND_API_KEY` must belong to the same Resend account/team in which `moslawncaredsm.com` is verified. This alignment is mandatory even when the domain is correctly verified elsewhere.

Troubleshooting boundaries:

- HTTP 403 / domain-account mismatch: verify that the key's Resend team/account owns the verified domain.
- HTTP 422 / sender-format or domain failure: verify `RESEND_FROM_EMAIL` format and the verified sender domain.
- Provider error or exception: treat delivery as failed; show the bounded application error and emit no `generate_lead`.
- Missing server variables: the endpoint returns delivery unavailable; never work around this by placing secrets in client code.

## Approved business facts

`lib/site.ts` is the shared repository source for owner-confirmed business facts. Change it only with explicit owner evidence, then update every affected visible translation, schema consumer, and focused validator in the same authorized task.

Current approved truth:

- business model: Service Area Business
- service areas, exactly: Des Moines, Ankeny, Waukee, Norwalk, Altoona
- public street address: none approved
- locality-only substitute address: prohibited
- geo coordinates: prohibited
- visible hours: `Every day, 8:00 AM–6:00 PM`
- review display copy: `170+ Google Reviews`
- broad Des Moines intent owner: homepage `/`; there is no Des Moines child city route

Do not add an address, branch, office, geo, unsupported city, unsupported service capability, `aggregateRating`, or self-serving Review schema. Media/review appearance, filenames, general knowledge, and third-party advice are not owner confirmation. Canonical service records define capability boundaries; external article sources cannot strengthen them.

## Search Console and Google Business Profile

The verified Search Console property is `sc-domain:moslawncaredsm.com`. Its sitemap is `https://www.moslawncaredsm.com/sitemap.xml`. On 2026-09-03 the sitemap status was Successful with 29 discovered URLs. The sitemap is generated from implemented + published + indexable routes and published Blog records; never hardcode a future URL or a permanent count into application code.

Indexing can lag deployment and sitemap discovery. “Unknown to Google” means the inspected URL had not yet been processed; it is not evidence that Google crawled and rejected the page. Sitemap resubmission and URL Inspection/indexing requests are external actions. Record them as requests, never as an indexing guarantee.

The approved Google Business Profile Website URL is exactly:

`https://www.moslawncaredsm.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp&utm_content=website_button`

This GBP change is approved, client-managed, and pending independent external completion. Do not claim completion without verification, and do not add this query-bearing URL to canonicals, internal links, schema, or the sitemap.

## Environment examples

`.env.example` contains only required variable names and safe empty/false placeholders. Keep Resend variables server-only. The GA4 example must remain fail-closed (`GA4_ENABLED=false`, `GA4_ACTIVATION_APPROVED=false`) and should not embed the live Measurement ID. Vercel supplies `VERCEL_ENV`; it is an environment identity, not an operator-set activation substitute.

When adding a required variable, update `.env.example`, the owning code, and the relevant validator together. Never copy `.env.local`, Production values, private recipient addresses, API keys, tokens, or credentials into documentation.

## Supported validation commands

Run the smallest focused contract during edits, then the complete applicable gate once the change is stable.

| Purpose | Command |
| --- | --- |
| Approved business facts/content | `pnpm validate:content` |
| Blog registry and publishing contract | `pnpm validate:blog` |
| Analytics gating/events/privacy | `pnpm validate:analytics` |
| Contact/API/form contract | `pnpm validate:contact` |
| SEO foundation | `pnpm validate:seo` |
| Internal links | `pnpm validate:internal-links` |
| Structured data | `pnpm validate:structured-data` |
| Final lifecycle/production-source gate | `pnpm validate:predeployment` |
| Operations documentation | `pnpm validate:operations` |
| TypeScript | `pnpm exec tsc --noEmit --incremental false` |
| Production build | `pnpm build` |

Page- and article-specific `validate:*` scripts are listed in `package.json`; use the one that owns the changed route. Do not guess script names. `pnpm validate:predeployment` coordinates the final static and production-server lifecycle assertions but does not replace account checks or editorial approval.

Lint status: Unavailable — ESLint is not installed

Do not install ESLint as part of an unrelated task. No formatting-check or dedicated automated accessibility command is currently registered.

## Deployment and rollback

Pushing GitHub `main` triggers Vercel's automatic Production deployment. A safe release is:

1. Confirm `git status --short` is clean and `git log -3 --oneline` shows the intended commit.
2. Confirm the intended task's validators, TypeScript, production build, diff review, and Definition of Done passed.
3. Push intentionally only with explicit authorization.
4. Wait until Vercel reports the deployment Ready and assigned to Production.
5. Prove identity: compare the deployed source commit/environment to the intended release and confirm non-Production environments cannot load the Production GA4 property.
6. Run a bounded production smoke covering the affected routes, canonical/H1/status, console, and changed integrations; run broader QA only when the change's risk requires it.
7. Roll back only for a real P0/P1 regression. Promote/recover the known-good Vercel Production deployment, prove the restored source identity, and rerun the critical smoke. Preserve the failed release evidence for diagnosis.

Do not hardcode temporary Vercel deployment IDs into durable instructions. Documentation-only local commits are not deployed until intentionally pushed. Never use a rollback to conceal incomplete validation or an account propagation delay.

## Manual post-deployment QA reconciliation

- Record date: 2026-09-03 (Asia/Amman)
- Production source: `4034574b55de9eed20c37589edfcbec307ba8bac`
- Tester: Codex repository/browser validation with site-owner-approved account actions
- Device/browser evidence: Task 37 Chromium at 1440×900, 1280×800, 390×844, and 320×568; Task 38 canonical Production browser/account checks (viewport was not retained in its checkpoint)
- Evidence owners: `docs/qa/task-37-predeployment-validation.md` for the complete local production-build/browser gate; `plan.md` Task 38 checkpoint and implementation record for canonical Production/account evidence

| Checklist area | Result | Durable evidence / remaining owner |
| --- | --- | --- |
| Deployment identity and 29 canonical routes | PASS | Task 37 proved the exact 29-route build/source matrix; the Task 39 verified baseline records 29/29 canonical Production routes passing with source `4034574`. No follow-up owner. |
| Source, metadata, canonical, language/query behavior | PASS | Task 37 all-route source/query audits; Task 38 production UTM/language/canonical verification. |
| Navigation, breadcrumbs, links, conversions | PASS | Task 37 crawl, relationship, keyboard, and shared conversion-path matrices. No runtime change followed. |
| Sitemap, robots, 404s, redirects | PASS | Task 37 exact lifecycle/status gate plus Task 38 Successful Search Console sitemap with 29 discovered URLs. |
| Search Console indexing | PARTIAL / propagation | Homepage was indexed; sampled newer interior routes were unknown to Google. Indexing may lag and is not promised. Future inspection/request actions belong to the site owner/operator. |
| Structured data and business facts | PASS | Task 37 full graph audit; Task 38 representative Rich Results and Schema.org live checks. Optional unsupported address/image fields remain intentionally omitted. |
| Content, city, review, media, and Blog accuracy | PASS | Task 37 focused validator matrix and editorial-regression record; article research briefs and editorial gates remain authoritative. |
| Forms, Resend, GA4, privacy, and attribution | PASS | Task 38 Realtime received all five events; the single approved test yielded one provider-confirmed Delivered email and one deduplicated, PII-free `generate_lead`. `generate_lead` is the sole governed Key Event. |
| Responsive, accessibility, and performance | PASS with recorded limitations | Task 37 covered 35 browser visits across required/risk-based viewports, keyboard/reduced-motion/manual accessibility, and bounded performance. Dedicated automated accessibility scanner and reliable local INP were unavailable. |
| GBP Website UTM | PENDING — client-managed | Approved exact URL is recorded above. Client must complete and independently confirm the profile edit and later attribution; no repository or GBP mutation occurred in Task 39. |

This reconciliation maps the reusable `plan.md` Manual Post-Deployment QA checklist to existing evidence; it does not convert every checkbox into a timeless pass. Repeat affected sections after a future deployment or material account/configuration change. No additional real lead was submitted for Task 39.

## Phase 1 closure record

Task 39 changed documentation and its focused validation contract only. It did not change application/runtime behavior, public lifecycle, analytics semantics, production configuration, external accounts, or deployment state. Therefore the Task 37 TypeScript/build/full browser evidence and Task 38 same-day Production/account evidence remain applicable; another 29-route matrix, production smoke, and real lead were not rerun.

No cleanup deletion was necessary. The worktree began clean, no current-task generated QA artifact existed, Task 37 records that no screenshots/traces/browser dumps/temp files were retained, and no unused implementation file was proven safe to remove.

Tasks 1–39 are complete and Phase 1 rollout is closed after the Task 39 local commit. No future expansion was started. The only separately pending external action is the client-managed GBP Website URL change above.
