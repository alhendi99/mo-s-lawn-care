import { routeLabels, routesById } from '../routes.ts'
import type { RouteId } from '../types.ts'
import type { CityServiceAreaContent } from './types.ts'

type NorwalkServiceRouteId = Extract<RouteId, `service-${string}`>

const approvedNorwalkServices = [
  {
    routeId: 'service-lawn-mowing',
    group: 'Grass cutting',
    summary: 'Open Lawn Mowing details when grass cutting is the current request.',
    evidence: 'The approved Lawn Mowing canonical record explicitly lists Norwalk in its service-area cities.',
  },
  {
    routeId: 'service-aeration-overseeding',
    group: 'Lawn concern',
    summary: 'Read Aeration & Seeding details for a thin or compacted lawn concern.',
    evidence: 'The approved Aeration & Seeding canonical record explicitly lists Norwalk in its service-area cities.',
  },
  {
    routeId: 'service-landscaping',
    group: 'Outdoor area',
    summary: 'Use the Landscaping page when focused care or improvement of an outdoor space is the subject.',
    evidence: 'The approved Landscaping canonical record explicitly lists Norwalk in its service-area cities.',
  },
  {
    routeId: 'service-grading',
    group: 'Uneven ground',
    summary: 'Go to Grading when uneven ground or preparation of an outdoor area is the need.',
    evidence: 'The approved Grading canonical record explicitly lists Norwalk in its service-area cities.',
  },
  {
    routeId: 'service-yard-cleanup',
    group: 'Broader yard need',
    summary: 'Select Yard Cleanup for an overgrown yard or outdoor area that needs broader cleanup attention.',
    evidence: 'The approved Yard Cleanup canonical record explicitly lists Norwalk in its service-area cities.',
  },
  {
    routeId: 'service-spring-cleanup',
    group: 'Spring need',
    summary: 'Review Spring Cleanup when seasonal property attention is needed as the growing season approaches.',
    evidence: 'The approved Spring Cleanup canonical record explicitly lists Norwalk in its service-area cities.',
  },
  {
    routeId: 'service-fertilization-weed-control',
    group: 'Lawn concern',
    summary: 'Visit the combined service page for a fertilization or unwanted-weed question about the lawn.',
    evidence: 'The approved Fertilization & Weed Control canonical record explicitly lists Norwalk in its service-area cities.',
  },
  {
    routeId: 'service-fall-cleanup-leaf-removal',
    group: 'Fall need',
    summary: 'Follow Fall Cleanup & Leaf Removal for leaves and seasonal debris during fall.',
    evidence: 'The approved Fall Cleanup & Leaf Removal canonical record explicitly lists Norwalk in its service-area cities.',
  },
  {
    routeId: 'service-snow-removal',
    group: 'Snowfall need',
    summary: 'Open Snow Removal for a driveway or access-area request after snowfall.',
    evidence: 'The approved Snow Removal canonical record explicitly lists Norwalk in its service-area cities.',
  },
] as const satisfies readonly {
  routeId: NorwalkServiceRouteId
  group: string
  summary: string
  evidence: string
}[]

export const norwalkServiceItems = approvedNorwalkServices.map((service, index) => ({
  ...service,
  position: index + 1,
  name: routeLabels[service.routeId],
  href: routesById[service.routeId].path,
  canonicalUrl: routesById[service.routeId].canonicalUrl,
}))

export const norwalkPriorityItems = [
  {
    number: '01',
    title: 'Locate the need',
    description: 'Identify whether the request concerns the lawn, another outdoor area, uneven ground, a driveway or an access area.',
  },
  {
    number: '02',
    title: 'Choose the service owner',
    description: 'Use the dedicated page for the current concern so its approved scope remains clear before an estimate request begins.',
  },
  {
    number: '03',
    title: 'Add the timing context',
    description: 'State whether the need is ongoing or tied to the current season without assuming a schedule, bundle or automatic transition.',
  },
] as const

export const norwalkEstimateItems = [
  {
    title: 'What you observe',
    description: 'Describe the broad property concern without needing to diagnose it or select a standard package.',
  },
  {
    title: 'Where it applies',
    description: 'Name the relevant lawn, outdoor area, uneven ground, driveway or access area connected to the request.',
  },
  {
    title: 'A starting service',
    description: 'Choose the closest service path; the estimate conversation can establish the property-specific scope.',
  },
] as const

const supportingRouteRecords = [
  {
    routeId: 'services',
    description: 'Use the complete service directory when more than one starting path appears relevant.',
  },
  {
    routeId: 'commercial-property-services',
    description: 'Use the commercial hub when the request has a commercial property context.',
  },
  {
    routeId: 'service-areas',
    description: 'Return to the approved five-community coverage directory.',
  },
] as const satisfies readonly {
  routeId: Extract<RouteId, 'services' | 'service-areas' | 'commercial-property-services'>
  description: string
}[]

export const norwalkSupportingLinks = supportingRouteRecords.map((link) => ({
  ...link,
  name: routeLabels[link.routeId],
  href: routesById[link.routeId].path,
}))

const relatedAreaRecords = [
  { routeId: 'home', description: 'Use the homepage for the Des Moines lawn care and snow removal overview.' },
  { routeId: 'service-area-ankeny', description: 'Continue to the published Ankeny service-area page.' },
  { routeId: 'service-area-waukee', description: 'Continue to the published Waukee service-area page.' },
  { routeId: 'service-area-altoona', description: 'Use the Altoona path when that is the community connected to the property.' },
] as const satisfies readonly {
  routeId: Extract<RouteId, 'home' | 'service-area-ankeny' | 'service-area-waukee' | 'service-area-altoona'>
  description: string
}[]

export const norwalkRelatedAreaLinks = relatedAreaRecords.map((area) => ({
  ...area,
  name: area.routeId === 'home' ? 'Des Moines' : routeLabels[area.routeId],
  href: routesById[area.routeId].path,
}))

export const norwalkServiceAreaContent = {
  slug: 'norwalk-ia',
  cityName: 'Norwalk',
  routeId: 'service-area-norwalk',
  schemaItemListName: 'Lawn care services available for Norwalk estimate requests',
  hero: {
    eyebrow: 'Norwalk service selection',
    summary: 'Use this Norwalk lawn service page to identify the present property need, open its approved service details and prepare a focused estimate request.',
    cta: 'Request a Free Estimate in Norwalk',
  },
  servicesSection: {
    eyebrow: 'Nine approved starting points',
    heading: 'Match the concern to its service details.',
    introduction: 'Lawn mowing in Norwalk, landscaping in Norwalk, yard cleanup in Norwalk and snow removal in Norwalk remain separate choices. The ordered guide also routes lawn-condition, grading and seasonal needs without turning them into a package.',
    allServicesLabel: 'Open the Complete Services Hub',
  },
  services: norwalkServiceItems,
  editorial: {
    kind: 'priority-map',
    prioritySection: {
      eyebrow: 'Set the request priority',
      heading: 'Begin with the immediate property question.',
      introduction: 'Norwalk coverage identifies an approved community for estimate requests. It does not determine the work, timing or a standard plan for the property.',
      items: norwalkPriorityItems,
    },
    timingSection: {
      eyebrow: 'Ongoing or time-specific',
      heading: 'Keep the timing attached to the need.',
      introduction: 'Some requests concern continuing property care; others arise from a lawn condition, outdoor-area concern, season or snowfall. Each still begins with its own service path.',
      ongoing: {
        heading: 'Ongoing need',
        description: 'A request can concern ongoing lawn care such as mowing. No frequency, recurring agreement or guaranteed schedule is published here.',
      },
      timeSpecific: {
        heading: 'Time-specific need',
        description: 'Seasonal cleanup, a current lawn or outdoor-area concern, and snow removal remain separate requests rather than automatic stages of one program.',
      },
      note: 'The canonical service pages—not this city guide—contain the approved capability details for each choice.',
    },
    estimateSection: {
      eyebrow: 'Prepare useful context',
      heading: 'Bring three details to the estimate path.',
      introduction: 'A concise request can identify the concern and property area without assuming price, timing, availability or a predetermined scope.',
      items: norwalkEstimateItems,
      links: norwalkSupportingLinks,
    },
  },
  relatedSection: {
    eyebrow: 'Coverage navigation',
    heading: 'Choose another approved area',
    introduction: 'These links identify other entries in the service-area hierarchy. They do not represent proximity, an office, a crew or a response commitment.',
    hubLabel: 'Review All Service Areas',
  },
  relatedAreas: norwalkRelatedAreaLinks,
  finalCta: {
    eyebrow: 'Norwalk estimate request',
    heading: 'Request a Free Estimate in Norwalk',
    description: 'Tell Mo’s which property area and current service need you want to discuss through the existing contact path.',
    buttonLabel: 'Continue to the Estimate Path',
  },
} as const satisfies CityServiceAreaContent
