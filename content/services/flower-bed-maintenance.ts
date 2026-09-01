import { getReviewExcerpt } from '../reviews.ts'
import type { ServiceDetailContent } from './types.ts'

export const flowerBedMaintenanceService = {
  slug: 'flower-bed-maintenance',
  routeId: 'service-flower-bed-maintenance',
  schema: {
    name: 'Flower Bed Maintenance',
    serviceType: 'Flower bed maintenance',
  },
  hero: {
    eyebrow: 'Flower + landscape bed maintenance',
    summary:
      "Mo's offers Flower Bed Maintenance for residential and commercial properties. Request a free estimate to describe the existing bed area and the attention it needs.",
    compactHeading: true,
    image: {
      src: '/media/gallery7.webp',
      width: 1600,
      height: 1200,
      alt: 'Outdoor area with exposed soil, trees, low plants and several piles of dark material',
      caption: 'Existing gallery image · observable outdoor area only; no service or city attribution',
      provenance: 'existing-property-care-gallery',
    },
  },
  introduction: {
    eyebrow: 'Start with the bed area',
    heading: 'A dedicated path for beds that need maintenance attention.',
    paragraphs: [
      'Flower bed maintenance in Des Moines keeps the conversation centered on existing flower- and landscape-bed areas rather than a whole-yard project or broader landscaping request.',
      'People searching for landscape bed maintenance in Des Moines, flower bed cleanup in Des Moines, garden bed maintenance in Des Moines or bed cleanup in Des Moines can use this one consolidated page. Those phrases describe the need; they do not establish a standard task list or process.',
    ],
    decisionPoints: [
      {
        number: '01',
        title: 'The bed area is the main concern',
        description:
          'Choose this service path when an existing flower or landscape bed needs attention and broader outdoor-space work is not the main request.',
      },
      {
        number: '02',
        title: 'An orderly appearance is the goal',
        description:
          'Describe what looks out of place or needs attention. The estimate conversation can confirm what work is appropriate for that property.',
      },
      {
        number: '03',
        title: 'A broader service may fit better',
        description:
          'Landscaping, Yard Cleanup and seasonal Cleanup services keep their own purposes. Compare those paths rather than treating every outdoor need as bed maintenance.',
      },
    ],
  },
  scope: {
    eyebrow: 'Confirmed capability boundary',
    heading: 'Bed maintenance, without an invented checklist.',
    introduction:
      'Flower Bed Maintenance is an advertised service. The approved public facts do not define a standard gardening process, material package or recurring schedule, so this page does not create one.',
    items: [
      {
        title: 'Existing bed areas',
        description:
          'The service path is for existing flower and landscape beds that need maintenance attention. It does not publish planting, design, installation or plant-health work as a standard inclusion.',
      },
      {
        title: 'Cleaner, more orderly beds',
        description:
          'A cleaner, maintained appearance can frame the estimate request. No weed-free result, perfect edge, bloom, growth or permanent appearance is promised.',
      },
      {
        title: 'Property-specific estimate',
        description:
          'Tell Mo’s about the bed area and what you observe. Exact tasks, timing and any materials must be confirmed for the property rather than assumed from this page.',
      },
    ],
  },
  relatedServicesIntro: {
    eyebrow: 'Keep neighboring needs separate',
    heading: 'Choose the service that matches the area in question.',
    description:
      'Flower Bed Maintenance remains specific to bed areas while broader landscaping and cleanup needs keep their own routes.',
  },
  relatedServices: [
    {
      routeId: 'service-landscaping',
      eyebrow: 'For the broader outdoor space',
      description:
        'Use Landscaping when the request extends beyond a maintained bed area and the wider outdoor space is the main concern.',
    },
    {
      routeId: 'service-spring-cleanup',
      eyebrow: 'For broader spring needs',
      description:
        'Use Spring Cleanup when seasonal property cleanup is the primary need rather than maintenance centered on bed areas.',
    },
    {
      routeId: 'service-fall-cleanup-leaf-removal',
      eyebrow: 'For leaves and fall cleanup',
      description:
        'Use Fall Cleanup & Leaf Removal when leaves or broader fall property cleanup are the main concern.',
    },
    {
      routeId: 'service-yard-cleanup',
      eyebrow: 'For a broader property reset',
      description:
        'Use Yard Cleanup when overgrowth or whole-yard cleanup needs extend beyond flower and landscape beds.',
    },
  ],
  propertyContext: {
    eyebrow: 'Property context first',
    heading: 'Bed-maintenance estimates for homes and businesses.',
    residential:
      'Homeowners can request a Flower Bed Maintenance estimate and describe the existing bed area, the property location and what needs attention.',
    commercial:
      'Commercial properties can request a Flower Bed Maintenance estimate. No recurring bed-care agreement or horticultural program is represented as a standard offering.',
    portfolio:
      'The existing visual archive contains general property-care imagery. No image on this page is presented as a Flower Bed Maintenance project, result or city-specific example without verified provenance.',
  },
  reviews: {
    eyebrow: 'Customer feedback, carefully labeled',
    heading: 'One bed-related experience and general feedback.',
    introduction:
      'One attributed review explicitly mentions the customer’s landscape beds. Its wording describes that individual experience, not a standard bed-maintenance process, inclusion or result; the second comment is general company feedback.',
    items: [getReviewExcerpt('google-review-014'), getReviewExcerpt('google-review-008')],
  },
  serviceArea: {
    eyebrow: 'Des Moines metro coverage',
    heading: 'Share the bed area and property location.',
    description:
      "Flower Bed Maintenance estimate requests can come from Mo's approved service area: Des Moines, Ankeny, Waukee, Norwalk and Altoona. Coverage does not establish bed-maintenance work in every community.",
    cities: ['Des Moines', 'Ankeny', 'Waukee', 'Norwalk', 'Altoona'],
    clarification:
      'This page does not create city-and-flower-bed routes or assign the image and reviews to a city without source evidence.',
  },
  faqIntro: {
    eyebrow: 'Flower Bed Maintenance FAQs',
    heading: 'Useful distinctions before requesting an estimate.',
  },
  faqs: [
    {
      question: 'How do I request a Flower Bed Maintenance estimate?',
      answer:
        'Use the Contact page to request a free estimate or call Mo’s. Describe the existing bed area, property location and what needs attention.',
    },
    {
      question: 'How is Flower Bed Maintenance different from Landscaping?',
      answer:
        'Flower Bed Maintenance centers on existing bed areas. Landscaping is the broader estimate path when the wider outdoor space is the main concern, and neither service is presented as an automatic inclusion in the other.',
    },
    {
      question: 'When is Yard Cleanup the better path?',
      answer:
        'Use Yard Cleanup when overgrowth or broader whole-yard cleanup is the primary need. This page remains focused on flower and landscape beds.',
    },
    {
      question: 'Are spring and fall cleanup part of this service?',
      answer:
        'No seasonal cleanup package is published as part of Flower Bed Maintenance. Spring Cleanup and Fall Cleanup & Leaf Removal have separate service paths for broader seasonal needs.',
    },
    {
      question: 'Does Mo’s serve residential and commercial properties?',
      answer:
        'Mo’s approved business facts support residential and commercial property service. Share the property type and location with the estimate request.',
    },
    {
      question: 'What exact work is included?',
      answer:
        'The approved public facts do not publish a standard task list, materials, technical process, visit schedule, price, contract or guaranteed result. Use the free estimate to confirm what the specific bed area needs.',
    },
  ],
  finalCta: {
    eyebrow: 'Ready to discuss the bed area?',
    heading: 'Request a Flower Bed Maintenance estimate.',
    description:
      'Tell Mo’s about the property, the existing bed area and the questions you want answered.',
  },
} as const satisfies ServiceDetailContent
