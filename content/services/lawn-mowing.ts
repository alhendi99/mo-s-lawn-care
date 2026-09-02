import { getReviewExcerpt } from '../reviews.ts'
import type { ServiceDetailContent } from './types.ts'

export const lawnMowingService = {
  slug: 'lawn-mowing',
  routeId: 'service-lawn-mowing',
  schema: {
    name: 'Lawn Mowing Service',
    serviceType: 'Lawn mowing',
  },
  hero: {
    eyebrow: 'Residential + commercial lawn mowing',
    summary:
      "Mo's offers professional lawn mowing for residential and commercial properties. Start with a free estimate for the lawn in front of you.",
    image: {
      src: '/media/gallery1.webp',
      width: 1600,
      height: 1200,
      alt: 'Green lawn with visible mowing lines beside homes and sidewalks',
      caption: 'Existing property-care gallery image · no city or customer attribution',
      provenance: 'existing-property-care-gallery',
    },
  },
  introduction: {
    eyebrow: 'Start with the grass',
    heading: 'A clear service path for a lawn that needs cutting.',
    paragraphs: [
      'Lawn mowing is the right place to start when the grass itself is the main concern and you want the property to have a maintained appearance.',
      "For people comparing lawn mowing service in Des Moines, this page keeps mowing separate from weed control, aeration and heavier yard cleanup so it is easier to ask for the right help.",
    ],
    decisionPoints: [
      {
        number: '01',
        title: 'The grass is the main concern',
        description:
          'Choose mowing when the request centers on cutting the lawn rather than treating weeds, addressing thin areas or clearing a heavily overgrown property.',
      },
      {
        number: '02',
        title: 'The property type is known',
        description:
          'Residential and commercial mowing are both available. Share which kind of property needs attention when you request an estimate.',
      },
      {
        number: '03',
        title: 'The details need a conversation',
        description:
          'Use the estimate request to describe the lawn and ask about timing or specific inclusions instead of relying on assumptions.',
      },
    ],
  },
  scope: {
    eyebrow: 'Confirmed scope',
    heading: 'Mowing, without assumed extras.',
    introduction:
      'The approved service is lawn mowing for residential and commercial properties. The estimate conversation is where property-specific details can be confirmed.',
    items: [
      {
        title: 'Lawn mowing',
        description:
          'This page covers grass cutting service for lawn areas. It does not present a broader lawn-treatment or cleanup package as part of mowing.',
      },
      {
        title: 'Residential + commercial',
        description:
          'Both property contexts are supported. Broader business-property needs have their own Commercial Property Services path.',
      },
      {
        title: 'Free estimate request',
        description:
          "Tell Mo's what the property needs through the Contact page, or call to start the conversation. No price or contract terms are published here.",
      },
    ],
  },
  relatedServicesIntro: {
    eyebrow: 'Related lawn needs',
    heading: 'When mowing is not the whole question.',
    description: 'Use the condition you see outside to choose the closest service path.',
  },
  relatedServices: [
    {
      routeId: 'service-aeration-overseeding',
      eyebrow: 'For bare or thin areas',
      description:
        'Explore Aeration & Seeding when the concern is lawn density rather than grass length.',
    },
    {
      routeId: 'service-fertilization-weed-control',
      eyebrow: 'When weeds are the concern',
      description:
        'Use the combined Fertilization & Weed Control path for lawn-treatment questions.',
    },
    {
      routeId: 'service-yard-cleanup',
      eyebrow: 'For heavier overgrowth',
      description:
        'Start with Yard Cleanup when the property needs more than routine grass cutting.',
    },
  ],
  helpfulResources: {
    eyebrow: 'Helpful resources',
    heading: 'Mowing guidance for changing conditions.',
    description:
      "This general Iowa guide explains what can change mowing frequency. It is informational guidance, not Mo's service schedule.",
    items: [
      {
        routeId: 'article-how-often-to-mow-lawn-iowa',
        eyebrow: 'Iowa mowing-frequency guide',
        description:
          'Read about the factors that can change how often a lawn needs mowing without assuming a fixed weekly plan.',
      },
    ],
  },
  propertyContext: {
    eyebrow: 'The right context',
    heading: 'One mowing service, two property settings.',
    residential:
      'Homeowners can request an estimate for residential lawn mowing and explain the condition of the grass, the property and any questions about service details.',
    commercial:
      'Commercial mowing is available. For a wider business-property conversation that may involve other services, use Commercial Property Services.',
    portfolio:
      "Mo's existing property-care gallery is available on Our Work. Images are presented without inventing a city, customer or mowing-project history when that metadata is not confirmed.",
  },
  reviews: {
    eyebrow: 'Mowing in their words',
    heading: 'Customer feedback that mentions mowing.',
    introduction:
      "These attributed excerpts come from the approved Google review source. They are customer statements, not guarantees or company-wide operating claims.",
    items: [getReviewExcerpt('google-review-004'), getReviewExcerpt('google-review-005')],
  },
  serviceArea: {
    eyebrow: 'Des Moines metro service area',
    heading: 'Five communities, one direct estimate path.',
    description:
      "Mo's approved service area includes Des Moines, Ankeny, Waukee, Norwalk and Altoona. Share the property location when requesting a mowing estimate so the request has the right context.",
    cities: ['Des Moines', 'Ankeny', 'Waukee', 'Norwalk', 'Altoona'],
    clarification:
      'No image or review on this page is assigned to one of these cities unless the source itself provides that detail.',
  },
  faqIntro: {
    eyebrow: 'Lawn mowing FAQs',
    heading: 'Useful answers before you request an estimate.',
  },
  faqs: [
    {
      question: 'Does Mo’s offer residential and commercial lawn mowing?',
      answer:
        'Yes. Residential and commercial service is available. Broader commercial lawn care and property-service intent belongs on the Commercial Property Services page.',
    },
    {
      question: 'How do I request a lawn mowing estimate?',
      answer:
        'Use the Contact page to request a free estimate or call Mo’s directly. Describe the property, the condition of the grass and the questions you want answered.',
    },
    {
      question: 'Is weekly or biweekly mowing available?',
      answer:
        'Mo’s does not publish a fixed mowing frequency on this site. Include the timing you have in mind when requesting an estimate so it can be discussed for the property.',
    },
    {
      question: 'Are edging, blowing or clipping removal included?',
      answer:
        'Those details are not listed as standard mowing inclusions in the approved public facts. Ask about any specific inclusion when you request the estimate.',
    },
    {
      question: 'How much does lawn mowing cost?',
      answer:
        'Mowing prices and contract terms are not published on this page. Mo’s offers a free estimate so the request can be considered in the context of the property.',
    },
    {
      question: 'What if the lawn also has weeds, thin areas or heavy overgrowth?',
      answer:
        'Those concerns have separate service paths. Review Fertilization & Weed Control, Aeration & Seeding or Yard Cleanup to find the closest match before contacting Mo’s.',
    },
  ],
  finalCta: {
    eyebrow: 'Ready to talk about the lawn?',
    heading: 'Request a free mowing estimate.',
    description:
      'Tell Mo’s about the property and what the grass needs, or call to start the conversation directly.',
  },
} as const satisfies ServiceDetailContent
