import { getReviewExcerpt } from '../reviews.ts'
import type { ServiceDetailContent } from './types.ts'

export const aerationOverseedingService = {
  slug: 'aeration-overseeding',
  routeId: 'service-aeration-overseeding',
  schema: {
    name: 'Aeration and Seeding',
    serviceType: 'Lawn aeration and seeding',
  },
  hero: {
    eyebrow: 'Aeration and Seeding · one service path',
    summary:
      "Mo's offers Aeration and Seeding for lawns where thin areas or compaction are concerns. Request a free property estimate to discuss the lawn in front of you.",
    image: {
      src: '/aeration.webp',
      width: 1031,
      height: 580,
      alt: 'Front lawn with young trees beside homes and driveways',
      caption: '',
      provenance: 'existing-neutral-property-image',
    },
  },
  introduction: {
    eyebrow: 'Start with the lawn condition',
    heading: 'A measured next step for thin or compacted lawns.',
    paragraphs: [
      'Lawn aeration in Des Moines, IA may be worth discussing when a lawn feels compacted or has areas that look thin. Those concerns describe why someone may request an evaluation; they do not promise a particular result.',
      'For people comparing an aeration service in Des Moines, this is one consolidated Aeration and Seeding page. It also answers people using overseeding language while keeping the visible business offering consistent and separate from mowing, fertilization or seasonal cleanup.',
    ],
    decisionPoints: [
      {
        number: '01',
        title: 'Compaction is part of the concern',
        description:
          'Use the estimate request to describe where the ground seems compacted and what you observe in the lawn. The page does not assume a machine, pass count or aeration method.',
      },
      {
        number: '02',
        title: 'The lawn looks thin',
        description:
          'Seeding may be part of the conversation when lawn density is the concern. No seed blend, placement method, germination timeline or establishment result is promised here.',
      },
      {
        number: '03',
        title: 'The property needs an evaluation',
        description:
          'Share the property, the lawn condition and your questions so Mo’s can consider the request without relying on a generic package or fixed calendar date.',
      },
    ],
  },
  scope: {
    eyebrow: 'Confirmed service boundary',
    heading: 'Aeration and Seeding, without invented process details.',
    introduction:
      'The approved offering is Aeration and Seeding. This page explains the combined service at a high level and leaves property-specific methods, timing and expectations to the estimate conversation.',
    items: [
      {
        title: 'Aeration concerns',
        description:
          'Aeration is the service to ask about when compaction is among the lawn concerns. The site does not publish equipment, plug dimensions, a core process or a fixed number of passes.',
      },
      {
        title: 'Seeding concerns',
        description:
          'Lawn seeding questions can be discussed through the same estimate path when thin areas are part of the request. Seed type, placement and watering details are not presented as standard facts.',
      },
      {
        title: 'One property estimate',
        description:
          'Aeration and seeding in Des Moines starts with a free estimate request. No price, treatment package, fertilization add-on or result guarantee is published here.',
      },
    ],
  },
  relatedServicesIntro: {
    eyebrow: 'Related property needs',
    heading: 'Keep each lawn concern on the right service path.',
    description:
      'Use the condition you see outside to compare Aeration and Seeding with nearby services.',
  },
  relatedServices: [
    {
      routeId: 'service-fertilization-weed-control',
      eyebrow: 'When weeds are the concern',
      description:
        'Use Fertilization & Weed Control for treatment questions rather than assuming it is included with this service.',
    },
    {
      routeId: 'service-lawn-mowing',
      eyebrow: 'For routine grass cutting',
      description:
        'Explore Lawn Mowing when grass length and a maintained appearance are the primary concerns.',
    },
    {
      routeId: 'service-spring-cleanup',
      eyebrow: 'For seasonal property cleanup',
      description:
        'Spring Cleanup is the relevant path when debris or broader seasonal yard needs are the main issue.',
    },
    {
      routeId: 'services',
      eyebrow: 'Compare every service',
      description:
        'Return to the Services overview if the lawn or property has several different needs.',
    },
  ],
  helpfulResources: {
    eyebrow: 'Helpful resources',
    heading: 'Iowa timing guides for lawn decisions.',
    description:
      "These informational guides explain general timing considerations for aeration and overseeding. They do not set Mo's schedule or promise availability.",
    items: [
      {
        routeId: 'article-when-to-aerate-lawn-iowa',
        eyebrow: 'Aeration timing guide',
        description:
          'Read the Iowa aeration guide for general timing factors and signs that can inform a property conversation.',
      },
      {
        routeId: 'article-best-time-to-overseed-lawn-iowa',
        eyebrow: 'Overseeding timing guide',
        description:
          'Review general Iowa overseeding timing and the conditions that can affect a seeding decision.',
      },
    ],
  },
  propertyContext: {
    eyebrow: 'Property context first',
    heading: 'A service conversation shaped by the lawn, not a stock package.',
    residential:
      'Homeowners can request an Aeration and Seeding estimate and describe the thin or compacted areas they see without choosing a method or package in advance.',
    commercial:
      'Mo’s serves commercial properties. Business-property owners can use the estimate path to ask whether Aeration and Seeding fits the lawn in question.',
    portfolio:
      'The existing Our Work gallery shows general property-care imagery. No image is presented as an aeration, seeding, overseeding or city-specific project without verified provenance.',
  },
  reviews: {
    eyebrow: 'Aeration in their words',
    heading: 'Customer feedback that explicitly mentions aeration.',
    introduction:
      'These attributed excerpts come from the approved Google review source. They describe individual customer experiences and are not process, timing or result guarantees.',
    items: [getReviewExcerpt('google-review-005'), getReviewExcerpt('google-review-035')],
  },
  serviceArea: {
    eyebrow: 'Des Moines metro coverage',
    heading: 'Describe the lawn and where the property is located.',
    description:
      "Aeration and Seeding estimate requests can come from Mo's approved service area: Des Moines, Ankeny, Waukee, Norwalk and Altoona. Coverage does not imply a completed project in each city.",
    cities: ['Des Moines', 'Ankeny', 'Waukee', 'Norwalk', 'Altoona'],
    clarification:
      'This page does not create city-specific aeration, seeding or overseeding pages, and it does not assign the image or reviews to a city without source evidence.',
  },
  faqIntro: {
    eyebrow: 'Aeration and Seeding FAQs',
    heading: 'Straight answers without assuming a method or result.',
  },
  faqs: [
    {
      question: 'Are aeration, seeding and overseeding separate services on this site?',
      answer:
        'No. This one page owns the combined commercial intent. The company terminology is Aeration and Seeding; “overseeding” appears in the URL and copy because people also search for overseeding in Des Moines or lawn seeding in Des Moines.',
    },
    {
      question: 'Does Mo’s use a specific core-aeration method?',
      answer:
        'The approved public facts do not specify a machine or method. People searching for core aeration in Des Moines can use this page to request an estimate and ask what is appropriate for their property.',
    },
    {
      question: 'What seed mix or placement method does Mo’s use?',
      answer:
        'A seed blend, cultivar and placement method are not published as standard service facts. Include those questions with the property details when requesting an estimate.',
    },
    {
      question: 'When should I request Aeration and Seeding?',
      answer:
        'This commercial service page does not publish a universal date, temperature threshold, germination timeline or watering schedule. Timing can depend on the property and conditions, so begin with an estimate request.',
    },
    {
      question: 'Is fertilization or weed control included?',
      answer:
        'No treatment package is presented as part of Aeration and Seeding on this page. Fertilization & Weed Control has its own service path and can be discussed separately.',
    },
    {
      question: 'Does Aeration and Seeding guarantee a thicker lawn?',
      answer:
        'No result or germination guarantee is published here. The page identifies thin or compacted lawn concerns and provides an estimate path for discussing the property.',
    },
  ],
  finalCta: {
    eyebrow: 'Ready to discuss the lawn?',
    heading: 'Request an Aeration and Seeding estimate.',
    description:
      'Tell Mo’s what you observe in the lawn, where the property is located and which questions you want answered.',
  },
} as const satisfies ServiceDetailContent
