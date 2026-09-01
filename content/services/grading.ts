import { getReviewExcerpt } from '../reviews.ts'
import type { ServiceDetailContent } from './types.ts'

export const gradingService = {
  slug: 'grading',
  routeId: 'service-grading',
  schema: {
    name: 'Yard Grading Services',
    serviceType: 'Yard grading',
  },
  hero: {
    eyebrow: 'Yard grading · uneven-ground context',
    summary:
      "Mo's offers Yard Grading for residential and commercial properties with uneven ground or outdoor areas that need preparation. Request a free estimate to describe the property and the area in question.",
    compactHeading: true,
    image: {
      src: '/contact.webp',
      width: 1031,
      height: 580,
      alt: 'Lawns, young trees, driveways and homes along a residential street',
      caption: 'Existing neutral property image · no grading, result, city or customer attribution',
      loading: 'lazy',
      provenance: 'existing-neutral-property-image',
    },
  },
  introduction: {
    eyebrow: 'Start with the ground itself',
    heading: 'A focused service path for uneven outdoor ground.',
    paragraphs: [
      'Yard grading in Des Moines, IA is the service path to discuss when uneven ground or preparation of an outdoor area is the main property concern. The exact scope depends on the area in front of you and should be confirmed through an estimate.',
      'People comparing lawn grading in Des Moines, a grading service in Des Moines, property grading in Des Moines or uneven yard grading in Des Moines can use this one page. Those search phrases describe the same high-level service; they do not establish engineering, excavation or a guaranteed water-management result.',
    ],
    decisionPoints: [
      {
        number: '01',
        title: 'Uneven ground is the main concern',
        description:
          'Choose Grading when the shape of the outdoor ground is the central issue rather than overgrowth, debris or routine lawn care.',
      },
      {
        number: '02',
        title: 'An outdoor area needs preparation',
        description:
          'Describe the area and what you observe when requesting an estimate. This page keeps preparation at a high level and does not assume a construction use or material list.',
      },
      {
        number: '03',
        title: 'Technical details need separate confirmation',
        description:
          'The estimate conversation is the place to clarify the property-specific scope. No engineered plan, exact slope, equipment list or guaranteed outcome is published here.',
      },
    ],
  },
  scope: {
    eyebrow: 'Confirmed capability boundary',
    heading: 'Yard Grading, without specialized-work assumptions.',
    introduction:
      'Yard Grading is the approved high-level service. This page does not expand that offering into drainage engineering, foundation work, excavation services or engineered erosion control.',
    items: [
      {
        title: 'Uneven-ground concerns',
        description:
          'Use this service path when the ground appears uneven and the area itself is the focus. “Uneven” is a property observation here, not an engineering assessment or promise of a perfectly level result.',
      },
      {
        title: 'Outdoor-area preparation',
        description:
          'Preparing an outdoor area can be discussed at a high level. The site does not publish a construction use, excavation process, soil material, compaction method or follow-on lawn service as a standard inclusion.',
      },
      {
        title: 'Property-specific estimate',
        description:
          'Tell Mo’s about the property and the area you want to discuss. No price, technical plan, fixed process, permit service or guaranteed ground or water outcome is published here.',
      },
    ],
  },
  relatedServicesIntro: {
    eyebrow: 'Keep neighboring needs separate',
    heading: 'Choose the route that matches the property concern.',
    description:
      'Grading stays focused on uneven ground and high-level area preparation while cleanup and landscaping retain their own purposes.',
  },
  relatedServices: [
    {
      routeId: 'service-yard-cleanup',
      eyebrow: 'For overgrowth or broad cleanup',
      description:
        'Use Yard Cleanup when the overall condition of the property, overgrowth or ordinary cleanup is the central need rather than ground shaping.',
    },
    {
      routeId: 'service-landscaping',
      eyebrow: 'For the wider outdoor space',
      description:
        'Use Landscaping when broader outdoor-space appearance or care is the main concern. Landscaping is not presented as part of Grading.',
    },
  ],
  propertyContext: {
    eyebrow: 'Property context first',
    heading: 'Grading estimates for homes and businesses.',
    residential:
      'Homeowners can request a Yard Grading estimate and describe the uneven ground or outdoor area they want to discuss.',
    commercial:
      'Commercial properties can request a Yard Grading estimate. No site-development, engineering or construction program is represented here.',
    portfolio:
      'Our Work is the broader company portfolio. No image on this page or linked destination is presented as a verified Grading project, drainage result or city-specific example without supporting provenance.',
  },
  reviews: {
    eyebrow: 'General customer feedback',
    heading: 'What customers say about working with Mo’s.',
    introduction:
      'The approved review source has no excerpt that clearly confirms Grading work. These attributed comments are general company feedback, not proof of a Grading process, technical capability or result.',
    items: [getReviewExcerpt('google-review-008'), getReviewExcerpt('google-review-041')],
  },
  serviceArea: {
    eyebrow: 'Des Moines metro coverage',
    heading: 'Share the property location and uneven-ground concern.',
    description:
      "Yard Grading estimate requests can come from Mo's approved service area: Des Moines, Ankeny, Waukee, Norwalk and Altoona. Coverage does not establish completed Grading work, technical expertise or outcomes in every community.",
    cities: ['Des Moines', 'Ankeny', 'Waukee', 'Norwalk', 'Altoona'],
    clarification:
      'This page does not create city-and-Grading routes or assign the neutral image and general reviews to a city without source evidence.',
  },
  faqIntro: {
    eyebrow: 'Yard Grading FAQs',
    heading: 'Useful boundaries before requesting an estimate.',
  },
  faqs: [
    {
      question: 'How do I request a Yard Grading estimate?',
      answer:
        'Use the Contact page to request a free estimate or call Mo’s. Describe the property location, the uneven ground or outdoor area involved and the questions you want to discuss.',
    },
    {
      question: 'How is Grading different from Yard Cleanup?',
      answer:
        'Grading is the path for uneven-ground or high-level area-preparation concerns. Yard Cleanup is the separate path for overgrowth, ordinary property cleanup and Ground Clearance terminology.',
    },
    {
      question: 'How is Grading different from Landscaping?',
      answer:
        'Landscaping is the broader path for outdoor-space appearance or care. Neither Landscaping nor Grading is published as an automatic inclusion in the other.',
    },
    {
      question: 'What does uneven ground mean on this page?',
      answer:
        'It is a high-level description of what a property owner observes outdoors. It is not an engineering finding, an exact slope specification or a promise that the area will become perfectly level.',
    },
    {
      question: 'Does Yard Grading include drainage, foundation or excavation work?',
      answer:
        'This page does not advertise drainage engineering or correction, foundation work, excavation services or engineered erosion control. Any property-specific question should be raised during the estimate rather than treated as a blanket inclusion or promised outcome.',
    },
    {
      question: 'What exact process, equipment or materials are included?',
      answer:
        'The approved public facts do not publish a standard process, equipment list, exact slope, soil or material inclusion, compaction method, permit or utility-locating service. Use the free estimate to clarify the property-specific scope without assuming a guarantee.',
    },
  ],
  finalCta: {
    eyebrow: 'Ready to discuss the ground?',
    heading: 'Request a free Yard Grading estimate.',
    description:
      'Tell Mo’s about the property, the uneven ground or outdoor area and the questions you want answered.',
  },
} as const satisfies ServiceDetailContent
