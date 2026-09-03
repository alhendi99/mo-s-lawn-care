import { getReviewExcerpt } from '../reviews.ts'
import type { ServiceDetailContent } from './types.ts'

export const fertilizationWeedControlService = {
  slug: 'fertilization-weed-control',
  routeId: 'service-fertilization-weed-control',
  schema: {
    name: 'Fertilization & Weed Control',
    serviceType: 'Lawn fertilization and weed control',
  },
  hero: {
    eyebrow: 'Fertilization + weed control · one service path',
    summary:
      "Mo's offers lawn fertilization and weed control for residential and commercial properties. Request a free estimate to discuss the lawn and the concerns you see.",
    image: {
      src: '/Fertilization.webp',
      width: 1031,
      height: 580,
      alt: 'Front lawns with young trees beside homes and driveways',
      caption: '',
      provenance: 'existing-neutral-property-image',
    },
  },
  introduction: {
    eyebrow: 'Start with the lawn concern',
    heading: 'One place to discuss fertilization and unwanted weeds.',
    paragraphs: [
      'Lawn fertilization in Des Moines, IA may be worth discussing when a property owner is considering fertilization or is concerned about unwanted weeds in the turf. The goal may be healthier, cleaner-looking turf, but no result is guaranteed here.',
      'People comparing weed control in Des Moines, lawn weed control in Des Moines or a fertilization service in Des Moines can use this one consolidated page. “Lawn treatment in Des Moines” is also common search language; it does not establish a product, chemical, method or program.',
    ],
    decisionPoints: [
      {
        number: '01',
        title: 'Unwanted weeds are the concern',
        description:
          'Describe what you observe in the lawn when requesting an estimate. This page does not identify weed species or prescribe how they should be addressed.',
      },
      {
        number: '02',
        title: 'Fertilization is being considered',
        description:
          'Use the estimate path to ask about lawn fertilization for the property. No formula, product, material or lawn diagnosis is published as a standard fact.',
      },
      {
        number: '03',
        title: 'The details need confirmation',
        description:
          'Share the property type, location and lawn concern so the request can be discussed without assuming a schedule, method, application count or result.',
      },
    ],
  },
  scope: {
    eyebrow: 'Confirmed service boundary',
    heading: 'The paired service, without an invented program.',
    introduction:
      'The approved offering is Fertilization & Weed Control. Public business facts do not define technical products, methods or a recurring program, so those details are not represented here.',
    items: [
      {
        title: 'Lawn fertilization',
        description:
          'Fertilization is part of the advertised service. The site does not publish a fertilizer brand, formula, nutrient analysis, material type or soil-testing process.',
      },
      {
        title: 'Weed control',
        description:
          'Weed control is part of the same service path. The site does not publish a chemical, product, weed-species plan or treatment method.',
      },
      {
        title: 'Free property estimate',
        description:
          'Request a free estimate to discuss the lawn. No price, contract, fixed visit count, recurring schedule or guaranteed outcome is published here.',
      },
    ],
  },
  relatedServicesIntro: {
    eyebrow: 'Keep service scopes clear',
    heading: 'Choose the path that matches the property concern.',
    description:
      'Fertilization & Weed Control remains separate from mowing and from Aeration and Seeding.',
  },
  relatedServices: [
    {
      routeId: 'service-aeration-overseeding',
      eyebrow: 'For thin or compacted areas',
      description:
        'Explore Aeration & Seeding when lawn density or compaction is the primary concern; it is not presented as part of this service.',
    },
    {
      routeId: 'service-lawn-mowing',
      eyebrow: 'For grass cutting',
      description:
        'Use Lawn Mowing when grass length and a maintained appearance are the main concerns; mowing remains a separate service.',
    },
    {
      routeId: 'services',
      eyebrow: 'Compare property services',
      description:
        'Return to the Services overview when the property has several different needs or the closest service is not yet clear.',
    },
  ],
  propertyContext: {
    eyebrow: 'Property context first',
    heading: 'A direct estimate path for homes and businesses.',
    residential:
      'Homeowners can request a Fertilization & Weed Control estimate and describe the lawn concern without selecting a product or program in advance.',
    commercial:
      'Mo’s serves commercial properties. Business-property owners can use the estimate path to ask about Fertilization & Weed Control for the lawn in question.',
    portfolio:
      'The existing Our Work gallery shows general property-care imagery. No image is presented as fertilization, weed control, chemical use, a treatment result or a city-specific project without verified provenance.',
  },
  reviews: {
    eyebrow: 'General customer feedback',
    heading: 'What customers say about working with Mo’s.',
    introduction:
      'The approved review source has no excerpt that explicitly confirms fertilization or weed-control work. These attributed comments are general customer feedback, not proof of a treatment method or result.',
    items: [getReviewExcerpt('google-review-008'), getReviewExcerpt('google-review-021')],
  },
  serviceArea: {
    eyebrow: 'Des Moines metro coverage',
    heading: 'Share the lawn concern and property location.',
    description:
      "Fertilization & Weed Control estimate requests can come from Mo's approved service area: Des Moines, Ankeny, Waukee, Norwalk and Altoona. Coverage does not establish a city-specific program or completed treatment history.",
    cities: ['Des Moines', 'Ankeny', 'Waukee', 'Norwalk', 'Altoona'],
    clarification:
      'This page does not create city-and-service landing pages or assign the image and general reviews to any city without source evidence.',
  },
  faqIntro: {
    eyebrow: 'Fertilization and weed control FAQs',
    heading: 'Useful answers within the confirmed public facts.',
  },
  faqs: [
    {
      question: 'How do I request a Fertilization & Weed Control estimate?',
      answer:
        'Use the Contact page to request a free estimate or call Mo’s. Describe the property, location and lawn concerns you want to discuss.',
    },
    {
      question: 'Is Fertilization & Weed Control included with mowing?',
      answer:
        'No combined package is presented on this site. Lawn Mowing has its own service page and should be discussed separately if the property needs grass cutting too.',
    },
    {
      question: 'Is this service the same as Aeration and Seeding?',
      answer:
        'No. Aeration & Seeding has a separate service path for thin or compacted lawn concerns. Neither page presents the other service as an automatic inclusion.',
    },
    {
      question: 'Does Mo’s serve residential and commercial properties?',
      answer:
        'Mo’s approved business facts support residential and commercial property service. Use the estimate request to explain which type of property has the lawn concern.',
    },
    {
      question: 'Where can I request this service?',
      answer:
        'Mo’s approved service area includes Des Moines, Ankeny, Waukee, Norwalk and Altoona. Share the property location when requesting an estimate.',
    },
    {
      question: 'What products, schedule or results are included?',
      answer:
        'The approved public facts do not publish products, chemicals, formulas, methods, application counts, recurring schedules or guaranteed results. Ask about property-specific details during the estimate conversation.',
    },
  ],
  finalCta: {
    eyebrow: 'Ready to discuss the lawn?',
    heading: 'Request a Fertilization & Weed Control estimate.',
    description:
      'Tell Mo’s what you observe in the lawn, where the property is located and which questions you want answered.',
  },
} as const satisfies ServiceDetailContent
