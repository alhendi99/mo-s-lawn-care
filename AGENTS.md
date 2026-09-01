# AGENTS.md — Mo's Lawn Care SEO Implementation Rules

This file contains the persistent execution rules for Codex work in this repository.

These rules apply to every task unless the user's current task prompt explicitly overrides a rule.‎

The project-specific task requirements, SEO ownership, lifecycle status, and Definition of Done remain authoritative in `plan.md`.

---

# 1.‎ Core execution principle

Work incrementally.‎

Implement ONLY the currently authorized task.‎

Do not begin, partially implement, scaffold content for, publish, or promote the next task unless explicitly authorized.‎

Future routes may already exist in the route registry or appear as intentional crawlable links.‎ That does NOT authorize publishing them.‎

Never broaden scope merely because related work would be convenient.‎

---

# 2.‎ CONSERVE LIMIT PROTOCOL

Optimize token, reasoning, terminal-output, and tool usage aggressively without reducing correctness or validation quality.‎

Quality, evidence, SEO safety, lifecycle correctness, privacy, accessibility, and the current task's Definition of Done always take priority over token conservation.‎

## Reading strategy

Do NOT reread every large planning/history file from beginning to end for every task unless the current user prompt explicitly requires it.

For a normal task, read completely:

1. this `AGENTS.md`
2. the current `plan.md` Document Status / latest checkpoint
3. the current Task section
4. the current route's SEO ownership record
5. the immediately following task boundary
6. directly affected architecture/files
7. any exact governing section needed to resolve a dependency

For any task that researches, drafts, edits, validates, or publishes blog/article content (including Tasks 28–33 and future article work), also:

8. locate and read `blog-writing-guidance.md` completely before article research or drafting;
9. read `docs/content-publishing.md` when the task changes article publishing state or workflow;
10. read the relevant canonical service/content owner when the article links to or discusses a Mo's capability.

The blog guidance is mandatory for article-quality decisions, but it does not override the exact task scope, route ownership, metadata, or Definition of Done in `plan.md`.

Search or read other `plan.md` sections only when necessary.

Do not print entire large files to the terminal when targeted bounded reads, `rg`, `sed`, or equivalent focused inspection is sufficient.

If the current task prompt explicitly requires a complete read of a file, follow that requirement.

## Completed-task strategy

Treat existing focused validators as regression contracts for completed tasks.

Do NOT manually reread every completed service/page implementation unless:

* the current task directly depends on it,
* shared architecture affecting it is being changed,
* its validator fails,
* a provenance/ownership comparison requires it,
* or the current prompt explicitly requires inspection.

## Validation strategy

During implementation:

1. run the current task's focused validator first;
2. fix concrete failures;
3. run targeted type/build checks as appropriate;
4. allow implementation to stabilize;
5. run the complete required regression matrix once near finalization.

Do not repeatedly run the complete regression matrix after every small edit.

If a narrow late fix affects only one isolated page or viewport, rerun the affected checks first.

Repeat the complete regression matrix only if the fix changes shared behavior or could materially affect previous pages.

## Browser QA strategy

Run production browser QA after:

* focused validation passes,
* TypeScript passes,
* and the production build succeeds.

Batch browser assertions where practical.

Use screenshots only when visual inspection materially helps or when diagnosing/verifying a visual issue.

Do not create screenshots for every assertion by default.

If a visual defect is fixed narrowly, rerun the affected viewport first.

Repeat every viewport only when the fix is shared or responsive behavior could have changed broadly.

## Output strategy

Keep progress narration concise.

Report:

* meaningful findings,
* real defects,
* evidence decisions,
* scope decisions,
* validation failures,
* final results.

Do not narrate every command or trivial file read.

Avoid dumping:

* huge JSON documents,
* complete generated HTML,
* long build logs,
* entire planning files,
* full review archives,
* large image lists

when focused assertions provide the same confidence.

---

# 3. Mandatory git discipline

Before modifying a task:

```bash
git status --short
git log -3 --oneline
```

Confirm the expected clean baseline.

Never use Undo to recover from usage limits or interrupted work.

Never discard legitimate existing user/Codex work without concrete evidence that it is wrong.

Before final staging:

```bash
git status --short
git diff --check
git diff --stat
```

Inspect scope before:

```bash
git add -A
```

After staging:

```bash
git status --short
git diff --cached --stat
git diff --cached --check
```

Commit only after the current task's full Definition of Done passes.

After committing:

```bash
git status --short
git log -2 --oneline
```

Final worktree must be clean.

---

# 4. Interrupted-task / usage-limit protocol

If Codex usage expires before the task is complete:

DO NOT use Undo.

First:

```bash
git status --short
git diff --check
```

If no legitimate implementation exists and the worktree is clean:

* do not create a checkpoint.

If legitimate implementation exists but final validation/QA is incomplete:

1. preserve the implementation;
2. remove only generated current-task QA artifacts;
3. restore generated file drift if applicable;
4. run `git diff --check`;
5. create a WIP checkpoint if useful.

Use a message such as:

```text
wip: checkpoint task N <short description>
```

Do NOT use the final task commit message until the complete Definition of Done passes.

When resuming from a WIP checkpoint:

* resume;
* inspect the existing diff;
* preserve valid implementation;
* finish validation;
* amend the WIP commit to the final task commit.

Do not restart the task from scratch.

---

# 5. Generated artifacts must never enter task commits

Never commit generated QA/runtime artifacts such as:

```text
.playwright-cli/*
output/playwright/*
screenshots
browser JSON
YAML snapshots
traces
temporary logs
temporary server logs
```

Remove only artifacts generated by the current task.

Never broadly delete unrelated historical files.

If Next.js changes `next-env.d.ts` only from production type references such as:

```text
.next/types/...
```

to dev-generated references such as:

```text
.next/dev/types/...
```

restore it before staging:

```bash
git restore next-env.d.ts
```

Do not commit generated `next-env.d.ts` noise.

---

# 6. Lint policy

The repository currently has a `pnpm lint` script that invokes ESLint, but ESLint is not installed.

Do NOT install ESLint merely to make a task pass.

Run `pnpm lint` only when required to establish status.

If the repository condition remains unchanged, report exactly:

```text
Unavailable — ESLint is not installed
```

Do not add ESLint dependencies/configuration unless explicitly authorized as its own task.

---

# 7. Repository truth hierarchy

Never invent business facts.

Use this evidence priority:

1. explicit owner-confirmed facts recorded in the repository/planning documents;
2. approved authoritative route/content records;
3. verified repository implementation;
4. observable facts from inspected media;
5. attributable review text for that reviewer's individual experience only.

Never turn assumptions, filenames, image appearance, review categories, common industry practice, competitor behavior, or general knowledge into business claims.

If evidence is insufficient:

* omit the claim,
* soften the wording,
* or clearly keep the scope property/estimate-specific.

---

# 8. Business truth — permanent constraints

Mo's Lawn Care & Snow Removal Services LLC is a Service Area Business.

Approved service areas are exactly:

* Des Moines
* Ankeny
* Waukee
* Norwalk
* Altoona

Do not add additional cities without explicit owner authorization.

There is no approved public street address.

Do not publish:

* street address,
* locality-only fake address,
* replacement address,
* geo coordinates,
* latitude/longitude,
* fake branch,
* fake office,
* city-specific business entity

unless explicitly authorized by new verified evidence.

Approved visible hours:

```text
Every day, 8:00 AM–6:00 PM
```

Approved review-count display copy:

```text
170+ Google Reviews
```

Do not emit `aggregateRating` or self-serving Review schema unless explicitly authorized by a later requirement.

---

# 9. Des Moines ownership rule

Homepage `/` is the sole Des Moines city-intent owner.

Never create or publish a competing route such as:

```text
/service-areas/des-moines-ia
/service-areas/des-moines
/des-moines-ia
```

unless the governing plan is explicitly changed.

Service-area architecture must point Des Moines back to:

```text
/
```

---

# 10. Route lifecycle discipline

The route registry and `plan.md` lifecycle are authoritative.

A route may be:

* planned,
* implemented,
* published,
* indexable

independently.

Do not infer publication from the presence of:

* a link,
* a route record,
* metadata,
* a future slug,
* a task description.

Only the currently authorized task may change its intended lifecycle.

Future routes may intentionally remain branded HTTP 404 while already receiving internal links.

Do not "fix" intentional future-route 404s by implementing future tasks.

Do not add redirects for aliases unless explicitly authorized.

---

# 11. Sitemap discipline

Sitemap output must be lifecycle-derived.

Do not hardcode future URLs merely because they exist in the plan.

Only routes that are legitimately:

* implemented,
* published,
* canonical,
* indexable

belong in the sitemap.

The exact expected sitemap count and additions for the current task must come from `plan.md` / the current task prompt.

Do not store a permanent sitemap count in this file.

---

# 12. SEO ownership discipline

Every canonical route has one intended search intent owner.

Use the exact current-task:

* URL
* title
* H1
* meta description
* canonical
* primary keyword
* secondary keywords

from `plan.md`.

Do not improvise alternate SEO metadata when exact ownership is specified.

Avoid:

* keyword cannibalization,
* service/city permutation pages,
* thin aliases,
* duplicate city pages,
* duplicated page bodies.

Use internal links to distribute users to canonical owners instead of creating unnecessary pages.

---

# 13. Anti-doorway rule for city pages

City pages must not be mechanical city-name substitutions.

Shared:

* component architecture,
* content types,
* metadata machinery,
* schema machinery,
* layout primitives

are encouraged.

Mechanical duplicate prose is not.

Each city page must be independently useful while remaining factual.

Never invent uniqueness using unsupported local details such as:

* neighborhoods,
* subdivisions,
* ZIP codes,
* streets,
* landmarks,
* local businesses,
* schools,
* parks,
* demographic facts,
* soil claims,
* weather claims,
* local regulations,
* local crews,
* office locations,
* customers,
* project counts,
* response times.

Content uniqueness must come from editorial structure and useful service-selection framing, not fictional local evidence.

---

# 14. Service capability boundaries

A hub or city page must never strengthen a service beyond its canonical service page.

Canonical service records remain authoritative for capability boundaries.

Examples:

## Snow Removal

Do not infer:

* 24/7,
* emergency service,
* salting,
* deicing,
* ice management,
* sidewalk clearing,
* snow-depth triggers,
* response guarantees,
* snow hauling,
* equipment.

## Grading

Do not infer:

* drainage engineering,
* drainage correction,
* foundation work,
* excavation,
* engineered slope design,
* erosion engineering,
* water/runoff guarantees,
* equipment.

## Landscaping

Do not infer:

* landscape architecture,
* engineering,
* hardscape construction,
* irrigation,
* drainage correction,
* patios,
* retaining walls,
* excavation.

## Fertilization & Weed Control

Do not infer:

* chemical/product brands,
* formulas,
* active ingredients,
* application schedules,
* diagnostic claims,
* health/environment guarantees.

## Cleanup services

Do not infer:

* hauling,
* disposal,
* dumping,
* hazardous-material handling,
* heavy clearing,
* equipment,
* municipal handling rules.

If the current task needs a service summary, make it concise and no stronger than the canonical service content.

---

# 15. Media provenance rules

Filenames, folders, legacy labels, gallery categories, or appearance alone are not evidence of:

* service performed,
* city,
* customer,
* Mo's authorship,
* project completion,
* result,
* property type,
* date,
* season.

Before using media for a factual label distinguish:

1. observable visual facts;
2. verified provenance;
3. facts intentionally not claimed.

If city/service/project provenance is weak:

* use neutral observable labeling,
* or omit the media.

Never fabricate:

* before/after relationships,
* city attribution,
* customer attribution,
* service attribution,
* completed-project claims.

---

# 16. Review provenance rules

Review excerpts must remain verbatim from the approved repository source.

Never rewrite customer quotes into better marketing language.

A review proves only that reviewer's attributed experience.

A review does NOT automatically prove:

* company-wide capability,
* availability,
* response standards,
* schedule,
* guarantee,
* city coverage,
* contract terms,
* service inclusion.

Category labels are not substitutes for reading the review.

Do not call a review city-specific unless the approved record explicitly proves the city.

If city/service provenance is absent:

* label it general company feedback,
* or omit it.

Do not emit Review/AggregateRating schema unless explicitly authorized.

---

# 17. Schema discipline

Structured data must never be stronger than visible approved content.

Reuse the central:

* Organization
* WebSite

identity.

Do not create duplicate city/business identities.

Do not invent:

* address,
* geo,
* branch,
* price,
* rating,
* offer,
* credential,
* local office.

Use only the schema types explicitly assigned to the current route in `plan.md`.

Visible UI collections and schema ItemLists must have exact parity for:

* item count,
* names,
* order,
* positions,
* URLs.

Visible breadcrumbs and BreadcrumbList must match.

---

# 18. Spanish/language architecture

English remains the default server-rendered SEO language.

Spanish is UI language mode.

Changing language must not create:

* Spanish canonical,
* query canonical,
* duplicate indexable route.

Canonical remains query-independent.

Preserve the complete existing UTM query when switching language and change only the language parameter as established by the application.

All newly visible static content must have explicit Spanish translations.

Audit translations for accidental stronger claims than English.

Long translated content must be tested at narrow mobile widths.

---

# 19. Analytics/privacy contract

Do not change Task 4 analytics semantics unless explicitly authorized.

Exact GA4 event allowlist:

```text
generate_lead
form_start
form_submit_error
click_to_call
click_email
```

Do NOT add page/service/city-specific analytics events.

Do NOT add a generic arbitrary-event API.

Do NOT add raw `gtag` calls.

Never send:

* names,
* email,
* phone,
* free text,
* form values,
* property details,
* service selections,
* city selections,
* addresses,
* raw query strings,
* submission IDs

to GA4.

`generate_lead` remains tied only to the existing confirmed-delivery semantics.

Native `tel:` and `mailto:` behavior must not be prevented.

---

# 20. Accessibility baseline

Every page must preserve:

* exactly one H1,
* logical heading hierarchy,
* semantic breadcrumb,
* semantic/crawlable links,
* visible keyboard focus,
* working skip-link focus,
* touch-friendly controls,
* mobile menu Escape behavior,
* focus return,
* reduced-motion behavior,
* meaningful alt text,
* no hover-only required information,
* no horizontal overflow,
* no clipped translated text,
* no fixed-action/footer collision.

Do not weaken existing accessibility to satisfy design convenience.

---

# 21. Performance baseline

Prefer static/server-rendered implementation.

Do not add page-specific client JavaScript unless necessary.

Avoid unnecessary:

* fetches,
* client data fetching,
* maps,
* geolocation,
* galleries,
* full review archives,
* videos,
* dependencies,
* heavy animation.

Reuse existing architecture.

Do not install a dependency when the existing stack can solve the task cleanly.

Any shared performance change must be justified by measured evidence and regression-tested.

---

# 22. Design discipline

Extend the established site visual system.

Do not redesign a single SEO page into a separate aesthetic.

Reuse existing:

* typography,
* spacing,
* surfaces,
* navigation,
* footer,
* CTA behavior,
* motion language,
* interior-page architecture.

Introduce shared UI only when it genuinely improves reuse for current and future authorized tasks.

Do not over-componentize trivial markup.

---

# 22A. Mandatory blog/article research and writing guidance

For every task that researches, drafts, edits, validates, reviews, or publishes blog/article content, `blog-writing-guidance.md` is mandatory. This includes Tasks 28–33 and any future article work.

Before article research or drafting:

1. read this `AGENTS.md` completely;
2. read the exact current task and SEO ownership in `plan.md`;
3. locate and read `blog-writing-guidance.md` completely;
4. read `docs/content-publishing.md` when publication workflow/state is relevant;
5. inspect the relevant canonical service/content owner before making any Mo's capability statement.

`plan.md` remains authoritative for exact task scope, route ownership, title, H1, metadata, lifecycle, and Definition of Done.

`blog-writing-guidance.md` governs article research quality, source discipline, differentiation, originality, writing quality, anti-AI-slop review, and the editorial publication gate.

Treat all of its following gates as mandatory:

* Research Gate;
* Differentiation Gate;
* Editorial Quality Gate;
* STOP Rule.

Do not begin the article body until the Research Gate and Differentiation Gate pass.

For factual Iowa/local/time-sensitive claims, use the authoritative-source and claim-ledger rules in `blog-writing-guidance.md`. Competitor/SEO articles may be used for SERP or content-gap analysis only, never as factual authority.

Never fabricate first-hand experience, business capability, author/editor identity, credentials, publication/modified dates, image provenance, local rules, or certainty merely to make an article appear authoritative.

Technical success is not editorial approval. A passing validator, typecheck, build, metadata check, schema check, sitemap check, or browser QA does NOT by itself authorize changing an article to `published`.

If research quality, source support, differentiation, cannibalization safety, or the Editorial Quality Gate fails:

* keep the article unpublished;
* do not mark the article task complete;
* report the blocker honestly;
* STOP rather than filling the gap with generic AI-generated prose.

For article tasks, the final report must include the Required Article Implementation Record defined in `blog-writing-guidance.md`, including research scope, authoritative sources, claim-ledger result, user intent, differentiation/value-add, uncertainty, business-capability boundary, cannibalization review, anti-slop pass, visible sources, author/date/image decisions, internal links, schema restraint, and final publication status.

Do not duplicate the full guidance rules into individual article files or prompts when a reference to the repository guidance is sufficient; keep `blog-writing-guidance.md` as the persistent editorial policy.

---

# 23. Validation requirements

Every task should have a focused validator following established repository naming conventions.

The focused validator should protect the task's important:

* exact SEO ownership,
* lifecycle,
* route isolation,
* sitemap state,
* schema,
* visible/schema parity,
* links,
* claim boundaries,
* provenance boundaries,
* future-task isolation.

Do not weaken inherited validators simply to make a new task pass.

Lifecycle-only assertion updates are acceptable when a newly authorized route legitimately becomes published.

---

# 24. Type/build/diff checks

Before final completion, run the task-required matrix including:

```bash
pnpm exec tsc --noEmit --incremental false
pnpm build
git diff --check
```

Run the current focused validator and all regression validators required by `plan.md` or the current task prompt.

A successful build alone does NOT establish task completion.

---

# 25. Production route/source QA

Validate the current task using a production build/server, not dev behavior alone.

Check as applicable:

* HTTP status,
* no unintended redirect,
* exact rendered title,
* description,
* canonical,
* one H1,
* rendered links,
* breadcrumb,
* JSON-LD,
* sitemap,
* robots/indexability,
* query/canonical stability,
* future-route isolation.

Expected 404 requests deliberately made during route-isolation testing are not application defects.

Final valid-page context must be clean.

---

# 26. Browser QA

For SEO page tasks, use the required production browser matrix from the current task.

Unless the task specifies otherwise, established validation viewports are:

```text
1440×900
1280×800
390×844
320×568
```

Verify as applicable:

* desktop/mobile layout,
* English/Spanish,
* UTM preservation,
* title/canonical stability,
* navigation current state,
* breadcrumb,
* keyboard focus,
* skip link,
* mobile Escape/focus return,
* reduced motion,
* images,
* zero horizontal overflow,
* translated H1/CTA wrapping,
* fixed-action/footer separation,
* zero final valid-route console errors/warnings.

Do not run browser QA repeatedly before implementation is stable.

---

# 27. Final scope audit

Before committing ask:

* Did exactly the authorized route(s) change lifecycle?
* Did any future task accidentally get implemented?
* Did any future route enter the sitemap?
* Did any unsupported business/local/service claim enter visible copy?
* Did schema become stronger than visible content?
* Did media/review labeling exceed provenance?
* Did analytics change?
* Did generated artifacts enter the diff?
* Did a shared change unnecessarily alter completed pages?

If yes, correct it before committing.

---

# 28. Task completion rule

A task is complete only when its exact Definition of Done in `plan.md` passes.

Do not mark a task `[x]` simply because:

* the page renders,
* build succeeds,
* validator partially passes,
* or the route returns HTTP 200.

For blog/article tasks, do not mark the task complete or the article `published` unless the mandatory Research Gate, Differentiation Gate, and Editorial Quality Gate in `blog-writing-guidance.md` also pass. Technical SEO/build success can never override a failed editorial gate.

Only after the complete DoD passes:

* mark the current task completed,
* leave the next task not started,
* commit,
* verify clean worktree,
* STOP.

Never begin the next task automatically.

---

# 29. Final report style

Keep the final report concise but complete.

Report:

* final task status,
* exact SEO ownership,
* important architecture,
* evidence/capability decisions,
* schema,
* lifecycle/sitemap,
* route isolation,
* accessibility/browser QA,
* analytics regression,
* tests/checks,
* files changed,
* commit hash/message,
* final worktree status,
* confirmation that the next task was not started.

For blog/article tasks, also include the Required Article Implementation Record from `blog-writing-guidance.md`; keep it concise, but do not omit research/source/differentiation/editorial-gate evidence.

Do not reproduce huge terminal logs.

Do not repeat the entire task prompt.

---

# 30. Priority order

When requirements conflict, use this priority:

1. current explicit user instruction
2. current task prompt
3. `plan.md` current task / ownership / Definition of Done
4. this `AGENTS.md`
5. `blog-writing-guidance.md` for blog/article research, editorial quality, originality, sourcing, and publication gating
6. `docs/content-publishing.md` for the implemented blog publishing workflow
7. established repository architecture/conventions
8. implementation convenience

Never sacrifice factual accuracy or task isolation for speed.
