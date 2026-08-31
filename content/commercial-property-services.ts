import { routeLabels, routesById } from './routes.ts'
import type { RouteId } from './types.ts'

type CommercialServiceRouteId = Extract<RouteId, `service-${string}`>

const verifiedCommercialServices = [
  {
    routeId: 'service-lawn-mowing',
    group: 'Lawn care',
    summary:
      'Use Lawn Mowing when grass cutting is the main need for the commercial property.',
    evidence:
      'The approved Lawn Mowing page explicitly states that commercial mowing is available.',
  },
  {
    routeId: 'service-aeration-overseeding',
    group: 'Lawn care',
    summary:
      'Consider Aeration & Seeding when thin or compacted lawn areas are the concern.',
    evidence:
      'The approved Aeration & Seeding page explicitly invites commercial-property estimates.',
  },
  {
    routeId: 'service-fertilization-weed-control',
    group: 'Lawn care',
    summary:
      'Choose Fertilization & Weed Control for lawn fertilization or unwanted-weed concerns.',
    evidence:
      'The approved Fertilization & Weed Control page explicitly supports commercial properties.',
  },
  {
    routeId: 'service-landscaping',
    group: 'Outdoor spaces',
    summary:
      'Use Landscaping to start a conversation about an outdoor space that needs focused attention.',
    evidence:
      'The approved Landscaping page explicitly supports commercial outdoor spaces and estimates.',
  },
  {
    routeId: 'service-flower-bed-maintenance',
    group: 'Outdoor spaces',
    summary:
      'Explore Flower Bed Maintenance when an existing bed area needs dedicated attention.',
    evidence:
      'The approved Flower Bed Maintenance page explicitly invites commercial-property estimates.',
  },
  {
    routeId: 'service-grading',
    group: 'Outdoor spaces',
    summary:
      'Explore Grading when uneven ground or an outdoor area needs preparation.',
    evidence:
      'The approved Grading page explicitly invites commercial-property estimates.',
  },
  {
    routeId: 'service-yard-cleanup',
    group: 'Cleanup',
    summary:
      'Start with Yard Cleanup for overgrown yards or outdoor areas needing broader cleanup attention.',
    evidence:
      'The approved Yard Cleanup page explicitly invites commercial-property estimates.',
  },
  {
    routeId: 'service-spring-cleanup',
    group: 'Cleanup',
    summary:
      'Use Spring Cleanup for seasonal property attention as the growing season approaches.',
    evidence:
      'The approved Spring Cleanup page explicitly invites commercial-property estimates.',
  },
  {
    routeId: 'service-fall-cleanup-leaf-removal',
    group: 'Cleanup',
    summary:
      'Choose Fall Cleanup & Leaf Removal for leaves and seasonal debris during the fall transition.',
    evidence:
      'The approved Fall Cleanup & Leaf Removal page explicitly invites commercial-property estimates.',
  },
  {
    routeId: 'service-snow-removal',
    group: 'Winter',
    summary:
      'Start with Snow Removal for a snow-related driveway or access-area need at the property.',
    evidence:
      'The approved Snow Removal page and metadata explicitly support commercial properties.',
  },
] as const satisfies readonly {
  routeId: CommercialServiceRouteId
  group: 'Lawn care' | 'Outdoor spaces' | 'Cleanup' | 'Winter'
  summary: string
  evidence: string
}[]

export const commercialServiceItems = verifiedCommercialServices.map((service, index) => ({
  ...service,
  position: index + 1,
  name: routeLabels[service.routeId],
  href: routesById[service.routeId].path,
  canonicalUrl: routesById[service.routeId].canonicalUrl,
}))

export const commercialServiceGroups = [
  {
    name: 'Lawn care',
    description:
      'Compare commercial lawn service options by the condition of the grass and lawn areas.',
  },
  {
    name: 'Outdoor spaces',
    description:
      'Route landscaping, flower-bed and grading questions to their distinct service owners.',
  },
  {
    name: 'Cleanup',
    description:
      'Choose general, spring or fall cleanup according to the property need and season.',
  },
  {
    name: 'Winter',
    description:
      'Keep Snow Removal separate so the property areas and current availability can be discussed.',
  },
] as const

export const commercialSupportingLinks = [
  {
    routeId: 'service-areas',
    eyebrow: 'Coverage context',
    description:
      'Review the registered Service Areas path for Des Moines, Ankeny, Waukee, Norwalk and Altoona.',
  },
  {
    routeId: 'our-work',
    eyebrow: 'Property-care imagery',
    description:
      'Visit Our Work for general property-care imagery without assigning business-property context.',
  },
  {
    routeId: 'reviews',
    eyebrow: 'General feedback',
    description:
      'Read customer feedback without treating a review as proof of a commercial service capability.',
  },
  {
    routeId: 'contact',
    eyebrow: 'Estimate conversation',
    description:
      'Tell Mo’s which verified services fit the property needs and request a free estimate.',
  },
] as const satisfies readonly {
  routeId: 'service-areas' | 'our-work' | 'reviews' | 'contact'
  eyebrow: string
  description: string
}[]

export const commercialSupportingRouteLinks = commercialSupportingLinks.map((link) => ({
  ...link,
  name: routeLabels[link.routeId],
  href: routesById[link.routeId].path,
}))
