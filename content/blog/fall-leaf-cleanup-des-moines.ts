import { routesById } from '../routes.ts'
import type { PublishedBlogArticle } from '../types.ts'

const route = routesById['article-fall-leaf-cleanup-des-moines']

export const fallLeafCleanupDesMoines = {
  routeId: 'article-fall-leaf-cleanup-des-moines',
  slug: 'fall-leaf-cleanup-des-moines',
  path: route.path,
  status: 'published',
  title: route.title,
  h1: route.h1,
  description: route.description,
  primaryKeyword: route.primaryKeyword,
  secondaryKeywords: [
    'when to remove leaves from lawn',
    'how to manage leaves on lawn',
    'Des Moines yard waste leaves',
  ],
  excerpt:
    'Use leaf cover—not one guessed final date—to plan fall cleanup. When little or no grass remains visible, the layer needs attention; disposal guidance then depends on the municipality serving the property.',
  content: [
    {
      type: 'paragraph',
      content: [
        {
          text: 'Do not wait for a universal final-cleanup date. Iowa State University Extension says a leaf layer needs to be managed when little or no grass is visible. If the layer is still thin and dry, mowing it into pieces small enough to fall between the grass blades may be an option. Check the lawn again after new leaves fall instead of assuming one pass finishes the season.',
          sourceId: 'isu-leaves-on-lawn',
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      id: 'use-grass-as-trigger',
      text: 'Use the grass as the trigger',
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'The useful question is not “Is it late enough?” but “Can I still see the turf?” Iowa State explains that substantial leaf cover blocks light and interferes with the grass plants’ ability to make and store food before winter. That can contribute to lawn dieback, so a layer hiding most of the grass should not be treated like a light scatter of leaves.',
          sourceId: 'isu-leaves-on-lawn',
        },
      ],
    },
    {
      type: 'list',
      style: 'checklist',
      items: [
        'Grass is still easy to see through a thin, dry layer: consider whether the leaves can be chopped finely enough to settle between the blades.',
        'Little or no grass is visible: manage the accumulation rather than waiting for a calendar deadline.',
        'A pass leaves obvious leaf debris on top of the turf: the result has not met Iowa State’s visible-finish test yet.',
        'More leaves arrive later: reassess the new layer instead of relying on the condition from the previous cleanup.',
      ],
    },
    {
      type: 'heading',
      level: 2,
      id: 'plan-in-passes',
      text: 'Plan in passes, not around one finish line',
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'Iowa State supports two different responses to the lawn condition. Leaves can be collected and removed from the turf, or a thin, dry layer can be chopped in place. When mowing is used, the pieces should become small enough to fall between the grass blades, with very little debris visible afterward. A thick layer may need more than one pass.',
          sourceId: 'isu-leaves-on-lawn',
        },
      ],
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'That result check creates a practical sequence: inspect the cover, choose a response that fits the amount and condition, check what remains, and repeat only when later accumulation calls for it. It avoids an unsupported every-few-days rule while still addressing leaves before they obscure the lawn.',
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      id: 'city-limits-change-disposal',
      text: 'City limits change the disposal answer',
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'Lawn guidance does not decide where collected leaves may go. For a property within the City of Des Moines, start with the',
        },
        {
          text: 'current Des Moines collection page',
          href: 'https://www.mwatoday.com/collection-drop-off/des-moines/',
        },
        {
          text: 'and confirm collection details with Des Moines Public Works. Metro Waste Authority’s February 2026 program notice identifies City of Des Moines yard-waste collection as year-round and describes the current bags, stickers and cart program. Treat that as 2026 program information, not a permanent metro-wide rule.',
          sourceId: 'mwa-yard-waste-2026',
        },
      ],
    },
    {
      type: 'table',
      caption: 'Where to verify a disposal path after leaves leave the lawn',
      headers: ['Property location', 'What the evidence supports'],
      rows: [
        [
          'Within the City of Des Moines',
          'Use current City Public Works and Metro Waste Authority information. The 2026 program statement is City-specific and should be rechecked before setout or drop-off.',
        ],
        [
          'Ankeny, Waukee, Norwalk, Altoona or another metro community',
          'Check that municipality’s current official guidance. Do not apply a City of Des Moines collection statement to a different community.',
        ],
      ],
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'The City’s separate 2026 SCRUB calendar lists leaves at the City Compost Center during dated events and requires proof of City of Des Moines residency. Because SCRUB dates and conditions are annual, use the',
          sourceId: 'des-moines-scrub-2026',
        },
        {
          text: 'current official SCRUB resource',
          href: 'https://cms2.revize.com/revize/cityofdesmoines/Documents/Departments/Public%20Works/Garbage%20Recycling/SCRUB/Printable%20SCRUB%20Calendar%20for%202026%20by%20Des%20Moines%20Public%20Works.pdf?t=202602031209170',
        },
        {
          text: 'rather than carrying a 2026 date into a later season.',
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      id: 'keep-service-scope-separate',
      text: 'Keep service scope separate from official guidance',
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'Iowa State explains ways a resident can manage leaves, and municipal sources explain resident programs. Neither source establishes how Mo’s performs a service. The',
        },
        {
          text: 'Fall Cleanup & Leaf Removal service page',
          href: routesById['service-fall-cleanup-leaf-removal'].path,
        },
        {
          text: 'confirms the high-level commercial offering, but it does not publish bagging, curb placement, hauling, disposal, equipment, a fixed checklist or a turnaround promise. Use a',
        },
        {
          text: 'property estimate',
          href: routesById.contact.path,
        },
        {
          text: 'to confirm exact scope and current availability. Return to the',
        },
        {
          text: 'lawn care tips library',
          href: routesById.blog.path,
        },
        {
          text: 'for other guides after they complete source and editorial review.',
        },
      ],
    },
  ],
  sources: [
    {
      id: 'isu-leaves-on-lawn',
      title: 'Do I need to remove the leaves on my lawn?',
      publisher: 'Iowa State University Extension and Outreach — Yard and Garden',
      url: 'https://yardandgarden.extension.iastate.edu/faq/do-i-need-remove-leaves-my-lawn',
      reviewedOn: '2026-09-01',
      supportedClaimIds: [
        'leaf-cover-threshold',
        'turf-light-and-food',
        'thin-dry-mulching',
        'condition-led-sequence',
      ],
      jurisdiction: 'Iowa',
      scope: 'Home-lawn leaf management · source updated October 10, 2025',
    },
    {
      id: 'des-moines-scrub-2026',
      title: '2026 SCRUB Calendar',
      publisher: 'City of Des Moines Public Works',
      url: 'https://cms2.revize.com/revize/cityofdesmoines/Documents/Departments/Public%20Works/Garbage%20Recycling/SCRUB/Printable%20SCRUB%20Calendar%20for%202026%20by%20Des%20Moines%20Public%20Works.pdf?t=202602031209170',
      reviewedOn: '2026-09-01',
      supportedClaimIds: ['scrub-annual-resource', 'other-cities-boundary'],
      jurisdiction: 'City of Des Moines residents',
      scope: 'Dated 2026 drop-off program · not an evergreen collection rule',
    },
    {
      id: 'mwa-yard-waste-2026',
      title: 'Tag It, Bag It, or Wheel It',
      publisher: 'Metro Waste Authority',
      url: 'https://www.mwatoday.com/waste-recycling/yard-waste/news/yard-waste-collection/',
      reviewedOn: '2026-09-01',
      supportedClaimIds: ['city-program-boundary', 'other-cities-boundary'],
      jurisdiction: 'Named 2026 Compost It! participant communities; year-round statement limited to the City of Des Moines',
      scope: 'Program notice posted February 2, 2026 · recheck current instructions',
    },
    {
      id: 'mwa-des-moines',
      title: 'Des Moines',
      publisher: 'Metro Waste Authority',
      url: 'https://www.mwatoday.com/collection-drop-off/des-moines/',
      reviewedOn: '2026-09-01',
      supportedClaimIds: ['city-program-boundary'],
      jurisdiction: 'City of Des Moines',
      scope: 'Directs collection-day and yard-waste questions to Des Moines Public Works · no visible update date relied upon',
    },
  ],
  claimNotes: [
    {
      id: 'leaf-cover-threshold',
      summary: 'A leaf layer with little or no grass visible needs to be managed.',
      sourceIds: ['isu-leaves-on-lawn'],
      reviewNote: 'Observable threshold retained; no exact depth, deadline or frequency added.',
    },
    {
      id: 'turf-light-and-food',
      summary: 'Substantial leaf cover can block light and interfere with turf food production before winter, contributing to dieback.',
      sourceIds: ['isu-leaves-on-lawn'],
      reviewNote: 'No unsupported mold, disease, pest or guarantee language added.',
    },
    {
      id: 'thin-dry-mulching',
      summary: 'Mowing leaves in place fits a thin, dry layer when pieces become small enough to settle between grass blades.',
      sourceIds: ['isu-leaves-on-lawn'],
      reviewNote: 'No mower setting, equipment promise or Mo’s method inferred.',
    },
    {
      id: 'condition-led-sequence',
      summary: 'Repeated accumulation and the visible result after a pass support condition-led planning rather than one fixed final date.',
      sourceIds: ['isu-leaves-on-lawn'],
      reviewNote: 'Iowa State’s non-numeric frequency language is not converted into an exact cadence.',
    },
    {
      id: 'city-program-boundary',
      summary: 'Current 2026 program guidance identifies City of Des Moines collection as year-round and directs current questions to City Public Works.',
      sourceIds: ['mwa-yard-waste-2026', 'mwa-des-moines'],
      reviewNote: 'Explicitly presented as current 2026 City-only program information, not permanent metro law.',
    },
    {
      id: 'scrub-annual-resource',
      summary: 'The 2026 SCRUB calendar is a dated City-resident program that lists leaves at the City Compost Center.',
      sourceIds: ['des-moines-scrub-2026'],
      reviewNote: 'Annual dates are not repeated as evergreen deadlines; commercial service use is not inferred.',
    },
    {
      id: 'other-cities-boundary',
      summary: 'City of Des Moines program statements do not establish rules for other metro communities.',
      sourceIds: ['des-moines-scrub-2026', 'mwa-yard-waste-2026'],
      reviewNote: 'Ankeny, Waukee, Norwalk and Altoona are directed to their own current official guidance without inventing details.',
    },
  ],
  editorialReview: {
    owner: 'Task 32 editorial review',
    reviewedOn: '2026-09-01',
  },
  showTableOfContents: true,
  publisher: 'organization',
  relatedServicePaths: [routesById['service-fall-cleanup-leaf-removal'].path],
  relatedArticlePaths: [routesById['article-central-iowa-lawn-care-calendar'].path],
} as const satisfies PublishedBlogArticle
