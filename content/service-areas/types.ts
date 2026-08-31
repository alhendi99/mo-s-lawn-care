import type { RouteId } from '../types.ts'

type ServiceRouteId = Extract<RouteId, `service-${string}`>
type CityRouteId = Extract<RouteId, `service-area-${string}`>

export type CityServiceItem = Readonly<{
  routeId: ServiceRouteId
  group: string
  summary: string
  evidence: string
  position: number
  name: string
  href: string
  canonicalUrl: string
}>

export type CityAreaLink = Readonly<{
  routeId: Extract<RouteId, 'home' | CityRouteId>
  name: string
  href: string
  description: string
}>

type PropertyDecisionEditorial = Readonly<{
  kind: 'property-decision'
  careSection: Readonly<{
    eyebrow: string
    heading: string
    introduction: string
    items: readonly Readonly<{ number: string; title: string; description: string }>[]
  }>
  estimateSection: Readonly<{
    eyebrow: string
    heading: string
    introduction: string
    items: readonly Readonly<{ title: string; description: string }>[]
    supportingRouteId: 'commercial-property-services'
  }>
}>

type YearSpanningEditorial = Readonly<{
  kind: 'year-spanning'
  rangeSection: Readonly<{
    eyebrow: string
    heading: string
    introduction: string
    items: readonly Readonly<{ marker: string; title: string; description: string }>[]
  }>
  propertySection: Readonly<{
    eyebrow: string
    heading: string
    introduction: string
    residential: string
    commercial: string
    requestHeading: string
    requestPoints: readonly string[]
  }>
  supportingSection: Readonly<{
    eyebrow: string
    heading: string
    introduction: string
    links: readonly Readonly<{
      routeId: Extract<RouteId, 'services' | 'service-areas' | 'commercial-property-services'>
      name: string
      href: string
      description: string
    }>[]
  }>
}>

type PriorityMapEditorial = Readonly<{
  kind: 'priority-map'
  prioritySection: Readonly<{
    eyebrow: string
    heading: string
    introduction: string
    items: readonly Readonly<{ number: string; title: string; description: string }>[]
  }>
  timingSection: Readonly<{
    eyebrow: string
    heading: string
    introduction: string
    ongoing: Readonly<{ heading: string; description: string }>
    timeSpecific: Readonly<{ heading: string; description: string }>
    note: string
  }>
  estimateSection: Readonly<{
    eyebrow: string
    heading: string
    introduction: string
    items: readonly Readonly<{ title: string; description: string }>[]
    links: readonly Readonly<{
      routeId: Extract<RouteId, 'services' | 'service-areas' | 'commercial-property-services'>
      name: string
      href: string
      description: string
    }>[]
  }>
}>

export type CityServiceAreaContent = Readonly<{
  slug: string
  cityName: string
  routeId: CityRouteId
  schemaItemListName: string
  hero: Readonly<{
    eyebrow: string
    summary: string
    cta: string
  }>
  servicesSection: Readonly<{
    eyebrow: string
    heading: string
    introduction: string
    allServicesLabel: string
  }>
  services: readonly CityServiceItem[]
  editorial: PropertyDecisionEditorial | YearSpanningEditorial | PriorityMapEditorial
  relatedSection: Readonly<{
    eyebrow: string
    heading: string
    introduction: string
    hubLabel: string
  }>
  relatedAreas: readonly CityAreaLink[]
  finalCta: Readonly<{
    eyebrow: string
    heading: string
    description: string
    buttonLabel: string
  }>
}>
