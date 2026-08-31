import { ankenyServiceAreaContent } from './ankeny-ia.ts'

/** Only records in this explicit list may render through the city route. */
export const publishedCityServiceAreas = [ankenyServiceAreaContent] as const

export const publishedCityServiceAreaSlugs = publishedCityServiceAreas.map(({ slug }) => slug)

export function getPublishedCityServiceArea(slug: string) {
  return publishedCityServiceAreas.find((area) => area.slug === slug)
}
