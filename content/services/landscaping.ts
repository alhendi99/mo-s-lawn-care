import { getReviewExcerpt } from '../reviews.ts'
import type { ServiceDetailContent } from './types.ts'

export const landscapingService = {
  slug: 'landscaping',
  routeId: 'service-landscaping',
  schema: {
    name: 'Landscaping Services',
    serviceType: 'Landscaping',
  },
  hero: {
    eyebrow: 'Residential + commercial landscaping',
    summary:
      "Mo's offers landscaping for residential and commercial outdoor spaces. View a small selection from the existing visual archive and request a free property estimate.",
    compactHeading: true,
    image: {
      src: '/media/gallery8.webp',
      width: 1600,
      height: 1200,
      alt: 'Green lawn area between a wooden deck, walkway, trees and a detached garage',
      caption: 'Existing paired archive image · no city or exact service attribution',
      provenance: 'existing-property-care-gallery',
    },
  },
  introduction: {
    eyebrow: 'Start with the outdoor space',
    heading: 'A focused path for property appearance and care.',
    paragraphs: [
      'Landscaping in Des Moines, IA can begin with a simple question: which part of the outdoor space needs attention, and what would you like to discuss through an estimate? This page keeps that conversation at the level supported by the approved business facts.',
      'People comparing landscaping services in Des Moines, a landscaping company in Des Moines or residential landscaping in Des Moines can use this page without assuming a design, installation or construction scope. Landscape maintenance in Des Moines is also relevant search language, but specific maintenance tasks still need confirmation for the property.',
    ],
    decisionPoints: [
      {
        number: '01',
        title: 'Appearance is the main concern',
        description:
          'Use Landscaping when the request centers on how an outdoor space looks or is cared for, while leaving exact tasks and materials to the estimate conversation.',
      },
      {
        number: '02',
        title: 'The property context is clear',
        description:
          'Residential and commercial estimates are both supported. Share the property type, location and outdoor area that needs attention.',
      },
      {
        number: '03',
        title: 'A neighboring service may fit better',
        description:
          'Flower Bed Maintenance, Yard Cleanup and Grading each own a more specific need. Compare those paths instead of assuming they are included in Landscaping.',
      },
    ],
  },
  scope: {
    eyebrow: 'Confirmed capability boundary',
    heading: 'Landscaping, without an invented project scope.',
    introduction:
      'Landscaping is an advertised service. The approved public facts do not define a standard design, installation, construction or maintenance package, so this page does not create one.',
    items: [
      {
        title: 'Outdoor-space landscaping',
        description:
          'The service can be discussed for an outdoor space that needs focused care or improvement. The estimate is where the requested area and exact work can be confirmed.',
      },
      {
        title: 'Landscape-area upkeep',
        description:
          'Maintaining the appearance of an existing outdoor space may be part of the request. No mulch, edging, planting, tree, shrub or hardscape task is presented as a standard inclusion.',
      },
      {
        title: 'Property-specific estimate',
        description:
          'Tell Mo’s what you see and what you want to discuss. No drawings, material plan, formal project sequence, price, contract or result guarantee is published here.',
      },
    ],
  },
  relatedServicesIntro: {
    eyebrow: 'Keep service ownership clear',
    heading: 'Choose the route that matches the property need.',
    description:
      'Landscaping stays broad enough for an estimate conversation while these focused services keep their own intent.',
  },
  relatedServices: [
    {
      routeId: 'service-flower-bed-maintenance',
      eyebrow: 'For routine bed care',
      description:
        'Use Flower Bed Maintenance when ongoing flower- or landscape-bed upkeep is the primary need rather than broader landscaping.',
    },
    {
      routeId: 'service-grading',
      eyebrow: 'For uneven ground',
      description:
        'Use Grading when ground level or area preparation is the main concern. It remains separate and does not imply drainage engineering.',
    },
    {
      routeId: 'service-yard-cleanup',
      eyebrow: 'For cleanup or reset needs',
      description:
        'Use Yard Cleanup when overgrowth, debris or a broader outdoor reset is the central issue rather than landscaping upkeep.',
    },
  ],
  propertyContext: {
    eyebrow: 'Two property contexts',
    heading: 'Outdoor-space conversations for homes and businesses.',
    residential:
      'Homeowners can request a residential landscaping estimate and describe the area, its current appearance and the goal they want to discuss.',
    commercial:
      'Commercial properties can request a landscaping estimate. Broader business-property needs belong on the Commercial Property Services page.',
    portfolio:
      'The Our Work destination is the broader visual archive. This page uses only a small local asset subset and does not attach an unverified city, customer or exact service history to an image.',
  },
  workPreview: {
    eyebrow: 'A small visual preview',
    heading: 'Three views from the existing archive.',
    introduction:
      'These local assets were already part of the site. Their descriptions are limited to what is visible; they are not presented as proof of design, installation, construction or work in a particular city.',
    images: [
      {
        src: '/media/gallery7.webp',
        width: 1600,
        height: 1200,
        alt: 'Outdoor area with exposed soil and dark material placed in several sections beneath trees',
        caption: 'Exposed soil and dark material beneath mature trees',
        provenance: 'existing-property-care-gallery',
        cityAttribution: null,
        serviceAttribution: null,
      },
      {
        src: '/media/gallery9.webp',
        width: 1600,
        height: 1200,
        alt: 'Rolled turf in a wheelbarrow beside an edged soil area and fenced lawn',
        caption: 'Rolled turf beside an edged soil area and lawn',
        provenance: 'existing-property-care-gallery',
        cityAttribution: null,
        serviceAttribution: null,
      },
      {
        src: '/media/gallery11.webp',
        width: 1600,
        height: 1200,
        alt: 'Person using a walk-behind machine across exposed soil inside a fenced yard',
        caption: 'Exposed soil being worked inside a fenced yard',
        provenance: 'existing-property-care-gallery',
        cityAttribution: null,
        serviceAttribution: null,
      },
    ],
    clarification:
      'The full 79-image source list is not sent to this page. View Our Work for the broader archive as that destination develops.',
  },
  reviews: {
    eyebrow: 'General customer feedback',
    heading: 'What customers say about working with Mo’s.',
    introduction:
      'No approved review excerpt verifies completed landscaping work. These attributed comments are general company feedback, not proof of a landscaping capability, project or result.',
    items: [getReviewExcerpt('google-review-008'), getReviewExcerpt('google-review-041')],
  },
  serviceArea: {
    eyebrow: 'Des Moines metro coverage',
    heading: 'Bring the property location into the conversation.',
    description:
      "Landscaping estimate requests can come from Mo's approved service area: Des Moines, Ankeny, Waukee, Norwalk and Altoona. Coverage does not establish a landscaping project in each city.",
    cities: ['Des Moines', 'Ankeny', 'Waukee', 'Norwalk', 'Altoona'],
    clarification:
      'This page does not create city-and-landscaping landing pages or assign its images and reviews to a community without source evidence.',
  },
  faqIntro: {
    eyebrow: 'Landscaping FAQs',
    heading: 'Clear boundaries before you request an estimate.',
  },
  faqs: [
    {
      question: 'How do I request a landscaping estimate?',
      answer:
        'Use the Contact page to request a free estimate or call Mo’s. Describe the property, the outdoor area that needs attention and what you want to discuss.',
    },
    {
      question: 'Does Mo’s provide residential and commercial landscaping?',
      answer:
        'Residential and commercial estimates are supported. Use Commercial Property Services when the business property has broader lawn care, cleanup, landscaping or snow-removal needs.',
    },
    {
      question: 'How is Landscaping different from Flower Bed Maintenance?',
      answer:
        'Flower Bed Maintenance owns routine bed-care intent. Landscaping is the broader estimate path for an outdoor space, and this page does not treat bed maintenance as an automatic inclusion.',
    },
    {
      question: 'How is Landscaping different from Yard Cleanup?',
      answer:
        'Yard Cleanup owns overgrown-yard, debris and broader reset needs. Landscaping is not used here as another name for whole-yard cleanup.',
    },
    {
      question: 'Is Grading included with Landscaping?',
      answer:
        'No automatic inclusion is published. Grading has its own service path for uneven ground or area-preparation concerns and does not establish drainage engineering.',
    },
    {
      question: 'Where can I view more of Mo’s work?',
      answer:
        'Use Our Work for the broader visual archive. Image descriptions remain limited to verified or directly observable details rather than invented city or service labels.',
    },
  ],
  finalCta: {
    eyebrow: 'Ready to discuss the outdoor space?',
    heading: 'Request a free landscaping estimate.',
    description:
      'Tell Mo’s about the property, the area that needs attention and the questions you want answered.',
  },
} as const satisfies ServiceDetailContent
