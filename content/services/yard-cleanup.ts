import { getReviewExcerpt } from '../reviews.ts'
import type { ServiceDetailContent } from './types.ts'

export const yardCleanupService = {
  slug: 'yard-cleanup',
  routeId: 'service-yard-cleanup',
  schema: {
    name: 'Yard Cleanup Service',
    serviceType: 'Yard cleanup',
  },
  hero: {
    eyebrow: 'Yard cleanup · overgrown-property context',
    summary:
      "Mo's offers Yard Cleanup for residential and commercial properties with overgrown yards or outdoor areas that need broader cleanup attention. Request a free property estimate to describe what you see.",
    compactHeading: true,
    image: {
      src: '/yard-cleanup.webp',
      width: 1031,
      height: 580,
      alt: 'Lawns, young trees, driveways and homes along a residential street',
      caption: 'Existing neutral property image · no cleanup, result, city or customer attribution',
      provenance: 'existing-neutral-property-image',
    },
  },
  introduction: {
    eyebrow: 'Start with the whole property need',
    heading: 'When the yard needs more than routine mowing.',
    paragraphs: [
      'Yard cleanup in Des Moines, IA is the broader service path when overgrowth or the overall condition of an outdoor area is the main concern rather than routine grass cutting or maintenance centered on one flower bed.',
      'People comparing a yard cleanup service in Des Moines, overgrown yard cleanup in Des Moines, property cleanup in Des Moines, ground clearance in Des Moines or overgrown lawn cleanup in Des Moines can use this one consolidated page. Here, Ground Clearance is an ordinary property-care label, not a claim of heavy land-clearing work.',
    ],
    decisionPoints: [
      {
        number: '01',
        title: 'The need is broader than grass length',
        description:
          'Choose Yard Cleanup when the overall condition of the yard or outdoor area is the concern. Lawn Mowing keeps regular grass-cutting intent on its own service path.',
      },
      {
        number: '02',
        title: 'Overgrowth is part of the picture',
        description:
          'Describe the overgrown areas you see when requesting an estimate. This page does not turn that description into a fixed cutting, clearing or removal process.',
      },
      {
        number: '03',
        title: 'Structural ground work is a separate question',
        description:
          'If uneven ground or area preparation is the central concern, review Grading rather than assuming it is part of Yard Cleanup.',
      },
    ],
  },
  scope: {
    eyebrow: 'Confirmed capability boundary',
    heading: 'Ordinary property cleanup, without heavy-clearing assumptions.',
    introduction:
      'Yard Cleanup, Overgrown Yards Cleanup and Ground Clearance share this one service path. The approved public facts support the high-level cleanup category, but they do not define a standard task list, equipment list or disposal process.',
    items: [
      {
        title: 'General yard cleanup',
        description:
          'Use this path when a yard or outdoor area needs broader cleanup attention. The estimate conversation can confirm the exact area and requested scope for the property.',
      },
      {
        title: 'Overgrown-property context',
        description:
          'Overgrown yard and overgrown lawn concerns belong here when routine mowing does not describe the whole need. No universal cleanup sequence or outcome is promised.',
      },
      {
        title: 'Ground Clearance terminology',
        description:
          'Ground Clearance is consolidated here only for ordinary property-care search intent. It does not establish lot clearing, excavation, grading, demolition or land-development capability.',
      },
    ],
  },
  relatedServicesIntro: {
    eyebrow: 'Keep neighboring needs separate',
    heading: 'Choose the route that matches the property condition.',
    description:
      'Routine mowing, seasonal cleanup, structural ground work and landscaping each retain a distinct service purpose.',
  },
  relatedServices: [
    {
      routeId: 'service-lawn-mowing',
      eyebrow: 'For ongoing grass cutting',
      description:
        'Use Lawn Mowing when regular grass cutting is the primary need rather than a broader overgrown-property cleanup.',
    },
    {
      routeId: 'service-spring-cleanup',
      eyebrow: 'For spring-specific needs',
      description:
        'Use Spring Cleanup when the season is the defining context instead of treating every spring request as general Yard Cleanup.',
    },
    {
      routeId: 'service-fall-cleanup-leaf-removal',
      eyebrow: 'For fall and leaf intent',
      description:
        'Use Fall Cleanup & Leaf Removal when leaves or broader fall-season needs are the main concern.',
    },
    {
      routeId: 'service-grading',
      eyebrow: 'For uneven ground',
      description:
        'Use Grading when ground level or area preparation is the main issue. It is not presented as part of Yard Cleanup.',
    },
    {
      routeId: 'service-landscaping',
      eyebrow: 'For broader outdoor-space care',
      description:
        'Use Landscaping when the outdoor space needs a landscaping conversation rather than cleanup centered on its current condition.',
    },
  ],
  propertyContext: {
    eyebrow: 'Property context first',
    heading: 'Cleanup estimates for homes and businesses.',
    residential:
      'Homeowners can request a Yard Cleanup estimate and describe the outdoor areas, property condition and questions that need attention.',
    commercial:
      'Commercial properties can request a Yard Cleanup estimate. No recurring cleanup schedule or standard maintenance agreement is represented here.',
    portfolio:
      'The existing visual archive contains general property-care imagery. No image on this page is presented as a Yard Cleanup, overgrown-property or Ground Clearance project without verified provenance.',
  },
  reviews: {
    eyebrow: 'Yard cleanup in their words',
    heading: 'Customer feedback that explicitly mentions cleanup.',
    introduction:
      'These attributed excerpts come from the approved Google review source and explicitly describe yard cleanup. They are individual customer experiences, not proof of a standard process, inclusion, turnaround or guaranteed result.',
    items: [getReviewExcerpt('google-review-038'), getReviewExcerpt('google-review-048')],
  },
  serviceArea: {
    eyebrow: 'Des Moines metro coverage',
    heading: 'Describe the property condition and location.',
    description:
      "Yard Cleanup estimate requests can come from Mo's approved service area: Des Moines, Ankeny, Waukee, Norwalk and Altoona. Coverage does not establish a cleanup project in every community.",
    cities: ['Des Moines', 'Ankeny', 'Waukee', 'Norwalk', 'Altoona'],
    clarification:
      'This page does not create city-and-cleanup routes or assign the neutral image and customer reviews to a city without source evidence.',
  },
  faqIntro: {
    eyebrow: 'Yard Cleanup FAQs',
    heading: 'Useful boundaries before requesting an estimate.',
  },
  faqs: [
    {
      question: 'How do I request a Yard Cleanup estimate?',
      answer:
        'Use the Contact page to request a free estimate or call Mo’s. Describe the property location, the outdoor areas involved and the condition you want to discuss.',
    },
    {
      question: 'How is Yard Cleanup different from Lawn Mowing?',
      answer:
        'Yard Cleanup is the broader path for overgrown or whole-property cleanup concerns. Lawn Mowing owns regular grass-cutting intent, and neither service is presented as an automatic inclusion in the other.',
    },
    {
      question: 'Is seasonal cleanup part of this service?',
      answer:
        'No spring- or fall-specific package is published as part of Yard Cleanup. Spring Cleanup and Fall Cleanup & Leaf Removal have separate service paths for seasonal intent.',
    },
    {
      question: 'What does Ground Clearance mean on this page?',
      answer:
        'It is a consolidated search and business label for ordinary outdoor-area cleanup. It does not establish heavy lot clearing, excavation, demolition, grading or land-development work.',
    },
    {
      question: 'Is Grading included with Yard Cleanup?',
      answer:
        'No automatic inclusion is published. Grading has its own service path for uneven ground or area-preparation concerns and remains separate from ordinary cleanup.',
    },
    {
      question: 'What exact work, equipment, hauling or disposal is included?',
      answer:
        'The approved public facts do not publish a standard task list, equipment list, hauling service or disposal process. Use the free estimate to confirm the exact scope for the property rather than assuming a blanket inclusion.',
    },
  ],
  finalCta: {
    eyebrow: 'Ready to discuss the property?',
    heading: 'Request a free Yard Cleanup estimate.',
    description:
      'Tell Mo’s about the property, the outdoor areas that need attention and the questions you want answered.',
  },
} as const satisfies ServiceDetailContent
