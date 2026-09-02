# Task 35 Internal Link Audit

## Methodology

The audit uses the canonical route registry plus the published-article selector as the effective public route set. A production-rendered crawler extracts real `<a href>` elements from all public pages, normalizes each internal destination to a canonical path, and separates full-page edges from links inside `<main>`. Sitemap and schema URLs are not counted as navigational edges; self-links and same-page fragments are excluded from inbound counts. Global navigation, footer, breadcrumbs and contextual links remain distinguishable by their producing architecture even though the graph summary deduplicates each source-to-destination pair.

Task 35 intentionally uses the existing route IDs, relationship records, shared service renderer, Blog relationship selector, global navigation, footer and breadcrumbs. It does not introduce a second route or CMS registry.

## Canonical route set

The effective set contains exactly 29 published, indexable canonical routes: the Homepage; Services hub and ten service owners; Commercial Property Services; Service Areas hub and four city owners; About, Our Work, Reviews and Contact; the Blog hub; and six published articles. Article publication is derived from the governed Blog selector, while non-article lifecycle is derived from the canonical route registry.

No alias, archive, tag, author, city/service combination or Des Moines landing route is part of the set. `/` remains the only Des Moines city-intent owner.

## Baseline graph

The clean `c92a3a4` production build was reused without rebuilding for the pre-change crawl.

- 29 routes returned HTTP 200 without redirects.
- 2,108 internal anchor instances produced 656 unique canonical source-to-destination edges.
- Links within `<main>` produced 299 unique contextual source-to-destination edges.
- Published orphan count: 0.
- Unreachable route count from `/`: 0.
- Maximum shortest-path depth from `/`: 2.
- Invalid, draft/unpublished, query-bearing, production-origin absolute, or redirect-dependent internal page links: 0.
- Every route had at least one non-self link inside `<main>`.

The graph was connected before Task 35 because global navigation, the service menu, footer, breadcrumbs and hubs already exposed the complete route families. The semantic service matrix audit found only the five reverse Helpful Resources edges reserved for Task 35.

## Global navigation and footer

The global header exposes Services, Service Areas, Our Work, Reviews, Blog, About and Contact as crawlable anchors. Its service disclosure contains all ten service owners. The footer retains nine restrained service links, the five approved area choices and five company routes. Des Moines resolves to `/`; only Ankeny, Waukee, Norwalk and Altoona have city routes. No extra or unverified area was found.

## Service relationship matrix

All existing commercial service-to-service and service-to-hub relationships in Section E were already rendered in relevant page content, breadcrumbs or standard service-page actions. Lawn Mowing, Aeration & Seeding, Spring Cleanup and Fall Cleanup & Leaf Removal lacked only their reserved informational reverse edges. No unrelated service or city matrix was added.

## Service ↔ article reciprocity

The published articles already linked to their canonical commercial owners. Task 35 completes only these reverse directions:

- Lawn Mowing → the Iowa mowing-frequency guide.
- Aeration & Seeding → the Iowa aeration-timing guide.
- Aeration & Seeding → the Iowa overseeding-timing guide.
- Spring Cleanup → the Des Moines spring-cleanup checklist.
- Fall Cleanup & Leaf Removal → the Des Moines fall leaf-cleanup guide.

Each Helpful Resources description explicitly keeps general informational guidance separate from Mo's service scope, schedule, availability and property-specific estimate.

## Calendar cluster

The Central Iowa calendar pillar retains exactly five child-article relationships, and each of those five articles retains its link back to the pillar. No sixth child or service-wide calendar link block was added.

## City and hub relationships

The Service Areas hub, Homepage and footer preserve inbound paths to all four city pages and the Homepage's Des Moines ownership. City pages retain their governed service links, Service Areas return path, selected related areas, general trust routes and Contact. Services, Blog, commercial and company/trust hubs remain distinct intent owners; no mechanical service-to-city matrix was introduced.

## Cannibalization and anchor review

Every changed source is a commercial service owner and every destination is its narrower informational guide. The new surrounding copy does not reproduce article timing models, checklists, municipal instructions or decision frameworks. Anchors use human-readable guide names rather than commercial exact-match phrases, and no repeated keyword-stuffed anchor was introduced. Yard Cleanup/Spring Cleanup/Fall Cleanup, Landscaping/bed/grading, hub/detail, city/service and calendar/child ownership remain distinct.

## Changes made

A single optional typed `helpfulResources` field and one server-rendered section in the shared service template provide the five missing edges. Only the four relevant service records use it. All new visible strings have explicit Spanish translations, and internal hrefs resolve through canonical route IDs.

## Final graph

The single final Task 35 production build produced 2,113 internal anchor instances, 661 unique canonical source-to-destination edges and 304 unique edges within `<main>`. The five-edge increase is exactly the authorized Helpful Resources set. Orphans remain zero, every route remains reachable from `/`, and maximum shortest-path depth remains 2. No internal canonical link uses a query, draft/unpublished destination, production-origin absolute URL, trailing-slash redirect or forbidden Des Moines/city-service variant.

Counts below deduplicate each source-to-destination pair across header, footer, breadcrumb and main content. Self-links and fragments are excluded.

| Canonical route | Inbound | Outbound | Depth |
| --- | ---: | ---: | ---: |
| `/` | 28 | 25 | 0 |
| `/services` | 28 | 22 | 1 |
| `/services/lawn-mowing` | 28 | 23 | 1 |
| `/services/aeration-overseeding` | 28 | 24 | 1 |
| `/services/fertilization-weed-control` | 28 | 22 | 1 |
| `/services/landscaping` | 28 | 22 | 1 |
| `/services/flower-bed-maintenance` | 28 | 22 | 1 |
| `/services/yard-cleanup` | 28 | 22 | 1 |
| `/services/spring-cleanup` | 28 | 23 | 1 |
| `/services/fall-cleanup-leaf-removal` | 28 | 23 | 1 |
| `/services/grading` | 28 | 22 | 1 |
| `/services/snow-removal` | 28 | 22 | 1 |
| `/commercial-property-services` | 16 | 22 | 1 |
| `/service-areas` | 28 | 21 | 1 |
| `/service-areas/ankeny-ia` | 28 | 22 | 1 |
| `/service-areas/waukee-ia` | 28 | 22 | 1 |
| `/service-areas/norwalk-ia` | 28 | 22 | 1 |
| `/service-areas/altoona-ia` | 28 | 22 | 1 |
| `/about` | 28 | 21 | 1 |
| `/our-work` | 28 | 21 | 1 |
| `/reviews` | 28 | 21 | 1 |
| `/contact` | 28 | 21 | 1 |
| `/blog` | 28 | 27 | 1 |
| `/blog/when-to-aerate-lawn-iowa` | 6 | 24 | 1 |
| `/blog/best-time-to-overseed-lawn-iowa` | 6 | 24 | 1 |
| `/blog/how-often-to-mow-lawn-iowa` | 5 | 23 | 1 |
| `/blog/spring-lawn-cleanup-des-moines` | 3 | 26 | 2 |
| `/blog/fall-leaf-cleanup-des-moines` | 3 | 23 | 2 |
| `/blog/central-iowa-lawn-care-calendar` | 6 | 27 | 2 |

The focused static contract, complete historical validator matrix, TypeScript, production build, 29-route rendered crawl and sitemap-source check pass. Representative browser checks at 1440×900 and 390×844 cover the Homepage/global chrome, Lawn Mowing, Aeration & Seeding, Ankeny, the mowing article and the calendar pillar. The four changed service sections also pass Spanish layout checks at 320×568. Visible focus, mobile Escape/focus return, UTM-preserving language switching, clean resource hrefs, one H1, no nested interactive controls, zero overflow and zero final console warnings/errors all pass.

## Limitations

The crawler proves repository-rendered connectivity, clean destinations, anchor presence and shortest-path depth on the production loopback build. It does not claim ranking, traffic, PageRank, Domain Authority, external-site health or post-deployment crawler behavior. Repeated header/footer edges are retained where structurally useful and are deduplicated only for graph metrics.
