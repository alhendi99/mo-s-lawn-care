import type { RouteId } from '../types.ts'

type ServiceRouteId = Extract<RouteId, `service-${string}`>

type ServiceDetailLink = Readonly<{
  routeId: RouteId
  eyebrow: string
  description: string
}>

type ServiceDetailReview = Readonly<{
  name: string
  quote: string
  sourceLabel: 'Google Review'
}>

type ServiceDetailWorkImage = Readonly<{
  src: string
  width: number
  height: number
  alt: string
  caption: string
  provenance: 'existing-property-care-gallery'
  cityAttribution: null
  serviceAttribution: null
}>

export type ServiceDetailContent = Readonly<{
  slug: string
  routeId: ServiceRouteId
  schema: Readonly<{
    name: string
    serviceType: string
  }>
  hero: Readonly<{
    eyebrow: string
    summary: string
    compactHeading?: boolean
    image: Readonly<{
      src: string
      width: number
      height: number
      alt: string
      caption: string
      loading?: 'eager' | 'lazy'
      provenance:
        | 'existing-property-care-gallery'
        | 'existing-neutral-property-image'
        | 'existing-seasonal-image'
    }>
  }>
  introduction: Readonly<{
    eyebrow: string
    heading: string
    paragraphs: readonly string[]
    decisionPoints: readonly Readonly<{
      number: string
      title: string
      description: string
    }>[]
  }>
  scope: Readonly<{
    eyebrow: string
    heading: string
    introduction: string
    items: readonly Readonly<{
      title: string
      description: string
    }>[]
  }>
  relatedServicesIntro: Readonly<{
    eyebrow: string
    heading: string
    description: string
  }>
  relatedServices: readonly ServiceDetailLink[]
  propertyContext: Readonly<{
    eyebrow: string
    heading: string
    residential: string
    commercial: string
    portfolio: string
  }>
  workPreview?: Readonly<{
    eyebrow: string
    heading: string
    introduction: string
    images: readonly ServiceDetailWorkImage[]
    clarification: string
  }>
  reviews: Readonly<{
    eyebrow: string
    heading: string
    introduction: string
    items: readonly ServiceDetailReview[]
  }>
  serviceArea: Readonly<{
    eyebrow: string
    heading: string
    description: string
    cities: readonly string[]
    clarification: string
  }>
  faqIntro: Readonly<{
    eyebrow: string
    heading: string
  }>
  faqs: readonly Readonly<{
    question: string
    answer: string
  }>[]
  finalCta: Readonly<{
    eyebrow: string
    heading: string
    description: string
  }>
}>
