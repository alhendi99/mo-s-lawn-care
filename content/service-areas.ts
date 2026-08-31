import { routeLabels, routesById } from './routes.ts'
import type { RouteId } from './types.ts'

type ServiceAreaHubRouteId =
  | 'home'
  | 'service-area-ankeny'
  | 'service-area-waukee'
  | 'service-area-norwalk'
  | 'service-area-altoona'

const serviceAreaHubRecords = [
  {
    routeId: 'home',
    description:
      'Start with the main Mo’s homepage for the primary Des Moines service overview and estimate path.',
  },
  {
    routeId: 'service-area-ankeny',
    description:
      'Choose Ankeny to continue from this metro overview to the community’s dedicated area path.',
  },
  {
    routeId: 'service-area-waukee',
    description:
      'Follow Waukee when that is the community tied to the property you want to discuss.',
  },
  {
    routeId: 'service-area-norwalk',
    description:
      'Use the Norwalk link when that is the community connected to the property you want to discuss.',
  },
  {
    routeId: 'service-area-altoona',
    description:
      'Continue through Altoona for another of the five named communities Mo’s serves.',
  },
] as const satisfies readonly {
  routeId: ServiceAreaHubRouteId
  description: string
}[]

export const serviceAreaHubItems = serviceAreaHubRecords.map((area, index) => ({
  ...area,
  position: index + 1,
  name: area.routeId === 'home' ? 'Des Moines' : routeLabels[area.routeId],
  href: routesById[area.routeId].path,
  canonicalUrl: routesById[area.routeId].canonicalUrl,
}))

export const serviceAreaSupportingLinks = [
  {
    routeId: 'services',
    eyebrow: 'Service details',
    description:
      'Explore Services for the lawn care, landscaping, seasonal cleanup and snow-removal paths.',
  },
  {
    routeId: 'contact',
    eyebrow: 'Property estimate',
    description:
      'Share the property area and the broad need through Mo’s established free-estimate path.',
  },
] as const satisfies readonly {
  routeId: Extract<RouteId, 'services' | 'contact'>
  eyebrow: string
  description: string
}[]

export const serviceAreaSupportingRouteLinks = serviceAreaSupportingLinks.map((link) => ({
  ...link,
  name: routeLabels[link.routeId],
  href: routesById[link.routeId].path,
}))
