import { routesById } from '../routes.ts'
import type { PublishedBlogArticle } from '../types.ts'

const route = routesById['article-when-to-aerate-lawn-iowa']

export const whenToAerateLawnIowa = {
  routeId: 'article-when-to-aerate-lawn-iowa',
  slug: 'when-to-aerate-lawn-iowa',
  path: route.path,
  status: 'published',
  title: route.title,
  h1: route.h1,
  description: route.description,
  primaryKeyword: route.primaryKeyword,
  secondaryKeywords: [
    'best time to aerate lawn in Iowa',
    'core aeration Iowa',
    'aerate lawn in spring or fall Iowa',
  ],
  excerpt:
    'For Kentucky bluegrass and other cool-season Iowa lawns, April and September are the strongest general aeration windows—but lawn need, active growth and soil moisture still decide whether now is the right time.',
  content: [
    {
      type: 'paragraph',
      content: [
        {
          text: 'Iowa State University Extension identifies April and September as the best times to aerate Kentucky bluegrass and other cool-season lawns in Iowa. Those windows give turf favorable growing conditions for recovery after the initial disruption of core aeration. The month is only the starting point: the lawn should have a reason to be aerated, and the soil should be moist rather than dry or wet.',
          sourceId: 'isu-core-aeration',
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      id: 'start-with-window-then-lawn',
      text: 'Start with the window, then test the lawn',
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'Iowa State ties aeration frequency to soil type and use, not to a universal annual schedule. Its current guidance also connects compaction with reduced rainfall infiltration. Read the factors together before deciding that an available date is a suitable date.',
          sourceId: 'isu-core-aeration',
        },
        {
          text: 'Construction traffic is one context that can compact soil, but runoff alone does not prove aeration is the only answer.',
          sourceId: 'isu-lawn-watering',
        },
      ],
    },
    {
      type: 'table',
      caption: 'Factor-to-implication guide for an Iowa aeration decision',
      headers: ['What you know', 'What it means for the decision'],
      rows: [
        [
          'It is April or September, and the cool-season turf is actively growing',
          'The timing aligns with Iowa State’s general recovery window. Continue checking lawn need and soil moisture.',
        ],
        [
          'The lawn has heavy clay soil or repeated foot or pet traffic',
          'Compaction risk is more relevant, so aeration may merit stronger consideration or greater frequency.',
        ],
        [
          'The soil is well drained and the lawn receives little traffic',
          'Iowa State says once per year is generally sufficient; two favorable windows do not mean two treatments are required.',
        ],
        [
          'The soil is dry',
          'Wait. Core-aerator tines may not penetrate deeply enough.',
        ],
        [
          'The soil is wet',
          'Wait. Wet soil can plug the hollow tines.',
        ],
        [
          'Rain tends to run off, or construction traffic affected the soil',
          'Investigate possible compaction, but do not treat one observation as a complete diagnosis.',
        ],
      ],
    },
    {
      type: 'heading',
      level: 2,
      id: 'should-i-aerate-now',
      text: 'Should I aerate now?',
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'Use this sequence instead of deciding from the month alone:',
        },
      ],
    },
    {
      type: 'list',
      style: 'ordered',
      items: [
        'Confirm the guidance fits the lawn: Iowa State’s April and September recommendation is for Kentucky bluegrass and other cool-season lawns.',
        'Look for a credible compaction context, such as heavy clay soil, repeated foot or pet traffic, or soil affected by construction machinery.',
        'In spring, confirm the grass is actively growing. In either window, check that the soil is moist rather than dry or wet.',
        'Wait when the calendar fits but the turf is not actively growing, the soil condition is unsuitable or there is no clear reason to aerate.',
      ],
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'This approach also avoids reading “April or September” as “April and September.” Iowa State says most lawns need aeration only once per year, while heavier soils and higher-use lawns may justify a different frequency.',
          sourceId: 'isu-spring-tasks',
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      id: 'recovery-not-calendar-promise',
      text: 'Why April and September are not promises',
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'Core aeration causes initial turf damage. Iowa State recommends April and September because favorable spring and early-fall growth gives cool-season grass a better opportunity to recover. That reasoning is more useful than treating every day in either month as equally suitable: active growth and workable soil still matter.',
          sourceId: 'isu-core-aeration',
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      id: 'keep-overseeding-separate',
      text: 'Keep aeration and overseeding as separate decisions',
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'Iowa State notes that overseeding can be done after aeration, but that does not answer when a particular lawn should be overseeded.',
          sourceId: 'isu-core-aeration',
        },
        {
          text: 'This guide stops at the aeration decision so it does not turn a timing question into an automatic seeding recommendation.',
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      id: 'property-specific-scope',
      text: 'Use the service page for property-specific scope',
    },
    {
      type: 'paragraph',
      content: [
        {
          text: "Mo's",
        },
        {
          text: 'Aeration and Seeding service page',
          href: routesById['service-aeration-overseeding'].path,
        },
        {
          text: 'confirms the combined offering for thin or compacted lawn concerns. It does not publish a machine, core method, pass count, fixed schedule, seed blend or result guarantee. Use the estimate conversation for the actual property rather than treating general Extension guidance as a promise about the service.',
        },
      ],
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'Return to the',
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
      id: 'isu-core-aeration',
      title: 'Core Aeration of Lawns',
      publisher: 'Iowa State University Extension and Outreach — Yard and Garden',
      url: 'https://yardandgarden.extension.iastate.edu/how-to/core-aeration-lawns',
      reviewedOn: '2026-09-01',
      supportedClaimIds: [
        'aeration-timing',
        'recovery-context',
        'need-and-frequency',
        'soil-moisture',
        'active-growth-and-frequency',
      ],
      jurisdiction: 'Iowa',
      scope: 'Kentucky bluegrass and other cool-season lawns · source last reviewed April 2024',
    },
    {
      id: 'isu-spring-tasks',
      title: 'Spring Garden Tasks',
      publisher: 'Iowa State University Extension and Outreach — Yard and Garden',
      url: 'https://yardandgarden.extension.iastate.edu/how-to/spring-garden-tasks',
      reviewedOn: '2026-09-01',
      supportedClaimIds: ['aeration-timing', 'active-growth-and-frequency'],
      jurisdiction: 'Iowa',
      scope: 'Home-lawn spring context · source last reviewed March 2026',
    },
    {
      id: 'isu-lawn-watering',
      title: 'Home Lawn Watering Tips and Tricks',
      publisher: 'Iowa State University Extension and Outreach — Yard and Garden',
      url: 'https://yardandgarden.extension.iastate.edu/how-to/home-lawn-watering-tips-and-tricks',
      reviewedOn: '2026-09-01',
      supportedClaimIds: ['compaction-context'],
      jurisdiction: 'Iowa',
      scope: 'Home lawns and commercial turf sites · source last reviewed March 2026',
    },
  ],
  claimNotes: [
    {
      id: 'aeration-timing',
      summary: 'April and September are the Iowa State windows for Kentucky bluegrass and other cool-season Iowa lawns.',
      sourceIds: ['isu-core-aeration', 'isu-spring-tasks'],
      reviewNote: 'Kept species and growth scope; not converted into immutable dates.',
    },
    {
      id: 'recovery-context',
      summary: 'The recommended windows align with favorable recovery after core aeration initially disrupts turf.',
      sourceIds: ['isu-core-aeration'],
      reviewNote: 'Recovery opportunity, not a result guarantee.',
    },
    {
      id: 'need-and-frequency',
      summary: 'Soil type and use determine aeration frequency; heavy clay and high traffic differ from well-drained, low-use lawns.',
      sourceIds: ['isu-core-aeration'],
      reviewNote: 'Presented as decision context, not a property diagnosis or Mo’s schedule.',
    },
    {
      id: 'soil-moisture',
      summary: 'Core aeration is best performed in moist soil and should be avoided when soil is dry or wet.',
      sourceIds: ['isu-core-aeration'],
      reviewNote: 'No irrigation prescription added.',
    },
    {
      id: 'active-growth-and-frequency',
      summary: 'Spring aeration should occur while grass is actively growing, and most lawns generally need aeration only once per year.',
      sourceIds: ['isu-spring-tasks', 'isu-core-aeration'],
      reviewNote: 'Clarifies that two suitable windows do not require two annual treatments.',
    },
    {
      id: 'compaction-context',
      summary: 'Compaction can affect rainfall infiltration, and construction machinery is one possible compaction context.',
      sourceIds: ['isu-lawn-watering'],
      reviewNote: 'Runoff is framed as a reason to investigate, never as proof or a diagnosis.',
    },
  ],
  editorialReview: {
    owner: 'Task 28 editorial review',
    reviewedOn: '2026-09-01',
  },
  showTableOfContents: true,
  publisher: 'organization',
  relatedServicePaths: [routesById['service-aeration-overseeding'].path],
  relatedArticlePaths: [
    routesById['article-central-iowa-lawn-care-calendar'].path,
    routesById['article-best-time-to-overseed-lawn-iowa'].path,
  ],
} as const satisfies PublishedBlogArticle
