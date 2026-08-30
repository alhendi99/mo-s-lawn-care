import {
  routeLabels,
  routesById,
  serviceNavigationRouteIds,
} from '../routes.ts'
import { aerationOverseedingService } from './aeration-overseeding.ts'
import { fertilizationWeedControlService } from './fertilization-weed-control.ts'
import { lawnMowingService } from './lawn-mowing.ts'

type ServiceRouteId = (typeof serviceNavigationRouteIds)[number]

const summaries = {
  'service-lawn-mowing':
    'Explore mowing for lawn areas that need a maintained, cared-for appearance.',
  'service-aeration-overseeding':
    'Start here when bare or thin areas make aeration and seeding the service to explore.',
  'service-fertilization-weed-control':
    'Find the combined service path for fertilization and weeds affecting the lawn.',
  'service-landscaping':
    'Explore landscaping for outdoor spaces that need focused care or improvement.',
  'service-flower-bed-maintenance':
    'Keep flower beds in view with a service dedicated to their ongoing maintenance.',
  'service-yard-cleanup':
    'Bring overgrown yards and outdoor areas into one consolidated cleanup service.',
  'service-spring-cleanup':
    'Address the seasonal property cleanup that comes as winter gives way to spring.',
  'service-fall-cleanup-leaf-removal':
    'Handle leaves and seasonal debris through one combined fall cleanup service.',
  'service-grading':
    'Explore grading when outdoor ground is uneven or an area needs preparation.',
  'service-snow-removal':
    'Find the snow-removal path for residential and commercial properties after snowfall.',
} as const satisfies Readonly<Record<ServiceRouteId, string>>

export const servicesIndexItems = serviceNavigationRouteIds.map((id, index) => ({
  id,
  position: index + 1,
  name: routeLabels[id],
  href: routesById[id].path,
  canonicalUrl: routesById[id].canonicalUrl,
  summary: summaries[id],
}))

export const servicesIndexSupportingRoutes = [
  {
    id: 'commercial-property-services',
    eyebrow: 'For business properties',
    description:
      'See the dedicated path for commercial lawn care, cleanup, landscaping and snow-removal needs.',
  },
  {
    id: 'service-areas',
    eyebrow: 'Across the metro',
    description:
      'Review the approved service-area paths for Des Moines, Ankeny, Waukee, Norwalk and Altoona.',
  },
  {
    id: 'contact',
    eyebrow: 'Start a conversation',
    description:
      'Tell Mo\'s what your property needs and request a free estimate through the Contact page.',
  },
] as const satisfies readonly {
  id: 'commercial-property-services' | 'service-areas' | 'contact'
  eyebrow: string
  description: string
}[]

export const servicesIndexSupportingLinks = servicesIndexSupportingRoutes.map((item) => ({
  ...item,
  name: routeLabels[item.id],
  href: routesById[item.id].path,
}))

/**
 * Only service records in this explicit list are public. A planned route in
 * `content/routes.ts` is never enough to publish a dynamic service page.
 */
export const publishedServiceDetails = [
  lawnMowingService,
  aerationOverseedingService,
  fertilizationWeedControlService,
] as const

export const publishedServiceSlugs = publishedServiceDetails.map(({ slug }) => slug)

export function getPublishedServiceDetail(slug: string) {
  return publishedServiceDetails.find((service) => service.slug === slug)
}
