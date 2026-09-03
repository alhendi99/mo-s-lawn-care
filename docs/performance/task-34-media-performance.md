# Task 34 media performance audit

## Scope and method

Task 34 measured and changed media delivery only. It did not change route ownership, publication state, schema scope, analytics, or external accounts.

Measurements used the production Next.js server on loopback in Chromium, browser cache disabled, no artificial network throttle, and a fixed observation point of `networkidle` plus 1.5 seconds. Resource bytes are `PerformanceResourceTiming.encodedBodySize`; the navigation body is included in total bytes. The same fresh-build method, routes, and `1280×800` / `390×844` viewports were used before and after. LCP and CLS are local lab signals, not field data. INP was not reliably measurable in this local run.

Representative routes were `/` and `/our-work` plus `/services/snow-removal` (largest live service hero source) and `/services/landscaping` (local hero plus media-capable work preview). Reviews and service-area pages contain no meaningful page media beyond shared identity UI. The six published articles have no approved images; the article template remains image-capable and now caps its wide-screen `sizes` value.

## Baseline inventory

- `public/`: 43 non-`.DS_Store` files, 28,856,819 bytes.
- Governed work records: 92 total, 89 display eligible, 3 intentionally excluded.
- Governed sources: 68 unique remote Google-hosted JPEG URLs and 24 local sources; no duplicate record source.
- Gallery bounds: 8 homepage items, 12 initial Our Work items, 12 per later API batch.
- Comparisons: 6 sequence-supported pairs; the broken legacy pair remains excluded.
- Provenance: 0 verified cities, 0 service-tag assignments, and 0 ImageObject-eligible records.
- Signature audit: 18 filename/signature mismatches. Five high-impact/PNG-backed `.webp` paths were replaced by correctly typed derivatives in this task. Ten local gallery files, `contact.webp`, and the two comparison-06 files remain JPEG-backed historical `.webp` names; Next/Image successfully signature-decodes and re-encodes them, and changing them showed no critical-path need after the dominant bottleneck was removed.

Meaningful placements found by the batched source inventory:

| Family | Placement | Fold/loading | Source/dimensions | Baseline delivery |
|---|---|---|---|---|
| Homepage | Hero poster/video | Above fold | local 1717×916 poster; local 1280×720 H.264 video | poster priority; video autoplay with `preload="auto"` |
| Homepage | Property explorer | Below fold | local 1672×941 | lazy; responsive Next/Image |
| Homepage | Before/after | Below fold | 3 governed pairs serialized; one pair rendered at a time | two current images lazy |
| Homepage | Curated gallery | Below fold | 8 governed items | 8 records only; card images lazy; lightbox conditional |
| Our Work | Before/after | Below introductory header | 6 governed pairs | current pair images lazy |
| Our Work | Archive | Below comparisons | 12 of 89 items initially | lazy cards; 12-item API batches; lightbox conditional |
| Service detail | Hero | Above fold | local source with known intrinsic dimensions | eager by default; Snow was the lone lazy exception |
| Landscaping | Work preview | Below fold | 3 local governed images | lazy Next/Image |
| Blog | Optional article image | none currently published | typed dimensions when present | priority template image with responsive sizing |

## Remote media audit

One bounded-concurrency HEAD pass covered all 68 unique remote sources. All 68 returned HTTP 200, `image/jpeg`, a content length, and the same `lh3.googleusercontent.com` host. Aggregate advertised source length was 18,709,407 bytes. Governed dimensions range from 572–1193 pixels wide and 580–1354 pixels high (43 landscape, 20 portrait, 5 square). URL uniqueness and existing dimension records were retained.

The URLs remain a hotlink/stability risk outside repository control. Rights/provenance for local reproduction is not established. No remote file was downloaded, copied, rehosted, replaced, or deleted.

## Provenance decisions

Observable alts continue to describe only visible lawns, houses, vegetation, snow, equipment, paths, and other scene content. The property-explorer alt was narrowed from an inferred “residential property” to an observable house/lawn/planting-bed description, with an explicit Spanish equivalent.

No derivative or loading change establishes authorship, a service performed, a city, a customer, a completion/result, a property type, a date, or a season. Those facts remain deliberately unclaimed. Project records preserve `authorship`, `service`, and `city` as unverified; `verifiedCity` remains null; service tags remain empty. The three exclusions and all six comparison relationships are unchanged.

## Changes and rationale

1. **Hero contention:** baseline homepage startup completed two video resource requests totaling 2,650,809 encoded bytes before the observation point. The priority poster remains present immediately; decorative video mounting is delayed 2.5 seconds after hydration and uses `preload="metadata"`. This removes the video from the critical observation window while preserving muted, looping, inline autoplay afterward. Reduced-motion mode never mounts the video.
2. **Active source weight/signature:** seven active local sources now use visually checked WebP derivatives. Originals remain in place. The active source set falls from 14,516,660 to 1,671,048 bytes, a reduction of 12,845,612 bytes (88.5%). Because originals are intentionally retained, the whole `public/` directory grows to 30,527,867 bytes across 50 non-`.DS_Store` files; deployment/source recoverability and active delivery are distinct measures.
3. **LCP/non-lazy protection:** the homepage poster remains a Next/Image priority preload. The Snow Removal hero now uses eager loading instead of the previous lazy override. Other service heroes remain eager by default.
4. **Responsive delivery:** the homepage property image, full/lightbox gallery, homepage carousel, and optional article image now cap or track their actual layout slots instead of advertising unnecessarily broad wide-screen slots. Below-fold cards/comparisons remain lazy; no gallery image is promoted to priority.
5. **Demand-driven payload:** homepage remains 8 gallery records; Our Work remains 12 initial records and 12-record fetches. The modal image exists only while a modal is open. No page serializes all 89 displayable records initially.

## Local derivative record

All derivatives preserve source dimensions/crop and inherit the source's existing provenance only. Visual review compared source and derivative for sharpness, color, tonal range, embedded text, crop, and comparison alignment.

| Source → derivative | Dimensions | Bytes before → after | Reduction | Visual result |
|---|---:|---:|---:|---|
| `hero-poster.webp` (actual PNG) → `media/optimized/hero-poster.webp` | 1717×916 | 882,376 → 4,002 | 99.5% | flat dark-green poster gradient preserved |
| `seasons/summer.png` → `seasons/optimized/summer.webp` | 1672×941 | 2,957,165 → 323,924 | 89.0% | foliage, lawn, house edges, and driveway preserved |
| `seasons/winter.png` → `seasons/optimized/snow-removal.webp` | 1672×941 | 2,706,302 → 247,216 | 90.9% | snow detail and light tonal range preserved |
| `media/gallery6.webp` (actual PNG) → `media/optimized/gallery6.webp` | 738×553 | 644,688 → 90,790 | 85.9% | scene and embedded capture overlay remain legible; city remains unclaimed |
| `before-after/before4.webp` (actual PNG) → `before-after/optimized/before4.webp` | 1448×1086 | 3,356,163 → 475,708 | 85.8% | vegetation, house edge, timestamp, and crop preserved |
| `before-after/after4.webp` (actual PNG) → `before-after/optimized/after4.webp` | 1448×1086 | 2,962,939 → 355,536 | 88.0% | house, cleared-ground scene, timestamp, and crop preserved |
| `before-after/after5.webp` (actual PNG) → `before-after/optimized/after5.webp` | 986×486 | 1,007,027 → 173,872 | 82.7% | yard, trees, foreground objects, and pair aspect preserved |

No source was deleted. The visually aligned comparison-04 pair was also checked in the rendered slider after both optimized responses had decoded.

## Baseline measurements

| Route/view | LCP / element | CLS | Image bytes | Video bytes / requests | Total bytes | Image / total requests | Initial gallery | JS bytes |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| `/` desktop | 136 ms / IMG logo | 0 | 5,076 | 2,650,809 / 2 | 3,114,106 | 2 / 26 | 8 | 303,986 |
| `/` mobile | 100 ms / IMG logo | 0 | 2,204 | 2,650,809 / 2 | 3,111,234 | 2 / 26 | 8 | 303,986 |
| `/our-work` desktop | 144 ms / H1 | 0 | 133,570 | 0 / 0 | 581,061 | 3 / 26 | 12 | 309,348 |
| `/our-work` mobile | 128 ms / H1 | 0 | 77,224 | 0 / 0 | 524,715 | 3 / 26 | 12 | 309,348 |
| Snow desktop | 112 ms / H1 | 0 | 45,758 | 0 / 0 | 489,411 | 2 / 25 | 0 | 304,698 |
| Snow mobile | 60 ms / IMG logo | 0 | 33,416 | 0 / 0 | 477,069 | 2 / 25 | 0 | 304,698 |
| Landscaping desktop | 144 ms / H1 | 0 | 99,994 | 0 / 0 | 545,296 | 2 / 25 | 0 | 304,698 |
| Landscaping mobile | 88 ms / IMG logo | 0 | 72,796 | 0 / 0 | 518,098 | 2 / 25 | 0 | 304,698 |

## Before/after measurements

| Route/view | LCP before → after | CLS | Image bytes before → after | Video bytes before → after | Total bytes before → after | Requests before → after | Initial gallery | JS bytes before → after |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| `/` desktop | 136 → 148 ms | 0 → 0 | 5,076 → 5,060 | 2,650,809 → 0 | 3,114,106 → 463,739 | 26 → 24 | 8 → 8 | 303,986 → 304,309 |
| `/` mobile | 100 → 140 ms | 0 → 0 | 2,204 → 2,202 | 2,650,809 → 0 | 3,111,234 → 460,881 | 26 → 24 | 8 → 8 | 303,986 → 304,309 |
| `/our-work` desktop | 144 → 76 ms | 0 → 0 | 133,570 → 133,570 | 0 → 0 | 581,061 → 581,519 | 26 → 26 | 12 → 12 | 309,348 → 309,691 |
| `/our-work` mobile | 128 → 112 ms | 0 → 0 | 77,224 → 77,224 | 0 → 0 | 524,715 → 525,173 | 26 → 26 | 12 → 12 | 309,348 → 309,691 |
| Snow desktop | 112 → 80 ms | 0 → 0 | 45,758 → 42,188 | 0 → 0 | 489,411 → 486,258 | 25 → 25 | 0 → 0 | 304,698 → 305,021 |
| Snow mobile | 60 → 84 ms | 0 → 0 | 33,416 → 31,510 | 0 → 0 | 477,069 → 475,580 | 25 → 25 | 0 → 0 | 304,698 → 305,021 |
| Landscaping desktop | 144 → 72 ms | 0 → 0 | 99,994 → 99,994 | 0 → 0 | 545,296 → 545,631 | 25 → 25 | 0 → 0 | 304,698 → 305,021 |
| Landscaping mobile | 88 → 84 ms | 0 → 0 | 72,796 → 72,796 | 0 → 0 | 518,098 → 518,433 | 25 → 25 | 0 → 0 | 304,698 → 305,021 |

The homepage total falls about 85% in the defined initial window. The video still mounts after the delay with a current source and preserves muted/loop/playsInline behavior. The 323–343 byte JS differences and sub-kilobyte route totals are expected from the small client state change and build chunk variation. LCP timing moved in both directions in this unthrottled loopback run and is treated as unstable rather than an improvement claim. The observed LCP alternated among the shared logo and H1; the decorative hero poster remains explicitly priority-preloaded and non-lazy.

## Final QA and limitations

At `1440×900`, `1280×800`, `390×844`, and `320×568`, `/` and `/our-work` passed one-H1, query-free canonical, zero horizontal overflow, Spanish alt, lazy-card, range-keyboard, modal/Escape/focus-return, 12→24 load-more, and zero console-warning/error checks. Modal close focus was verified after the animation frame. Reduced-motion mode produced no video element after three seconds. All seven derivatives returned HTTP 200 `image/webp`; representative natural dimensions were non-zero. Rendered property imagery and comparison-04 alignment passed visual review.

The sitemap remains exactly 29 canonical URLs. No route lifecycle, metadata owner, redirect, query canonical, analytics event, or schema type changed; no ImageObject was added. The analytics allowlist remains `generate_lead`, `form_start`, `form_submit_error`, `click_to_call`, and `click_email`.

Limitations: local LCP is too fast and variable to represent field CWV; INP is not reliably measurable in this lab; remote long-term stability and reproduction rights remain unknown; remaining low-impact historical extension/signature mismatches are documented rather than duplicated into new assets without a measured delivery benefit. Task 37 can reuse this method and baseline for its later system-wide comparison.
