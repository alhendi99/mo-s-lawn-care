# Blog content publishing workflow

The Blog uses static TypeScript records. There is no CMS, database, Markdown/MDX parser, runtime content API, category archive, tag archive, author archive, date archive, search route, or pagination route.

This file owns the mechanical publishing workflow. `plan.md` Section E owns approved route intent and exact SEO fields, while `docs/blog-writing-guidance.md` owns the mandatory Research, Differentiation, Editorial Quality, and STOP gates. Read both completely for the authorized article task, then inspect the relevant canonical service/content owner before making any statement about what Mo's provides. Do not use this workflow to authorize a new route, article, city, or capability.

## Publication contract

`content/blog/index.ts` exports the six-record registry and `getPublishedArticles()`. The article `status` field is the only publication gate.

- `planned` reserves approved ownership without requiring invented copy, sources, secondary keywords, author, dates, or images.
- `reviewed` allows only researched secondary keywords and requires an excerpt, semantic content blocks, visible sources, claim/source notes, related paths, and an editorial review record, but it is not public. The keyword array may remain empty when research does not support an approved secondary phrase.
- `published` has the same evidence requirements as `reviewed` and becomes eligible for the Blog hub, article static params and rendering, sitemap, Homepage Latest Tips, schema, and public article relationships.

Do not add a second allowlist. A safe unpublish is a single `published` → `reviewed` transition. That removes the article from every public selector-driven surface and makes direct requests return the branded 404 again.

The canonical route registry remains the approved SEO ownership record. The Blog registry derives and validates each article's route ID, path, title, H1, description, primary keyword, and secondary keywords against that ownership record. Article lifecycle comes only from the Blog record. A registry entry can reserve a planned, indexable owner without being implemented or published; only a `published` Blog record is overlaid as implemented and published and may reach public selectors.

## Research and publication steps

1. Choose an approved, non-cannibalizing intent from the ownership map. Do not create a new article or route without approval.
2. Research every current Iowa-specific claim during the article task, never while creating a planned skeleton.
3. Use Iowa State University Extension first where it is relevant to the question.
4. Use official government or municipal sources for jurisdiction-specific rules and university Extension or similarly authoritative primary sources for technical guidance.
5. Create stable source records with the source title, publisher, canonical URL, real access/review date, supported claim IDs, and jurisdiction or scope where relevant.
6. Paraphrase source guidance. Do not copy long passages or reproduce a source's article structure.
7. Keep informational advice distinct from Mo's service capability. Sources can support general guidance; only approved business records can support claims about what Mo's offers or does.
8. Obtain owner approval before adding a business-capability statement, sales CTA claim, named author, publication or modified date, or article image/provenance claim.
9. Populate exact ownership metadata, researched secondary keywords when supported, excerpt, semantic content blocks, source citations, claim notes, related service/article paths, and any approved author/date/image fields.
10. Run `validateBlogArticles()` and `pnpm validate:blog`, complete the Research, Differentiation, Editorial Quality, and anti-slop reviews, confirm source links and claim mappings, and add explicit Spanish translations for every newly visible static string. Narrow-width QA must cover long translations.
11. Change only the article's status to `published` after the record satisfies the stronger published shape and every review is complete.
12. Confirm the article appears exactly once in the hub, static params, lifecycle-derived sitemap, Homepage Latest Tips where selected, and the Blog ItemList. The Homepage uses the first three published records in registry order. Confirm the article returns HTTP 200 with indexable metadata and a clean canonical. Never hardcode an article URL into the sitemap or a second publication list.
13. Check contextual internal links, canonical service ownership, and service/article relationships. Complete the bidirectional article/service and cluster review when the ownership map requires it. Public article-to-article links must resolve through the published selector; an unpublished related article must not render as a link.
14. Review guidance seasonally and whenever an authoritative source, municipal rule, jurisdiction, or cited recommendation changes.
15. Add or change `modifiedOn` only after a real visible content update. Preserve the real `publishedOn`; never use the code-edit date as a content date.
16. If a source or claim becomes unreliable, change the status from `published` to `reviewed` immediately, then correct and re-review the article before republishing.

## Sources and claim notes

Each `BlogSource` has a stable ID, title, publisher, canonical URL, real review date, supported claim IDs, and optional jurisdiction/scope. Sources are rendered as visible links in the article's Sources section. Inline citations point to those visible records.

Each `BlogClaimNote` has a stable ID, a concise internal summary, and one or more source IDs. Claim notes are editorial controls and are not marketing copy. The validator rejects unknown source IDs, sources with no mapped claims, duplicate IDs, and published records without content, sources, or claim notes.

Municipal requirements must name their jurisdiction and must not be generalized to all approved service areas. Weather, timing, or seasonal guidance must preserve the qualifications found in the current source. Never convert source language into a rigid guarantee or an invented Mo's method.

## Author, date, image, and schema safeguards

- Author is optional. Add it only as an `owner-confirmed` real author. Never invent an owner, staff member, team byline, credentials, or an author archive.
- `publishedOn` and `modifiedOn` are optional real dates. Do not create evergreen timestamps. `modifiedOn` requires a real publication date and a visible update.
- Image is optional. A future image requires verified provenance, honest alt text, real positive dimensions, and explicit verification. Appearance or filename is not proof of service, city, season, customer, or result.
- Publisher is always the central Organization. Do not create a second company identity, LocalBusiness, address, geo record, founder, or author-as-publisher identity.
- Published articles may emit BlogPosting with only record-backed author, dates, image, citations, and publisher fields. Planned and reviewed records emit no article metadata or Article/BlogPosting schema.
- Schema must never be stronger than visible, approved content. Do not add FAQ, Review, AggregateRating, invented location, credentials, or any field merely to pursue a rich result.

The Blog hub emits one `Blog` page node and one BreadcrumbList. Its ItemList is generated from the same visible published selector. When there are no published articles, both the visible list and schema list are empty; the ItemList is deliberately omitted because an empty schema-only collection would add no useful entity and must not leak planned URLs.

## Content and template rules

Use the shared server-rendered `BlogArticle` template. Supported blocks are paragraphs with optional citations/links, H2/H3 headings with unique stable anchors, ordered/unordered/check lists, and tables only when a table materially improves comprehension. Enable the Table of Contents only when at least two real headings justify it.

Keep calls to action restrained. Related services must be canonical published service paths. Related article paths may be stored during planning, but only published related articles render publicly. Do not add CMS/parser dependencies, runtime fetching, third-party scripts, new analytics events, fake article cards, or thin archive routes.

The exact GA4 allowlist remains `generate_lead`, `form_start`, `form_submit_error`, `click_to_call`, and `click_email`. Article slugs, titles, keywords, sources, content, and query strings must not enter analytics.
