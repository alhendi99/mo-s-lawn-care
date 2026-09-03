# Task 37 predeployment validation

## Environment / commit

- Date: 2026-09-03 (Asia/Amman).
- Baseline: clean `962cb25` (`fix(seo): harden structured data graphs`).
- Tested output: Next.js 16.3.0 production build on Node.js 22.22.0, served at `127.0.0.1:3000` from the final Task 37 worktree. The replacement build was required only after the Contact heading defect changed compiled output.
- Scope: repository/local production validation only. No deployment or external-account action occurred.

## Command matrix

| Check | Status | Evidence / limitation |
| --- | --- | --- |
| 37 registered `validate:*` scripts | PASS | Initial batch: 36 pass, one stale Task 35 lifecycle assertion; targeted repair and rerun produced 37 effective passes. |
| `pnpm validate:predeployment` | PASS | Static and final production-server modes. |
| `pnpm exec tsc --noEmit --incremental false` | PASS | Final source passes. |
| `pnpm build` | PASS | Initial build passed; one justified replacement build passed after the real Contact heading fix. |
| `pnpm lint` | UNAVAILABLE | Unavailable — ESLint is not installed |
| Formatting check | UNAVAILABLE | No repository formatting/check command is registered. |
| Dedicated automated accessibility scanner | UNAVAILABLE | No axe, pa11y, Lighthouse or equivalent dependency is installed; none was added. |
| Production/account checks | DEFERRED | Requires authorized deployment / Task 38 or post-deployment QA. |

## Deterministic validators

The complete registered matrix contains 37 validators. The only initial failure was a test/harness defect: `validate:internal-links` still expected Task 36 to be not started. Its lifecycle assertion now matches the completed Task 36 baseline. The new focused gate coordinates final lifecycle, family, sitemap/robots, forbidden-route, Task 34 media-bound and Task 38-isolation invariants without duplicating the Task 35 graph or Task 36 schema crawlers.

## 29-route source/head audit

The final production build returned 29/29 canonical routes as direct HTTP 200 responses. Totals: title mismatches 0; description mismatches 0; H1-count/value mismatches 0; canonical mismatches 0; noindex/nofollow problems 0; missing initial rendered main/core content 0; meta-keywords occurrences 0; missing/invalid JSON-LD graphs 0; missing interior breadcrumbs 0. Primary content, head values, links and one parsable graph were present in initial HTML.

## Query/canonical audit

All 29 routes also passed `?lang=es&utm_source=task37&utm_medium=test`: direct 200, governed English SEO head, query-free production canonical, no hreflang/Spanish canonical and unchanged ownership. Homepage, Contact and Aeration also passed arbitrary `service`, `city` and `form_id` query context. Browser switching changed only `lang`, preserved both UTM values and did not change the canonical.

## Sitemap / robots

PASS — `/sitemap.xml` contains exactly the 29 lifecycle-derived HTTPS canonicals, in governed order, with no query, fragment, API/utility/404/draft URL or synthetic `lastmod`. `/robots.txt` allows public crawling and points to the production sitemap; no broad disallow/noindex misuse exists.

## 404 / redirect behavior

PASS — eight representative unknown/service/city/article/forbidden/tag/author/alias paths return true HTTP 404, expose the branded recovery UI, have no valid-page canonical and do not redirect home. Four local trailing-slash family checks normalize in one 307/308 hop to the non-trailing canonical and then return 200 with no chain. Deployed-host/Vercel normalization remains DEFERRED.

## Link graph

PASS — the final rendered Task 35 crawl reports 29 routes, 2,113 anchor instances, 661 unique canonical edges, 304 main-content edges, zero orphans, maximum depth 2 and zero invalid, draft, query-bearing or redirect-dependent links. The five service/article reciprocal sets and exact five-plus-five calendar cluster directions remain intact.

## Structured data

PASS — 29 scripts parse into 139 nodes and 83 unique IDs with the two intentionally shared central IDs. Counts remain Organization 29, WebSite 29, WebPage 22, CollectionPage 4, BreadcrumbList 28, ItemList 8, Service 10, AboutPage 1, ContactPage 1, Blog 1 and BlogPosting 6. Parse, forbidden type/property, ID conflict, dangling-reference, breadcrumb and ItemList parity failures are all zero. No LocalBusiness, address/geo, Review/AggregateRating, offer/price, unsupported author/date/image or FAQ creep exists.

## Content / ownership regression

PASS — Homepage remains the sole broad Des Moines owner; the four approved city pages remain the only city routes; no city/service permutations, Ground Clearance/Leaves Removal split owners or Spanish SEO routes exist. Completed service, city, review, media and article validators preserve capability/provenance restraint. The six article bodies and research briefs were unchanged; their existing Research, Differentiation, Editorial Quality, cannibalization, source and capability gates remain the regression evidence under `docs/blog-writing-guidance.md`.

## Forms / API

PASS — the one shared form and one `/api/estimate` endpoint were exercised at both Homepage and Contact placements. Each placement passed client-invalid focus/errors with zero requests, mocked provider-confirmed success with a double action producing one request and stable success, actionable 503 failure, network failure, malformed response and honeypot suppression. Status focus and accessible messaging passed. All 12 browser scenarios intercepted `/api/estimate`; no real provider request or email was sent. Static/pure tests also preserve in-flight and submission-ID lead dedupe, safe error mapping, native `tel:`/`mailto:` behavior and the no-PII parameter boundary.

## Analytics / privacy

PASS — the exact allowlist remains `generate_lead`, `form_start`, `form_submit_error`, `click_to_call`, `click_email`. Local production browsing emitted zero GA4/GTM requests. No raw arbitrary-event API exists; query strings, submission IDs, names, phone, email, free text, service/city/form values and other PII do not enter the analytics payload path. Expected browser console resource errors occurred only during deliberately intercepted 503/network scenarios; the final valid Contact route and every matrix audit route were console-clean.

## Accessibility

PASS — DOM/accessibility-tree and manual keyboard assertions covered one H1, visible logical headings, semantic breadcrumbs, named links/buttons, no nested controls, usable mobile control dimensions, skip-link focus and main-target focus, desktop/mobile service disclosures, Escape/focus return, gallery focus containment/return, keyboard before/after controls, review filters, accessible form errors/status, reduced motion, English/Spanish wrapping, zero page overflow and fixed-action/footer content clearance. A real Contact `H1 → H3` defect was fixed by rendering the shared form heading as H2 only on Contact and retaining H3 under the Homepage estimate H2. Dedicated automated accessibility scanner: Unavailable.

## Browser matrix

PASS — one persistent Chromium process covered all 13 representative page families at 1440×900 English and 390×844 Spanish; Homepage, Our Work, Reviews, Contact and Aeration at 1280×800; and Aeration, Ankeny, Contact and the calendar pillar at 320×568. That is 35 route/viewport visits. Homepage interactions covered poster/delayed video, reduced motion, Services, four-season panorama, property explorer, residential/commercial path, keyboard slider, gallery/lightbox, reviews, three Latest Tips, problem selector, estimate form and UTM-preserving language switching. Our Work passed 12→24 bounded loading, lightbox/focus and keyboard comparison; Reviews passed bounded initial delivery and keyboard filtering. Final valid-route consoles had zero warnings/errors.

## Media regression

PASS — the Homepage poster remains non-lazy with a responsive image preload; decorative video remains absent from the initial measurement window, mounts after the established delay and is omitted under reduced motion. Snow hero eager loading, below-fold lazy media and responsive `sizes` pass the Task 34 validator. Homepage remains eight curated records, Our Work remains 12 initial plus 12-item batches, modal media remains demand-driven, originals/provenance remain unchanged and all 68 governed remote media URLs responded successfully in the bounded pass.

## Task 34 performance comparison

Method matched Task 34: fresh production loopback, Chromium cache disabled, no throttle, `networkidle` plus 1.5 seconds, at 1280×800 and 390×844. A clean browser context installed one LCP/CLS observer. LCP is a variable local lab signal; INP was not reliably measurable and is UNAVAILABLE.

| Route / view | LCP / element | CLS | Total bytes (Task 34 → Task 37) | Image bytes | Video bytes / requests | Requests | JS bytes | Fonts / third party |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Homepage desktop | 148 ms / IMG | 0 | 463,739 → 464,186 | 5,060 | 0 / 0 | 24 | 304,939 | 2 / 0 |
| Homepage mobile | 76 ms / IMG | 0 | 460,881 → 461,328 | 2,202 | 0 / 0 | 24 | 304,939 | 2 / 0 |
| Our Work desktop | 68 ms / IMG | 0 | 581,519 → 582,019 | 133,570 | 0 / 0 | 26 | 310,321 | 2 / 0 |
| Our Work mobile | 44 ms / IMG | 0 | 525,173 → 525,673 | 77,224 | 0 / 0 | 26 | 310,321 | 2 / 0 |
| Snow desktop | 72 ms / IMG | 0 | 486,258 → 486,862 | 42,188 | 0 / 0 | 25 | 305,651 | 2 / 0 |
| Snow mobile | 72 ms / IMG | 0 | 475,580 → 476,184 | 31,510 | 0 / 0 | 25 | 305,651 | 2 / 0 |
| Landscaping desktop | 72 ms / IMG | 0 | 545,631 → 546,282 | 99,994 | 0 / 0 | 25 | 305,651 | 2 / 0 |
| Landscaping mobile | 84 ms / IMG | 0 | 518,433 → 519,084 | 72,796 | 0 / 0 | 25 | 305,651 | 2 / 0 |

The comparable total deltas are only 447–651 bytes; image bytes and request counts are unchanged, JS differs by about 630 bytes, CLS remains zero, and no structural or repeatable regression exists.

Additional family samples all had CLS 0, zero video/third-party requests and two font requests: Ankeny 442,772 bytes / 72 ms desktop and 64 ms mobile; Contact 479,848 bytes / 68 and 76 ms; Blog 442,911 bytes / 56 and 64 ms; calendar article 446,772 bytes / 68 and 68 ms. Their request counts were 24 except Contact at 25; JS was 305,651 bytes except Contact at 308,208.

## External reachability

PASS with recorded restriction — 88 deduplicated authoritative-source, Google profile and remote-media URLs were checked. 86 returned direct successful automated responses. Two Metro Waste Authority URLs returned 403 to Node/curl automation but were independently fetched successfully as current pages through a web reader; they are automated-client restrictions, not broken citations. No remote media was copied or rehosted.

## Deferred production/account checks

DEFERRED — requires authorized deployment / Task 38 or post-deployment QA: Search Console URL Inspection/sitemap submission/indexing; deployed-host redirect and selected-canonical behavior; live Schema.org/Google Rich Results validation; real GA4 DebugView/Realtime and production tag/consent verification; GA4 Admin key-event/custom-dimension/acquisition actions; Google Business Profile UTM update; production safe test lead; production environment identity and any other account-only checks.

## Final blockers / limitations

No critical local product blocker remains. Local LCP is too fast/noisy to represent field performance; INP and production-only/account behavior are unavailable or deferred as classified above. No screenshots, traces, browser dumps, performance temp files, PII or secrets are retained.
