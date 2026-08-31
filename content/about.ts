import { routeLabels, routesById } from './routes.ts'
import type { RouteId } from './types.ts'

export const aboutServiceGroups = [
  {
    name: 'Lawn care',
    description:
      'Lawn Mowing, Aeration & Seeding, and Fertilization & Weed Control each have a dedicated service path.',
    routeIds: [
      'service-lawn-mowing',
      'service-aeration-overseeding',
      'service-fertilization-weed-control',
    ],
  },
  {
    name: 'Outdoor spaces',
    description:
      'Landscaping, Flower Bed Maintenance, and Grading remain separate choices for different outdoor-area needs.',
    routeIds: [
      'service-landscaping',
      'service-flower-bed-maintenance',
      'service-grading',
    ],
  },
  {
    name: 'Property cleanup',
    description:
      'Yard Cleanup, Spring Cleanup, and Fall Cleanup & Leaf Removal provide distinct cleanup paths.',
    routeIds: [
      'service-yard-cleanup',
      'service-spring-cleanup',
      'service-fall-cleanup-leaf-removal',
    ],
  },
  {
    name: 'Winter',
    description:
      'Snow Removal is the published winter service for residential and commercial property conversations.',
    routeIds: ['service-snow-removal'],
  },
] as const satisfies readonly Readonly<{
  name: string
  description: string
  routeIds: readonly RouteId[]
}>[]

const aboutAreaRouteIds = [
  'home',
  'service-area-ankeny',
  'service-area-waukee',
  'service-area-norwalk',
  'service-area-altoona',
] as const satisfies readonly RouteId[]

export const aboutAreaLinks = aboutAreaRouteIds.map((routeId) => ({
  routeId,
  name: routeId === 'home' ? 'Des Moines' : routeLabels[routeId],
  href: routesById[routeId].path,
}))

export const aboutSupportingLinks = [
  {
    routeId: 'services',
    eyebrow: 'Published service details',
    description: 'Compare all ten canonical service pages and their approved property scope.',
  },
  {
    routeId: 'service-areas',
    eyebrow: 'Five-area directory',
    description: 'Confirm the canonical path for each approved community in the service area.',
  },
  {
    routeId: 'our-work',
    eyebrow: 'Visual context',
    description: 'Continue to the registered Our Work destination for the site’s visual archive.',
  },
  {
    routeId: 'reviews',
    eyebrow: 'Customer feedback',
    description: 'Continue to the registered Reviews destination for company feedback context.',
  },
  {
    routeId: 'contact',
    eyebrow: 'Estimate and contact',
    description: 'Use the contact path to begin a property-specific estimate conversation.',
  },
] as const satisfies readonly Readonly<{
  routeId: RouteId
  eyebrow: string
  description: string
}>[]

export const resolvedAboutSupportingLinks = aboutSupportingLinks.map((link) => ({
  ...link,
  name: routeLabels[link.routeId],
  href: routesById[link.routeId].path,
}))
