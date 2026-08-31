import { routeLabels, routesById } from '../routes.ts'
import type { RouteId } from '../types.ts'
import type { CityServiceAreaContent } from './types.ts'

type AnkenyServiceRouteId = Extract<RouteId, `service-${string}`>

const approvedAnkenyServices = [
  {
    routeId: 'service-lawn-mowing',
    group: 'Ongoing lawn care',
    summary: 'Choose Lawn Mowing when regular grass cutting is the main property-care need.',
    evidence: 'The approved Lawn Mowing canonical record explicitly lists Ankeny in its service-area cities.',
  },
  {
    routeId: 'service-aeration-overseeding',
    group: 'Lawn condition',
    summary: 'Explore Aeration & Seeding when thin or compacted lawn areas are the concern.',
    evidence: 'The approved Aeration & Seeding canonical record explicitly lists Ankeny in its service-area cities.',
  },
  {
    routeId: 'service-fertilization-weed-control',
    group: 'Lawn condition',
    summary: 'Use the combined service path for fertilization or unwanted weeds affecting the lawn.',
    evidence: 'The approved Fertilization & Weed Control canonical record explicitly lists Ankeny in its service-area cities.',
  },
  {
    routeId: 'service-landscaping',
    group: 'Outdoor spaces',
    summary: 'Start with Landscaping when an outdoor space needs focused care or improvement.',
    evidence: 'The approved Landscaping canonical record explicitly lists Ankeny in its service-area cities.',
  },
  {
    routeId: 'service-yard-cleanup',
    group: 'Cleanup',
    summary: 'Choose Yard Cleanup for an overgrown yard or outdoor area needing broader attention.',
    evidence: 'The approved Yard Cleanup canonical record explicitly lists Ankeny in its service-area cities.',
  },
  {
    routeId: 'service-spring-cleanup',
    group: 'Cleanup',
    summary: 'Use Spring Cleanup for seasonal property attention as the growing season approaches.',
    evidence: 'The approved Spring Cleanup canonical record explicitly lists Ankeny in its service-area cities.',
  },
  {
    routeId: 'service-fall-cleanup-leaf-removal',
    group: 'Cleanup',
    summary: 'Choose Fall Cleanup & Leaf Removal for leaves and seasonal debris during fall.',
    evidence: 'The approved Fall Cleanup & Leaf Removal canonical record explicitly lists Ankeny in its service-area cities.',
  },
  {
    routeId: 'service-grading',
    group: 'Outdoor spaces',
    summary: 'Explore Grading when uneven ground or an outdoor area needs preparation.',
    evidence: 'The approved Grading canonical record explicitly lists Ankeny in its service-area cities.',
  },
  {
    routeId: 'service-snow-removal',
    group: 'Winter',
    summary: 'Use Snow Removal for a driveway or access-area need after snowfall.',
    evidence: 'The approved Snow Removal canonical record explicitly lists Ankeny in its service-area cities.',
  },
] as const satisfies readonly {
  routeId: AnkenyServiceRouteId
  group: 'Ongoing lawn care' | 'Lawn condition' | 'Outdoor spaces' | 'Cleanup' | 'Winter'
  summary: string
  evidence: string
}[]

export const ankenyServiceItems = approvedAnkenyServices.map((service, index) => ({
  ...service,
  position: index + 1,
  name: routeLabels[service.routeId],
  href: routesById[service.routeId].path,
  canonicalUrl: routesById[service.routeId].canonicalUrl,
}))

export const ankenyCareSteps = [
  {
    number: '01',
    title: 'Start with the lawn',
    description: 'Compare mowing, aeration and seeding, and fertilization and weed control according to the lawn concern you want to discuss.',
  },
  {
    number: '02',
    title: 'Separate outdoor-space needs',
    description: 'Keep landscaping, cleanup and grading questions on their own canonical service paths so the estimate request begins with a clear scope.',
  },
  {
    number: '03',
    title: 'Account for the season',
    description: 'Spring cleanup, fall cleanup and snow removal provide distinct paths when the property need changes with the season.',
  },
] as const

export const ankenyEstimateDetails = [
  {
    title: 'Property area',
    description: 'Identify the part of the property connected to the request, such as a lawn, outdoor area, driveway or access area.',
  },
  {
    title: 'Main concern',
    description: 'Describe the broad need so the request can be matched to the right canonical service page.',
  },
  {
    title: 'Residential or commercial',
    description: 'Share the high-level property context without assuming that every property needs the same combination of services.',
  },
] as const

export const ankenyRelatedAreas = [
  { routeId: 'home', description: 'Return to the homepage for the Des Moines service overview.' },
  { routeId: 'service-area-waukee', description: 'Choose Waukee when that is the community connected to the property.' },
  { routeId: 'service-area-norwalk', description: 'Choose Norwalk when that is the community connected to the property.' },
  { routeId: 'service-area-altoona', description: 'Choose Altoona when that is the community connected to the property.' },
] as const satisfies readonly {
  routeId: Extract<RouteId, 'home' | 'service-area-waukee' | 'service-area-norwalk' | 'service-area-altoona'>
  description: string
}[]

export const ankenyRelatedAreaLinks = ankenyRelatedAreas.map((area) => ({
  ...area,
  name: area.routeId === 'home' ? 'Des Moines' : routeLabels[area.routeId],
  href: routesById[area.routeId].path,
}))

export const ankenyServiceAreaContent = {
  slug: 'ankeny-ia',
  cityName: 'Ankeny',
  routeId: 'service-area-ankeny',
  schemaItemListName: 'Lawn care services available for Ankeny estimate requests',
  hero: {
    eyebrow: 'Ankeny property care',
    summary: 'Use this Ankeny lawn service guide to compare mowing, lawn-condition care, landscaping, yard cleanup and seasonal options before requesting a property-specific estimate.',
    cta: 'Request a Free Estimate in Ankeny',
  },
  servicesSection: {
    eyebrow: 'Choose by property need',
    heading: 'Nine clear service paths for Ankeny.',
    introduction: 'Lawn mowing in Ankeny, landscaping in Ankeny, yard cleanup in Ankeny and snow removal in Ankeny each retain their own service details. The links below help keep those choices distinct.',
    allServicesLabel: 'Explore all Services',
  },
  services: ankenyServiceItems,
  editorial: {
    kind: 'property-decision',
    careSection: {
      eyebrow: 'A practical way to choose',
      heading: 'Build the request around the property.',
      introduction: 'The useful distinction is the work to discuss—not a city-wide package or a promise that every property follows the same plan.',
      items: ankenyCareSteps,
    },
    estimateSection: {
      eyebrow: 'Residential and commercial context',
      heading: 'What helps frame an estimate request.',
      introduction: 'Mo’s approved service records support residential and commercial property conversations. These three details help establish the starting point without inventing a standard package.',
      items: ankenyEstimateDetails,
      supportingRouteId: 'commercial-property-services',
    },
  },
  relatedSection: {
    eyebrow: 'Coverage hierarchy',
    heading: 'Other service areas.',
    introduction: 'Use the Service Areas hub to review the full five-community directory. These links do not imply proximity, an office or a response time.',
    hubLabel: 'View Service Areas',
  },
  relatedAreas: ankenyRelatedAreaLinks,
  finalCta: {
    eyebrow: 'Ankeny estimate path',
    heading: 'Request a Free Estimate in Ankeny',
    description: 'Share the property area and main service concern through Mo’s established contact path.',
    buttonLabel: 'Start an Estimate Request',
  },
} as const satisfies CityServiceAreaContent
