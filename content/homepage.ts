import {
  routeLabels,
  routesById,
  serviceAreaNavigationRouteIds,
  serviceNavigationRouteIds,
} from './routes.ts'
import type { RouteId } from './types.ts'

export const homepageServiceRoutes = serviceNavigationRouteIds.map((id) => ({
  id,
  label: routeLabels[id],
  href: routesById[id].path,
}))

export const homepageServiceAreaRoutes = serviceAreaNavigationRouteIds.map((id) => ({
  id,
  label: id === 'home' ? 'Des Moines' : routeLabels[id],
  href: routesById[id].path,
}))

const serviceRouteIdsByLegacyName = {
  'Mowing Service': 'service-lawn-mowing',
  'Aeration and Seeding': 'service-aeration-overseeding',
  'Fertilizing and Weed Control': 'service-fertilization-weed-control',
  Landscaping: 'service-landscaping',
  'Flower Beds Maintenance': 'service-flower-bed-maintenance',
  'Overgrown Yards Cleanup': 'service-yard-cleanup',
  'Ground Clearance': 'service-yard-cleanup',
  'Spring Cleanup': 'service-spring-cleanup',
  'Fall Cleanup': 'service-fall-cleanup-leaf-removal',
  'Leaves Removal': 'service-fall-cleanup-leaf-removal',
  Grading: 'service-grading',
  'Snow Removal': 'service-snow-removal',
} as const satisfies Readonly<Record<string, RouteId>>

export type HomepageServiceName = keyof typeof serviceRouteIdsByLegacyName

export function getHomepageServiceRoute(serviceName: string) {
  const routeId = serviceRouteIdsByLegacyName[serviceName as HomepageServiceName]
  if (!routeId) return null

  return {
    id: routeId,
    label: routeLabels[routeId],
    href: routesById[routeId].path,
  }
}

export function getUniqueHomepageServiceRoutes(serviceNames: readonly string[]) {
  const seen = new Set<RouteId>()

  return serviceNames.flatMap((serviceName) => {
    const route = getHomepageServiceRoute(serviceName)
    if (!route || seen.has(route.id)) return []
    seen.add(route.id)
    return [route]
  })
}
