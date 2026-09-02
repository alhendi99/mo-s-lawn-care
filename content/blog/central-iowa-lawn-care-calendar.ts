import { routesById } from '../routes.ts'
import type { PublishedBlogArticle } from '../types.ts'

const route = routesById['article-central-iowa-lawn-care-calendar']

export const centralIowaLawnCareCalendar = {
  routeId: 'article-central-iowa-lawn-care-calendar',
  slug: 'central-iowa-lawn-care-calendar',
  path: route.path,
  status: 'published',
  title: route.title,
  h1: route.h1,
  description: route.description,
  primaryKeyword: route.primaryKeyword,
  secondaryKeywords: [
    'Iowa lawn care calendar',
    'seasonal lawn care Iowa',
    'Iowa lawn care by season',
  ],
  excerpt:
    'Use seasonal changes—not twelve fixed appointments—to locate the next lawn-care decision. Growth, dormancy, exposed spring conditions and the fall transition determine which focused question to ask.',
  content: [
    {
      type: 'paragraph',
      content: [
        {
          text: 'A useful Central Iowa lawn care calendar follows changes in the property and turf instead of assigning required tasks to the first day of each month. Iowa State makes the spring mowing transition depend on growing conditions and grass type rather than a predetermined date.',
          sourceId: 'isu-spring-garden',
        },
        {
          text: 'Once mowing is relevant, growth rate and the height intended to remain determine how often the decision returns.',
          sourceId: 'isu-mowing-frequency',
        },
      ],
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'Treat the calendar below as orientation. Find the phase that matches what is happening outside, then open the focused guide for the detailed decision.',
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      id: 'five-signals-locate-year',
      text: 'Use five signals to locate the year',
    },
    {
      type: 'table',
      caption: 'A condition-led Central Iowa lawn care calendar',
      headers: ['Phase signal', 'What changes', 'Next question'],
      rows: [
        [
          'Snow is gone and the property surface is visible',
          'Spring review becomes relevant before every lawn task becomes due.',
          'Which conditions are visible, and what needs a closer review before action?',
        ],
        [
          'The grass is actively growing',
          'Mowing becomes a repeating observation rather than a fixed appointment.',
          'Has growth reached the point for another cut under suitable conditions?',
        ],
        [
          'Hot, dry conditions slow or pause cool-season growth',
          'The previous mowing pattern may no longer fit the lawn.',
          'Is the turf still growing, or has the active-growth decision paused?',
        ],
        [
          'Cooler late-summer or early-fall growth returns',
          'Aeration need and seeding readiness become separate questions.',
          'Does the lawn call for either decision, and do its conditions support it?',
        ],
        [
          'Leaves accumulate while fall growth eventually slows',
          'Leaf management and mowing can overlap, but they have different triggers.',
          'Which condition needs attention, and has turf growth actually stopped?',
        ],
      ],
    },
    {
      type: 'heading',
      level: 2,
      id: 'spring-exposure-then-growth',
      text: 'Spring starts with exposure, then growth',
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'Iowa State places lawn cleanup after snow has melted, but it does not make that cleanup date the first-mow date. The property surface can be ready for review while the grass still needs to show actual growth.',
          sourceId: 'isu-spring-garden',
        },
      ],
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'Use the',
        },
        {
          text: 'spring property-review checklist',
          href: routesById['article-spring-lawn-cleanup-des-moines'].path,
        },
        {
          text: 'to sort cleanup conditions without assuming a service package. When grass growth becomes the question, move to the',
        },
        {
          text: 'Iowa mowing-frequency guide',
          href: routesById['article-how-often-to-mow-lawn-iowa'].path,
        },
        {
          text: 'instead of carrying the cleanup date into a mowing schedule.',
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      id: 'active-growth-can-slow',
      text: 'Active growth can slow without changing the calendar',
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'During active growth, the next mowing decision follows what the grass has added since the previous cut, not the interval that worked earlier in the season.',
          sourceId: 'isu-mowing-frequency',
        },
        {
          text: 'Hot, dry summer conditions can send established Kentucky bluegrass and other cool-season lawns into dormancy. Iowa State describes very little growth during dormancy, so mowing demand falls with it.',
          sourceId: 'isu-summer-dormancy',
        },
      ],
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'That does not let this calendar diagnose a brown lawn or prescribe watering. It means the active-growth question should be checked again rather than answered from the month or the last mowing interval.',
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      id: 'fall-reopens-two-questions',
      text: 'The fall transition reopens two separate questions',
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'Iowa State organizes late-summer and fall lawn guidance around changing growth after hot, dry conditions, with aeration and seeding treated as distinct subjects. A favorable seasonal transition is a reason to reconsider each decision; it is not proof that both are due or that they must happen together.',
          sourceId: 'isu-late-summer-fall',
        },
      ],
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'Open the',
        },
        {
          text: 'Iowa aeration timing guide',
          href: routesById['article-when-to-aerate-lawn-iowa'].path,
        },
        {
          text: 'when the unresolved question is whether the lawn and soil make aeration relevant. Use the',
        },
        {
          text: 'Iowa overseeding timing guide',
          href: routesById['article-best-time-to-overseed-lawn-iowa'].path,
        },
        {
          text: 'when the unresolved question is whether a thin lawn has a workable establishment opportunity. The detailed timing, readiness and wait conditions stay in those guides.',
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      id: 'fall-has-two-endings',
      text: 'Fall has two endings, not one finish date',
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'Leaf accumulation can need attention while cool-season turf is still growing. Iowa State treats leaf management and mowing as separate fall subjects, so one cleanup does not establish that mowing is finished.',
          sourceId: 'isu-late-summer-fall',
        },
        {
          text: 'For Central Iowa cool-season lawns, the durable mowing endpoint is when grass growth stops. Iowa State pages give different usual calendar ranges, so this pillar does not publish one last-mow date or temperature cutoff.',
          sourceId: 'isu-fall-growth-stop',
        },
      ],
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'Use the',
        },
        {
          text: 'fall leaf-cleanup guide',
          href: routesById['article-fall-leaf-cleanup-des-moines'].path,
        },
        {
          text: 'for the leaf condition and municipality-aware disposal question. Return to the',
        },
        {
          text: 'mowing-frequency guide',
          href: routesById['article-how-often-to-mow-lawn-iowa'].path,
        },
        {
          text: 'for the growth decision. Once growth stops, pause the active mowing question until spring conditions show that it has resumed; do not invent winter chores merely to fill the calendar.',
          sourceId: 'isu-fall-growth-stop',
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      id: 'service-scope-not-calendar',
      text: 'Use service pages for scope, not timing promises',
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'When the next decision becomes a request for help, use the canonical',
        },
        {
          text: 'Lawn Mowing',
          href: routesById['service-lawn-mowing'].path,
        },
        {
          text: 'or',
        },
        {
          text: 'Aeration and Seeding',
          href: routesById['service-aeration-overseeding'].path,
        },
        {
          text: 'page for those lawn needs. The',
        },
        {
          text: 'Spring Cleanup',
          href: routesById['service-spring-cleanup'].path,
        },
        {
          text: 'and',
        },
        {
          text: 'Fall Cleanup & Leaf Removal',
          href: routesById['service-fall-cleanup-leaf-removal'].path,
        },
        {
          text: 'pages keep the two seasonal commercial paths separate.',
        },
      ],
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'This article is not Mo’s annual service calendar. The four services are not presented as a package, recurring program, automatic sequence or availability promise. Use a',
        },
        {
          text: 'property-specific estimate',
          href: routesById.contact.path,
        },
        {
          text: 'to confirm the actual scope and timing for the property.',
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
        'conditions-over-calendar',
        'spring-transition',
        'fall-decision-window',
        'winter-pause',
      ],
      jurisdiction: 'Iowa',
      scope: 'Lawns during the late-winter and spring transition · source last reviewed March 2026',
    },
    {
      id: 'isu-mowing-frequency',
      title: 'How often should I mow my lawn?',
      publisher: 'Iowa State University Extension and Outreach — Yard and Garden',
      url: 'https://yardandgarden.extension.iastate.edu/faq/how-often-should-i-mow-my-lawn',
      reviewedOn: '2026-09-02',
      supportedClaimIds: ['conditions-over-calendar', 'active-growth'],
      jurisdiction: 'Iowa',
      scope: 'Home-lawn growth and cutting-height relationship · source updated October 25, 2022',
    },
    {
      id: 'isu-summer-dormancy',
      title: 'Summer Dormancy in Cool-Season Lawns',
      publisher: 'Iowa State University Extension and Outreach — Yard and Garden',
      url: 'https://yardandgarden.extension.iastate.edu/how-to/summer-dormancy-cool-season-lawns',
      reviewedOn: '2026-09-02',
      supportedClaimIds: ['conditions-over-calendar', 'summer-slowdown'],
      jurisdiction: 'Iowa',
      scope: 'Established Kentucky bluegrass and other cool-season lawns · source last reviewed July 2026',
    },
    {
      id: 'isu-late-summer-fall',
      title: 'Late Summer and Fall Lawn Care',
      publisher: 'Iowa State University Extension and Outreach — Yard and Garden',
      url: 'https://yardandgarden.extension.iastate.edu/how-to/late-summer-and-fall-lawn-care',
      reviewedOn: '2026-09-02',
      supportedClaimIds: ['fall-decision-window', 'leaf-and-growth-separate', 'fall-growth-end'],
      jurisdiction: 'Iowa',
      scope: 'Cool-season lawns from summer stress into fall growth · source last reviewed August 2024',
    },
    {
      id: 'isu-fall-growth-stop',
      title: 'When can I stop mowing the lawn in the fall?',
      publisher: 'Iowa State University Extension and Outreach — Yard and Garden',
      url: 'https://yardandgarden.extension.iastate.edu/faq/when-can-i-stop-mowing-lawn-fall',
      reviewedOn: '2026-09-02',
      supportedClaimIds: ['conditions-over-calendar', 'fall-growth-end', 'winter-pause'],
      jurisdiction: 'Central Iowa',
      scope: 'Cool-season fall growth endpoint · source updated December 22, 2021 · month and temperature cutoffs omitted',
    },
  ],
  claimNotes: [
    {
      id: 'conditions-over-calendar',
      summary: 'Seasonal conditions and turf growth locate the next decision more reliably than required month-start tasks.',
      sourceIds: ['isu-spring-garden', 'isu-mowing-frequency', 'isu-summer-dormancy', 'isu-fall-growth-stop'],
      reviewNote: 'Cross-source synthesis; not a universal property schedule or Mo’s operating calendar.',
    },
    {
      id: 'spring-transition',
      summary: 'Post-snow property review and the restart of mowing are separate spring signals.',
      sourceIds: ['isu-spring-garden'],
      reviewNote: 'No spring checklist, fixed date or municipal rule duplicated.',
    },
    {
      id: 'active-growth',
      summary: 'Active-growth mowing demand follows growth rate and the intended finished height.',
      sourceIds: ['isu-mowing-frequency'],
      reviewNote: 'No interval, one-third tutorial, height prescription or numerical example.',
    },
    {
      id: 'summer-slowdown',
      summary: 'Hot, dry conditions can bring dormancy and very little growth to established cool-season lawns.',
      sourceIds: ['isu-summer-dormancy'],
      reviewNote: 'No color-only diagnosis, watering prescription, traffic rule or recovery promise.',
    },
    {
      id: 'fall-decision-window',
      summary: 'Changing late-summer and fall growth can reopen separate aeration and seeding decisions.',
      sourceIds: ['isu-spring-garden', 'isu-late-summer-fall'],
      reviewNote: 'No dates, automatic pairing, detailed need/readiness test or result promise.',
    },
    {
      id: 'leaf-and-growth-separate',
      summary: 'Fall leaf conditions and continuing turf growth can overlap without sharing one trigger.',
      sourceIds: ['isu-late-summer-fall'],
      reviewNote: 'No leaf threshold, pass/result logic, cleanup frequency or disposal guidance.',
    },
    {
      id: 'fall-growth-end',
      summary: 'Fall mowing continues only while grass continues to grow.',
      sourceIds: ['isu-late-summer-fall', 'isu-fall-growth-stop'],
      reviewNote: 'Conflicting usual ranges resolved by retaining the shared growth endpoint only.',
    },
    {
      id: 'winter-pause',
      summary: 'After growth stops, active mowing pauses until spring growth resumes.',
      sourceIds: ['isu-spring-garden', 'isu-fall-growth-stop'],
      reviewNote: 'Does not claim that every form of property care stops for winter.',
    },
  ],
  editorialReview: {
    owner: 'Task 33 editorial review',
    reviewedOn: '2026-09-02',
  },
  showTableOfContents: true,
  publisher: 'organization',
  relatedServicePaths: [
    routesById['service-lawn-mowing'].path,
    routesById['service-aeration-overseeding'].path,
    routesById['service-spring-cleanup'].path,
    routesById['service-fall-cleanup-leaf-removal'].path,
  ],
  relatedArticlePaths: [
    routesById['article-when-to-aerate-lawn-iowa'].path,
    routesById['article-best-time-to-overseed-lawn-iowa'].path,
    routesById['article-how-often-to-mow-lawn-iowa'].path,
    routesById['article-spring-lawn-cleanup-des-moines'].path,
    routesById['article-fall-leaf-cleanup-des-moines'].path,
  ],
} as const satisfies PublishedBlogArticle
