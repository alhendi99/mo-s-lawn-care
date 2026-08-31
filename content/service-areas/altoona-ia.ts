import { routeLabels, routesById } from '../routes.ts'
import type { RouteId } from '../types.ts'
import type { CityServiceAreaContent } from './types.ts'

type AltoonaServiceRouteId = Extract<RouteId, `service-${string}`>

const approvedAltoonaServices = [
  {
    routeId: 'service-landscaping',
    group: 'Outdoor-space scope',
    summary: 'Review Landscaping first when care or improvement of an outdoor space defines the request.',
    evidence: 'The approved Landscaping canonical record explicitly lists Altoona in its service-area cities.',
  },
  {
    routeId: 'service-grading',
    group: 'Ground scope',
    summary: 'Choose Grading for uneven ground or preparation of an outdoor area.',
    evidence: 'The approved Grading canonical record explicitly lists Altoona in its service-area cities.',
  },
  {
    routeId: 'service-yard-cleanup',
    group: 'Cleanup scope',
    summary: 'Use Yard Cleanup when an overgrown yard or broader outdoor area needs cleanup attention.',
    evidence: 'The approved Yard Cleanup canonical record explicitly lists Altoona in its service-area cities.',
  },
  {
    routeId: 'service-lawn-mowing',
    group: 'Grass-cutting scope',
    summary: 'Move to Lawn Mowing when the request is specifically about grass cutting.',
    evidence: 'The approved Lawn Mowing canonical record explicitly lists Altoona in its service-area cities.',
  },
  {
    routeId: 'service-fertilization-weed-control',
    group: 'Lawn-care scope',
    summary: 'Open the combined service details for a fertilization or unwanted-weed concern.',
    evidence: 'The approved Fertilization & Weed Control canonical record explicitly lists Altoona in its service-area cities.',
  },
  {
    routeId: 'service-aeration-overseeding',
    group: 'Lawn-care scope',
    summary: 'Consider Aeration & Seeding when thin or compacted lawn areas shape the request.',
    evidence: 'The approved Aeration & Seeding canonical record explicitly lists Altoona in its service-area cities.',
  },
  {
    routeId: 'service-spring-cleanup',
    group: 'Seasonal scope',
    summary: 'Select Spring Cleanup for seasonal property attention as the growing season approaches.',
    evidence: 'The approved Spring Cleanup canonical record explicitly lists Altoona in its service-area cities.',
  },
  {
    routeId: 'service-fall-cleanup-leaf-removal',
    group: 'Seasonal scope',
    summary: 'Select Fall Cleanup & Leaf Removal when leaves and seasonal debris define the fall request.',
    evidence: 'The approved Fall Cleanup & Leaf Removal canonical record explicitly lists Altoona in its service-area cities.',
  },
  {
    routeId: 'service-snow-removal',
    group: 'Snowfall scope',
    summary: 'Use Snow Removal for a driveway or access-area request after snowfall.',
    evidence: 'The approved Snow Removal canonical record explicitly lists Altoona in its service-area cities.',
  },
] as const satisfies readonly {
  routeId: AltoonaServiceRouteId
  group: string
  summary: string
  evidence: string
}[]

export const altoonaServiceItems = approvedAltoonaServices.map((service, index) => ({
  ...service,
  position: index + 1,
  name: routeLabels[service.routeId],
  href: routesById[service.routeId].path,
  canonicalUrl: routesById[service.routeId].canonicalUrl,
}))

export const altoonaScopeItems = [
  {
    number: '01',
    title: 'Name the affected area',
    description: 'Begin with the lawn, another outdoor space, uneven ground, a driveway or an access area rather than assuming a broad package.',
  },
  {
    number: '02',
    title: 'Lead with one need',
    description: 'Choose the concern that prompted the request so the first service link has a specific, approved scope.',
  },
  {
    number: '03',
    title: 'Separate additional questions',
    description: 'When another concern belongs to a different service, keep it distinct instead of treating both as one predefined program.',
  },
] as const

export const altoonaRequestItems = [
  {
    number: '01',
    title: 'Current condition',
    description: 'Describe what needs attention in plain terms without supplying a diagnosis or choosing a standard treatment.',
  },
  {
    number: '02',
    title: 'Requested outcome',
    description: 'Explain the practical result you want to discuss while leaving the property-specific scope for the estimate conversation.',
  },
  {
    number: '03',
    title: 'Relevant timing',
    description: 'Add current timing or seasonal context without assuming availability, a fixed calendar or a guaranteed response.',
  },
] as const

const supportingRouteRecords = [
  {
    routeId: 'services',
    description: 'Use the full service catalog to compare canonical details before choosing a starting point.',
  },
  {
    routeId: 'commercial-property-services',
    description: 'Use the commercial hub for the approved high-level commercial property context.',
  },
  {
    routeId: 'service-areas',
    description: 'Use the coverage hub to confirm the canonical owner for each of the five approved communities.',
  },
] as const satisfies readonly {
  routeId: Extract<RouteId, 'services' | 'service-areas' | 'commercial-property-services'>
  description: string
}[]

export const altoonaSupportingLinks = supportingRouteRecords.map((link) => ({
  ...link,
  name: routeLabels[link.routeId],
  href: routesById[link.routeId].path,
}))

const relatedAreaRecords = [
  { routeId: 'home', description: 'Open the homepage for the Des Moines canonical lawn care and snow removal page.' },
  { routeId: 'service-area-ankeny', description: 'Open Ankeny when that is the approved area tied to the request.' },
  { routeId: 'service-area-waukee', description: 'Open Waukee when that is the approved area tied to the request.' },
  { routeId: 'service-area-norwalk', description: 'Open Norwalk when that is the approved area tied to the request.' },
] as const satisfies readonly {
  routeId: Extract<RouteId, 'home' | 'service-area-ankeny' | 'service-area-waukee' | 'service-area-norwalk'>
  description: string
}[]

export const altoonaRelatedAreaLinks = relatedAreaRecords.map((area) => ({
  ...area,
  name: area.routeId === 'home' ? 'Des Moines' : routeLabels[area.routeId],
  href: routesById[area.routeId].path,
}))

export const altoonaServiceAreaContent = {
  slug: 'altoona-ia',
  cityName: 'Altoona',
  routeId: 'service-area-altoona',
  schemaItemListName: 'Lawn care services available for Altoona estimate requests',
  hero: {
    eyebrow: 'Altoona request planning',
    summary: 'This Altoona lawn service guide helps turn a property concern into a defined starting point: identify the affected area, compare approved service details and prepare an estimate request.',
    cta: 'Request a Free Estimate in Altoona',
  },
  servicesSection: {
    eyebrow: 'Scope-led service directory',
    heading: 'Move from the affected area to the right details.',
    introduction: 'Landscaping in Altoona, yard cleanup in Altoona, lawn mowing in Altoona and snow removal in Altoona remain independently scoped services. Lawn-condition, ground and seasonal options have their own canonical paths too.',
    allServicesLabel: 'See Every Published Service',
  },
  services: altoonaServiceItems,
  editorial: {
    kind: 'scope-builder',
    scopeSection: {
      eyebrow: 'Define before comparing',
      heading: 'Separate the request into useful parts.',
      introduction: 'Altoona is an approved service area, but coverage alone does not decide which work a property needs. A clear request begins with scope, not invented local assumptions.',
      items: altoonaScopeItems,
    },
    readinessSection: {
      eyebrow: 'Estimate readiness',
      heading: 'Keep property type and timing in context.',
      introduction: 'The approved service range supports residential and commercial conversations across different property needs. It does not establish a contract, automatic schedule or guaranteed availability.',
      contexts: [
        {
          title: 'Residential context',
          description: 'For a residential request, identify the affected property area and the leading service concern.',
        },
        {
          title: 'Commercial context',
          description: 'For a commercial request, use the commercial hub alongside the service page that best fits the concern.',
        },
        {
          title: 'Service-range context',
          description: 'Mowing, lawn-condition care, outdoor-space work, seasonal cleanup and snow removal are separate choices—not stages of one automatic plan.',
        },
      ],
      requestHeading: 'Create an estimate-ready outline',
      requestIntroduction: 'These details make the starting point clearer without promising price, timing, availability or a predetermined result.',
      items: altoonaRequestItems,
      links: altoonaSupportingLinks,
    },
  },
  relatedSection: {
    eyebrow: 'Canonical area owners',
    heading: 'Other service areas',
    introduction: 'Each link leads to another published owner in the five-area structure. The list does not claim proximity, a branch, local staffing or response timing.',
    hubLabel: 'Open the Five-Area Directory',
  },
  relatedAreas: altoonaRelatedAreaLinks,
  finalCta: {
    eyebrow: 'Altoona estimate outline',
    heading: 'Request a Free Estimate in Altoona',
    description: 'Use Mo’s existing contact path to share the affected property area, leading need and relevant context.',
    buttonLabel: 'Submit the Estimate Request',
  },
} as const satisfies CityServiceAreaContent
