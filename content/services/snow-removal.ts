import { getReviewExcerpt } from '../reviews.ts'
import type { ServiceDetailContent } from './types.ts'

export const snowRemovalService = {
  slug: 'snow-removal',
  routeId: 'service-snow-removal',
  schema: {
    name: 'Snow Removal Service',
    serviceType: 'Snow removal',
  },
  hero: {
    eyebrow: 'Residential + commercial Snow Removal',
    summary:
      "Mo's offers Snow Removal for residential and commercial properties. Request an estimate to discuss the driveway, access areas and the property in front of you.",
    compactHeading: true,
    image: {
      src: '/seasons/optimized/snow-removal.webp',
      width: 1672,
      height: 941,
      alt: 'Snow-covered home, yard and trees beside a concrete driveway',
      caption:
        '',
      loading: 'eager',
      provenance: 'existing-seasonal-image',
    },
  },
  introduction: {
    eyebrow: 'Start with winter access',
    heading: 'A direct service path when snow affects the property.',
    paragraphs: [
      'Snow removal in Des Moines, IA is the service path when snowfall affects a driveway or another access area on a residential or commercial property.',
      'People comparing a snow removal service in Des Moines, residential snow removal in Des Moines, commercial snow removal in Des Moines or driveway snow removal in Des Moines can use this one page. The estimate conversation confirms the exact property areas and current availability.',
    ],
    decisionPoints: [
      {
        number: '01',
        title: 'A driveway or access area is affected',
        description:
          'Use Snow Removal when snow is affecting a driveway or another access area. The generic access-area wording does not assume that every specific surface is included.',
      },
      {
        number: '02',
        title: 'The property context is clear',
        description:
          'Residential and commercial properties are both supported. Share the property type and the areas you want to discuss when requesting an estimate.',
      },
      {
        number: '03',
        title: 'Exact scope needs confirmation',
        description:
          'Describe the property and current conditions so scope and availability can be discussed without assuming a trigger, service window or response promise.',
      },
    ],
  },
  scope: {
    eyebrow: 'Confirmed capability boundary',
    heading: 'Snow Removal, with property details confirmed by estimate.',
    introduction:
      'The approved service is Snow Removal for residential and commercial properties, including high-level driveway and access-area needs. Specific surfaces and operating details are not assumed from the service name.',
    items: [
      {
        title: 'Residential properties',
        description:
          'Homeowners can request Snow Removal and describe the driveway or access areas they want to discuss. No standard package or blanket surface list is published.',
      },
      {
        title: 'Commercial properties',
        description:
          'Business properties can request Snow Removal. This does not establish parking-lot capacity, a commercial contract or a guaranteed operating schedule.',
      },
      {
        title: 'Driveways + access areas',
        description:
          'Driveway Snow Removal and high-level access-area clearing can be discussed through an estimate. Sidewalks, walks, entries and other specific surfaces are not presented as standard inclusions.',
      },
    ],
  },
  relatedServicesIntro: {
    eyebrow: 'Supporting property paths',
    heading: 'Continue with the context that fits the property.',
    description:
      'Use these registered destinations for broader commercial needs, metro coverage and customer feedback without turning them into extra Snow Removal services.',
  },
  relatedServices: [
    {
      routeId: 'commercial-property-services',
      eyebrow: 'For broader business-property needs',
      description:
        'Use Commercial Property Services when the conversation extends beyond one Snow Removal request. No contract or service package is implied.',
    },
    {
      routeId: 'service-areas',
      eyebrow: 'For metro coverage context',
      description:
        'Use Service Areas for the registered metro-coverage path while this page remains the single owner of Snow Removal service intent.',
    },
    {
      routeId: 'reviews',
      eyebrow: 'For broader customer feedback',
      description:
        'Use Reviews for the future company-review collection. The two excerpts on this page are individually attributed Snow Removal experiences.',
    },
  ],
  propertyContext: {
    eyebrow: 'Two approved property contexts',
    heading: 'Snow Removal estimates for homes and businesses.',
    residential:
      'Homeowners can request residential Snow Removal and describe the driveway, access areas and current conditions they want to discuss.',
    commercial:
      'Commercial properties can request Snow Removal. Parking lots, loading areas, contracts and exact service windows are not represented as standard capabilities here.',
    portfolio:
      'The seasonal hero is an existing winter image, not a verified Mo’s Snow Removal project. The broader Our Work archive is not presented as proof of Snow Removal, a city, customer or result without supporting provenance.',
  },
  reviews: {
    eyebrow: 'Snow Removal in their words',
    heading: 'Customer feedback that explicitly mentions snow.',
    introduction:
      'These verbatim excerpts come from the approved Google review source and describe individual Snow Removal experiences. They do not establish standard availability, timing, response, surface scope or future results.',
    items: [getReviewExcerpt('google-review-004'), getReviewExcerpt('google-review-061')],
  },
  serviceArea: {
    eyebrow: 'Des Moines metro coverage',
    heading: 'Share the property location and Snow Removal need.',
    description:
      "Snow Removal estimate requests can come from Mo's approved service area: Des Moines, Ankeny, Waukee, Norwalk and Altoona. Coverage does not establish a special snow route, trigger, response time or completed project in every community.",
    cities: ['Des Moines', 'Ankeny', 'Waukee', 'Norwalk', 'Altoona'],
    clarification:
      'This page does not create city-and-Snow Removal routes or assign the seasonal image and customer reviews to a city without source evidence.',
  },
  faqIntro: {
    eyebrow: 'Snow Removal FAQs',
    heading: 'Useful answers without blanket operating promises.',
  },
  faqs: [
    {
      question: 'How do I request a Snow Removal estimate?',
      answer:
        'Use the Contact page to request an estimate or call Mo’s. Share the property type, location and the driveway or access areas you want to discuss.',
    },
    {
      question: 'Does Mo’s offer residential and commercial Snow Removal?',
      answer:
        'Yes. Residential and commercial properties can request Snow Removal. The estimate conversation confirms the exact property scope without assuming a package or contract.',
    },
    {
      question: 'Is driveway Snow Removal available?',
      answer:
        'Driveways are part of the approved high-level service context. Describe the driveway and current conditions when requesting an estimate so the property-specific scope can be discussed.',
    },
    {
      question: 'Which access areas are included?',
      answer:
        '“Access areas” is a general description, not a promise that every surface is included. Ask about the exact areas on the property rather than assuming sidewalks, walks, entries or other surfaces are standard inclusions.',
    },
    {
      question: 'Are salting, deicing or ice management included?',
      answer:
        'Those services are not published as standard Snow Removal inclusions. Raise any specific surface or ice-related question during the estimate conversation instead of assuming it is included.',
    },
    {
      question: 'What timing or Snow Removal availability is promised?',
      answer:
        'This page does not publish a snow-depth trigger, emergency service, exact service window or guaranteed response time. Current availability depends on the property and conditions and should be confirmed through an estimate.',
    },
    {
      question: 'Where can I request Snow Removal?',
      answer:
        'Mo’s approved service area includes Des Moines, Ankeny, Waukee, Norwalk and Altoona. Share the property location without assuming a city-specific route, trigger or response guarantee.',
    },
  ],
  finalCta: {
    eyebrow: 'Ready to discuss winter access?',
    heading: 'Request a Snow Removal estimate.',
    description:
      'Tell Mo’s about the property, driveway or access areas and the questions you want answered.',
  },
} as const satisfies ServiceDetailContent
