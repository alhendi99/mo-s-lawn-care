import type { ServiceDetailContent } from './types.ts'

export const fallCleanupLeafRemovalService = {
  slug: 'fall-cleanup-leaf-removal',
  routeId: 'service-fall-cleanup-leaf-removal',
  schema: {
    name: 'Fall Cleanup & Leaf Removal',
    serviceType: 'Fall cleanup and leaf removal',
  },
  hero: {
    eyebrow: 'Fall cleanup + leaf removal · one service path',
    summary:
      "Mo's offers Fall Cleanup and Leaf Removal for residential and commercial properties. Request a free estimate to describe the leaves, seasonal debris and property areas that need attention.",
    compactHeading: true,
    image: {
      src: '/contact.webp',
      width: 1031,
      height: 580,
      alt: 'Lawns, young trees, driveways and homes along a residential street',
      caption: 'Existing neutral property image · no fall, leaf service, result, city or customer attribution',
      provenance: 'existing-neutral-property-image',
    },
  },
  introduction: {
    eyebrow: 'Start with the fall property need',
    heading: 'One seasonal path when leaves are the main concern.',
    paragraphs: [
      'Leaf removal in Des Moines, IA and fall cleanup belong on one commercial service page. This route is for property owners deciding whether to request professional help with leaves and seasonal debris during the fall-season transition.',
      'People comparing fall cleanup in Des Moines, fall yard cleanup in Des Moines, leaf cleanup in Des Moines or a leaf removal service in Des Moines can use this one page. It does not turn those search phrases into separate, overlapping services or an unverified handling process.',
    ],
    decisionPoints: [
      {
        number: '01',
        title: 'Leaves are the defining concern',
        description:
          'Choose this path when leaf removal is central to the request. The estimate conversation can confirm the property areas and exact scope without assuming a collection or disposal method.',
      },
      {
        number: '02',
        title: 'Fall is the defining context',
        description:
          'Fall Cleanup belongs here when the seasonal transition shapes the request. Broader cleanup needs that are not defined by fall stay with Yard Cleanup.',
      },
      {
        number: '03',
        title: 'Timing and scope need a conversation',
        description:
          'Share the property location, the areas that need attention and your timing question. This page does not publish fixed fall dates, a standard workflow or a guaranteed completion window.',
      },
    ],
  },
  scope: {
    eyebrow: 'Confirmed capability boundary',
    heading: 'Fall Cleanup and Leaf Removal, with details confirmed by estimate.',
    introduction:
      'The approved service covers Fall Cleanup, Leaf Removal and high-level seasonal debris needs. The public facts do not define how materials are gathered, moved or handled after service, so no operational method is presented as standard.',
    items: [
      {
        title: 'Fall Cleanup',
        description:
          'Use this service when fall is the defining context for property cleanup. It does not absorb Spring Cleanup or broader year-round Yard Cleanup intent.',
      },
      {
        title: 'Leaf Removal',
        description:
          'Leaf Removal is part of the same consolidated service. Exact property areas and handling details must be confirmed rather than inferred from the service name.',
      },
      {
        title: 'Property-specific estimate',
        description:
          'Tell Mo’s about the property, leaves and seasonal debris you want to discuss. No price, package, fixed schedule or guaranteed removal result is published here.',
      },
    ],
  },
  relatedServicesIntro: {
    eyebrow: 'Keep neighboring needs separate',
    heading: 'Choose the route that matches the property and season.',
    description:
      'General cleanup, routine mowing and winter snow service keep their own purposes rather than becoming Fall Cleanup inclusions.',
  },
  relatedServices: [
    {
      routeId: 'service-yard-cleanup',
      eyebrow: 'For broader, non-seasonal cleanup',
      description:
        'Use Yard Cleanup when overgrowth or the overall property condition is the main concern and fall leaves do not define the request.',
    },
    {
      routeId: 'service-lawn-mowing',
      eyebrow: 'For routine grass cutting',
      description:
        'Use Lawn Mowing when grass length and a maintained appearance are the primary need; mowing is not presented as part of this service.',
    },
    {
      routeId: 'service-snow-removal',
      eyebrow: 'For a separate winter need',
      description:
        'Snow Removal has its own service path for winter requests. This link supports seasonal continuity without implying a bundle or automatic contract.',
    },
  ],
  propertyContext: {
    eyebrow: 'Property context first',
    heading: 'Fall service estimates for homes and businesses.',
    residential:
      'Homeowners can request a Fall Cleanup & Leaf Removal estimate and describe the property areas, leaf conditions and questions they want to discuss.',
    commercial:
      'Commercial properties can request a Fall Cleanup & Leaf Removal estimate. No route schedule, campus program, recurring agreement or acreage capability is represented here.',
    portfolio:
      'The existing visual archive contains general property-care imagery. No image on this page is presented as Fall Cleanup, Leaf Removal, a seasonal result or a city-specific project without verified provenance.',
  },
  reviews: {
    eyebrow: 'General customer feedback',
    heading: 'What customers say about working with Mo’s.',
    introduction:
      'The approved review source has no excerpt that explicitly confirms Fall Cleanup, Leaf Removal or leaf cleanup. These attributed comments are general company feedback, not proof of a fall-service task, method, timing or result.',
    items: [
      {
        name: 'Rick Terrones',
        quote:
          'Great service! Mo is very easy to work with. He gets right back to you when you leave a message.  Been with Mo for a few years! Good professional work!',
        sourceLabel: 'Google Review',
      },
      {
        name: 'Zach Ten Haken',
        quote:
          'On-time, quality, and professional service! Super positive experience - would use him again in a heartbeat over some other big companies in town!',
        sourceLabel: 'Google Review',
      },
    ],
  },
  serviceArea: {
    eyebrow: 'Des Moines metro coverage',
    heading: 'Share the property location and fall-season need.',
    description:
      "Fall Cleanup & Leaf Removal estimate requests can come from Mo's approved service area: Des Moines, Ankeny, Waukee, Norwalk and Altoona. Coverage does not establish completed leaf-removal work, timing or disposal practices in every community.",
    cities: ['Des Moines', 'Ankeny', 'Waukee', 'Norwalk', 'Altoona'],
    clarification:
      'This page does not create city-and-leaf routes or assign the neutral image and general reviews to a city without source evidence.',
  },
  faqIntro: {
    eyebrow: 'Fall Cleanup & Leaf Removal FAQs',
    heading: 'Useful boundaries before requesting an estimate.',
  },
  faqs: [
    {
      question: 'How do I request a Fall Cleanup & Leaf Removal estimate?',
      answer:
        'Use the Contact page to request a free estimate or call Mo’s. Describe the property location, the leaves or seasonal debris involved and the areas you want to discuss.',
    },
    {
      question: 'Are Fall Cleanup and Leaf Removal separate services on this site?',
      answer:
        'No. This one page owns both commercial intents so property owners have one clear estimate path instead of competing Fall Cleanup and Leaf Removal pages.',
    },
    {
      question: 'How is this different from Yard Cleanup?',
      answer:
        'Fall Cleanup & Leaf Removal is defined by the fall season and leaves. Yard Cleanup is the broader path for overgrowth or general property-cleanup concerns not defined by one season.',
    },
    {
      question: 'Is Lawn Mowing included with leaf removal?',
      answer:
        'No automatic mowing inclusion is published. Lawn Mowing has its own service path for routine grass cutting and can be discussed separately if the property needs it.',
    },
    {
      question: 'Does Fall Cleanup include Snow Removal?',
      answer:
        'No bundle or automatic transition is published. Snow Removal has its own service path and remains a separate winter request.',
    },
    {
      question: 'What handling, timing or price is included?',
      answer:
        'The approved public facts do not publish collection, bagging, hauling, disposal, hard-surface clearing, equipment, fixed dates, pricing or contract terms. Use the free estimate to confirm the exact property scope and current availability.',
    },
  ],
  finalCta: {
    eyebrow: 'Ready to discuss the fall property need?',
    heading: 'Request a Fall Cleanup & Leaf Removal estimate.',
    description:
      'Tell Mo’s about the property, the leaves or seasonal debris and the questions you want answered.',
  },
} as const satisfies ServiceDetailContent
