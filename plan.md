# Mo's Lawn Care SEO Architecture and Incremental Implementation Plan

> Phase 1 planning document and incremental implementation record.

## Document Status

- Phase: Incremental implementation — Tasks 1–36 complete; Task 37 is next
- Planning status: Complete — Phase 1 gate passed
- Implementation status: Tasks 1–36 completed; Task 37 and later remain not started until explicitly authorized. All six initial Blog articles are published, and the lifecycle-derived sitemap contains exactly 29 canonical URLs.
- Task 1 data status: owner-confirmed hours, Service Area Business policy, Google Business Profile, review display copy, and external-profile policy incorporated
- Last checkpoint: 2026-09-03 (Asia/Amman)
- Task 2 repository baseline: clean `main` at `4b944bc`
- Task 3 repository baseline: clean `main` at `e24e7af`
- Task 4 repository baseline: clean `main` at `abfe88d`
- Task 5 repository baseline: clean `main` at `7f14caa`
- Task 6 repository baseline: clean `main` at `710128d`
- Task 7 repository baseline: clean `main` at `649656b`
- Task 8 repository baseline: clean `main` at `16c96dd`
- Task 9 repository baseline: clean `main` at `b97f138`
- Task 10 repository baseline: clean `main` at `20337d3`
- Task 11 repository baseline: clean `main` at `205329c`
- Task 12 repository baseline: clean `main` at `27ea531`
- Task 13 repository baseline: clean `main` at `4c3b2fe`
- Task 14 repository baseline: clean `main` at `4c0dfcb`
- Task 15 repository baseline: clean `main` at `aeee077`
- Task 16 repository baseline: clean `main` at `158ded7`
- Task 17 repository baseline: clean `main` at `158ded7`
- Task 18 repository baseline: clean `main` at `b8bda37`
- Task 19 repository baseline: clean `main` at `feebb9d` (guidance-only commit above product baseline `bcff35b`)
- Task 20 repository baseline: clean `main` at `33ca36d`
- Task 21 repository baseline: clean `main` at `fd781f6`
- Task 22 repository baseline: clean `main` at `35710af`
- Task 23 repository baseline: clean `main` at `b285461`
- Task 24 repository baseline: clean `main` at `a88cf9a`; finalization resumed from WIP checkpoint `80779ff`
- Task 25 repository baseline: clean `main` at `3050e5b`
- Task 26 repository baseline: clean `main` at `247de1d`
- Task 27 repository baseline: clean `main` at `852f9ed`
- Task 28 repository baseline: clean `main` at `9320da0` (guidance-only commit above product baseline `b807d05`)
- Task 29 repository baseline: clean `main` at `9f05475`
- Task 32 repository baseline: clean `main` at `7e1d579` (seasonal-priority documentation commit above product baseline `e88a81f`)
- Task 30 repository baseline: clean `main` at `929c2f1`
- Task 31 repository baseline: clean `main` at `5327b2f`
- Task 33 repository baseline: clean `main` at `938966b`; finalization resumed from the preserved Task 33 WIP worktree
- Task 34 repository baseline: clean `main` at `75f7cb3`
- Task 35 repository baseline: clean `main` at `c92a3a4`
- Task 36 repository baseline: clean `main` at `ee6b286`
- Preservation boundary: preserve all existing user work; do not deploy, modify production/accounts, or begin Task 37 until explicitly authorized

## Evidence Labels

- **Verified:** directly confirmed in repository files, git state, or a read-only command.
- **Assumption:** a provisional design choice that must be validated during implementation.
- **Missing:** not present in the inspected repository.
- **Owner confirmation required:** business or account information that cannot be safely inferred from code.
- **Manual external action:** requires production, Google, Vercel, or other account access and is not a repository-only change.

## Live Checkpoint

### Latest checkpoint — Task 36 complete, 2026-09-03 (Asia/Amman)

- **Authorized scope and baseline:** Task 36 only began from clean `ee6b286`; Tasks 1–35 were preserved. No route, redirect, lifecycle, ownership, visible article/review/media content, internal-link graph, analytics event, deployment or external account changed, and Task 37 remains not started.
- **Architecture and minimal correction:** all 29 pages retain one coherent graph from the shared typed builders and the same visible collection/breadcrumb records. The only real graph defects were non-semantic query parameters in the approved Google profile `sameAs` value and one article citation; JSON-LD now emits their verified clean resource URLs while visible links/content remain unchanged. Stable central, page, service, article, breadcrumb and ItemList IDs remain canonical-derived and collision-free.
- **Truth/restraint result:** the route-family page types remain intentionally distinct. The complete audit finds zero LocalBusiness, address/geo/branch, Review/AggregateRating, Offer/Product/price, unsupported author/date/image, FAQPage or ImageObject creep. The five approved service areas, central Organization/WebSite identities, 10 Service nodes, eight ItemLists and 28 interior breadcrumbs pass exact governed parity.
- **Final rendered result and limitation:** `docs/seo/task-36-structured-data-audit.md` records 29 routes, 29 JSON-LD scripts, 139 nodes, 83 unique IDs, two intentionally repeated central IDs and exact node-type counts, with zero parse, forbidden-field/type, conflicting-ID, dangling-reference, query-URL, breadcrumb or ItemList failures. External Schema.org/Google validation is `Deferred — requires authorized deployed URL / post-deployment validation.`
- **Validation:** the focused validator passes statically and against the reused single production build; directly affected validators and the one complete Tasks 1–35 regression matrix pass. TypeScript, production build, all-29 rendered source/parity checks, nine-family 1280×800 browser smoke and diff checks pass. `Unavailable — ESLint is not installed`. Sitemap remains 29, the exact five-event analytics allowlist is unchanged, Task 34/35 contracts remain intact, and Task 37 remains `[ ]` Not started.

### Previous checkpoint — Task 35 complete, 2026-09-03 (Asia/Amman)

- **Authorized scope and baseline:** Task 35 only began from clean `c92a3a4`; Tasks 1–34 were preserved. No route lifecycle, canonical-owner, sitemap, redirect, schema, analytics, media, deployment or external-account change occurred, and Task 36 remains not started.
- **Graph method and baseline:** `docs/seo/task-35-internal-link-audit.md` combines the canonical route registry, published Blog selector, typed relationships and crawlable production-rendered anchors. The reused clean baseline build contained 29 HTTP-200 routes, 2,108 internal anchor instances, 656 unique canonical edges, 299 main-content edges, zero orphans, maximum depth 2 and zero invalid, draft, query-bearing or redirect-dependent links. Only the five reserved service-to-article reverse edges were missing from the Section E semantic matrix.
- **Minimal implementation and intent safety:** one optional typed `helpfulResources` field and one server-rendered shared section add Lawn Mowing → mowing-frequency; Aeration & Seeding → aeration and overseeding; Spring Cleanup → spring checklist; and Fall Cleanup & Leaf Removal → fall leaf guide. All five articles retain the reverse service links. Copy remains short, bilingual and informationally framed without importing timing models, checklists, municipal instructions or business schedule/capability claims. Commercial, informational, hub, city and pillar/child ownership remain distinct; anchors are natural and clean.
- **Final graph and cluster result:** the final build contains 2,113 internal anchor instances, 661 unique canonical edges and 304 main-content edges. All 29 routes remain reachable from `/`, published orphan count is zero and maximum shortest-path depth is 2. The exact calendar pillar → five children and five children → pillar directions remain intact. Global navigation/footer, breadcrumbs, Service Areas/approved-city graph, Homepage-owned Des Moines path and all non-article service relationships pass. Sitemap remains exactly 29 canonical URLs.
- **QA and validation:** `pnpm validate:internal-links`, all 34 historical validators, TypeScript, the single final production build, all-29 rendered graph/href/source checks, sitemap-source validation and diff checks pass. Browser QA at 1440×900 and 390×844 covers the Homepage/global chrome, representative services, one city, one child article and the calendar pillar; all four changed service sections also pass Spanish wrapping at 320×568. Focus, crawlable links, clean hrefs, language/UTM behavior, mobile Escape/focus return, one H1, no nested controls, zero overflow and zero final console warnings/errors pass. `Unavailable — ESLint is not installed`. Task 35 is complete; Task 36 remains `[ ]` Not started.

### Previous checkpoint — Task 34 complete, 2026-09-03 (Asia/Amman)

- **Authorized scope and baseline:** Task 34 only began from clean `75f7cb3`; Tasks 1–33 were preserved. No route lifecycle, deployment, external-account, metadata-owner, analytics or schema-expansion work occurred, and Task 35 remains not started.
- **Measured baseline:** `docs/performance/task-34-media-performance.md` records the production-loopback Chromium method at `1280×800` and `390×844` for `/`, `/our-work`, Snow Removal and Landscaping. Baseline `public/` contained 43 non-`.DS_Store` files totaling 28,856,819 bytes; the governed registry contained 92 records, 89 displayable records, 68 remote and 24 local sources, three exclusions, six comparisons, and bounded 8/12/12 gallery delivery. Eighteen filename/signature mismatches were identified.
- **Remote/provenance result:** one bounded pass found all 68 unique Google-hosted URLs reachable as HTTP 200 JPEGs with governed dimensions retained. Rights/provenance for local reproduction remains unestablished, so nothing remote was copied, rehosted, replaced or deleted. Verified city remains null, service tags remain empty, authorship/service/city remain unverified, and no customer/project/result attribution was added. The active property alt now describes observable scene content in English and Spanish without inferring property type or location.
- **Local optimization:** seven active WebP derivatives preserve original dimensions/crops and reduce their active source bytes from 14,516,660 to 1,671,048 (12,845,612 bytes / 88.5%). Source/derivative visual review passed for the poster, Summer/Winter property scenes, embedded-overlay gallery image and comparison pairs. All originals remain, so the full recoverable `public/` directory is 30,527,867 bytes; no unused derivative remains.
- **Hero, responsive and gallery result:** the priority/non-lazy poster continues to own first paint; the decorative video now mounts 2.5 seconds after hydration with metadata preload, still autoplays muted/looping/inline, and remains absent for reduced motion. This removes 2,650,809 encoded video bytes and two requests from the defined initial window, reducing Homepage total from 3,114,106 to 463,739 desktop and 3,111,234 to 460,881 mobile while CLS remains zero. Snow's hero changed from lazy to eager. Gallery/lightbox/property/article `sizes` now reflect capped layout slots; cards/comparisons remain lazy, the modal remains demand-driven, and 8-item Homepage / 12-item Our Work / 12-item later-batch contracts remain intact.
- **QA, limitations and validation:** four-viewport production QA passed hero/poster/video, property image, gallery/lightbox, comparison alignment, Load More, keyboard slider, modal focus/Escape/return, reduced motion, Spanish alt, canonical/H1, zero overflow and zero final console warnings/errors. LCP timing varied in the fast loopback lab and INP was not reliably measurable, so neither is overstated. The focused Task 34 validator, directly affected validators, the one complete historical regression matrix, TypeScript, final production build, 29-URL sitemap/source checks and diff checks pass. `Unavailable — ESLint is not installed` remains the exact lint status. Task 34 is complete; Task 35 remains `[ ]` Not started.

### Previous checkpoint — Task 33 complete, 2026-09-02 (Asia/Amman)

- **Authorized scope and baseline:** Task 33 only resumed from its preserved WIP worktree above clean `938966b`; completed Tasks 1–32 were preserved, no deployment or external-account action occurred, and Task 34 remains not started.
- **Exact ownership and intent:** `/blog/central-iowa-lawn-care-calendar` owns informational `central iowa lawn care calendar` with title `Central Iowa Lawn Care Calendar | Mo's Lawn Care`, H1 `A Seasonal Lawn Care Calendar for Central Iowa`, the exact supplied description, three reviewed secondary keywords and a query-free canonical.
- **Research and editorial result:** `docs/research/task-33-central-iowa-calendar-brief.md` records five reopened Iowa State University Extension sources, reciprocal claim/source mapping, current secondary-intent review, child-overlap analysis and every mandatory gate. The pillar uses five observable seasonal signals to orient readers without duplicating the five detailed guides, manufacturing freshness or publishing a rigid twelve-month schedule.
- **Cluster and capability boundaries:** the pillar links all five child guides, and each child links back, producing ten verified public directions. Four canonical service owners are linked only for approved high-level scope; the article explicitly is not Mo's annual service calendar and claims no package, subscription, automatic sequence, availability, product, chemical program, equipment, diagnosis or result.
- **Schema, lifecycle and restraint:** one BlogPosting, WebPage and BreadcrumbList reuse central Organization/WebSite references and expose five Iowa State citations with Home → Blog → exact H1 parity. Author, dates, image, FAQ, Review, AggregateRating, LocalBusiness, address, geo and Offer remain absent. The sole publication selector now returns six articles, the Blog ItemList contains six items, Homepage Latest Tips remains the first three selector results, and the sitemap contains exactly 29 canonical URLs.
- **Language, accessibility and production QA:** explicit Spanish translations preserve conditional and non-commercial boundaries. Production checks passed six article 200s, exact plain/Spanish/UTM/arbitrary-query head and schema behavior, ten reciprocal link directions, source/service links, Blog hub ordering and sitemap parity. Browser QA at `1440×900`, `1280×800`, `390×844` and `320×568` passed English/Spanish, complete UTM preservation, stable canonical/title, one H1, breadcrumb, responsive table containment, reduced motion, skip focus, mobile Escape/focus return, zero page overflow/clipping, fixed-action/footer separation and zero console warnings/errors.
- **Validation and status:** the focused Task 33 validator, Tasks 28–32/Blog contracts, canonical service validators, the complete established historical matrix, TypeScript, production build, production source QA and diff checks pass. `Unavailable — ESLint is not installed` remains the exact lint status. All five Task 33 Definition of Done checks and the Research, Differentiation, Pillar Value, Child Ownership, Anti-Duplication, Bidirectional Link, Service Capability, Cannibalization, Spanish parity, anti-slop and Editorial Quality gates pass. Tasks 1–33 are complete; Task 34 remains `[ ]` Not started.

### Previous checkpoint — Task 31 complete, 2026-09-02 (Asia/Amman)

- **Authorized scope and baseline:** Task 31 only began from clean `5327b2f`, preserving completed Tasks 28–30 and 32. Task 33+ remains not started; no deployment or external-account action occurred.
- **Exact ownership and intent:** `/blog/spring-lawn-cleanup-des-moines` owns informational `spring lawn cleanup checklist des moines` with the exact title, H1, description and query-free canonical. Current same-intent review retained `spring yard cleanup checklist Des Moines`, `spring lawn care checklist Des Moines` and `spring lawn cleanup tips Iowa` without volume, difficulty, density or opportunity claims. The canonical Spring Cleanup service retains commercial `spring cleanup des moines ia` intent.
- **Research and claim ledger:** `docs/research/task-31-spring-cleanup-brief.md` records six re-opened authoritative sources and eleven reciprocal claim groups covering post-snow lawn debris, bed-only wet-soil restraint, emerging foliage, overwintering-insect uncertainty, cautious patch observation, growth-led mowing, separate aeration/seeding decisions and municipality-specific disposal verification. Generic dethatching/rolling, chemical/fertilizer programs, broad pruning/mulch/irrigation/gutter work, rigid dates, current conditions and unverified service inclusions were removed or softened.
- **Decision model and differentiation:** the reader sorts each property area into clear, observe, wait or decide separately; then observes a patch before repair, routes mowing/aeration/seeding to their existing owners, verifies exact municipal jurisdiction and confirms service scope. This differs from Task 28's factor table/ordered test, Task 29's three readiness questions, Task 30's numerical height relationship and Task 32's leaf-cover/pass-result/jurisdiction table. Research, Differentiation, Tasks 28/29/30/32 Anti-Repetition, Municipal/Jurisdiction, Service Capability, Cannibalization and Editorial Quality gates pass.
- **Municipal and capability boundary:** the live Metro Waste Authority Des Moines resource supplies only a current verification path for properties within the City of Des Moines. All 2026 dates, fees, bags/carts/stickers, event rules and resident/drop-off operations are omitted; City guidance is not generalized to Ankeny, Waukee, Norwalk or Altoona. The article explicitly states property checklist ≠ Mo's service checklist and claims no raking, bagging, hauling, disposal, mowing, aeration, seeding, pruning, bed work, treatment, equipment, schedule or result.
- **Ahead-of-season/editorial restraint:** the public guide is evergreen and contains no September 2026 framing, current weather, “spring is here,” “this spring,” spring 2027, fake urgency or artificial freshness. A direct answer, six evidence-driven checklist statuses, four decision sections and one restrained commercial transition remain after compression. No forced FAQ, arbitrary word count, generic benefits/mistakes, author, publication/modification date or image was added.
- **Language, accessibility and browser QA:** explicit Spanish copy preserves conditional language, bed-only wet-soil scope, cool-season aeration scope, City-only jurisdiction, annual-detail omission and the checklist/service distinction. Fresh production QA at `1440×900`, `1280×800`, `390×844` and `320×568` passed English/Spanish, UTM preservation, active Blog state, breadcrumb/H1/TOC, skip and target focus, mobile Escape/focus return, reduced motion, checklist/source wrapping, zero overflow, fixed-action/footer clearance and zero console warnings/errors.
- **Schema, lifecycle and analytics:** one BlogPosting, WebPage and BreadcrumbList reuse central Organization/WebSite references and expose six citations with Home → Blog → exact H1 parity. Author, dates, image, FAQ, Review, AggregateRating, LocalBusiness, address, geo and Offer remain absent. `getPublishedArticles()` is still the only gate and now returns exactly Tasks 28–32 in registry order; the Blog hub/ItemList contains five items, the sitemap contains 28 canonical URLs, Homepage Latest Tips remains the first three selector results, and Task 33 remains a branded non-redirecting 404. The exact five-event analytics allowlist is unchanged.
- **Validation status:** focused Task 31, Spring Cleanup service, Tasks 28–30/32 and Blog contracts, complete established focused/shared regressions, TypeScript, production build, production source/status/query/schema/sitemap checks and diff checks pass. `Unavailable — ESLint is not installed` remains the exact lint status.
- **Task status and next boundary:** Task 31 is `[x]` Completed because all five Definition of Done checks and every expanded evidence, editorial, ownership, lifecycle, accessibility and regression gate pass. Tasks 1–32 are complete. Task 33 is next and remains `[ ]` Not started.

### Previous checkpoint — Task 30 complete, 2026-09-02 (Asia/Amman)

- **Authorized scope and baseline:** Task 30 only began from clean `929c2f1`, preserving completed Tasks 28, 29 and 32. Task 31 and Task 33+ remain not started; no deployment or external-account action occurred.
- **Exact ownership and secondary intent:** `/blog/how-often-to-mow-lawn-iowa` owns informational `how often to mow lawn in iowa` with the exact title, H1, description and query-free canonical. Current same-intent review retained `how often should I mow my lawn in Iowa`, `mowing frequency Iowa` and `how often to cut grass in Iowa`, without volume, density or opportunity claims.
- **Research and claim ledger:** six reopened Iowa State University Extension and Outreach resources support eight reciprocal claim groups covering growth/height frequency, the one-third removal relationship, a conditional 3 → 4½-inch example, bluegrass summer-height scope, changing cool-season growth, dormant-turf pause, dry/cooler mowing opportunity and the fall growth endpoint. The 2026-09-02 brief records source dates, geographic/turf scope, freshness checks and conflicts. Rigid schedules, universal heights, unscoped species advice, color-only dormancy diagnosis, wet-grass pathology, clipping/equipment guidance and stale 2010 interval advice were removed or softened.
- **Decision model and differentiation:** the reader selects an evidence-appropriate finished height, observes standing growth and uses the one-third relationship to decide whether another cut is due. Growth changes the gap; rain/dew can delay a due cut; dormancy removes active mowing demand; a missed cut does not relax the removal limit. This connected numerical/observation explanation is distinct from Task 28's factor table, Task 29's readiness checklist and Task 32's leaf/jurisdiction model. Research, Differentiation, Tasks 28/29/32 Anti-Repetition, Cannibalization and Editorial Quality gates pass.
- **Municipal/legal decision:** no municipal/legal detail was necessary for mowing-frequency intent and none was published. The drought-source title is not used to claim an actual local restriction. Current weather, September 2026 conditions and legal-height rules are absent.
- **Capability and cluster boundaries:** Iowa State guidance establishes lawn-care principles only. Mo's capability remains the canonical high-level residential/commercial Lawn Mowing offering and estimate path; the article claims no weekly/biweekly program, operating height, clipping policy, edging/blowing, equipment, drought/wet policy, fixed availability or result. Task 33 retains the annual calendar; Task 32 retains leaf management.
- **Editorial, author/date/image:** the direct answer appears first; three decision-led H2s, no table/checklist/FAQ, no generic benefits/mistakes/conclusion, no artificial word count, one restrained service transition and the inherited Contact CTA remain after compression. No approved author, publication/modification date or verified image exists, so all are omitted.
- **Language, links and accessibility:** explicit Spanish copy preserves species scope, all three inch values, the one-third limit, conditional stress, dormancy, dry-grass and possible-midday-stress wording. Public paths include Blog through the breadcrumb, Lawn Mowing in body/Related Reading, Contact through the restrained CTA and six visible Iowa State sources; no unpublished article link renders. The mobile menu now exposes the same route-aware active Blog state as desktop on article children.
- **Schema and analytics:** central Organization/WebSite references, one WebPage, one BreadcrumbList with Home → Blog → exact H1 parity, and one BlogPosting with six citations render. Author, dates, image, FAQ, Review, AggregateRating, LocalBusiness, address, geo and Offer remain absent. The exact five-event analytics allowlist is unchanged; no article, source, keyword, query or frequency value enters analytics.
- **Publication and isolation:** `getPublishedArticles()` remains the sole gate and returns exactly Tasks 28, 29, 30 and 32. Static params, Blog hub, four-item ItemList and 27-URL sitemap follow that selector; Homepage Latest Tips remains selector-driven and displays the first three published guides. Task 31 and Task 33 remain planned, branded non-redirecting 404s and absent from cards, static params, sitemap and public related links.
- **Production and browser QA:** production source checks passed four article 200s, two future 404s, exact title/meta/canonical/robots/one-H1 under plain, Spanish, UTM and arbitrary queries, server body, six Sources, Lawn Mowing link, graph parity, hub/ItemList/Homepage behavior and exact sitemap. Fresh `1440×900`, `1280×800`, `390×844` and `320×568` contexts passed English/Spanish, UTM preservation, exact H1/numeric/conditional parity, Blog current state, breadcrumb, six sources, TOC/skip focus, mobile Escape/focus return, reduced motion, zero overflow/clipping, H1/source wrapping, fixed-action/footer clearance and clean consoles.
- **Validation status:** the focused Task 30 validator, Lawn Mowing, Tasks 28/29/32/Blog, every established Task 7–29 focused validator, shared Services/content/SEO/navigation/analytics/Homepage validators, TypeScript, production build and diff check pass. `Unavailable — ESLint is not installed` remains the exact lint status.
- **Task status and next boundary:** Task 30 is `[x]` Completed because every evidence, differentiation, ownership, service-boundary, schema, lifecycle, accessibility and exact Definition of Done gate passes. Task 31 is next by the approved seasonal sequence and remains `[ ]` Not started.

### Previous checkpoint — Task 32 complete, 2026-09-01 (Asia/Amman)

- **Authorized seasonal scope:** Task 32 only — research, review and publication of `/blog/fall-leaf-cleanup-des-moines` ahead of Tasks 30–31 under the approved September 2026 sequence. Work began from clean `7e1d579`, preserving the seasonal-priority documentation commit above product baseline `e88a81f`. Tasks 30–31 and Task 33+ remain `[ ]` Not started.
- **Exact ownership:** the article owns informational `fall leaf cleanup tips des moines` with exact title `Fall Leaf Cleanup Tips for Des Moines Properties | Mo's`, H1 `Fall Leaf Cleanup Tips for Des Moines Properties`, supplied description and query-free canonical. Current same-intent research retained `when to remove leaves from lawn`, `how to manage leaves on lawn` and `Des Moines yard waste leaves` without search-volume or density claims.
- **Research and evidence:** Iowa State University Extension's `Do I need to remove the leaves on my lawn?` FAQ (updated October 10, 2025), the City of Des Moines Public Works 2026 SCRUB calendar, Metro Waste Authority's February 2, 2026 yard-waste notice and current Des Moines collection reference were opened and reverified on 2026-09-01. Seven publishable claim groups cover visible leaf-cover threshold, turf light/food context, thin/dry mowing-in-place conditions, visible result and repeated-pass logic, current 2026 City program scope, the annual City-resident SCRUB resource and the City-versus-metro boundary. The inaccessible general City Yard Waste page was removed rather than used as evidence.
- **Jurisdiction and freshness:** the year-round collection statement is visibly limited to the City of Des Moines and labeled as current 2026 program information. SCRUB is visibly a dated 2026 City-resident program, not an evergreen rule. Ankeny, Waukee, Norwalk and Altoona receive no Des Moines rule; exact bags, prices, setout details, fixed dates and other-city programs were omitted in favor of current official verification.
- **Differentiation and editorial gates:** Research, Differentiation, Tasks 28–29 Anti-Repetition, Jurisdiction, Cannibalization and Editorial Quality gates pass. The article uses a visible-cover trigger, a result check after each pass and a jurisdiction table rather than a generic tips list, Task 28's aeration factor framework or Task 29's establishment-readiness structure. Compression removed scenic fall copy, fixed dates/frequency, generic benefits, broad how-to instructions, repeated disposal warnings, forced FAQ, “why hire” filler and recap padding.
- **Capability and cluster boundaries:** Iowa State and municipal guidance remains separate from Mo's business evidence. The article links to the canonical Fall Cleanup & Leaf Removal service only for its approved high-level commercial offering and explicitly publishes no Mo's bagging, curb placement, hauling, disposal, equipment, checklist, schedule or turnaround claim. Yard Cleanup retains broad non-seasonal intent; Task 31 retains spring-checklist intent; Task 33 retains the year-round calendar.
- **Author, date and image decisions:** author, `datePublished`, `dateModified` and image are omitted. No approved public author or real publication-date policy was established, and no verified article image was available.
- **Language and accessibility:** explicit Spanish translations preserve City-only, 2026-program, annual-SCRUB and service-scope qualifications. Source jurisdiction/freshness scopes now use the shared translation layer. A narrow Spanish H1 overflow found at 320px was corrected with resilient article-heading wrapping. TOC and skip focus, mobile Escape/focus return, reduced motion, table containment, zero overflow, unclipped H1/source scopes and fixed-action/footer clearance pass.
- **Schema, links and analytics:** the route emits central Organization/WebSite references, one WebPage, one BreadcrumbList with Home → Blog → Fall Leaf Cleanup Tips for Des Moines Properties parity, and one BlogPosting with source citations. It omits author, public dates, image, FAQ, Review, AggregateRating, LocalBusiness, address, geo and Offer. Public links include Blog, Fall Cleanup & Leaf Removal, Contact and the verified sources; no unpublished article link renders. The exact five-event analytics allowlist remains unchanged.
- **Publication and isolation:** `getPublishedArticles()` returns exactly Tasks 28, 29 and 32 and remains the sole publication gate for static params/rendering, Blog hub, three-item Blog ItemList, Homepage Latest Tips and sitemap. Those three article routes return 200. Tasks 30, 31 and 33 remain branded non-redirecting 404s and absent from public selectors and sitemap. Sitemap contains exactly twenty-six canonical URLs.
- **QA and regression:** production source checks passed exact metadata/canonical under plain, Spanish, UTM and arbitrary queries, one H1, visible sources/links, truthful schema and future-route isolation. Fresh `1440×900`, `1280×800`, `390×844` and `320×568` browser QA passed English/Spanish, UTM preservation, Blog active state, breadcrumb, source/jurisdiction copy, TOC/skip focus, mobile focus return, reduced motion, responsive table, zero overflow, footer/fixed-action clearance and clean console. The Task 32 validator, Fall service, Tasks 28–29/Blog contracts, complete Tasks 7–29 regression matrix, shared validators, TypeScript, production build and diff check pass.
- **Unavailable check:** `Unavailable — ESLint is not installed`. No lint dependency or configuration was added.
- **Task status:** Task 32 is `[x]` Completed because all evidence, jurisdiction, differentiation, editorial, ownership, schema, lifecycle, accessibility and regression gates pass without fabricated business facts or temporary freshness theater.
- **Exact next action:** commit as `feat(seo): add Des Moines fall leaf cleanup article`, verify a clean worktree and STOP. Task 30 is next by approved seasonal order but remains not started.

### Previous checkpoint — Task 29 complete, 2026-09-01 (Asia/Amman)

- **Authorized scope:** Task 29 only — research, review and publication of `/blog/best-time-to-overseed-lawn-iowa`. Work began from the required clean `9f05475` Task 28 baseline. Task 30 and all later article/media work remain unauthorized and `[ ]` Not started.
- **Exact ownership:** the article owns `best time to overseed lawn in iowa` with exact title `Best Time to Overseed a Lawn in Iowa | Mo's Lawn Care`, H1 `What Is the Best Time to Overseed a Lawn in Iowa?`, supplied description and query-free canonical. Current same-intent research retained `when to overseed lawn in Iowa`, `overseed lawn in fall Iowa` and `Iowa lawn overseeding timing` without search-volume or density claims.
- **Research and claim ledger:** Iowa State University Extension and Outreach is the sole factual authority: `Overseeding a Lawn`, `Late Summer and Fall Lawn Care` (both last reviewed August 2024) and `How should I water a newly seeded lawn?` (updated June 9, 2026), all opened and reverified on 2026-09-01. Seven published claim groups cover the mid-August-through-mid-September general window, seasonal establishment context, seed-to-soil contact, existing-turf competition, surface moisture, hot/windy follow-through, Iowa terminology and the aeration boundary. City/frost deadlines, seed selection, germination promises, fixed irrigation schedules, automatic aeration pairing and invented Mo's methods or outcomes were removed or softened.
- **Editorial gates and differentiation:** the saved Task 29 research brief records PASS results for the Research, Differentiation, Task 28 Anti-Repetition, Cannibalization and Editorial Quality gates. Task 29 uses an establishment-runway decision, a three-part readiness checklist and follow-through postpone conditions; unlike Task 28, it has no factor table, compaction/traffic analysis, core-equipment moisture test, ordered aeration sequence or separate commercial conclusion. Compression removed generic benefits, seed/product detail, equipment instructions, exact germination/watering schedules, forced FAQ, repeated summary and “why hire” filler.
- **Capability and cluster boundaries:** the article remains informational and links naturally to Task 28 for the separate aeration decision and to the canonical Aeration and Seeding page only for approved combined commercial scope. It does not claim Mo's equipment, preparation, placement, seed blend, watering process, timing, availability or result. Task 30 retains mowing frequency and Task 33 retains the year-round calendar; no unpublished article link renders.
- **Author, date and image decisions:** author, `datePublished`, `dateModified` and image are omitted. There is no approved public author, the repository is not deployed so code completion is not a public publication date, and no verified article image was established.
- **Content, language and accessibility:** the direct answer appears first, four intent-led H2 sections remain readable at all required viewports, and visible Sources expose all three primary URLs. Explicit Spanish translations preserve timing, moisture and aeration qualifications. TOC and skip-link focus, mobile Escape/focus return, reduced motion, zero overflow, unclipped English/Spanish H1 and source names, and fixed-action/footer-content separation pass.
- **Schema, links and analytics:** the route emits the central Organization/WebSite references, one WebPage, one BreadcrumbList with Home → Blog → article parity, and one BlogPosting with the three source citations. It omits author, public dates, image, FAQ, Review, AggregateRating, LocalBusiness, address, geo and Offer. Public links include Blog, Task 28, Aeration and Seeding, visible sources and the existing restrained Contact CTA. The exact five-event analytics allowlist remains unchanged with no article/source/query event data.
- **Publication and isolation:** `getPublishedArticles()` returns exactly Task 28 and Task 29 and remains the sole gate for static params/rendering, Blog hub, two-item Blog ItemList, Homepage Latest Tips and sitemap. Both published articles return 200; Tasks 30–33 remain branded non-redirecting 404s and absent from public selectors and the sitemap. Sitemap contains exactly twenty-five canonical URLs.
- **QA and regression:** production source checks passed exact metadata/canonical under plain, Spanish, UTM and arbitrary queries, one H1, visible sources/links, truthful schema and future-route isolation. Fresh `1440×900`, `1280×800`, `390×844` and `320×568` browser contexts passed English/Spanish, UTM preservation, navigation/breadcrumb, source and related links, TOC/skip focus, mobile menu focus return, reduced motion, zero overflow, footer/fixed-action clearance and clean consoles. The Task 29 focused validator, Task 28/Blog/Contact contracts, complete Tasks 7–28 regression matrix, shared content/SEO/navigation/analytics/Homepage validators, TypeScript, production build and diff check pass.
- **Unavailable check:** `Unavailable — ESLint is not installed`. No lint dependency or configuration was added.
- **Task status:** Task 29 is `[x]` Completed because the sourced Iowa timing is accurate and conditional, exact informational ownership and all editorial gates pass, visible/schema/link parity is truthful, only Task 29 was promoted and all unsupported business/image/date facts are omitted.
- **Exact next action:** commit as `feat(seo): add Iowa overseeding timing article`, verify a clean worktree and STOP. Per the approved September 2026 seasonal execution order, Task 32 is next; Task 30 remains not started.

### Previous checkpoint — Task 28 complete, 2026-09-01 (Asia/Amman)

- **Authorized scope:** Task 28 only — research, review and publication of `/blog/when-to-aerate-lawn-iowa`. Work began from clean `9320da0`, preserving the user-authorized Blog guidance commit above product baseline `b807d05`. Task 29 and all later article/media work remain unauthorized and `[ ]` Not started.
- **Exact ownership:** the article owns `when to aerate lawn in iowa` with exact title `When to Aerate Your Lawn in Iowa | Mo's Lawn Care`, H1 `When Is the Best Time to Aerate a Lawn in Iowa?`, supplied description and query-free canonical. Current search-intent research retained `best time to aerate lawn in Iowa`, `core aeration Iowa` and `aerate lawn in spring or fall Iowa` as natural same-intent secondary terms without search-volume or density claims.
- **Research and claim ledger:** Iowa State University Extension and Outreach was the sole factual authority: `Core Aeration of Lawns` (source last reviewed April 2024), `Spring Garden Tasks` (March 2026) and `Home Lawn Watering Tips and Tricks` (March 2026), all reopened and verified on 2026-09-01. Six publishable claim groups cover April/September cool-season timing, recovery context, soil/use frequency, moist-not-dry-or-wet conditions, active spring growth and non-diagnostic compaction context. Rigid fall-only dates, symptom-as-proof tests, Task 29 overseeding advice and invented Mo's process/outcome claims were removed.
- **Editorial gates and differentiation:** the saved Task 28 research brief records PASS results for the Research, Differentiation and Editorial Quality gates. The article adds a window-versus-need framework, factor-to-implication table, explicit wait conditions and a non-diagnostic compaction explanation. Compression removed generic benefits copy, repeated summaries, forced FAQ, filler conclusion and multiple commercial pitches; no word-count target was used.
- **Capability and cluster boundaries:** the article remains informational and links to the canonical Aeration and Seeding service only for approved commercial scope. It does not claim Mo's equipment, core method, pass count, schedule, seed blend or result. Task 29 retains overseeding timing; Task 33 retains the year-round calendar; no unpublished article link renders.
- **Author, date and image decisions:** author, `datePublished`, `dateModified` and image are omitted. There is no approved public author, the repository is not deployed so the code-completion date is not a real public publication date, and no verified article image was established. The internal 2026-09-01 source/editorial review date is governance only and is not exposed as publication freshness.
- **Content, language and accessibility:** the direct answer appears first, five intent-driven H2 sections and one useful decision table remain readable at all required viewports, visible Sources expose all three primary URLs, and explicit Spanish translations preserve claim strength. TOC targets now receive keyboard focus, with skip focus, mobile Escape/focus return, reduced motion, zero page overflow, unclipped translated H1/source names and fixed-action/footer separation verified.
- **Schema, links and analytics:** the route emits central Organization/WebSite references, one WebPage, one BreadcrumbList with Home → Blog → article parity, and one BlogPosting with source citations. It omits author, public dates, image, FAQ, Review, AggregateRating, LocalBusiness, address, geo and Offer. Natural public paths include Blog, Aeration and Seeding and the existing restrained Contact CTA. The exact five-event analytics allowlist remains unchanged with no article event or research/query payload.
- **Publication and isolation:** `getPublishedArticles()` returns exactly this one article and remains the sole gate for static params/rendering, Blog hub, one-item Blog ItemList, Homepage Latest Tips and sitemap. The article returns 200; the other five article routes remain branded non-redirecting 404s and absent from public cards, static params and sitemap. Sitemap contains exactly twenty-four canonical URLs.
- **QA and regression:** production source checks passed exact metadata/canonical under plain, Spanish, UTM and arbitrary queries, one H1, visible sources/links, truthful schema and future-route isolation. Fresh `1440×900`, `1280×800`, `390×844` and `320×568` browser contexts passed English/Spanish, navigation/breadcrumb, UTM preservation, TOC focus, skip focus, mobile menu focus return, reduced motion, responsive table handling, zero overflow, footer/fixed-action clearance and clean consoles. The Task 28 focused validator, Blog validator, complete Tasks 7–27 regression matrix, shared content/SEO/navigation/analytics/Homepage validators, TypeScript, production build and diff check passed.
- **Unavailable check:** `Unavailable — ESLint is not installed`. No lint dependency or configuration was added.
- **Task status:** Task 28 is `[x]` Completed because every Iowa-specific claim is authoritatively supported and conditional, exact ownership and three editorial gates pass, visible/schema/link parity is truthful, only one article lifecycle was promoted and all unsupported business/image/date facts are omitted.
- **Exact next action:** commit as `feat(seo): add Iowa aeration timing article`, verify a clean worktree and STOP before Task 29.

### Previous checkpoint — Task 27 complete, 2026-09-01 (Asia/Amman)

- **Authorized scope:** Task 27 only — Blog Foundation, Article Template, Publishing Workflow, and Hub. Work began from the clean `852f9ed` Task 26 baseline. Task 28 and all later article/media work remain unauthorized and `[ ]` Not started.
- **Ownership and publication:** `/blog` now owns `iowa lawn care tips` with the exact supplied title, H1, description, four secondary keywords and query-free canonical. It is the sole lifecycle promotion, producing exactly twenty-three sitemap URLs. All six planned article owners retain exact approved title/H1/description/primary keyword records, empty secondary-keyword arrays and `planned` status; no article body, research source, author, date or image was added.
- **Single publication gate:** one discriminated `BlogArticle` registry supports `planned`, `reviewed` and `published`. `getPublishedArticles()` is the sole public selector used by the hub, dynamic static params/renderer, sitemap, Homepage Latest Tips, ItemList and public related-article resolution. A fixture-only lifecycle test proves one status transition adds/removes an article consistently without changing separate allowlists. All six real article records remain excluded and return branded non-redirecting 404s.
- **Hub and template:** the server-rendered green/cream hub uses one H1, an honest zero-guide state, broad non-advice topic orientation, visible editorial/source method, four already-published service paths and Contact. The shared server-rendered article template supports paragraphs, H2/H3 anchors, ordered/unordered/check lists, restrained tables, optional real TOC, inline citations, visible Sources, published related services/articles and one CTA without a parser, CMS, database, runtime fetch or article-specific client bundle.
- **Evidence safeguards:** structured sources capture stable ID, title, publisher, canonical URL, real review date, claim mapping and optional jurisdiction/scope. Internal claim notes enforce traceability. Published/reviewed records allow only researched secondary keywords and require content, sources, claim notes and editorial review; optional author must be owner-confirmed, optional dates must be real/ordered, and optional images require verified provenance, honest alt and dimensions. The publishing workflow is documented in `docs/content-publishing.md`.
- **Schema and breadcrumb:** `/blog` emits one `Blog` page node, one BreadcrumbList with exact Home → Blog UI/schema parity, and central Organization/WebSite references. With zero visible published articles, ItemList is deliberately omitted rather than emitting an empty or hidden draft list. Future BlogPosting fields are record-backed and omit absent author, dates and images.
- **Homepage, language, performance and analytics:** Homepage Latest Tips now consumes the published selector, shows zero fake cards and preserves the `/blog` CTA without serializing planned slugs. New Blog UI copy has explicit Spanish translations; metadata/canonical remain English and query-independent, including full UTM preservation. No dependency, runtime article fetch, third-party script, new analytics event or Task 4 behavior change was introduced.
- **QA and regression:** production source/route checks passed `/blog` 200, six planned articles and representative unknown/category/tag/author/page paths as actual non-redirecting 404s, exact metadata/schema, zero draft payload and a twenty-three-URL sitemap. Fresh `1440×900`, `1280×800`, `390×844` and `320×568` contexts passed navigation, breadcrumb, English/Spanish, UTM preservation, skip focus, mobile Escape/focus return, reduced motion, translated wrapping, zero overflow, footer/fixed-action separation and clean consoles. The focused Blog validator, complete Tasks 7–26 matrix, shared validators, TypeScript, production build and diff check passed.
- **Unavailable check:** `Unavailable — ESLint is not installed`. No lint dependency or configuration was added.
- **Task status:** Task 27 is `[x]` Completed because the hub/template/model/workflow are maintainable and dependency-light; one status controls publication; exact ownership/schema/lifecycle pass; and source/date/author/image/archive safeguards are enforced without publishing or drafting an article.
- **Exact next action:** commit as `feat(seo): add blog foundation and hub`, verify a clean worktree and STOP before Task 28.

### Previous checkpoint — Task 26 complete, 2026-09-01 (Asia/Amman)

- **Authorized scope:** Task 26 only — Contact Page and Estimate Integration. Work began from the clean `247de1d` Task 25 baseline. Task 27 and all later routes remain unauthorized and `[ ]` Not started.
- **Ownership and publication:** `/contact` now owns `lawn care estimate des moines` with the exact title `Contact Mo's Lawn Care | Free Estimate in Des Moines, IA`, H1 `Request a Free Property Estimate`, approved description, secondary keywords and query-free canonical `https://www.moslawncaredsm.com/contact`. Exactly one H1 renders and English metadata/canonical remain stable under Spanish, UTM and arbitrary service/city/form query values.
- **One form and one backend:** the existing `EstimateForm` remains the sole form implementation and powers both Homepage and Contact through controlled `homepage_estimate` and `contact_page` placements. Deterministic placement-prefixed DOM IDs prevent collisions while field names, labels, validation, honeypot, `/api/estimate` payload and success/error UI remain shared. `/api/estimate` remains the sole Resend endpoint; controlled service values are allowlisted server-side and arbitrary query context is never read or forwarded.
- **Delivery and analytics:** Task 4's exact five-event allowlist is unchanged. Mocked provider failure produced one bounded `form_submit_error` and no lead; confirmed sent responses produced exactly one `generate_lead` on each placement; duplicate delivery IDs and suppressed honeypot responses produced no additional lead. Analytics payloads contain only the controlled placement, fixed form dimensions, sanitized path, language and bounded error type—no name, email, phone, message, service, submission ID or query values. The Resend email body now uses bounded escaped HTML through the same endpoint/provider, avoiding the missing optional React-email renderer without adding a dependency or second workflow.
- **Page, schema and lifecycle:** the server-rendered page uses one ContactPage, one BreadcrumbList with Home → Contact UI/schema parity and the central Organization/WebSite references. Native centralized `tel:` and `mailto:` paths plus crawlable Services and Service Areas links render. No address, LocalBusiness, Place, geo, Review, AggregateRating, Offer or pricing/scheduling/availability claim was added. Exactly `/contact` was promoted, producing exactly twenty-two sitemap URLs; Blog remains a branded non-redirecting 404.
- **Accessibility, language and browser QA:** validation focuses the first invalid field, provider success/failure focuses the shared live status, submit busy/disabled state is exposed, input/error/status IDs are placement-isolated, and the honeypot stays outside normal interaction. Fresh production contexts at `1440×900`, `1280×800`, `390×844` and `320×568` passed English/Spanish, UTM preservation, current navigation, breadcrumb, exact SEO, mobile Escape/focus return, skip focus, reduced motion, translated wrapping, zero H1/page overflow, footer/fixed-action clearance and clean valid-route consoles. Homepage desktop/mobile regression preserved its form, metadata, layout, validation, analytics and unique IDs.
- **API and regression:** safe local API checks passed malformed JSON, empty/invalid contact data and honeypot suppression without a production lead send. Mocked browser transport covered provider failure, confirmed success, duplicate-success and suppression paths. The focused Contact validator, complete Tasks 7–25 focused matrix, shared content/SEO/navigation/analytics/Homepage validators, TypeScript, production build and diff check passed.
- **Unavailable check:** `Unavailable — ESLint is not installed`. No lint dependency or configuration was added.
- **Task status:** Task 26 is `[x]` Completed because Contact reuses the sole form/backend and analytics contract, exact metadata/schema/contact paths pass, confirmed-success semantics match Homepage, and no PII or arbitrary query data reaches GA4.
- **Exact next action:** commit as `feat(seo): add contact page`, verify a clean worktree and STOP before Task 27.

### Previous checkpoint — Task 25 complete, 2026-09-01 (Asia/Amman)

- **Authorized scope:** Task 25 only — Reviews Page and Review Data Governance. Work began from the clean `3050e5b` Task 24 baseline. Task 26 and all later routes remain unauthorized and `[ ]` Not started.
- **Ownership and publication:** `/reviews` now owns `mo's lawn care reviews` with the exact title `Mo's Lawn Care Reviews | Des Moines, IA`, H1 `What Customers Say About Mo's Lawn Care`, approved description, secondary keywords and query-free canonical `https://www.moslawncaredsm.com/reviews`. Exactly one H1 renders and English metadata/canonical remain stable under Spanish, UTM, filter and arbitrary query parameters.
- **Canonical dataset and provenance:** one typed `content/reviews.ts` source governs all 106 stable unique review records, all of which remain display-eligible. It powers the deterministic five-record Homepage carousel, the Reviews collection and every service-page excerpt through stable ID lookups. Text, reviewer display names, legacy ratings and established categories are preserved from the approved repository source; a fixed integrity hash protects verbatim migration. No record has verified city/date metadata or a direct per-review URL, and no inferred city/service metadata was added. The two different reviewers whose exact text is `Good job` remain separate because they are not proven duplicate entries.
- **Count and rating policy:** the approved centralized public signal remains exactly `170+ Google Reviews`; the 106 governed repository records are never represented as Google's live count. Legacy rating coverage is 104 five-star values, one four-star value and one missing value, but individual ratings are omitted from public review items and no aggregate is calculated or displayed because provenance does not support a current numeric rating claim. Stale `160` and `5.0 on Google` UI/translation literals were removed.
- **Categories and service attribution:** the established eleven-category vocabulary is preserved with exact counts. Only the existing Lawn, Cleanup and Snow categories expose contextual links to the Lawn Mowing, Yard Cleanup and Snow Removal canonical service owners. Category labels organize customer feedback; service capability remains governed by the canonical service pages. No city filter or city attribution is emitted.
- **Schema, lifecycle and links:** one CollectionPage and one BreadcrumbList render with Home → Reviews UI/schema parity and the central Organization/WebSite references. JSON-LD contains no Review, AggregateRating, review/rating count, rating value, reviewer Person, LocalBusiness, Service, Product or Offer nodes/properties. The approved Google Business Profile, `/our-work`, `/contact`, phone and email links render; Our Work resolves 200 while Contact and Blog remain branded 404s. Exactly `/reviews` was promoted, producing exactly twenty-one canonical sitemap URLs.
- **Performance, interaction and language:** Reviews server-renders nine public records and loads deterministic nine-record category-aware batches through a bounded read-only endpoint. Neither the Homepage nor the initial Reviews client payload contains the full archive; category and later-batch requests return no rating/city/date fields, contain no duplicate IDs and make no third-party review/API request. Filters retain keyboard focus during requests, final Load More removal moves focus to the completion status, and all customer quotations stay in their original language while surrounding UI has explicit Spanish translations.
- **Browser, analytics and regression:** fresh production contexts at `1440×900`, `1280×800`, `390×844` and `320×568` passed current navigation, breadcrumb, English/Spanish, complete UTM preservation, exact metadata/canonical, original-language quotations, filter/batching integrity, skip focus, mobile Escape/focus return, reduced motion, zero page overflow, translated wrapping, footer/fixed-action separation and clean valid-route consoles. Network inspection found only bounded local review-batch requests and no analytics/third-party review traffic. Task 4's exact five-event allowlist and PII restrictions remain unchanged. The complete Tasks 7–24 regression matrix, content/SEO/navigation/analytics/Homepage validators, Task 25 focused validator, TypeScript and production build passed.
- **Unavailable check:** `Unavailable — ESLint is not installed`. No lint dependency or configuration was added.
- **Task status:** Task 25 is `[x]` Completed because one governed review dataset powers all review surfaces, count/rating/provenance policies are restrained, the page remains performant and accessible, exact SEO/schema/links pass, only `/reviews` changed lifecycle and the sitemap contains exactly twenty-one canonical URLs.
- **Exact next action:** commit as `feat(seo): add reviews page`, verify a clean worktree and STOP before Task 26.

### Previous checkpoint — Task 24 complete, 2026-09-01 (Asia/Amman)

- **Authorized scope and resume state:** Task 24 only — Our Work and Gallery Page. Finalization resumed from the clean WIP checkpoint `80779ff` (`wip: checkpoint task 24 our work gallery page`) above the stable pre-Task-24 baseline `a88cf9a`; the legitimate implementation was preserved rather than restarted. Task 25 and all later routes remain unauthorized and `[ ]` Not started.
- **Ownership and publication:** `/our-work` now owns `lawn care projects des moines` with the exact title `Lawn Care & Landscaping Projects in Des Moines | Mo's`, H1 `Lawn Care & Landscaping Work Across the Des Moines Metro`, approved description, secondary keywords and query-free canonical `https://www.moslawncaredsm.com/our-work`. Exactly one H1 renders.
- **Canonical dataset and provenance:** one typed `content/projects.ts` source powers both Homepage and Our Work. It governs 92 unique stable records, of which 89 are display-eligible; Homepage receives an eight-image curated selector, and Our Work receives a 12-image server-rendered initial subset followed by deterministic 12-item batches. All service tags are empty, every verified city is null, and all authorship/service/city provenance remains explicitly unverified, so copy and bilingual alt text describe observable content without assigning unsupported work, customer, service or location claims. Three records remain intentionally excluded, including a street-address-overlay image, an unusable legacy file and the broken legacy before asset. The former duplicate `data/all_image_urls.txt` and legacy `lib/site.ts` project arrays were removed.
- **Media and comparison audit:** the interrupted run verified all 68 unique remote URLs as reachable JPEG resources and all 11 local gallery assets as reachable. Known local filename/type mismatches remain unchanged for Task 34. Six sequence-supported before/after comparisons resolve to unique governed records; the broken legacy pair was excluded from both display and transformation presentation rather than inferred or repaired. No media was converted, rehosted or broadly optimized.
- **Schema, lifecycle and links:** the JSON-LD graph contains exactly one CollectionPage, one BreadcrumbList with Home → Our Work parity, the central Organization/WebSite references, and zero ImageObjects because available provenance does not justify them. It contains no LocalBusiness, Place, Review, AggregateRating, Offer or Product. Required service, Reviews and Contact links remain crawlable. Exactly `/our-work` was promoted, producing the exact twenty-URL sitemap; Reviews, Contact and Blog remain planned branded non-redirecting 404 routes.
- **Interaction, accessibility and performance:** the full archive is not serialized or rendered wholesale. The read-only bounded batching endpoint returns at most twelve public records per request; the interrupted production network audit found only three optimized image requests on the initial `1280×800` load, unique browser media requests, all 89 eligible images loadable, and no eager full-archive fetch. Lightbox focus is trapped and returned, before/after controls work by keyboard with visible focus, intermediate Load More batches retain control focus, and the final batch moves focus to the completion status. English/Spanish, desktop/mobile, touch targets, reduced motion, overflow, translated wrapping and fixed-action/footer separation passed the required browser matrix.
- **Homepage, analytics and regression:** Homepage now consumes the same governed source while preserving its curated eight-image gallery and comparison behavior. No GA4 semantics or allowlisted event names changed, no new event was added, and no PII path was introduced. During the interrupted run, `pnpm validate:our-work`, TypeScript, production build, the complete Tasks 7–23 regression matrix, production source/status/schema/query/sitemap/future-route checks, browser QA and remote/local network-media QA all passed. Valid-route consoles had zero errors or warnings.
- **Resume-finalization checks:** on 2026-09-01, the clean WIP baseline and scope were re-audited; the incidental `components/before-after-slider.tsx` mode drift was restored to its pre-Task-24 executable bit without changing source. Fresh `pnpm validate:our-work`, `pnpm exec tsc --noEmit --incremental false` and `git diff --check` passed. The production build, full regression matrix and hour-long browser/network workflow were not redundantly rerun because no source changed after their successful interrupted-run execution.
- **Unavailable check:** `Unavailable — ESLint is not installed`. No lint dependency or configuration was added.
- **Task status:** Task 24 is `[x]` Completed because one governed dataset powers both surfaces, the full experience is accessible and bounded, every media/service/location statement stays within evidence, exact SEO/schema/links pass, only `/our-work` changed lifecycle and the sitemap contains exactly twenty canonical URLs. Task 25 was not started.
- **Exact next action:** amend WIP checkpoint `80779ff` to the final Task 24 commit `feat(seo): add our work gallery page`, verify a clean worktree and STOP before Task 25.

### Earlier checkpoint — Task 23 complete, 2026-08-31 (Asia/Amman)

- **Authorized scope:** Task 23 only — About Page. Task 24 and all later routes remain unauthorized and `[ ]` Not started.
- **Ownership and identity:** `/about` now owns `mo's lawn care des moines` with the exact title, H1, description, secondary keywords and query-free canonical. Visible identity uses the owner-approved legal name `Mo's Lawn Care & Snow Removal Services LLC`; the exact approved metadata wording remains unchanged.
- **Evidence and content boundary:** the page uses only the Service Area Business model, exact five-community coverage, ten published service paths, residential/commercial property context, centralized `170+ Google Reviews`, approved daily hours and established contact routes. It contains no founder/history, ownership, credential, scale, office/address/geo, customer/property/project count, award, guarantee or team-identity claim, and no media is used because identity/project provenance is insufficient.
- **Architecture and duplication:** one lightweight static route and typed About link/group source reuse the interior shell, navigation/footer, metadata, schema, contact and translation architecture. The page provides company identity, a four-group service overview, five-area directory, trust facts and canonical next paths without duplicating Homepage, Services, Commercial or Service Areas content blocks.
- **Schema and lifecycle:** the graph contains exactly one AboutPage, the central Organization and WebSite nodes and one BreadcrumbList with Home → About UI/schema parity. It contains no LocalBusiness, Person, PostalAddress, geo, Review, AggregateRating, Offer, Product or price. Exactly `/about` was promoted, producing the exact nineteen-URL sitemap; Our Work, Reviews, Contact and Blog remain branded non-redirecting 404s.
- **Language, accessibility and performance:** all new visible strings have explicit Spanish translations while English metadata/canonical remain query-independent and full UTMs survive language switching. The page is statically prerendered with no media, fetch, form, dependency, page-specific client component or analytics event. Four required viewports pass one H1, current navigation, breadcrumb, keyboard/skip focus, mobile Escape/focus return, reduced motion, zero overflow, unclipped translated H1/CTAs and fixed-action/footer separation; a minimal shared footer padding correction removes a real desktop phone/email collision.
- **Validation passed:** About, Altoona, Norwalk, Waukee, Ankeny, Service Areas, Commercial, every Tasks 7–16 focused validator, Services, content, SEO, navigation, analytics and homepage validators; `pnpm exec tsc --noEmit --incremental false`; repeated `pnpm build`; production source/status/schema/query/sitemap/future-route assertions; four-viewport browser QA; exact-content duplication audit; and `git diff --check`.
- **Unavailable check:** `Unavailable — ESLint is not installed`. The existing `pnpm lint` command still exits at `eslint .`; Task 23 does not install ESLint.
- **Task status:** Task 23 is `[x]` Completed because every factual claim has approved evidence, exact branded ownership and schema/links/CTA pass, and no fictional history or credential appears. Task 24 was not started.
- **Exact next action:** commit only legitimate Task 23 changes as `feat(seo): add about page`, verify a clean worktree, report the local result and STOP before Task 24.

### Previous checkpoint — Task 22 complete, 2026-08-31 (Asia/Amman)

- **Authorized scope:** Task 22 only — Altoona Service-Area Page. Task 23 and all later routes remain unauthorized and `[ ]` Not started.
- **Ownership and publication:** `/service-areas/altoona-ia` now owns `lawn care altoona ia` with the exact approved title, H1, description, secondary keywords and query-free canonical. The explicit city allowlist contains exactly Ankeny, Waukee, Norwalk and Altoona; Des Moines remains homepage-owned and child paths, aliases, city/service permutations and unknown slugs remain branded 404s without redirects.
- **Approved service set:** an independent Altoona audit supports Landscaping, Grading, Yard Cleanup, Lawn Mowing, Fertilization & Weed Control, Aeration & Seeding, Spring Cleanup, Fall Cleanup & Leaf Removal and Snow Removal. Every canonical record explicitly lists Altoona and is published. Flower Bed Maintenance remains intentionally omitted because its narrower existing-bed intent falls outside this city guide’s selected service mix.
- **Anti-doorway decision:** Altoona uses a fourth typed editorial mode centered on scope building: affected area and leading need precede a uniquely ordered service directory, followed by residential/commercial/service-range context and an estimate-ready outline. No summary is copied from Ankeny, Waukee or Norwalk. Five-word-shingle comparisons report 10.9% for Ankeny/Waukee, 8.9% for Ankeny/Norwalk, 6.0% for Ankeny/Altoona, 5.4% for Waukee/Norwalk, 3.3% for Waukee/Altoona and 7.7% for Norwalk/Altoona. Manual section-by-section review confirms distinct headings, sequence, service order, summaries, openings, property/timing/decision framing, CTA and related-area wording; no pair is mechanically interchangeable after city-name replacement.
- **Content and provenance boundary:** Altoona copy adds no neighborhood, subdivision, landmark, local weather, regulation, project, customer, crew, office/branch, address/geo, proximity, response, price, contract, schedule, program, availability or guarantee claim. No media or review appears because no approved source establishes Altoona provenance.
- **Schema and lifecycle:** the graph contains central Organization/WebSite references plus exactly one WebPage, one nine-entry ItemList and one BreadcrumbList with exact visible/schema parity. It contains no LocalBusiness, city Organization, address, geo, Place, Service, Offer, Product, Review, AggregateRating or price. Exactly Altoona was promoted, producing the exact eighteen-URL sitemap and completing the five-owner city hierarchy.
- **Architecture, language and performance:** the existing dynamic city route remains the only renderer. One minimal `scope-builder` discriminant extends the shared typed content model without city-specific conditional sprawl, dependencies, media, forms, fetches, page-specific client JavaScript or analytics events. All new visible strings have Spanish translations while metadata and canonical remain English/query-independent.
- **Production/browser QA:** all eighteen published routes return HTTP 200; the Des Moines child, two Altoona aliases, an arbitrary city and representative city/service permutations return branded non-redirecting 404s. Fresh `1440×900`, `1280×800`, `390×844` and `320×568` contexts passed English/Spanish, full UTM preservation, stable SEO, current navigation, breadcrumb, service/supporting/area links, native phone/email, skip focus, mobile Escape/focus return, reduced motion, zero overflow, unclipped translated headings/labels/CTAs, footer/fixed-action separation and clean valid-route consoles. Ankeny, Waukee and Norwalk shared-renderer spot-checks also pass.
- **Passed checks:** Altoona, Norwalk, Waukee, Ankeny, Service Areas and Commercial validators; every Tasks 7–16 focused validator; Services, content, SEO, navigation, analytics and homepage validators; `pnpm exec tsc --noEmit --incremental false`; `pnpm build`; production source/route/schema/query/sitemap assertions; four-viewport browser QA; shared-renderer visual regression; and `git diff --check`.
- **Unavailable check:** `Unavailable — ESLint is not installed`. The existing `pnpm lint` command still exits at `eslint .`; Task 22 does not install ESLint.
- **Task status:** Task 22 is `[x]` Completed because its exact Definition of Done and the expanded uniqueness, evidence, provenance, schema, lifecycle, responsive, regression and scope requirements pass. Task 23 was not started.
- **Exact next action:** commit only legitimate Task 22 changes as `feat(seo): add altoona service area page`, verify a clean worktree, report the local result and STOP before Task 23.

### Prior checkpoint — Task 21 complete, 2026-08-31 (Asia/Amman)

- **Authorized scope:** Task 21 only — Norwalk Service-Area Page. Task 22 and all later routes remain unauthorized and `[ ]` Not started.
- **Ownership and publication:** `/service-areas/norwalk-ia` now owns `lawn care norwalk ia` with the exact approved title, H1, description, secondary keywords and query-free canonical. The explicit city allowlist contains exactly Ankeny, Waukee and Norwalk; Altoona, Des Moines child paths, aliases and unknown slugs remain branded 404s without redirects.
- **Approved service set:** an independent Norwalk audit supports Lawn Mowing, Aeration & Seeding, Landscaping, Grading, Yard Cleanup, Spring Cleanup, Fertilization & Weed Control, Fall Cleanup & Leaf Removal and Snow Removal. Every canonical record explicitly lists Norwalk and is published. Flower Bed Maintenance remains intentionally omitted because its narrower existing-bed intent falls outside this city guide’s selected service mix.
- **Anti-doorway decision:** Norwalk uses a third typed editorial mode: immediate priority framing precedes a uniquely ordered service directory, then ongoing-versus-time-specific guidance and estimate-preparation paths. No summary is copied from Ankeny or Waukee. Five-word-shingle comparison reports 11.2% for Ankeny/Waukee, 8.8% for Ankeny/Norwalk and 5.4% for Waukee/Norwalk; manual comparison confirms independently written section sequence, openings, summaries, related-area copy and CTA.
- **Content and provenance boundary:** Norwalk copy adds no neighborhood, subdivision, landmark, local weather, project, customer, crew, office/branch, address/geo, proximity, response, price, contract, schedule, bundle, availability or guarantee claim. No media or review appears because no approved source establishes Norwalk provenance.
- **Schema and lifecycle:** the graph contains central Organization/WebSite references plus exactly one WebPage, one nine-entry ItemList and one BreadcrumbList with exact visible/schema parity. It contains no LocalBusiness, city Organization, address, geo, Place, Service, Offer, Product, Review, AggregateRating or price. Exactly Norwalk was promoted, producing the exact seventeen-URL sitemap; Altoona remains planned.
- **Architecture, language and performance:** the existing dynamic city route remains the only renderer. One minimal `priority-map` discriminant extends the shared typed content model without adding dependencies, media, forms, fetches, page-specific client JavaScript or analytics events. All new visible strings have Spanish translations while metadata and canonical remain English/query-independent.
- **Production/browser QA:** all seventeen published routes return HTTP 200; Altoona, the Des Moines child, two Norwalk aliases and an arbitrary city return branded non-redirecting 404s. Fresh `1440×900`, `1280×800`, `390×844` and `320×568` contexts passed English/Spanish, UTM preservation, stable SEO, current navigation, breadcrumb, service/supporting/area links, native phone/email, skip focus, mobile Escape/focus return, reduced motion, zero overflow, unclipped translated headings, footer/fixed-action separation and clean valid-route consoles.
- **Passed checks:** Norwalk, Waukee, Ankeny, Service Areas and Commercial validators; every Tasks 7–16 focused validator; Services, content, SEO, navigation, analytics and homepage validators; `pnpm exec tsc --noEmit --incremental false`; `pnpm build`; production source/route/schema/query/sitemap assertions; four-viewport browser QA; and `git diff --check`.
- **Unavailable check:** `Unavailable — ESLint is not installed`. The existing `pnpm lint` command still exits at `eslint .`; Task 21 does not install ESLint.
- **Task status:** Task 21 is `[x]` Completed because its exact Definition of Done and the expanded uniqueness, evidence, provenance, schema, lifecycle, responsive, regression and scope requirements pass. Task 22 was not started.
- **Exact next action:** commit only legitimate Task 21 changes as `feat(seo): add norwalk service area page`, verify a clean worktree, report the local result and STOP before Task 22.

### Prior checkpoint — Task 20 complete, 2026-08-31 (Asia/Amman)

- **Authorized scope:** Task 20 only — Waukee Service-Area Page. Task 21 and all later routes remain unauthorized and `[ ]` Not started.
- **Ownership and publication:** `/service-areas/waukee-ia` now owns `lawn care waukee ia` with the exact approved title, H1, description, secondary keywords and query-free canonical. The explicit published-city allowlist contains exactly Ankeny and Waukee; unknown slugs plus Norwalk, Altoona and Des Moines child paths remain branded 404s without redirects.
- **Approved service set:** an independent Waukee audit supports Spring Cleanup, Lawn Mowing, Aeration & Seeding, Fertilization & Weed Control, Landscaping, Yard Cleanup, Grading, Fall Cleanup & Leaf Removal and Snow Removal. Every canonical record explicitly lists Waukee in its approved service-area cities. Flower Bed Maintenance remains intentionally omitted as the narrower landscaping-adjacent intent outside Task 20’s selected mix.
- **Anti-doorway decision:** the shared renderer now consumes a typed discriminated city-content model. Ankeny preserves its property-decision sequence; Waukee begins with a four-part year-spanning orientation, uses a different nine-service order with no identical summaries, then separates residential/commercial framing and supporting paths. A lightweight five-word-shingle guard reports about 11% shared visible phrasing, primarily unavoidable service/capability language, and manual side-by-side review confirms no city-name substitution pattern.
- **Content and claim boundary:** Waukee copy describes only approved coverage, service selection, high-level residential/commercial context and estimate guidance. It adds no neighborhood, customer, project, crew, office/branch, address/geo, growth, property-count, proximity, response-time, contract, recurring schedule or guaranteed availability claim. No media or review appears because no approved source proves Waukee provenance.
- **Schema and lifecycle:** the graph contains central Organization/WebSite references plus exactly one WebPage, one nine-entry ItemList and one BreadcrumbList with visible/schema parity. It contains no LocalBusiness, Waukee Organization, address, geo, Service, Offer, Product, Review, AggregateRating or price. Exactly Waukee was promoted, producing the exact sixteen-URL sitemap.
- **Architecture, language and performance:** the existing dynamic city route and renderer remain the only city implementation path. Typed Ankeny/Waukee records select distinct editorial variants while sharing metadata, schema, breadcrumbs, navigation, footer, phone and translation architecture. Both routes statically prerender; Task 20 adds no dependency, media, form, fetch, page-specific client JavaScript or analytics event.
- **Production/browser QA:** production checks passed for sixteen valid HTTP 200 routes, six required branded 404 routes, exact Waukee metadata/canonical/H1/schema/query behavior, Ankeny regression and the sixteen-URL sitemap. Fresh contexts at `1440×900`, `1280×800`, `390×844` and `320×568` passed English/Spanish, UTM preservation, stable SEO, breadcrumb, all service/supporting/area links, Ankeny 200 behavior, skip focus, mobile Escape/focus return, reduced motion, zero page overflow, footer/fixed-action separation, unclipped Spanish and clean valid-route consoles.
- **Passed checks:** `pnpm validate:waukee`; Ankeny, Service Areas and Commercial validators; every Tasks 7–16 focused validator; Services, content, SEO, navigation, analytics and homepage validators; `pnpm exec tsc --noEmit --incremental false`; `pnpm build`; production route/source/schema/sitemap checks; four-viewport browser QA; and `git diff --check`.
- **Unavailable check:** `Unavailable — ESLint is not installed`. The existing `pnpm lint` script exits at `eslint .`; Task 20 does not install ESLint.
- **Task status:** Task 20 is `[x]` Completed because the exact Definition of Done and expanded uniqueness, evidence, provenance, schema, lifecycle, responsive, regression and scope requirements pass. Task 21 was not started.
- **Exact next action:** commit only legitimate Task 20 changes as `feat(seo): add waukee service area page`, verify a clean worktree, report the local result and STOP before Task 21.

### Prior checkpoint — Task 19 complete, 2026-08-31 (Asia/Amman)

- **Authorized scope:** Task 19 only — Ankeny Service-Area Page. Task 20 and all later routes remain unauthorized and `[ ]` Not started.
- **Ownership and publication:** `/service-areas/ankeny-ia` now owns `lawn care ankeny ia` with the exact approved title, H1, description, secondary keywords and query-free canonical. One explicit published-city allowlist entry renders Ankeny; unknown slugs and the Waukee, Norwalk, Altoona and Des Moines child paths remain branded 404s without redirects.
- **Approved service set:** one typed nine-item source links Lawn Mowing, Aeration & Seeding, Fertilization & Weed Control, Landscaping, Yard Cleanup, Spring Cleanup, Fall Cleanup & Leaf Removal, Grading and Snow Removal. Every canonical service record explicitly includes Ankeny in its approved service-area cities. Flower Bed Maintenance remains published but is intentionally omitted because Task 19 does not call for that narrower landscaping-adjacent intent.
- **Content and claim boundary:** the page uses original property-care decision framing, seasonal grouping, residential/commercial estimate guidance, neutral related-area links and the established contact/phone paths. It publishes no neighborhood, customer, project, crew, office/branch, address/geo, property-count, proximity or response-time claim. No media or review appears because no approved source establishes Ankeny provenance and the later Work/Reviews routes remain unpublished.
- **Schema and lifecycle:** the graph contains the central Organization/WebSite references plus exactly one WebPage, one nine-entry ItemList and one BreadcrumbList. UI/schema names, positions and URLs match exactly; no LocalBusiness, city Organization, address, geo, Service, Offer, Product, Review, AggregateRating or price is emitted. Exactly Ankeny was promoted, producing the exact fifteen-URL sitemap.
- **Architecture, language and performance:** one server-rendered dynamic city route consumes the explicit allowlist and typed Ankeny record, shared metadata/schema/breadcrumb/interior-shell/navigation/footer architecture, and complete Spanish translations. The page is statically prerendered and adds no image, review, form, dependency, fetch, page-specific client JavaScript or analytics event.
- **Production/browser QA:** production-source checks passed for fifteen valid HTTP 200 routes, seven required branded 404 routes, exact metadata/canonical/H1/schema/query behavior and the fifteen-URL sitemap. Fresh Playwright contexts at `1440×900`, `1280×800`, `390×844` and `320×568` passed English/Spanish, UTM preservation, stable SEO, Service Areas context, breadcrumb, service links, estimate/phone paths, skip focus, mobile Escape/focus return, reduced motion, zero overflow, footer/fixed-action separation, unclipped Spanish and clean valid-route consoles.
- **Passed checks:** `pnpm validate:ankeny`; Service Areas and Commercial validators; every Tasks 7–16 focused validator; Services, content, SEO, navigation, analytics and homepage validators; `pnpm exec tsc --noEmit --incremental false`; `pnpm build`; production route/source/schema/sitemap checks; four-viewport browser QA; and `git diff --check`.
- **Unavailable check:** `Unavailable — ESLint is not installed`. The existing `pnpm lint` script exits at `eslint .`; Task 19 does not install ESLint.
- **Task status:** Task 19 is `[x]` Completed because the exact Definition of Done and expanded ownership, availability, anti-doorway, provenance, schema, lifecycle, responsive, regression and scope requirements pass. Task 20 was not started.
- **Exact next action:** commit only legitimate Task 19 changes as `feat(seo): add ankeny service area page`, verify a clean worktree, report the local result and STOP before Task 20.

### Prior checkpoint — Task 18 complete, 2026-08-31 (Asia/Amman)

- **Authorized scope:** Task 18 only — Service Areas Index. Tasks 19–22 city pages and all later work remain unauthorized and `[ ]` Not started.
- **Baseline and ownership:** Task 18 began from clean `main` at `b8bda37` (`feat(seo): add commercial property services hub`). `/service-areas` now owns `lawn care des moines metro` with the exact approved title, H1, description, keyword set and query-free canonical; homepage `/` remains the sole Des Moines city-intent owner.
- **Five-area hierarchy:** one server-rendered ordered directory contains exactly Des Moines → `/`, Ankeny, Waukee, Norwalk and Altoona in the approved order. The four non-Des Moines links use their registered future canonical paths while remaining branded 404s without redirects; no Des Moines child, alias, dynamic city route or sixth city exists.
- **Content and claim boundary:** concise metro framing, five distinct navigational descriptions, a coverage-scope explainer and Services/Contact paths make the hub useful without prewriting city pages. Copy stays at the approved lawn care, landscaping, seasonal-cleanup and snow-removal category level and adds no city/service matrix, radius, county, neighboring-city, project, review, map, address, geo or branch claim.
- **Schema and lifecycle:** the graph contains exactly one CollectionPage, one five-entry ItemList and one BreadcrumbList with visible/schema name, position and URL parity plus central Organization/WebSite references. It contains no LocalBusiness, Service, Offer, address/geo, Review, AggregateRating or price. Exactly `/service-areas` was promoted, producing the exact fourteen-URL sitemap; Tasks 19–22 and Contact remain planned and absent.
- **Architecture, language and performance:** one static page and typed area content record reuse the shared interior shell, breadcrumb, navigation/footer, metadata/schema, phone and contact paths. All new visible strings have explicit Spanish translations. No image, map, video, client component, fetch, geolocation, dependency, form or analytics event was added.
- **Responsive/browser QA:** fresh production contexts at `1440×900`, `1280×800`, `390×844` and `320×568` passed English/Spanish, full UTM preservation, stable English metadata/canonical, exact area links, mobile menu Escape/focus return, skip-link focus, reduced motion, zero overflow, footer/fixed-action separation and clean valid-route consoles. Visual review caught and corrected Spanish H1 overlap at 1280 and mid-word wrapping at 320.
- **Passed checks:** `pnpm validate:service-areas`; every Tasks 7–16 focused validator; Commercial, Services, content, SEO, navigation, analytics and homepage validators; `pnpm exec tsc --noEmit --incremental false`; repeated `pnpm build`; production route/source/schema/query/sitemap/inbound-link assertions; Playwright browser QA; and `git diff --check`.
- **Unavailable check:** `Unavailable — ESLint is not installed`. The existing `pnpm lint` script exits at `eslint .`; Task 18 does not install ESLint.
- **Task status:** Task 18 is `[x]` Completed because the exact Definition of Done and expanded lifecycle, schema, geographic, responsive, regression and scope requirements pass. Task 19 was not started.
- **Exact next action:** commit only legitimate Task 18 changes as `feat(seo): add service areas hub`, verify a clean worktree, report the local result and STOP before Task 19.

### Prior checkpoint — Task 17 complete, 2026-08-31 (Asia/Amman)

- **Authorized scope:** Task 17 only — Commercial Property Services Hub. Task 18 and later remain unauthorized and `[ ]` Not started.
- **Baseline:** Task 17 began from clean `main` at `158ded7` (`feat(seo): add snow removal service page`). `git status --short` returned no entries before the first edit.
- **Ownership and publication:** `/commercial-property-services` now owns `commercial lawn care des moines ia` with the exact approved title, H1, description, four secondary phrases and query-free canonical. Exactly one planned route was promoted, bringing the sitemap to thirteen URLs while all ten service pages remain published.
- **Capability audit:** every published service record was inspected independently. Each contains approved visible commercial-property language; Lawn Mowing, Landscaping and Snow Removal are additionally supported by approved metadata. The evidence-backed hub therefore contains all ten services, with evidence notes stored beside each item rather than inferred from publication, reviews or imagery.
- **Hub boundary:** concise cards group Lawn Care, Outdoor Spaces, Cleanup and Winter needs and route to canonical service pages. No service-detail body, FAQ, process, review framing or area paragraph is duplicated; a five-word-phrase comparison found only limited necessary service terminology after the Snow summary was rewritten.
- **Claims and provenance:** visible copy treats selection as an estimate conversation, not a formal maintenance product, contract, subscription, schedule, bundle or SLA. It adds no crew, equipment, response, price, count, subtype, client, portfolio, result or guarantee claim. The page displays no image or review excerpt, so neither becomes commercial-capability evidence.
- **Schema and links:** the graph contains one WebPage, one ten-entry ItemList and one BreadcrumbList, with sequential UI/schema parity and Home → Commercial Property Services breadcrumbs. It contains no Service, OfferCatalog, Offer, Product, Review, AggregateRating, LocalBusiness, address or geo. Required links lead to Service Areas, Our Work, Reviews and Contact while those routes remain planned 404s.
- **Architecture, language and performance:** one lightweight static route and typed commercial content record reuse the shared interior shell, metadata, breadcrumbs, contact paths and existing CSS. All visible strings have Spanish translations; no image, video, client component, fetch, dependency, form or analytics event was added.
- **Route and browser QA:** production returns 200 for the hub and all ten services, and non-redirecting branded 404s for required future routes and eight commercial aliases. Fresh `1440×900`, `1280×800`, `390×844` and `320×568` contexts passed English/Spanish, full UTM preservation, stable metadata/canonical, sequential cards, focus/Escape, reduced motion, overflow/clipping, fixed-action/footer separation and clean-console checks.
- **Passed checks:** `pnpm validate:commercial`; all Tasks 7–16 focused validators; Services/content/SEO/navigation/analytics/homepage validators; `pnpm exec tsc --noEmit --incremental false`; `pnpm build`; final production source/status/schema/query/sitemap/inbound-link assertions; Playwright browser QA; and `git diff --check`.
- **Unavailable check:** `Unavailable — ESLint is not installed`. The existing `pnpm lint` script exits at `eslint .`; Task 17 does not install ESLint.
- **Task status:** Task 17 is `[x]` Completed because all four exact Definition of Done items and the expanded capability, parity, lifecycle, provenance, responsive and regression requirements pass. Task 18 was not started.
- **Exact next action:** commit only legitimate Task 17 changes as `feat(seo): add commercial property services hub`, verify a clean worktree, report the local result and STOP before Task 18.

### Prior checkpoint — Task 15 complete, 2026-08-31 (Asia/Amman)

- **Authorized scope:** Task 15 only — Grading Service Page. Task 16 and later remain unauthorized and `[ ]` Not started.
- **Baseline and checkpoint:** Task 15 began from clean `main` at `aeee077` (`feat(seo): add fall cleanup and leaf removal service page`) and resumed from clean WIP checkpoint `d9b0152` without discarding its implementation.
- **Ownership and publication:** `/services/grading` now owns `yard grading des moines ia` plus the four exact lawn-, service-, property- and uneven-yard grading secondary phrases. It uses the exact singular-`Service` title, plural-`Services` H1, approved description and query-free canonical. Exactly one service was promoted, bringing published service details to nine and the sitemap to exactly eleven URLs; Snow Removal remains planned and unpublished.
- **Capability boundary:** visible English and Spanish copy advertise only high-level Yard Grading for uneven ground and outdoor-area preparation. The page does not claim drainage engineering/correction, water or runoff outcomes, foundation work/protection, excavation, engineered erosion control, credentials, exact slopes, equipment, permits, utilities, soil/material inclusions, specialized project uses, price, contract or guarantee. The unsupported orphaned drainage-reshaping translation was removed.
- **Ownership separation and links:** contextual links keep Yard Cleanup/Ground Clearance, Landscaping and drainage-specific intent separate. Required crawlable paths lead to Yard Cleanup, Landscaping, Our Work and Contact without claiming Our Work contains verified Grading projects.
- **Media and review provenance:** every plausible local gallery and before/after candidate was visually audited. None proves Grading, drainage, excavation, Mo's authorship, city, customer or result. The page therefore uses neutral `contact.webp` with observable labeling and no work preview. No review confirms Grading; Rick Terrones and Zach Ten Haken remain verbatim, explicitly general company feedback with no Review/AggregateRating schema.
- **Architecture and performance:** one typed content module reuses the dynamic route, shared server renderer, metadata/schema builders, breadcrumbs, five-area architecture, reviews, FAQs, CTAs and translations. No page-specific client JavaScript or dependency was added. A narrow optional hero-loading field lets the long Grading hero image lazy-load below the initial mobile viewport, eliminating an observed unused-preload warning while preserving Tasks 7–14 defaults.
- **Schema and source:** production source contains one WebPage, exactly one Service, one BreadcrumbList and the approved Organization/provider reference with matching Home → Services → Grading breadcrumbs. JSON-LD contains none of the specialized or outcome claims prohibited above; query parameters leave the exact English title and canonical stable.
- **Route/browser QA:** production returns 200 for Tasks 7–15 and branded 404s without redirects for Snow Removal, ten Grading/drainage aliases and an arbitrary invalid slug. Fresh `1440×900`, `1280×800`, `390×844` and `320×568` contexts passed current-state, all sections, Spanish/UTM, focus/Escape, reduced-motion, image, overflow/clipping, fixed-action/footer and zero-console-warning/error checks.
- **Passed checks:** `pnpm validate:grading`; all Tasks 7–14 focused validators; Services/content/SEO/navigation/analytics/homepage validators; `pnpm exec tsc --noEmit --incremental false`; `pnpm build`; production source/schema/query/sitemap and route-isolation assertions; Playwright browser QA; and `git diff --check`.
- **Unavailable check:** `Unavailable — ESLint is not installed`. The existing `pnpm lint` script exits at `eslint .`; Task 15 does not install ESLint.
- **Task status:** Task 15 is `[x]` Completed because the exact plan DoD and all user-specified scope, ownership, provenance, lifecycle and QA conditions pass. Task 16 was not started.
- **Exact next action:** amend the clean WIP checkpoint as `feat(seo): add grading service page`, verify a clean worktree, report the local result and STOP before Task 16.

### Prior checkpoint — Task 14 complete, 2026-08-31 (Asia/Amman)

- **Authorized scope:** Task 14 only — Fall Cleanup and Leaf Removal Service Page. Task 15 and later remain unauthorized and `[ ]` Not started.
- **Baseline:** Task 14 began from clean `main` at `4c0dfcb` (`feat(seo): add spring cleanup service page`). `git status --short` returned no entries before the first edit.
- **Ownership and consolidation:** `/services/fall-cleanup-leaf-removal` now owns commercial `leaf removal des moines ia` intent plus the four exact Fall Cleanup, Fall Yard Cleanup, Leaf Cleanup and Leaf Removal Service secondary phrases. It uses the exact approved title, description, H1 and query-free canonical. No separate fall, leaf, leaves, fall-yard, leaf-cleanup, fall-leaf or seasonal-leaf route was added.
- **Commercial/article separation:** the service page answers whether Mo's offers Fall Cleanup and Leaf Removal and how to request an estimate. The future `/blog/fall-leaf-cleanup-des-moines` remains planned, unpublished, absent from the page and sitemap, and reserved for researched timing, organization, disposal and municipal informational guidance in Task 32; Task 35 retains future reciprocal-link hardening.
- **Capability boundary:** visible copy makes only the approved high-level Fall Cleanup, Leaf Removal and seasonal-debris claims. It publishes no affirmative collection, bagging, curb placement, loading, hauling, disposal, composting, recycling, hard-surface clearing/blowing, branch/brush, equipment, mowing inclusion, bed work, landscaping, municipal-rule, fixed-date, weather, guaranteed-removal, price, package or contract claim. Property-specific scope and current availability remain estimate questions.
- **Ownership separation and links:** contextual anchors lead to Yard Cleanup for broad/non-seasonal cleanup, Lawn Mowing for routine grass cutting, Snow Removal for a separate winter request and Contact through the shared estimate CTAs. Copy does not absorb Spring Cleanup, Flower Bed Maintenance or Landscaping and does not imply a fall/snow bundle. Snow Removal remains a branded 404 until Task 16.
- **Architecture and publication:** one typed content module reuses the dynamic route, shared server renderer, metadata/schema builders, breadcrumbs, service areas, review/FAQ/CTA structures and translations. Exactly one service was added to the explicit allowlist, bringing published service details to eight and the sitemap to exactly ten URLs. No page-specific route/template, client JavaScript, dependency, Task 15 module or article module was added.
- **Media provenance:** the autumnal seasonal asset, neutral property image, local gallery and before/after candidates were visually audited separately from filenames. The fall-looking asset does not prove Mo's authorship, service, season date, city, customer or result. The hero therefore uses `contact.webp` with observable neutral alt/caption language, and the optional work preview is omitted.
- **Review provenance:** all 106 approved review records were searched. No excerpt explicitly mentions Fall Cleanup, Leaf Removal or leaf cleanup; the only word-form hit using “leaves” is a verb and is not leaf-service evidence. Rick Terrones and Zach Ten Haken remain verbatim, clearly labeled general company feedback, not fall-service proof. No Review or AggregateRating schema is emitted.
- **Schema, source and lifecycle:** production source contains one WebPage, exactly one Service, one BreadcrumbList and the approved Organization/provider reference with matching Home → Services → Fall Cleanup & Leaf Removal breadcrumbs. Production returns 200 for Tasks 7–14 and 404 without redirects for Tasks 15–16, seven fall/leaf aliases, an arbitrary invalid slug and the future article. Query parameters do not change the English title or canonical.
- **Browser and accessibility QA:** fresh production contexts pass at `1440×900`, `1280×800`, `390×844` and `320×568`. Checks cover the current service state, breadcrumb, all sections, reviews, five areas, FAQs, links, CTAs/footer, complete Spanish translation and UTM preservation, stable metadata/canonical, skip focus, desktop/mobile Escape and focus return, reduced motion, hero loading, zero overflow/clipping, no final/footer fixed-action collision and zero fresh-context console errors/warnings.
- **Passed checks:** `pnpm validate:fall-cleanup-leaf-removal`; all Tasks 7–13 focused validators; Services/content/SEO/navigation/analytics/homepage validators; `pnpm exec tsc --noEmit --incremental false`; `pnpm build`; production source/schema/query/sitemap and route-isolation assertions; Playwright browser QA; and `git diff --check`.
- **Unavailable check:** `Unavailable — ESLint is not installed`. The existing `pnpm lint` script exits 1 at `eslint .`; Task 14 does not install ESLint or add dependency/lockfile churn.
- **Task status:** Task 14 is `[x]` Completed because all four plan Definition of Done groups and all eight user-specified completion conditions pass. Task 15 was not started.
- **Exact next action:** stage and commit only legitimate Task 14 changes as `feat(seo): add fall cleanup and leaf removal service page`, verify a clean worktree, report the local result and STOP before Task 15.

### Prior checkpoint — Task 13 complete, 2026-08-31 (Asia/Amman)

- **Authorized scope:** Task 13 only — Spring Cleanup Service Page. Task 14 and later remain unauthorized and `[ ]` Not started.
- **Baseline:** Task 13 began from clean `main` at `4c3b2fe` (`feat(seo): add yard cleanup service page`). `git status --short` returned no entries before the first edit.
- **Ownership and intent:** `/services/spring-cleanup` now owns commercial `spring cleanup des moines ia` intent with the exact title, description, H1, three secondary phrases and query-free canonical. The future `/blog/spring-lawn-cleanup-des-moines` remains planned, unpublished, unlinked from this page and responsible for informational checklist intent in Task 31/35.
- **Capability boundary:** the page states only the advertised high-level Spring Cleanup service, approved residential/commercial context, five communities and free-estimate path. It publishes no affirmative debris, leaf/branch, hauling, disposal, pruning/cutback, edging, mowing-inclusion, bed-work, mulch, weeds/treatments, fertilization, aeration/seeding, fixed-date, weather, municipal-rule, price, contract or guarantee claim.
- **Ownership separation and links:** crawlable contextual links lead to Lawn Mowing, Flower Bed Maintenance, Yard Cleanup and Landscaping; shared hero/final CTAs lead to Contact and the breadcrumb retains Services. Copy keeps each neighboring service distinct rather than treating it as included.
- **Architecture and publication:** one new typed content module reuses the dynamic route, server renderer, metadata/schema builders, breadcrumbs, service areas, CTAs and translations. Exactly one service was added to the explicit allowlist, bringing the published detail count to seven and the sitemap to exactly nine URLs. Tasks 14–16 remain planned branded 404s.
- **Media provenance:** the seasonal and local property-care assets were inspected visually. None proves Spring Cleanup work, Mo’s authorship, capture season/date, city, customer or result. The hero therefore uses the existing neutral `contact.webp` property image with observable alt/caption language, and the optional work preview is omitted.
- **Review provenance:** no approved excerpt explicitly confirms Spring Cleanup. The Rick Terrones and Zach Ten Haken excerpts remain verbatim and are labeled as general company feedback, not Spring Cleanup task, process, timing or result proof. No Review or AggregateRating schema is emitted.
- **Schema and source:** production source contains one WebPage, exactly one Service, one BreadcrumbList, the approved Organization/provider reference and matching Home → Services → Spring Cleanup breadcrumbs. Service schema contains no hidden task list, debris/hauling/disposal, fertilizer, aeration/seeding, fixed schedule, price or guarantee.
- **Route and article isolation:** production returns 200 for Tasks 7–13 and branded 404s without redirects for Tasks 14–16, five Spring Cleanup aliases, an arbitrary invalid slug and the future Spring Cleanup article. Query parameters do not change the English title or clean canonical.
- **Browser and accessibility QA:** fresh production contexts pass at `1440×900`, `1280×800`, `390×844` and `320×568`. Checks cover active/current service navigation, breadcrumb, all content, related links, reviews, areas, FAQs, CTAs/footer, complete Spanish translations and UTM preservation, stable metadata/canonical, skip focus, mobile-menu Escape/focus return, reduced motion, image loading, zero overflow/clipping, no final-CTA/fixed-action collision and zero fresh-context console errors/warnings.
- **Passed checks:** `pnpm validate:spring-cleanup`; all Tasks 7–12 focused validators; Services/content/SEO/navigation/analytics/homepage validators; `pnpm exec tsc --noEmit --incremental false`; `pnpm build`; production route/source/schema/sitemap assertions; Playwright browser QA; and `git diff --check`.
- **Unavailable check:** `Unavailable — ESLint is not installed`. The existing `pnpm lint` script exits 1 at `eslint .`; Task 13 does not install ESLint or add dependency/lockfile churn.
- **Task status:** Task 13 is `[x]` Completed because all three Definition of Done items are satisfied. Task 14 was not started.
- **Exact next action:** stage and commit only legitimate Task 13 changes as `feat(seo): add spring cleanup service page`, verify a clean worktree, report the local result and STOP before Task 14.

### Prior checkpoint — Task 12 complete, 2026-08-31 (Asia/Amman)

- **Authorized scope:** Task 12 only — Yard Cleanup Service Page. Task 13 and later remain unauthorized and `[ ]` Not started.
- **Baseline:** Task 12 began from clean `main` at `27ea531` (`feat(seo): add flower bed maintenance service page`). `git status --short` returned no entries before the first edit.
- **Ownership and consolidation:** `/services/yard-cleanup` now owns `yard cleanup des moines ia` plus Yard Cleanup, Overgrown Yards Cleanup and Ground Clearance terminology in one useful page. The exact title, description, H1, five secondary keywords and query-free canonical are unchanged from the approved registry; no overgrown-yard, ground-clearance, property-cleanup, overgrown-lawn or city/cleanup alias was created.
- **Capability boundary:** the visible page stays within ordinary property cleanup and overgrown-property context. Ground Clearance is explicitly a consolidated ordinary property-care label rather than evidence of lot/forestry clearing, heavy equipment, excavation, grading, demolition or land development. No affirmative hauling, disposal, dumping, junk/trash/hazardous-waste handling, construction debris, tree/stump removal, brush/branch hauling, equipment, recurring schedule, turnaround, price, contract or guarantee claim is published.
- **Ownership separation and links:** crawlable contextual links lead to Lawn Mowing, Spring Cleanup, Fall Cleanup & Leaf Removal, Grading and Landscaping; shared hero/final CTAs lead to Contact and the breadcrumb retains Services. Copy keeps routine mowing, seasonal cleanup, grading and landscaping as separate intents rather than automatic inclusions. Tasks 13–16 destinations remain branded 404s.
- **Architecture and publication:** one new typed content module reuses the established dynamic service route, server renderer, metadata/schema builders, breadcrumbs, service areas, CTAs, translations and publication lifecycle. Exactly one service was added to the allowlist, bringing the published detail count to six. No page-specific client component, template, dependency, form, analytics event or Task 13 content module was added.
- **Media provenance:** repository media was audited visually. No asset proves Yard Cleanup, Ground Clearance, overgrown-property work, project authorship, city, customer, timing or before/after provenance. The hero therefore uses the existing neutral `contact.webp` property image with observable alt/caption language, and the optional work preview is absent.
- **Review provenance:** the Morgan Wentland and Danielle Russell excerpts are verbatim from the approved repository review source and explicitly mention yard cleanup. Surrounding copy identifies them as individual experiences, not proof of a standard process, inclusion, turnaround or guaranteed result. No Review or AggregateRating schema is emitted.
- **Schema, source and sitemap:** production source contains the exact head data, one H1, visible consolidated copy and required links, Home → Services → Yard Cleanup breadcrumbs, one WebPage, exactly one Service, one BreadcrumbList and the approved Organization/provider reference. JSON-LD contains no hauling, disposal, equipment, excavation, grading, heavy-clearing or hazardous-waste claim. The sitemap contains exactly `/`, `/services` and the six authorized detail URLs.
- **Route isolation:** production returns 200 for Tasks 7–12 and branded noindex 404s for Tasks 13–16, all five prohibited cleanup aliases and an arbitrary invalid slug. Query parameters do not change the English title or clean canonical.
- **Browser and accessibility QA:** fresh production contexts pass at `1440×900`, `1280×800`, `390×844` and `320×568`. Checks cover active Services/current Yard Cleanup state, breadcrumb, hero, all content sections, reviews, areas, FAQs, CTA/footer, Spanish and complete UTM preservation, stable title/canonical, skip-link focus, mobile-menu Escape/focus return, reduced-motion durations, image loading, zero horizontal overflow, no clipped translated H1/breadcrumb/CTA, no fixed-control/footer collision and zero application console errors/warnings, including no unused image-preload warning.
- **Passed checks:** `pnpm validate:yard-cleanup`; Tasks 7–11 focused validators; Services/content/SEO/navigation/analytics/homepage validators; `pnpm exec tsc --noEmit --incremental false`; `pnpm build`; production route/source/schema/sitemap assertions; Playwright responsive/language/focus/reduced-motion/console QA; and `git diff --check`.
- **Unavailable check:** `Unavailable — ESLint is not installed`. The existing `pnpm lint` script exits 1 at `eslint .`; Task 12 does not install ESLint or add dependency/lockfile churn.
- **Task status:** Task 12 is `[x]` Completed because all four Definition of Done items are satisfied. Task 13 was not started.
- **Exact next action:** stage and commit only the legitimate Task 12 changes as `feat(seo): add yard cleanup service page`, verify a clean worktree, report the local result and STOP before Task 13.

### Prior checkpoint — Task 11 complete, 2026-08-31 (Asia/Amman)

- **Authorized scope:** Task 11 only — Flower Bed Maintenance Service Page. Task 12 and later remain unauthorized and `[ ]` Not started.
- **Baseline and checkpoint:** Task 11 resumed from WIP checkpoint `0186fad` above clean Task 10 commit `205329c` (`feat(seo): add landscaping service page`). The existing implementation was preserved except for one responsive defect proven by the remaining browser QA.
- **Ownership and publication:** `/services/flower-bed-maintenance` now owns `flower bed maintenance des moines` with the exact approved title, description, H1, secondary search terminology and query-free self-canonical. Exactly one route changed from planned to implemented/published/indexable, and the service publication allowlist now contains exactly five details through Flower Bed Maintenance.
- **Architecture:** the page reuses the existing dynamic service route, typed content model, metadata/schema builders, breadcrumbs and shared service-detail renderer. No parallel template, page-specific client JavaScript, new dependency, form, analytics event or Task 12 module was introduced. The only shared renderer change is a narrow `min-w-0`/responsive word-wrapping guard on final service CTAs after production QA proved the Spanish Task 11 CTA overflowed at 320 px.
- **Capability boundary:** Flower Bed Maintenance is the sole approved starting capability. The page does not claim gardening or horticultural expertise, planting or flower selection, cutback/deadheading/pruning/trimming, edging, weed removal or treatment, mulch/rock/material installation, fertilization, pesticide/herbicide use, plant-health treatment, design/redesign, installation, hauling/disposal, recurring or seasonal schedules, guarantees, pricing or contracts. Search terminology identifies the consolidated need without inventing Mo's process.
- **Intent separation:** ordinary crawlable links lead to Landscaping, Spring Cleanup, Fall Cleanup & Leaf Removal, Yard Cleanup and Contact. Copy explicitly keeps whole-space Landscaping, whole-yard cleanup and broader seasonal cleanup outside the Flower Bed Maintenance scope; all future destinations remain unpublished branded 404s until their own tasks.
- **Media provenance:** no service-specific Flower Bed Maintenance image provenance was verified. The hero uses only existing `gallery7.webp` with observable outdoor-area alt/caption language and no service, result, project-author, city, customer, property-type, season or date attribution. The optional three-image work preview is absent.
- **Reviews:** the Tony Dugan excerpt remains verbatim and attributable customer speech that explicitly mentions his landscape beds; the surrounding label states that it is one individual experience, not a standard process, inclusion or result. The Rick Terrones excerpt remains verbatim and clearly labeled general company feedback. No Review or AggregateRating schema is emitted.
- **Rendered source and schema:** production source contains the exact title, description, one exact H1, clean canonical, required English content and links, visible Home → Services → Flower Bed Maintenance breadcrumb, one WebPage, exactly one Service, one BreadcrumbList and the existing Organization/provider reference. Visible/schema breadcrumbs match, query parameters do not alter title/canonical, and JSON-LD contains no stronger capability than visible copy.
- **Route and sitemap isolation:** production returns 200 for the five authorized service details and branded noindex 404s for Tasks 12–16, tested bed-service aliases and an arbitrary invalid slug. The sitemap contains exactly `/`, `/services`, and the five authorized service-detail URLs; no Task 12–16 URL appears.
- **Browser and accessibility QA:** fresh production contexts pass at `1440×900`, `1280×800`, `390×844` and `320×568`. Checks cover header and active Services context, breadcrumb, hero, every Flower Bed Maintenance section, related links, review labeling, service areas, FAQs, CTA, footer, mobile navigation/current service, Spanish and complete UTM preservation, stable title/canonical, visible skip-link focus, Escape/focus return, reduced-motion durations of `0.00001s`, successful hero loading, zero horizontal overflow, no clipped Spanish H1/breadcrumb/CTA, no fixed-control/footer collision and zero application console errors/warnings, including no unused image-preload warning.
- **Passed checks:** `pnpm validate:flower-bed-maintenance`; Tasks 7–10 focused validators; Services/content/SEO/navigation/analytics/homepage validators; `pnpm exec tsc --noEmit --incremental false`; repeated `pnpm build`; production route/source/schema/sitemap assertions; browser QA; and `git diff --check`.
- **Unavailable check:** `Unavailable — ESLint is not installed`. The existing `pnpm lint` script exits 1 at `eslint .`; Task 11 does not install ESLint or add dependency/lockfile churn.
- **No external action:** no deployment, production/account change, Google Business Profile edit, indexing request or analytics activation occurred.
- **Task status:** Task 11 is `[x]` Completed because all four Definition of Done items are satisfied. Task 12 was not started.
- **Exact next action:** amend the valid WIP checkpoint as `feat(seo): add flower bed maintenance service page`, report the local result and STOP before Task 12.

### Prior checkpoint — Task 10 complete, 2026-08-31 (Asia/Amman)

- **Authorized scope:** Task 10 only — Landscaping Service Page. Task 11 and later remain unauthorized and `[ ]` Not started.
- **Baseline and checkpoint:** Task 10 resumed from the existing WIP checkpoint above clean Task 9 commit `20337d3` (`feat(seo): add fertilization and weed control service page`). Accidental Playwright/output artifacts remain removed and are not part of the Task 10 change.
- **Ownership and publication:** `/services/landscaping` now owns `landscaping des moines ia` with the exact approved title, description, H1, secondary terminology and query-free self-canonical. The publication allowlist contains exactly Lawn Mowing, Aeration and Seeding, Fertilization & Weed Control, and Landscaping; no landscaping alias or Task 11–16 route is registered or indexable.
- **Capability boundary:** Landscaping is the only confirmed high-level capability reused. The page does not claim landscape architecture/design credentials, a design package, installation, engineering, drainage correction, construction, hardscape, retaining walls, patios/pavers, irrigation, lighting, excavation, planting programs, sod installation, tree/stump removal, grading as an included process, a formal workflow, project schedule, pricing, contract or guarantee.
- **Intent separation:** ordinary crawlable links keep Flower Bed Maintenance, Grading and Yard Cleanup as distinct future intents rather than automatic Landscaping inclusions. Additional contextual links lead to Our Work, Commercial Property Services and Contact while those future destinations remain unpublished until their own tasks authorize them.
- **Media provenance:** the shared service renderer accepts an optional server-rendered work preview, and only Landscaping opts into it. The preview contains exactly three existing local 1600×1200 archive images; the full 79-image source list is not serialized. Direct inspection supports only observable descriptions of exposed soil/dark material, rolled turf beside an edged soil area/lawn, and a person using a walk-behind machine over exposed soil.
- **Attribution restraint:** the preview and hero do not invent a city, Des Moines attribution, customer identity, commercial/residential classification, Landscaping-project attribution, service performed, installation/redesign claim, date or season. Their visible alt/caption copy remains neutral, and no image is represented as proof of a completed Landscaping project.
- **Reviews:** no approved review excerpt verifies completed landscaping work. Two verbatim excerpts are therefore labeled as general company feedback and explicitly not Landscaping capability/project/result proof; no Review or AggregateRating schema is emitted.
- **Schema and source:** rendered production source contains the exact title, description, one exact H1, clean canonical, required English content and links, visible Home → Services → Landscaping breadcrumb, one WebPage, one Service, one BreadcrumbList, provider reference and visible/schema breadcrumb parity. Query parameters do not change title or canonical, and unsupported capabilities are absent from JSON-LD.
- **Route and sitemap isolation:** production returns 200 for the four authorized service details and branded noindex 404s without redirects for Tasks 11–16, arbitrary invalid slugs and tested Landscaping aliases. The sitemap contains exactly `/`, `/services` and the four authorized detail URLs.
- **Responsive refinement:** visual QA identified a one-letter desktop orphan in the Landscaping H1. A typed, opt-in compact desktop heading size fixes that page at 1280 and 1440 while leaving mobile and Tasks 7–9 on their established sizing. The complete post-fix matrix has zero horizontal overflow, clipped headings/captions or fixed-control/footer collision.
- **Browser QA:** fresh production contexts pass at `1440×900`, `1280×800`, `390×844` and `320×568`. Checks cover header, active Services context, breadcrumb, hero, all Landscaping sections, three-image preview, related links, general-feedback labeling, service areas, FAQs, CTA, footer, mobile navigation/current service, Spanish, UTM preservation, stable metadata/canonical, visible skip focus, Escape/focus return, reduced motion, image loading and zero application console errors/warnings.
- **Passed checks:** `pnpm validate:landscaping`; Tasks 7–9 focused validators; Services/content/SEO/navigation/analytics/homepage validators; `pnpm exec tsc --noEmit --incremental false`; repeated `pnpm build`; production route/source/schema/sitemap assertions; browser QA; and `git diff --check`.
- **Unavailable check:** `pnpm lint` exits 1 because the existing script invokes `eslint .` while ESLint is not installed or declared. No dependency or lockfile change was introduced.
- **No external action:** no deployment, production/account change, Google Business Profile edit, indexing request or analytics activation occurred.
- **Task status:** Task 10 is `[x]` Completed because all four Definition of Done items are satisfied. Task 11 was not started.
- **Exact next action:** amend the valid WIP checkpoint as `feat(seo): add landscaping service page`, report the local result and STOP before Task 11.

### Prior checkpoint — Task 9 complete, 2026-08-30 (Asia/Amman)

- **Authorized scope:** Task 9 only — Fertilization and Weed Control Service Page. Task 10 and later remain unauthorized and `[ ]` Not started.
- **Baseline:** Task 9 began from clean `main` at `b97f138` (`feat(seo): add aeration and seeding service page`). `git status --short` returned no entries before the first edit.
- **Ownership and consolidation:** `/services/fertilization-weed-control` now owns `lawn fertilization des moines ia` with the exact approved title, description, H1, secondary keywords and query-free self-canonical. Fertilization and weed-control intent remains one paired page; no fertilization, weed-control, lawn-treatment, lawn-fertilizer, herbicide-treatment or city/service alias was created.
- **Architecture and publication:** one new typed service content module reuses the Tasks 7–8 dynamic route, metadata/schema builders, breadcrumb graph and shared service renderer. The explicit publication allowlist contains exactly Lawn Mowing, Aeration and Seeding, and Fertilization & Weed Control; Tasks 10–16 remain planned and return branded 404s.
- **Content and safety boundary:** the page covers unwanted-weed concerns, consideration of fertilization, residential/commercial context, five approved areas, distinct relationships to mowing and Aeration and Seeding, six estimate-oriented FAQs and clear Contact/call paths. It names no specific product/brand, active ingredient, chemical, fertilizer formula, material type, pesticide/herbicide method, equipment, diagnostic process, application count, schedule, credential, health/environment assurance, price/contract or guaranteed result.
- **Media and reviews:** no repository image or review has verified fertilization/weed-control provenance. The hero therefore uses the existing neutral property image with observable alt/caption and explicit no-service/result/city/customer attribution. Two verbatim general Google review excerpts are labeled as general feedback and explicitly not treatment evidence; no Review/AggregateRating schema is emitted.
- **Schema and breadcrumbs:** one coherent graph emits Organization/WebSite, WebPage, one consolidated Service with the existing `#organization` provider and five approved City/State areas, and one BreadcrumbList. Visible/schema hierarchy is Home → Services → Fertilization & Weed Control. No Product, Offer, FAQPage, Review, rating, price, address, geo, credential or chemical detail is encoded.
- **Language and responsive refinement:** every new visible content string has an explicit Spanish translation that preserves the English safety boundary. The shared current breadcrumb now wraps rather than ellipsizing long translated labels, and the shared service H1 uses a narrow-screen fluid size/viewport measure while retaining the established desktop measure. At 320 px the full Spanish breadcrumb and H1 fit inside the viewport without horizontal overflow.
- **Performance and analytics:** the page remains statically generated and adds no client component, fetch, video, gallery/review archive, form implementation, analytics event or dependency. It reuses the single existing eager hero-image strategy. Task 4's exact five-event allowlist and PII-safe lead semantics remain unchanged.
- **Route/source QA:** production output returns 200 for the three authorized service details and 404 for Tasks 10–16, the three prohibited treatment aliases tested, and an arbitrary invalid slug. Rendered source contains the exact head data, one H1, core English content, required links, visible breadcrumb and WebPage/Service/BreadcrumbList graph; query parameters never enter the canonical.
- **Browser QA:** production-browser checks passed at `1440×900`, `1280×800`, `390×844` and `320×568`; checks covered active Services context, hero/content/related/reviews/areas/FAQs/CTA/footer, English/Spanish, complete GBP UTM preservation, mobile menu Escape/focus return, skip-link focus, reduced motion, fixed controls, zero horizontal overflow and a final console with zero errors/warnings.
- **Passed checks:** `pnpm validate:fertilization-weed-control`; Tasks 7–8 focused validators; Services/content/SEO/navigation/analytics/homepage validators; `pnpm exec tsc --noEmit --incremental false`; repeated `pnpm build`; production status/source/schema/sitemap assertions; browser QA; `git diff --check`.
- **Unavailable check:** `pnpm lint` exits 1 because the existing script invokes `eslint .` while ESLint is not installed or declared. Task 9 adds no dependency or lockfile churn.
- **No external action:** no deployment, production/account setting, live estimate delivery, Google Business Profile edit or GA4 activation occurred.
- **Task status:** Task 9 is `[x]` Completed because every Definition of Done item is satisfied. Task 10 was not started.
- **Exact next action:** commit the authorized Task 9 changes, report the local result and STOP before Task 10.

### Prior checkpoint — Task 8 complete, 2026-08-30 (Asia/Amman)

- **Authorized scope:** Task 8 only — Aeration and Seeding Service Page. Task 9 and later remain unauthorized and `[ ]` Not started.
- **Baseline:** Task 8 began from clean `main` at `16c96dd` (`feat(seo): add lawn mowing service page`). `git status --short` returned no entries before the first edit.
- **Ownership and consolidation:** `/services/aeration-overseeding` now owns `lawn aeration des moines ia` with the exact approved title, description, H1, secondary keywords and clean self-canonical. The search-oriented slug captures overseeding terminology while visible capability copy consistently presents one `Aeration and Seeding` offering. No standalone aeration, seeding, overseeding, core-aeration, lawn-seeding or city/service route was created.
- **Architecture:** Task 8 adds one typed service content module to the explicit published-service allowlist and reuses the Task 7 dynamic route, metadata builder, breadcrumb system, Service graph builder, server template, visual layout and CSS. The smallest shared generalization extracted the service content type and moved image captions, related-section copy, FAQ intro copy and service-unique heading IDs into the content record; Lawn Mowing retains its exact visible copy and ownership.
- **Content:** the page renders a neutral image-led hero and estimate/call actions; thin/compacted lawn decision framing; explicitly bounded Aeration and Seeding scope; four contextual service paths; residential/commercial property context; two attributed aeration-related Google review excerpts; distinct five-community coverage wording; six service-specific FAQs; and a final estimate/call CTA.
- **Claim boundary:** the page does not claim a core machine or method, plug dimensions, pass count, slit/broadcast seeding, seed placement, seed blend/cultivar, soil-preparation method, watering program, fertilizer/weed-control package, fixed timing/date/temperature, germination timeline, establishment result, guarantee, price or contract. `core aeration` and `overseeding` appear as search language with explicit public-fact boundaries, not as invented operating details.
- **Internal links and future boundary:** ordinary contextual anchors lead to Fertilization & Weed Control, Lawn Mowing, Spring Cleanup, Services and Contact. The Task 28–29 aeration/overseeding articles remain planned, unpublished, absent from the page and absent from the sitemap.
- **Media and reviews:** no image has verified aeration/seeding provenance, so the hero uses the existing neutral `contact.webp` property image with observable alt text and a visible no-service/no-city/no-customer attribution. The Lori Stiles and Mark McGrew excerpts are verbatim from the approved repository review source and explicitly mention aeration; they are labeled as individual Google review experiences and produce no Review/AggregateRating schema.
- **Schema and breadcrumbs:** one coherent graph emits the shared Organization/WebSite, one WebPage, one consolidated Service with the existing `#organization` provider and five approved City/State areas, plus one BreadcrumbList. Visible and schema hierarchy both read Home → Services → Aeration & Seeding. No FAQPage, Offer, price, review/rating, address, geo or duplicate service entity is emitted.
- **Publication and sitemap:** static generation contains only Lawn Mowing and Aeration and Seeding service details. Both return HTTP 200. Tasks 9–16, arbitrary invalid slugs and `/services/aeration`, `/services/seeding`, `/services/overseeding` return branded HTTP 404 without redirects. Sitemap output is exactly `/`, `/services`, `/services/lawn-mowing` and `/services/aeration-overseeding`.
- **Language, accessibility and responsive QA:** every new visible content string has an explicit Spanish translation. At 320 px the translated H1, breadcrumbs, related links and CTAs wrap without horizontal overflow; the full GBP UTM query survives switching to `lang=es`, while English metadata and the clean canonical remain unchanged. The page has one H1, logical headings, semantic links, visible breadcrumbs/focus, meaningful alt, touch-friendly actions, preserved skip focus, working mobile-menu Escape/focus return and reduced-motion durations of `0.00001s`.
- **Performance and analytics:** the page stays statically generated and adds no client component, fetch, form, video, gallery archive, review archive, raw `gtag` or analytics event. Its single local hero image uses Task 7's eager-without-preload strategy; the fresh production browser console reported zero errors and zero warnings, including no unused-preload warning. Task 4's exact five-event allowlist and confirmed-delivery lead behavior remain unchanged.
- **Browser QA:** local production-build browser checks passed at `1440×900`, `1280×800`, `390×844` and `320×568`; checks covered header, Services active context, breadcrumbs, all visible sections, related links, reviews, coverage, FAQs, CTA/footer, English/Spanish, full UTM preservation, mobile drawer, Escape/focus return, skip focus, reduced motion, zero horizontal overflow, no clipping/fixed-control collision and a clean console.
- **Passed checks:** `pnpm validate:aeration-seeding`; `pnpm validate:lawn-mowing`; `pnpm validate:services`; `pnpm validate:content`; `pnpm validate:seo`; `pnpm validate:navigation`; `pnpm validate:analytics`; `pnpm validate:homepage`; `pnpm exec tsc --noEmit --incremental false`; repeated `pnpm build`; `git diff --check`; production rendered-source/schema/sitemap assertions; complete route-isolation assertions; and Playwright responsive/language/focus/reduced-motion/console checks.
- **Unavailable check:** `pnpm lint` exits 1 because the existing script invokes `eslint .` while ESLint is not installed or declared. Task 8 adds no dependency or lockfile churn to change that repository-wide condition.
- **No external action:** no deployment, production/account setting, live estimate delivery, Google Business Profile edit or GA4 activation occurred.
- **Task status:** Task 8 is `[x]` Completed because all four Definition of Done conditions are satisfied. Task 9 was not started.
- **Exact next action:** commit the authorized Task 8 changes, report the local result and STOP before Task 9.

### Prior checkpoint — Task 7 complete, 2026-08-30 (Asia/Amman)

- **Authorized scope:** Task 7 only — Lawn Mowing Service Page. Task 8 and later remain unauthorized and `[ ]` Not started.
- **Baseline:** Task 7 began from clean `main` at `649656b` (`feat(seo): add services index`). `git status --short` returned no entries before the first edit.
- **Ownership and publication:** `/services/lawn-mowing` now owns `lawn mowing des moines ia` with the exact approved title, description, H1, secondary keywords and clean self-canonical. The route is implemented/published/indexable and is the third sitemap URL after `/` and `/services`; the other nine service-detail records remain planned and absent from the sitemap.
- **Route isolation:** the shared `app/services/[slug]` route generates static params only from the explicit published-service content list, which contains only `lawn-mowing`. Both metadata and page rendering read that allowlist and call `notFound()` for anything else. All Task 8–16 slugs and an arbitrary invalid slug return the branded HTTP 404. Runtime validation is explicit because Next 16.3 logged internal `NoFallbackError` noise with `dynamicParams=false`; `dynamicParams=true` plus the one-record allowlist preserves isolation without server errors.
- **Page architecture:** the reusable server service template renders an image-led hero with estimate and native phone actions; problem/decision context; confirmed scope; three contextual related-service paths; residential/commercial and portfolio context; two mowing-specific attributed review excerpts; non-identical five-community area wording; six truthful FAQs; and a final estimate/call CTA. Required Commercial, Our Work and Contact links are ordinary anchors. The future mowing article is not linked.
- **Truth and claim boundary:** no weekly/biweekly availability, mowing height, clipping handling, edging/blowing inclusion, equipment, crew/capacity, price, contract, response time, guarantee, treatment practice, project count or city-specific completed-work claim is presented as fact. FAQs explicitly leave frequency, inclusions and pricing to the estimate conversation. Residential/commercial availability is used only at the approved level.
- **Media and review provenance:** the hero uses the existing local property-care gallery image with observable alt text and an explicit visible no-city/no-customer attribution; it is not labeled a Des Moines or completed mowing project. No project block is fabricated. The two review excerpts already present in the verified repository review source explicitly mention mowing, remain verbatim and attributed, link to the approved Google Business Profile, and emit no Review or AggregateRating schema.
- **Schema and breadcrumbs:** the page emits one coherent graph containing the shared Organization/WebSite references, one WebPage, one Service with the established `#organization` provider and exactly the five approved City/State areas, plus one BreadcrumbList. Visible and schema hierarchy both read Home → Services → Lawn Mowing. No FAQPage, Offer, price, review/rating, address, geo or duplicate business node is emitted.
- **Design and performance:** the page extends the Bright Lawn editorial system with evergreen/paper section rhythm, existing typography, quiet borders, full-width visual hierarchy and restrained CSS motion. It adds no page-specific client component, form copy, video, fetch, review archive or gallery payload. The single local hero image is eagerly loaded without a preload; this removed the small-viewport unused-preload warning while keeping it non-lazy. Reduced-motion emulation lowers new animation/transition durations to `0.00001s`.
- **Language, accessibility and analytics:** all new visible strings have explicit Spanish translations. At 320 px the long Spanish H1 and CTAs wrap without overflow; switching from the complete GBP UTM URL changes only `lang`, while the English canonical/title remain stable. The page has exactly one H1, logical headings, visible breadcrumbs, meaningful alt, semantic links, visible focus, working skip-link focus, touch-sized CTAs and preserved mobile-menu Escape/focus return. Native phone activation leaves the route intact. Task 4's exact five-event allowlist and tracking/form implementation are unchanged and pass regression validation.
- **Browser QA:** production-browser checks passed at `1440×900`, `1280×800`, `390×844` and `320×568` with zero horizontal overflow. Home → Services → Lawn Mowing, breadcrumb return, related 404, Commercial 404, Our Work 404, Contact/free-estimate 404, native phone, language/UTM, mobile drawer, skip link, reduced motion and clean fresh-session console were exercised. Expected main-document 404 console entries appeared only during deliberate unpublished-link checks; the final valid-route production session had zero errors and zero warnings.
- **Passed checks:** `pnpm validate:lawn-mowing`; `pnpm validate:content`; `pnpm validate:seo`; `pnpm validate:navigation`; `pnpm validate:analytics`; `pnpm validate:homepage`; `pnpm validate:services`; `pnpm exec tsc --noEmit --incremental false`; repeated `pnpm build`; production rendered-HTML/schema/status/sitemap assertions; production route-isolation assertions; Playwright navigation/responsive/language/focus/reduced-motion/console checks; and `git diff --check`.
- **Unavailable check:** `pnpm lint` exits 1 because the existing script invokes `eslint .` while ESLint is not installed or declared. Task 7 adds no dependency or lockfile churn to change that repository-wide condition.
- **No external action:** no deployment, production/account setting, live estimate delivery, Google Business Profile edit or GA4 activation occurred.
- **Task status:** Task 7 is `[x]` Completed because all four Definition of Done conditions are satisfied. Task 8 was not started.
- **Exact next action:** commit the authorized Task 7 changes, report the local result and STOP before Task 8.

### Prior checkpoint — Task 6 complete, 2026-08-30 (Asia/Amman)

- **Authorized scope:** Task 6 only — Services Index. Task 7 and later remain unauthorized and `[ ]` Not started.
- **Baseline:** Task 6 began from clean `main` at `710128d` (`feat(seo): refactor homepage crawlable architecture`). `git status --short` returned no entries before the first edit.
- **Ownership:** `/services` now owns `lawn care services des moines ia` with the exact Task 2 title, description, H1 and clean canonical. The route registry lifecycle is promoted only for the Services Index; all ten service-detail records remain planned, unpublished and non-indexable.
- **Architecture and links:** one server-rendered index projects the established service navigation records into exactly ten ordered, unique service links with concise distinct summaries. It also exposes ordinary anchors to Commercial Property Services, Service Areas and Contact, plus native phone and estimate actions. No dynamic service template or service-detail page was created.
- **Schema and breadcrumb parity:** the shared interior shell now accepts page-specific structured-data nodes. `/services` emits CollectionPage, an ItemList with positions 1–10 matching the visible ordered links, and a two-level BreadcrumbList matching the visible Home → Services trail.
- **Design and responsive behavior:** the page uses an editorial numbered-list composition, restrained CSS-only entry motion, clear focus states and no page-specific client component or media payload. Production-browser QA passed at `1440×900`, `1280×800`, `390×844` and `320×568` with one H1, all ten links and zero horizontal overflow. The shared elevated-header backdrop was narrowly corrected so the existing fixed mobile drawer fills the viewport on interior routes; long Spanish H1/CTA copy now wraps without overlap. Reduced-motion emulation reduces the page animation and transition durations to `0.00001s`.
- **Language and analytics regression:** all new visible strings have explicit Spanish translations. Switching language preserves the full GBP UTM query and changes only `lang`, while metadata and canonical remain the English canonical record. Native phone/email behavior and the existing allowlisted analytics architecture are unchanged; `pnpm validate:analytics` passes.
- **Rendered HTML validation:** the production response is HTTP 200 and contains the exact metadata/canonical, one H1, all ten expected service hrefs, all three supporting hub hrefs, CollectionPage, a ten-entry ItemList with positions 1–10, and the two-entry BreadcrumbList. The final browser console contains zero errors and zero warnings.
- **Claim and route restraint:** descriptions are navigational and avoid guarantees, prices, schedules, processes, results, credentials, address/geo, local image provenance and review claims. No Ground Clearance, Leaves Removal, residential service variant, city/service combination or competing Des Moines route was added.
- **Passed checks:** `pnpm validate:services`; `pnpm validate:content`; `pnpm validate:seo`; `pnpm validate:navigation`; `pnpm validate:analytics`; `pnpm validate:homepage`; `pnpm exec tsc --noEmit --incremental false`; `pnpm build`; `git diff --check`; production rendered-HTML assertions; and production Playwright navigation, focus, language/UTM, responsive, overflow, reduced-motion, schema/link and console checks.
- **Unavailable check:** `pnpm lint` exits 1 because the existing script invokes `eslint .` while ESLint is not installed or declared. Task 6 does not add dependency or lockfile churn to change that repository-wide condition.
- **No external action:** no deployment, production/account setting, live form delivery, Google Business Profile edit or GA4 activation occurred.
- **Task status:** Task 6 is `[x]` Completed because all four Definition of Done conditions are satisfied. Task 7 was not started.
- **Exact next action:** commit the authorized Task 6 changes, report the local result and STOP before Task 7.

### Prior checkpoint — Task 5 complete, 2026-08-30 (Asia/Amman)

- **Authorized scope:** Task 5 only — Homepage SEO Refactor and Crawlable Architecture. Task 6 and later remain unauthorized and `[ ]` Not started.
- **Baseline:** Task 5 began from clean `main` at `7f14caa` (`feat(analytics): add privacy-safe GA4 lead tracking`). `git status --short` returned no entries before the first edit.
- **Ownership and architecture:** `/` retains its exact Task 2 metadata/canonical/schema record and now renders the exact H1 `Lawn Care & Snow Removal in Des Moines, IA`. The homepage has the required ordered 12-section architecture: hero, services, seasons, property explorer, residential/commercial, before-and-after, featured work, service areas, reviews, latest tips, problem navigation, and estimate.
- **Crawlable linking:** all ten registered service routes are exposed in ordinary rendered anchors; seasonal, property and problem references resolve through the same approved consolidated service records. The commercial, Our Work, Reviews, Blog and Contact paths are real anchors. Service-area copy says `Serving Des Moines, Ankeny, Waukee, Norwalk and Altoona`, with Des Moines linked to `/` and the other four cities linked to their registered future routes. Three Latest Tips links use only registered article paths.
- **Preserved experience:** the existing cinematic video hero, seasonal transition, property hotspots, before-and-after slider, gallery/lightbox, estimate form, bilingual control, responsive header/menu, reduced-motion behavior, phone/email actions and scroll-reactive mobile/desktop contact controls remain in place. Browser interaction checks covered skip navigation, desktop/mobile service disclosure, Escape/focus return, property selection, keyboard slider control, gallery modal, review advance, problem accordion and invalid-form focus/errors.
- **Payload and claim restraint:** the homepage receives eight gallery items rather than the 79-item archive and five verified verbatim review excerpts rather than the full embedded review collection. Gallery images are lazy below the fold, eliminating the production preload warning. Image labels and operational/problem copy were made neutral where provenance or workflow guarantees were not established. No address, geo, price, guarantee, invented process, fabricated local image attribution, or review schema was introduced.
- **Responsive and language validation:** production-browser QA passed at `1440×900`, `1280×800`, `390×844` and `320×568`, with zero horizontal overflow. Spanish long labels fit at 320 px; switching `en`/`es` preserved the complete GBP UTM query and added only `lang`. The final clean production session reported zero console errors and zero warnings.
- **Rendered HTML validation:** exact title/description/root canonical, one exact H1, the ordered 12 markers, required hub/service/area/article/contact hrefs and the existing Organization/WebSite/WebPage graph were confirmed in rendered production HTML. The source contains no forbidden competing Des Moines route, full review archive content or gallery item beyond the curated subset.
- **Passed checks:** `pnpm validate:homepage`; `pnpm validate:content`; `pnpm validate:seo`; `pnpm validate:navigation`; `pnpm validate:analytics`; `pnpm exec tsc --noEmit --incremental false`; `pnpm build`; `git diff --check`; production rendered-HTML assertions; and production Playwright interaction, responsive, language, focus, overflow, payload and console checks.
- **Unavailable check:** `pnpm lint` exits 1 because the existing script invokes `eslint .` while ESLint is not installed or declared. Task 5 did not introduce dependency or lockfile churn to change that repository-wide condition.
- **No external action:** no deployment, production/account setting, live form delivery, Google Business Profile edit or GA4 activation occurred.
- **Task status:** Task 5 is `[x]` Completed because all four Definition of Done conditions are satisfied. Task 6 was not started.
- **Exact next action:** commit the authorized Task 5 changes, report the local result and STOP before Task 6.

### Prior checkpoint — Task 4 code complete, activation blocked, 2026-08-30 (Asia/Amman)

- **Authorized scope:** Task 4 only — GA4 Foundation and Conversion Measurement. Task 5 and later remain unauthorized and `[ ]` Not started.
- **Baseline:** Task 4 began from clean `main` at `abfe88d` (`feat(seo): add shared navigation and breadcrumbs`). `git status --short` returned no entries before the first edit.
- **Repository audit:** no repository GA4, GTM, Google tag, Measurement ID, consent mechanism, custom analytics helper, or form/contact events existed. Vercel Analytics was the only analytics integration and used the broad `VERCEL === '1'` condition. `.env.local` contains only the three Resend variable names. No external stream/account evidence is available in the repository.
- **Activation design:** added one minimal native Google tag using `next/script`, with no analytics dependency. It renders only when `VERCEL_ENV=production`, `GA4_ENABLED=true`, `GA4_ACTIVATION_APPROVED=true`, and `GA4_MEASUREMENT_ID` is a syntactically valid verified `G-...` value. Missing/invalid/disabled/preview/local/test states fail closed. `GA4_ACTIVATION_APPROVED` represents the documented completion of the stream ownership/injection audit, consent decision, and Enhanced Measurement review; it defaults false and no ID is present. Google Signals and ad-personalization signals are explicitly disabled. Vercel Analytics is now restricted to Vercel production rather than previews/local.
- **Exact event contract:** the analytics client exposes only `generate_lead`, `form_start`, `form_submit_error`, `click_to_call`, and `click_email` methods; it has no generic arbitrary event API. Form events contain only fixed form identity, lead type, pathname-only page path, controlled placement, and `en`/`es`; bounded errors add only an allowlisted error type. Contact events contain pathname, fixed placement, language, and only the literal protocol `tel:` or `mailto:`—never DOM text or raw link content. No value/currency is emitted.
- **Lead/API design:** the API now returns `{ ok: true, delivery: 'sent', submissionId }` only after Resend reports no error, `{ ok: true, delivery: 'suppressed' }` for the honeypot, and non-2xx `{ ok: false, errorCode }` for `invalid_request`, `invalid_contact`, `delivery_unavailable`, or `delivery_failed`. The server creates a UUID before sending and attaches the same non-PII ID as a Resend tag. The client emits `generate_lead` only for parsed `sent`, dedupes by that semantic ID in memory and bounded session storage, and never sends the ID to GA4. A synchronous in-flight guard blocks concurrent submits.
- **Form/error design:** `form_start` claims once only after a trusted pointer or keyboard event targets `name`, `phone`, `email`, `service`, or `message`; honeypot, hydration, focus, autofill/state setup, programmatic/synthetic events, and later fields do not qualify. Client validation and network failures emit no submission error. Bounded backend errors and malformed backend responses emit `form_submit_error`; neither can emit a lead. Analytics transport/storage failures are caught and cannot block form behavior.
- **Contact/UTM design:** one document-level delegated tracker observes genuine click activation of real `tel:`/`mailto:` anchors and never calls `preventDefault`. Existing native destinations remain unchanged. Standard UTMs are not copied into analytics event parameters, canonicals, internal links, schema, or the form; browser validation confirmed the existing language switch changes only `lang` and preserves all GBP UTM parameters.
- **Passed checks:** `pnpm validate:analytics`; `pnpm validate:content`; `pnpm validate:seo`; `pnpm validate:navigation`; `pnpm exec tsc --noEmit --incremental false`; `pnpm build`; `git diff --check`; production-server HTML tag-absence check; API HTTP matrix for invalid JSON, honeypot, invalid contact, and missing delivery configuration; Playwright form validation, UTM/language preservation, mocked sent/suppressed/backend/network outcomes, exact event/payload capture, stable-ID replay dedupe, native contact href inspection, session-storage review, and console review.
- **Browser console classification:** the normal homepage produced no warnings/errors before failure testing. The only later console errors were expected failed-resource entries deliberately induced by the 503 and offline negative cases; the mocked success/suppression logic introduced no application exception.
- **Activation status:** GA4 is not enabled. Missing external gates are the verified production Measurement ID, production stream ownership/injection audit, consent decision, and Enhanced Measurement review. Realtime/DebugView, Admin key-event setup, custom-dimension decisions, production attribution, and GBP UTM account work remain manual Task 38 actions after authorized deployment.
- **Task status:** Task 4 is `[x]` Completed at the repository/code level because all four Definition of Done conditions are satisfied, including the required explicit activation block instead of an invented account configuration.
- **No external action:** no production deployment, Google/Vercel/Resend account change, live email, or GBP edit occurred. Task 5 was not started.
- **Exact next action:** commit the authorized Task 4 changes after final diff/validation review, then STOP before Task 5.

### Prior checkpoint — Task 2 complete, 2026-08-30 (Asia/Amman)

- **Authorized scope:** Task 2 only — Global Metadata, Canonical, Schema, Sitemap, Robots, and 404 Foundation. Task 3 and later remain unauthorized and `[ ]` Not started.
- **Baseline:** Task 2 began from a clean tracked worktree on `main` at `4b944bc` (`chore(seo): record confirmed business details`), three local commits ahead of `origin/main`. `git status --short` returned no entries before the first edit.
- **Metadata/canonical implementation:** added one framework-native metadata builder that consumes the 29-route registry for exact title, description, clean absolute canonical, lifecycle-derived robots, Open Graph, and Twitter values. The official 512×512 logo is the conservative shared social image until page-specific imagery is verified. Root metadata now consumes the homepage record, and obsolete `<meta name="keywords">` output is removed.
- **Hydration discovery:** the existing client language provider overwrote every server title and description after hydration, including the 404. Removed only that stale metadata mutation while preserving the language preference, query parameter, local storage, translated visible content, and document-language update. Browser validation confirmed the route-record title remains intact with `?lang=es` and UTM parameters.
- **Entity-graph implementation:** replaced the independent unsafe LocalBusiness/WebSite objects with one escaped `@graph` containing stable `#organization`, `#website`, and `#webpage` IDs. The Organization uses approved legal/display names, phone, email, five service areas, and the verified Google Business Profile as its only `sameAs` value. Stable breadcrumb/service/article ID helpers are ready for the page tasks without publishing their schemas early.
- **Schema restraint:** the company is represented as an addressless Service Area Business through `Organization`; the graph contains no LocalBusiness, public/locality-only address, geo, latitude/longitude, price range, founding/credential facts, offer catalog, review, or `aggregateRating`. Verified hours are intentionally not emitted because `openingHours`/`openingHoursSpecification` are not valid Organization properties and the unchanged pre-Task-3 footer still shows stale visible hours; invalid or visibly inconsistent schema was not created merely to include hours.
- **Sitemap/robots implementation:** sitemap output now filters the authoritative registry to routes that are simultaneously implemented, published, canonical, and indexable. It currently contains only `/`, has no volatile synthetic date/query/fragment, and a focused test proves the same architecture produces 29 unique clean URLs when all 29 records are legitimately promoted. Robots allows normal public crawling and references the production sitemap.
- **404 implementation:** added a branded responsive not-found page with a real homepage action, phone action, and links only to homepage sections that exist today; planned pages are not advertised early. Next returns HTTP 404 with no redirect or Location header. The 404 has a useful title/description, one framework-generated `noindex`, no canonical, and no inherited homepage Open Graph/Twitter metadata.
- **Trailing-slash behavior:** `trailingSlash` remains unset. Local production-server checks confirmed the existing non-trailing convention (`/sitemap.xml/` permanently normalizes once to `/sitemap.xml`) and an unknown clean URL returns 404 rather than redirecting home. The production hosting layer remains a post-deployment verification assumption because deployment was not authorized.
- **Passed checks:** `pnpm validate:content`; new `pnpm validate:seo`; `pnpm exec tsc --noEmit --incremental false`; repeated `pnpm build`; `git diff --check`; rendered homepage metadata/canonical/social checks with UTM and language queries; parsed rendered JSON-LD inspection; rendered sitemap/robots inspection; curl status/header checks for homepage, planned route, unknown route, and slash normalization; Playwright desktop/mobile 404 snapshots, accessibility snapshots, hydrated title/canonical/language checks, and console review. The only 404 browser console entry is the expected failed main-document request representing its 404 status; the homepage produced no browser errors or warnings.
- **Unavailable check:** `pnpm lint` still exits 1 because the pre-existing script invokes `eslint .` while ESLint is not installed or declared. No lint dependency/config or lockfile churn was introduced under Task 2.
- **Not run:** no separate pre-existing unit/integration/e2e suite exists; production, deployment, Search Console, Schema.org/Google rich-result web tools, external-account, and live-host redirect/slash checks were not run because deployment/external changes are prohibited. Task 3+ navigation/footer/breadcrumb/page/form/GA4/content checks were not run or started.
- **Files changed:** `app/layout.tsx`, `app/manifest.ts`, `app/page.tsx`, `app/robots.ts`, `app/sitemap.ts`, new `app/not-found.tsx`, `components/structured-data.tsx`, `lib/i18n.tsx`, new `lib/metadata.ts`, `lib/structured-data.ts`, `package.json`, new `scripts/validate-seo-foundation.mts`, and `plan.md`.
- **Files intentionally unchanged:** the route/business registries and their lifecycle values, header, footer, homepage content/H1/sections, breadcrumbs/navigation, all 28 planned pages, service/area/blog content, reviews/gallery/form/API/analytics, assets, Next trailing-slash configuration, both lockfiles, production configuration, and external systems.
- **Task status:** Task 2 is `[x]` Completed. Every Definition of Done item is satisfied within the authorized repository/local-runtime boundary, and the remaining production-host verification assumption is explicitly recorded rather than represented as tested.
- **No external action:** nothing was staged, committed, pushed, deployed, or changed in production or any account.
- **Exact next action:** STOP. Do not begin Task 3 without separate authorization.

### Prior checkpoint — Task 1 owner-confirmation update complete, 2026-08-30 (Asia/Amman)

- **Authorized scope:** Task 1 business-data maintenance only. Task 2 and later remain unauthorized and `[ ]` Not started.
- **Owner-confirmed hours:** Saturday through Friday, every day, `08:00–18:00`; approved display copy is `Every day, 8:00 AM–6:00 PM`.
- **Owner-confirmed business presence:** Mo's is a Service Area Business. No public street address is approved; locality-only postal addresses and replacement `geo` coordinates are prohibited.
- **Owner-confirmed external profile:** the only approved profile is Google Business Profile at `https://www.google.com/maps/place/Mo's+lawn+care+%26+Snow+removal+services+LLC/@41.6726616,-93.2424403,10z/data=!3m1!4b1!4m6!3m5!1s0x87ee99e896289b53:0x97b64e4e08676e75!8m2!3d41.6726196!4d-93.5720955!16s%2Fg%2F11h00c8p6r?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D`. Facebook and Instagram are not approved and have no placeholders.
- **Owner-confirmed review policy:** central display copy is `170+ Google Reviews`; it is a minimum-style marketing label, not a precise live total. Self-serving `aggregateRating` structured data remains prohibited.
- **Implementation:** promoted the resolved fields into `approvedBusinessFacts`; reduced `pendingBusinessFacts` to an empty value-free record; derived future-facing `site` fields without wiring them into any current UI/schema consumer; strengthened Task 1 validation for all seven days, normalized hours, Service Area Business/address/geo policy, the exact sole GBP URL, exact review display copy, and aggregate-rating restraint.
- **Output-preservation boundary:** the legacy six-day `openingDays` compatibility export and empty legacy `socialLinks` remain only so the untouched pre-Task-2 schema output does not change. Existing footer, review UI, metadata, schema, sitemap, pages, and navigation were not modified; migrating their stale literals requires separate authorization.
- **Passed checks:** `pnpm validate:content`; `pnpm exec tsc --noEmit --incremental false`; `pnpm build`; `git diff --check`; untracked-file whitespace checks; final `git status --short` and scope review.
- **Task status:** Task 1 remains `[x]` Completed. No Definition of Done item regressed.
- **No external action:** nothing was staged, committed, pushed, deployed, or changed in production or any account.
- **Exact next action:** STOP. Do not begin Task 2 without separate authorization.

### Prior checkpoint — initial Task 1 completion, 2026-08-30 (Asia/Amman)

- **Authorized scope:** Task 1 only — Approved Business Data, Route Registry, and Validation Foundation.
- **Final task state:** Task 1 is `[x]` Completed. Tasks 2–39 remain `[ ]` Not started and unauthorized.
- **Baseline:** the task began from a clean tracked tree at `main` commit `858e5c2` (`docs: add complete SEO implementation plan`). `app/prompt.md` and `plan.md` were both tracked at the task start.
- **Implemented:** added a repository-approved business-facts source with normalized phone/email/five-area data and provenance; added explicit value-free pending-confirmation records for address, hours, Google review profile/summary, and social profiles; added safe canonical path/URL helpers; added a typed registry containing exactly the 29 planned target routes with clean non-trailing paths, absolute canonical URLs, exact ownership copy, parent/link IDs, lifecycle status, and indexability; added dependency-free route/business validation; added safe Resend-only environment documentation.
- **Lifecycle safety:** only `/` is recorded as currently implemented/published. The other 28 targets remain `planned`; the registry does not create routes, publish sitemap entries, or change navigation/metadata/schema/UI.
- **Validation foundation:** `pnpm validate:content` uses Node 22's built-in TypeScript stripping and asserts the exact 29-path allowlist, route/URL/ID/title/H1/primary-keyword uniqueness, exact primary ownership, clean canonicals, hierarchy/link resolution, forbidden route absence, planned lifecycle state, normalized contact values, exact five-city coverage, and omission of unverified optional values from approved facts.
- **Passed checks:** `pnpm validate:content`; `pnpm exec tsc --noEmit --incremental false`; `pnpm build`; manual line-by-line route-record comparison against Section E; no lockfile diff; tracked and untracked whitespace checks; final scoped status/diff review.
- **Unavailable check:** `pnpm lint` exited 1 because the pre-existing script calls `eslint .` but ESLint is not installed or declared. No lint dependency/config was added because that would be gratuitous Task 1 scope and lockfile churn.
- **Not run:** no separate unit/e2e test command exists; browser, rendered metadata, sitemap, schema, navigation, page UI, form, analytics, production, deployment, and external-account checks were not run because they are unavailable or belong to Task 2 or later.
- **Dependency state:** the first pnpm validation populated ignored `node_modules` from the existing frozen lockfile/store; it did not change `package-lock.json` or `pnpm-lock.yaml`. No dependency was added, removed, or upgraded.
- **Discoveries:** the current pre-Task-2 application still contains disputed hardcoded hours in the homepage/footer and legacy schema, a locality-only schema address, hardcoded `5.0`/`160` review claims, an unverified Google Maps review URL, hardcoded business literals in metadata/manifest/header, and project/copy location claims needing later provenance review. These were inspected and deliberately not migrated because the user prohibited schema, metadata, navigation, page UI, Reviews, and other later-task work.
- **Owner confirmation still required:** authoritative public hours; whether a legitimate public address is approved for publication; current Google review profile URL plus rating/count display/update policy; approved social URLs; confirmation before any other mutable or disputed fact is promoted into `approvedBusinessFacts`.
- **Scope decisions:** canonical records follow the plan's Next.js non-trailing-slash assumption while retaining `/` as the root; all six article secondary-keyword arrays remain empty with `pending-research` status because the brief supplied no approved values; `.env.example` documents only the existing Resend variables and explicitly defers analytics configuration.
- **Files changed:** `.env.example`, `content/types.ts`, `content/routes.ts`, `lib/content-validation.ts`, `scripts/validate-content.mts`, `lib/site.ts`, `lib/site-url.ts`, `package.json`, `tsconfig.json`, and `plan.md`.
- **Files intentionally unchanged:** all `app/` routes/components, `lib/structured-data.ts`, sitemap, robots, metadata, schema, navigation, page UI, GA4/analytics, Blog/page content, both lockfiles, assets, production configuration, and external systems.
- **Final `git status --short`:** `M lib/site-url.ts`, `M lib/site.ts`, `M package.json`, `M plan.md`, `M tsconfig.json`, `?? .env.example`, `?? content/`, `?? lib/content-validation.ts`, and `?? scripts/`.
- **No external action:** nothing was staged, committed, pushed, deployed, or changed in production or any account.
- **Exact next action:** STOP. Do not begin Task 2 without separate authorization.

The Phase 1 checkpoint below is retained as historical planning evidence and is superseded by the Task 1 checkpoint above where repository state or authorization differs.

### Work completed

- Read `app/prompt.md` completely through Section 60 and the final instruction that the next step will be separately authorized.
- Recorded the initial git state and complete tracked/visible file inventory.
- Inspected the Next.js configuration, package manifests, lockfile headers, TypeScript and Tailwind/PostCSS configuration, environment-variable names, App Router route files, root layout, homepage composition, shared data, structured-data helpers, localization provider, estimate API and form, navigation, gallery, before/after experience, seasonal/property/problem experiences, review dataset/component, global styles, local asset metadata, and prior Playwright artifacts.
- Searched the repository for routing, metadata, canonical, sitemap, robots, structured data, analytics, privacy/consent, redirects, verification, and localization implementation.
- Confirmed no repository changes preceded creation of this file.

### Files and directories inspected

- Root/configuration: `.gitignore`, `package.json`, `package-lock.json` (root importer/header), `pnpm-lock.yaml` (root importer/header), `pnpm-workspace.yaml`, `next.config.mjs`, `tsconfig.json`, `postcss.config.mjs`, `components.json`, `next-env.d.ts`
- Routes: `app/layout.tsx`, `app/page.tsx`, `app/manifest.ts`, `app/robots.ts`, `app/sitemap.ts`, `app/api/estimate/route.ts`
- Data/helpers: `lib/site.ts`, `lib/site-url.ts`, `lib/structured-data.ts`, `lib/i18n.tsx`, `lib/es-translations.json`, `lib/utils.ts`, `data/all_image_urls.txt`
- Components: all files under `components/`, including the full large `cross-section.tsx` and `testimonials.tsx` implementations
- Styling/assets: `app/globals.css`; all `public/` filenames, types, byte sizes, and raster dimensions; local gallery-reference existence
- Historical QA: `.playwright-cli/` log severity summaries and the saved accessibility snapshot structure
- Sensitive configuration: `.env.local` variable names only; values were not printed or recorded

### Verified findings

- The project uses Next.js 16.3 App Router, React 19, TypeScript, Tailwind CSS 4, `next/image`, Motion, Resend, and Vercel Analytics.
- Only `/` and `/api/estimate` application routes exist; framework metadata routes provide `/robots.txt`, `/sitemap.xml`, and `/manifest.webmanifest`. There are no service, area, trust, contact, gallery, review, or blog pages yet.
- The homepage is a server page that composes many client components beneath a client i18n provider. Most interactive homepage copy is server-rendered initially in English and then hydrated.
- Global metadata includes one homepage title/description/canonical, Open Graph, Twitter metadata, and a deprecated-for-Google `keywords` array. No per-page metadata architecture exists.
- The sitemap contains only `/` and computes `lastModified` at request/build time. Robots allows `/` and references the sitemap. No redirect, middleware, custom 404, Search Console verification, or canonical-query normalization implementation was found.
- JSON-LD currently emits `LocalBusiness` and `WebSite`. The LocalBusiness entity includes unverified business hours and a locality-only postal address; the prompt requires these to be withheld until verified. The entity ID is `#business`, while the specification recommends a stable organization graph conceptually using `#organization`.
- Business name, phone, email, service areas, advertised services, form endpoint, hero media, and working hours are partly centralized in `lib/site.ts`, but business hours and some contact/phone values are duplicated in components/schema.
- The estimate form performs client validation, POSTs JSON to `/api/estimate`, and treats any 2xx response as success. The API validates again, uses a honeypot, and sends email through Resend. A honeypot submission returns `{ ok: true }` without email delivery, which is a relevant future lead-event edge case.
- `.env.local` contains only `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `RESEND_TO_EMAIL`; no analytics measurement ID is configured.
- Vercel Analytics renders only when `VERCEL === '1'`. No GA4, GTM, Google tag, analytics helper, custom lead/click events, consent mechanism, cookie/privacy implementation, or environment-specific GA4 controls were found.
- English/Spanish is client-side only: query parameter `?lang=`, localStorage, in-place string lookup, DOM title/meta-description mutation, and document-language mutation. URLs do not change by locale, no hreflang exists, and translations are incomplete/fallback-based rather than a verified indexable Spanish architecture.
- Gallery content is read synchronously from a text file by a server component: 79 sources total (11 local, 68 Google-hosted remote). The client initially renders 10 and adds batches of 10 near the end. Labels/alts are generic and the source list carries no city, service, dimensions, or verified project metadata.
- The before/after dataset contains seven displayed project pairs with `Des Moines, IA` metadata, but those values require provenance/business confirmation before location claims are expanded. One unused `before1.webp` asset exists.
- Local `public/` assets total about 28 MB. Several files named `.webp` actually contain JPEG or PNG data; the four season PNGs are roughly 2.6–3.0 MB each, and two before/after files are roughly 2.8–3.2 MB. Hero video is about 1.7 MB and the hero poster about 864 KB.
- The homepage has real semantic headings, links for anchors/contact destinations, labels, reduced-motion handling, and keyboard interactions, but service names in the seasonal, property, gallery, and problem experiences are generally plain text/buttons rather than crawlable service-page links.
- Review content is embedded directly in a large client component and categorized. The UI hardcodes `5.0`, `160 customer reviews`, and a Google Maps review URL. The dataset includes at least one review with no rating and includes a negative review; no city metadata or source/update timestamps are stored.
- The embedded review dataset contains 106 records: 104 five-star records, one four-star record, and one record with a null rating. Category counts are mixed 20, other 14, speed 11, lawn 10, cleanup/price/quality 9 each, customer 7, communication/professional 6 each, and snow 5. This does not substantiate the separately hardcoded current total of 160.
- Existing marketing copy makes specific operational claims about hauling clippings, scheduled mowing, targeted treatment/feeding, core aeration and seed placement, flower-bed redesign, removal from hard surfaces, cutback/edging, drainage reshaping, and clearing walks/entries. These are repository facts about current copy, not verified business capabilities; each must be confirmed or softened before reuse on SEO pages.
- There is no blog/content model, article source record, publishing workflow, Markdown/MDX/CMS system, or blog route.
- No README, `.env.example`, test source/configuration, ESLint configuration/dependency, formatter configuration, CI/CD workflow, Docker configuration, Vercel configuration file, or hosting documentation is present. Only historical `.playwright-cli` artifacts are tracked.
- `package.json` declares pnpm 11.20.0, but both pnpm and npm lockfiles are tracked. Dependencies are not installed in the current checkout, so no build/lint/test command has been run during Phase 1.
- A tracked `tsconfig.tsbuildinfo` is stale: it records an older `heroPoster` type error that no longer matches current `lib/site.ts`. It is not evidence of the current build state. The latest saved browser-console artifact shows Vercel Analytics failing to load locally from `/_vercel/insights/script.js`, which confirms local analytics noise but not a production fault.

### Assumptions and unresolved questions

- **Assumption:** use framework-native App Router static pages and typed content/configuration without a CMS or new routing/SEO library.
- **Assumption:** follow Next.js/Vercel canonical slash behavior consistently after an implementation-time rendered-route check; do not invent redirects now.
- **Unresolved:** production hosting is likely Vercel based on code and analytics usage, but no deployment config/documentation proves the account/project settings.
- **Unresolved:** provenance and permission for the 68 Google-hosted gallery URLs and embedded review dataset.
- **Unresolved:** whether `Des Moines, IA` in every before/after project record is verified job-location metadata or a generic label.
- **Unresolved:** whether any homepage service-process copy represents confirmed capabilities; several claims are more specific than the prompt permits without verification.

### Owner confirmation required

- Authoritative public business hours and whether any hours should appear on pages or in schema.
- Whether a legitimate public physical business address exists and is approved for publication; if not, use Organization-based schema without a fabricated address.
- Verified GA4 Measurement ID, GA4/GTM ownership, Enhanced Measurement settings, and whether a consent solution or policy is required for the approved deployment context.
- Whether `click_to_call` should become a secondary GA4 key event after validation.
- Current Google review URL, rating/count display policy, and an approved update process.
- Social profile URLs, approved logo/social images, and any Search Console/Business Profile access.
- Verified service inclusions and exclusions, residential/commercial availability by service, estimate workflow expectations, public company history/trust facts, and gallery/review location metadata.
- Approval of factual blog publication/update dates, author/publisher attribution, image-to-article mapping, and the ongoing content review owner.

### Decisions made and reasons

- Preserve the existing homepage and extract/reuse its strongest experiences; the prompt prohibits a rebuild and the repository already contains substantial branded interactions.
- Plan for a central typed route/content/business configuration to prevent sitemap, metadata, navigation, schema, and business facts from diverging.
- Treat Spanish as a preserved UI convenience in the initial rollout unless approved, complete localized content and URL governance are supplied; the current implementation is not an indexable bilingual architecture.
- Do not rely on the existing LocalBusiness schema until address/hours are confirmed; an Organization-led graph is the safe default.
- Do not add a CMS, GA4 library, or SEO library by default; Next.js metadata routes/components and a small analytics helper are sufficient unless implementation evidence proves otherwise.

### Commands and validation already run

- `wc`, `sed` in bounded ranges, and complete-file reads for `app/prompt.md` and source/data files
- `git rev-parse --show-toplevel`, `git status --short --branch`, `git ls-files`, `git log --oneline`, `git remote get-url origin`
- `rg --files`, `rg` source searches, `find`, `ls -la`, `wc -l`, `du -ah`, `file`, `sips`, `awk`
- Environment values were redacted; only variable names were inspected
- No install, build, typecheck, lint, test, dev server, network request, commit, push, deployment, or production change has been performed

### Current changed files

- Pre-existing user change: `app/prompt.md` is untracked and must remain untouched.
- Phase 1 change: `plan.md` is newly created by this analysis and is the only permitted working file.

### Checkpoint next action (superseded by the later task-structure checkpoint)

Draft and verify the complete 29-URL ownership map and repository-specific technical design, then replace the remaining Section A–G placeholders and build the dependency-ordered implementation task list.

### Checkpoint remaining analysis and planning work (completed in the continuation)

- Reconcile all 29 target public URLs and exact metadata/keyword ownership from the specification.
- Design file impacts, content model, schema graph, analytics/event contract, deduplication, PII protections, sitemap/robots/canonical approach, localization implications, and blog sourcing/publishing workflow.
- Write every incremental task with all required fields and concrete repository files.
- Add automated/manual QA and post-deployment account actions.
- Re-read the completed `plan.md`, verify final git diff/status, and stop.

### Blockers

- No blocker to finishing Phase 1 planning.
- Production activation and several content/schema/analytics decisions will be blocked later pending the owner confirmations listed above.

### Task-structure checkpoint — 2026-08-30 (Asia/Amman)

- **Checkpoint state:** the dependency-ordered 39-task implementation structure and complete repository-specific manual post-deployment QA checklist have been inserted into `plan.md`.
- **Task status invariant:** all 39 implementation tasks remain `[ ]` Not started`; no application, dependency, test, configuration, account, deployment, or production work has begun.
- **Coverage inserted:** shared facts/routes, technical SEO, navigation/breadcrumbs, GA4 events and safety, homepage, Services and all 10 service pages, Commercial, Service Areas and four cities, About, Our Work, Reviews, Contact, Blog foundation and six article tasks, image/performance, internal links, schema, full validation, manual account actions, and documentation/cleanup.
- **Preservation state:** `app/prompt.md` remains user-owned and untouched; only `plan.md` has been edited. The two pre-existing visible untracked files are preserved.
- **Exact next action:** re-read this completed `plan.md` from beginning to end; validate it line by line against `app/prompt.md`; verify every required task field, all 29 URLs, six articles, metadata, schema, internal links, GA4 triggers/deduplication/PII/environment rules, automated tests, manual account steps, and QA items; then record final diff/status and close the Phase 1 gate only if all checks pass.
- **Filesystem fallback:** if filesystem access fails during final validation, preserve this checkpoint, make no further change, and stop safely with the last successful state.

---

## Section A — Project Understanding

### Framework and runtime

- **Verified:** Next.js 16.3.0 App Router, React/React DOM 19.2.8, strict TypeScript 5.7.3, Tailwind CSS 4/PostCSS, `next/image`, `next/font`, Motion 13, Lucide, Base UI/shadcn support, Resend 6.18.1, and Vercel Analytics 1.6.1.
- **Verified:** `package.json` declares pnpm 11.20.0 and provides only `dev`, `build`, `start`, and `lint` scripts. Both `pnpm-lock.yaml` and `package-lock.json` are tracked and resolve the same inspected core versions, but pnpm is the declared package manager.
- **Verified:** Node 22.22.0 and pnpm 11.20.0 are available on the analysis host, but `node_modules` and `.next` are absent. Phase 1 did not install or build.

### Application and component architecture

- **Verified:** `app/layout.tsx` owns global fonts, English `<html lang>`, global metadata, the client `I18nProvider`, and conditionally mounted Vercel Analytics.
- **Verified:** `app/page.tsx` is the only public page and is a Server Component. It composes `SiteHeader`, `Hero`, `CrossSection`, `PropertyHotspots`, `BeforeAfterSlider`, `Gallery`, `Testimonials`, `ProblemSelector`, `EstimateSection`, inline footer markup, and homepage JSON-LD.
- **Verified:** `Gallery` is a Server Component that reads `data/all_image_urls.txt` synchronously and passes the complete item array to `GalleryClient`. Most other interactive homepage experiences are Client Components.
- **Verified:** shared business, service, seasonal, problem, hotspot, and before/after data live primarily in `lib/site.ts`; reviews and review categories are embedded in `components/testimonials.tsx`; gallery sources are a plain text file; translations are a JSON string dictionary.
- **Reusable infrastructure:** `SiteHeader`, `MobileNavigation`, `LanguageSwitcher`, `Hero`/`HeroVideo`, `CrossSection`, `PropertyHotspots`, `BeforeAfterSlider`, `Gallery`/`GalleryClient`, `Testimonials`, `ProblemSelector`, `EstimateSection`/`EstimateForm`, `StructuredData`, `Tr`, `LocalizedNav`, the site/service/project datasets, Next metadata routes, and the Resend email endpoint/template.
- **Reusable with modification:** navigation/footer must become route-aware and global; interactive service labels must gain real links; gallery/review datasets must be extracted and given stable typed metadata; metadata/schema utilities must be generalized; the estimate form needs a reusable page-context/event contract.

### Rendering strategy

- **Verified:** the repository uses App Router Server and Client Components, not a client-only SPA router.
- **Verified by code inspection:** `/` does not call request-time APIs and is eligible for static prerendering, while `/api/estimate` is a Node.js route handler. This eligibility has not been confirmed with a current production build.
- **Verified:** English text from Client Components has deterministic initial state and was present in the saved Playwright accessibility snapshot, so core homepage text is not waiting for a post-mount fetch. Spanish is applied after hydration.
- **Design implication:** all planned SEO pages should remain statically rendered/prerenderable where possible; interactive enhancements may hydrate, but titles, headings, body copy, links, breadcrumbs, and JSON-LD must be in initial rendered HTML.

### Routing strategy

- **Verified:** file-system App Router routes only; no third-party routing library, middleware, rewrites, redirects, route groups, dynamic public route, custom 404, or error boundary exists.
- **Verified current routes:** `/`, `/api/estimate`, `/robots.txt`, `/sitemap.xml`, and `/manifest.webmanifest`.
- **Desired:** 29 canonical public content URLs: homepage; services hub plus 10 services; commercial hub; service-area hub plus four city pages; About, Our Work, Reviews, Contact; blog hub plus six articles. There will be no `/service-areas/des-moines-ia/`.

### Current homepage structure

1. Fixed route-anchor header with language controls, click-to-call, estimate CTA, and mobile navigation.
2. Full-viewport video/poster hero with the current H1, contact links, and service marquee.
3. Active four-season `CrossSection` experience (the older `SeasonDial` remains in the repository but is commented out in `app/page.tsx`).
4. Interactive property hotspots.
5. Seven-item before/after project slider.
6. 79-source gallery carousel/modal.
7. Categorized review carousel and Google review outbound link.
8. Problem-based accordion/service discovery.
9. Image-led estimate section and Resend-backed form.
10. Inline footer with service areas, unverified working hours, anchor navigation, phone, and email.

### Content and business-data architecture

- **Verified:** `lib/site.ts` is a partial single source of truth for business name, display name, phone, email, primary location, service-area string, working hours, form endpoint, hero media, navigation, services, seasons, problem answers, hotspots, and before/after projects.
- **Verified duplication:** hardcoded phone href in `SiteHeader`; service-area list and hours in the homepage footer; rating/count and Google review URL in `Testimonials`; business address/hours/services in schema.
- **Verified gap:** there is no typed route registry, page-content registry, FAQ source, related-link source, approved-facts record, evidence/provenance field, or content lifecycle status.
- **Required truth policy:** existing copy and customer reviews are evidence that wording exists in the repository, not automatic proof that every described process or guarantee is approved. Unverified capability details must be confirmed or rewritten conservatively.

### Estimate form and backend architecture

- **Verified client flow:** uncontrolled HTML form with required name/phone, optional email/service/message, client validation/focus management, JSON `fetch`, a disabled sending state, inline success/error messaging, and form reset on any 2xx response.
- **Verified server flow:** Node route handler parses JSON, truncates fields, silently accepts a filled honeypot, validates name/phone/email, checks three Resend environment variables, sends a React email, and returns explicit 400/502/503 failures or `{ ok: true, id }` after provider success.
- **Verified gaps:** no rate limiting, formal shared payload type/schema, submission idempotency, GA4 events, success-event deduplication, error classification, or automated form tests. The prompt does not authorize replacing this workflow; planned changes wrap and harden it incrementally.

### Gallery and review architecture

- **Verified gallery:** 79 URL lines (11 local, 68 `lh3.googleusercontent.com` remote); generic sequential labels/alts; no service/city/source/dimensions/license/featured metadata. Ten figures render initially; more are added client-side in batches, while all URLs are serialized to the client prop.
- **Verified before/after:** seven configured pairs, all labeled `Des Moines, IA`; titles are one fall/leaf cleanup and six landscaping/lawn restoration entries; image alt combines only Before/After and project wording.
- **Verified reviews:** 106 embedded records with categories and rating values, presented one at a time. No stable review id, source URL per review, review date, city, service tags beyond one category, or last-verified timestamp exists.

### Blog/content architecture

- **Missing:** no blog routes, hub, article content, Markdown/MDX parser, CMS, database, content types, citations/sources, dates, author model, image mapping, sitemap integration, or publishing workflow.
- **Design direction:** typed framework-native static content split by article, rendered by one shared App Router article template, with no CMS or new parser dependency.

### Analytics and event tracking

- **Verified:** `@vercel/analytics` is loaded from the root layout only when `process.env.VERCEL === '1'`.
- **Missing:** GA4, GTM, Google tag, Measurement ID, data layer, consent controls, analytics helper, form/call/email events, environment guard beyond Vercel Analytics, custom dimensions, and analytics tests.
- **Verified local behavior:** a saved browser artifact shows `/_vercel/insights/script.js` returning 404 locally when the Vercel Analytics component was rendered in that historical session.

### Localization

- **Verified:** English/Spanish is implemented client-side in `lib/i18n.tsx`; initial locale is English, then `?lang=en|es` or `localStorage` selects the UI locale.
- **Verified:** switching language uses `history.replaceState`, mutates `<html lang>`, document title, and meta description after hydration, and looks up exact English strings in `es-translations.json` with English fallback.
- **Missing:** localized routes, server-locale negotiation, Spanish server metadata, hreflang, localized canonicals, complete page translations, translation QA/status, and an indexable bilingual architecture.

### Deployment and operations

- **Verified:** Git branch `main` tracks `origin/main` at `f0f1dc4`; origin is GitHub. `.gitignore` excludes `.vercel`, `.env*.local`, `node_modules`, `.next`, and `.DS_Store`.
- **Inference, not verified deployment fact:** Vercel is likely used because the code checks Vercel environment variables and imports Vercel Analytics. There is no `vercel.json`, local `.vercel` state, CI workflow, hosting document, or production environment inventory.
- **Verified:** `.env.local` has the three Resend keys only; values were not inspected. No `.env.example` documents required configuration.

### Existing SEO implementation

- Root Next Metadata API configuration, clean production origin helper, homepage canonical, robots directives, icons/manifest, Open Graph/Twitter metadata, a one-URL sitemap, permissive robots metadata route, and homepage LocalBusiness/WebSite JSON-LD.
- No route-level metadata factory, breadcrumb UI/schema, page-type/service/article schemas, canonical route registry, metadata validation, SEO tests, blog cluster, service/location pages, or internal crawl architecture.

## Section B — Current SEO State

### Route and indexation baseline

| Area | Verified current state | Risk/gap |
| --- | --- | --- |
| Public content routes | `/` only | All 28 required interior URLs are missing. |
| API | `POST /api/estimate` | Must remain outside sitemap/navigation and must not be treated as content. |
| Missing URLs | No catch-all redirect or custom not-found file | Next should provide framework 404 behavior, but actual HTTP status was not runtime-verified in Phase 1. Add branded 404 and test status later. |
| Redirects/rewrites | None in repository | Do not invent legacy redirects; audit production/analytics/Search Console before adding any. |

### Metadata, title, headings, and canonical

- **Title:** `Lawn Care Service in Des Moines, Iowa | Mo's Lawn Care`; differs from required homepage title.
- **H1:** `Commercial & Residential property services`; does not own the required `lawn care des moines ia` intent clearly enough.
- **Description:** one homepage description; close to target topic but not the specified copy.
- **Canonical:** root metadata self-canonicalizes `/` against `https://www.moslawncaredsm.com`. No interior pages exist.
- **Robots meta:** index/follow with permissive Googlebot preview settings.
- **Open Graph/Twitter:** homepage-only values and `/seasons/summer.png`; the image's origin/project status is not documented.
- **Keywords meta:** a `keywords` array is emitted although the specification says not to use `<meta name="keywords">` for Google.
- **Search Console verification:** missing.

### Sitemap and robots

- `app/sitemap.ts` lists only the homepage and creates `lastModified: new Date()` each generation, which can report a change without a content change.
- `app/robots.ts` allows all paths and references the production-origin sitemap. No public assets are blocked.
- No shared route source prevents future sitemap/navigation/metadata drift.

### Structured data

- Homepage emits separate top-level `LocalBusiness` and `WebSite` objects.
- `LocalBusiness` uses `#business`, locality-only `PostalAddress`, unverified Saturday–Thursday 21:00–23:00 hours, all service names, offers, service areas, phone, and an image.
- Risks: no approved public street address; hours are explicitly disputed by the specification; a generic LocalBusiness subtype is used; service entities are homepage offers rather than page-owned entities; no `WebPage` link/entity graph; no breadcrumbs; no schema tests.
- Reviews are not marked up, so the current site does not create self-serving aggregate-rating schema. Preserve that restraint.

### Internal linking and crawl depth

- Header/footer links are same-page fragment anchors plus phone/email; no interior HTML links exist.
- Service labels in the hero marquee, CrossSection, hotspots, problem selector, and much of the gallery are not `<a href>` links.
- The Google review link is crawlable and external. Estimate/contact links target `#estimate-form`.
- Every planned interior page would currently be orphaned because it does not exist and global route navigation does not exist.

### Content state

- The homepage contains substantial, indexable English marketing copy and strong interactive UX worth preserving.
- Service, location, commercial, company, contact, work, review, and blog content are not modeled as independent pages.
- Operational claims, project locations, business hours, exact rating/count, image locations, commercial capabilities by service, and company-history facts lack an approval/provenance model.
- Current service naming can seed the planned consolidated ownership model; do not split Ground Clearance, Leaves Removal, or small keyword variants into thin pages.

### Images and loading

- Next Image supplies generated dimensions/layout for rendered images and responsive `sizes`; hero poster and header logo use priority.
- Hero video is `preload="auto"` for users without reduced motion, after a priority poster; this may compete for early bandwidth and requires measurement before change.
- Property and before/after images lazy-load. Gallery images 1–2 are eager and the rest lazy; modal image is priority only when opened.
- The complete 79-source gallery list crosses the server/client boundary even though only 10 slides initially render.
- Generic gallery alt strings claim `Landscaping project N` without metadata; some other alts assert Des Moines/home/project context that needs verification.
- About 28 MB of local public assets, large season PNGs, large before/after images, and file-extension/content mismatches create optimization and caching risk.

### Language state

- Initial/crawlable content is English at clean URLs.
- `?lang=es` is a client preference, not a separately rendered localized document; canonical remains clean `/` and no hreflang exists.
- Title/description mutation cannot substitute for server-generated localized metadata. Spanish dictionary fallback means the visible page can mix languages.
- Initial rollout should preserve the control but keep one English canonical architecture unless a separate approved localization project is authorized.

### Blog state

- No blog routes or workflow exist. All six required articles and the hub are missing.
- No factual source record exists. Iowa-specific content must be researched during the article tasks, not invented in the foundation task.

### Analytics, conversion, and consent state

- Vercel page analytics only; no GA4/GTM/Google tag.
- No `generate_lead`, `form_start`, `form_submit_error`, `click_to_call`, or `click_email` measurement.
- Form success is UI state only and no reusable click tracker exists.
- Non-production Vercel Analytics behavior is based only on `VERCEL === '1'`; preview deployments may satisfy that value. Its exact production/preview behavior needs correction/verification.
- No consent or privacy implementation was found. Production GA4 enablement must wait for owner/legal policy and stream-setting confirmation; no unsupported legal statement belongs in code or copy.

### Tests, build, and deployment state

- No test files/config, lint config/dependency, formatting config, CI/CD, Docker, or hosting config/documentation.
- `npm run lint` names `eslint .` but ESLint is not declared; treat lint as unavailable until resolved in an authorized foundation task.
- Historical Playwright logs/snapshot are artifacts, not a repeatable suite.
- Stale `tsconfig.tsbuildinfo` cannot establish current correctness. No Phase 1 build/typecheck/lint/test was run because dependencies are absent and installation is forbidden.

## Section C — Repository-Specific Requirements

### Routing and rendering

- Add all 29 public URLs with App Router file-system routes and keep canonical URLs clean and query-free.
- Use dynamic typed routes for service, city, and blog slugs only where their valid slug registries are statically enumerable; invalid slugs must call `notFound()` and return 404.
- Keep SEO-critical content, links, metadata, and JSON-LD server rendered. Use client components only for preserved interactions and tracking.
- Do not add `/service-areas/des-moines-ia/`, separate pages for Leaves Removal/Ground Clearance, thin service+city permutations, or archive/tag/author/date pages.

### UI/UX and frontend

- Preserve brand, type, animation, video hero, CrossSection, property explorer, before/after, gallery, reviews, problem selector, responsive behavior, reduced-motion behavior, bilingual control, and estimate flow.
- Refactor header/footer into route-aware shared components with HTML navigation to Services, Service Areas, Our Work, Reviews, Blog, About, and Contact.
- Add crawlable service/area/article links inside existing homepage experiences without converting buttons that control local UI state into fake links.
- Build reusable but composition-friendly page primitives: breadcrumbs, hero, content sections, service cards, related links, work/review excerpts, service areas, FAQs, resource links, and final CTA.

### Backend, forms, and validation

- Reuse `/api/estimate`, Resend, and `EstimateRequestEmail`; do not add another form backend.
- Define a shared, bounded request/success/error contract. Preserve server-side validation and honeypot behavior while distinguishing provider-confirmed delivery from silent bot acceptance for analytics.
- Provide form context (`form_id`, placement, page path, language, fixed service/category, city context) without sending PII to analytics.
- Consider rate limiting/abuse protection only as a scoped security decision; do not bundle an external service into SEO work without approval.

### Metadata, canonical, social, and robots

- Remove keywords metadata; give every indexable page the specified unique title, description, H1, self-canonical, Open Graph fields, and Twitter equivalents.
- Use the existing production origin helper and Next Metadata API; centralize route metadata in typed content records.
- Follow current Next non-trailing-slash convention unless implementation-time hosting tests prove a different canonical behavior.
- Generate sitemap entries from the canonical route/content registries; omit volatile `lastModified` unless backed by real dates.
- Keep robots permissive for public content and reference the sitemap; do not use robots as noindex.

### Structured data

- Emit one coherent `@graph` per page with stable IDs and no conflicting duplicates.
- Use Organization + WebSite + WebPage because the owner confirmed the company is a Service Area Business with no public street address. Do not fabricate a locality-only address or add `geo` coordinates as a substitute.
- Add Service/BreadcrumbList to service pages; appropriate WebPage/CollectionPage/AboutPage/ContactPage/Blog/BlogPosting/ItemList entities elsewhere.
- Keep schema synchronized with visible content; omit address and geo under the confirmed Service Area Business policy, use verified hours only where supported by the future approved schema design, and omit priceRange, review/aggregateRating, author, dates, FAQs, images, and offers when unverified.

### Content and business facts

- Centralize canonical domain, business identity/contact, verified service areas, approved social/review URLs, approved hours/address status, and analytics configuration.
- Give service, area, project, review, and blog records provenance/status fields sufficient to prevent invented local claims.
- Treat the homepage as owner of broad Des Moines lawn care intent; consolidate related service variants exactly as specified.
- Use useful unique city copy without fabricated neighborhoods, projects, staff, addresses, reviews, or response times.

### Accessibility

- Preserve one clear H1, logical headings, semantic links/buttons, labels/errors/live regions, keyboard navigation, visible focus, target sizes, dialog focus/escape behavior, meaningful alts, decorative empty alts, and reduced motion.
- Add skip navigation and route-change/mobile-menu focus checks where appropriate.
- Breadcrumb UI must match BreadcrumbList schema.

### Performance

- Establish a before-change production measurement baseline during implementation, then optimize hero/video, gallery serialization/loading, image formats/sizes, fonts, Motion/hydration, and third-party analytics.
- Do not preload/lazy-load by rule of thumb: preserve LCP poster priority, measure whether video preload should be `metadata`/`none`, and ensure below-fold media stays lazy.
- Replace extension/content mismatches and oversized images through documented, reversible asset processing; keep original project imagery and verify visual quality.

### GA4 and conversion measurement

- Add one production-gated Google tag implementation only after verifying no GTM/GA4 exists and receiving the real Measurement ID.
- Emit `generate_lead` exactly once only after provider-confirmed successful email delivery; never on click, validation failure, bot honeypot acceptance, or failed request.
- Emit one controlled `form_start` per form instance after first meaningful non-honeypot interaction; first verify/disable overlapping GA4 Enhanced Measurement form-interaction events.
- Emit `form_submit_error` only for an actionable backend response, not client validation and not a request that provably never reached the backend.
- Track all real `tel:`/`mailto:` activations through one non-blocking delegated/reusable mechanism; preserve destinations.
- Permit only documented non-personal parameters; never send name, customer phone/email/address, free text, provider email body, or full form payload.
- Preserve standard UTM behavior; the Google Business Profile UTM URL is a manual external update and never a canonical/internal/schema URL.

### Blog publishing

- Create a typed content model and static article files without CMS/database/parser dependencies.
- Require slug, title, H1, description, primary keyword, summary, related service/articles, visible sources, approved image metadata, publication status, and optional real dates/author.
- Research Iowa claims per article using Iowa State Extension, official government/municipal resources, or other authoritative primary sources; store source URLs and claim notes, paraphrase, and review periodically.
- Generate hub cards, article pages, schema, internal links, and sitemap from the same registry.

### Testing and deployment

- Add the smallest viable repeatable test setup only when an authorized task requires it; resolve the currently nonfunctional lint script deliberately.
- Validate route generation, unique metadata/H1, canonical URLs, sitemap coverage, schema serialization, breadcrumbs, internal links, form analytics/deduplication/PII safety, native contact links, and non-production analytics isolation.
- Require production smoke tests, structured-data validation, GA4 DebugView/Realtime, Search Console sitemap/indexing, 404/redirect checks, mobile/accessibility review, and blog source review after deployment.

## Section D — Current State vs Desired State

| Major area | What exists and can be reused | Missing/modification needed | What stays unchanged |
| --- | --- | --- | --- |
| Framework/rendering | Next App Router, Server Components, Metadata API | Add static/dynamic typed routes and route metadata | Framework, React, TypeScript, styling stack |
| Homepage | Strong long-form branded experience | Required H1/copy, crawlable cards/links, latest tips, route-aware CTAs | Visual identity and core interactive sections |
| Navigation/footer | Responsive header/mobile menu and footer markup | Global route-aware HTML nav, dropdown, area/company/service links, centralized facts | Contact access and responsive behavior |
| Services | 12 advertised service labels and related interaction data | Hub + 10 consolidated pages, truthful content, Service schema | Existing terminology where accurate |
| Service areas | Five metro names | Hub + four unique city pages; homepage owns Des Moines | Confirmed five-city scope only |
| Commercial | Hero says commercial/residential; some reviews imply property work | Dedicated commercial hub and verified service scope | No generic residential page |
| Work/gallery | Before/after and 79-source gallery | Typed metadata, featured subsets, dedicated page, performance/provenance/alt cleanup | Existing images and interactions |
| Reviews | 106 categorized records and outbound Google link | Extract typed data, curated payload, dedicated page, count/update policy | Visible trust content; no self-review schema |
| Contact/form | Working validation + Resend flow | Dedicated page, shared contexts, explicit delivery contract, analytics/tests | One form/backend/email implementation |
| Business data | Partial `lib/site.ts` source | Verified-facts config and removal of duplicates/unverified schema | Name, phone, email, confirmed areas unless owner corrects them |
| Metadata | Global homepage metadata, OG/Twitter, canonical | Exact page records, factories, unique validation, remove keywords | Next Metadata API and production origin helper |
| Schema | Homepage LocalBusiness + WebSite and safe serializer | Organization-led graph, WebPage/page-type entities, Service/Breadcrumb/Article schema | JSON-LD format and escaped serialization |
| Sitemap/robots | Metadata routes | All canonical URLs from registry, stable dates, tests | Framework-native routes and sitemap reference |
| 404/redirects | Framework defaults, no redirects | Branded not-found; actual status tests; evidence-led redirects only | Never redirect unknown URLs to homepage |
| Localization | Client English/Spanish dictionary/control | Preserve as non-indexable preference; remove metadata mutation conflicts; document future localized architecture | Language control and saved preference |
| Blog | None | Typed hub, six sourced articles, schema, publishing/update workflow | No CMS/database/new archive taxonomy |
| Analytics | Vercel Analytics conditional | Production-safe GA4, exact event ownership/dedupe/PII tests, consent/account gate | Avoid second Google mechanism and keep Vercel only if desired |
| Performance | Next Image, responsive sizes, lazy loading, reduced motion | Measure and optimize video/gallery/large/mislabeled assets and hydration | Real media, animation, visual quality |
| Accessibility | Semantics, focus, labels, keyboard controls, reduced motion | Route/nav/breadcrumb/dialog audits and automated checks | Existing accessible patterns |
| Tests/CI | Historical Playwright artifacts only | Repeatable SEO/unit/browser checks and a valid lint/type/build workflow | No unnecessary custom crawler |
| Deployment | GitHub repo; Vercel signals | Document env/account/manual steps; confirm actual host/settings | No production config change without authorization |

## Section E — SEO Ownership Map

The paths below retain the specification's trailing-slash notation for readability. **Assumption:** because `next.config.mjs` does not enable `trailingSlash`, implementation canonicals should use Next's non-trailing form (for example, `https://www.moslawncaredsm.com/services`) except `/`; this must be verified against the deployed host before launch.

### Homepage, services, and commercial pages

| URL | Page purpose | Primary keyword | Secondary keywords | Exact title | Exact H1 | Exact meta description | Planned schema | Parent | Important inbound links | Important outbound links |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | Broad Des Moines residential/commercial lawn care and snow-removal homepage | `lawn care des moines ia` | lawn care service Des Moines; lawn maintenance Des Moines; lawn care company Des Moines; residential lawn care Des Moines; property services Des Moines | `Lawn Care & Snow Removal in Des Moines, IA \| Mo's Lawn Care` | `Lawn Care & Snow Removal in Des Moines, IA` | `Professional lawn care, mowing, landscaping, cleanups, aeration, weed control and snow removal for homes and businesses in the Des Moines metro.` | WebSite + WebPage + Organization/approved business entity | None | Logo, every breadcrumb, service-area hub/Des Moines link, footer | Services/cards, commercial, four city pages, Our Work, Reviews, Blog, About, Contact |
| `/services/` | Crawlable overview of the ten consolidated service intents | `lawn care services des moines ia` | lawn maintenance services Des Moines; yard maintenance Des Moines; landscaping and lawn care Des Moines; seasonal lawn services Des Moines | `Lawn Care Services in Des Moines, IA \| Mo's Lawn Care` | `Lawn Care Services for Des Moines Properties` | `Explore Mo's Lawn Care services in Des Moines, including mowing, aeration and seeding, weed control, landscaping, cleanups, grading and snow removal.` | CollectionPage + ItemList + BreadcrumbList | `/` | Main nav/footer, homepage service cards, every service breadcrumb | All 10 services, commercial, service areas, Contact |
| `/services/lawn-mowing/` | Commercial-intent mowing page | `lawn mowing des moines ia` | lawn mowing service Des Moines; grass cutting service Des Moines; residential lawn mowing Des Moines; lawn maintenance Des Moines | `Lawn Mowing Service in Des Moines, IA \| Mo's Lawn Care` | `Lawn Mowing Service in Des Moines, IA` | `Keep your property sharp with professional lawn mowing in Des Moines, IA. Residential and commercial service available. Request a free estimate from Mo's.` | WebPage + Service + BreadcrumbList | `/services/` | Services/home cards, city pages, mowing article, related services | Aeration & Seeding, Fertilization & Weed Control, Yard Cleanup, Commercial, Our Work, mowing article, Contact |
| `/services/aeration-overseeding/` | Consolidated aeration and seeding/overseeding commercial intent | `lawn aeration des moines ia` | aeration service Des Moines; lawn seeding Des Moines; overseeding Des Moines; core aeration Des Moines; aeration and seeding Des Moines | `Lawn Aeration & Seeding in Des Moines, IA \| Mo's Lawn Care` | `Lawn Aeration & Seeding in Des Moines, IA` | `Improve thin or compacted lawns with aeration and seeding services in Des Moines, IA. See how Mo's can help and request a free property estimate.` | WebPage + Service + BreadcrumbList | `/services/` | Services/home cards, city pages, aeration/overseeding/calendar articles, related services | Fertilization & Weed Control, Lawn Mowing, Spring Cleanup when relevant, aeration and overseeding articles, Services, Contact |
| `/services/fertilization-weed-control/` | Consolidated fertilization and weed-control commercial intent | `lawn fertilization des moines ia` | weed control Des Moines; lawn weed control Des Moines; fertilization service Des Moines; lawn treatment Des Moines | `Fertilization & Weed Control in Des Moines, IA \| Mo's Lawn Care` | `Lawn Fertilization & Weed Control in Des Moines, IA` | `Professional lawn fertilization and weed control in Des Moines, IA for healthier, cleaner-looking turf. Request a free estimate from Mo's Lawn Care.` | WebPage + Service + BreadcrumbList | `/services/` | Services/home cards, city pages, aeration/mowing pages | Aeration & Seeding, Lawn Mowing, Services, Contact |
| `/services/landscaping/` | Landscaping commercial intent | `landscaping des moines ia` | landscaping services Des Moines; landscaping company Des Moines; residential landscaping Des Moines; landscape maintenance Des Moines | `Landscaping Services in Des Moines, IA \| Mo's Lawn Care` | `Landscaping Services in Des Moines, IA` | `Upgrade and maintain your outdoor space with landscaping services in Des Moines, IA. View Mo's work and request a free residential or commercial estimate.` | WebPage + Service + BreadcrumbList | `/services/` | Services/home cards, city pages, Work, related services | Flower Bed Maintenance, Grading, Yard Cleanup, Our Work, Commercial, Contact |
| `/services/flower-bed-maintenance/` | Flower/landscape-bed maintenance commercial intent | `flower bed maintenance des moines` | landscape bed maintenance Des Moines; flower bed cleanup Des Moines; garden bed maintenance Des Moines; bed cleanup Des Moines | `Flower Bed Maintenance in Des Moines, IA \| Mo's Lawn Care` | `Flower Bed Maintenance in Des Moines, IA` | `Keep flower beds clean and maintained with professional bed care in Des Moines, IA. Request a free estimate from Mo's Lawn Care for your property.` | WebPage + Service + BreadcrumbList | `/services/` | Services/home cards, city pages, landscaping/cleanup pages | Landscaping, Spring Cleanup, Fall Cleanup & Leaf Removal, Yard Cleanup, Contact |
| `/services/yard-cleanup/` | Consolidated yard cleanup, overgrown yard, and ground-clearance intent | `yard cleanup des moines ia` | yard cleanup service Des Moines; overgrown yard cleanup Des Moines; property cleanup Des Moines; ground clearance Des Moines; overgrown lawn cleanup Des Moines | `Yard Cleanup Service in Des Moines, IA \| Mo's Lawn Care` | `Yard Cleanup Service in Des Moines, IA` | `Get overgrown yards and outdoor areas back under control with professional yard cleanup in Des Moines, IA. Contact Mo's for a free property estimate.` | WebPage + Service + BreadcrumbList | `/services/` | Services/home cards, city pages, cleanup/landscaping pages | Lawn Mowing, Spring Cleanup, Fall Cleanup & Leaf Removal, Grading, Landscaping, Contact |
| `/services/spring-cleanup/` | Spring cleanup commercial intent | `spring cleanup des moines ia` | spring yard cleanup Des Moines; spring lawn cleanup Des Moines; seasonal yard cleanup Des Moines | `Spring Yard Cleanup in Des Moines, IA \| Mo's Lawn Care` | `Spring Yard Cleanup in Des Moines, IA` | `Prepare your property for the growing season with spring yard cleanup in Des Moines, IA. Request a free estimate from Mo's Lawn Care.` | WebPage + Service + BreadcrumbList | `/services/` | Services/home cards, city pages, spring checklist, related services | Lawn Mowing, Flower Bed Maintenance, Yard Cleanup, Landscaping, spring checklist article, Contact |
| `/services/fall-cleanup-leaf-removal/` | Consolidated fall cleanup and leaf-removal commercial intent | `leaf removal des moines ia` | fall cleanup Des Moines; fall yard cleanup Des Moines; leaf cleanup Des Moines; leaf removal service Des Moines | `Fall Cleanup & Leaf Removal in Des Moines, IA \| Mo's Lawn Care` | `Fall Cleanup & Leaf Removal in Des Moines, IA` | `Clear leaves and seasonal debris with fall cleanup and leaf removal in Des Moines, IA. Request a free estimate from Mo's Lawn Care.` | WebPage + Service + BreadcrumbList | `/services/` | Services/home cards, city pages, fall tips, related services | Yard Cleanup, Lawn Mowing, Snow Removal, fall tips article, Contact |
| `/services/grading/` | Yard-grading commercial intent within verified scope | `yard grading des moines ia` | lawn grading Des Moines; grading service Des Moines; property grading Des Moines; uneven yard grading Des Moines | `Yard Grading Service in Des Moines, IA \| Mo's Lawn Care` | `Yard Grading Services in Des Moines, IA` | `Improve uneven ground and prepare outdoor areas with yard grading services in Des Moines, IA. Tell Mo's what your property needs and get a free estimate.` | WebPage + Service + BreadcrumbList | `/services/` | Services/home cards, city pages, cleanup/landscaping pages | Yard Cleanup, Landscaping, Our Work, Contact |
| `/services/snow-removal/` | Residential/commercial snow-removal intent within confirmed capabilities | `snow removal des moines ia` | snow removal service Des Moines; residential snow removal Des Moines; commercial snow removal Des Moines; driveway snow removal Des Moines | `Snow Removal Service in Des Moines, IA \| Mo's Lawn Care` | `Snow Removal Service in Des Moines, IA` | `Reliable snow removal for residential and commercial properties in Des Moines, IA. Keep driveways and access areas clear with Mo's. Request an estimate.` | WebPage + Service + BreadcrumbList | `/services/` | Services/home cards, city pages, commercial, reviews, fall page | Commercial, Service Areas, Reviews, Contact |
| `/commercial-property-services/` | Commercial service hub, not a duplicate of every service page | `commercial lawn care des moines ia` | commercial grounds maintenance Des Moines; commercial property maintenance Des Moines; commercial landscaping Des Moines; commercial lawn service Des Moines | `Commercial Lawn Care in Des Moines, IA \| Mo's Lawn Care` | `Commercial Lawn Care & Property Services in Des Moines` | `Commercial lawn care, cleanup, landscaping and snow removal for Des Moines properties. Build a dependable property maintenance plan with Mo's Lawn Care.` | WebPage + ItemList + BreadcrumbList | `/` | Main nav, homepage residential/commercial section, Lawn Mowing/Landscaping/Snow pages, footer | Verified applicable services, Our Work, Reviews, Service Areas, Contact |

### Service-area pages

| URL | Page purpose | Primary keyword | Secondary keywords | Exact title | Exact H1 | Exact meta description | Planned schema | Parent | Important inbound links | Important outbound links |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/service-areas/` | Metro coverage hub; Des Moines points to homepage | `lawn care des moines metro` | lawn care service areas Des Moines; lawn care near Des Moines; Des Moines metro lawn service | `Lawn Care Service Areas Near Des Moines, IA \| Mo's Lawn Care` | `Lawn Care Across the Des Moines Metro` | `Mo's Lawn Care serves Des Moines, Ankeny, Waukee, Norwalk and Altoona with lawn care, landscaping, seasonal cleanups and snow removal.` | CollectionPage + ItemList + BreadcrumbList | `/` | Main nav/footer, homepage area section, service/city pages | Homepage/Des Moines, Ankeny, Waukee, Norwalk, Altoona, Services, Contact |
| `/service-areas/ankeny-ia/` | Unique Ankeny-wide lawn care intent | `lawn care ankeny ia` | lawn service Ankeny IA; lawn mowing Ankeny; landscaping Ankeny; yard cleanup Ankeny; snow removal Ankeny | `Lawn Care in Ankeny, IA \| Mo's Lawn Care` | `Lawn Care Services in Ankeny, IA` | `Professional lawn care in Ankeny, IA, including mowing, landscaping, seasonal cleanups, aeration, weed control and snow removal. Get a free estimate.` | WebPage + ItemList + BreadcrumbList; no city LocalBusiness | `/service-areas/` | Area hub, homepage, footer, selected service pages | Relevant services, area hub, selected related cities, general Work/Reviews, Contact |
| `/service-areas/waukee-ia/` | Unique Waukee-wide lawn care intent | `lawn care waukee ia` | lawn service Waukee IA; lawn mowing Waukee; landscaping Waukee; yard cleanup Waukee; snow removal Waukee | `Lawn Care in Waukee, IA \| Mo's Lawn Care` | `Lawn Care Services in Waukee, IA` | `Professional lawn care in Waukee, IA, including mowing, landscaping, seasonal cleanups, aeration, weed control and snow removal. Get a free estimate.` | WebPage + ItemList + BreadcrumbList; no city LocalBusiness | `/service-areas/` | Area hub, homepage, footer, selected service pages | Relevant services, area hub, selected related cities, general Work/Reviews, Contact |
| `/service-areas/norwalk-ia/` | Unique Norwalk-wide lawn care intent | `lawn care norwalk ia` | lawn service Norwalk IA; lawn mowing Norwalk; landscaping Norwalk; yard cleanup Norwalk; snow removal Norwalk | `Lawn Care in Norwalk, IA \| Mo's Lawn Care` | `Lawn Care Services in Norwalk, IA` | `Professional lawn care in Norwalk, IA, including mowing, landscaping, seasonal cleanups, aeration, weed control and snow removal. Get a free estimate.` | WebPage + ItemList + BreadcrumbList; no city LocalBusiness | `/service-areas/` | Area hub, homepage, footer, selected service pages | Relevant services, area hub, selected related cities, general Work/Reviews, Contact |
| `/service-areas/altoona-ia/` | Unique Altoona-wide lawn care intent | `lawn care altoona ia` | lawn service Altoona IA; lawn mowing Altoona; landscaping Altoona; yard cleanup Altoona; snow removal Altoona | `Lawn Care in Altoona, IA \| Mo's Lawn Care` | `Lawn Care Services in Altoona, IA` | `Professional lawn care in Altoona, IA, including mowing, landscaping, seasonal cleanups, aeration, weed control and snow removal. Get a free estimate.` | WebPage + ItemList + BreadcrumbList; no city LocalBusiness | `/service-areas/` | Area hub, homepage, footer, selected service pages | Relevant services, area hub, selected related cities, general Work/Reviews, Contact |

### Company, trust, work, and contact pages

| URL | Page purpose | Primary keyword | Secondary keywords | Exact title | Exact H1 | Exact meta description | Planned schema | Parent | Important inbound links | Important outbound links |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/about/` | Accurate company identity/trust page | `mo's lawn care des moines` | lawn care company Des Moines; local lawn care company Des Moines; Mo's Lawn Care Iowa | `About Mo's Lawn Care \| Des Moines, IA` | `About Mo's Lawn Care` | `Learn about Mo's Lawn Care and Snow Removal Services LLC, the team helping residential and commercial properties across the Des Moines metro.` | AboutPage + Organization reference + BreadcrumbList | `/` | Main nav/footer, homepage trust context, Contact | Services, Service Areas, Our Work, Reviews, Contact |
| `/our-work/` | Canonical gallery/before-and-after collection | `lawn care projects des moines` | landscaping projects Des Moines; lawn care before and after Des Moines; lawn care gallery Des Moines; yard cleanup before after | `Lawn Care & Landscaping Projects in Des Moines \| Mo's` | `Lawn Care & Landscaping Work Across the Des Moines Metro` | `See lawn care, landscaping, cleanup and snow removal work from Mo's across the Des Moines metro, including before-and-after property transformations.` | CollectionPage + BreadcrumbList; verified ImageObject subset only | `/` | Main nav/footer, homepage gallery/before-after, relevant services/cities | Relevant services, Reviews, Contact |
| `/reviews/` | Canonical curated company-review collection | `mo's lawn care reviews` | lawn care reviews Des Moines; Mo's Lawn Care Des Moines reviews; snow removal reviews Des Moines | `Mo's Lawn Care Reviews \| Des Moines, IA` | `What Customers Say About Mo's Lawn Care` | `Read customer feedback about Mo's Lawn Care and Snow Removal Services LLC in the Des Moines metro, from mowing and cleanup to snow removal.` | CollectionPage + BreadcrumbList; no Review/aggregateRating attempt | `/` | Main nav/footer, homepage review subset, Snow/Commercial/Work pages | Relevant services by verified category, Our Work, Contact, verified external Google review URL |
| `/contact/` | Canonical estimate/contact conversion page | `lawn care estimate des moines` | lawn care quote Des Moines; free lawn estimate Des Moines; contact Mo's Lawn Care | `Contact Mo's Lawn Care \| Free Estimate in Des Moines, IA` | `Request a Free Property Estimate` | `Tell Mo's Lawn Care what your Des Moines-area property needs. Request a free estimate for mowing, landscaping, cleanup, lawn treatments or snow removal.` | ContactPage + Organization reference + BreadcrumbList | `/` | Main nav/footer, every service/area/article CTA, homepage form | Phone/email, Services, Service Areas, privacy/consent information if approved |

### Blog hub and required initial cluster

The original brief supplied no secondary-keyword lists for the six individual articles. Each completed article task replaces its placeholder only after live same-intent research; unresearched future ownership remains **Missing from brief — research before drafting**.

| URL | Page purpose | Primary keyword | Secondary keywords | Exact title | Exact H1 | Exact meta description | Planned schema | Parent | Important inbound links | Important outbound links |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/blog/` | Central Iowa informational content hub | `iowa lawn care tips` | lawn care tips Des Moines; Central Iowa lawn care guide; seasonal lawn care Iowa; Iowa yard care tips | `Iowa Lawn Care Tips & Seasonal Guides \| Mo's Lawn Care` | `Lawn Care Tips for Des Moines & Central Iowa` | `Practical lawn care and seasonal property tips for Des Moines and Central Iowa, including mowing, aeration, overseeding, cleanup and year-round planning.` | Blog or CollectionPage + ItemList + BreadcrumbList | `/` | Main nav/footer, homepage latest tips, every article breadcrumb | All six articles, naturally relevant services, Contact only where useful |
| `/blog/when-to-aerate-lawn-iowa/` | Iowa aeration timing informational intent | `when to aerate lawn in iowa` | **Missing from brief — research before drafting** | `When to Aerate Your Lawn in Iowa \| Mo's Lawn Care` | `When Is the Best Time to Aerate a Lawn in Iowa?` | `Learn when Iowa lawns generally benefit from aeration, what signs to watch for and how aeration fits into a practical Central Iowa lawn care plan.` | BlogPosting/Article + WebPage + BreadcrumbList + Organization publisher | `/blog/` | Blog hub, calendar pillar, Aeration service helpful resources | Aeration & Seeding service, calendar pillar, overseeding article, sources |
| `/blog/best-time-to-overseed-lawn-iowa/` | Iowa overseeding timing informational intent | `best time to overseed lawn in iowa` | **Missing from brief — research before drafting** | `Best Time to Overseed a Lawn in Iowa \| Mo's Lawn Care` | `What Is the Best Time to Overseed a Lawn in Iowa?` | `Understand the usual timing considerations for overseeding an Iowa lawn, how weather affects planning and when professional help may make sense.` | BlogPosting/Article + WebPage + BreadcrumbList + Organization publisher | `/blog/` | Blog hub, calendar pillar, Aeration service helpful resources | Aeration & Seeding service, calendar pillar, aeration article, sources |
| `/blog/how-often-to-mow-lawn-iowa/` | Iowa mowing-frequency informational intent | `how often to mow lawn in iowa` | **Missing from brief — research before drafting** | `How Often Should You Mow a Lawn in Iowa? \| Mo's Lawn Care` | `How Often Should You Mow Your Lawn in Iowa?` | `Learn what determines mowing frequency for Iowa lawns, including growth, weather and seasonal conditions, without relying on a rigid schedule.` | BlogPosting/Article + WebPage + BreadcrumbList + Organization publisher | `/blog/` | Blog hub, calendar pillar, Lawn Mowing helpful resources | Lawn Mowing service, calendar pillar, sources |
| `/blog/spring-lawn-cleanup-des-moines/` | Spring-cleanup checklist informational intent, distinct from service intent | `spring lawn cleanup checklist des moines` | spring yard cleanup checklist Des Moines; spring lawn care checklist Des Moines; spring lawn cleanup tips Iowa | `Spring Lawn Cleanup Checklist for Des Moines Properties \| Mo's` | `A Spring Lawn Cleanup Checklist for Des Moines Properties` | `Use this practical spring cleanup checklist to prepare a Des Moines-area yard for the growing season and identify when professional cleanup can help.` | BlogPosting/Article + WebPage + BreadcrumbList + Organization publisher | `/blog/` | Blog hub, calendar pillar, Spring Cleanup helpful resources | Spring Cleanup service, calendar pillar, sources |
| `/blog/fall-leaf-cleanup-des-moines/` | Fall leaf-cleanup advice intent, distinct from service intent | `fall leaf cleanup tips des moines` | **Missing from brief — research before drafting** | `Fall Leaf Cleanup Tips for Des Moines Properties \| Mo's` | `Fall Leaf Cleanup Tips for Des Moines Properties` | `Plan fall leaf cleanup for a Des Moines-area property with practical timing, organization and disposal considerations for the season.` | BlogPosting/Article + WebPage + BreadcrumbList + Organization publisher | `/blog/` | Blog hub, calendar pillar, Fall Cleanup service helpful resources | Fall Cleanup & Leaf Removal service, calendar pillar, verified municipal/source links |
| `/blog/central-iowa-lawn-care-calendar/` | Informational pillar connecting the five supporting guides | `central iowa lawn care calendar` | **Missing from brief — research before drafting** | `Central Iowa Lawn Care Calendar \| Mo's Lawn Care` | `A Seasonal Lawn Care Calendar for Central Iowa` | `Plan mowing, cleanup, aeration and other lawn-care decisions through the seasons with a practical Central Iowa property-care calendar.` | BlogPosting/Article + WebPage + BreadcrumbList + Organization publisher | `/blog/` | Blog hub, all five supporting articles, homepage latest tips | All five supporting articles, relevant service pages, authoritative sources |

## Section F — Technical Design

### 1. Routing implementation

- Keep `app/page.tsx` as the homepage; add static hub/company pages under their exact App Router folders.
- Use `app/services/[slug]/page.tsx` with an enumerated typed service registry and `generateStaticParams()` for the 10 valid service slugs. `generateMetadata()` and the page component must read the same record; unknown slugs call `notFound()`.
- Use `app/service-areas/[city]/page.tsx` similarly for only `ankeny-ia`, `waukee-ia`, `norwalk-ia`, and `altoona-ia`. The homepage remains the Des Moines landing page.
- Use `app/blog/[slug]/page.tsx` with six initial published records and no catch-all archive behavior. Draft/unrecognized slugs return 404 and stay out of the sitemap.
- Add `app/not-found.tsx` for branded, useful navigation while retaining an actual 404 response. Do not add a redirect-to-home catch-all.
- **Assumption to verify:** Next/Vercel will permanently normalize trailing-slash variants to the configured non-trailing URL. Verify status and canonical on production before launch.

### 2. Shared layout and UI composition

- Move `SiteHeader` and a new extracted `SiteFooter` into the root marketing shell so every page has crawlable global navigation. The header will be route-aware: transparent/scroll-reactive on the homepage and readable on interior page heroes.
- Use `next/link` for internal page routes and ordinary `<a>` for `tel:`, `mailto:`, external links, and true same-page fragments. Preserve homepage section IDs so old fragment links keep working.
- Add shared `Breadcrumbs`, `PageHero`, `ServiceCardGrid`, `ServiceAreaLinks`, `RelatedLinks`, `WorkPreview`, `ReviewPreview`, `HelpfulResources`, `FaqSection`, and `EstimateCallToAction` primitives only as actual reuse emerges.
- Dynamic service/city templates assemble these primitives with record-specific ordering, image, tone, and sections; a common data shape must not produce city-name-swapped doorway pages or visually identical service pages.
- Reuse the single `EstimateForm` on homepage and Contact; CTA links elsewhere can route to `/contact` with an optional fixed, non-indexable query/fragment context only if it does not create canonical variants.

### 3. Route, content, and business representation

- Keep current interactive datasets in `lib/site.ts` initially, but strengthen the `site` record as the single approved business source. Replace duplicated phone, email, service areas, hours, Google review URL, domain, and social links with references to it.
- Introduce one typed canonical route registry containing path, page kind, indexability, parent, nav/footer inclusion, title, H1, description, primary/secondary keywords, and social-image key. Service/city/blog records extend it with page-specific content.
- Split large page content into independently reviewable files:
  - `content/services/<slug>.ts` for each service;
  - `content/service-areas/<city>.ts` for each city;
  - `content/blog/<slug>.ts` for each article;
  - direct static page modules/data for Services, Commercial, About, Work, Reviews, Contact, and Blog hubs where a separate data file materially improves reviewability.
- Content records use explicit link IDs/paths rather than keyword-generated links. Type validation prevents duplicate slugs/paths and invalid related-route references.
- Add evidence state to business-sensitive fields (`verified`, `owner-confirmation-required`, source note/date where applicable). Only verified fields flow to visible factual copy or schema.

### 4. Metadata and canonical implementation

- Replace the root one-page metadata object with accurate defaults and a helper that returns Next `Metadata` from the typed route record.
- Do not use a title template that modifies the exact supplied titles; each target title is already fully branded. Use exact page titles and validate uniqueness.
- Build canonicals by joining `SITE_ORIGIN` and the normalized clean path. Never include `lang`, UTM, form context, or any query string.
- Generate `openGraph` title/description/url/type/image and Twitter large-card equivalents from the same record. Use `article` OG type for articles only when supported accurately.
- Social-image records require verified real image, intrinsic dimensions, MIME/format, and honest alt text. Use a conservative verified default until service-specific images are approved.
- Remove the metadata `keywords` array. Keep index/follow defaults for published content; drafts/utility routes do not enter the public registry.
- Metadata tests assert path/title/H1/description/canonical uniqueness and exact ownership values.

### 5. Structured-data graph

- Expand `lib/structured-data.ts` into typed graph builders and retain the escaped `StructuredData` script component.
- Stable IDs:
  - `${SITE_ORIGIN}/#website`
  - `${SITE_ORIGIN}/#organization`
  - `${canonical}#webpage`
  - `${canonical}#breadcrumb`
  - `${canonical}#service` on service pages
  - `${canonical}#article` on blog articles
- Homepage graph: Organization, WebSite, WebPage. Interior pages reference the same organization/website IDs and add the applicable page/breadcrumb/service/item/article nodes.
- The owner confirmed a Service Area Business with no public street address. Use Organization without `address` or `geo`; never emit a locality-only postal address or coordinates as a substitute. The approved hours are every day `08:00–18:00` and may be consumed only where the future selected schema type supports them accurately.
- Service schema names/descriptions/areas mirror visible content and reference the one provider ID. City pages use WebPage + visible-service ItemList, never a fabricated business per city.
- About uses AboutPage; Contact ContactPage; hubs/work/reviews use CollectionPage/WebPage as appropriate; blog hub uses Blog/CollectionPage + ItemList; articles use BlogPosting/Article + WebPage + publisher only with real maintained fields.
- No `aggregateRating` or self-serving review schema. No FAQ schema by default; visible FAQs can exist without it. No ImageObject city/location claims without metadata.
- Serialize one coherent `@graph` per page and test that JSON is valid, IDs resolve consistently, visible breadcrumbs match schema, and forbidden/unverified fields are absent.

### 6. Breadcrumb and internal-link architecture

- Visible breadcrumbs use the route registry and render real links for every ancestor except the current page. JSON-LD consumes the same breadcrumb items.
- Global main navigation: Services, Service Areas, Our Work, Reviews, Blog/Lawn Care Tips, About, Contact. A usable Services menu may list all 10 services without putting them all at top level.
- Footer columns implement the exact service, area, and company groups from the specification. Des Moines links to `/`; four other cities link to their pages.
- Homepage service cards, CrossSection labels, property service readouts, problem answers, work/review CTAs, areas, and blog tips gain real route links while their controls retain button semantics.
- Each service page uses the service-specific outbound relationships in Section E; each article and related service form bidirectional helpful-resource links. A validation test detects orphaned indexable routes and invalid internal references.
- Target crawl depth is three clicks or fewer: all hubs in global navigation/footer, all detail pages one click from a hub, and featured detail pages directly linked from homepage/context.

### 7. Business-information single source of truth

- `site` should contain normalized business name, short name, canonical origin, phone display/E.164/href, email, approved primary location wording, typed service areas, form endpoint, verified daily hours, the Service Area Business/address/geo publication policy, the sole approved Google Business Profile URL, and centralized review display policy.
- Do not store or expose a public street address, locality-only postal address, or geo coordinates. The only approved external profile is Google Business Profile; do not add Facebook, Instagram, or guessed placeholders.
- Review summary uses the centralized display copy `170+ Google Reviews` as minimum-style copy rather than a precise live count. Do not add `aggregateRating` structured data.
- Separate customer review quotes from business claims. Review wording can be displayed accurately as attributed customer speech, but it does not automatically authorize company-wide guarantees or schema facts.
- Record owner confirmations in this document or a small approved-data file before implementation tasks consume them.

### 8. Image, gallery, and performance strategy

- Create a typed project/image registry with stable ID, source, honest alt, intrinsic dimensions when known, media type, service tags, before/after pairing, featured placements, provenance/source, and optional verified city. Missing city remains missing.
- Home loads a curated featured subset; `/our-work` owns the full experience. Do not serialize all 79 URLs into the homepage RSC payload. Use server-rendered first items plus accessible load-more/client batching or pagination on the work page.
- Preserve the carousel/modal and before/after slider, but add dialog focus return/trapping review and make image captions/alt metadata-driven.
- Audit the 68 remote Google URLs for permission/stability. Prefer owned local optimized copies only with authorization; do not silently copy or delete sources.
- Convert actual PNG/JPEG payloads masquerading as `.webp`, optimize the 2.6–3.2 MB assets, generate appropriately sized variants through the existing Next image pipeline, and keep originals until visual verification. This belongs to the dedicated image task.
- Keep the hero poster as the LCP candidate with `priority`; measure the video and change `preload="auto"` only from evidence. Keep below-fold images lazy and dimensions/sizes explicit.
- Record before/after performance with Lighthouse/Web Vitals or a comparable production-like tool; inspect LCP, CLS, INP, bytes, request count, JS/hydration, and third-party impact without sacrificing brand motion.

### 9. Sitemap, robots, 404, and redirects

- `app/sitemap.ts` imports the published canonical route registry and emits exactly the 29 current target URLs. It excludes API, not-found, drafts, fragments, query strings, redirects, and utility routes.
- Omit `lastModified` for static pages unless a real maintained update value exists; article dates flow through only when real. Avoid `new Date()` on every generation.
- `app/robots.ts` keeps public content crawlable and references the clean production sitemap. API routes need not be in the sitemap; add a robots disallow only if a genuine crawl reason is documented.
- `app/not-found.tsx` provides links to Services, Service Areas, Blog, and Contact while preserving 404 status.
- No redirects are planned from repository evidence. Before launch, inspect production analytics/Search Console/backlinks; add only one-hop permanent mappings to true equivalents and test no chains.

### 10. Localization implications

- Initial SEO architecture remains one English canonical per route. `?lang=es` is a UI preference and is excluded from canonicals, sitemap, navigation URLs, schema IDs, and hreflang.
- Preserve the language control and localStorage behavior, but remove client title/meta-description mutation that can conflict with server metadata. The control may translate approved visible strings with explicit English fallback; it must not imply that every interior page is fully translated.
- Audit translation coverage and accessibility of mixed-language fallbacks. Do not auto-generate Spanish SEO copy for 29 pages.
- A future indexable Spanish rollout requires separately approved full translations, localized paths (recommended `/es/...`), server-rendered locale metadata/content, self-canonicals, reciprocal `hreflang` (`en`, `es`, optionally `x-default`), localized sitemaps/navigation, and editorial ownership. That is outside this initial rollout unless separately authorized.

### 11. Blog model, sourcing, and publishing workflow

- Use a `BlogArticle` type with: slug/path, status, title, H1, description, primary keyword, optional researched secondary keywords, excerpt, sections/blocks, visible source list, claim/source notes, related service/article paths, image metadata, publisher, optional real author, optional real dates, and review owner/date.
- Store each article in its own typed module. An index imports them, rejects duplicates/broken links, returns only `published` records to `generateStaticParams`, the hub, sitemap, and Latest Tips.
- Article renderer supports semantic headings, paragraphs, lists/checklists, tables only when useful, inline citations/source links, contextual CTAs, related reading, and a visible Sources section. It does not turn every block into a sales CTA.
- Publishing workflow:
  1. Choose an approved intent that does not cannibalize a service page.
  2. Research current Iowa-specific claims from authoritative primary sources (Iowa State Extension first; official government/municipal or other university extension as appropriate).
  3. Record each source URL, publisher, accessed/review date, and which claims it supports; never copy source prose.
  4. Draft and fact-check conditional advice for grass type, soil, weather, property condition, and local rules.
  5. Obtain business approval for any Mo's capability, CTA, author, date, and image claim.
  6. Add metadata, honest image alt/dimensions, service and related-article links, schema-compatible fields, and visible sources.
  7. Run content/route/schema/link/source validation and editorial review.
  8. Change status to published, which adds the route to hub/static params/sitemap.
  9. Review seasonally or when source/service guidance changes; update `dateModified` only after a real visible update.
- Six article tasks perform the actual web research later. No horticultural claims are prewritten in the foundation task.

### 12. GA4 integration and event ownership

#### Loading method and environment behavior

- Because no Google tracking method exists, use a minimal framework-supported Google tag loaded `afterInteractive` with `next/script` and a small typed helper; do not install a GA4 package or introduce GTM simultaneously.
- Server configuration uses `GA4_MEASUREMENT_ID` plus an explicit enable/environment gate. Render the client tag only when the ID matches expected `G-...` form, enablement is explicit, and deployment is production (`VERCEL_ENV === 'production'` or an approved equivalent explicit deployment environment). `NODE_ENV=production` alone is insufficient because previews are production builds.
- Local, automated test, and preview environments render no production tag and issue no production GA requests. Tests inject a mock transport/data layer.
- Continue Vercel Analytics only after owner privacy/analytics approval and restrict it to the intended production environment; it is not a second Google tag but still belongs in the privacy/loading review.
- Production enablement is blocked until the real Measurement ID, stream settings, and consent/privacy decision are confirmed. No ID is invented in source or `.env.example`.

#### Consent and Enhanced Measurement

- Inspect the production web stream before custom events. If Enhanced Measurement form interactions are enabled, decide deliberately whether to disable that subfeature and use the controlled custom `form_start`; never knowingly send duplicate automatic/custom `form_start` events.
- Do not enable Google Signals, advertising features, remarketing, or additional user-data collection. If consent is required by the owner's approved policy, do not load/send GA4 before the approved consent state; implementation must integrate rather than invent a legal policy.

#### Form response contract and deduplication

- Refine the existing API response without replacing Resend:
  - provider-confirmed email: `{ ok: true, delivery: 'sent', submissionId }`;
  - honeypot suppression: `{ ok: true, delivery: 'suppressed' }`;
  - actionable failures: non-2xx with a bounded non-PII `errorCode`.
- `generate_lead` fires in the submit handler only after parsing `delivery: 'sent'` and a stable `submissionId`. A synchronous in-flight ref prevents double requests; a per-form `Set`/successful-id ref prevents repeated callbacks, rerenders, hydration, and Strict Mode from emitting the same id twice.
- Do not fire on button click, client validation failure, network failure, non-2xx response, malformed success response, or honeypot suppression.

#### Required event contract

| Event | Code owner and trigger | Allowed parameters | Key-event treatment |
| --- | --- | --- | --- |
| `generate_lead` | `EstimateForm`, once after provider-confirmed `delivery: 'sent'` | `form_id`, `form_name`, `lead_type`, controlled `service_category`, clean `page_path`, `placement`, `language`, route-derived `city_context` | Primary GA4 key event; manual Admin action |
| `form_start` | `EstimateForm`, once per mounted form after first meaningful focus/input/change on a real field; coordinate Enhanced Measurement | Same non-PII form/page context; no field value | Diagnostic only |
| `form_submit_error` | `EstimateForm`, only when a backend response is received and actionable; never validation/network-only | Form/page context plus bounded `error_type`/HTTP class, not server text or payload | Diagnostic only |
| `click_to_call` | One delegated/reusable contact-link tracker on activation of real `a[href^="tel:"]` | clean `page_path`, sanitized business `link_url`, `link_text`, `placement`, `language`, route-derived `city_context` | Secondary intent; key-event decision requires owner approval |
| `click_email` | Same tracker for real `a[href^="mailto:"]` | Same safe link/page fields | Secondary intent, not primary conversion |

- Helper uses an allowlist per event. Never pass customer name, entered phone/email/address, message/project text, full payload, Resend response body, or arbitrary DOM/form values. Do not assign event value/currency.
- Contact tracking is synchronous/non-blocking and never calls `preventDefault`, so phone dialer/email client behavior is preserved.
- `page_path` is pathname-only; UTM attribution remains in GA's normal page/location collection and is not rewritten. Language changes must preserve existing UTM query parameters.

#### GA4 manual administration and verification

1. Verify the production Measurement ID and whether GA4 or GTM is already injected outside the repository.
2. Review consent/privacy decision and Enhanced Measurement form settings.
3. Deploy the disabled-by-default/production-gated implementation with approved environment values.
4. Confirm each event and safe parameters in DebugView and Realtime.
5. Mark `generate_lead` as the primary key event/conversion in GA4 Admin.
6. Decide whether `click_to_call` is a secondary key event.
7. Register only parameters that genuinely require custom dimensions.
8. Verify Reports → Acquisition → Traffic acquisition and standard UTM attribution.
9. Update/test the Google Business Profile website link manually as `https://www.moslawncaredsm.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp&utm_content=website_button`.

### 13. Validation architecture

- Add focused pure-data tests for route/content registries, metadata uniqueness/exactness, canonical construction, sitemap membership, schema JSON, breadcrumbs, internal link validity/orphans, published blog fields/sources, and forbidden city/service permutations.
- Add form/analytics tests with mocked `fetch`/transport covering one success → one lead, duplicate callback → one lead, validation failure → zero leads, backend/network/bot failure → zero leads, safe errors, one form start, native contact destinations, parameter allowlists, and non-production silence.
- Add a small browser route-smoke suite only if the chosen authorized testing foundation supports it; inspect HTML source/status/headings/canonicals and mobile interactions rather than building a custom crawler.
- Required task checks use the repository's eventual supported commands and report run/pass/fail/not available separately. Build and typecheck become required before deployment; lint cannot be claimed until its missing dependency/config is resolved.

## Section G — File Impact

This is the expected implementation footprint, not authorization to create these files now. Exact test/asset filenames may be refined by the authorized task, and any design discovery must update this plan first.

### Expected created files/modules

#### App Router pages

- `app/services/page.tsx` — services hub.
- `app/services/[slug]/page.tsx` — statically enumerated service template for 10 service records.
- `app/commercial-property-services/page.tsx` — commercial hub.
- `app/service-areas/page.tsx` — metro service-area hub.
- `app/service-areas/[city]/page.tsx` — statically enumerated four-city template.
- `app/about/page.tsx`, `app/our-work/page.tsx`, `app/reviews/page.tsx`, `app/contact/page.tsx` — company/trust/conversion pages.
- `app/blog/page.tsx`, `app/blog/[slug]/page.tsx` — blog hub and six statically enumerated articles.
- `app/not-found.tsx` — branded actual-404 UI.

#### Typed content and route data

- `content/types.ts` — shared route, link, FAQ, image, service, area, source, and article types.
- `content/routes.ts` — canonical published-route/ownership registry and hierarchy.
- `content/services/index.ts` plus one module for each service slug — individually reviewable service content.
- `content/service-areas/index.ts` plus `ankeny-ia.ts`, `waukee-ia.ts`, `norwalk-ia.ts`, `altoona-ia.ts` — distinct verified city content.
- `content/blog/index.ts` plus the six exact article-slug modules — sourced blog content and publishing metadata.
- `content/projects.ts` and `content/reviews.ts` — extracted typed work/review records with provenance/status metadata; migrate rather than duplicate the current arrays.

#### Shared presentation and SEO infrastructure

- `components/site-footer.tsx` — shared route footer.
- `components/breadcrumbs.tsx` — visible navigation driven by route hierarchy.
- `components/page-hero.tsx`, `components/service-card-grid.tsx`, `components/service-area-links.tsx`, `components/related-links.tsx`, `components/helpful-resources.tsx`, `components/faq-section.tsx`, `components/estimate-call-to-action.tsx` — add only when reused by the authorized page tasks.
- `components/service-page.tsx`, `components/service-area-page.tsx`, `components/blog-article.tsx` — server-rendered composition templates.
- `components/ga4.tsx`, `components/contact-link-tracker.tsx` — production-gated tag and non-blocking contact event ownership.
- `lib/metadata.ts` — canonical/page metadata builder.
- `lib/analytics.ts` and `lib/analytics-config.ts` — typed allowlisted events, runtime transport, and production gating.
- `lib/content-validation.ts` — route/content/link/source validation reusable by tests/build scripts.

#### Documentation, configuration, and tests

- `.env.example` — names and safe comments for Resend and disabled-by-default GA4 configuration; never real values.
- `docs/content-publishing.md` — blog research/source/image/internal-link/update workflow and business-approval checklist.
- `tests/seo/*`, `tests/analytics/*`, and `tests/forms/*` — focused data/metadata/schema/event/response tests after the test-runner decision.
- `tests/e2e/seo.spec.ts`, `tests/e2e/estimate-analytics.spec.ts`, and `playwright.config.ts` only if an authorized task adopts repository Playwright as the smallest repeatable browser suite.
- Optimized image variants under a clearly named existing/new `public/` subdirectory, only after provenance and visual QA.

### Expected modified files

- `app/layout.tsx` — shared header/footer shell, metadata defaults, production-safe analytics mounting, language behavior integration.
- `app/page.tsx` — required homepage metadata/content structure, crawlable links, curated work/reviews/blog previews, shared footer removal; preserve experiences.
- `app/robots.ts`, `app/sitemap.ts`, `app/manifest.ts` — registry-driven URLs/accurate business metadata and removal of volatile dates.
- `app/api/estimate/route.ts` — explicit delivery/suppression/error contract and shared types; keep Resend implementation.
- `components/site-header.tsx`, `components/mobile-navigation.tsx` — global route navigation, interior-page behavior, centralized contact data, tracking placements.
- `components/hero.tsx`, `components/cross-section.tsx`, `components/property-hotspots.tsx`, `components/problem-selector.tsx` — exact homepage targeting and crawlable contextual service links without losing controls.
- `components/gallery.tsx`, `components/GalleryClient.tsx`, `components/before-after-slider.tsx` — typed project source, featured/full-page modes, metadata-driven alts, lower payload, preserved interaction.
- `components/testimonials.tsx` — import extracted data, configurable curated/full modes, central review summary/link, reduced initial payload.
- `components/estimate-section.tsx`, `components/estimate-form.tsx` — reusable placement/context, response parsing, in-flight/success dedupe, safe GA4 events.
- `components/language-switcher.tsx`, `lib/i18n.tsx`, `lib/es-translations.json` — preserve UI translation while removing conflicting SEO metadata mutation and documenting/handling incomplete coverage.
- `components/structured-data.tsx`, `lib/structured-data.ts` — coherent typed page graph, stable IDs, omission of unverified fields.
- `lib/site.ts`, `lib/site-url.ts` — approved single-source business/contact/area/review/social/config data and normalized URL helpers.
- `app/globals.css` — shared interior layouts/navigation/breadcrumbs/accessibility/performance styles while retaining tokens and motion rules.
- `next.config.mjs` — only if verified image/redirect/production behavior requires configuration; no speculative setting.
- `data/all_image_urls.txt` — annotate/migrate only if the gallery task cannot preserve it as a generated/legacy source without duplication.
- `package.json`, `pnpm-lock.yaml`, `tsconfig.json`, `.gitignore` — only if an authorized validation task proves scripts/test tooling/config are needed. Use pnpm as declared; do not update both lockfiles mechanically.
- Relevant `public/` media — lossless reference/mapping or optimized replacements after visual verification; originals remain until approved.
- `plan.md` — status, discoveries, validation, and owner decisions after every authorized task.

### Expected deleted files

- **None planned.** Do not delete existing assets, historical Playwright artifacts, `package-lock.json`, generated build info, or legacy data merely for cleanup during SEO work.
- If a later authorized task proves a file obsolete (for example, an asset after a verified byte-identical/visually approved replacement), list that exact deletion in `plan.md` before taking it and preserve recoverability in git.

## Ordered Implementation Tasks

The order below follows the required priorities while using the prompt's reviewable page-by-page breakdown: shared technical foundations and measurement first; homepage and service architecture next; the commercial hub and service areas after the core service cluster; trust/conversion pages next; then the required blog cluster; finally media, linking, schema, accessibility/performance, production analytics, and documentation gates. No task may begin without separate authorization, and an authorized task must stop before the next task.

### Task 1 — Approved Business Data, Route Registry, and Validation Foundation

- **Status:** `[x]` Completed
- **Objective:** Establish typed, reviewable sources for approved business facts, all 29 canonical routes, ownership metadata, internal-link references, and the smallest repeatable validation foundation.
- **Why It Is Needed:** Metadata, sitemap, navigation, schema, page content, and analytics will drift or expose disputed facts if they continue to use duplicated literals; later tasks also need one authoritative path inventory.
- **Dependencies:** None; this is the first implementation task and still requires owner answers for any fact marked unverified.
- **Files Involved:** `lib/site.ts`, `lib/site-url.ts`, new `content/types.ts`, new `content/routes.ts`, new `lib/content-validation.ts`, `.env.example`; `package.json`, `pnpm-lock.yaml`, `tsconfig.json`, and test configuration only if the authorized validation choice requires them.
- **Implementation Details:** Normalize business name, origin, phone display/E.164/href, email, five confirmed service areas, verified daily hours, Service Area Business/address/geo publication policy, the sole approved Google Business Profile URL, and centralized review display copy/policy. Register exactly the 29 target URLs with exact page type, parent, primary/secondary ownership, title, H1, description, implementation/publication status, indexability, and link IDs. Prohibit `/service-areas/des-moines-ia/`, service/city permutations, duplicate paths, query-bearing canonical paths, and thin split pages. Add safe environment documentation without real secrets and select the smallest compatible test setup without gratuitous dependencies or dual-lockfile churn.
- **SEO Impact:** Governs every target URL and prevents canonical, ownership, fact, and sitemap divergence before pages are created.
- **Edge Cases:** Missing owner confirmations; apostrophe/HTML escaping in the business name; root-path joining; optional facts accidentally rendered as empty strings; duplicate aliases; stale `package-lock.json` versus declared pnpm workflow; no installed dependencies.
- **Validation:** Review the registry against Section E, count 29 unique indexable paths, confirm exact metadata strings, confirm all parents/references resolve, and inspect consumers for remaining duplicated business literals before migrating them.
- **Tests:** Add pure-data assertions for route count/uniqueness, valid hierarchy, exact ownership values, clean paths, forbidden-route absence, normalized contact values, and omission of unverified optional fields; run typecheck/build only if dependencies are available under the authorized task.
- **Definition of Done:** `[x]` One typed registry contains all and only the 29 targets; `[x]` approved facts and owner-confirmed publication policies are centralized without storing an address/geo or unapproved profile; `[x]` validation is repeatable and its actual pass/fail/unavailable/not-run results are recorded; `[x]` no page UI or SEO implementation beyond the foundation is started.

#### Task 1 implementation record

- **Completed files:** `lib/site.ts`, `lib/site-url.ts`, `content/types.ts`, `content/routes.ts`, `lib/content-validation.ts`, `scripts/validate-content.mts`, `.env.example`, `package.json`, `tsconfig.json`, and this plan record.
- **Business-data decision:** `approvedBusinessFacts` contains the legal/display identity, canonical origin, normalized repository-configured phone/email, primary market wording, five service areas, verified every-day `08:00–18:00` hours, Service Area Business publication policy, exact Google Business Profile URL, and centralized `170+ Google Reviews` display policy. `pendingBusinessFacts` is empty because these Task 1 owner questions are resolved.
- **Compatibility boundary:** the pre-existing six-day `openingDays` export remains explicitly deprecated only so the untouched pre-Task-2 structured-data module compiles without output changes. New consumers must use the verified seven-day record. Address/locality/geo values are absent, legacy `socialLinks` remains empty, and migrating current footer/schema/review literals belongs to later separately authorized tasks.
- **Route decision:** the registry contains exactly the homepage, Services hub + 10 services, Commercial, Service Areas hub + four cities, About, Our Work, Reviews, Contact, Blog hub + six articles. It excludes the prohibited Des Moines area page, split consolidated services, service/city permutations, queries, fragments, trailing duplicates, API routes, metadata routes, and utility routes.
- **Lifecycle decision:** only the existing homepage is `implemented`/`published`; all 28 interior targets are `planned`. Indexability describes intended ownership on publication and does not publish a route.
- **Validation passed:** `pnpm validate:content` reported `29 canonical routes, 5 approved service areas, verified daily hours, and 1 approved external profile`; `pnpm exec tsc --noEmit --incremental false` passed with no output; `pnpm build` compiled, typechecked, generated all seven current framework pages, and confirmed only the pre-existing public route set; neither lockfile changed.
- **Validation unavailable:** `pnpm lint` exited 1 with `eslint: command not found`; this is the pre-existing missing lint dependency/config documented during planning, not an introduced lint finding.
- **Validation not run:** no standalone unit/e2e suite exists; browser/production/account checks and Task 2+ metadata/schema/sitemap/navigation/page/GA4 checks were outside the authorized scope.
- **Resolved owner confirmations:** public hours are every day `08:00–18:00`; the company is a Service Area Business with no publishable address or replacement geo; the exact GBP URL is approved; review display is `170+ Google Reviews` without `aggregateRating`; GBP is the only approved external profile.
- **Final result:** all four Task 1 Definition of Done checks are satisfied. Task 1 is complete and work stops before Task 2.

### Task 2 — Global Metadata, Canonical, Schema, Sitemap, Robots, and 404 Foundation

- **Status:** `[x]` Completed
- **Objective:** Build the shared technical SEO layer and framework metadata routes that every content task will consume.
- **Why It Is Needed:** The current site has homepage-only metadata, a volatile one-URL sitemap, unverified LocalBusiness fields, no coherent entity graph, and no branded 404 verification.
- **Dependencies:** Task 1.
- **Files Involved:** `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`, new `app/not-found.tsx`, `components/structured-data.tsx`, `lib/structured-data.ts`, new `lib/metadata.ts`, `lib/site-url.ts`, route-registry tests.
- **Implementation Details:** Create exact-record metadata helpers with self-canonicals, Open Graph, Twitter, index/follow defaults, and verified social images; remove `keywords`. Emit an Organization-led `@graph` with stable `#organization`, `#website`, page, breadcrumb, service, and article IDs as applicable; consume the verified daily hours only where supported, withhold address and geo under the confirmed Service Area Business policy, and omit ratings, price, dates, and other unverified fields. Generate the sitemap from records whose routes are actually implemented and published, with clean URLs and real dates only; each later page task promotes its route only when it exists, and the completed rollout must contain exactly 29 entries. Keep robots permissive and sitemap-referencing. Add a useful not-found UI and verify actual 404 status. Do not add speculative redirects or redirect unknown URLs home.
- **SEO Impact:** Establishes crawl/index controls, entity consistency, canonical ownership, and discovery for all 29 pages while correcting unsafe current schema.
- **Edge Cases:** Root canonical formatting; Next trailing-slash normalization; query/UTM/lang variants; missing social images; JSON escaping; invalid dynamic slugs; sitemap accidentally including API/drafts/404; hosting-level redirects not visible in code.
- **Validation:** Inspect rendered head/source for the homepage and fixture records, parse JSON-LD, inspect `/sitemap.xml` and `/robots.txt`, request a missing route for a true 404, and verify the deployed slash convention before launch.
- **Tests:** Metadata exactness/uniqueness, canonical construction, sitemap exact membership/exclusions, robots sitemap URL, structured-data serialization/stable IDs/forbidden fields, and 404 status smoke test.
- **Definition of Done:** `[x]` Shared metadata/schema builders consume Task 1 data; `[x]` sitemap publication filtering excludes every not-yet-implemented, utility, draft and query URL and is designed to reach exactly 29 after all page tasks; `[x]` fabricated address/geo and self-serving review schema are absent while verified hours are handled accurately; `[x]` missing pages return 404; `[x]` all checks and unresolved hosting assumptions are recorded.

#### Task 2 implementation record

- **Completed files:** `app/layout.tsx`, `app/manifest.ts`, `app/page.tsx`, `app/robots.ts`, `app/sitemap.ts`, `app/not-found.tsx`, `components/structured-data.tsx`, `lib/i18n.tsx`, `lib/metadata.ts`, `lib/structured-data.ts`, `package.json`, `scripts/validate-seo-foundation.mts`, and this plan record.
- **Metadata decision:** `buildRouteMetadata` derives exact title/description/canonical, publication-aware robots, Open Graph, and Twitter metadata for every registered route. The official logo is the conservative verified default social asset, and callers can provide a later verified page-specific image without duplicating route copy. Planned routes resolve to noindex/nofollow metadata if a future page task accidentally consumes them before publication.
- **Canonical decision:** clean canonicals remain sourced from Task 1 non-trailing paths; root serialization may display the origin without a visible terminal slash, which is the same root resource. UTM, language, fragments, and form context never enter canonical metadata, sitemap URLs, or graph IDs.
- **Schema decision:** the live graph is Organization-led because the owner confirmed a Service Area Business without a publishable address. Hours remain centralized and verified but are omitted from the selected Organization graph because the schema type does not validly support LocalBusiness opening-hours properties and visible footer correction belongs to later authorized UI work. Google Business Profile is the only external profile; no review/rating schema is present.
- **Sitemap decision:** `buildSitemapEntries` checks implementation, publication, and indexability together. Current output is one URL; simulated legitimate promotion of all registry records produces exactly 29 unique clean URLs. Synthetic `lastModified`, change frequency, and priority values were removed.
- **404 decision:** the custom 404 links only to currently working homepage destinations rather than sending users to 28 planned 404s. Special-route metadata explicitly clears inherited canonical/social/robots fields so Next can supply its single automatic `noindex` without a contradictory homepage canonical or `index, follow` tag.
- **Runtime discovery:** `I18nProvider` was mutating title/description after hydration. That behavior was removed as an absolutely necessary metadata fix; visible translation and `<html lang>` behavior remain intact. No localized SEO routes or hreflang were started.
- **Validation passed:** content and SEO scripts, typecheck, repeated production builds, rendered head/canonical/social output, escaped and parsed JSON-LD, exact sitemap/robots output, missing/planned route status, no-home redirect behavior, non-trailing normalization, Playwright desktop/mobile 404 rendering, hydrated language-query metadata, whitespace, and scope review.
- **Validation unavailable:** lint remains unavailable because ESLint is absent from the existing dependency/configuration set.
- **Validation not run:** production/deployment/account checks, external schema validators, and Task 3+ suites remain outside scope.
- **Final result:** all five Task 2 Definition of Done checks are satisfied. Task 2 is complete and work stops before Task 3.

### Task 3 — Global Navigation, Footer, Breadcrumbs, and Shared Page Primitives

- **Status:** `[x]` Completed
- **Objective:** Make the future architecture crawlable and usable through a route-aware header, exact footer link groups, visible breadcrumbs, and restrained reusable page components.
- **Why It Is Needed:** Current navigation is homepage-fragment based, future pages would be orphaned, and breadcrumb UI/schema need a shared source.
- **Dependencies:** Tasks 1–2.
- **Files Involved:** `app/layout.tsx`, `components/site-header.tsx`, `components/mobile-navigation.tsx`, new `components/site-footer.tsx`, new `components/breadcrumbs.tsx`, shared page primitive files only as genuine reuse requires, `app/globals.css`, `content/routes.ts`, `lib/i18n.tsx`, `lib/es-translations.json`.
- **Implementation Details:** Add HTML navigation for Services, Service Areas, Our Work, Reviews, Blog/Lawn Care Tips, About, and Contact; provide an accessible Services menu with all ten service links without crowding top-level navigation. Build footer columns matching the prompt's Services, five areas (Des Moines → `/`), and Company lists. Render visible breadcrumbs from the same hierarchy used by schema. Preserve mobile keyboard/focus behavior, homepage section anchors, phone/email behavior, visual identity, and language control; make interior header contrast route-aware. Add skip navigation where appropriate and avoid clickable-div link substitutes.
- **SEO Impact:** Gives every hub and detail route a crawlable path within three clicks and supplies consistent hierarchy/anchors.
- **Edge Cases:** Homepage fragments from interior pages; menus on touch/keyboard; focus return and Escape; long translated labels and incomplete Spanish fallback; active-state handling; Contact/estimate fragments; duplicate footer/header landmarks.
- **Validation:** Manually traverse desktop/mobile/keyboard navigation, compare visible breadcrumbs with registry hierarchy, inspect HTML anchors without JavaScript, verify all native contact destinations, and check responsive contrast/focus.
- **Tests:** Internal href resolution, breadcrumb item/schema parity, global-nav/footer required-link sets, keyboard menu behavior where test tooling supports it, and an orphan-route graph assertion.
- **Definition of Done:** `[x]` All hubs are globally linked and all details are hub-linked; `[x]` breadcrumb UI and data agree; `[x]` exact footer groups and ten-service menu are present; `[x]` mobile, keyboard, focus, language, and homepage-anchor behavior remain intact.

#### Task 3 implementation record

- **Completed files:** `app/globals.css`, `app/layout.tsx`, `app/not-found.tsx`, `app/page.tsx`, `components/breadcrumbs.tsx`, `components/interior-page-shell.tsx`, `components/mobile-navigation.tsx`, `components/services-menu.tsx`, `components/site-footer.tsx`, `components/site-header.tsx`, `content/routes.ts`, `lib/es-translations.json`, `lib/structured-data.ts`, `package.json`, `scripts/validate-navigation.mts`, and this plan record.
- **Shared-shell decision:** the root layout now owns one route-aware header, one footer, and a translated skip link for every route. The homepage keeps its transparent-to-elevated header behavior; non-home paths receive the readable evergreen header immediately. The shared interior shell binds the visible breadcrumb component and WebPage/BreadcrumbList graph to one route ID without creating any Task 4+ route or page content.
- **Navigation decision:** the registry defines the exact seven global destinations and all ten consolidated Services-menu destinations. Desktop uses a separate Services link and explicit disclosure button; mobile preserves the full-screen drawer, adds a separate Services link/disclosure, and keeps every destination as a real HTML link. Homepage estimate destinations remain `/#estimate-form`, while contact methods retain native `tel:` and `mailto:` URLs from the approved site record.
- **Footer decision:** the global footer consumes approved business contact/hours data and renders the prompt-exact nine Services links, five service areas with Des Moines mapped to `/`, and five Company links. Flower Bed Maintenance remains present in the required ten-service menu but is intentionally absent from the exact footer Services list in Section 22.
- **Breadcrumb decision:** all 28 interior hierarchies derive from registry parents and one typed label source. Visible ancestors are links, the current page is marked with `aria-current`, and the corresponding BreadcrumbList uses the same names/order/URLs; each interior WebPage node references its breadcrumb node.
- **Accessibility/responsive decision:** added a visible-on-focus skip link, translated navigation labels, route/current-page semantics, minimum 44–48px controls, explicit desktop/mobile disclosures, body scroll locking, hidden-state tab suppression, mobile focus containment including the visible Close trigger, Escape handling and focus return, outside-pointer/blur dismissal, reduced-motion-safe transitions, and Bright Lawn focus colors. Existing mobile bottom actions, homepage anchors, language preference/query behavior, hero/header treatment, and brand typography/colors remain intact.
- **Validation passed:** `pnpm validate:content`; `pnpm validate:seo`; new `pnpm validate:navigation`; `pnpm exec tsc --noEmit --incremental false`; repeated `pnpm build`; `git diff --check`; production-server rendered navigation/footer review; Playwright desktop 1440px and 1280px checks; mobile 390px and 320px checks; homepage and branded 404 checks; English/Spanish long-label checks; Services disclosure link/count review; skip-link focus target; mobile Tab/Shift+Tab containment; Escape/focus return; and console review.
- **Validation unavailable:** `pnpm lint` exits 1 because the pre-existing script invokes `eslint .` while ESLint is not installed or declared. This is unavailable tooling, not a passed lint run, and Task 3 adds no dependency or lockfile change.
- **Browser findings:** the completed Task 3 UI produced no browser errors. Three existing image-preload timing warnings remain on the homepage and belong to the later media/performance task. A stale pre-build local server initially produced one obsolete chunk 500; it was isolated, stopped, rebuilt, and the final production server returned no such error.
- **Staged-rollout boundary:** only `/` is currently implemented/published and remains the sole sitemap entry. Navigation records intentionally target the registered future architecture, but no Services, area, company, Contact, or Blog page was created or promoted; those page tasks remain separate. Production/deployment, live assistive-technology/device testing, and validation after future interior routes consume the shell remain manual/later-task checks.
- **Final result:** all four Task 3 Definition of Done checks are satisfied. Task 3 is complete and work stops before Task 4.

### Task 4 — GA4 Foundation and Conversion Measurement

- **Status:** `[x]` Completed
- **Objective:** Add production-gated, PII-safe GA4 loading and the exact required lead/form/contact event model around the existing estimate workflow.
- **Why It Is Needed:** Only Vercel page analytics exists; there is no confirmed-lead conversion measurement, funnel diagnostic, contact intent tracking, environment isolation, or event deduplication.
- **Dependencies:** Tasks 1–3; verified production Measurement ID, stream ownership/injection audit, consent decision, and Enhanced Measurement review are activation gates, not permission to invent values.
- **Files Involved:** `app/layout.tsx`, `app/api/estimate/route.ts`, `components/estimate-form.tsx`, `components/estimate-section.tsx`, new `components/ga4.tsx`, new `components/contact-link-tracker.tsx`, new `lib/analytics.ts`, new `lib/analytics-config.ts`, shared estimate contract/types, `.env.example`, analytics/form tests.
- **Implementation Details:** Use one minimal `next/script` Google tag only when an explicit valid `G-...` ID and production deployment gate are satisfied; do not add GTM concurrently. Define an allowlisted event helper. Refine API responses to distinguish provider-confirmed `sent`, honeypot `suppressed`, and bounded actionable error codes. Fire `generate_lead` once per stable successful submission ID only after `sent`; use in-flight and emitted-ID guards against double clicks, rerenders, hydration, Strict Mode, and callbacks. Fire one meaningful non-honeypot `form_start`; fire `form_submit_error` only after an actionable backend response. Track every real `tel:` and `mailto:` activation without preventing/delaying navigation. Never send form values, PII, free text, arbitrary DOM content, value/currency, or production traffic from local/test/preview. Preserve standard UTMs and existing form validation/Resend delivery.
- **SEO Impact:** Measures conversions for homepage, Contact, services, locations, commercial, and relevant article CTAs without degrading performance or trust; no keyword ownership changes.
- **Edge Cases:** Honeypot 2xx response; malformed JSON; provider response without ID; double submission; remount; failed network before backend; client validation; external tag injection; Enhanced Measurement duplicates; consent not granted; preview builds with `NODE_ENV=production`; link text containing PII-like content.
- **Validation:** Inspect network/tag presence by environment; exercise success/suppression/validation/backend/network cases; inspect every event payload; confirm phone/email native behavior; record Enhanced Measurement and consent decisions; keep production disabled until verified account data exists.
- **Tests:** One sent response → one `generate_lead`; duplicate callback/ID → one; validation, suppression, failure, malformed and network error → zero leads; one `form_start`; actionable response → one safe error; native tel/mailto preserved; allowlist rejects PII/free text; non-production emits no production requests.
- **Definition of Done:** `[x]` Exact five-event contract is implemented and documented; `[x]` successful delivery is the sole primary lead trigger with dedupe; `[x]` payload/environment/consent safeguards pass; `[x]` account-dependent activation remains explicitly blocked until verified rather than using an invented ID.

#### Task 4 implementation record

- **Completed files:** `.env.example`, `app/api/estimate/route.ts`, `app/layout.tsx`, `components/estimate-form.tsx`, `components/estimate-section.tsx`, new `components/ga4.tsx`, new `components/contact-link-tracker.tsx`, new `lib/analytics.ts`, new `lib/analytics-config.ts`, new `lib/estimate-contract.ts`, `package.json`, new `scripts/validate-analytics.mts`, and this plan record.
- **Configuration decision:** no Measurement ID is stored or guessed. The tag requires a verified `GA4_MEASUREMENT_ID`, explicit `GA4_ENABLED=true`, explicit `GA4_ACTIVATION_APPROVED=true`, and `VERCEL_ENV=production`; `.env.example` defaults both booleans false. Client events additionally require the marker set only by this gated initialization, so an unrelated preview/local `gtag` global cannot receive Task 4 events.
- **Privacy decision:** callers cannot provide arbitrary event names or payloads. The helper reconstructs allowlisted parameters, normalizes path/language/placement/error fields, omits selected service/form values/submission ID/query strings/link text, and catches transport/storage errors. Manual payload and callsite audit found no customer PII, free text, response body, DOM content, value, or currency path.
- **Delivery decision:** Resend remains the only delivery backend. A server UUID supplies the stable success identity and is included as a Resend tag/returned contract field only after provider success; it never enters analytics. Honeypot suppression still returns 200 without email but is now explicitly distinguishable. Validation, configuration and provider failures retain HTTP semantics with bounded codes and generic unchanged client error UI.
- **Behavioral validation:** the focused validator and real browser with mocked transport/response proved first legitimate interaction → one `form_start`; one sent ID → one lead; replay/remount storage of the same ID → no duplicate; suppression/client validation/network failure → no lead; actionable backend failure → one bounded error; analytics unavailable/throwing → no workflow exception; tel/mailto remain native; UTMs remain intact through the language switch and absent from event payloads.
- **Activation boundary:** repository implementation is complete, but live activation remains blocked pending the real ID, stream ownership/external injection audit, consent decision and Enhanced Measurement review. GA4 Admin/DebugView/Realtime/key-event/custom-dimension/acquisition/GBP actions remain Task 38, not Task 4 code work.
- **Final result:** all four Task 4 Definition of Done checks are satisfied. Task 4 is complete and work stops before Task 5.

### Task 5 — Homepage SEO Refactor and Crawlable Architecture

- **Status:** `[x]` Completed
- **Objective:** Make `/` own broad Des Moines lawn-care intent while preserving and enhancing the existing branded long-form homepage.
- **Why It Is Needed:** The current title/H1 differ from the required ownership and core service/area/content routes are not exposed through crawlable links.
- **Dependencies:** Tasks 1–4; page links may target later registered routes, but deployment must wait until those routes exist.
- **Files Involved:** `app/page.tsx`, `components/hero.tsx`, `components/cross-section.tsx`, `components/property-hotspots.tsx`, `components/before-after-slider.tsx`, `components/gallery.tsx`, `components/testimonials.tsx`, `components/problem-selector.tsx`, `components/estimate-section.tsx`, shared preview/card components, `lib/site.ts`, `app/globals.css`.
- **Implementation Details:** Apply the exact homepage title, H1, description, canonical/social/schema record. Preserve hero, video, seasons, property explorer, before/after, gallery, reviews, problem navigation, estimate workflow, motion, responsive behavior, and bilingual control. Add the 12-section architecture: clear residential/commercial/free-estimate hero and click-to-call; ten crawlable service cards; linked seasonal and property references; commercial hub link; Our Work CTA and curated work; exact five-area copy/links; curated reviews; small Latest Tips with Blog CTA; correctly mapped problem links; Contact/estimate paths. Keep real anchors and avoid loading full gallery/blog archives above the fold.
- **SEO Impact:** Directly targets `lawn care des moines ia`, becomes the strongest inbound hub for all 28 interior URLs, and avoids a competing Des Moines city page.
- **Edge Cases:** Interactive buttons versus navigational links; duplicated H1; forthcoming routes absent in partial deployments; hero LCP; unverified operational/image/review claims; language query retaining UTM; form event duplication when reused; mobile section density.
- **Validation:** Compare every visible section and exact metadata to Sections 6 and 18; inspect source for H1 and real links; test all preserved interactions at mobile/desktop/reduced motion; verify curated media payload and Contact flow.
- **Tests:** Exact homepage metadata/H1/canonical/schema, ten service hrefs, five area hrefs including Des Moines `/`, commercial/work/reviews/blog/contact links, problem mapping, one H1, no forbidden city route, and regression browser tests for key interactions.
- **Definition of Done:** `[x]` Exact ownership and all 12 sections are present; `[x]` preserved experiences remain functional; `[x]` required links are crawlable in rendered HTML; `[x]` homepage avoids unverified claims/full archive payloads and passes scoped accessibility/performance checks.

#### Task 5 implementation record

- **Completed files:** `app/page.tsx`, `app/globals.css`, `components/hero.tsx`, `components/cross-section.tsx`, `components/property-hotspots.tsx`, `components/before-after-slider.tsx`, `components/gallery.tsx`, `components/GalleryClient.tsx`, `components/problem-selector.tsx`, `components/estimate-section.tsx`, new `components/homepage-services.tsx`, new `components/homepage-commercial.tsx`, new `components/homepage-service-areas.tsx`, new `components/homepage-testimonials.tsx`, new `components/homepage-tips.tsx`, new `content/homepage.ts`, `lib/site.ts`, `lib/es-translations.json`, `package.json`, new `scripts/validate-homepage.mts`, and this plan record.
- **Architecture decision:** one homepage content adapter consumes the Task 1 route registry for the exact ten services, five service areas, three featured articles and all consolidated service mappings. The page renders the exact required 12-section order and section markers, while existing interactive components remain responsible for their established visuals and behavior.
- **Link decision:** navigation is never hidden behind interaction-only controls. Hero, service grid, seasonal references, desktop/mobile property references, commercial, Our Work, service areas, reviews, tips, problem mappings and Contact/estimate paths are ordinary crawlable anchors with registered hrefs. Des Moines intentionally resolves to `/`; no `/des-moines` or `/service-areas/des-moines-ia` route was added.
- **Payload decision:** `Gallery` slices on the server before client serialization and sends eight items. The homepage review component contains five reviewed excerpts copied verbatim from the existing verified embedded review source, while the legacy full review collection is not imported into the homepage. Below-the-fold gallery images use lazy loading.
- **Claim decision:** broad verified residential/commercial service scope and the centralized `170+ Google Reviews` display fact are retained. Unsupported rapid-response, workflow, outcome and location-specific image implications were removed or softened; there is no new guarantee, address, geo, price, credential, local image provenance or review-schema claim.
- **Behavioral validation:** production-browser checks confirmed exact section order/H1, desktop and mobile menus, focus return and skip link, property controls, keyboard before-and-after slider, eight-item gallery/lightbox, five-review carousel, problem accordion/service mappings, form validation/focus, native phone/email destinations, mobile fixed actions, Spanish rendering, UTM preservation and zero horizontal overflow at all four required viewports.
- **Validation result:** all focused and inherited validators, type-check, production build, rendered HTML assertions and final production console review pass. `pnpm lint` remains unavailable because ESLint is not installed. All four Task 5 Definition of Done checks are satisfied.
- **Scope boundary:** no route page, metadata record promotion, sitemap addition, schema for an interior page, deployment or account change was made. Task 6 remains `[ ]` Not started.

### Task 6 — Services Index

- **Status:** `[x]` Completed
- **Objective:** Create `/services/` as the canonical overview for the ten consolidated Des Moines service intents.
- **Why It Is Needed:** Users and crawlers need a service hub, and consolidated ownership prevents thin pages for minor variants.
- **Dependencies:** Tasks 1–3; Task 2 provides metadata/schema; Task 5 provides homepage inbound linking.
- **Files Involved:** new `app/services/page.tsx`, service-index content/record, shared hero/card/breadcrumb/CTA components, `content/routes.ts`, `content/services/index.ts`, `app/globals.css`.
- **Implementation Details:** Use exact title/H1/description and `lawn care services des moines ia` ownership. Render a useful introduction and real cards for Lawn Mowing, Aeration & Seeding, Fertilization & Weed Control, Landscaping, Flower Bed Maintenance, Yard Cleanup, Spring Cleanup, Fall Cleanup & Leaf Removal, Grading, and Snow Removal; link Commercial, Service Areas, and Contact. Use visible breadcrumb plus CollectionPage/ItemList/BreadcrumbList matching cards. Do not add Ground Clearance, Leaves Removal, residential, or city/service pages.
- **SEO Impact:** Owns the broad service-list intent and distributes internal authority to all ten service pages without cannibalizing the homepage.
- **Edge Cases:** Duplicate card paths/titles; page deployed before child routes; ItemList order differing from visible cards; terminology `overseeding` versus approved visible `Aeration and Seeding`; excessive keyword repetition.
- **Validation:** Compare exact metadata and all ten cards to the ownership map, inspect source links/headings/schema, and verify navigation/footer/breadcrumb inbound/outbound paths.
- **Tests:** Route success, exact metadata/H1/canonical, ten unique expected service hrefs, ItemList/UI parity, one H1, and absence of prohibited thin variants.
- **Definition of Done:** `[x]` Hub renders useful non-stuffed content and all ten links; `[x]` exact metadata/schema/breadcrumbs pass; `[x]` no extra service intent page is introduced; `[x]` Contact/commercial/area paths are usable.

#### Task 6 implementation record

- **Completed files:** new `app/services/page.tsx`, new `content/services/index.ts`, `content/routes.ts`, `components/interior-page-shell.tsx`, `components/site-header.tsx`, `app/globals.css`, `lib/es-translations.json`, `lib/content-validation.ts`, `scripts/validate-content.mts`, `scripts/validate-navigation.mts`, `scripts/validate-seo-foundation.mts`, new `scripts/validate-services-index.mts`, `package.json`, and this plan record.
- **Ownership and lifecycle decision:** the Services Index uses the exact registered URL, title, description, H1, canonical and primary intent. Only the `services` record is promoted to implemented/published/indexable, which adds `/services` to the sitemap beside `/`; all ten detail records remain planned and unavailable until their own authorized tasks.
- **Content and link decision:** the visible ordered list derives its names and hrefs from the single route registry and adds only short, distinct navigational summaries. It contains exactly Lawn Mowing, Aeration & Seeding, Fertilization & Weed Control, Landscaping, Flower Bed Maintenance, Yard Cleanup, Spring Cleanup, Fall Cleanup & Leaf Removal, Grading and Snow Removal. Commercial Property Services, Service Areas and Contact are separate supporting links, not extra service cards.
- **Schema and breadcrumb decision:** the shared server shell accepts typed page-specific graph nodes without introducing client JavaScript. CollectionPage, ItemList and BreadcrumbList reuse the same canonical route records; the ItemList count, positions, names and URLs match the visible ten-item order, and the visible/schema breadcrumb hierarchy is Home → Services.
- **Design and payload decision:** the page uses a responsive editorial intro, numbered service rows and three quiet supporting links rather than generic card tiles. Its interaction polish is CSS-only, honors reduced motion, and adds no page-specific image, video, data fetch, client component or analytics event. Existing global navigation, footer, bilingual control, phone/email links and contact tracking remain shared.
- **Responsive integration decision:** reserving desktop space for the existing fixed phone control and allowing long Spanish text containers/CTA copy to shrink and wrap removes overlap at 1280 px. A narrowly scoped header rule removes the elevated backdrop filter only while the existing mobile dialog is open, preventing that filter from becoming the fixed drawer's containing block; the verified drawer now covers `390×844` and retains close-button focus.
- **Claim and route decision:** copy describes where each approved route leads and makes no result, price, schedule, process, equipment, availability, guarantee, credential, address/geo, review or media-provenance claim. No Ground Clearance, Leaves Removal, residential variant, city/service standalone page, dynamic service template or competing Des Moines page exists.
- **Validation result:** focused and inherited validators, type-check, production build, rendered source assertions and production browser QA pass. Browser checks cover desktop/header/breadcrumb navigation, expected planned-child 404 behavior, mobile menu/disclosure/focus, skip-link focus, Spanish coverage, UTM preservation, clean canonical, all ten links, responsive overflow at four viewports, reduced motion and a clean final console. `pnpm lint` remains unavailable because ESLint is not installed.
- **Scope boundary:** no Task 7 service page/template/content, later hub/page, deployment, production configuration or external account change was made. Task 7 remains `[ ]` Not started.

### Task 7 — Lawn Mowing Service Page

- **Status:** `[x]` Completed
- **Objective:** Create `/services/lawn-mowing/` as the sole commercial-intent page for Des Moines mowing service.
- **Why It Is Needed:** Mowing is a primary advertised service with a distinct high-value intent and currently has no dedicated indexable page.
- **Dependencies:** Tasks 1–3 and 6; Task 4 for any embedded form/contact tracking.
- **Files Involved:** new `content/services/lawn-mowing.ts`, `app/services/[slug]/page.tsx`, shared service template/components, project/review selectors when verified, schema/metadata helpers, tests.
- **Implementation Details:** Use exact title/H1/description and specified primary/secondary keywords naturally. Assemble breadcrumb, truthful hero/CTAs, problem/outcome, confirmed coverage, supported residential/commercial context, only verified process, 2–4+ contextual links, verified work/review excerpts, non-identical service-area wording, useful truthful FAQs, and final estimate CTA. Link Aeration & Seeding, Fertilization & Weed Control, Yard Cleanup, Commercial, Our Work, Contact; add the mowing resource only after Task 30/35 publishes it. Confirm or soften current claims about scheduling and clipping handling.
- **SEO Impact:** Owns `lawn mowing des moines ia` and supports city, commercial, homepage, and mowing-article relationships.
- **Edge Cases:** Unverified recurring schedules, clipping disposal, equipment, pricing/contracts, residential/commercial scope, or city-specific imagery; confusing general lawn maintenance with other service ownership.
- **Validation:** Editorial fact check against approved business data, rendered metadata/H1/canonical, visible/schema breadcrumb parity, Service schema provider/areas, all CTAs/links, image alt/provenance, and responsive/accessibility review.
- **Tests:** Route/static-param success, exact metadata, one H1, Service/Breadcrumb schema, required outbound links, no unsupported claims fixture, and invalid service slug 404.
- **Definition of Done:** `[x]` Complete truthful service template is populated; `[x]` exact ownership and required links/schema pass; `[x]` imagery/reviews are honestly labeled; `[x]` no unverified process, guarantee, price, or local claim remains.

#### Task 7 implementation record

- **Completed files:** new `app/services/[slug]/page.tsx`, new `components/service-detail-page.tsx`, new `content/services/lawn-mowing.ts`, new `scripts/validate-lawn-mowing-service.mts`, `content/services/index.ts`, `content/routes.ts`, `lib/structured-data.ts`, `lib/es-translations.json`, `app/globals.css`, inherited validation scripts, `package.json`, and this plan record.
- **Content-model decision:** the service record owns service-specific hero, schema identity, decision/problem copy, confirmed scope, related paths, property context, reviews, area wording, FAQs and CTA copy. The reusable template consumes that record, while `publishedServiceDetails` is a separate explicit publication allowlist containing only Lawn Mowing.
- **Publishing decision:** only `service-lawn-mowing` was promoted. `generateStaticParams()` returns only `lawn-mowing`; unknown and still-planned registered slugs fail the published-content lookup and call the shared branded `notFound()`. No placeholder or thin generic fallback exists, and the sitemap contains exactly the current three published URLs.
- **Claim decision:** the page states only the approved mowing plus residential/commercial/free-estimate scope. Fixed schedules, clipping behavior, edging/blowing, equipment, pricing/contracts and guarantees are explicitly not represented as standard facts. Related lawn conditions resolve to the correct Aeration & Seeding, Fertilization & Weed Control or Yard Cleanup owner.
- **Evidence decision:** the existing local gallery image is used only as a neutral observable property-care visual with a visible provenance caveat. Two exact embedded Google review excerpts were selected because their own wording mentions mowing; attribution is visible and the approved GBP is linked. No work history, city, customer/project context, rating schema or review schema is inferred.
- **Validation result:** all focused/inherited validators, typecheck, repeated production builds, rendered-source assertions, route/sitemap/schema isolation, production browser flows and final clean-console responsive QA pass. Lint remains unavailable because ESLint is not installed. All four Task 7 Definition of Done checks are satisfied.
- **Scope boundary:** no Task 8 service content/module, article link, later route promotion, deployment, production configuration or external account change was made. Task 8 remains `[ ]` Not started.

### Task 8 — Aeration and Seeding Service Page

- **Status:** `[x]` Completed
- **Objective:** Create `/services/aeration-overseeding/` for the consolidated aeration plus seeding/overseeding commercial intent.
- **Why It Is Needed:** The intent is required and must remain consolidated while respecting the company's existing “Aeration and Seeding” terminology.
- **Dependencies:** Tasks 1–3 and 6; Task 4 for tracked conversion components.
- **Files Involved:** new `content/services/aeration-overseeding.ts`, shared service route/template/components, metadata/schema/data tests.
- **Implementation Details:** Apply exact metadata/H1; use URL/keyword overseeding wording naturally while visible capability copy says “Aeration and Seeding” where appropriate. Include only confirmed problems, coverage, property types, process, image/review data, truthful FAQ, five-area links and CTAs. Link Fertilization & Weed Control, Lawn Mowing, Spring Cleanup when relevant, Services, Contact; add both aeration/overseeding articles only when Tasks 28–29/35 are published. Confirm or soften core-aeration/seed-placement claims.
- **SEO Impact:** Owns `lawn aeration des moines ia` plus seeding/overseeding variants without creating competing pages.
- **Edge Cases:** Implying a particular overseeding machine/method, seed mix, timing guarantee, outcome, treatment package, or service availability that is not confirmed; article/service cannibalization.
- **Validation:** Exact record comparison, claim approval, visible `Aeration and Seeding` terminology, rendered links/metadata/canonical/schema, honest imagery, and FAQ/source review.
- **Tests:** Route/metadata/H1, Service/Breadcrumb schema, required related links, consolidated-slug assertion, no separate aeration/seeding page, invalid slug 404.
- **Definition of Done:** `[x]` One consolidated accurate page exists; `[x]` exact ownership and terminology rules pass; `[x]` no method/result claim is invented; `[x]` service and eventual article link boundaries are documented.

#### Task 8 implementation record

- **Completed files:** new `content/services/aeration-overseeding.ts`, new `content/services/types.ts`, new `scripts/validate-aeration-seeding-service.mts`, `components/service-detail-page.tsx`, `content/services/lawn-mowing.ts`, `content/services/index.ts`, `content/routes.ts`, `lib/es-translations.json`, `package.json`, lifecycle-aware inherited validators and this plan record.
- **Template decision:** one shared service renderer still owns all service-page markup, metadata/schema integration and presentation. Service-specific captions, related-section copy, FAQ intro copy and heading IDs now come from the typed record so Aeration and Seeding does not inherit mowing language; the Lawn Mowing record supplies its original strings unchanged.
- **Publication decision:** the explicit published content list contains exactly `lawn-mowing` and `aeration-overseeding`. Static params, lookup, metadata and page rendering continue to use that same allowlist. The route registry lifecycle and sitemap promote only Aeration and Seeding under Task 8.
- **Terminology and intent decision:** the canonical slug remains `aeration-overseeding` for search language, the exact H1 retains its authorized ampersand form, and business capability copy uses `Aeration and Seeding`. Overseeding, lawn seeding and core-aeration variants are addressed within this one page without creating aliases or separate Service entities.
- **Evidence decision:** thin/compacted problem framing comes from the exact approved metadata; broad Aeration and Seeding capability comes from established repository service facts. Specific machinery, process, seed, timing, watering, package and outcome details remain unverified and are expressly not presented as standard facts. The image is neutral and the two review excerpts explicitly mention aeration.
- **Validation result:** the focused Task 8 validator covers ownership, publication, consolidation, secondary terminology, single H1/template, required schemas/provider/breadcrumb parity, links, future article boundary, process/seed/machine/timing/result/package restraint, review provenance, Spanish completeness and sitemap isolation. All focused and inherited validators, typecheck, production build, rendered-source/status/schema/sitemap checks and browser QA pass; lint remains unavailable because ESLint is not installed.
- **Final result:** all four Task 8 Definition of Done checks are satisfied. Task 8 is complete and work stops before Task 9.

### Task 9 — Fertilization and Weed Control Service Page

- **Status:** `[x]` Completed
- **Objective:** Create `/services/fertilization-weed-control/` as the consolidated Des Moines treatment-intent page.
- **Why It Is Needed:** The advertised paired service has its own commercial search intent but carries heightened truth/safety risks.
- **Dependencies:** Tasks 1–3 and 6; Task 4 for conversion components.
- **Files Involved:** new `content/services/fertilization-weed-control.ts`, shared service route/template, verified media/review selectors, metadata/schema tests.
- **Implementation Details:** Use exact title/H1/description and natural keywords. Cover user problems/outcomes and only approved service scope; include property context, verified process, service areas, truthful FAQ, CTAs, and links to Aeration & Seeding, Lawn Mowing, Services, and Contact. Explicitly exclude unverified chemical brands, formulas, schedules, pesticide claims, application counts, licenses, guarantees, and prescriptive advice; confirm or soften current “targeted treatment/feeding” copy before reuse.
- **SEO Impact:** Owns `lawn fertilization des moines ia` and weed-control variants while avoiding unsafe or duplicative treatment pages.
- **Edge Cases:** Regulatory/licensing implications, health/environment claims, guaranteed weed elimination, exact programs or seasonal dates, PII in estimate context, unsuitable imagery.
- **Validation:** Business/content approval, exact metadata and semantic headings, Service/Breadcrumb schema, link checks, CTA/form behavior, and manual safety/accuracy reading.
- **Tests:** Route/metadata/H1/schema, required links, forbidden-claim term/content review, one consolidated route, and invalid slug 404.
- **Definition of Done:** `[x]` Page is complete and human-readable; `[x]` only confirmed capabilities appear; `[x]` no chemical/licensing/schedule/guarantee claims are introduced; `[x]` ownership/schema/link checks pass.

#### Task 9 implementation record

- **Completed files:** new `content/services/fertilization-weed-control.ts`; new `scripts/validate-fertilization-weed-control-service.mts`; `content/services/index.ts`; `content/routes.ts`; `components/breadcrumbs.tsx`; `components/service-detail-page.tsx`; `lib/es-translations.json`; `package.json`; lifecycle-aware inherited validators; and this plan record.
- **Consolidation decision:** the single published record owns fertilization, weed control and the approved lawn-treatment search language. No alias, split intent, treatment product, city/service permutation or alternate Service entity was added.
- **Truth/safety decision:** the visible page states only the advertised paired service, approved residential/commercial property context, five-city service area and free-estimate path. Technical products, chemicals, formulas, methods, equipment, diagnosis, application counts/schedules, licenses/certifications, health/environment assurances, pricing/contracts and result guarantees are explicitly omitted rather than inferred from legacy marketing copy.
- **Evidence decision:** the existing neutral property image is not characterized as a service or result. No review explicitly mentions fertilization/weed control, so two verbatim general reviews are presented with conspicuous general-feedback/no-treatment-proof context and no Review/AggregateRating schema.
- **Shared responsive decision:** Task 9's longer Spanish label exposed reusable narrow-screen issues. The visible current breadcrumb now wraps, and service H1 typography stays within the small viewport while preserving the established measure at `sm` and above; Tasks 7–8 retain their content, metadata, schema and route lifecycle.
- **Validation result:** the focused validator covers exact ownership, publication/consolidation, natural secondary terminology, one H1/template, provider/schema/breadcrumb parity, required links, chemical/process/schedule/regulatory/safety/result/pricing/instruction restraint, media/review provenance, Spanish completeness and sitemap isolation. The full regression matrix, repeated production build, rendered-source/status/schema/sitemap checks and four-viewport browser QA pass; lint remains unavailable because ESLint is not installed.
- **Final result:** all four Task 9 Definition of Done checks are satisfied. Task 9 is complete and work stops before Task 10.

### Task 10 — Landscaping Service Page

- **Status:** `[x]` Completed
- **Objective:** Create `/services/landscaping/` for Des Moines landscaping service intent using verified work and capabilities.
- **Why It Is Needed:** Landscaping is a core advertised intent and a major route into the existing visual portfolio.
- **Dependencies:** Tasks 1–3 and 6; Task 4 for tracked CTAs; Task 24 may later expand the Work destination without blocking the link.
- **Files Involved:** new `content/services/landscaping.ts`, shared service route/template, verified project/review data, metadata/schema tests.
- **Implementation Details:** Apply exact metadata/H1; build distinct problem/outcome, confirmed coverage/process/property context, FAQs, service areas, work/review excerpts, and final CTA. Link Flower Bed Maintenance, Grading, Yard Cleanup, Our Work, Commercial, Contact. Reuse actual imagery without inventing city/project facts and confirm or soften redesign/installation/maintenance claims found in current copy.
- **SEO Impact:** Owns `landscaping des moines ia`, strengthens Our Work/commercial relationships, and supports relevant service cross-links.
- **Edge Cases:** Conflating landscaping with engineering, design credentials, construction, drainage correction, or services not verified; large gallery payload; location-stuffed alts.
- **Validation:** Exact metadata/canonical/H1, claim and project provenance review, service schema, required links, responsive media, one H1, and CTA behavior.
- **Tests:** Route/metadata/schema, related-link set, project selector without false city metadata, invalid slug 404, and no prohibited engineering/design claims.
- **Definition of Done:** `[x]` Accurate distinctive landscaping page is rendered; `[x]` real work is reused efficiently and honestly; `[x]` required links/schema/metadata pass; `[x]` no broader capability is implied without approval.

### Task 11 — Flower Bed Maintenance Service Page

- **Status:** `[x]` Completed
- **Objective:** Create `/services/flower-bed-maintenance/` for the distinct flower/landscape-bed maintenance intent.
- **Why It Is Needed:** It is an advertised service and a required target that should not be buried inside general landscaping.
- **Dependencies:** Tasks 1–3 and 6; Task 4 for tracked CTAs.
- **Files Involved:** new `content/services/flower-bed-maintenance.ts`, shared service route/template, verified project/review selectors, metadata/schema tests.
- **Implementation Details:** Use exact metadata/H1 and natural variants. Provide a distinct, truthful page with breadcrumb, hero, problem/outcome, confirmed maintenance scope, supported property context/process, work/reviews, varied service-area copy, FAQs and CTA. Link Landscaping, Spring Cleanup, Fall Cleanup & Leaf Removal, Yard Cleanup, Contact. Verify current cutback, edging, cleanup, and redesign language rather than treating it as approved fact.
- **SEO Impact:** Owns `flower bed maintenance des moines` and routes adjacent seasonal/landscaping demand without creating thin bed-cleanup variants.
- **Edge Cases:** Implying gardening expertise, plant health treatments, design/installation, material hauling, seasonal schedule, or guarantees; confusing decorative images with actual work.
- **Validation:** Content approval, exact metadata/H1/canonical, Service/Breadcrumb schema, related links, image/review provenance, FAQ truthfulness, and mobile/accessibility checks.
- **Tests:** Route/static param, exact metadata, one H1, schema, required links, no separate bed-cleanup route, invalid slug 404.
- **Definition of Done:** `[x]` Required page and exact intent are complete; `[x]` confirmed scope is clearly bounded; `[x]` required links/media/schema pass; `[x]` unverified gardening/design/process claims are absent.

### Task 12 — Yard Cleanup Service Page

- **Status:** `[x]` Completed
- **Objective:** Create `/services/yard-cleanup/` as the single owner of general cleanup, overgrown-yard cleanup, and ground-clearance commercial intent.
- **Why It Is Needed:** Three existing labels must be consolidated to prevent cannibalization and thin pages.
- **Dependencies:** Tasks 1–3 and 6; Task 4 for tracked CTAs.
- **Files Involved:** new `content/services/yard-cleanup.ts`, shared service route/template, verified media/review data, metadata/schema tests.
- **Implementation Details:** Apply exact metadata/H1 and include the consolidated variants naturally. Build truthful problem/outcome, approved coverage/process/property context, work/review excerpts, non-duplicated service-area language, FAQs and CTA. Link Lawn Mowing, Spring Cleanup, Fall Cleanup & Leaf Removal, Grading, Landscaping, Contact. Avoid separate Overgrown Yards Cleanup or Ground Clearance routes and confirm disposal/hauling/equipment claims before reuse.
- **SEO Impact:** Owns `yard cleanup des moines ia` and the two consolidated sub-intents while distributing authority to seasonal and structural services.
- **Edge Cases:** Hazardous waste, major clearing, hauling/disposal rules, lot clearing, excavation, city-specific projects, guarantees, or scope beyond ordinary property care.
- **Validation:** Compare consolidated ownership, fact-check scope, inspect exact head/H1/canonical/schema/breadcrumb, all links/CTAs, media provenance and responsive behavior.
- **Tests:** Expected route/metadata/H1/schema, required related links, forbidden split-route assertions, and invalid slug 404.
- **Definition of Done:** `[x]` One useful consolidated page covers all three approved labels; `[x]` no thin variants exist; `[x]` scope/claims/media are approved; `[x]` metadata/schema/links/tests pass.

#### Task 12 implementation record

- **Completed files:** new `content/services/yard-cleanup.ts`; new `scripts/validate-yard-cleanup-service.mts`; `content/services/index.ts`; `content/routes.ts`; `lib/content-validation.ts`; `lib/es-translations.json`; `package.json`; lifecycle-aware inherited validators; and this plan record.
- **Consolidation decision:** the one canonical route owns general Yard Cleanup, Overgrown Yards Cleanup and Ground Clearance plus the approved property-cleanup and overgrown-lawn search variants. Five cleanup aliases are explicitly prohibited and return 404; no separate city/cleanup or Task 13 module exists.
- **Scope decision:** ordinary property cleanup and overgrown outdoor-area context are the only high-level capability claims. Ground Clearance is qualified as search/business terminology rather than proof of heavy clearing. Hauling, disposal, equipment, excavation, grading, major clearing, tree/stump work, hazardous waste, schedules, guarantees, pricing and contracts are omitted as capabilities and left to a property-specific estimate where a question must be clarified.
- **Evidence decision:** no verified cleanup image exists, so the neutral existing property image is used and the optional work preview is omitted. Two verbatim cleanup-specific review excerpts are labeled as individual experiences and emit no review/rating schema.
- **Validation result:** the focused validator covers exact metadata/ownership, one consolidated route, six-service allowlist, Tasks 13–16 isolation, five alias exclusions, one H1/template, WebPage/Service/BreadcrumbList/provider parity, required links, schema restraint, claim boundaries, image/review provenance, Spanish completeness and exact sitemap membership. The full inherited matrix, typecheck, production build, source/status/schema/sitemap assertions and four-viewport browser QA pass; lint remains unavailable because ESLint is not installed.
- **Final result:** all four Task 12 Definition of Done checks are satisfied. Task 12 is complete and work stops before Task 13.

### Task 13 — Spring Cleanup Service Page

- **Status:** `[x]` Completed
- **Objective:** Create `/services/spring-cleanup/` for commercial spring cleanup intent, distinct from the later informational checklist.
- **Why It Is Needed:** Seasonal commercial demand needs a dedicated conversion page and careful separation from blog advice intent.
- **Dependencies:** Tasks 1–3 and 6; Task 4 for tracked CTAs.
- **Files Involved:** new `content/services/spring-cleanup.ts`, shared service route/template, verified seasonal media/review data, metadata/schema tests.
- **Implementation Details:** Use exact metadata/H1; provide approved problem/outcome, coverage, process, property context, service areas, reviews/work, FAQs and CTA. Link Lawn Mowing, Flower Bed Maintenance, Yard Cleanup, Landscaping, Contact. Reserve checklist/advice intent and backlink for Task 31/35; confirm debris removal, cutback, edging, or timing claims before use.
- **SEO Impact:** Owns `spring cleanup des moines ia` without cannibalizing `/blog/spring-lawn-cleanup-des-moines/`.
- **Edge Cases:** Rigid annual dates, weather promises, disposal/hauling, included tasks, fertilizer advice, and article CTA duplication.
- **Validation:** Exact metadata/keyword-intent distinction, approved capability review, Service/Breadcrumb schema, required links, imagery, FAQ, responsive and CTA checks.
- **Tests:** Route/metadata/H1/schema, required service links, commercial-versus-informational ownership assertion, invalid slug 404.
- **Definition of Done:** `[x]` Commercial spring page is accurate and conversion-oriented; `[x]` informational intent remains assigned to the article; `[x]` all exact metadata/schema/link/fact checks pass.

#### Task 13 implementation record

- **Completed files:** new `content/services/spring-cleanup.ts`; new `scripts/validate-spring-cleanup-service.mts`; `content/services/index.ts`; `content/routes.ts`; `lib/es-translations.json`; `package.json`; lifecycle-aware inherited validators; and this plan record.
- **Intent decision:** the service page is a concise commercial decision-and-estimate path. It does not implement a checklist, how-to guide, local disposal advice, lawn-care calendar, Helpful Resources backlink or article content. The registered future article remains planned and absent from static params, rendered links and sitemap.
- **Scope decision:** Spring Cleanup remains a verified high-level service with property-specific details confirmed through an estimate. Adjacent mowing, bed maintenance, Landscaping and general Yard Cleanup are linked as separate services, not inclusions. Fixed dates, weather-independent scheduling and guaranteed outcomes are explicitly not published.
- **Evidence decision:** no verified Spring Cleanup image or review exists. The page uses one neutral property image, no work preview and two clearly labeled general company-review excerpts; schema contains no review/rating markup.
- **Validation result:** the focused validator covers exact ownership, seven-service allowlist, Tasks 14–16 and alias isolation, one H1/template, WebPage/Service/BreadcrumbList/provider parity, required links, article separation, capability restraint, media/review provenance, Spanish completeness and exact nine-URL sitemap membership. The full inherited matrix, typecheck, production build, rendered source/status/schema/sitemap checks and four-viewport browser QA pass; lint remains unavailable because ESLint is not installed.
- **Final result:** all three Task 13 Definition of Done checks are satisfied. Task 13 is complete and work stops before Task 14.

### Task 14 — Fall Cleanup and Leaf Removal Service Page

- **Status:** `[x]` Completed
- **Objective:** Create `/services/fall-cleanup-leaf-removal/` as the single commercial page for fall cleanup and leaf removal.
- **Why It Is Needed:** Both high-overlap advertised intents must be consolidated to avoid competing pages.
- **Dependencies:** Tasks 1–3 and 6; Task 4 for tracked CTAs.
- **Files Involved:** new `content/services/fall-cleanup-leaf-removal.ts`, shared service route/template, verified seasonal media/review data, metadata/schema tests.
- **Implementation Details:** Apply exact metadata/H1 and natural secondary variants. Include truthful problem/outcome, confirmed scope/process/property context, service areas, actual work/reviews, useful FAQs and CTA. Link Yard Cleanup, Lawn Mowing, Snow Removal, Contact. Reserve informational tips intent and backlink for Task 32/35. Do not make separate Fall Cleanup or Leaves Removal pages; verify cleanup, hard-surface clearing, hauling, and disposal claims.
- **SEO Impact:** Owns `leaf removal des moines ia` and fall cleanup commercial variants while supporting seasonal continuity.
- **Edge Cases:** Disposal/municipal rules, exact timing, weather, guaranteed removal, equipment, city labels, and cannibalization with the advice article.
- **Validation:** Exact metadata/H1/canonical and intent split; content approval; Service/Breadcrumb schema; required links; media/review provenance; FAQ/CTA/responsive review.
- **Tests:** Route/metadata/schema, required outbound links, forbidden split-route assertions, commercial-versus-informational ownership assertion, invalid slug 404.
- **Definition of Done:** `[x]` One accurate consolidated page exists; `[x]` no competing seasonal/leaf page is added; `[x]` article intent remains distinct; `[x]` facts, links, schema, and metadata pass.

### Task 15 — Grading Service Page

- **Status:** `[x]` Completed
- **Objective:** Create `/services/grading/` for verified yard-grading commercial intent with tightly bounded claims.
- **Why It Is Needed:** Grading is advertised and required, but current wording risks implying specialized engineering work.
- **Dependencies:** Tasks 1–3 and 6; Task 4 for tracked CTAs.
- **Files Involved:** new `content/services/grading.ts`, shared service route/template, verified project/review selectors, metadata/schema tests.
- **Implementation Details:** Use exact title/H1/description; explain only confirmed problems/outcomes, coverage/process/property context, service areas, work/reviews, FAQs and estimate path. Link Yard Cleanup, Landscaping, Our Work, Contact. Explicitly avoid drainage engineering, foundation correction, excavation expertise, erosion-control engineering, certifications, and guaranteed water outcomes unless separately verified; confirm or soften current drainage-reshaping language.
- **SEO Impact:** Owns `yard grading des moines ia` without expanding into unsupported engineering intents.
- **Edge Cases:** Drainage/foundation safety claims, permit implications, heavy excavation, exact slope specifications, false before/after locations, and user expectations beyond scope.
- **Validation:** Owner/scope approval, exact metadata/H1/canonical, Service/Breadcrumb schema, related links, project provenance, FAQ/CTA/accessibility review.
- **Tests:** Route/metadata/schema, required links, prohibited-engineering-claim review, invalid slug 404.
- **Definition of Done:** `[x]` Page scope is accurate and visibly bounded; `[x]` exact ownership/links/schema pass; `[x]` no engineering, foundation, excavation, or outcome claim appears without evidence.

#### Task 15 implementation record

- **Completed files:** new `content/services/grading.ts`; new `scripts/validate-grading-service.mts`; `content/services/index.ts`; `content/routes.ts`; `content/services/types.ts`; `components/service-detail-page.tsx`; `lib/es-translations.json`; `package.json`; lifecycle-aware inherited validators; and this plan record.
- **Scope decision:** Yard Grading remains a high-level commercial service for uneven-ground concerns and preparing outdoor areas. Drainage, water/runoff, foundations, erosion, excavation, credentials, exact slopes, equipment, permits, utilities, soil/materials, specialized project uses and outcomes are either explicitly not advertised or left as property-specific questions without implied inclusion or guarantee.
- **Evidence decision:** the neutral property hero is not characterized as Grading work, and no work preview or before/after pair is used. Two verbatim reviews are explicitly labeled general company feedback because no approved excerpt confirms Grading.
- **Lifecycle decision:** the explicit service allowlist contains exactly nine details through Grading; the route registry and sitemap promote only `/services/grading`. Snow Removal, all Grading/leveling/drainage aliases and arbitrary slugs remain branded 404s without redirects.
- **Validation result:** the focused validator, full Tasks 7–14 regression matrix, shared validators, typecheck, production build, rendered production assertions and four-viewport browser QA pass. Lint remains unavailable because ESLint is not installed. All three Task 15 Definition of Done checks are satisfied.
- **Final result:** Task 15 is complete and work stops before Task 16.

### Task 16 — Snow Removal Service Page

- **Status:** `[x]` Completed
- **Objective:** Create `/services/snow-removal/` for confirmed residential/commercial snow-removal intent.
- **Why It Is Needed:** Snow removal is a prominent seasonal service with its own high-intent search demand.
- **Dependencies:** Tasks 1–3 and 6; Task 4 for tracked CTAs.
- **Files Involved:** new `content/services/snow-removal.ts`, shared service route/template, verified snow media/reviews, metadata/schema tests.
- **Implementation Details:** Apply exact metadata/H1; include truthful problem/outcome, confirmed coverage/process/property types, service areas, snow-related work/reviews, useful FAQ and estimate/call paths. Link Commercial Property Services, Service Areas, Reviews, Contact. Do not claim 24/7 service, snow-depth triggers, ice management, salting, sidewalk clearing, guaranteed response times, or exact service windows unless verified; confirm current walk/entry clearing language.
- **SEO Impact:** Owns `snow removal des moines ia` and supports commercial, city, reviews, and seasonal links.
- **Edge Cases:** Emergency expectations, weather/availability promises, ice/salt liability, trigger depths, residential/commercial coverage differences, stale seasonal CTAs.
- **Validation:** Capability approval, exact metadata/H1/canonical, Service/Breadcrumb schema, required links, relevant review/image labeling, native call/estimate behavior and mobile review.
- **Tests:** Route/metadata/schema, required related links, forbidden-claim assertions/editorial check, invalid slug 404.
- **Definition of Done:** `[x]` Accurate snow page exists for approved property types; `[x]` prohibited claims are absent; `[x]` exact metadata/schema/links/CTAs pass; `[x]` media and reviews are appropriately categorized.

### Task 17 — Commercial Property Services Hub

- **Status:** `[x]` Completed
- **Objective:** Create `/commercial-property-services/` as a concise commercial service hub rather than a duplicate of ten service pages.
- **Why It Is Needed:** Commercial property intent is required and currently appears only in broad homepage claims.
- **Dependencies:** Tasks 1–16 so only verified applicable services are linked; Task 4 for tracked conversion paths; Task 5 for homepage inbound link.
- **Files Involved:** new `app/commercial-property-services/page.tsx`, commercial content record/module, shared page components, verified project/review selectors, metadata/schema/link tests.
- **Implementation Details:** Use exact title/H1/description and natural secondary terms. Explain verified commercial property support, group/link applicable mowing, cleanup, landscaping, snow and other confirmed services without copying their full pages, reuse honestly labeled work/reviews, link Service Areas, Our Work, Reviews and Contact, and provide a clear estimate CTA. Do not invent contracts, schedules, crews, equipment, response times, portfolio names, or property counts.
- **SEO Impact:** Owns `commercial lawn care des moines ia` and distributes commercial users to the correct service pages.
- **Edge Cases:** Some services may not be commercial; review quotes do not prove business-wide capability; repeated service copy; unsupported maintenance-plan/contract promises; exact client/project claims.
- **Validation:** Owner confirmation of each listed commercial service, exact head/H1/canonical, schema matching visible ItemList, inbound/outbound links, content duplication review, CTA/tracking and responsive accessibility.
- **Tests:** Route success, exact metadata, one H1, Breadcrumb/ItemList parity, only approved service links, and no unsupported contract/response claims.
- **Definition of Done:** `[x]` Hub uniquely serves commercial intent; `[x]` every listed capability is verified and linked; `[x]` it does not duplicate service-page bodies; `[x]` metadata/schema/CTA/link checks pass.

#### Task 17 implementation record

- **Completed files:** new `app/commercial-property-services/page.tsx`, new `content/commercial-property-services.ts`, new `scripts/validate-commercial-property-services.mts`, `content/routes.ts`, `lib/structured-data.ts`, `lib/es-translations.json`, `package.json`, lifecycle-aware inherited validators and this plan record.
- **Commercial-set decision:** the approved visible `propertyContext.commercial` records support all ten published services independently. The hub list is generated from an explicit evidence-bearing commercial record, not from the generic service index or review/image inference.
- **Schema decision:** Commercial uses WebPage rather than the CollectionPage default used by other index types because Task 17 explicitly requires WebPage + ItemList + BreadcrumbList. The ItemList consumes the same ordered ten-item record used by visible cards and emits no Service entities.
- **Content decision:** the page organizes short navigational summaries into four need-based groups and explains service selection through the estimate conversation. It includes the exact four keyword concepts naturally, while avoiding a named plan product or any contract, schedule, crew, equipment, response, client, property subtype, portfolio or guarantee claim.
- **Provenance decision:** no image or review is displayed. Service evidence comes only from approved service/business copy; Our Work and Reviews are restrained supporting links and remain unpublished until Tasks 24 and 25.
- **Validation result:** the focused validator, all Tasks 7–16 validators, shared validators, typecheck, production build, production route/source/schema/sitemap/inbound-link assertions and four-viewport browser QA pass. Lint remains unavailable because ESLint is not installed. All four Task 17 Definition of Done checks are satisfied.
- **Final result:** Task 17 is complete and work stops before Task 18.

### Task 18 — Service Areas Index

- **Status:** `[x]` Completed
- **Objective:** Create `/service-areas/` as the canonical five-city metro coverage hub.
- **Why It Is Needed:** Coverage information needs a crawlable hierarchy while the homepage remains the sole Des Moines city-intent owner.
- **Dependencies:** Tasks 1–3, 5–17; Task 4 for tracked CTA/contact links.
- **Files Involved:** new `app/service-areas/page.tsx`, service-area hub content/record, shared area card/breadcrumb/CTA components, metadata/schema tests.
- **Implementation Details:** Apply exact title/H1/description and metro intent. Render confirmed coverage for only Des Moines, Ankeny, Waukee, Norwalk and Altoona; link Des Moines to `/` and the other four to their exact city routes. Link Services and Contact, show useful non-doorway explanatory copy, and use CollectionPage/ItemList/BreadcrumbList that mirrors visible links. Do not invent additional cities or a Des Moines area page.
- **SEO Impact:** Owns `lawn care des moines metro`, supplies location hierarchy, and protects homepage ownership.
- **Edge Cases:** Accidental `/service-areas/des-moines-ia/`; unconfirmed nearby cities; ItemList/copy mismatch; duplicate metro copy; child routes unavailable during partial rollout.
- **Validation:** Exact metadata and five links, schema/UI order parity, clean canonical, breadcrumb, homepage/service/footer inbound links, and rendered HTML inspection.
- **Tests:** Route/metadata/H1, expected area link set, Des Moines path equals `/`, exactly four child city paths, no unconfirmed/forbidden area routes.
- **Definition of Done:** `[x]` Hub lists exactly five approved areas; `[x]` Des Moines resolves to homepage and no competing page exists; `[x]` exact metadata/schema/links pass; `[x]` copy is useful and non-stuffed.

#### Task 18 implementation record

- **Completed files:** new `app/service-areas/page.tsx`, new `content/service-areas.ts`, new `scripts/validate-service-areas-index.mts`, `content/routes.ts`, `lib/es-translations.json`, `package.json`, lifecycle-aware inherited validators and this plan record.
- **Ownership decision:** the hub owns metro discovery only. Its Des Moines UI and ItemList entry both resolve to homepage `/`; no Des Moines route, redirect or alias was added. The other four entries use the future route registry without creating a dynamic city page or changing child lifecycle.
- **Content/design decision:** a lightweight cardless editorial directory uses one exact H1, five large ordered area rows, a three-part scope explainer and Services/Contact supporting paths. No media or map is used because no asset proves geography and no approved boundary data supports pins, coordinates, radius or polygons.
- **Schema/lifecycle decision:** CollectionPage comes from the existing page-type builder; one page-owned ItemList consumes the same five-item record as the UI; BreadcrumbList consumes the shared Home → Service Areas hierarchy. Exactly one route was promoted, making `/service-areas` the fourteenth sitemap URL while all city children remain unpublished.
- **Language/performance decision:** all Task 18 visible strings have explicit Spanish translations and a Task 18-only fluid H1 treatment prevents the long translation from overlapping or splitting at required viewports. The route is statically prerendered and adds no page-specific client JavaScript, dependency, media, network request or analytics event.
- **Validation result:** the focused 48-boundary validator, all inherited validators, typecheck, repeated production builds, production HTML/status/schema/sitemap/inbound-link assertions and four-viewport browser QA pass. Lint remains unavailable because ESLint is not installed. All four exact Task 18 Definition of Done checks are satisfied.
- **Final result:** Task 18 is complete and work stops before Task 19.

### Task 19 — Ankeny Service-Area Page

- **Status:** `[x]` Completed
- **Objective:** Create `/service-areas/ankeny-ia/` as a useful, independently readable Ankeny-wide lawn-care page.
- **Why It Is Needed:** Ankeny is a confirmed service area with distinct city-wide intent, but the page must not become a city-name-swapped doorway page.
- **Dependencies:** Tasks 1–18; verified service availability facts and Task 4 conversion tracking.
- **Files Involved:** new `content/service-areas/ankeny-ia.ts`, `app/service-areas/[city]/page.tsx`, shared area template/components, metadata/schema/link tests.
- **Implementation Details:** Use exact metadata/H1. Write genuinely distinct but factual introduction and seasonal/property-care sections; link crawlable cards for approved mowing, aeration/seeding, fertilization/weed control, landscaping, yard/seasonal cleanup, grading and snow services. Cover supported residential/commercial categories, general work/reviews unless Ankeny metadata is verified, selected related areas, area hub, and “Request a Free Estimate in Ankeny.” Emit WebPage/visible ItemList/BreadcrumbList only—never a separate LocalBusiness.
- **SEO Impact:** Owns `lawn care ankeny ia` and feeds users to relevant commercial service pages.
- **Edge Cases:** Fabricated neighborhoods, customers, local crews, addresses, job examples, testimonials, response times, or proximity claims; unverified city image/review labels; templated parity with other cities.
- **Validation:** Side-by-side uniqueness/fact review against all city drafts, exact metadata/canonical/H1, approved service availability, schema/UI parity, links/CTA/tracking and mobile/accessibility.
- **Tests:** Valid city static param, exact metadata, one H1, no LocalBusiness/address, required service/area links, and invalid city 404.
- **Definition of Done:** `[x]` Ankeny page is distinct and useful without invented local facts; `[x]` exact ownership and approved services pass; `[x]` schema/links/CTA are correct; `[x]` media/reviews remain general unless provenance proves Ankeny.

#### Task 19 implementation record

- **Completed files:** new `app/service-areas/[city]/page.tsx`, new `content/service-areas/ankeny-ia.ts`, new `content/service-areas/index.ts`, new `scripts/validate-ankeny-service-area.mts`, exact Ankeny lifecycle/link updates in `content/routes.ts`, complete Task 19 Spanish strings, package script, lifecycle-only inherited validator updates and this plan record.
- **Ownership/content decision:** Ankeny owns city-wide lawn-care discovery without duplicating the homepage, Service Areas hub or service-detail bodies. The page organizes nine canonical services through property need, seasonal selection and estimate-context guidance; it adds no unsupported local specificity.
- **Availability decision:** each displayed service has explicit Ankeny coverage in its approved canonical service record. Flower Bed Maintenance is intentionally omitted from the city page because its narrower landscaping-adjacent intent is outside the Task 19 selected service mix, even though its canonical page remains published and supports Ankeny estimate requests.
- **Provenance decision:** no image or review is displayed because no approved record establishes Ankeny-specific media or review provenance. No claim is inferred from filenames, imagery, reviews or general practice.
- **Schema/lifecycle decision:** the visible nine-service source also generates the exact ItemList; breadcrumbs share the Home → Service Areas → Ankeny hierarchy; the shared builder emits one WebPage and central identity references. Exactly Ankeny was promoted and the sitemap contains exactly fifteen canonical URLs.
- **Validation result:** the focused validator, Service Areas/Commercial and Tasks 7–16 regressions, shared validators, typecheck, production build, production route/source/schema/sitemap assertions and four-viewport browser QA pass. Lint remains unavailable because ESLint is not installed. All four exact Task 19 Definition of Done checks are satisfied.
- **Final result:** Task 19 is complete and work stops before Task 20.

### Task 20 — Waukee Service-Area Page

- **Status:** `[x]` Completed
- **Objective:** Create `/service-areas/waukee-ia/` as a factual, independently useful Waukee-wide service page.
- **Why It Is Needed:** Waukee is confirmed, but unique intent coverage cannot rely on mechanical city substitution.
- **Dependencies:** Tasks 1–19; verified service availability and Task 4 conversion tracking.
- **Files Involved:** new `content/service-areas/waukee-ia.ts`, shared dynamic area route/template, metadata/schema/link tests.
- **Implementation Details:** Use exact metadata/H1; author Waukee-specific wording that stays within confirmed availability rather than invented local anecdotes. Include approved service cards, year-round range without promises, property types, honestly labeled general/verified work and reviews, selected related areas, area hub, and Waukee estimate CTA. Use WebPage/ItemList/BreadcrumbList and the one Organization reference, not a local branch entity.
- **SEO Impact:** Owns `lawn care waukee ia` and connects Waukee demand to the consolidated service architecture.
- **Edge Cases:** Same wording/order as Ankeny with city replacement; fake neighborhoods/projects/reviews/address/crew; unverified service coverage; cross-city duplicate canonicals.
- **Validation:** Four-city comparative editorial review, exact head/H1/canonical, item/schema parity, approved links, CTA event context, responsive/accessibility and no local-fact fabrication.
- **Tests:** Static-param route, exact metadata/schema, no LocalBusiness/address, required links, content uniqueness heuristic/editorial fixture, invalid city 404.
- **Definition of Done:** `[x]` Waukee page stands alone without doorway patterns; `[x]` all facts/services are approved; `[x]` exact metadata/schema/links/CTA pass; `[x]` no false location attribution exists.

#### Task 20 implementation record

- **Completed files:** new `content/service-areas/waukee-ia.ts`, new `content/service-areas/types.ts`, new `scripts/validate-waukee-service-area.mts`, shared city renderer/content-model extension, Waukee allowlist and lifecycle/link additions, complete Spanish strings, package validator command, lifecycle-only inherited validator updates and this plan record.
- **Ownership/content decision:** Waukee uses a year-spanning service-orientation section before a differently ordered service directory, followed by a two-context property scope gate, supporting-path directory, neutral related areas and Waukee estimate CTA. This sequence remains useful without relying on invented Waukee facts.
- **Availability decision:** each of the nine displayed services has explicit Waukee support in its approved canonical service record. Flower Bed Maintenance is intentionally omitted because its narrower landscaping-adjacent intent is outside Task 20’s selected service mix, although its canonical page remains published and supports Waukee estimate requests.
- **Uniqueness decision:** Ankeny and Waukee share one renderer but use different discriminated editorial modes. Waukee changes section order, headings, service order, service summaries, property framing, supporting links and CTA copy; no service summary is identical and the focused shingle heuristic stays below its 20% ceiling at about 11%.
- **Provenance decision:** no media or review is displayed because no approved record establishes Waukee-specific provenance. No city availability, service capability, response, project or presence claim is inferred from images, reviews, filenames or general practice.
- **Schema/lifecycle decision:** the same typed nine-service source drives visible rows and ItemList, while shared breadcrumbs provide Home → Service Areas → Waukee. Exactly Waukee was promoted; Ankeny remains published; Norwalk and Altoona remain planned; the sitemap contains exactly sixteen canonical URLs.
- **Validation result:** the focused Waukee validator, Ankeny/Service Areas/Commercial regressions, Tasks 7–16 and shared validators, typecheck, production build, source/route/schema/sitemap assertions and four-viewport browser QA pass. Lint remains unavailable because ESLint is not installed. All four exact Task 20 Definition of Done checks are satisfied.
- **Final result:** Task 20 is complete and work stops before Task 21.

### Task 21 — Norwalk Service-Area Page

- **Status:** `[x]` Completed
- **Objective:** Create `/service-areas/norwalk-ia/` as a distinct, truthful Norwalk-wide lawn-care page.
- **Why It Is Needed:** Norwalk is confirmed and requires a city-intent owner within the anti-doorway rules.
- **Dependencies:** Tasks 1–20; verified service availability and Task 4 conversion tracking.
- **Files Involved:** new `content/service-areas/norwalk-ia.ts`, shared dynamic area route/template, metadata/schema/link tests.
- **Implementation Details:** Apply exact metadata/H1; write unique factual service introduction and seasonal/property sections, approved service cards, property types, general or verified work/reviews, related-area links, area hub and Norwalk estimate CTA. Keep structured data to WebPage, visible ItemList, BreadcrumbList and central Organization reference.
- **SEO Impact:** Owns `lawn care norwalk ia` and provides natural service/city/internal conversion paths.
- **Edge Cases:** Fabricated neighborhoods, customer scale, jobs, local team/address, response times; reused city paragraphs; false image/review locations; non-approved services.
- **Validation:** Comparative uniqueness and factual review, exact metadata/canonical/H1, visible/schema service parity, link graph, CTA context, responsive/keyboard review.
- **Tests:** Static route/metadata/schema, no city business/address, required links, uniqueness guard/editorial check, invalid city 404.
- **Definition of Done:** `[x]` Norwalk page is independently readable and factual; `[x]` exact ownership and verified service set pass; `[x]` schema/links/CTA work; `[x]` no unverified local attribution appears.

#### Task 21 implementation record

- **Completed files:** new `content/service-areas/norwalk-ia.ts`, new `scripts/validate-norwalk-service-area.mts`, minimal shared `priority-map` type/renderer extension, Norwalk allowlist and lifecycle/link additions, complete Spanish strings, package validator command, lifecycle-only inherited validator updates and this plan record.
- **Editorial decision:** Norwalk begins with immediate property-question priorities, uses its own nine-service sequence, separates ongoing from time-specific needs without implying a program, and closes with estimate-preparation and supporting paths. The shared renderer still permits a different Altoona structure when Task 22 is separately authorized.
- **Availability decision:** each displayed service independently has explicit Norwalk coverage in its published canonical record. Flower Bed Maintenance remains intentionally omitted as the narrower existing-bed path outside the selected city-guide mix.
- **Provenance decision:** no image or review appears; nothing is labeled as Norwalk work, feedback, customer property or project. Coverage is not used to infer local facts, business presence, response or service results.
- **Schema/lifecycle decision:** the nine-service source drives both UI and ItemList; shared breadcrumbs provide Home → Service Areas → Norwalk. Exactly Norwalk was promoted, Ankeny/Waukee remain published, Altoona remains planned, and the sitemap contains exactly seventeen canonical URLs.
- **Validation result:** the focused validator, three-city automated/manual uniqueness audit, Tasks 7–20 regressions, typecheck, production build, source/route/schema/sitemap checks and four-viewport browser QA pass. Lint remains unavailable because ESLint is not installed.
- **Final result:** Task 21 is complete and work stops before Task 22.

### Task 22 — Altoona Service-Area Page

- **Status:** `[x]` Completed
- **Objective:** Create `/service-areas/altoona-ia/` as a distinct, truthful Altoona-wide lawn-care page.
- **Why It Is Needed:** Altoona is the fourth confirmed non-Des Moines city and needs a single anti-doorway intent owner.
- **Dependencies:** Tasks 1–21; verified service availability and Task 4 conversion tracking.
- **Files Involved:** new `content/service-areas/altoona-ia.ts`, shared dynamic area route/template, metadata/schema/link tests.
- **Implementation Details:** Use exact metadata/H1; create independently ordered/focused factual sections for availability, approved service cards, year-round range, property types, general/verified work/reviews, selected related areas, hub and Altoona estimate CTA. Emit WebPage/ItemList/BreadcrumbList with the central organization only.
- **SEO Impact:** Owns `lawn care altoona ia` and completes the intended city architecture without service/city permutations.
- **Edge Cases:** Doorway-template substitution, fake local facts/address/crew/projects/reviews, city-specific alt stuffing, unverified capability scope, duplicate text/canonical.
- **Validation:** Compare all four pages line by line for substantive uniqueness and factual safety; inspect exact metadata/schema/links; validate CTA/tracking, mobile and accessibility.
- **Tests:** Static route/metadata/schema, no LocalBusiness/address, expected links, four-city uniqueness guard/editorial review, invalid city 404.
- **Definition of Done:** `[x]` Altoona page is useful and unique; `[x]` no invented local evidence appears; `[x]` exact ownership/schema/service links/CTA pass; `[x]` four-city anti-doorway review is complete.

### Task 23 — About Page

- **Status:** `[x]` Completed
- **Objective:** Create `/about/` as an accurate company identity and trust page based only on approved facts.
- **Why It Is Needed:** Users need company context, but the repository lacks sufficient evidence for a fabricated brand story.
- **Dependencies:** Tasks 1–3; owner confirmation of any company-history facts; Task 4 for contact tracking.
- **Files Involved:** new `app/about/page.tsx`, About content/route record, shared hero/breadcrumb/CTA components, schema/metadata tests.
- **Implementation Details:** Apply exact metadata/H1; describe the legal business name, approved service/property/metro facts and real trust signals; link Services, Service Areas, Our Work, Reviews and Contact. Use AboutPage + Organization reference + BreadcrumbList. Do not state founding year, employee count, licenses, awards, certifications, insurance, family ownership, property counts, or unverifiable history.
- **SEO Impact:** Owns branded `mo's lawn care des moines` intent and supports trust/internal linking without competing with the homepage.
- **Edge Cases:** Customer reviews treated as company facts; invented founder narrative; unapproved owner portrait/name; disputed hours/address; exact rating/count drift.
- **Validation:** Fact/evidence review for every company statement, exact metadata/H1/canonical/schema, link and CTA checks, semantic/accessibility review.
- **Tests:** Route/metadata/H1, AboutPage/Breadcrumb schema with central organization, required links, and absence of prohibited unsupported fact fields.
- **Definition of Done:** `[x]` Every factual claim has approved evidence; `[x]` exact branded ownership passes; `[x]` schema/links/CTA are correct; `[x]` no fictional history or credential appears.

### Task 24 — Our Work and Gallery Page

- **Status:** `[x]` Completed
- **Objective:** Create `/our-work/` as the canonical home for the existing gallery and before/after work while preserving interactions.
- **Why It Is Needed:** The visual portfolio is a strong asset but currently lives only in the homepage payload with weak metadata and no dedicated intent owner.
- **Dependencies:** Tasks 1–3; verified image/project provenance; Task 4 for CTAs. Task 34 performs the heavier optimization pass.
- **Files Involved:** new `app/our-work/page.tsx`, new/extracted `content/projects.ts`, `components/gallery.tsx`, `components/GalleryClient.tsx`, `components/before-after-slider.tsx`, shared page components, metadata/schema tests.
- **Implementation Details:** Apply exact metadata/H1; migrate rather than duplicate the gallery/before-after source, give records stable IDs/provenance/honest alt/service tags/optional verified city, and expose full-page plus curated-home modes. Preserve carousel/modal and before/after behavior; server-render a useful initial subset and accessible load-more/batching. Link relevant services, Reviews and Contact. Use CollectionPage/BreadcrumbList and only useful verified ImageObjects; do not claim all work occurred in Des Moines/another city without evidence.
- **SEO Impact:** Owns `lawn care projects des moines`, provides evidence/trust links to services and cities, and reduces homepage archive pressure.
- **Edge Cases:** Remote URL rights/stability, missing dimensions, false city/service labels, broken before/after pairs, all 79 URLs serialized initially, focus-trap/return regression, file-type mismatch.
- **Validation:** Record-by-record provenance/alt review, source payload/network inspection, interaction/keyboard/mobile checks, exact metadata/schema/link inspection, no duplicate dataset.
- **Tests:** Route/metadata/H1, Collection/Breadcrumb schema, curated/full mode behavior, missing metadata fallbacks, pair integrity, no false city schema, modal accessibility where supported.
- **Definition of Done:** `[x]` One canonical typed work dataset powers home and Work; `[x]` full experience is accessible and not eagerly loaded wholesale; `[x]` every location/service claim is supported; `[x]` exact metadata/schema/links pass.

### Task 25 — Reviews Page and Review Data Governance

- **Status:** `[x]` Completed
- **Objective:** Create `/reviews/`, reuse the categorized reviews efficiently, and resolve how mutable rating/count/source data is governed.
- **Why It Is Needed:** Review trust is valuable, but current records and a hardcoded “160” count conflict and must not produce misleading schema or payloads.
- **Dependencies:** Tasks 1–3; Task 1 now supplies the verified Google Business Profile URL and `170+ Google Reviews` display policy; Task 4 for external/contact tracking where applicable.
- **Files Involved:** new `app/reviews/page.tsx`, new/extracted `content/reviews.ts`, `components/testimonials.tsx`, shared review/page components, `lib/site.ts`, metadata/schema tests.
- **Implementation Details:** Apply exact metadata/H1; extract the 106 records with stable IDs, ratings/categories/source/provenance fields where available, retain theme filtering, show useful curated/paginated or client-batched content rather than hundreds in initial HTML, and replace precise aggregate claims with the centralized `170+ Google Reviews` display copy. Link relevant verified service categories, Our Work, Contact and the approved Google Business Profile URL. Emit CollectionPage/BreadcrumbList only; do not add Review or aggregateRating schema for self-serving rich results.
- **SEO Impact:** Owns branded review intent and supplies trust/contextual links without manipulative review markup.
- **Edge Cases:** Null/negative review records, current live count drift, duplicate records, review text copyright/source, missing dates/cities, false category inference, huge client bundle.
- **Validation:** Dataset/count/category reconciliation, source/link approval, exact metadata/H1/canonical/schema, initial payload inspection, filter/keyboard/mobile checks, and explicit absence of aggregate/review schema.
- **Tests:** Route/metadata, record ID uniqueness, safe rating/null rendering, expected categories, no aggregateRating/Review JSON-LD, curated/full mode, required links.
- **Definition of Done:** `[x]` One governed review dataset powers home and Reviews; `[x]` count/rating policy is approved or numeric claims are omitted; `[x]` page remains performant/accessible; `[x]` exact metadata/links/schema restraint pass.

### Task 26 — Contact Page and Estimate Integration

- **Status:** `[x]` Completed
- **Objective:** Create `/contact/` as the canonical estimate page using the existing validated Resend workflow and Task 4 event contract.
- **Why It Is Needed:** Every major page needs an obvious conversion destination, but duplicate form/backends would fragment behavior and lead measurement.
- **Dependencies:** Tasks 1–4; related route architecture through Task 25.
- **Files Involved:** new `app/contact/page.tsx`, Contact content record, `components/estimate-form.tsx`, `components/estimate-section.tsx`, `app/api/estimate/route.ts` only for already-designed shared contract integration, Contact schema/metadata/form tests.
- **Implementation Details:** Apply exact metadata/H1; reuse one EstimateForm and `/api/estimate`, expose phone/email and links to Services/Service Areas, preserve labels/validation/focus/live messages/honeypot/Resend, and supply controlled `form_id`, placement, optional service/city context and language. Ensure Task 4 success/error/deduplication behavior is identical on homepage and Contact and that no query context enters canonical/schema or GA4 as arbitrary input. Use ContactPage + Organization reference + BreadcrumbList.
- **SEO Impact:** Owns `lawn care estimate des moines`, consolidates conversion authority, and measures leads consistently from every route.
- **Edge Cases:** Duplicate homepage/contact form IDs, preselected query spoofing, honeypot suppression, provider failure, validation focus, repeated submission, PII leakage, no JS, tel/mailto regression.
- **Validation:** Exact metadata/H1/canonical/schema, success/error/suppression/manual form flows, native phone/email, page-context payload allowlist, mobile/keyboard/screen-reader messaging, and no second backend.
- **Tests:** Contact route/metadata, form validation and focus, API response cases, exact once-per-delivery lead event, PII-free payload, native contact destinations, homepage/contact instance isolation.
- **Definition of Done:** `[x]` Contact page reuses the sole form/backend; `[x]` exact metadata/schema and accessible conversion paths pass; `[x]` confirmed-success analytics semantics pass on both placements; `[x]` no PII or arbitrary query data reaches GA4.

#### Task 26 implementation record

- **Completed files:** new `app/contact/page.tsx`, `components/estimate-form.tsx`, `components/estimate-request-email.tsx`, `app/api/estimate/route.ts`, `content/routes.ts`, `lib/es-translations.json`, `package.json`, new `scripts/validate-contact.mts`, lifecycle-only updates to inherited validators, and this plan record.
- **Integration decision:** one controlled placement prop selects `homepage_estimate` or `contact_page`, derives deterministic placement-prefixed DOM IDs, and feeds the existing sanitized Task 4 analytics context. Form state remains instance-local, the analytics form identity remains fixed, and no URL/query preselection or arbitrary form identity is implemented.
- **Backend decision:** `/api/estimate` and Resend remain the sole backend/provider. Existing field, validation, suppression and response contracts remain intact; submitted service values are constrained to the existing form vocabulary, and escaped bounded HTML preserves the email content without the unavailable React-email renderer or a new dependency.
- **Final result:** all four Task 26 Definition of Done checks are satisfied. `/contact` is the only promoted route, the sitemap contains exactly twenty-two canonical URLs, Blog remains unpublished, and work stops before Task 27.

### Task 27 — Blog Foundation, Article Template, Publishing Workflow, and Hub

- **Status:** `[x]` Completed
- **Objective:** Create `/blog/`, the typed six-article publishing model, one maintainable server-rendered article template, source governance, and editorial documentation.
- **Why It Is Needed:** The required content cluster has no route, content system, citation model, or workflow, and must be added without a CMS or thin archive sprawl.
- **Dependencies:** Tasks 1–26; specifically the technical foundation and core commercial architecture must be complete before blog work begins.
- **Files Involved:** new `app/blog/page.tsx`, new `app/blog/[slug]/page.tsx`, new `content/blog/index.ts`, initial article record modules/skeletons without unsupported factual copy, `content/types.ts`, new `components/blog-article.tsx`, shared article/card/resource components, `docs/content-publishing.md`, sitemap/schema/link tests.
- **Implementation Details:** Apply exact hub title/H1/description and Blog/CollectionPage + visible ItemList + BreadcrumbList. Define required slug/status/title/H1/description/keyword/excerpt/sections/sources/claim notes/related links/image/publisher/review fields and optional real dates/author. Publish only status-approved records through hub, static params, Latest Tips and sitemap; unknown/draft slugs 404. Build semantic article rendering, optional TOC only when justified, citations/Sources, contextual service/article links, restrained CTA, honest image metadata and BlogPosting/Article graphs that omit fake author/dates. Document research, approval, link, image, sitemap, validation, publish and seasonal-review steps. Do not add categories/tags/authors/dates/pagination as indexable archives or introduce CMS/database/parser dependencies.
- **SEO Impact:** Owns `iowa lawn care tips`, establishes the six informational URLs, and creates governed bidirectional support for commercial pages.
- **Edge Cases:** Draft leakage, duplicate slugs, article without sources, dates invented for schema, unsupported author, broken related paths, full images on cards, article keyword cannibalization, stale source claims.
- **Validation:** Inspect hub source/cards/metadata/schema, draft and invalid 404s, registry/sitemap status behavior, template semantics, source visibility, publishing doc completeness and no archive-route creation.
- **Tests:** Hub exact metadata/H1, six expected published-route contracts once content is approved, field/source/link validation, unique article metadata/canonicals, schema omission rules, draft exclusion and invalid slug 404.
- **Definition of Done:** `[x]` Hub/template/model/workflow are maintainable and dependency-light; `[x]` publishing state controls routes/hub/sitemap consistently; `[x]` exact hub ownership/schema pass; `[x]` source/date/author/image safeguards and no-thin-archive rules are enforced.

#### Task 27 implementation record

- **Completed files:** new `/blog` hub and dynamic article route, one shared Blog article renderer, the typed six-record Blog registry and skeleton modules, lifecycle/source/claim/author/date/image types and validators, source/schema/sitemap/Homepage publication wiring, explicit Spanish Blog UI translations, new `docs/content-publishing.md`, new `validate:blog`, lifecycle-only inherited-validator updates, and this plan checkpoint.
- **Lifecycle decision:** canonical route records retain approved article ownership while the discriminated Blog record owns article publication. Sitemap explicitly excludes article route-registry lifecycle values and admits article URLs only through `getPublishedArticles()`, preventing a second publication allowlist or an accidental route-registry-only release.
- **Schema restraint:** the hub uses one `Blog` node rather than competing Blog/CollectionPage types. ItemList is omitted at zero published guides and will be generated from the exact visible selector once publication is legitimate. Planned/reviewed records cannot emit metadata, BlogPosting or public related-article links.
- **Final result:** all four Task 27 Definition of Done checks are satisfied. `/blog` is the only promoted route, the sitemap contains exactly twenty-three canonical URLs, all six article routes remain actual 404s, no secondary keywords or researched article copy were invented, and work stops before Task 28.

### Task 28 — “When to Aerate a Lawn in Iowa” Article

- **Status:** `[x]` Completed
- **Objective:** Research, author, review, and publish `/blog/when-to-aerate-lawn-iowa/` for Iowa aeration timing intent.
- **Why It Is Needed:** It is one of six mandatory supporting guides and creates an informational entry point to the Aeration & Seeding service.
- **Dependencies:** Task 27; verified current authoritative sources and approved business CTA/image facts.
- **Files Involved:** new/finalized `content/blog/when-to-aerate-lawn-iowa.ts`, approved image record, blog/service resource links, article tests.
- **Implementation Details:** Use exact title/H1/description/primary keyword. Research Iowa timing and compaction/sign guidance with Iowa State University Extension first and other authoritative primary sources only as needed; record sources, access/review dates, and claim mappings; paraphrase. Explain weather/grass/soil/property dependencies and avoid immutable annual dates, guarantees or invented Mo's methods. Include useful sections, visible sources, relevant image if verified, natural links to Aeration & Seeding, calendar/overseeding guides when published, and a restrained estimate CTA. Include truthful Article/BlogPosting fields only.
- **SEO Impact:** Owns `when to aerate lawn in iowa`; supports but does not replace the commercial aeration page.
- **Edge Cases:** Source guidance changes, cool- versus warm-season assumptions, rigid calendar dates, unsupported treatment advice, article/service copy overlap, fabricated author/date/image season/location.
- **Validation:** Claim-by-claim source/editorial review, exact metadata/H1/canonical, source links, commercial/informational intent separation, related links, schema-visible content parity, mobile/readability.
- **Tests:** Required article fields/sources, exact metadata, route/sitemap inclusion, Article/Breadcrumb schema, Aeration service link, no unsupported dates/author, and invalid/draft behavior.
- **Definition of Done:** `[x]` Authoritative sources support every Iowa-specific claim; `[x]` exact article ownership passes; `[x]` service/related links and schema match visible content; `[x]` business/image/date facts are approved or omitted.

#### Task 28 implementation record

- **Research record:** `docs/research/task-28-aeration-brief.md` records the real user decision, research questions, three current Iowa State source records, six published claim mappings, four removed/limited claims, secondary-intent research, SERP commodity/gap analysis, differentiation and all three mandatory editorial gate results.
- **Article decision:** the published body answers April/September timing immediately but makes the recommendation conditional on the named cool-season context, active growth, actual compaction context and moist-not-dry-or-wet soil. Its decision table and “should I aerate now?” sequence replace a rigid calendar answer; overseeding receives only the minimum boundary sentence required to avoid stealing Task 29.
- **Evidence and commercial restraint:** visible citations and Sources map to Iowa State Extension only. Mo's claims remain limited to the approved combined Aeration and Seeding offering; no external source is used to invent a business method, schedule, equipment, seed, result or guarantee.
- **Publication and schema:** one `published` record drives the article route, Blog hub, one-item ItemList, Homepage card, static params and twenty-four-URL sitemap. BlogPosting/WebPage/BreadcrumbList reuse the central publisher and omit unapproved author, public dates, image, FAQ, reviews, ratings, LocalBusiness, address, geo and offers. The five future articles stay `planned` and 404.
- **Implementation support:** the shared article validator now accepts only registered internal canonical paths, inline rendering preserves intentional spacing across translated/link/citation fragments, and TOC headings are programmatically focusable. A new `validate:aeration-article` contract protects ownership, bidirectional claim/source mappings, editorial gates, translations, schema, links, selector publication, Homepage/Hub behavior and Task 29 isolation; inherited validators received lifecycle-only 24-URL updates.
- **Final result:** all four Task 28 Definition of Done checks and the repository's mandatory Research, Differentiation and Editorial Quality gates pass. No author, public date or image was fabricated, and work stops before Task 29.

### Task 29 — “Best Time to Overseed a Lawn in Iowa” Article

- **Status:** `[x]` Completed
- **Objective:** Research, author, review, and publish `/blog/best-time-to-overseed-lawn-iowa/` for Iowa overseeding timing intent.
- **Why It Is Needed:** The second mandatory aeration-cluster guide addresses a related informational query without creating another commercial service page.
- **Dependencies:** Tasks 27–28; verified authoritative sources and approved CTA/image facts.
- **Files Involved:** new/finalized `content/blog/best-time-to-overseed-lawn-iowa.ts`, approved image record, blog/service link data, tests.
- **Implementation Details:** Apply exact metadata/H1/primary keyword; research usual timing considerations and weather/grass/site dependencies using Iowa State Extension and other official extension material as needed. Record/visible-link sources and paraphrase. Do not claim a particular Mo's overseeding process, seed blend, germination result, exact annual date or guaranteed outcome. Link Aeration & Seeding, calendar and aeration guides; keep the CTA varied and restrained; emit only truthful article schema fields.
- **SEO Impact:** Owns `best time to overseed lawn in iowa` while reinforcing the consolidated Aeration & Seeding service ownership.
- **Edge Cases:** Equating informational overseeding advice with confirmed service method; fertilizer/pesticide prescriptions; weather variability; duplicate aeration article sections; unsupported dates/author/image.
- **Validation:** Source/claim audit, content differentiation from Task 28 and service page, exact metadata/canonical/H1, links, image and schema parity.
- **Tests:** Required sources/fields, route/sitemap, exact metadata, Article/Breadcrumb schema, service/related links, and no unsupported method/date/author fields.
- **Definition of Done:** `[x]` Sourced Iowa guidance is accurate and conditional; `[x]` exact intent remains informational; `[x]` no unverified Mo's method/outcome is stated; `[x]` metadata/schema/links/sitemap checks pass.

#### Task 29 implementation record

- **Research record:** `docs/research/task-29-overseeding-brief.md` records the reader decision, research questions, three current Iowa State source records, seven published claim mappings, removed/softened claims, secondary-intent research, representative SERP gaps, Task 28 comparison and all mandatory editorial gate results.
- **Article decision:** the published body answers mid-August through mid-September immediately but treats that range as an establishment opportunity. Its distinct readiness framework checks existing-turf competition, seed-to-soil contact and the ability to maintain surface moisture, then gives evidence-bounded postpone conditions for missing follow-through or hot/windy pressure.
- **Evidence and commercial restraint:** visible citations and Sources map only to Iowa State. The Task 28 link keeps aeration need separate, and the service link states only the approved combined Aeration and Seeding scope. No seed blend, product, rate, exact germination period, watering schedule, equipment instruction, property diagnosis, Mo's method or outcome guarantee is published.
- **Publication and schema:** two `published` records drive article routes, Hub cards/ItemList, Homepage tips, static params and the twenty-five-URL sitemap. BlogPosting/WebPage/BreadcrumbList reuse the central publisher and omit unapproved author, public dates, image, FAQ, reviews, ratings, LocalBusiness, address, geo and offers. Tasks 30–33 remain `planned` and 404.
- **Validation support:** `validate:overseeding-article` protects ownership, reciprocal source/claim mappings, all five editorial gates, translations, schema, links, Task 28 relationship, selector publication, Homepage/Hub behavior, four-route future isolation and the exact 25-URL lifecycle. Inherited validators received lifecycle-only updates without weakening completed-task contracts.
- **Final result:** all four Task 29 Definition of Done checks and the mandatory Research, Differentiation, Task 28 Anti-Repetition, Cannibalization and Editorial Quality gates pass. No author, public date or image was fabricated, and work stops before Task 30.

### Task 30 — “How Often to Mow a Lawn in Iowa” Article

- **Status:** `[x]` Completed
- **Objective:** Research, author, review, and publish `/blog/how-often-to-mow-lawn-iowa/` for Iowa mowing-frequency questions.
- **Why It Is Needed:** This mandatory guide answers a common informational query and supports the Lawn Mowing conversion page.
- **Dependencies:** Tasks 27–29; current authoritative sources and approved CTA/image data.
- **Files Involved:** new/finalized `content/blog/how-often-to-mow-lawn-iowa.ts`, approved image record, related-link data, tests.
- **Implementation Details:** Use exact title/H1/description/primary keyword. Research growth, weather, season, grass type and mowing-height/frequency principles from Iowa State Extension or authoritative official extension sources. Avoid a rigid universal schedule, exact promises, chemical guidance or invented Mo's recurring program. Include scannable sourced advice, caveats, a verified image where possible, links to Lawn Mowing and calendar guide, related reading and a restrained non-duplicated CTA.
- **SEO Impact:** Owns `how often to mow lawn in iowa` and sends commercial demand to `/services/lawn-mowing/` without cannibalizing it.
- **Edge Cases:** Universal weekly claims, unsafe height/pattern prescriptions, drought/weather variability, confusing advice with service schedule, unsupported author/date/image.
- **Validation:** Claim/source review, exact metadata/H1/canonical, service/informational separation, source and internal links, schema/image parity and readability.
- **Tests:** Published fields/sources, route/sitemap, exact metadata/schema, Lawn Mowing link, no rigid schedule/unsupported dates/author.
- **Definition of Done:** `[x]` Frequency guidance is sourced and condition-aware; `[x]` exact informational ownership passes; `[x]` service/related links and schema are correct; `[x]` no invented schedule or service promise remains.

#### Task 30 implementation record

- **Research record:** `docs/research/task-30-mowing-frequency-brief.md` contains the user decision, research questions, six-source inventory, eight reciprocal claim groups, source-freshness/conflict review, removed/softened claims, same-intent terminology, representative SERP gaps, differentiation, anti-repetition, municipal and cannibalization decisions, Spanish parity, source re-verification and all mandatory publication gates.
- **Article and lifecycle:** one typed published record adds researched keywords, direct condition-aware copy, six visible sources, eight internal claim notes, Lawn Mowing relationship and complete translations without extending the shared content architecture. The selector now returns Tasks 28, 29, 30 and 32; exactly one lifecycle promotion produces 27 sitemap URLs while Tasks 31 and 33 stay planned 404s.
- **Evidence and restraint:** growth and a suitable finished height determine frequency; the one-third relationship and 3 → 4½-inch worked example are explicit and qualified. Weather, season and dormancy change either growth or the opportunity to cut without becoming a schedule. Municipal content, current weather, Mo's operating methods, author, public dates and image are omitted.
- **Validation result:** focused and complete inherited validators, TypeScript, production build, production source/status/query/schema/sitemap assertions and four-viewport bilingual browser QA pass. The one shared UI correction gives mobile article routes a visible parent Blog current state. Lint remains unavailable because ESLint is not installed.
- **Final result:** all four exact Task 30 Definition of Done checks and every expanded evidence/editorial/lifecycle gate pass. Work stops before Task 31.

### Task 31 — Des Moines Spring Cleanup Checklist Article

- **Status:** `[x]` Completed
- **Objective:** Research, author, review, and publish `/blog/spring-lawn-cleanup-des-moines/` as a practical evergreen informational checklist for the next spring demand cycle.
- **Why It Is Needed:** It remains a mandatory seasonal guide and must stay distinct from the Spring Cleanup commercial page, but it is intentionally deprioritized behind the currently relevant fall-content opportunity. The goal is to have the guide researched, published, crawled, and established before spring demand rises rather than publishing it during an out-of-season window merely to preserve task-number order.
- **Seasonal Execution Priority:** Do **not** execute Task 31 immediately after Task 30 solely because of numbering. For the September 2026 publishing sequence, Task 32 is intentionally executed first, followed by Task 30 and then Task 31. This changes execution priority only; it does not change Task 31's URL, keyword ownership, scope, or long-term importance.
- **Dependencies:** Tasks 27–30 **and Task 32**; current authoritative/municipal sources as applicable and approved CTA/image facts. Task 32's seasonal-priority execution is intentionally allowed before this task.
- **Files Involved:** new/finalized `content/blog/spring-lawn-cleanup-des-moines.ts`, approved image record, related-link data, tests.
- **Implementation Details:** Apply exact metadata/H1/primary keyword. Build a useful evergreen checklist from current Iowa extension guidance and official municipal sources only for any local disposal/rule claims; record and display sources, paraphrase and state property/weather dependencies. Do not manufacture freshness, publish date-driven filler, or imply that the article is being written because spring conditions are currently present. Do not invent legal rules, fixed dates, chemical programs, service inclusions or outcomes. Link Spring Cleanup and, once published, the calendar guide and other genuinely useful related articles; use a varied restrained CTA.
- **SEO Impact:** Owns `spring lawn cleanup checklist des moines`, supporting but not replacing `spring cleanup des moines ia` commercial ownership. Its value is evergreen and seasonal: publish sufficiently ahead of the next spring demand cycle so Google can crawl, index, understand, and rank the guide before search interest peaks.
- **Edge Cases:** Publishing out-of-season copy that falsely sounds current, city-specific disposal rules that vary or change, rigid dates, service checklist presented as guaranteed inclusions, duplicated service copy, false seasonal/city image label, or artificial freshness/date changes made only for SEO.
- **Validation:** Source freshness and municipality scope, exact metadata/canonical/H1, checklist usefulness, service/article intent separation, evergreen wording, links/schema/image and mobile readability. Confirm the article does not depend on false current-season language and that its publication does not alter Task 32's already-established fall ownership.
- **Tests:** Sources/fields, route/sitemap, exact metadata/schema, Spring Cleanup link, no unverified legal/date/service/current-season claims, and no regression to the published fall guide.
- **Definition of Done:** `[x]` Checklist facts are sourced and scoped; `[x]` exact informational ownership is preserved; `[x]` commercial link and schema/sitemap pass; `[x]` no local rule or service inclusion is invented; `[x]` the article remains evergreen and ready ahead of the next spring demand cycle without fake current-season framing.

#### Task 31 implementation record

- **Research record:** `docs/research/task-31-spring-cleanup-brief.md` records the actual reader decision, six-source inventory, eleven reciprocal claim groups, freshness/conflict review, separate municipal ledger, researched secondary terminology, representative SERP gaps, differentiation, Tasks 28/29/30/32 originality comparison, capability/cannibalization boundaries, source re-verification and every final editorial gate.
- **Article and checklist:** one typed published record uses a clear/observe/wait/decide-separately property review. It covers only sourced winter debris, bed conditions, cautious turf-patch observation and transitions to the already-published mowing, aeration and overseeding guides. It does not become a month-by-month calendar, treatment plan, generic chore list or second service landing page.
- **Jurisdiction and capability decision:** the current Metro Waste Authority Des Moines page supports a City-only verification path; dated 2026 operational rules are deliberately omitted, and no City instruction is generalized to the metro. The property checklist is explicitly not Mo's service checklist; exact commercial scope remains a property-estimate question.
- **Evergreen, language and schema restraint:** ahead-of-season public copy contains no fake current-spring/current-year language or public freshness date. Explicit Spanish translations preserve every condition and jurisdiction. BlogPosting/WebPage/BreadcrumbList reuse central identity and citations; author, dates, image, FAQ, Review/rating, LocalBusiness, address, geo and Offer remain absent.
- **Lifecycle and validation:** `getPublishedArticles()` returns exactly Tasks 28, 29, 30, 31 and 32; hub/ItemList/static params follow the five records, Homepage Latest Tips remains selector-limited to three, sitemap contains 28 URLs and Task 33 remains an unpublished branded 404. Focused/current/historical validators, TypeScript, production build/source checks and four-viewport bilingual browser QA pass. `Unavailable — ESLint is not installed` remains unchanged.
- **Final result:** all five exact Task 31 Definition of Done checks and Research, Differentiation, Tasks 28/29/30/32 Anti-Repetition, Municipal/Jurisdiction, Service Capability, Cannibalization and Editorial Quality gates pass. Tasks 1–32 are complete; work stops before Task 33.

### Task 32 — Des Moines Fall Leaf Cleanup Tips Article

- **Status:** `[x]` Completed
- **Objective:** Research, author, review, and publish `/blog/fall-leaf-cleanup-des-moines/` for fall leaf-cleanup advice intent, prioritizing it now because September 2026 begins the relevant fall-demand window.
- **Why It Is Needed:** It is a required seasonal supporting guide and a natural bridge to the consolidated fall service page. It is intentionally promoted ahead of Tasks 30–31 in execution order so the article can be researched, published, crawled, and established before fall leaf-cleanup demand peaks.
- **Seasonal Execution Priority:** Execute Task 32 immediately after Task 29 for the September 2026 publishing sequence. This is an execution-priority change only; Task numbering, URL ownership, scope, and the long-term cluster architecture remain unchanged. After Task 32, return to Task 30, then Task 31, then Task 33.
- **Dependencies:** Tasks 27–29; current authoritative/municipal sources as applicable and approved CTA/image facts. Tasks 30–31 are **not** prerequisites for Task 32 under the approved seasonal-priority sequence.
- **Files Involved:** new/finalized `content/blog/fall-leaf-cleanup-des-moines.ts`, approved image record, related-link data, tests.
- **Implementation Details:** Use exact metadata/H1/primary keyword. Research timing, organization and disposal considerations from Iowa Extension and official municipal sources, clearly identify jurisdiction and source freshness, paraphrase and avoid fixed annual dates. Prioritize evergreen fall decision support that is useful before and during leaf season without manufacturing urgency or claiming that specific local conditions are currently occurring. Do not claim unsupported Mo's disposal/process capabilities or make legal/seasonal guarantees. Link Fall Cleanup & Leaf Removal and already-published relevant guides naturally; link the calendar pillar only once it is published. Include visible sources and a unique restrained CTA.
- **SEO Impact:** Owns `fall leaf cleanup tips des moines` without competing for commercial `leaf removal des moines ia` intent. Publishing ahead of the fall demand peak gives Google time to crawl, index, understand, and rank the informational guide while preserving the commercial service page as the conversion owner.
- **Edge Cases:** Changing collection/disposal rules, city versus metro jurisdiction, weather variability, fake “right now” or current-leaf-condition claims, sales-heavy duplication, unverified season/location image, artificial freshness, or language implying a municipal rule applies outside its verified jurisdiction.
- **Validation:** Claim/jurisdiction/source audit, exact metadata/H1/canonical, informational/commercial intent split, seasonal relevance without fake current-condition claims, related links, article schema parity, image provenance and responsive review. Confirm municipal guidance is current and scoped to the exact jurisdiction it governs.
- **Tests:** Required sources/fields, route/sitemap, exact metadata/schema, Fall service link, no unsupported municipal/service/date/current-condition assertions, and no dependency on unpublished Tasks 30–31.
- **Definition of Done:** `[x]` Tips and any rule references are authoritative/current/scoped; `[x]` exact informational ownership passes; `[x]` service/cluster links and schema pass; `[x]` no fabricated capability or local rule remains; `[x]` the article is published in the fall-priority window without fake urgency or temporary current-condition copy.

#### Task 32 implementation record

- **Research record:** `docs/research/task-32-fall-leaf-cleanup-brief.md` records user intent, research questions, authoritative source inventory, seven reciprocal claim groups, a separate municipal/jurisdiction ledger, current secondary-intent research, representative content-gap analysis, differentiation and all final publication gates. Iowa State establishes the turf threshold and thin/dry/result conditions; current Metro Waste Authority resources and the official City 2026 SCRUB document establish only the precisely scoped local program statements.
- **Editorial decision:** the article answers with a condition-led visible-cover threshold, then a pass/result check, then a City-limits disposal split. It avoids generic listicle structure, fixed dates/frequency, competitor facts, temporary September copy, Tasks 28–29 template repetition, and commercial service-page duplication.
- **Truth and jurisdiction boundary:** current 2026 collection language is limited to City of Des Moines; the annual SCRUB resource is labeled as dated and resident-specific; other approved communities are told to verify their own municipality. No external source is used to infer Mo's bagging, hauling, disposal, equipment, timing or result.
- **Publication result:** exactly Tasks 28, 29 and 32 are published through `getPublishedArticles()`. Blog hub, Blog ItemList, Homepage Latest Tips, static params and sitemap remain selector-driven; sitemap contains 26 URLs. Tasks 30, 31 and 33 remain planned, unpublished and branded non-redirecting 404s.
- **Schema/media/date restraint:** BlogPosting, WebPage and BreadcrumbList reuse the central Organization/WebSite graph and expose source citations; author, public dates, image, FAQ, Review, AggregateRating, LocalBusiness, address, geo and Offer remain absent.
- **Validation result:** focused Task 32, canonical Fall service, Tasks 28–29, Blog and complete Tasks 7–29/shared regressions pass with TypeScript, production build, production route/source checks and four-viewport English/Spanish browser QA. The narrow Spanish H1 wrap fix and translated source scopes pass at 320px. `Unavailable — ESLint is not installed` remains the unchanged lint status.
- **Final result:** all five Task 32 Definition of Done checks and mandatory Research, Differentiation, Jurisdiction, Tasks 28–29 Anti-Repetition, Cannibalization and Editorial Quality gates pass. Task 32 completes ahead of Tasks 30–31 exactly as authorized; Task 30 is next but was not started.

### Task 33 — Central Iowa Lawn Care Calendar Pillar Article

- **Status:** `[x]` Completed
- **Objective:** Research, author, review, and publish `/blog/central-iowa-lawn-care-calendar/` as the cluster pillar linking all five supporting guides and relevant services.
- **Why It Is Needed:** The required pillar organizes year-round seasonal informational demand and strengthens the entire service/content graph after the supporting guides have been published. It should synthesize the completed cluster rather than dictate the order in which seasonal supporting articles must be released.
- **Dependencies:** Tasks 27–32 must all be complete so every supporting article exists and can be linked, regardless of execution-number order; authoritative source review and approved image/CTA facts.
- **Seasonal Execution Order Note:** For the September 2026 remaining article sequence, use **Task 29 → Task 32 → Task 30 → Task 31 → Task 33**. Task 33 remains last because its value depends on all five supporting guides being published and available for bidirectional linking.
- **Files Involved:** new/finalized `content/blog/central-iowa-lawn-care-calendar.ts`, approved image record, all cluster link data, tests.
- **Implementation Details:** Apply exact metadata/H1/primary keyword. Research season-by-season decision guidance through Iowa State Extension and other authoritative primary sources, express timing as conditional rather than fixed guarantees, and record visible sources/claim notes. Link all five published articles plus relevant mowing, aeration/seeding, spring/fall cleanup and other verified services naturally. Reflect seasonality without turning the pillar into a temporary “current month” article. Use a restrained pillar CTA and accurate Article/BlogPosting fields only; avoid chemical prescriptions, fake freshness and mass duplication of supporting articles.
- **SEO Impact:** Owns `central iowa lawn care calendar`, becomes the evergreen informational cluster hub, and distributes authority bidirectionally to all five guides and relevant commercial pages. The seasonal execution change improves near-term publishing relevance without changing this pillar's long-term ownership or hub role.
- **Edge Cases:** Over-specific dates, advice varying by turf/soil/weather/property, repeating full child articles, missing reciprocal links, stale source/date metadata, fake freshness, unsupported author/image season, or encoding the September 2026 execution order into permanent user-facing copy.
- **Validation:** Full source/claim audit, exact head/H1/canonical, all five bidirectional article links, relevant service links, duplication/content-quality review, schema/sitemap/image/accessibility, and confirmation that the pillar remains evergreen rather than tied to the temporary implementation sequence.
- **Tests:** Required sources/fields, route/sitemap, exact metadata/schema, exact five-article link set, valid service links, no unsupported dates/author, and no dependency on temporary seasonal-priority wording in public content.
- **Definition of Done:** `[x]` Sourced pillar is useful without duplicating child guides; `[x]` all five article relationships and relevant services are linked; `[x]` exact ownership/schema/sitemap pass; `[x]` conditional guidance and review workflow are explicit; `[x]` temporary execution priority does not leak into evergreen public copy.

#### Task 33 implementation record

- **Research scope and authoritative sources:** `docs/research/task-33-central-iowa-calendar-brief.md` records user intent, claim-led questions, freshness checks and five Iowa State University Extension and Outreach sources covering spring exposure/growth, mowing frequency, summer dormancy, the late-summer/fall transition and the fall growth endpoint. The reciprocal claim ledger passes with no unsupported factual group; no competitor article supplies factual authority.
- **Differentiation and value-add:** a five-signal, condition-led decision table connects spring exposure, active growth, summer slowdown, the aeration/seeding decision window and separate leaf/growth endpoints. It acts as a navigation layer over the five child guides rather than reproducing their factor test, readiness questions, numerical mowing explanation, spring checklist or leaf/jurisdiction model. The Research, Differentiation, Pillar Value, Child Ownership and Anti-Duplication gates pass.
- **Uncertainty, capability and cannibalization:** dates, temperature cutoffs, chemical schedules, current conditions and diagnostic certainty are omitted. Iowa State guidance is not business evidence; visible copy keeps Mo's four relevant services property/estimate-specific and expressly rejects a package, recurring program, automatic sequence or availability promise. Informational calendar intent remains separate from each commercial service owner and each child guide. Service Capability and Cannibalization gates pass.
- **Editorial and anti-slop result:** the direct orientation answer precedes one purpose-built table and five focused decision sections. No forced FAQ, generic benefits/mistakes/conclusion, fake first-hand expertise, temporary September 2026 framing, arbitrary word count or child-copy padding remains. Spanish factual/conditional parity, anti-slop review and the Editorial Quality Gate pass.
- **Visible sources; author, date and image decisions:** all five authoritative sources are visibly cited and mirrored by truthful BlogPosting citations. No approved individual author, verified publication/modification date or provenance-safe image exists, so author, dates and image remain omitted from visible content and schema.
- **Internal links and schema restraint:** five pillar-to-child and five child-to-pillar directions are public; four canonical service links plus the property-specific Contact path are crawlable. BlogPosting, WebPage and BreadcrumbList reuse the central Organization/WebSite graph; FAQ, Review, AggregateRating, LocalBusiness, address, geo, Offer and invented identity fields are absent.
- **Publication status:** `published`. The sole article selector returns six published Blog articles, the Blog hub/ItemList contains six articles, Homepage Latest Tips remains selector-driven, and the lifecycle sitemap contains exactly 29 canonical URLs. Task 34 remains not started.

### Task 34 — Gallery, Image SEO, and Media Performance Optimization

- **Status:** `[x]` Completed
- **Objective:** Reduce image/video payload and layout risk across home, services, locations, work, reviews and blog while preserving the visual identity and existing media.
- **Why It Is Needed:** The repository has ~28 MB of local assets, mislabeled file formats, large seasonal/before-after images, 68 remote gallery URLs and excessive gallery serialization risk.
- **Dependencies:** Tasks 5–33 so actual placements and approved metadata are known; Task 24 project registry; explicit permission before copying/replacing remote assets.
- **Files Involved:** `content/projects.ts`, `data/all_image_urls.txt` if retained/migrated, gallery/before-after/hero/page components, approved `public/` assets/variants, `next.config.mjs` only if verified remote/image behavior requires it, performance tests/records.
- **Implementation Details:** Establish before-change production-like LCP/CLS/INP, bytes, request, decoding, JS/hydration and third-party baselines. Add intrinsic dimensions/responsive sizes, honest alts/decorative empties, below-fold lazy loading and LCP poster priority; measure video preload before changing it. Produce visually verified optimized assets with correct formats/dimensions, keep originals until approval, serve thumbnails/card sizes instead of full gallery media, and prevent all 79 sources entering homepage initial payload. Audit remote provenance/stability rather than silently copying/deleting stock-like URLs.
- **SEO Impact:** Improves Core Web Vitals, image discoverability and crawl UX across all 29 URLs without changing intent ownership.
- **Edge Cases:** Visual quality loss, before/after crop drift, animation timing, remote hotlink failure, rights, incorrect alts/location stuffing, LCP regression from lazy-loading hero, CLS from unknown remote dimensions, cache invalidation.
- **Validation:** Before/after performance report on representative mobile/desktop routes, visual diff/manual media review, network/payload inspection, file-signature checks, alt/provenance audit, gallery/modal/before-after/reduced-motion regression.
- **Tests:** Image-record completeness, dimensions/alt rules, featured/full serialization limits, no city alt without verified metadata, browser LCP/CLS budget signals where stable, and preserved modal/slider interactions.
- **Definition of Done:** `[x]` Measured payload/CWV risks improve or have documented evidence-based exceptions; `[x]` primary LCP is not lazy; `[x]` below-fold/thumbnail behavior and dimensions are correct; `[x]` all replacements are visually/provenance approved and no original is prematurely deleted.

#### Task 34 implementation record

- **Audit and method:** `docs/performance/task-34-media-performance.md` is the durable inventory, signature/provenance/remote audit, methodology, derivative ledger, before/after table and Task 37 comparison baseline. It records the exact representative routes/viewports, local/remote counts, source bytes, request behavior and honest lab limitations.
- **Measured result:** the 2.5-second decorative-video activation delay removes 2,650,809 encoded video bytes from the defined initial Homepage window while the priority poster remains preloaded and non-lazy. Desktop/mobile initial total falls by about 85%; CLS remains zero. Non-home routes are stable, with the optimized eager Snow hero modestly reducing image bytes. Variable loopback LCP and unavailable reliable INP are documented rather than converted into scores.
- **Media and provenance result:** seven active derivatives retain dimensions/crops and source provenance while reducing the active source set by 12,845,612 bytes; every original remains. All 68 remote JPEG URLs stayed in place and reachable, with reproduction rights explicitly unresolved. No city, service, customer, authorship, completion or result fact was inferred, and no ImageObject was introduced.
- **Delivery and interaction result:** responsive `sizes`, eager/LCP and lazy/below-fold decisions match actual layout roles. Homepage and Our Work remain bounded at 8 / 12 initial / 12 subsequent records; full lightbox media is conditional. Four-viewport English/Spanish media QA, visual comparisons, keyboard slider, modal focus/Escape/return, reduced motion, Load More, route/source/sitemap checks, the focused validator, one historical matrix, TypeScript and production build pass. Sitemap remains exactly 29 canonical URLs; analytics remains unchanged; Task 35 was not started.

### Task 35 — Internal Linking and Content-Cluster Audit

- **Status:** `[x]` Completed
- **Objective:** Complete and validate the intentional crawl graph across all 29 pages after every target page exists.
- **Why It Is Needed:** Links added incrementally can leave orphans, broken future references, over-optimized anchors, or incomplete service/article reciprocity.
- **Dependencies:** Tasks 1–34.
- **Files Involved:** `content/routes.ts`, every service/area/blog/static page content record, header/footer/homepage interactive components, related/helpful-resource components, internal-link tests.
- **Implementation Details:** Verify global nav/footer, homepage sections, hubs, breadcrumbs, every service-specific relationship in Section 20, city-to-service/area relationships, commercial/trust/work/review/contact links, and all required blog ↔ service and calendar ↔ five-article links. Add small `Helpful Resources` sections on relevant services now that articles are live. Keep natural descriptive anchors, no keyword stuffing, no JS-only service references, no canonical UTM/lang/query links, and practical crawl depth ≤3.
- **SEO Impact:** Distributes authority, reinforces non-cannibalizing intent ownership, and ensures every indexable URL is discoverable.
- **Edge Cases:** Duplicate links versus harmful repetition, client controls lacking anchors, links to drafts, redirecting/trailing variants, query strings, broken external sources, orphan pages hidden by menus.
- **Validation:** Generate/review an internal link graph from typed records/rendered HTML, inspect every route's inbound/outbound set, crawl depth, anchor quality, broken/redirect links and source visibility.
- **Tests:** No orphaned published route, all internal hrefs resolve, required service-link matrices and bidirectional article pairs, exact calendar child set, clean internal URLs, no forbidden city/service paths.
- **Definition of Done:** `[x]` All 29 pages have crawlable inbound and contextual outbound links; `[x]` required matrices/reciprocity pass; `[x]` depth is ≤3 when practical; `[x]` anchors are natural and no draft/query/redirect link is used internally.

#### Task 35 implementation record

- **Method and result:** `docs/seo/task-35-internal-link-audit.md` is the one durable baseline/final record. The route-registry-aware production crawl separates full-page and main-content edges, excludes sitemap/schema/self/fragment references from inbound navigation, and verifies status, canonical resolution, clean hrefs, inbound/outbound counts and shortest-path depth for all 29 routes. Final graph: 661 unique canonical edges, 304 main-content edges, zero orphans, zero unreachable routes, maximum depth 2 and zero invalid/query/redirect-dependent destinations.
- **Relationships and restraint:** exactly five missing reverse edges were added through one optional typed, server-rendered Helpful Resources section on four service owners. Lawn Mowing, Aeration & Seeding, Spring Cleanup and Fall Cleanup & Leaf Removal link their five governed informational guides; reverse article links already existed. The exact five-child bidirectional calendar cluster, global/header/footer, city/hub, trust and commercial relationships remain intact. Copy and anchors preserve commercial/informational intent separation and add no unsupported capability, local evidence, article-body rewrite or doorway architecture.
- **Lifecycle, accessibility and validation:** the sitemap remains 29 and no route, redirect, canonical, schema or analytics event was added. Task 34 media/performance behavior remains intact. Bilingual focus/overflow/mobile interaction QA passes at the representative 1440×900 and 390×844 viewports plus 320×568 for all changed sections. Focused/historical validators, TypeScript, one production build, final rendered crawl and diff checks pass. Task 36 remains not started.

### Task 36 — Structured Data Validation and Hardening

- **Status:** `[x]` Completed
- **Objective:** Audit the final per-page entity graphs against visible content, schema rules, verified facts and Google validation tools.
- **Why It Is Needed:** Shared builders can still emit mismatched page types, breadcrumbs, dates, images or unsafe business/review claims after all pages are assembled.
- **Dependencies:** Tasks 1–35; Task 1 supplies the verified daily hours and confirmed Service Area Business no-address/no-geo policy.
- **Files Involved:** `lib/structured-data.ts`, `components/structured-data.tsx`, route/content records, all page renderers, schema tests and validation notes.
- **Implementation Details:** Validate one coherent graph per page: homepage WebSite/WebPage/Organization; hubs appropriate CollectionPage/Blog/ItemList; services WebPage/Service/Breadcrumb; cities WebPage/visible ItemList/Breadcrumb and no local entity; About/Contact page types; Work/Reviews restraint; articles BlogPosting/Article/WebPage/Breadcrumb/publisher. Confirm stable IDs and references, schema-visible parity, valid absolute clean URLs and escaping. Emit no address or geo for the confirmed Service Area Business, handle verified daily hours only where supported, omit unverified price/author/dates/images/FAQ/offers, and never add aggregateRating or city LocalBusinesses.
- **SEO Impact:** Improves machine-readable consistency for all 29 pages without misleading rich-result attempts.
- **Edge Cases:** Duplicate/conflicting graph nodes, malformed apostrophe/HTML, breadcrumb mismatch, ItemList order drift, unmaintained `dateModified`, optional images without dimensions, fake LocalBusiness eligibility pressure.
- **Validation:** Parse every JSON-LD script, compare nodes to rendered content, run Schema.org validator and Google Rich Results Test where applicable after deployment, document expected non-eligibility rather than forcing markup.
- **Tests:** Graph serialization across all page types, globally stable IDs, required nodes, breadcrumb parity, visible ItemList parity, and forbidden-field/type assertions.
- **Definition of Done:** `[x]` Every page graph parses and matches visible content; `[x]` required page-type nodes and stable references pass; `[x]` all unverified/self-serving/city-business fields are absent; `[x]` validator results and limitations are recorded.

#### Task 36 implementation record

- **Method and graph contract:** `scripts/validate-structured-data.mts` is the single deterministic Task 36 contract. It builds all 29 graphs from route/publication selectors and their governed visible records, validates exact route-family types and stable IDs, recursively audits forbidden data and URLs, verifies reference/collision safety, and optionally compares one production crawl with the builders plus rendered breadcrumbs and collections.
- **Defects and restraint:** schema-only external URL normalization removes non-semantic query/fragment data from `sameAs` and `citation`; the corresponding visible links and article records remain unchanged. No speculative enrichment was added: hours, LocalBusiness, address/geo/branches, ratings/reviews, offers/products/prices, FAQ, people/credentials, article dates/images and unverified ImageObject remain omitted.
- **Final result:** the reused production build emitted exactly one parsable graph on each of 29 routes: 139 nodes, 83 unique IDs and two identical shared central IDs. All 10 Service nodes, eight ItemLists, 28 interior breadcrumbs and six BlogPosting nodes pass visible/source parity; forbidden occurrences, unsafe queries, ID conflicts, dangling references and parity failures are all zero. Sitemap remains 29, analytics remains the five-event allowlist, and Task 34/35 behavior is preserved.
- **Validation and limitation:** focused static/rendered validation, directly affected validators, the one Tasks 1–35 historical matrix, TypeScript, one production build, all-route rendered extraction/parity, representative real-browser smoke and diff checks pass. The durable details and exact counts are in `docs/seo/task-36-structured-data-audit.md`. Live Schema.org/Google validation is `Deferred — requires authorized deployed URL / post-deployment validation.` Task 37 was not started.

### Task 37 — Accessibility, Performance, SEO, and Route Validation

- **Status:** `[ ]` Not started
- **Objective:** Run the full pre-deployment automated and manual quality gate across all 29 routes and the estimate/API flow.
- **Why It Is Needed:** Incremental page work must be tested as one production build for regressions, correct status/rendering, accessibility and Core Web Vitals.
- **Dependencies:** Tasks 1–36.
- **Files Involved:** all changed application/content/config/test files; focused test/e2e configuration; `plan.md` for exact results only.
- **Implementation Details:** Install only authorized locked dependencies, then run available format/lint/type/unit/integration/browser/build checks; repair only regressions in scope. Verify successful page output, unique exact titles/descriptions/H1/canonicals, source-rendered content, sitemap/robots, actual 404, redirects, link graph, schema, images, responsive layout, focus/keyboard/forms/reduced motion, preview/local analytics silence, and production-like performance. Resolve the currently nonfunctional lint setup deliberately rather than claiming it ran. Distinguish pass/fail/not available/not run.
- **SEO Impact:** Pre-deployment gate for indexability, usability and conversion integrity across the complete architecture.
- **Edge Cases:** Dependencies still absent, environment secrets unavailable, preview versus production behavior, flaky performance budgets, dynamic route fallback, Next slash redirects, remote image failures, stale build artifacts.
- **Validation:** Review all command output and representative desktop/mobile rendered pages; inspect every URL/status/source/head; compare performance against Task 34 baseline; record unresolved manual/account items for Task 38.
- **Tests:** Full registered suite: data/metadata/schema/sitemap/link/blog/form/analytics tests, production build, typecheck, functioning lint if adopted, and browser smoke/a11y flows for all route families and contact cases.
- **Definition of Done:** `[ ]` Production build and required automated suites pass or a genuine blocker is recorded; `[ ]` all 29 routes/status/head/content are validated; `[ ]` no critical accessibility/performance/conversion regression remains; `[ ]` results are honestly classified.

### Task 38 — GA4 Production Validation and Manual Account Actions

- **Status:** `[ ]` Not started
- **Objective:** After authorized deployment, verify real production measurement and complete/document the required GA4, Google Business Profile, and attribution account actions.
- **Why It Is Needed:** Repository code can emit events but cannot mark conversions, inspect stream settings, or update external profiles without authorized account access.
- **Dependencies:** Tasks 4, 26, 35 and 37; explicit deployment/account authorization, verified Measurement ID, consent decision, production access and a safe test-lead procedure.
- **Files Involved:** Normally no application files; `.env.example`/analytics docs/tests only for discovered corrections; `plan.md` and deployment runbook for redacted outcomes. Never record secrets or customer PII.
- **Implementation Details:** Verify no duplicate external GA/GTM injection, production-only tag and approved consent behavior; inspect Enhanced Measurement; test `form_start`, confirmed-success `generate_lead`, actionable `form_submit_error`, `click_to_call`, and `click_email` in DebugView/Realtime with safe data. Confirm no lead on invalid/failed/suppressed flows and no PII. Mark `generate_lead` primary key event, decide/document `click_to_call` secondary treatment, register only needed custom dimensions, verify Traffic acquisition and standard UTMs, then manually update/test the GBP website link using the exact approved UTM URL. Keep clean URLs in canonicals/sitemap/schema/internal links.
- **SEO Impact:** Makes organic and GBP lead attribution actionable without polluting canonical signals or overstating conversions.
- **Edge Cases:** No account authorization, delayed GA processing, ad blockers/consent denial, Enhanced Measurement duplicates, live test generating real emails, multiple data streams, accidental production traffic from preview, UTM loss in language switching.
- **Validation:** Capture redacted event names/parameter keys and account-state checklist, compare DebugView/Realtime, check acquisition after data latency, open GBP link and verify landing/canonical behavior, and confirm native phone/email.
- **Tests:** Manual production event matrix plus automated Task 4 regression rerun; one confirmed test submission → one lead; all negative cases → none; PII audit; preview/local network silence.
- **Definition of Done:** `[ ]` Real production events and safe parameters are verified; `[ ]` `generate_lead` is marked primary and call decision is recorded; `[ ]` custom dimensions/attribution/GBP UTM are tested; `[ ]` any unavailable account action is explicitly blocked, never falsely marked complete.

### Task 39 — Documentation, Final Cleanup, and Implementation Gate Closure

- **Status:** `[ ]` Not started
- **Objective:** Consolidate accurate operating documentation, remove only proven implementation leftovers, record final validation, and close the rollout without starting future expansion.
- **Why It Is Needed:** The final system needs maintainable publishing, analytics, business-fact, testing and deployment procedures, and a reviewable completion record.
- **Dependencies:** Tasks 1–38.
- **Files Involved:** `docs/content-publishing.md`, analytics/deployment/validation documentation as selected, `.env.example`, `plan.md`, affected source/tests only for final scoped fixes; no deletion without prior exact plan entry.
- **Implementation Details:** Document new-article workflow, fields, sourcing, image handling, sitemap/link review and update ownership; document GA4 environment/event/PII/account steps, approved business-data maintenance, review count policy, command matrix, deployment/rollback and manual QA. Reconcile README absence only if an authorized doc is created. Remove dead duplicates only when provably safe and listed first; do not refactor brand/framework/style or mass-delete legacy assets/artifacts/lockfiles. Re-run focused validation after any cleanup and record final diff/status.
- **SEO Impact:** Protects long-term accuracy for all 29 URLs and prevents content, analytics and business facts from silently decaying.
- **Edge Cases:** Documentation diverges from actual scripts, secrets copied into examples, cleanup deletes user work, unsupported future ideas presented as delivered, manual QA/account steps incomplete.
- **Validation:** Line-by-line docs-to-code/plan review, command/link checks, secret scan, final production smoke/manual QA completion, and final git diff/status review scoped to authorized changes.
- **Tests:** Re-run all tests affected by cleanup plus build/type/lint/SEO/analytics smoke checks; record not-run external checks separately.
- **Definition of Done:** `[ ]` Documentation matches deployed behavior and contains no secrets; `[ ]` every prior task/QA result and owner decision is recorded; `[ ]` no unrelated refactor/deletion/user change is included; `[ ]` final diff/status are reviewed and the rollout stops.

## Manual Post-Deployment QA

Run this checklist against the canonical production origin after an explicitly authorized deployment. Record date, deployed commit, device/browser, tester, pass/fail, evidence, and follow-up owner. A repository build or preview is not a substitute for production/account checks, and no item is complete merely because an automated test exists.

### Deployment identity and all 29 target URLs

- [ ] Confirm the deployed commit/build and production environment values are the intended release; confirm preview/local/test environments do not use the production GA4 property.
- [ ] Verify HTTP success, rendered content, one H1, self-canonical, indexability, and expected title/description for `/`.
- [ ] Verify the same for `/services/`, `/services/lawn-mowing/`, `/services/aeration-overseeding/`, `/services/fertilization-weed-control/`, `/services/landscaping/`, `/services/flower-bed-maintenance/`, `/services/yard-cleanup/`, `/services/spring-cleanup/`, `/services/fall-cleanup-leaf-removal/`, `/services/grading/`, and `/services/snow-removal/`.
- [ ] Verify the same for `/commercial-property-services/`.
- [ ] Verify the same for `/service-areas/`, `/service-areas/ankeny-ia/`, `/service-areas/waukee-ia/`, `/service-areas/norwalk-ia/`, and `/service-areas/altoona-ia/`; confirm there is no indexable `/service-areas/des-moines-ia/`.
- [ ] Verify the same for `/about/`, `/our-work/`, `/reviews/`, and `/contact/`.
- [ ] Verify the same for `/blog/`, `/blog/when-to-aerate-lawn-iowa/`, `/blog/best-time-to-overseed-lawn-iowa/`, `/blog/how-often-to-mow-lawn-iowa/`, `/blog/spring-lawn-cleanup-des-moines/`, `/blog/fall-leaf-cleanup-des-moines/`, and `/blog/central-iowa-lawn-care-calendar/`.
- [ ] Test the host's trailing-slash/non-trailing-slash behavior; confirm one canonical form, at most one direct permanent normalization hop where applicable, and no canonical/redirect conflict.

### Source, metadata, canonical, rendering, and indexation

- [ ] Use View Source—not only the hydrated DOM—to confirm SEO-critical English body copy, headings, internal links, metadata and JSON-LD are rendered in HTML.
- [ ] Compare every title, H1, and meta description to Section E; confirm titles/descriptions/canonicals are unique and the homepage owns broad Des Moines intent.
- [ ] Confirm each canonical uses HTTPS production origin, is self-referential, is query-free, and never contains `lang`, UTM, form context or a trailing-form variant.
- [ ] Confirm Open Graph/Twitter title, description, URL, type and image resolve and accurately describe each major page; test representative shares.
- [ ] Confirm no `<meta name="keywords">`, accidental `noindex`, duplicate H1, client-only primary copy, soft 404, or homepage canonical on interior routes.
- [ ] Test query variants (UTM, `?lang=es`, form context) and confirm clean canonical/indexing behavior while standard UTM attribution remains available.
- [ ] Verify Spanish controls still work as a UI preference, mixed/incomplete translations are handled honestly, metadata is not incorrectly mutated, and no unapproved Spanish SEO URLs/hreflang are emitted.

### Navigation, breadcrumbs, links, and conversion paths

- [ ] Crawl desktop/mobile header and footer: Services, Service Areas, Our Work, Reviews, Blog, About, Contact; ten service-menu links; exact footer service/area/company groups; Des Moines points to `/`.
- [ ] Disable JavaScript or inspect source to confirm important service, area, article, breadcrumb and CTA navigation uses real `<a href>` links.
- [ ] Verify visible breadcrumbs on every interior page and compare their order/URLs to BreadcrumbList JSON-LD.
- [ ] Check every required service-specific related-link set from Section 20 and confirm anchors are descriptive/natural rather than stuffed.
- [ ] Confirm every city page links to approved services, the area hub and related areas without fake local claims; verify every page is reachable within three clicks where practical.
- [ ] Verify blog hub → six articles; aeration/overseeding/mowing/spring/fall articles ↔ their primary services; calendar ↔ all five guides and relevant services; no published article/page is orphaned.
- [ ] Check all internal/external links for success, no accidental query-bearing internal URLs, no broken source links, no redirect chains, and safe external behavior.
- [ ] Verify every primary service/location/commercial/trust/article path offers an obvious Contact, estimate or click-to-call path without duplicate form implementations.

### Sitemap, robots, status codes, redirects, and Search Console

- [ ] Open `/sitemap.xml`; confirm exactly the 29 canonical targets, clean HTTPS URLs and only real maintained dates; confirm no API, 404, redirect, draft, test, utility, query or thank-you URL.
- [ ] Open `/robots.txt`; confirm public content and required JS/CSS are crawlable, sitemap location is correct, and robots is not being misused as noindex.
- [ ] Request representative unknown, invalid service/city/blog, typo and removed URLs; confirm actual HTTP 404 with useful UI and no redirect to homepage.
- [ ] Audit production redirects against real legacy evidence; confirm only equivalent targets, permanent status where appropriate, one hop, no loop/chain, and no unknown-to-home catch-all.
- [ ] Inspect URL Inspection in Google Search Console for the homepage and representative service/city/blog pages; compare Google-selected canonical to declared canonical.
- [ ] Submit or update the production sitemap in Google Search Console and confirm it is fetched successfully without unexpected exclusions/errors.
- [ ] Request indexing after deployment for the homepage and highest-priority service/commercial pages, then selected area/blog pages where appropriate; record requests rather than promising indexing.

### Structured data and business-fact accuracy

- [ ] Parse every page's JSON-LD and validate representative page types with Schema.org Validator and Google Rich Results Test where applicable; record warnings and legitimate non-eligibility.
- [ ] Confirm stable `#organization`, `#website`, per-page, breadcrumb, service and article IDs reference one coherent graph and clean canonical URLs.
- [ ] Confirm every service has visible-matching Service schema and five approved areas; city pages have no fake LocalBusiness; hubs' ItemLists match visible cards/order.
- [ ] Confirm AboutPage, ContactPage, CollectionPage/Blog and Article/BlogPosting types match visible content and real publisher/image/date/author data only.
- [ ] Confirm no address, locality-only postal address, replacement geo, priceRange, license/certification, founding facts, guarantees, aggregateRating, self-serving Review schema, fake FAQ schema or city business entity; confirm verified hours are accurate where used.
- [ ] Reconfirm every-day `08:00–18:00` hours, Service Area Business policy, contact values, service scope, sole approved GBP URL, no Facebook/Instagram profiles, and `170+ Google Reviews` display policy against the approved single source.

### Content, city anti-doorway, reviews, and blog accuracy

- [ ] Read all service pages for natural keyword use, unique purpose, confirmed capabilities and prohibited claims specific to fertilization, grading, snow, aeration, cleanup and other services.
- [ ] Compare Ankeny, Waukee, Norwalk and Altoona pages side by side; confirm substantive usefulness/variation and no fabricated neighborhoods, projects, customers, crews, addresses, testimonials, response times or city imagery.
- [ ] Confirm homepage remains the only broad Des Moines page and no service/city permutations, split leaf/ground-clearance pages, thin archive/category/tag/author/date pages or unapproved Spanish pages are indexable.
- [ ] Verify Our Work uses the shared project source, before/after interaction remains correct, and location/service labels/alts are present only when metadata proves them.
- [ ] Verify Reviews uses the governed shared dataset, handles null/negative records honestly, uses approved source/count policy, does not overload initial HTML, and emits no self-serving rating schema.
- [ ] Editorially inspect the Blog hub and all six initial articles for exact intent, scannable useful content, non-repetitive CTAs, real images where available and no invented dates/authors/service facts.
- [ ] Open every visible article source; verify publisher authority, claim support, jurisdiction, source freshness and paraphrasing for Iowa/municipal facts; confirm conditional advice for weather, turf, soil, property and local rules.
- [ ] Confirm informational articles do not cannibalize commercial service pages and future/draft posts are absent from hub, sitemap, static routes and Latest Tips.

### Forms, phone/email, GA4, privacy, and attribution

- [ ] Submit the homepage and Contact forms with client-invalid data; confirm accessible errors/focus and no backend request or `generate_lead`.
- [ ] With an approved safe test, submit each form successfully; confirm provider-delivered success UI and exactly one `generate_lead` after confirmed success, even with double click/rerender/repeated callback safeguards.
- [ ] Exercise actionable backend failure, network failure, malformed response and honeypot suppression; confirm accurate UI, `form_submit_error` only for qualifying backend failures, and no `generate_lead`.
- [ ] Confirm `form_start` fires once after first meaningful real-field interaction per form instance, not on view/honeypot, and does not duplicate Enhanced Measurement.
- [ ] Activate representative `tel:` links in header, footer, hero, services, cities and Contact; confirm dialer/native destination and one non-blocking `click_to_call` with safe placement/page context.
- [ ] Activate representative `mailto:` links; confirm native destination and one non-blocking `click_email` with safe context.
- [ ] Inspect GA4 network/DebugView payloads and confirm no customer name, phone, email, address, message/project text, full payload, arbitrary DOM/form values, or monetary value/currency.
- [ ] Verify the Google tag loads only under the approved production/consent conditions and local, automated test and preview traffic does not reach the production property; review continued Vercel Analytics privacy/environment behavior.
- [ ] Confirm all five event names/parameters in GA4 DebugView and Realtime; mark `generate_lead` as the primary key event/conversion in Admin.
- [ ] Decide with the stakeholder whether `click_to_call` is a secondary key event and record the decision; keep `form_start`, `form_submit_error` and `click_email` diagnostic/intent events as planned.
- [ ] Register only event parameters that genuinely require custom dimensions and document names/scopes; do not enable Google Signals, advertising, remarketing or extra user-data features without separate approval.
- [ ] Verify Reports → Acquisition → Traffic acquisition preserves standard UTMs after reporting latency.
- [ ] Manually set/test the Google Business Profile website link as `https://www.moslawncaredsm.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp&utm_content=website_button`; confirm landing works, attribution appears, and the UTM URL is absent from canonicals/sitemap/internal links/schema.

### Images, performance, accessibility, responsive behavior, and regression

- [ ] Inspect mobile and desktop layout at representative narrow/wide widths for all page families; check no overlap, clipping, horizontal scroll, inaccessible menus or broken CTAs.
- [ ] Keyboard-test skip link, header/service menu, mobile navigation, breadcrumbs, forms, gallery modal, review controls, property/season/problem experiences and before/after controls; verify focus visibility, Escape and focus return.
- [ ] Check labels, error/live announcements, link/button semantics, one logical H1/heading hierarchy, target sizes, color contrast and reduced-motion behavior with an accessibility tool plus manual review.
- [ ] Verify actual image content, honest useful alt or decorative empty alt, intrinsic dimensions, responsive sizes and no keyword/city stuffing; check social images and remote gallery failures.
- [ ] Confirm primary hero/LCP media is not lazy-loaded, below-fold media is lazy, homepage uses curated gallery/review/blog subsets, article cards use thumbnails and `/our-work/` does not fetch/render every full-resolution asset initially.
- [ ] Measure representative homepage, service, city, Work, Contact, Blog hub and article pages for LCP, CLS, INP, transferred bytes, request count, image decoding, fonts, JS/hydration, animation and third-party scripts; compare to baseline and investigate regressions.
- [ ] Re-test the original homepage hero/video, four seasons, property explorer, before/after, gallery, reviews, problem selector, estimate form, responsive layout, animations and bilingual controls to confirm preservation.
- [ ] Run the final production build/type/lint/test/browser suites supported by the repository and record exact commands/results as pass, fail, unavailable or not run; never infer a pass from historical Playwright artifacts.

## Final Phase 1 Validation Record

- **Full-file review:** Read `plan.md` completely in bounded ranges after task insertion, then reviewed every subsequent validation-only edit; final length is 1,384 lines.
- **Prompt coverage:** Compared the completed plan line by line with `app/prompt.md` Sections 1–60. Sections A–G, preservation rules, technical/content requirements, ordered implementation workflow, automated validation, complete manual QA, and STOP gate are covered with no unresolved Phase 1 planning omission.
- **Ownership-map audit:** Automated count found exactly 29 Section E URL rows; manual comparison confirmed the exact homepage, Services hub + 10 services, Commercial, Service Areas hub + four cities, four company/trust/contact pages, Blog hub + six articles, exact keyword ownership, titles, H1s, descriptions, schema, parents, and inbound/outbound links. `/service-areas/des-moines-ia/` is explicitly prohibited.
- **Task-structure audit:** Automated counts found 39 sequential task headings and exactly 39 occurrences of each required field: Status, Objective, Why It Is Needed, Dependencies, Files Involved, Implementation Details, SEO Impact, Edge Cases, Validation, Tests, and Definition of Done. All 39 statuses are `[ ]` Not started; no task placeholder or in-progress/completed implementation status remains.
- **Blog audit:** `/blog/`, all six exact initial articles, individual research/source requirements, content model, article schema, image/date/author safeguards, publishing workflow, sitemap behavior, commercial-intent separation, bidirectional service links, pillar links, tests, and post-deployment source review are covered.
- **GA4 and manual-actions audit:** All five required events, confirmed-delivery-only lead trigger, duplicate prevention, honeypot/failure behavior, PII allowlists, native contact links, Enhanced Measurement/consent review, production-only environment gate, mocked tests, DebugView/Realtime, key-event decisions, custom dimensions, acquisition reporting, Search Console steps, and exact Google Business Profile UTM action are covered.
- **Preservation audit:** Only `plan.md` was edited. `app/prompt.md` remained read-only; no application code, dependency, test, configuration, lockfile, asset, production system, account, staging area, commit, remote, or deployment was changed.
- **Final `git diff -- app/prompt.md plan.md`:** no output because both files are untracked; neither is represented by ordinary tracked-file diff output.
- **Final untracked-file diff review:** `git diff --no-index --stat /dev/null plan.md` reports `/dev/null => plan.md | 1384` and `1 file changed, 1384 insertions(+)`; `--numstat` reports `1384  0`. The full added file was reviewed through the complete-file pass.
- **Final `git diff --check --no-index /dev/null plan.md`:** no whitespace-error output.
- **Final `git status --short`:** exactly `?? app/prompt.md` and `?? plan.md`, matching the checkpoint and preserving both untracked files.

## Final Phase 1 Gate

- [x] All repository-state claims are labeled verified, assumed, missing, inferred, or owner-confirmation required; planned design statements are clearly prospective.
- [x] All 29 required URLs and exact ownership metadata are included.
- [x] All 39 implementation tasks contain every required field and are `[ ]` Not started.
- [x] The Blog hub, all six initial articles, source/publishing workflow, schema, sitemap and internal-link cluster are fully planned.
- [x] GA4 conversion measurement, deduplication, PII/environment safeguards, automated tests, manual Admin actions and GBP UTM attribution are fully planned.
- [x] The complete manual post-deployment QA checklist is included.
- [x] No SEO implementation or application-code change has been made.
- [x] Final git status and diff are recorded.
- [x] Phase 1 planning gate is complete; work stops pending separate authorization for one implementation task.
