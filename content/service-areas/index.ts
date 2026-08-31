import { ankenyServiceAreaContent } from './ankeny-ia.ts'
import { altoonaServiceAreaContent } from './altoona-ia.ts'
import { norwalkServiceAreaContent } from './norwalk-ia.ts'
import { waukeeServiceAreaContent } from './waukee-ia.ts'

/** Only records in this explicit list may render through the city route. */
export const publishedCityServiceAreas = [
  ankenyServiceAreaContent,
  waukeeServiceAreaContent,
  norwalkServiceAreaContent,
  altoonaServiceAreaContent,
] as const

export const publishedCityServiceAreaSlugs = publishedCityServiceAreas.map(({ slug }) => slug)

export function getPublishedCityServiceArea(slug: string) {
  return publishedCityServiceAreas.find((area) => area.slug === slug)
}
