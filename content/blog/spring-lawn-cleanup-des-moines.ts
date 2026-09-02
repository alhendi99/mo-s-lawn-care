import { routesById } from '../routes.ts'
import type { PublishedBlogArticle } from '../types.ts'

const route = routesById['article-spring-lawn-cleanup-des-moines']

export const springLawnCleanupDesMoines = {
  routeId: 'article-spring-lawn-cleanup-des-moines',
  slug: 'spring-lawn-cleanup-des-moines',
  path: route.path,
  status: 'published',
  title: route.title,
  h1: route.h1,
  description: route.description,
  primaryKeyword: route.primaryKeyword,
  secondaryKeywords: [
    'spring yard cleanup checklist Des Moines',
    'spring lawn care checklist Des Moines',
    'spring lawn cleanup tips Iowa',
  ],
  excerpt:
    'Review each part of the property before acting: clear ordinary lawn debris after snow is gone, wait on wet perennial-bed soil, observe matted turf, and keep mowing, aeration and seeding as separate decisions.',
  content: [
    {
      type: 'paragraph',
      content: [
        {
          text: 'Start with the property, not a date. After snow is gone, review what is actually on the lawn, what the turf is doing and whether perennial-bed soil is ready for work. A spring cleanup decision can be “clear,” “observe,” “wait” or “decide separately”; it does not have to turn every familiar spring chore into immediate work.',
          sourceId: 'isu-spring-garden',
        },
      ],
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'The checklist below is a property review for a resident or property manager. It is not a list of tasks included with Mo’s Spring Cleanup service.',
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      id: 'sort-before-you-work',
      text: 'Sort each area before you work',
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'Iowa State separates lawn cleanup from perennial-bed work. Its current spring guide supports clearing leaves, twigs and other winter debris from the lawn after snow has melted. In perennial beds, it warns against working wet soil and against damaging newly emerging foliage. It also notes that some beneficial and native insects overwinter in plant debris, while acknowledging that the population effect of waiting is not yet well known.',
          sourceId: 'isu-spring-garden',
        },
      ],
    },
    {
      type: 'list',
      style: 'checklist',
      items: [
        'Clear — Lawn surface: after snow is gone, remove accumulated leaves, twigs and ordinary winter debris where they are present.',
        'Observe — Turf condition: mark circular, straw-colored or wet, matted patches for a closer look instead of assuming the whole lawn needs aggressive raking.',
        'Wait — Perennial beds: postpone soil work while the soil is wet and watch for newly emerging foliage before moving debris.',
        'Consider waiting — Perennial debris: decide whether leaving spent material a little longer is practical for overwintering insects; the evidence does not create one mandatory date.',
        'Decide separately — Growing grass: let actual growth and grass type determine when mowing begins.',
        'Decide separately — Aeration or seeding: evaluate each as its own lawn-care decision rather than checking it off as cleanup.',
      ],
    },
    {
      type: 'heading',
      level: 2,
      id: 'observe-before-repair',
      text: 'Observe a turf patch before trying to repair it',
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'A brown or matted patch does not by itself establish what happened or what work it needs. Iowa State identifies snow mold as one possible explanation when circular, straw-colored patches appear as snow recedes and the grass is wet or matted. The source says damage is usually not serious and gentle raking of the affected area may help it dry. That is narrower than power-raking the property or treating every brown area as dead turf.',
          sourceId: 'isu-snow-mold',
        },
      ],
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'Watch what the patch does as the rest of the lawn resumes growth. If it does not green up, the next decision is diagnosis or repair—not a reason to add automatic seeding to every spring cleanup.',
          sourceId: 'isu-snow-mold',
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      id: 'separate-lawn-decisions',
      text: 'Keep three lawn decisions outside the cleanup box',
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'Iowa State notes that many common lawn tasks beyond mowing are better handled in late summer or early fall. Treat that as a reason to ask a separate question, not as a universal ban on spring work.',
          sourceId: 'isu-spring-lawn',
        },
      ],
    },
    {
      type: 'heading',
      level: 3,
      id: 'mowing-follows-growth',
      text: 'Mowing follows growth',
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'Iowa State says there is no set date to start mowing; growing conditions and grass type matter. Use the',
          sourceId: 'isu-spring-garden',
        },
        {
          text: 'Iowa mowing-frequency guide',
          href: routesById['article-how-often-to-mow-lawn-iowa'].path,
        },
        {
          text: 'for the separate growth-and-height decision instead of making the cleanup date the first-mow date.',
        },
      ],
    },
    {
      type: 'heading',
      level: 3,
      id: 'aeration-follows-conditions',
      text: 'Aeration follows lawn and soil conditions',
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'April can be an appropriate aeration window for Kentucky bluegrass and other cool-season Iowa lawns, but that does not make aeration an automatic cleanup item. Iowa State ties frequency to soil and use and says the soil should be moist—not dry or wet—for the work. Use the',
          sourceId: 'isu-core-aeration',
        },
        {
          text: 'Iowa aeration timing guide',
          href: routesById['article-when-to-aerate-lawn-iowa'].path,
        },
        {
          text: 'to make that decision separately.',
        },
      ],
    },
    {
      type: 'heading',
      level: 3,
      id: 'seeding-needs-a-plan',
      text: 'Seeding needs an establishment plan',
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'Spring seeding is possible in some circumstances, but Iowa State prefers late summer for establishing a lawn and notes the added weed competition faced by spring seedings. Do not turn a thin-looking area into an automatic overseeding instruction. The',
          sourceId: 'isu-seeding',
        },
        {
          text: 'Iowa overseeding timing guide',
          href: routesById['article-best-time-to-overseed-lawn-iowa'].path,
        },
        {
          text: 'covers that separate planning decision.',
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      id: 'verify-disposal-jurisdiction',
      text: 'Verify the disposal path for the property’s municipality',
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'If the review produces material that will leave the property, verify the current official route before choosing collection or drop-off. For a property within the City of Des Moines, Metro Waste Authority’s',
        },
        {
          text: 'current Des Moines page',
          href: 'https://www.mwatoday.com/collection-drop-off/des-moines/',
        },
        {
          text: 'directs yard-waste questions to Des Moines Public Works. A property in Ankeny, Waukee, Norwalk or Altoona should use that municipality’s current official guidance; a City of Des Moines instruction is not a metro-wide rule.',
          sourceId: 'mwa-des-moines',
        },
      ],
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'This guide intentionally omits annual dates, fees, container rules and event details that can change. Municipal guidance describes resident programs; it does not show that Mo’s bags, hauls or disposes of material.',
          sourceId: 'mwa-des-moines',
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      id: 'confirm-service-scope',
      text: 'Confirm service scope instead of assuming the checklist',
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'The',
        },
        {
          text: 'Spring Cleanup service page',
          href: routesById['service-spring-cleanup'].path,
        },
        {
          text: 'confirms Mo’s high-level seasonal offering for residential and commercial properties. It does not publish this article’s property-review checklist as a package or promise raking, bagging, hauling, disposal, mowing, aeration, seeding, pruning, bed work, treatments, equipment, a fixed schedule or a result. Use a',
        },
        {
          text: 'property-specific estimate',
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
          text: 'for other source-reviewed guides.',
        },
      ],
    },
  ],
  sources: [
    {
      id: 'isu-spring-garden',
      title: 'Spring Garden Tasks',
      publisher: 'Iowa State University Extension and Outreach — Yard and Garden',
      url: 'https://yardandgarden.extension.iastate.edu/how-to/spring-garden-tasks',
      reviewedOn: '2026-09-02',
      supportedClaimIds: [
        'debris-after-snow',
        'bed-wet-soil',
        'emerging-foliage',
        'debris-insect-tradeoff',
        'growth-not-date',
        'many-tasks-can-wait',
      ],
      jurisdiction: 'Iowa',
      scope: 'Lawns and perennial beds · source last reviewed March 2026',
    },
    {
      id: 'isu-spring-lawn',
      title: 'Spring Lawn Care',
      publisher: 'Iowa State University Extension and Outreach — Yard and Garden',
      url: 'https://yardandgarden.extension.iastate.edu/how-to/spring-lawn-care',
      reviewedOn: '2026-09-02',
      supportedClaimIds: ['growth-not-date', 'seeding-separate', 'many-tasks-can-wait'],
      jurisdiction: 'Iowa',
      scope: 'Home-lawn spring decisions · treatment and equipment instructions excluded',
    },
    {
      id: 'isu-snow-mold',
      title: "Why aren't snow-covered lawn areas greening up in the spring?",
      publisher: 'Iowa State University Extension and Outreach — Yard and Garden',
      url: 'https://yardandgarden.extension.iastate.edu/faq/why-arent-snow-covered-lawn-areas-greening-spring',
      reviewedOn: '2026-09-02',
      supportedClaimIds: ['inspect-matted-patches'],
      jurisdiction: 'Iowa',
      scope: 'Post-snow lawn patches matching the described symptoms · source updated August 23, 2024',
    },
    {
      id: 'isu-core-aeration',
      title: 'Core Aeration of Lawns',
      publisher: 'Iowa State University Extension and Outreach — Yard and Garden',
      url: 'https://yardandgarden.extension.iastate.edu/how-to/core-aeration-lawns',
      reviewedOn: '2026-09-02',
      supportedClaimIds: ['aeration-separate'],
      jurisdiction: 'Iowa',
      scope: 'Kentucky bluegrass and other cool-season lawns · source last reviewed April 2024',
    },
    {
      id: 'isu-seeding',
      title: 'Seeding a New Lawn',
      publisher: 'Iowa State University Extension and Outreach — Yard and Garden',
      url: 'https://yardandgarden.extension.iastate.edu/how-to/seeding-new-lawn',
      reviewedOn: '2026-09-02',
      supportedClaimIds: ['seeding-separate'],
      jurisdiction: 'Iowa',
      scope: 'New-lawn establishment timing · source last reviewed April 2024',
    },
    {
      id: 'mwa-des-moines',
      title: 'Des Moines',
      publisher: 'Metro Waste Authority',
      url: 'https://www.mwatoday.com/collection-drop-off/des-moines/',
      reviewedOn: '2026-09-02',
      supportedClaimIds: ['disposal-verification', 'other-city-boundary'],
      jurisdiction: 'City of Des Moines',
      scope: 'Current official verification path · annual operating details intentionally omitted',
    },
  ],
  claimNotes: [
    {
      id: 'debris-after-snow',
      summary: 'Review and remove accumulated lawn leaves, twigs and winter debris after snow is gone.',
      sourceIds: ['isu-spring-garden'],
      reviewNote: 'No automatic hauling, disposal, power-raking or dethatching.',
    },
    {
      id: 'bed-wet-soil',
      summary: 'Wet perennial-bed soil should not be worked because compaction can result.',
      sourceIds: ['isu-spring-garden'],
      reviewNote: 'Scoped to bed work; not generalized into a lawn-traffic rule.',
    },
    {
      id: 'emerging-foliage',
      summary: 'Perennial-bed cleanup should avoid newly emerging foliage.',
      sourceIds: ['isu-spring-garden'],
      reviewNote: 'No pruning, cutback or Mo’s bed-work inclusion.',
    },
    {
      id: 'debris-insect-tradeoff',
      summary: 'Some beneficial/native insects overwinter in perennial debris, while the effect of waiting is uncertain.',
      sourceIds: ['isu-spring-garden'],
      reviewNote: 'No rigid temperature threshold or universal cleanup date.',
    },
    {
      id: 'inspect-matted-patches',
      summary: 'Snow mold is one possible explanation for the described post-snow patches; gentle affected-area raking may help drying.',
      sourceIds: ['isu-snow-mold'],
      reviewNote: 'No diagnosis, fungicide advice, aggressive whole-lawn raking or recovery guarantee.',
    },
    {
      id: 'growth-not-date',
      summary: 'Growth conditions and grass type, not a set date, determine mowing restart.',
      sourceIds: ['isu-spring-garden', 'isu-spring-lawn'],
      reviewNote: 'Detailed frequency/height guidance remains Task 30.',
    },
    {
      id: 'aeration-separate',
      summary: 'Aeration is a separate condition/timing decision and should not be done in dry or wet soil.',
      sourceIds: ['isu-core-aeration'],
      reviewNote: 'No automatic need, method, frequency or Mo’s service claim.',
    },
    {
      id: 'seeding-separate',
      summary: 'Spring seeding is not automatic; late summer is generally preferred for Iowa lawn establishment.',
      sourceIds: ['isu-spring-lawn', 'isu-seeding'],
      reviewNote: 'No seed, treatment, watering or exact-date prescription; Task 29 retains full timing guidance.',
    },
    {
      id: 'many-tasks-can-wait',
      summary: 'Many lawn tasks beyond mowing may be better handled in late summer or early fall.',
      sourceIds: ['isu-spring-garden', 'isu-spring-lawn'],
      reviewNote: 'Not a universal prohibition; separate decisions retain their own conditions.',
    },
    {
      id: 'disposal-verification',
      summary: 'Current City of Des Moines yard-waste questions route through the Des Moines resource and Public Works.',
      sourceIds: ['mwa-des-moines'],
      reviewNote: 'No annual date, fee, container, eligibility or collection-detail claim.',
    },
    {
      id: 'other-city-boundary',
      summary: 'City of Des Moines guidance does not establish another municipality’s rules.',
      sourceIds: ['mwa-des-moines'],
      reviewNote: 'No details invented for Ankeny, Waukee, Norwalk or Altoona.',
    },
  ],
  editorialReview: {
    owner: 'Task 31 editorial review',
    reviewedOn: '2026-09-02',
  },
  showTableOfContents: true,
  publisher: 'organization',
  relatedServicePaths: [routesById['service-spring-cleanup'].path],
  relatedArticlePaths: [routesById['article-central-iowa-lawn-care-calendar'].path],
} as const satisfies PublishedBlogArticle
