# Mo's Lawn Care — Complete SEO Architecture & Incremental Implementation Plan

You are working inside the existing repository for:

**Mo's Lawn Care and Snow Removal Services LLC**

Production website:

`https://www.moslawncaredsm.com/`

Your responsibility is to inspect the existing codebase, understand how the current website works, create a detailed implementation plan, and then — only when explicitly instructed later — implement the SEO architecture incrementally, one task at a time.

This is a production website. Preserve its existing visual identity, interactions, animations, gallery, before/after experience, estimate workflow, responsive behavior, and functioning features unless a change is explicitly required by this specification.

Do not rebuild the website from scratch simply because doing so would be easier.

---

# 1. Critical Workflow

## Phase 1 — Repository Analysis and Planning ONLY

Before changing application code:

1. Inspect the repository thoroughly.
2. Understand the architecture and technologies.
3. Understand the current routing/rendering model.
4. Understand how metadata is currently implemented.
5. Understand how content and business information are stored.
6. Inspect all existing SEO-related implementation.
7. Inspect existing language/localization behavior.
8. Inspect image/gallery implementation.
9. Inspect contact/estimate functionality.
10. Inspect tests/build/deployment configuration.
11. Create a detailed `plan.md` in the repository.
12. Present a concise summary of the plan.
13. STOP.

**Do not begin the main SEO implementation after creating `plan.md`.**

Implementation will happen later one task at a time after explicit authorization.

---

# 2. Repository Analysis Requirements

Inspect all relevant parts of the repository, including where applicable:

* project structure
* README files
* documentation
* package/dependency files
* build configuration
* framework configuration
* environment configuration
* `.env.example`
* routing
* rendering strategy
* SSR / SSG / CSR behavior
* frontend architecture
* backend/server functions
* API endpoints
* contact/estimate endpoint
* form validation
* components
* shared components
* layouts
* state management
* services
* utilities
* types/interfaces
* localization/i18n
* image handling
* asset directories
* gallery data
* review data
* business/contact information
* SEO metadata
* canonical implementation
* sitemap implementation
* robots configuration
* structured data / JSON-LD
* Open Graph metadata
* Twitter metadata
* error routes / 404 behavior
* tests
* lint configuration
* formatting configuration
* CI/CD
* hosting/deployment configuration
* Docker configuration if applicable
* analytics
* Search Console verification if present
* existing redirects

Do not make assumptions where the answer exists in the repository.

Follow the existing project's architecture and conventions whenever reasonable.

Do not introduce a CMS, SEO library, routing library, UI framework, schema library, state-management library, or other dependency unless the existing stack genuinely requires it and the benefit is clear.

---

# 3. Current Website Context

The existing website is primarily functioning as a single long-form landing page.

The current homepage includes substantial visual content and should be treated as an asset rather than replaced.

Existing elements include:

* hero section
* seasonal service presentation
* residential/commercial messaging
* interactive property/service explorer
* before/after section
* large project gallery
* Google review presentation
* problem-based service discovery section
* estimate form
* service-area information
* contact information
* English/Spanish language controls

Known currently advertised services include:

* Mowing Service
* Aeration and Seeding
* Leaves Removal
* Snow Removal
* Fertilizing and Weed Control
* Flower Beds Maintenance
* Overgrown Yards Cleanup
* Spring Cleanup
* Fall Cleanup
* Ground Clearance
* Grading
* Landscaping

Known service areas currently shown by the site:

* Des Moines, Iowa
* Ankeny, Iowa
* Waukee, Iowa
* Norwalk, Iowa
* Altoona, Iowa

The homepage currently targets Des Moines broadly.

This new SEO architecture must turn the website into a proper multi-page local service website while retaining the strong existing homepage experience.

---

# 4. SEO Strategy

The architecture must follow this search-intent ownership model.

## Main rule

Every important search intent should have **one primary page**.

Avoid keyword cannibalization.

Do not create multiple pages that exist only to rank for tiny keyword variations.

### Homepage ownership

The homepage owns the broad intent:

`lawn care des moines ia`

Therefore:

**DO NOT create `/service-areas/des-moines-ia/`.**

That would unnecessarily compete with the homepage.

### Consolidated service intents

Keep these related services together initially:

* Aeration + Seeding / Overseeding
* Fertilization + Weed Control
* Fall Cleanup + Leaf Removal
* Overgrown Yard Cleanup + Ground Clearance

Do not initially create separate pages for every tiny service variation.

Search Console data may justify splitting them in the future.

---

# 5. Target Site Architecture

The target public URL architecture is:

```text
/
│
├── services/
│   ├── lawn-mowing/
│   ├── aeration-overseeding/
│   ├── fertilization-weed-control/
│   ├── landscaping/
│   ├── flower-bed-maintenance/
│   ├── yard-cleanup/
│   ├── spring-cleanup/
│   ├── fall-cleanup-leaf-removal/
│   ├── grading/
│   └── snow-removal/
│
├── commercial-property-services/
│
├── service-areas/
│   ├── ankeny-ia/
│   ├── waukee-ia/
│   ├── norwalk-ia/
│   └── altoona-ia/
│
├── about/
├── our-work/
├── reviews/
├── contact/
└── blog/
    ├── when-to-aerate-lawn-iowa/
    ├── best-time-to-overseed-lawn-iowa/
    ├── how-often-to-mow-lawn-iowa/
    ├── spring-lawn-cleanup-des-moines/
    ├── fall-leaf-cleanup-des-moines/
    └── central-iowa-lawn-care-calendar/
```

These are target **public URLs**.

Determine internal source-file paths only after inspecting the framework.

Do not change these public URLs merely because a different folder structure is easier.

---

# 6. Keyword Ownership Map

## Homepage `/`

### Primary keyword

`lawn care des moines ia`

### Secondary keywords

* lawn care service Des Moines
* lawn maintenance Des Moines
* lawn care company Des Moines
* residential lawn care Des Moines
* property services Des Moines

### Title

`Lawn Care & Snow Removal in Des Moines, IA | Mo's Lawn Care`

### H1

`Lawn Care & Snow Removal in Des Moines, IA`

### Meta description

`Professional lawn care, mowing, landscaping, cleanups, aeration, weed control and snow removal for homes and businesses in the Des Moines metro.`

---

## `/services/`

### Primary keyword

`lawn care services des moines ia`

### Secondary keywords

* lawn maintenance services Des Moines
* yard maintenance Des Moines
* landscaping and lawn care Des Moines
* seasonal lawn services Des Moines

### Title

`Lawn Care Services in Des Moines, IA | Mo's Lawn Care`

### H1

`Lawn Care Services for Des Moines Properties`

### Meta description

`Explore Mo's Lawn Care services in Des Moines, including mowing, aeration and seeding, weed control, landscaping, cleanups, grading and snow removal.`

---

## `/services/lawn-mowing/`

### Primary keyword

`lawn mowing des moines ia`

### Secondary keywords

* lawn mowing service Des Moines
* grass cutting service Des Moines
* residential lawn mowing Des Moines
* lawn maintenance Des Moines

### Title

`Lawn Mowing Service in Des Moines, IA | Mo's Lawn Care`

### H1

`Lawn Mowing Service in Des Moines, IA`

### Meta description

`Keep your property sharp with professional lawn mowing in Des Moines, IA. Residential and commercial service available. Request a free estimate from Mo's.`

---

## `/services/aeration-overseeding/`

### Primary keyword

`lawn aeration des moines ia`

### Secondary keywords

* aeration service Des Moines
* lawn seeding Des Moines
* overseeding Des Moines
* core aeration Des Moines
* aeration and seeding Des Moines

### Title

`Lawn Aeration & Seeding in Des Moines, IA | Mo's Lawn Care`

### H1

`Lawn Aeration & Seeding in Des Moines, IA`

### Meta description

`Improve thin or compacted lawns with aeration and seeding services in Des Moines, IA. See how Mo's can help and request a free property estimate.`

The public URL uses `aeration-overseeding` because users commonly search for overseeding, but visible copy should retain the company's existing terminology “Aeration and Seeding” where appropriate.

Do not claim that a specific overseeding process is offered unless confirmed by existing business content.

---

## `/services/fertilization-weed-control/`

### Primary keyword

`lawn fertilization des moines ia`

### Secondary keywords

* weed control Des Moines
* lawn weed control Des Moines
* fertilization service Des Moines
* lawn treatment Des Moines

### Title

`Fertilization & Weed Control in Des Moines, IA | Mo's Lawn Care`

### H1

`Lawn Fertilization & Weed Control in Des Moines, IA`

### Meta description

`Professional lawn fertilization and weed control in Des Moines, IA for healthier, cleaner-looking turf. Request a free estimate from Mo's Lawn Care.`

Do not invent chemical brands, treatment schedules, pesticide claims, application counts, guarantees, or licensing claims.

---

## `/services/landscaping/`

### Primary keyword

`landscaping des moines ia`

### Secondary keywords

* landscaping services Des Moines
* landscaping company Des Moines
* residential landscaping Des Moines
* landscape maintenance Des Moines

### Title

`Landscaping Services in Des Moines, IA | Mo's Lawn Care`

### H1

`Landscaping Services in Des Moines, IA`

### Meta description

`Upgrade and maintain your outdoor space with landscaping services in Des Moines, IA. View Mo's work and request a free residential or commercial estimate.`

---

## `/services/flower-bed-maintenance/`

### Primary keyword

`flower bed maintenance des moines`

### Secondary keywords

* landscape bed maintenance Des Moines
* flower bed cleanup Des Moines
* garden bed maintenance Des Moines
* bed cleanup Des Moines

### Title

`Flower Bed Maintenance in Des Moines, IA | Mo's Lawn Care`

### H1

`Flower Bed Maintenance in Des Moines, IA`

### Meta description

`Keep flower beds clean and maintained with professional bed care in Des Moines, IA. Request a free estimate from Mo's Lawn Care for your property.`

---

## `/services/yard-cleanup/`

### Primary keyword

`yard cleanup des moines ia`

### Secondary keywords

* yard cleanup service Des Moines
* overgrown yard cleanup Des Moines
* property cleanup Des Moines
* ground clearance Des Moines
* overgrown lawn cleanup Des Moines

### Title

`Yard Cleanup Service in Des Moines, IA | Mo's Lawn Care`

### H1

`Yard Cleanup Service in Des Moines, IA`

### Meta description

`Get overgrown yards and outdoor areas back under control with professional yard cleanup in Des Moines, IA. Contact Mo's for a free property estimate.`

This page owns:

* Overgrown Yards Cleanup
* general Yard Cleanup
* Ground Clearance

Do not create separate thin pages for those phrases initially.

---

## `/services/spring-cleanup/`

### Primary keyword

`spring cleanup des moines ia`

### Secondary keywords

* spring yard cleanup Des Moines
* spring lawn cleanup Des Moines
* seasonal yard cleanup Des Moines

### Title

`Spring Yard Cleanup in Des Moines, IA | Mo's Lawn Care`

### H1

`Spring Yard Cleanup in Des Moines, IA`

### Meta description

`Prepare your property for the growing season with spring yard cleanup in Des Moines, IA. Request a free estimate from Mo's Lawn Care.`

---

## `/services/fall-cleanup-leaf-removal/`

### Primary keyword

`leaf removal des moines ia`

### Secondary keywords

* fall cleanup Des Moines
* fall yard cleanup Des Moines
* leaf cleanup Des Moines
* leaf removal service Des Moines

### Title

`Fall Cleanup & Leaf Removal in Des Moines, IA | Mo's Lawn Care`

### H1

`Fall Cleanup & Leaf Removal in Des Moines, IA`

### Meta description

`Clear leaves and seasonal debris with fall cleanup and leaf removal in Des Moines, IA. Request a free estimate from Mo's Lawn Care.`

Do not create separate Fall Cleanup and Leaf Removal pages initially.

This page owns both intents.

---

## `/services/grading/`

### Primary keyword

`yard grading des moines ia`

### Secondary keywords

* lawn grading Des Moines
* grading service Des Moines
* property grading Des Moines
* uneven yard grading Des Moines

### Title

`Yard Grading Service in Des Moines, IA | Mo's Lawn Care`

### H1

`Yard Grading Services in Des Moines, IA`

### Meta description

`Improve uneven ground and prepare outdoor areas with yard grading services in Des Moines, IA. Tell Mo's what your property needs and get a free estimate.`

Do not claim drainage engineering, foundation correction, excavation expertise, erosion-control engineering, or similar specialized work unless verified.

---

## `/services/snow-removal/`

### Primary keyword

`snow removal des moines ia`

### Secondary keywords

* snow removal service Des Moines
* residential snow removal Des Moines
* commercial snow removal Des Moines
* driveway snow removal Des Moines

### Title

`Snow Removal Service in Des Moines, IA | Mo's Lawn Care`

### H1

`Snow Removal Service in Des Moines, IA`

### Meta description

`Reliable snow removal for residential and commercial properties in Des Moines, IA. Keep driveways and access areas clear with Mo's. Request an estimate.`

Do not claim:

* 24/7 availability
* specific snow-depth triggers
* ice management
* salting
* sidewalk clearing
* guaranteed response times

unless verified from existing business data.

---

# 7. Commercial Page

## `/commercial-property-services/`

### Primary keyword

`commercial lawn care des moines ia`

### Secondary keywords

* commercial grounds maintenance Des Moines
* commercial property maintenance Des Moines
* commercial landscaping Des Moines
* commercial lawn service Des Moines

### Title

`Commercial Lawn Care in Des Moines, IA | Mo's Lawn Care`

### H1

`Commercial Lawn Care & Property Services in Des Moines`

### Meta description

`Commercial lawn care, cleanup, landscaping and snow removal for Des Moines properties. Build a dependable property maintenance plan with Mo's Lawn Care.`

The commercial page should function as a commercial service hub.

It should NOT duplicate every service page.

---

# 8. Service Area Architecture

## `/service-areas/`

### Primary keyword

`lawn care des moines metro`

### Secondary keywords

* lawn care service areas Des Moines
* lawn care near Des Moines
* Des Moines metro lawn service

### Title

`Lawn Care Service Areas Near Des Moines, IA | Mo's Lawn Care`

### H1

`Lawn Care Across the Des Moines Metro`

### Meta description

`Mo's Lawn Care serves Des Moines, Ankeny, Waukee, Norwalk and Altoona with lawn care, landscaping, seasonal cleanups and snow removal.`

This page should link to:

* Homepage → Des Moines
* Ankeny
* Waukee
* Norwalk
* Altoona

Do not add cities not currently confirmed as service areas.

---

# 9. Ankeny Location Page

## `/service-areas/ankeny-ia/`

### Primary keyword

`lawn care ankeny ia`

### Secondary keywords

* lawn service Ankeny IA
* lawn mowing Ankeny
* landscaping Ankeny
* yard cleanup Ankeny
* snow removal Ankeny

### Title

`Lawn Care in Ankeny, IA | Mo's Lawn Care`

### H1

`Lawn Care Services in Ankeny, IA`

### Meta description

`Professional lawn care in Ankeny, IA, including mowing, landscaping, seasonal cleanups, aeration, weed control and snow removal. Get a free estimate.`

---

# 10. Waukee Location Page

## `/service-areas/waukee-ia/`

### Primary keyword

`lawn care waukee ia`

### Secondary keywords

* lawn service Waukee IA
* lawn mowing Waukee
* landscaping Waukee
* yard cleanup Waukee
* snow removal Waukee

### Title

`Lawn Care in Waukee, IA | Mo's Lawn Care`

### H1

`Lawn Care Services in Waukee, IA`

### Meta description

`Professional lawn care in Waukee, IA, including mowing, landscaping, seasonal cleanups, aeration, weed control and snow removal. Get a free estimate.`

---

# 11. Norwalk Location Page

## `/service-areas/norwalk-ia/`

### Primary keyword

`lawn care norwalk ia`

### Secondary keywords

* lawn service Norwalk IA
* lawn mowing Norwalk
* landscaping Norwalk
* yard cleanup Norwalk
* snow removal Norwalk

### Title

`Lawn Care in Norwalk, IA | Mo's Lawn Care`

### H1

`Lawn Care Services in Norwalk, IA`

### Meta description

`Professional lawn care in Norwalk, IA, including mowing, landscaping, seasonal cleanups, aeration, weed control and snow removal. Get a free estimate.`

---

# 12. Altoona Location Page

## `/service-areas/altoona-ia/`

### Primary keyword

`lawn care altoona ia`

### Secondary keywords

* lawn service Altoona IA
* lawn mowing Altoona
* landscaping Altoona
* yard cleanup Altoona
* snow removal Altoona

### Title

`Lawn Care in Altoona, IA | Mo's Lawn Care`

### H1

`Lawn Care Services in Altoona, IA`

### Meta description

`Professional lawn care in Altoona, IA, including mowing, landscaping, seasonal cleanups, aeration, weed control and snow removal. Get a free estimate.`

---

# 13. Critical Location-Page Rules

These four city pages must NOT become doorway pages.

Do not generate the same page four times and replace the city name.

Each location page must have useful, independently readable content.

However:

**Do not invent local projects, customer counts, neighborhoods, testimonials, local crews, addresses, response times, or other facts merely to make the content unique.**

Use only:

* confirmed service availability
* existing business information
* actual project data
* actual review data
* actual gallery metadata
* factual content already present in the repository
* safely written location-specific wording

If gallery images or reviews have no reliable city metadata:

Do NOT write things like:

`Our recent Ankeny project`

or:

`An Ankeny homeowner said...`

Instead use general wording.

Never add fake addresses to city pages.

Mo's is one business serving multiple areas, not five invented physical locations.

---

# 14. About Page

## `/about/`

### Primary keyword

`mo's lawn care des moines`

### Secondary keywords

* lawn care company Des Moines
* local lawn care company Des Moines
* Mo's Lawn Care Iowa

### Title

`About Mo's Lawn Care | Des Moines, IA`

### H1

`About Mo's Lawn Care`

### Meta description

`Learn about Mo's Lawn Care and Snow Removal Services LLC, the team helping residential and commercial properties across the Des Moines metro.`

Do not invent:

* founding year
* employee count
* licenses
* awards
* certifications
* insurance status
* family-owned status
* number of properties served

unless repository content or approved business information confirms them.

---

# 15. Our Work / Gallery Page

## `/our-work/`

### Primary keyword

`lawn care projects des moines`

### Secondary keywords

* landscaping projects Des Moines
* lawn care before and after Des Moines
* lawn care gallery Des Moines
* yard cleanup before after

### Title

`Lawn Care & Landscaping Projects in Des Moines | Mo's`

### H1

`Lawn Care & Landscaping Work Across the Des Moines Metro`

### Meta description

`See lawn care, landscaping, cleanup and snow removal work from Mo's across the Des Moines metro, including before-and-after property transformations.`

Reuse the existing gallery rather than creating a second independent image dataset.

Preserve existing before/after functionality where reasonable.

---

# 16. Reviews Page

## `/reviews/`

### Primary keyword

`mo's lawn care reviews`

### Secondary keywords

* lawn care reviews Des Moines
* Mo's Lawn Care Des Moines reviews
* snow removal reviews Des Moines

### Title

`Mo's Lawn Care Reviews | Des Moines, IA`

### H1

`What Customers Say About Mo's Lawn Care`

### Meta description

`Read customer feedback about Mo's Lawn Care and Snow Removal Services LLC in the Des Moines metro, from mowing and cleanup to snow removal.`

The existing website already organizes reviews by themes/categories.

Reuse this work.

Examples of existing categories may include:

* lawn mowing
* work quality
* speed/punctuality
* customer service
* snow removal
* cleanup
* communication
* professionalism
* value

Do not duplicate hundreds of reviews unnecessarily in the initial HTML payload.

---

# 17. Contact Page

## `/contact/`

### Primary keyword

`lawn care estimate des moines`

### Secondary keywords

* lawn care quote Des Moines
* free lawn estimate Des Moines
* contact Mo's Lawn Care

### Title

`Contact Mo's Lawn Care | Free Estimate in Des Moines, IA`

### H1

`Request a Free Property Estimate`

### Meta description

`Tell Mo's Lawn Care what your Des Moines-area property needs. Request a free estimate for mowing, landscaping, cleanup, lawn treatments or snow removal.`

Reuse the existing contact/estimate infrastructure.

Do not unnecessarily rebuild backend submission logic.

The form must also support accurate GA4 lead measurement as defined later in this specification.

The primary lead event must fire only after the existing submission workflow confirms success.

Do not treat a submit-button click or failed request as a completed lead.

---

# 18. Homepage Content Architecture

Do not destroy the existing homepage design.

Reorganize and enhance it for SEO.

Target structure:

## Section 1 — Hero

H1:

`Lawn Care & Snow Removal in Des Moines, IA`

Supporting copy should clearly establish:

* what Mo's does
* Des Moines location
* residential + commercial service
* free-estimate CTA

Primary CTA:

`Get a Free Estimate`

Secondary CTA:

click-to-call phone number

---

## Section 2 — Core Services

Create crawlable links to the service pages.

Cards should include:

* Lawn Mowing
* Aeration & Seeding
* Fertilization & Weed Control
* Landscaping
* Flower Bed Maintenance
* Yard Cleanup
* Spring Cleanup
* Fall Cleanup & Leaf Removal
* Grading
* Snow Removal

Do not make service navigation dependent exclusively on JavaScript interaction.

Use actual `<a href>` links.

---

## Section 3 — Existing Four Seasons Experience

Preserve the current visual seasonal concept.

Convert service labels into appropriate internal links.

Spring → Spring Cleanup / Flower Bed Maintenance

Summer → Lawn Mowing / Landscaping / Yard Cleanup

Fall → Fall Cleanup & Leaf Removal

Winter → Snow Removal

Structural/root-zone services → Aeration, Fertilization/Weed Control, Grading, Yard Cleanup where appropriate.

---

## Section 4 — Existing Property Explorer

Preserve the concept.

Make each service reference crawlably link to its service page.

---

## Section 5 — Residential + Commercial

Explain that Mo's serves both property types.

Link:

`Commercial Property Services`

to:

`/commercial-property-services/`

Residential users should primarily continue through individual service pages.

Do not create a generic Residential page unless future Search Console evidence justifies it.

---

## Section 6 — Before & After

Preserve the existing functionality.

Add contextual links to `/our-work/`.

---

## Section 7 — Featured Work

Do not load the entire full-resolution gallery above the fold.

Show a curated subset.

CTA:

`View Our Work`

→ `/our-work/`

---

## Section 8 — Service Areas

Visible text:

`Serving Des Moines, Ankeny, Waukee, Norwalk and Altoona`

Link Des Moines to `/`.

Link the other cities to their dedicated location pages.

Include:

`View All Service Areas`

→ `/service-areas/`

---

## Section 9 — Reviews

Keep review trust signals.

Show a useful subset.

Link:

`Read More Customer Reviews`

→ `/reviews/`

---

## Section 10 — Latest Lawn Care Tips

Add a restrained homepage section that links to a small, useful selection of current blog articles.

Use real HTML links.

CTA:

`View All Lawn Care Tips`

→ `/blog/`

Do not load the complete blog archive on the homepage.

---

## Section 11 — Problem-Based Navigation

Preserve the existing:

“What’s going on out there?”

experience.

Map each problem to the correct service page.

Examples:

Grass out of control
→ Lawn Mowing or Yard Cleanup depending existing logic.

Weeds taking over
→ Fertilization & Weed Control.

Bare / thin spots
→ Aeration & Seeding.

Flower beds need help
→ Flower Bed Maintenance.

Leaves everywhere
→ Fall Cleanup & Leaf Removal.

Whole yard needs reset
→ Yard Cleanup.

Ground uneven
→ Grading.

Snow blocked the way
→ Snow Removal.

---

## Section 12 — Estimate CTA

Preserve the existing estimate form if appropriate.

Also link to `/contact/`.

---

# 19. Standard Service Page Template

Do not make all service pages visually identical, but build reusable architectural components where appropriate.

Each service page should generally contain:

### 1. Breadcrumb

Home → Services → Current Service

### 2. Hero

* H1
* service summary
* free-estimate CTA
* click-to-call CTA
* relevant real image

### 3. Problem / Outcome Section

Explain the user problem the service addresses.

### 4. What the Service Covers

Only mention confirmed capabilities.

Do not invent detailed inclusions.

### 5. Residential / Commercial Context

Mention whichever property types are actually supported.

### 6. Relevant Process

Only describe actual workflow.

Avoid fake multi-step processes that the business has never confirmed.

### 7. Related Services

2–4 contextual internal links.

### 8. Relevant Work / Photos

Use actual gallery content.

### 9. Relevant Customer Feedback

Use existing reviews where service categorization supports it.

### 10. Service Areas

Link to:

* homepage / Des Moines
* Ankeny
* Waukee
* Norwalk
* Altoona

Do not repeat the exact same paragraph on every service page.

### 11. FAQ Content

Include useful visible FAQs where answers can be written accurately.

Do not manufacture guarantees, pricing, schedules, or policies.

FAQ content exists for users first.

Do not assume FAQ rich-result eligibility.

### 12. Final CTA

`Request a Free Estimate`

---

# 20. Service-Specific Internal Links

## Lawn Mowing

Link contextually to:

* Aeration & Seeding
* Fertilization & Weed Control
* Yard Cleanup
* Commercial Property Services
* Our Work
* Contact

---

## Aeration & Seeding

Link to:

* Fertilization & Weed Control
* Lawn Mowing
* Spring Cleanup where relevant
* Services
* Contact

---

## Fertilization & Weed Control

Link to:

* Aeration & Seeding
* Lawn Mowing
* Services
* Contact

---

## Landscaping

Link to:

* Flower Bed Maintenance
* Grading
* Yard Cleanup
* Our Work
* Commercial Property Services
* Contact

---

## Flower Bed Maintenance

Link to:

* Landscaping
* Spring Cleanup
* Fall Cleanup & Leaf Removal
* Yard Cleanup
* Contact

---

## Yard Cleanup

Link to:

* Lawn Mowing
* Spring Cleanup
* Fall Cleanup & Leaf Removal
* Grading
* Landscaping
* Contact

---

## Spring Cleanup

Link to:

* Lawn Mowing
* Flower Bed Maintenance
* Yard Cleanup
* Landscaping
* Contact

---

## Fall Cleanup & Leaf Removal

Link to:

* Yard Cleanup
* Lawn Mowing
* Snow Removal
* Contact

---

## Grading

Link to:

* Yard Cleanup
* Landscaping
* Our Work
* Contact

---

## Snow Removal

Link to:

* Commercial Property Services
* Service Areas
* Reviews
* Contact

---

# 21. Location Page Template

Each city page should generally contain:

### Breadcrumb

Home → Service Areas → City

### Hero

Example:

`Lawn Care Services in Ankeny, IA`

### Local Service Introduction

Write useful city-specific copy.

Do not simply replace city names in a global template.

### Services Available

Crawlable cards linking to service pages.

Prioritize:

* Lawn Mowing
* Aeration & Seeding
* Fertilization & Weed Control
* Landscaping
* Yard Cleanup
* Seasonal Cleanup
* Grading
* Snow Removal

### Seasonal Property Care

Explain the company's year-round range without making unverified climate or service promises.

### Residential & Commercial

Describe supported property categories.

### Actual Work

If location metadata exists, show city-specific projects.

If not, show general Mo's work without pretending it occurred in that city.

### Reviews

If city metadata exists, use it.

Otherwise use general company reviews and label them as such.

### Related Areas

Link naturally to `/service-areas/` and selected nearby service-area pages.

### CTA

`Request a Free Estimate in [City]`

---

# 22. Internal Linking Architecture

Every indexable SEO page must have crawlable internal links.

No important page should be orphaned.

Target crawl depth:

**Three clicks or fewer from the homepage whenever practical.**

## Main navigation

Recommended high-level items:

* Services
* Service Areas
* Our Work
* Reviews
* Blog
* About
* Contact

Keep the navigation usable; do not put all ten services directly in the top-level nav if it harms UX.

A Services dropdown/menu can contain them.

## Footer

Footer should provide HTML links to:

### Services

* Lawn Mowing
* Aeration & Seeding
* Fertilization & Weed Control
* Landscaping
* Yard Cleanup
* Spring Cleanup
* Fall Cleanup & Leaf Removal
* Grading
* Snow Removal

### Service Areas

* Des Moines
* Ankeny
* Waukee
* Norwalk
* Altoona

### Company

* About
* Our Work
* Reviews
* Blog
* Contact

Do not over-optimize anchors.

Use descriptive, natural anchor text.

---

# 23. Technical SEO Requirements

Implement according to the framework's existing architecture.

Every indexable page must have:

* unique `<title>`
* unique meta description
* correct canonical
* one clear primary page heading
* semantic heading hierarchy
* crawlable internal links
* correct HTTP status
* indexable content in rendered HTML
* Open Graph metadata
* useful social image where infrastructure supports it

Do not implement:

```html
<meta name="keywords">
```

Google does not use it.

---

# 24. Canonical URLs

Every indexable page should self-canonicalize unless there is a genuine reason not to.

Use the production HTTPS domain.

Avoid:

* canonicalizing service pages to homepage
* canonicalizing city pages to homepage
* multiple competing canonical forms
* query-string duplicates

Follow existing trailing-slash conventions consistently.

The target paths shown in this specification conceptually use trailing slashes, but implementation should follow the framework/hosting platform's canonical URL behavior consistently.

---

# 25. Sitemap

Create or update the XML sitemap.

It should contain all canonical, indexable SEO URLs.

Do not include:

* redirects
* 404 pages
* duplicate URLs
* internal utility routes
* test routes
* API routes
* thank-you pages if they are intentionally noindexed
* query-string versions

Prefer automatic sitemap generation from the application's canonical route/content source rather than maintaining multiple duplicated route lists.

---

# 26. robots.txt

Ensure the production site has a valid `robots.txt`.

It should:

* allow normal crawling of public content
* avoid accidentally blocking JS/CSS required for rendering
* reference the sitemap if appropriate
* block only routes that genuinely require blocking

Do not use robots.txt as a substitute for `noindex`.

---

# 27. 404 and Redirect Behavior

Verify:

* missing pages return actual HTTP 404 status
* no soft-404 behavior
* old URLs are redirected only when an equivalent replacement exists
* redirects use permanent status where appropriate
* no redirect chains

Do not redirect every unknown URL to homepage.

---

# 28. Structured Data Architecture

Use JSON-LD unless the repository already has a strong reason to use another supported format.

Use stable `@id` identifiers so entities can reference each other.

Recommended conceptual IDs:

```text
https://www.moslawncaredsm.com/#website
https://www.moslawncaredsm.com/#organization
```

Do not blindly copy these strings into multiple independent schemas without understanding the current schema architecture.

---

# 29. Organization / Local Business Schema

First determine whether the business has a legitimate public physical business address available in approved project data.

## If a verified public address exists

Use the most appropriate subtype:

`HomeAndConstructionBusiness`

with appropriate LocalBusiness/Organization properties.

## If no public physical address exists

Do NOT invent one.

Prefer an `Organization`-based entity graph and connect services to it.

Do not create fake physical LocalBusiness entities merely to obtain LocalBusiness rich-result eligibility.

Possible properties where verified:

* `@type`
* `@id`
* `name`
* `url`
* `logo`
* `image`
* `telephone`
* `email`
* `sameAs`
* `areaServed`

Area served:

* Des Moines
* Ankeny
* Waukee
* Norwalk
* Altoona

Only add:

* `address`
* `geo`
* `openingHoursSpecification`
* `priceRange`

when confirmed.

---

# 30. Service Schema

Every real service page should have a `Service` entity.

Conceptual structure:

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "...",
  "serviceType": "...",
  "url": "...",
  "description": "...",
  "provider": {
    "@id": "https://www.moslawncaredsm.com/#organization"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Des Moines"
    },
    {
      "@type": "City",
      "name": "Ankeny"
    },
    {
      "@type": "City",
      "name": "Waukee"
    },
    {
      "@type": "City",
      "name": "Norwalk"
    },
    {
      "@type": "City",
      "name": "Altoona"
    }
  ]
}
```

Adapt structure to the application's schema architecture.

Schema content must correspond to visible page content.

---

# 31. Breadcrumb Schema

Every interior SEO page should have:

* visible breadcrumb navigation where appropriate
* `BreadcrumbList` structured data

Examples:

Home → Services → Lawn Mowing

Home → Service Areas → Ankeny

Home → About

Do not generate breadcrumb schema that disagrees with visible navigation.

---

# 32. Page-Type Schema

Use appropriate page entities where useful:

Homepage:

* WebSite
* WebPage
* Organization / approved business entity

Services index:

* CollectionPage or WebPage
* ItemList / OfferCatalog where it accurately reflects visible service links
* BreadcrumbList

Service page:

* WebPage
* Service
* BreadcrumbList

Service-area page:

* WebPage
* BreadcrumbList
* optionally an ItemList representing visible available services

Do NOT create a fake LocalBusiness for each city.

About:

* AboutPage
* Organization reference
* BreadcrumbList

Our Work:

* CollectionPage
* BreadcrumbList
* optionally selected ImageObject entities only where useful

Reviews:

* CollectionPage
* BreadcrumbList

Contact:

* ContactPage
* Organization reference
* BreadcrumbList

Blog index:

* Blog or CollectionPage
* ItemList representing the visible article cards where useful
* BreadcrumbList

Blog article:

* BlogPosting or Article
* WebPage
* BreadcrumbList
* Organization as publisher when supported by verified business data

Only include `author`, `datePublished`, `dateModified`, `image`, and similar article properties when their values are real, visible where appropriate, and maintained accurately.

Do not invent an individual author, biography, credentials, publication date, or update date.

---

# 33. Review Schema Warning

The company is displaying reviews about itself.

Do NOT add `aggregateRating` merely to try to generate self-serving review stars for the company's own LocalBusiness search result.

Do not create misleading review structured data.

Visible reviews can remain an important conversion and trust element without attempting to manipulate review rich results.

---

# 34. Business Information — Single Source of Truth

Inspect the repository for duplicated business data.

Where architecture permits, centralize:

* business name
* phone
* email
* service areas
* opening hours
* social-profile URLs
* Google review URL
* canonical domain

Avoid having these values manually duplicated across ten components.

---

# 35. Important Existing Data Conflict

Do NOT silently change business hours.

There is a known discrepancy between website business hours and external business-profile information.

Treat business hours as an item requiring verification.

Until an authoritative value is available:

* do not invent hours
* do not silently choose one source
* document the discrepancy in `plan.md`
* do not put unverified hours into structured data

Likewise, Google review counts change over time.

Do not scatter a hardcoded review count across components.

If no reliable API integration already exists, either:

1. use a central configuration value that is easy to update, or
2. avoid emphasizing an exact count throughout SEO copy.

Do not introduce a paid Google Places/API integration merely to update one review counter without explicit authorization.

---

# 36. Images and Image SEO

The current site has a substantial existing project gallery.

Reuse it.

Do not add stock photos unless explicitly required.

For every important image:

* provide meaningful dimensions
* prevent layout shift
* optimize file size
* use responsive image capabilities supported by the framework
* prefer modern formats where the existing pipeline supports them
* lazy-load below-the-fold images
* do not lazy-load the primary LCP hero image
* use descriptive filenames where changing filenames does not create unnecessary complexity
* use useful alt text

Alt text must describe the actual image.

Never write:

`Lawn mowing in Ankeny Iowa`

for an image unless the image is actually known to represent an Ankeny job.

Do not keyword-stuff alt attributes.

Decorative images should have empty alt text where appropriate.

---

# 37. Gallery Performance

Do not render all full-resolution gallery assets immediately.

Investigate:

* image sizes
* image dimensions
* gallery loading
* lazy loading
* thumbnails
* modal loading
* preload behavior

Preserve UX while reducing unnecessary initial network work.

The goal is not to remove the gallery.

The goal is to make it performant.

---

# 38. Core Web Vitals / Performance

Inspect before optimizing.

Pay particular attention to:

* LCP
* CLS
* INP
* image decoding
* hero loading
* gallery loading
* fonts
* unnecessary JavaScript
* hydration cost
* animation cost
* third-party scripts

Do not sacrifice the site's visual identity merely to chase a synthetic Lighthouse number.

Prioritize real UX.

---

# 39. Content Quality Rules

Do not keyword-stuff.

Do not generate paragraphs such as:

> If you need lawn care Des Moines IA, our lawn care Des Moines IA company offers the best lawn care Des Moines IA...

Write for humans.

Primary keyword should naturally appear in important locations such as:

* title
* H1
* introduction
* possibly one subheading
* relevant body text

Use variants naturally.

There is no required keyword density.

---

# 40. No Fake SEO Claims

Never invent:

* “#1 lawn care company”
* “best lawn care company”
* “most trusted”
* “award-winning”
* “licensed”
* “insured”
* “certified”
* “family-owned”
* “serving since XXXX”
* exact number of customers
* exact number of properties
* exact response times
* guaranteed results
* neighborhoods served
* local job examples
* employees
* equipment
* treatment formulas
* pricing
* contracts
* warranty

unless confirmed.

Production-quality SEO must be accurate.

---

# 41. City-Page Anti-Spam Rule

Do not create URL permutations such as:

```text
/ankeny-lawn-mowing/
/ankeny-aeration/
/ankeny-landscaping/
/ankeny-leaf-removal/
/ankeny-snow-removal/

/waukee-lawn-mowing/
/waukee-aeration/
...
```

at this stage.

That would quickly create dozens of potentially thin pages.

Instead:

Service pages target service + primary market.

City pages target city-wide lawn care intent.

Let Search Console evidence guide future expansion.

---

# 42. English / Spanish Functionality

The existing interface contains English/Spanish language controls.

Inspect exactly how this works.

Determine whether:

* full Spanish content currently exists
* translations are static
* translations are dynamically generated
* URLs change by language
* metadata changes
* only UI labels are translated

Do NOT automatically create dozens of Spanish SEO URLs.

If there are high-quality approved Spanish equivalents and the project already supports localized URLs properly, document a proposed multilingual architecture in `plan.md`.

If Spanish is only a UI convenience or translations are incomplete, preserve the feature but do not pretend there is a fully indexable bilingual SEO architecture.

If indexable localized URLs are eventually implemented, use correct canonical + `hreflang` relationships.

Do not implement that until the repository's current behavior is understood.

---

# 43. FAQ Strategy

Useful FAQ sections may be added to service/location pages.

However:

* FAQs must be visible
* answers must be truthful
* do not fabricate policies
* do not repeat identical FAQs everywhere
* do not add schema solely because someone expects guaranteed FAQ stars/results

Focus on usefulness, not snippet manipulation.

---

# 44. About / Trust Content

Use existing real business signals.

Potential sources inside the repository may include:

* Google review data
* company descriptions
* gallery/work history
* existing customer statements
* owner/company content
* service history

If the repository does not contain detailed company history, do not write a fictional story.

Document missing factual material in `plan.md`.

---

# 45. Open Graph and Social Metadata

Where supported by the current framework, each major page should have:

* `og:title`
* `og:description`
* `og:url`
* `og:type`
* appropriate `og:image`
* Twitter equivalent where current project supports it

Use service-relevant actual project imagery where possible.

---

# 46. Rendering Requirement

Important SEO content and metadata should be available in the rendered HTML according to the framework's strongest existing rendering strategy.

If the project supports SSR/SSG/prerendering:

Prefer it for SEO pages.

Do not unnecessarily move SEO-critical text to client-only rendering.

Do not rewrite the architecture solely for SSR if the existing framework has a different proven SEO-compatible approach.

Investigate first.

---

# 47. Accessibility

SEO work must not harm accessibility.

Maintain:

* meaningful heading structure
* keyboard navigation
* focus states
* button/link semantics
* form labels
* image alt handling
* reduced-motion behavior where already supported
* adequate interactive target semantics

Do not turn actual links into clickable `<div>` elements.

---

# 48. Contact / Estimate Conversion Rules

Every primary service/location page should provide an obvious conversion path.

Prefer existing patterns.

Examples:

* Request a Free Estimate
* Call Mo's
* Tell Us What Your Property Needs

Phone numbers should be clickable.

Do not create multiple unrelated form implementations.

Reuse the existing form and validation architecture.

---

# 48A. GA4 Analytics and Conversion Measurement

GA4 conversion measurement is part of the required implementation scope.

First inspect whether the repository already uses:

* Google Analytics 4
* Google Tag Manager
* an existing Google tag
* a consent mechanism
* analytics environment variables
* custom analytics helpers
* Vercel Analytics or another analytics provider

Do not install a second competing Google tracking method.

If GA4 or Google Tag Manager already exists, extend the existing implementation.

If neither exists, design the smallest framework-appropriate GA4 integration. Keep the Measurement ID in configuration/environment data rather than scattering it through components.

Do not invent a production Measurement ID. If the real ID is unavailable, implement configuration support where appropriate and document production activation as blocked pending the verified ID.

Do not send development, preview, test, or automated-test traffic to the production GA4 property.

Inspect GA4 Enhanced Measurement settings and any automatic form-interaction events before adding custom `form_start` behavior. Do not knowingly emit duplicate automatic and custom events for the same interaction.

## Required event model

| Event | Trigger | Conversion treatment |
| --- | --- | --- |
| `generate_lead` | Fire once only after the estimate/contact request is confirmed successful by the existing submission workflow | Mark as the primary GA4 key event/conversion |
| `form_start` | First meaningful interaction with the estimate form, once per form instance | Diagnostic funnel event, not the primary conversion |
| `form_submit_error` | Submission reaches the backend or server action but returns an actionable failure | Diagnostic event, not a conversion |
| `click_to_call` | User activates a real `tel:` link on the website | Secondary lead-intent event; optionally mark as a secondary key event after stakeholder approval |
| `click_email` | User activates a real `mailto:` link on the website | Secondary lead-intent event |

Do not fire `generate_lead`:

* on submit-button click
* on client-side validation failure
* when the backend request fails
* when a user merely views the form
* more than once for the same successful submission

The implementation must be resistant to duplicate events caused by repeated callbacks, rerenders, hydration, React Strict Mode, or double clicks where applicable.

## Event parameters

Use a small, documented, consistent parameter set where the value is available without inventing data.

Possible non-personal parameters include:

* `form_id`
* `form_name`
* `lead_type`
* `service_category`
* `page_path`
* `link_url`
* `link_text`
* `placement`
* `language`
* `city_context`

Do not send personally identifiable information to GA4.

Never send:

* customer name
* email address
* phone number
* street address
* free-text message or project details
* any complete form payload

Do not assign a monetary event value unless the business has an approved, defensible lead value.

## Link tracking behavior

Track all website `tel:` links through one reusable mechanism where the architecture permits.

Preserve normal link behavior. Analytics must not prevent or noticeably delay the phone dialer or email client.

`click_to_call` measures phone-link clicks that occur on the website. Calls initiated directly from the Google Business Profile do not pass through the website and therefore are not website GA4 events; evaluate those through Google Business Profile performance data.

## UTM attribution

GA4 should preserve and report standard UTM attribution without custom rewriting.

The recommended website link for the Google Business Profile is:

```text
https://www.moslawncaredsm.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp&utm_content=website_button
```

This external profile edit is a manual deployment/marketing task unless authorized account access is available.

Do not place the UTM version in:

* canonical tags
* the XML sitemap
* internal navigation
* structured-data entity URLs

Canonical URLs must remain clean and query-free.

## Consent, privacy, and loading

Inspect the site's current privacy and consent implementation before changing analytics behavior.

Do not make unsupported legal claims.

Do not enable advertising features, Google Signals, remarketing, or additional user-data collection without explicit authorization.

Load analytics in a framework-supported, performance-conscious manner and avoid blocking the LCP path.

## GA4 administration and verification

The repository can emit events, but some GA4 account actions are manual unless authorized access exists.

Document these steps in `plan.md`:

1. verify the production Measurement ID
2. deploy the tracking implementation
3. confirm events in GA4 Realtime and DebugView
4. mark `generate_lead` as a key event/conversion in GA4 Admin
5. decide whether `click_to_call` should also be a secondary key event
6. register only the custom event parameters that genuinely need GA4 custom dimensions
7. verify attribution under Reports → Acquisition → Traffic acquisition
8. test the Google Business Profile UTM link

Automated tests should mock or intercept the analytics transport and verify:

* one successful request produces one `generate_lead`
* a failed request produces no `generate_lead`
* validation failure produces no `generate_lead`
* phone and email links preserve their native destinations
* event payloads contain no PII or free-text form data
* tracking is disabled or redirected away from the production property in non-production environments

---

# 49. Blog / Lawn Care Tips — Required Content Cluster

The blog is part of the required initial SEO architecture, not an optional future backlog.

Public hub URL:

`/blog/`

The visible navigation label may be:

`Lawn Care Tips`

Do not create a CMS merely because the site now has a blog.

After inspecting the framework and content architecture, choose the simplest maintainable approach, such as framework-native static content, typed content data, Markdown, or MDX. Reuse an existing content system if one already exists.

Do not add a database, headless CMS, admin panel, or third-party publishing service without a demonstrated need and explicit approval.

## Blog hub ownership

### Primary keyword

`iowa lawn care tips`

### Secondary keywords

* lawn care tips Des Moines
* Central Iowa lawn care guide
* seasonal lawn care Iowa
* Iowa yard care tips

### Title

`Iowa Lawn Care Tips & Seasonal Guides | Mo's Lawn Care`

### H1

`Lawn Care Tips for Des Moines & Central Iowa`

### Meta description

`Practical lawn care and seasonal property tips for Des Moines and Central Iowa, including mowing, aeration, overseeding, cleanup and year-round planning.`

The hub should contain crawlable article cards, useful summaries, dates only when real, and natural links to relevant services.

Do not create thin category, tag, author, date, or pagination archives during the initial rollout unless enough real content exists to justify indexable archive pages.

## Initial required articles

### `/blog/when-to-aerate-lawn-iowa/`

Primary keyword:

`when to aerate lawn in iowa`

Title:

`When to Aerate Your Lawn in Iowa | Mo's Lawn Care`

H1:

`When Is the Best Time to Aerate a Lawn in Iowa?`

Meta description:

`Learn when Iowa lawns generally benefit from aeration, what signs to watch for and how aeration fits into a practical Central Iowa lawn care plan.`

Primary related service:

`/services/aeration-overseeding/`

---

### `/blog/best-time-to-overseed-lawn-iowa/`

Primary keyword:

`best time to overseed lawn in iowa`

Title:

`Best Time to Overseed a Lawn in Iowa | Mo's Lawn Care`

H1:

`What Is the Best Time to Overseed a Lawn in Iowa?`

Meta description:

`Understand the usual timing considerations for overseeding an Iowa lawn, how weather affects planning and when professional help may make sense.`

Primary related service:

`/services/aeration-overseeding/`

Do not claim Mo's provides a specific overseeding method unless confirmed.

---

### `/blog/how-often-to-mow-lawn-iowa/`

Primary keyword:

`how often to mow lawn in iowa`

Title:

`How Often Should You Mow a Lawn in Iowa? | Mo's Lawn Care`

H1:

`How Often Should You Mow Your Lawn in Iowa?`

Meta description:

`Learn what determines mowing frequency for Iowa lawns, including growth, weather and seasonal conditions, without relying on a rigid schedule.`

Primary related service:

`/services/lawn-mowing/`

---

### `/blog/spring-lawn-cleanup-des-moines/`

Primary keyword:

`spring lawn cleanup checklist des moines`

Title:

`Spring Lawn Cleanup Checklist for Des Moines Properties | Mo's`

H1:

`A Spring Lawn Cleanup Checklist for Des Moines Properties`

Meta description:

`Use this practical spring cleanup checklist to prepare a Des Moines-area yard for the growing season and identify when professional cleanup can help.`

Primary related service:

`/services/spring-cleanup/`

The article owns informational checklist intent. The service page continues to own commercial `spring cleanup des moines ia` intent.

---

### `/blog/fall-leaf-cleanup-des-moines/`

Primary keyword:

`fall leaf cleanup tips des moines`

Title:

`Fall Leaf Cleanup Tips for Des Moines Properties | Mo's`

H1:

`Fall Leaf Cleanup Tips for Des Moines Properties`

Meta description:

`Plan fall leaf cleanup for a Des Moines-area property with practical timing, organization and disposal considerations for the season.`

Primary related service:

`/services/fall-cleanup-leaf-removal/`

The article owns informational advice intent. The service page continues to own commercial leaf-removal intent.

---

### `/blog/central-iowa-lawn-care-calendar/`

Primary keyword:

`central iowa lawn care calendar`

Title:

`Central Iowa Lawn Care Calendar | Mo's Lawn Care`

H1:

`A Seasonal Lawn Care Calendar for Central Iowa`

Meta description:

`Plan mowing, cleanup, aeration and other lawn-care decisions through the seasons with a practical Central Iowa property-care calendar.`

This page acts as an informational pillar and should link naturally to the other five articles and relevant service pages.

## Blog article template

Each article should generally contain:

1. visible breadcrumb navigation
2. unique H1 and concise introduction
3. useful, scannable body sections
4. a table of contents only when article length justifies it
5. accurate Iowa-specific guidance
6. citations or a visible sources section for factual horticultural, environmental, municipal, or seasonal claims
7. contextual internal links to one or two service pages
8. contextual links to related articles
9. a restrained estimate CTA where commercially relevant
10. real publication/update information only if it can be maintained
11. BlogPosting or Article schema matching visible content
12. an actual relevant image where available

Do not turn every paragraph into a sales pitch.

## Content research and accuracy

Iowa-specific horticultural claims must be verified using reliable primary or authoritative sources, prioritizing sources such as:

* Iowa State University Extension and Outreach
* Iowa government or municipal resources
* relevant official university extension material

Do not copy source wording.

Paraphrase accurately, keep a source record, and respect copyright.

Do not invent:

* exact seasonal dates that apply every year
* legal disposal rules without checking the relevant municipality
* fertilizer or chemical prescriptions
* pesticide recommendations
* guaranteed lawn outcomes
* weather forecasts
* service capabilities not confirmed by the business

When advice depends on grass type, soil, weather, local rules, or property condition, say so clearly.

## Blog internal-link cluster

The content cluster must support commercial pages without cannibalizing them.

Required relationships include:

* Aeration timing article ↔ Aeration & Seeding service
* Overseeding timing article ↔ Aeration & Seeding service
* Mowing frequency article ↔ Lawn Mowing service
* Spring checklist article ↔ Spring Cleanup service
* Fall tips article ↔ Fall Cleanup & Leaf Removal service
* Central Iowa calendar ↔ all five supporting articles and relevant services

Relevant service pages may include a small `Helpful Resources` section linking back to the most useful blog article.

Do not use the exact same call-to-action paragraph across all articles.

## Blog images and performance

Reuse verified relevant project imagery where possible, but do not claim an image was taken in a city or season unless metadata confirms it.

Do not load full-resolution gallery images for article cards.

Use responsive thumbnails, meaningful dimensions, appropriate alt text, lazy loading below the fold, and the project's existing image optimization pipeline.

## Blog publishing and future expansion

The six specified articles are the initial required cluster.

Future articles should be selected using Search Console query data, seasonality, customer questions, and clear informational intent.

Do not mass-generate dozens of thin posts.

Document a maintainable publishing workflow in `plan.md`, including:

* how a new article is created
* required metadata fields
* validation rules
* image handling
* sitemap inclusion
* internal-link review
* source verification
* content update/review procedure

---

# 50. `plan.md` Requirements

The first repository change must be creation of:

`plan.md`

It must contain the following.

---

## Section A — Project Understanding

Explain:

* framework
* architecture
* rendering strategy
* routing strategy
* component architecture
* current homepage structure
* content/data architecture
* estimate form architecture
* gallery architecture
* blog/content architecture
* analytics and event-tracking architecture
* localization
* deployment
* existing SEO implementation

Identify important reusable components.

---

## Section B — Current SEO State

Document:

* existing routes
* current metadata system
* current title/H1 behavior
* current canonical behavior
* sitemap status
* robots status
* schema status
* internal linking
* content architecture
* image loading
* language architecture
* existing blog/content routes and publishing workflow
* GA4, Google Tag Manager, Google tag, and other analytics status
* existing form-success, phone-click, and email-click measurement
* environment-specific analytics behavior
* privacy/consent behavior relevant to analytics

Do not assume.

---

## Section C — Requirements

Translate this prompt into actual repository-specific technical requirements.

Include only applicable categories:

* routing
* UI/UX
* frontend
* backend
* metadata
* structured data
* content
* accessibility
* performance
* forms
* analytics and conversion measurement
* blog/content publishing
* validation
* testing
* deployment

---

## Section D — Current State vs Desired State

For each major area, identify:

* what exists
* what can be reused
* what is missing
* what needs modification
* what stays unchanged

---

## Section E — SEO Ownership Map

Include a table containing:

* URL
* page purpose
* primary keyword
* secondary keywords
* title
* H1
* meta description
* schema
* parent page
* important inbound internal links
* important outbound internal links

Use the specification in this prompt.

---

## Section F — Technical Design

Explain:

* routing implementation
* shared page layout
* metadata implementation
* schema implementation
* breadcrumbs
* content representation
* internal-link architecture
* business information single source of truth
* image strategy
* sitemap
* robots
* canonical strategy
* social metadata
* localization implications
* blog content model and article-template implementation
* blog research, source-record, and publishing workflow
* GA4 integration method and event ownership
* conversion/key-event configuration
* event deduplication and PII prevention
* production, preview, development, and test analytics behavior
* UTM attribution and manual Google Business Profile update

---

## Section G — File Impact

After inspecting the repository, identify files expected to be:

### Created

Explain purpose.

### Modified

Explain changes.

### Deleted

Only if genuinely necessary.

Do not invent exact repository file paths before inspection.

---

# 51. Implementation Task Structure

Break the implementation into small tasks.

Do not create one giant task called “Implement SEO.”

A likely structure might resemble the following, but adapt it to the actual repository.

### Task 1 — SEO Foundation / Shared Data

Possible scope:

* business configuration
* route configuration
* reusable metadata helpers
* canonical helpers
* schema utilities

### Task 2 — Global Technical SEO

Possible scope:

* sitemap
* robots
* canonical
* global WebSite/Organization graph
* metadata defaults

### Task 3 — Navigation & Breadcrumb Infrastructure

### Task 4 — GA4 Foundation & Conversion Measurement

Possible scope:

* existing analytics audit
* production-safe GA4 configuration
* reusable analytics helper
* `generate_lead` after confirmed form success
* `form_start` and `form_submit_error`
* website `tel:` and `mailto:` click tracking
* event deduplication
* PII-safe payload rules
* automated event tests

### Task 5 — Homepage SEO Refactor

### Task 6 — Services Index

### Task 7 — Lawn Mowing Page

### Task 8 — Aeration & Seeding Page

### Task 9 — Fertilization & Weed Control Page

### Task 10 — Landscaping Page

### Task 11 — Flower Bed Maintenance Page

### Task 12 — Yard Cleanup Page

### Task 13 — Spring Cleanup Page

### Task 14 — Fall Cleanup & Leaf Removal Page

### Task 15 — Grading Page

### Task 16 — Snow Removal Page

### Task 17 — Commercial Property Services

### Task 18 — Service Areas Index

### Task 19 — Ankeny Page

### Task 20 — Waukee Page

### Task 21 — Norwalk Page

### Task 22 — Altoona Page

### Task 23 — About

### Task 24 — Our Work

### Task 25 — Reviews

### Task 26 — Contact / Estimate Integration

### Task 27 — Blog Foundation, Article Template & Hub

Possible scope:

* `/blog/` hub
* maintainable article content model
* article metadata validation
* BlogPosting/Article schema
* breadcrumbs
* article cards
* navigation/footer integration
* sitemap integration
* publishing workflow documentation

### Task 28 — Iowa Aeration Timing Article

### Task 29 — Iowa Overseeding Timing Article

### Task 30 — Iowa Mowing Frequency Article

### Task 31 — Des Moines Spring Cleanup Checklist Article

### Task 32 — Des Moines Fall Leaf Cleanup Article

### Task 33 — Central Iowa Lawn Care Calendar Pillar Article

### Task 34 — Gallery/Image Optimization

### Task 35 — Internal Linking & Content-Cluster Audit

### Task 36 — Structured Data Validation

### Task 37 — Accessibility / Performance / SEO Validation

### Task 38 — GA4 Production Validation & Manual Account Checklist

### Task 39 — Documentation and Final Cleanup

This is an example.

Determine actual dependencies from the repository.

If some items can safely be combined without making review difficult, document why.

Do not combine all service pages into one enormous change.

---

# 52. Every Task in `plan.md` Must Include

For every implementation task:

## Status

Use:

* `[ ]` Not started
* `[~]` In progress
* `[x]` Completed
* `[!]` Blocked

## Objective

What it accomplishes.

## Why It Is Needed

Why it exists.

## Dependencies

Previous tasks required.

## Files Involved

Expected repository files/modules.

## Implementation Details

Exact changes planned.

## SEO Impact

Which target URL/search intent it affects.

## Edge Cases

Important failure scenarios.

## Validation

How correctness will be checked.

## Tests

Tests to create/update/run.

## Definition of Done

Concrete checklist.

---

# 53. Implementation Workflow After Planning

When later instructed to implement one task:

1. Read `plan.md`.
2. Identify the authorized task.
3. Change its status to `[~]`.
4. Inspect all related code.
5. Implement only that task.
6. Make only absolutely necessary supporting changes.
7. Run relevant tests/checks.
8. Fix regressions introduced by this task.
9. Update the task status.
10. Update `plan.md` if discoveries changed the design.
11. Summarize:

* changes
* files changed
* verification performed
* results
* decisions
* unresolved issues

12. STOP.

Do not begin the next task automatically.

---

# 54. Validation Requirements

Use whatever commands the repository actually supports.

Possible validation includes:

* type checking
* linting
* formatting
* unit tests
* integration tests
* end-to-end tests
* production build
* route checks
* sitemap inspection
* structured-data validation
* canonical inspection
* rendered metadata inspection
* responsive testing
* accessibility checks
* analytics event tests
* non-production analytics checks
* blog route/content validation
* source and outbound-reference review for factual blog claims

Clearly distinguish:

* checks successfully run
* checks that failed
* checks not available
* checks not run
* manual checks still required

Never claim something was tested when it was not.

---

# 55. SEO-Specific Automated Tests

Where the architecture makes this reasonable, consider tests ensuring:

* target routes exist
* target pages return successful responses/build output
* titles are unique
* primary pages have expected H1
* canonical URLs are correct
* sitemap contains expected URLs
* sitemap does not contain obvious non-indexable routes
* structured data serializes correctly
* service pages contain Service schema
* breadcrumb schema matches route hierarchy
* internal SEO route configuration has no duplicate paths
* required business data is centralized
* blog hub and all six initial article routes exist
* blog titles, H1s, descriptions, and canonicals are unique
* blog articles serialize valid BlogPosting or Article schema
* blog URLs appear in the sitemap
* informational article keywords do not replace the service-page commercial ownership map
* successful form submission emits exactly one `generate_lead`
* failed or invalid submission emits no `generate_lead`
* tracked phone and email links preserve `tel:` and `mailto:` behavior
* analytics event payloads contain no PII or free-text form data
* tests, previews, and local development do not send data to the production GA4 property

Do not build a massive custom crawler if a simpler test is sufficient.

---

# 56. Manual SEO QA Checklist

Add a checklist to `plan.md` for post-deployment verification.

It should include:

* inspect page source
* verify metadata
* verify canonical
* verify headings
* verify internal links
* verify sitemap
* verify robots
* validate structured data
* inspect mobile layout
* test estimate form
* test phone links
* test email links
* verify `generate_lead` only after confirmed successful form submission
* verify failed submissions are not counted as leads
* verify events in GA4 Realtime and DebugView
* mark `generate_lead` as a GA4 key event/conversion
* decide whether `click_to_call` is a secondary key event
* verify no PII is present in GA4 event parameters
* verify production UTM attribution for the Google Business Profile link
* inspect the blog hub and all six initial articles
* verify article sources and Iowa-specific factual claims
* verify blog-to-service and service-to-blog internal links
* verify image loading
* verify 404 behavior
* check production redirects
* submit/update sitemap in Google Search Console
* request indexing for highest-priority pages after deployment where appropriate

Search Console actions requiring account access are manual deployment steps unless the repository already integrates them.

---

# 57. Priority Order

The highest SEO priorities are:

1. technical foundation
2. GA4 foundation and lead-conversion measurement
3. homepage targeting
4. service architecture
5. service pages
6. internal linking
7. service-area pages
8. commercial page
9. trust/company pages
10. required blog foundation and initial six-article content cluster
11. image/performance improvements
12. final analytics/schema/technical QA
13. ongoing content expansion guided by Search Console and real customer questions

Do not implement the blog before the technical foundation and core commercial page architecture.

However, the blog and six initial articles are required parts of this rollout and must not be moved into an optional future backlog.

---

# 58. Preservation Rules

Preserve whenever possible:

* visual identity
* typography
* animations
* seasonal experience
* property explorer
* before/after interaction
* project gallery
* reviews
* estimate workflow
* responsive behavior
* existing real images
* contact methods
* bilingual controls
* existing backend integrations

SEO should expand the site, not turn it into a generic template.

---

# 59. No Unrelated Refactoring

Do not:

* rewrite unrelated components
* change framework
* replace styling architecture
* replace animation library
* rename everything
* restructure the entire repository
* introduce a CMS
* replace working forms
* redesign the brand

unless the repository demonstrates a genuine technical requirement.

---

# 60. Final Planning Deliverable

For this first run:

1. Inspect the repository deeply.
2. Compare it with this full SEO specification.
3. Identify implementation risks and existing reusable infrastructure.
4. Identify any genuine conflicts between this SEO map and the codebase.
5. Create `plan.md`.
6. Include all planned SEO URLs.
7. Include exact keyword ownership.
8. Include metadata targets.
9. Include schema strategy.
10. Include internal-link strategy.
11. Include ordered tasks with statuses.
12. Include validation strategy.
13. Include known business-data ambiguities.
14. Include the `/blog/` hub, all six initial article URLs, article ownership, schema, research, sourcing, and publishing workflow.
15. Include the GA4 implementation design, exact event triggers, deduplication, PII protections, automated tests, environment behavior, and manual GA4 account steps.
16. Include the Google Business Profile UTM update as a manual post-deployment action.
17. Provide a concise summary.

Then:

**STOP.**

Do not implement Task 1 yet.

Do not stage, commit, push, deploy, or change production configuration unless explicitly instructed.

The next step will be separately authorized after `plan.md` is reviewed.
