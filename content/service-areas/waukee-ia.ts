import { routeLabels, routesById } from '../routes.ts'
import type { RouteId } from '../types.ts'
import type { CityServiceAreaContent } from './types.ts'

type WaukeeServiceRouteId = Extract<RouteId, `service-${string}`>

const approvedWaukeeServices = [
  {
    routeId: 'service-spring-cleanup',
    group: 'Seasonal opening',
    summary: 'Begin with Spring Cleanup when seasonal debris and outdoor areas are the main concern.',
    evidence: 'The approved Spring Cleanup canonical record explicitly lists Waukee in its service-area cities.',
  },
  {
    routeId: 'service-lawn-mowing',
    group: 'Lawn upkeep',
    summary: 'Use Lawn Mowing when grass cutting is the service the property needs.',
    evidence: 'The approved Lawn Mowing canonical record explicitly lists Waukee in its service-area cities.',
  },
  {
    routeId: 'service-aeration-overseeding',
    group: 'Lawn condition',
    summary: 'Consider Aeration & Seeding for thin or compacted areas of lawn.',
    evidence: 'The approved Aeration & Seeding canonical record explicitly lists Waukee in its service-area cities.',
  },
  {
    routeId: 'service-fertilization-weed-control',
    group: 'Lawn condition',
    summary: 'Follow the combined path when fertilization or unwanted weeds are the concern.',
    evidence: 'The approved Fertilization & Weed Control canonical record explicitly lists Waukee in its service-area cities.',
  },
  {
    routeId: 'service-landscaping',
    group: 'Outdoor spaces',
    summary: 'Choose Landscaping for an outdoor space that needs focused care or improvement.',
    evidence: 'The approved Landscaping canonical record explicitly lists Waukee in its service-area cities.',
  },
  {
    routeId: 'service-yard-cleanup',
    group: 'Broader cleanup',
    summary: 'Use Yard Cleanup for an overgrown yard or outdoor area needing broader attention.',
    evidence: 'The approved Yard Cleanup canonical record explicitly lists Waukee in its service-area cities.',
  },
  {
    routeId: 'service-grading',
    group: 'Ground preparation',
    summary: 'Review Grading when uneven ground or an outdoor area needs preparation.',
    evidence: 'The approved Grading canonical record explicitly lists Waukee in its service-area cities.',
  },
  {
    routeId: 'service-fall-cleanup-leaf-removal',
    group: 'Seasonal transition',
    summary: 'Use Fall Cleanup & Leaf Removal for leaves and seasonal debris in fall.',
    evidence: 'The approved Fall Cleanup & Leaf Removal canonical record explicitly lists Waukee in its service-area cities.',
  },
  {
    routeId: 'service-snow-removal',
    group: 'After snowfall',
    summary: 'Choose Snow Removal for a driveway or access-area need after snowfall.',
    evidence: 'The approved Snow Removal canonical record explicitly lists Waukee in its service-area cities.',
  },
] as const satisfies readonly {
  routeId: WaukeeServiceRouteId
  group: string
  summary: string
  evidence: string
}[]

export const waukeeServiceItems = approvedWaukeeServices.map((service, index) => ({
  ...service,
  position: index + 1,
  name: routeLabels[service.routeId],
  href: routesById[service.routeId].path,
  canonicalUrl: routesById[service.routeId].canonicalUrl,
}))

export const waukeeRangeItems = [
  {
    marker: '01',
    title: 'Seasonal opening',
    description: 'Spring cleanup provides a distinct starting point when seasonal property cleanup is the need to discuss.',
  },
  {
    marker: '02',
    title: 'Growing-season lawn care',
    description: 'Mowing, aeration and seeding, and fertilization and weed control remain separate choices for different lawn concerns.',
  },
  {
    marker: '03',
    title: 'Outdoor-space and fall needs',
    description: 'Landscaping, yard cleanup, grading and fall cleanup each lead to their own service scope.',
  },
  {
    marker: '04',
    title: 'Snow-related needs',
    description: 'Snow Removal remains a separate estimate path for driveway or access-area needs after snowfall.',
  },
] as const

export const waukeeRequestPoints = [
  'Identify whether the request concerns a lawn, another outdoor area, a driveway or an access area.',
  'Choose the single service page that most closely matches the current need, then add context through the estimate path.',
] as const

const relatedAreaRecords = [
  { routeId: 'home', description: 'Use the homepage for the primary Des Moines service overview.' },
  { routeId: 'service-area-ankeny', description: 'Open the published Ankeny service-area guide.' },
  { routeId: 'service-area-norwalk', description: 'Choose Norwalk when that is the community connected to the property.' },
  { routeId: 'service-area-altoona', description: 'Choose Altoona when that is the community connected to the property.' },
] as const satisfies readonly {
  routeId: Extract<RouteId, 'home' | 'service-area-ankeny' | 'service-area-norwalk' | 'service-area-altoona'>
  description: string
}[]

export const waukeeRelatedAreaLinks = relatedAreaRecords.map((area) => ({
  ...area,
  name: area.routeId === 'home' ? 'Des Moines' : routeLabels[area.routeId],
  href: routesById[area.routeId].path,
}))

const supportingRouteIds = [
  {
    routeId: 'services',
    description: 'Compare the complete published service catalog when the current need is not yet clear.',
  },
  {
    routeId: 'service-areas',
    description: 'Return to the five-community directory and choose the area connected to the property.',
  },
  {
    routeId: 'commercial-property-services',
    description: 'Review the commercial hub when the high-level property context is commercial.',
  },
] as const satisfies readonly {
  routeId: Extract<RouteId, 'services' | 'service-areas' | 'commercial-property-services'>
  description: string
}[]

export const waukeeSupportingLinks = supportingRouteIds.map((link) => ({
  ...link,
  name: routeLabels[link.routeId],
  href: routesById[link.routeId].path,
}))

export const waukeeServiceAreaContent = {
  slug: 'waukee-ia',
  cityName: 'Waukee',
  routeId: 'service-area-waukee',
  schemaItemListName: 'Lawn care services available for Waukee estimate requests',
  hero: {
    eyebrow: 'Waukee service guide',
    summary: 'This Waukee lawn service guide organizes published options across changing property needs without treating them as a bundled plan or automatic schedule.',
    cta: 'Request a Free Estimate in Waukee',
  },
  servicesSection: {
    eyebrow: 'Canonical service owners',
    heading: 'Follow the current need to one clear service path.',
    introduction: 'A Waukee lawn service request may begin with lawn mowing, landscaping, yard cleanup or snow removal. Each link keeps the detailed scope on its dedicated service page.',
    allServicesLabel: 'Compare the Full Service Directory',
  },
  services: waukeeServiceItems,
  editorial: {
    kind: 'year-spanning',
    rangeSection: {
      eyebrow: 'Different needs across the year',
      heading: 'A service range, not an automatic program.',
      introduction: 'The published set spans growing-season lawn care, outdoor-space work, seasonal cleanup and snow removal. It does not create a contract, recurring schedule or guarantee of availability.',
      items: waukeeRangeItems,
    },
    propertySection: {
      eyebrow: 'Set the property context',
      heading: 'Residential or commercial comes before the scope.',
      introduction: 'The approved records support both high-level property contexts. The estimate request is where the current property area and service need can be identified.',
      residential: 'For a residential property, begin with the lawn, outdoor area, driveway or access-area need that prompted the request.',
      commercial: 'For a commercial property, identify the relevant property area and use the commercial hub to compare the approved service categories.',
      requestHeading: 'Two details to bring forward',
      requestPoints: waukeeRequestPoints,
    },
    supportingSection: {
      eyebrow: 'Keep the next step focused',
      heading: 'Use the supporting path that matches the question.',
      introduction: 'Use the established page for service details, coverage context or commercial framing.',
      links: waukeeSupportingLinks,
    },
  },
  relatedSection: {
    eyebrow: 'Five-area hierarchy',
    heading: 'Other service areas',
    introduction: 'Use these area links as neutral coverage paths. They do not establish proximity, a branch or a response time.',
    hubLabel: 'Return to the Service Areas Hub',
  },
  relatedAreas: waukeeRelatedAreaLinks,
  finalCta: {
    eyebrow: 'Start with the current need',
    heading: 'Request a Free Estimate in Waukee',
    description: 'Use Mo’s established contact path to identify the property context and the service you want to discuss.',
    buttonLabel: 'Request an Estimate',
  },
} as const satisfies CityServiceAreaContent
