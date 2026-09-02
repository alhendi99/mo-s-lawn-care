import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

import {
  HOME_WORK_LIMIT,
  OUR_WORK_INITIAL_COUNT,
  WORK_ALT_TEXT,
  WORK_BATCH_SIZE,
  getHomepageWorkRecords,
  getOurWorkRecords,
  getWorkComparisons,
  workComparisons,
  workRecords,
} from '../content/projects.ts'
import { routesById } from '../content/routes.ts'
import { analyticsEventNames } from '../lib/analytics.ts'
import { buildSitemapEntries } from '../lib/metadata.ts'
import { site } from '../lib/site.ts'
import { buildPageStructuredData } from '../lib/structured-data.ts'
import { snowRemovalService } from '../content/services/snow-removal.ts'
import { getPublishedArticles } from '../content/blog/index.ts'

const root = process.cwd()
const read = (relativePath: string) => fs.readFileSync(path.join(root, relativePath), 'utf8')
const publicPath = (src: string) => path.join(root, 'public', src.replace(/^\//, ''))
const assertWebp = (src: string) => {
  const bytes = fs.readFileSync(publicPath(src)).subarray(0, 12)
  assert.equal(bytes.subarray(0, 4).toString('ascii'), 'RIFF', `${src} is not RIFF`)
  assert.equal(bytes.subarray(8, 12).toString('ascii'), 'WEBP', `${src} is not WebP`)
}

assert.equal(workRecords.length, 92)
assert.equal(new Set(workRecords.map(({ id }) => id)).size, 92)
assert.equal(new Set(workRecords.map(({ src }) => src)).size, 92)
assert.equal(workRecords.filter(({ displayEligible }) => displayEligible).length, 89)
assert.deepEqual(
  workRecords.filter(({ displayEligible }) => !displayEligible).map(({ id }) => id),
  ['remote-gallery-018', 'remote-gallery-044', 'comparison-asset-before-02'],
)
assert.equal(workRecords.filter(({ src }) => src.startsWith('https://')).length, 68)
assert.equal(workRecords.filter(({ src }) => src.startsWith('/')).length, 24)
assert.equal(
  workRecords.filter(({ src }) => src.startsWith('https://')).every(({ src }) => new URL(src).hostname === 'lh3.googleusercontent.com'),
  true,
)
assert.equal(workRecords.every(({ width, height }) => width > 0 && height > 0), true)
assert.equal(workRecords.every(({ verifiedCity }) => verifiedCity === null), true)
assert.equal(workRecords.every(({ serviceTags }) => serviceTags.length === 0), true)
assert.equal(workRecords.every(({ imageObjectEligible }) => imageObjectEligible === false), true)
assert.equal(
  workRecords.every(({ provenance }) => provenance.authorship === 'unverified' && provenance.service === 'unverified' && provenance.city === 'unverified'),
  true,
)
for (const record of workRecords) {
  const alt = WORK_ALT_TEXT[record.altKey]
  assert(alt.en.trim() && alt.es.trim(), `Missing bilingual alt for ${record.id}`)
  assert.doesNotMatch(
    `${alt.en} ${alt.es}`,
    /Des Moines|Ankeny|Waukee|Norwalk|Altoona|customer project|completed project|proyecto del cliente|proyecto completado/i,
  )
}

assert.equal(workComparisons.length, 6)
assert.equal(getWorkComparisons('full').length, 6)
assert.equal(new Set(workComparisons.flatMap(({ beforeId, afterId }) => [beforeId, afterId])).size, 12)
assert.equal(HOME_WORK_LIMIT, 8)
assert.equal(getHomepageWorkRecords().length, 8)
assert.equal(OUR_WORK_INITIAL_COUNT, 12)
assert.equal(WORK_BATCH_SIZE, 12)
assert.equal(getOurWorkRecords().length, 89)

const optimizedMappings = [
  ['/hero-poster.webp', site.heroPoster],
  ['/seasons/summer.png', '/seasons/optimized/summer.webp'],
  ['/seasons/winter.png', '/seasons/optimized/winter.webp'],
  ['/media/gallery6.webp', '/media/optimized/gallery6.webp'],
  ['/seasons/before-after/before4.webp', '/seasons/before-after/optimized/before4.webp'],
  ['/seasons/before-after/after4.webp', '/seasons/before-after/optimized/after4.webp'],
  ['/seasons/before-after/after5.webp', '/seasons/before-after/optimized/after5.webp'],
] as const

for (const [source, derivative] of optimizedMappings) {
  assert(derivative, `Missing derivative for ${source}`)
  assert(fs.existsSync(publicPath(source)), `Original was removed: ${source}`)
  assert(fs.existsSync(publicPath(derivative)), `Derivative is missing: ${derivative}`)
  assertWebp(derivative)
  assert(
    fs.statSync(publicPath(derivative)).size < fs.statSync(publicPath(source)).size,
    `Derivative did not reduce source bytes: ${derivative}`,
  )
}

const translations = JSON.parse(read('lib/es-translations.json')) as Record<string, string>
const propertySource = read('components/property-hotspots.tsx')
assert.match(propertySource, /src="\/seasons\/optimized\/summer\.webp"/)
assert.match(propertySource, /alt=\{t\('House with a front lawn, planting beds, mature trees and a concrete driveway'\)\}/)
assert(translations['House with a front lawn, planting beds, mature trees and a concrete driveway'])

const heroSource = read('components/hero-video.tsx')
assert.equal(site.heroPoster, '/media/optimized/hero-poster.webp')
assert.match(heroSource, /<Image[\s\S]*?priority[\s\S]*?sizes="100vw"/)
assert.match(heroSource, /setTimeout\(\(\) => setVideoEnabled\(true\), 2500\)/)
assert.match(heroSource, /preload="metadata"/)
assert.doesNotMatch(heroSource, /preload="auto"/)
assert.equal(snowRemovalService.hero.image.loading, 'eager')
assert.equal(snowRemovalService.hero.image.src, '/seasons/optimized/winter.webp')

const gallerySource = read('components/GalleryClient.tsx')
const galleryServerSource = read('components/gallery.tsx')
assert.match(galleryServerSource, /slice\(0, OUR_WORK_INITIAL_COUNT\)/)
assert.match(gallerySource, /loading="lazy"/)
assert.match(gallerySource, /\(min-width: 1792px\) 436px/)
assert.match(gallerySource, /\(min-width: 1792px\) 704px/)
assert.match(gallerySource, /activeItem && activeIndex !== null/)
assert.doesNotMatch(gallerySource, /priority/)

assert.deepEqual(analyticsEventNames, [
  'generate_lead',
  'form_start',
  'form_submit_error',
  'click_to_call',
  'click_email',
])
assert.equal(buildSitemapEntries().length, 29)
assert.equal(Object.values(routesById).filter(({ publicationStatus, indexability }) => publicationStatus === 'published' && indexability === 'indexable').length, 23)
assert.equal(getPublishedArticles().length, 6)
const workGraph = buildPageStructuredData(routesById['our-work'], routesById.home)
assert.equal(workGraph['@graph'].some(({ '@type': type }) => type === 'ImageObject'), false)
assert.match(read('plan.md'), /### Task 35 — Internal Linking and Content-Cluster Audit\n\n- \*\*Status:\*\* `\[ \]` Not started/)

console.log('Task 34 media-performance validation passed: 92 governed records, 68 unchanged remote sources, 89 displayable items, 6 comparisons, bounded 8/12/12 gallery payloads, optimized local derivatives with originals preserved, deferred hero video, non-lazy primary media, 29 sitemap URLs, restrained schema/provenance, and unchanged analytics.')
