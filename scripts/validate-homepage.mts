import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

import { getPublishedArticles } from '../content/blog/index.ts'
import {
  getUniqueHomepageServiceRoutes,
  homepageServiceAreaRoutes,
  homepageServiceRoutes,
} from '../content/homepage.ts'
import {
  routesById,
  serviceAreaNavigationRoutes,
  serviceNavigationRoutes,
} from '../content/routes.ts'
import { problems } from '../lib/site.ts'
import { buildPageStructuredData } from '../lib/structured-data.ts'

const projectRoot = process.cwd()
const read = (relativePath: string) => fs.readFileSync(path.join(projectRoot, relativePath), 'utf8')

const home = routesById.home
assert.equal(home.title, "Lawn Care & Snow Removal in Des Moines, IA | Mo's Lawn Care")
assert.equal(home.h1, 'Lawn Care & Snow Removal in Des Moines, IA')
assert.equal(
  home.description,
  'Professional lawn care, mowing, landscaping, cleanups, aeration, weed control and snow removal for homes and businesses in the Des Moines metro.',
)
assert.equal(home.canonicalUrl, 'https://www.moslawncaredsm.com/')
assert.equal(home.primaryKeyword, 'lawn care des moines ia')

assert.equal(homepageServiceRoutes.length, 10)
assert.deepEqual(homepageServiceRoutes, serviceNavigationRoutes)
assert.equal(new Set(homepageServiceRoutes.map(({ href }) => href)).size, 10)

assert.equal(homepageServiceAreaRoutes.length, 5)
assert.deepEqual(homepageServiceAreaRoutes, serviceAreaNavigationRoutes)
assert.deepEqual(
  homepageServiceAreaRoutes.map(({ label, href }) => [label, href]),
  [
    ['Des Moines', '/'],
    ['Ankeny', '/service-areas/ankeny-ia'],
    ['Waukee', '/service-areas/waukee-ia'],
    ['Norwalk', '/service-areas/norwalk-ia'],
    ['Altoona', '/service-areas/altoona-ia'],
  ],
)

const homepageTipArticles = getPublishedArticles().slice(0, 3)
assert.equal(homepageTipArticles.length, 0)
assert.equal(new Set(homepageTipArticles.map(({ path: articlePath }) => articlePath)).size, 0)

const expectedProblemRoutes = {
  grass: ['/services/lawn-mowing', '/services/yard-cleanup'],
  weeds: ['/services/fertilization-weed-control'],
  thin: ['/services/aeration-overseeding'],
  beds: ['/services/flower-bed-maintenance', '/services/landscaping'],
  leaves: ['/services/fall-cleanup-leaf-removal'],
  reset: [
    '/services/spring-cleanup',
    '/services/fall-cleanup-leaf-removal',
    '/services/yard-cleanup',
  ],
  uneven: ['/services/grading'],
  snow: ['/services/snow-removal'],
} as const

for (const problem of problems) {
  assert.deepEqual(
    getUniqueHomepageServiceRoutes(problem.services).map(({ href }) => href),
    expectedProblemRoutes[problem.id],
    `Unexpected homepage mapping for problem: ${problem.id}`,
  )
}

const structuredData = buildPageStructuredData(home, home)
assert.deepEqual(
  structuredData['@graph'].map((node) => node['@type']),
  ['Organization', 'WebSite', 'WebPage'],
)

const sectionSources = [
  'components/hero.tsx',
  'components/homepage-services.tsx',
  'components/cross-section.tsx',
  'app/page.tsx',
  'components/homepage-commercial.tsx',
  'components/GalleryClient.tsx',
  'components/homepage-service-areas.tsx',
  'components/homepage-testimonials.tsx',
  'components/HomepageTestimonialsClient.tsx',
  'components/homepage-tips.tsx',
  'components/estimate-section.tsx',
].map(read).join('\n')

const requiredSections = [
  'hero',
  'services',
  'seasons',
  'property-explorer',
  'residential-commercial',
  'before-after',
  'featured-work',
  'service-areas',
  'reviews',
  'latest-tips',
  'problem-navigation',
  'estimate',
]

for (const section of requiredSections) {
  assert.equal(
    sectionSources.match(new RegExp(`data-home-section=["']${section}["']`, 'g'))?.length,
    1,
    `Expected exactly one homepage section marker: ${section}`,
  )
}

const pageSource = read('app/page.tsx')
assert.match(pageSource, /<Gallery limit=\{8\} \/>/)
assert.match(pageSource, /<HomepageTestimonials \/>/)
assert.doesNotMatch(pageSource, /from ['"]@\/components\/testimonials['"]/)
assert.match(read('components/homepage-testimonials.tsx'), /getHomepageReviewRecords/)

const gallerySource = read('components/gallery.tsx')
assert.match(gallerySource, /getHomepageWorkRecords\(limit\)/)
assert.match(gallerySource, /from ['"]@\/content\/projects['"]/)

const appFiles = fs.readdirSync(path.join(projectRoot, 'app'), { recursive: true })
  .map(String)
  .filter((file) => file.endsWith('.tsx') || file.endsWith('.ts'))
assert.equal(appFiles.some((file) => /(^|\/)des-moines(?:-ia)?(\/|$)/.test(file)), false)

for (const routeId of ['commercial-property-services', 'our-work', 'reviews', 'blog', 'contact'] as const) {
  assert.match(sectionSources, new RegExp(`routesById(?:\\.|\\[['"])${routeId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`))
}

console.log(
  `Homepage validation passed: ${requiredSections.length} sections, ${homepageServiceRoutes.length} service links, ${homepageServiceAreaRoutes.length} area links, ${homepageTipArticles.length} published tips, and ${problems.length} problem mappings.`,
)
