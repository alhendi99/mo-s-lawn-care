# Task 36 Structured Data Audit

## Methodology

Task 36 used the canonical route registry, publication selectors, shared graph builders, and the same typed records that render visible breadcrumbs and collections. The focused validator builds every governed graph without an exploratory production build, checks the static contracts, and can then crawl one production server through `STRUCTURED_DATA_BASE_URL`. The final crawl reused the single Task 36 build and compared each rendered JSON-LD document with its governed builder output and the relevant visible breadcrumb or collection.

## Route-family schema contracts

| Route family | Routes | Required page-specific nodes |
| --- | ---: | --- |
| Homepage | 1 | Organization, WebSite, WebPage |
| Services hub | 1 | CollectionPage, ItemList, BreadcrumbList |
| Service detail | 10 | WebPage, Service, BreadcrumbList |
| Commercial | 1 | WebPage, ItemList, BreadcrumbList |
| Service Areas hub | 1 | CollectionPage, ItemList, BreadcrumbList |
| City | 4 | WebPage, ItemList, BreadcrumbList |
| About | 1 | AboutPage, BreadcrumbList |
| Contact | 1 | ContactPage, BreadcrumbList |
| Our Work | 1 | CollectionPage, BreadcrumbList |
| Reviews | 1 | CollectionPage, BreadcrumbList |
| Blog hub | 1 | Blog, ItemList, BreadcrumbList |
| Article | 6 | WebPage, BlogPosting, BreadcrumbList |

Every graph also contains the same central Organization and WebSite definitions. Commercial intentionally remains a WebPage, the Blog hub remains Blog, and the route-family types were not over-normalized.

## Stable IDs

- Organization: `https://www.moslawncaredsm.com/#organization`
- WebSite: `https://www.moslawncaredsm.com/#website`
- Per-page: canonical URL plus `#webpage` and, on interior routes, `#breadcrumb`
- Services: canonical service URL plus `#service`
- Articles: canonical article URL plus `#article`
- ItemLists: the existing deterministic `#service-list`, `#commercial-service-list`, `#area-list`, and `#published-guides` IDs

The final audit found 83 unique IDs. Only the two central IDs repeat across pages, with identical definitions. There were zero conflicting IDs and zero dangling references.

## Baseline findings

| Classification | Finding | Decision |
| --- | --- | --- |
| Real defect | The approved Google profile `sameAs` value carried non-semantic query parameters into all graphs. | Remove query and fragment only in JSON-LD; preserve the approved visible profile URL. |
| Real defect | One article citation carried a cache-busting query parameter into its BlogPosting node. | Emit the verified, reachable query-free resource URL in JSON-LD; preserve the visible source URL and article content. |
| Intentional restraint | No hours, ratings, reviews, offers, FAQ, article author/date/image, or broad ImageObject markup. | Keep omitted. |
| Expected external limitation | Live Schema.org and Google Rich Results validation require an authorized deployed URL. | Defer to post-deployment validation. |
| False positive avoided | Repeated central Organization and WebSite IDs are shared identities, not page-specific collisions. | Require identical definitions on all 29 pages. |

## Defects corrected

`lib/structured-data.ts` now removes search parameters and fragments from approved external URLs only when emitting JSON-LD `sameAs` and `citation` values. Visible links, article records, route ownership, metadata, and content remain unchanged. Both affected query-free URLs returned HTTP 200 during the bounded verification.

## Intentional omissions

The graphs do not add opening-hours markup merely because hours are verified. They also omit LocalBusiness, address, geo, branch, ratings, reviews, products, offers, prices, FAQ, unsupported people/credentials, article dates, article images, and unverified work images. These omissions favor repository truth over rich-result eligibility.

## Forbidden-field audit

All 29 static and rendered graphs contain zero forbidden business, location, rating, offer, price, author, date, image, or FAQ types/properties. The focused validator recursively rejects the governed forbidden set.

## Breadcrumb parity

All 28 interior routes have one BreadcrumbList built from the same route hierarchy used by the visible Breadcrumbs component. The final rendered comparison found zero name, order, position, parent, or URL mismatches. The homepage correctly has no breadcrumb node.

## ItemList parity

All eight ItemLists match their visible governed records exactly:

- Services hub: 10 services
- Commercial: 10 evidence-backed commercial service links
- Service Areas hub: five areas, with Des Moines pointing to `/`
- Four city pages: nine visible services each
- Blog hub: six published articles only

Count, name, order, position, and canonical URL parity passed in both static and rendered checks.

## Article restraint

Each of the six articles emits WebPage, BlogPosting, and BreadcrumbList nodes with the central Organization publisher and WebSite identity. No Person author, `datePublished`, `dateModified`, article image, or FAQPage is emitted. Citation URLs are absolute and query-free; source records and visible article text were not changed.

## Reviews restraint

The Reviews page remains a CollectionPage with BreadcrumbList. It emits no Review, AggregateRating, rating value, review count, or testimonial structured data. The visible `170+ Google Reviews` copy is not converted into a machine-readable rating claim.

## Media/ImageObject restraint

Our Work remains a CollectionPage with BreadcrumbList and zero ImageObject nodes. Task 24/34 provenance decisions remain intact. No article or city image markup was introduced.

## Service Area Business safety

The single central Organization remains the only provider/publisher identity. No graph contains a LocalBusiness, PostalAddress, street/locality substitute, GeoCoordinates, latitude, longitude, branch, office, or city-specific provider. Service area values remain exactly Des Moines, Ankeny, Waukee, Norwalk, and Altoona.

## URL / escaping audit

All governed IDs and URLs are absolute, canonical, query-free, and use non-trailing canonical paths except `/`; fragments occur only on stable entity IDs. All 29 rendered scripts parse as JSON. The serialization regression fixture covers Mo's apostrophe, ampersand, quotes, greater-than text, `</script>` termination text, and Unicode line separators; less-than characters are escaped before script insertion.

## Final all-29 graph result

- Routes / JSON-LD scripts: 29 / 29
- Total nodes: 139
- Unique IDs: 83
- Intentionally repeated stable IDs: 2
- Types: Organization 29; WebSite 29; WebPage 22; CollectionPage 4; BreadcrumbList 28; ItemList 8; Service 10; AboutPage 1; ContactPage 1; Blog 1; BlogPosting 6
- Parse failures: 0
- Conflicting IDs / dangling references: 0 / 0
- Forbidden types / properties: 0 / 0
- Breadcrumb / ItemList parity failures: 0 / 0
- Unsafe query URLs, address/geo occurrences, rating/review occurrences, and unsupported author/date/image occurrences: 0

## External validator limitations

Deferred — requires authorized deployed URL / post-deployment validation.

Truthful graphs such as a Reviews CollectionPage without rating markup, city WebPages without LocalBusiness, visible FAQs without FAQPage, and Our Work without ImageObject may be ineligible for rich results. That is expected and is not a correctness defect.

## Validation

- `pnpm validate:structured-data` passed statically and against the reused production server.
- Directly affected Task 2 SEO-foundation and Task 32 article validators passed.
- The complete Tasks 1–35 historical validator matrix passed once.
- `pnpm exec tsc --noEmit --incremental false` passed after correcting validator-only typing found by the first run.
- `pnpm build` passed once; that build served every rendered audit and browser check.
- The all-29 rendered JSON-LD and visible-parity crawl passed.
- Representative Playwright smoke at 1280×800 passed for `/`, one service, one city, About, Contact, Our Work, Reviews, Blog, and one article: HTTP 200, one JSON-LD script, one H1, and zero console warnings/errors or page errors on every route.
- Sitemap remains exactly 29 canonical URLs; the five-event analytics allowlist is unchanged.
- `Unavailable — ESLint is not installed`
