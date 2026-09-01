import { routesById } from '../routes.ts'
import type { PublishedBlogArticle } from '../types.ts'

const route = routesById['article-best-time-to-overseed-lawn-iowa']

export const bestTimeToOverseedLawnIowa = {
  routeId: 'article-best-time-to-overseed-lawn-iowa',
  slug: 'best-time-to-overseed-lawn-iowa',
  path: route.path,
  status: 'published',
  title: route.title,
  h1: route.h1,
  description: route.description,
  primaryKeyword: route.primaryKeyword,
  secondaryKeywords: [
    'when to overseed lawn in Iowa',
    'overseed lawn in fall Iowa',
    'Iowa lawn overseeding timing',
  ],
  excerpt:
    "Mid-August through mid-September is Iowa State's best general overseeding window for a thin lawn—but seed-to-soil contact and the ability to keep the surface moist decide whether that window is workable.",
  content: [
    {
      type: 'paragraph',
      content: [
        {
          text: "Mid-August through mid-September is Iowa State's best general window for overseeding an existing thin Iowa lawn. The reason is establishment: warm late-summer soil, warm days and cool nights support cool-season grass growth, while fewer weed seeds germinate than in spring. A date in that range is useful only if seed can reach soil and the surface can be kept moist afterward.",
          sourceId: 'isu-overseeding',
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      id: 'plan-beyond-seeding-day',
      text: 'Plan beyond the day seed goes down',
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'The useful window is longer than the work itself. Iowa State favors late summer because the soil remains warm for germination while the pattern of warm days and cool nights supports growth. Its guidance also points to lower weed-seed competition during this period. Those advantages create an opportunity; they do not replace the conditions needed after seed is placed.',
          sourceId: 'isu-fall-lawn-care',
        },
      ],
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'Iowa State notes that “overseeding” is the familiar Iowa term even when “interseeding” is more precise for adding the same species or mix to improve lawn density. The terminology does not change the timing or establishment questions in this guide.',
          sourceId: 'isu-overseeding',
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      id: 'three-readiness-questions',
      text: 'Ask three readiness questions before using the window',
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'A date inside the normal range becomes useful only when the existing lawn and the follow-through support establishment. Check these conditions before treating the season as a yes:',
        },
      ],
    },
    {
      type: 'list',
      style: 'checklist',
      items: [
        'Can competition from the established turf be managed so the new seed has a realistic opportunity to establish?',
        'Can the seed make good contact with soil rather than remain separated from the surface it needs?',
        'Can the soil surface be kept moist after seeding without overwatering or runoff?',
      ],
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'Iowa State identifies seed-to-soil contact and reduced competition from established turf as parts of successful overseeding.',
          sourceId: 'isu-overseeding',
        },
        {
          text: 'Its current watering guidance adds that new seedlings are vulnerable to drying, while too much water and runoff should also be avoided.',
          sourceId: 'isu-new-seed-water',
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      id: 'reasons-to-postpone',
      text: 'Reasons to postpone without guessing at a better date',
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'Waiting can make more sense than forcing a normally favorable week when a required condition is missing. Postpone the decision when:',
          sourceId: 'isu-new-seed-water',
        },
      ],
    },
    {
      type: 'list',
      style: 'unordered',
      items: [
        'there is no practical way for seed to contact soil through the existing turf;',
        'the soil surface cannot be kept moist during the early establishment period;',
        'hot or windy conditions would raise moisture demand beyond what can be maintained; or',
        'the only reason to proceed is that the calendar falls between mid-August and mid-September.',
      ],
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'This is not a promise that a later date will work. It is a boundary around the evidence: the seasonal window is favorable because it supports establishment, so a property that cannot support establishment does not become ready through the date alone.',
          sourceId: 'isu-new-seed-water',
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      id: 'aeration-separate-question',
      text: 'Aeration does not decide the overseeding date',
    },
    {
      type: 'paragraph',
      content: [
        {
          text: 'Iowa State lists core aeration as one of several ways to create seed-to-soil contact. That makes it a possible preparation path, not proof that every overseeding plan needs aeration or that every aerated lawn should be overseeded.',
          sourceId: 'isu-overseeding',
        },
        {
          text: 'Use the separate Iowa aeration timing guide',
          href: routesById['article-when-to-aerate-lawn-iowa'].path,
        },
        {
          text: 'when the unresolved question is whether aeration itself fits the lawn and current soil conditions.',
        },
      ],
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
          text: 'confirms the combined commercial offering for thin or compacted lawn concerns. It does not publish a seed blend, placement method, watering process, fixed schedule or result guarantee. Use a property estimate for scope, and return to the',
        },
        {
          text: 'lawn care tips library',
          href: routesById.blog.path,
        },
        {
          text: 'for other guides only after they complete source and editorial review.',
        },
      ],
    },
  ],
  sources: [
    {
      id: 'isu-overseeding',
      title: 'Overseeding a Lawn',
      publisher: 'Iowa State University Extension and Outreach — Yard and Garden',
      url: 'https://yardandgarden.extension.iastate.edu/how-to/overseeding-lawn',
      reviewedOn: '2026-09-01',
      supportedClaimIds: [
        'overseeding-window',
        'seasonal-establishment-context',
        'contact-and-competition',
        'surface-moisture',
        'iowa-terminology',
        'aeration-boundary',
      ],
      jurisdiction: 'Iowa',
      scope: 'Existing thin lawns and Iowa overseeding/interseeding terminology · source last reviewed August 2024',
    },
    {
      id: 'isu-fall-lawn-care',
      title: 'Late Summer and Fall Lawn Care',
      publisher: 'Iowa State University Extension and Outreach — Yard and Garden',
      url: 'https://yardandgarden.extension.iastate.edu/how-to/late-summer-and-fall-lawn-care',
      reviewedOn: '2026-09-01',
      supportedClaimIds: [
        'overseeding-window',
        'seasonal-establishment-context',
        'contact-and-competition',
        'surface-moisture',
      ],
      jurisdiction: 'Iowa',
      scope: 'Cool-season established lawns and late-summer renovation · source last reviewed August 2024',
    },
    {
      id: 'isu-new-seed-water',
      title: 'How should I water a newly seeded lawn?',
      publisher: 'Iowa State University Extension and Outreach — Yard and Garden',
      url: 'https://yardandgarden.extension.iastate.edu/faq/how-should-i-water-newly-seeded-lawn',
      reviewedOn: '2026-09-01',
      supportedClaimIds: ['surface-moisture', 'weather-and-follow-through'],
      jurisdiction: 'Iowa',
      scope: 'Newly seeded lawn moisture conditions · source updated June 9, 2026',
    },
  ],
  claimNotes: [
    {
      id: 'overseeding-window',
      summary: 'Mid-August through mid-September is Iowa State’s best general window for renovating or overseeding a thin Iowa lawn.',
      sourceIds: ['isu-overseeding', 'isu-fall-lawn-care'],
      reviewNote: 'Presented as a general opportunity, not a rigid appointment or outcome promise.',
    },
    {
      id: 'seasonal-establishment-context',
      summary: 'Warm late-summer soil, warm days, cool nights and lower weed-seed competition explain the general window.',
      sourceIds: ['isu-overseeding', 'isu-fall-lawn-care'],
      reviewNote: 'Seasonal advantages remain conditional and do not guarantee establishment.',
    },
    {
      id: 'contact-and-competition',
      summary: 'Good seed-to-soil contact and reduced competition from established turf are establishment-readiness conditions.',
      sourceIds: ['isu-overseeding', 'isu-fall-lawn-care'],
      reviewNote: 'No equipment, preparation method or Mo’s process is prescribed.',
    },
    {
      id: 'surface-moisture',
      summary: 'The surface must remain moist after seeding while overwatering and runoff should be avoided.',
      sourceIds: ['isu-overseeding', 'isu-fall-lawn-care', 'isu-new-seed-water'],
      reviewNote: 'Kept as a feasibility condition; exact watering frequencies are omitted.',
    },
    {
      id: 'weather-and-follow-through',
      summary: 'Hot or windy conditions may increase moisture demand and can make establishment follow-through harder.',
      sourceIds: ['isu-new-seed-water'],
      reviewNote: 'No temperature threshold, forecast or irrigation schedule is invented.',
    },
    {
      id: 'iowa-terminology',
      summary: 'Overseeding is familiar Iowa usage even where interseeding is the technically more precise term.',
      sourceIds: ['isu-overseeding'],
      reviewNote: 'Terminology clarification only; no seed species or blend advice is added.',
    },
    {
      id: 'aeration-boundary',
      summary: 'Aeration is one possible route to seed-to-soil contact, not an automatic prerequisite or automatic seeding decision.',
      sourceIds: ['isu-overseeding'],
      reviewNote: 'The aeration-need decision remains with Task 28 and the commercial scope remains with the service page.',
    },
  ],
  editorialReview: {
    owner: 'Task 29 editorial review',
    reviewedOn: '2026-09-01',
  },
  showTableOfContents: true,
  publisher: 'organization',
  relatedServicePaths: [routesById['service-aeration-overseeding'].path],
  relatedArticlePaths: [
    routesById['article-central-iowa-lawn-care-calendar'].path,
    routesById['article-when-to-aerate-lawn-iowa'].path,
  ],
} as const satisfies PublishedBlogArticle
