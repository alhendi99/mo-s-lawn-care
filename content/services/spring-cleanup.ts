import { getReviewExcerpt } from '../reviews.ts'
import type { ServiceDetailContent } from './types.ts'

export const springCleanupService = {
  slug: 'spring-cleanup',
  routeId: 'service-spring-cleanup',
  schema: {
    name: 'Spring Yard Cleanup',
    serviceType: 'Spring cleanup',
  },
  hero: {
    eyebrow: 'Spring cleanup · seasonal property care',
    summary:
      "Mo's offers Spring Cleanup for residential and commercial properties preparing for the growing season. Request a free estimate to describe the property and the seasonal attention it needs.",
    compactHeading: true,
    image: {
      src: '/contact.webp',
      width: 1031,
      height: 580,
      alt: 'Lawns, young trees, driveways and homes along a residential street',
      caption: 'Existing neutral property image · no spring, service, result, city or customer attribution',
      provenance: 'existing-neutral-property-image',
    },
  },
  introduction: {
    eyebrow: 'Start with the season',
    heading: 'A focused service path as the growing season approaches.',
    paragraphs: [
      'Spring cleanup in Des Moines, IA is the seasonal service path when a property needs attention as the growing season approaches. It stays distinct from routine mowing, bed-specific maintenance and broader non-seasonal Yard Cleanup.',
      'People comparing spring yard cleanup in Des Moines, spring lawn cleanup in Des Moines or seasonal yard cleanup in Des Moines can use this commercial service page to decide whether to request an estimate. It stays focused on choosing a professional service and starting a property-specific estimate conversation.',
    ],
    decisionPoints: [
      {
        number: '01',
        title: 'Spring is the defining context',
        description:
          'Choose Spring Cleanup when the seasonal transition is the reason the property needs attention, rather than treating the request as general Yard Cleanup.',
      },
      {
        number: '02',
        title: 'The property needs a specific conversation',
        description:
          'Describe the areas that need attention when requesting an estimate. This page does not turn the broad service label into a blanket list of included tasks.',
      },
      {
        number: '03',
        title: 'Ongoing or specialized needs stay separate',
        description:
          'Lawn Mowing, Flower Bed Maintenance and Landscaping each keep their own service purpose instead of becoming automatic Spring Cleanup inclusions.',
      },
    ],
  },
  scope: {
    eyebrow: 'Confirmed capability boundary',
    heading: 'Spring Cleanup, with exact scope confirmed by estimate.',
    introduction:
      'Spring Cleanup is an advertised service. The approved public facts do not define a standard task list, process or seasonal schedule, so this page keeps the service at the verified high level.',
    items: [
      {
        title: 'Seasonal spring attention',
        description:
          'Use this path when a property needs seasonal cleanup attention as the growing season approaches. The exact areas and requested work can be discussed through the estimate.',
      },
      {
        title: 'Residential + commercial context',
        description:
          'Home and business properties can request an estimate. This does not create a commercial-only program, recurring agreement or standard package.',
      },
      {
        title: 'Property-specific estimate',
        description:
          'Tell Mo’s about the property, its location and what needs attention. No price, fixed date, weather promise or guaranteed outcome is published here.',
      },
    ],
  },
  relatedServicesIntro: {
    eyebrow: 'Keep neighboring needs separate',
    heading: 'Choose the route that matches the property need.',
    description:
      'Spring Cleanup remains seasonal while routine mowing, bed maintenance, general cleanup and landscaping keep distinct purposes.',
  },
  relatedServices: [
    {
      routeId: 'service-lawn-mowing',
      eyebrow: 'For routine grass cutting',
      description:
        'Use Lawn Mowing when grass length and a maintained appearance are the main concerns; mowing is not presented as a Spring Cleanup inclusion.',
    },
    {
      routeId: 'service-flower-bed-maintenance',
      eyebrow: 'For bed-specific maintenance',
      description:
        'Use Flower Bed Maintenance when an existing flower or landscape bed is the focus rather than the wider seasonal property need.',
    },
    {
      routeId: 'service-yard-cleanup',
      eyebrow: 'For broader, non-seasonal cleanup',
      description:
        'Use Yard Cleanup when the overall property condition or overgrowth is the defining concern instead of the spring season.',
    },
    {
      routeId: 'service-landscaping',
      eyebrow: 'For the wider outdoor space',
      description:
        'Use Landscaping when the request is about broader outdoor-space care or improvement rather than seasonal Spring Cleanup.',
    },
  ],
  helpfulResources: {
    eyebrow: 'Helpful resources',
    heading: 'A condition-led spring checklist.',
    description:
      "Use this informational guide to organize a property review as spring begins. It does not define the tasks included in Mo's Spring Cleanup service.",
    items: [
      {
        routeId: 'article-spring-lawn-cleanup-des-moines',
        eyebrow: 'Spring cleanup checklist',
        description:
          'Read the Des Moines-area checklist for general observations and next-step decisions.',
      },
    ],
  },
  propertyContext: {
    eyebrow: 'Property context first',
    heading: 'Spring Cleanup estimates for homes and businesses.',
    residential:
      'Homeowners can request a Spring Cleanup estimate and describe the property areas and seasonal concerns they want to discuss.',
    commercial:
      'Commercial properties can request a Spring Cleanup estimate. No maintenance contract, campus program or recurring seasonal agreement is represented here.',
    portfolio:
      'The existing visual archive contains general property-care imagery. No image on this page is presented as Spring Cleanup work, a seasonal result or a city-specific project without verified provenance.',
  },
  reviews: {
    eyebrow: 'General customer feedback',
    heading: 'What customers say about working with Mo’s.',
    introduction:
      'The approved review source has no excerpt that explicitly confirms Spring Cleanup. These attributed comments are general company feedback, not proof of a Spring Cleanup task, process, timing or result.',
    items: [getReviewExcerpt('google-review-008'), getReviewExcerpt('google-review-041')],
  },
  serviceArea: {
    eyebrow: 'Des Moines metro coverage',
    heading: 'Share the property location and seasonal need.',
    description:
      "Spring Cleanup estimate requests can come from Mo's approved service area: Des Moines, Ankeny, Waukee, Norwalk and Altoona. Coverage does not establish completed Spring Cleanup work or a special seasonal schedule in every community.",
    cities: ['Des Moines', 'Ankeny', 'Waukee', 'Norwalk', 'Altoona'],
    clarification:
      'This page does not create city-and-Spring Cleanup routes or assign the neutral image and general reviews to a city without source evidence.',
  },
  faqIntro: {
    eyebrow: 'Spring Cleanup FAQs',
    heading: 'Useful distinctions before requesting an estimate.',
  },
  faqs: [
    {
      question: 'How do I request a Spring Cleanup estimate?',
      answer:
        'Use the Contact page to request a free estimate or call Mo’s. Describe the property location, the areas that need attention and the seasonal need you want to discuss.',
    },
    {
      question: 'How is Spring Cleanup different from Yard Cleanup?',
      answer:
        'Spring Cleanup is defined by the seasonal spring context. Yard Cleanup is the broader path for overgrown or general property-cleanup concerns that are not defined by one season.',
    },
    {
      question: 'Is Lawn Mowing included with Spring Cleanup?',
      answer:
        'No automatic mowing inclusion is published. Lawn Mowing has its own service path for routine grass cutting and can be discussed separately if the property needs it.',
    },
    {
      question: 'Are Flower Bed Maintenance or Landscaping included?',
      answer:
        'No automatic inclusion is published. Flower Bed Maintenance and Landscaping have separate service paths for bed-specific and broader outdoor-space needs.',
    },
    {
      question: 'What exact work is included with Spring Cleanup?',
      answer:
        'The approved public facts do not publish a standard task list or process. Use the free estimate to confirm the exact scope for the property rather than assuming a blanket inclusion.',
    },
    {
      question: 'When is Spring Cleanup scheduled?',
      answer:
        'This page does not publish fixed spring dates, a weather-independent schedule or a completion guarantee. Share the property and timing question when requesting an estimate.',
    },
  ],
  finalCta: {
    eyebrow: 'Ready to discuss the property?',
    heading: 'Request a free Spring Cleanup estimate.',
    description:
      'Tell Mo’s about the property, its location and the seasonal attention you want to discuss.',
  },
} as const satisfies ServiceDetailContent
