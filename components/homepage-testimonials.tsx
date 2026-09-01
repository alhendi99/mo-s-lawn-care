import { getHomepageReviewRecords, toPublicReviewItem } from '@/content/reviews'
import { HomepageTestimonialsClient } from './HomepageTestimonialsClient'

export function HomepageTestimonials() {
  const reviews = getHomepageReviewRecords().map(toPublicReviewItem)
  return <HomepageTestimonialsClient reviews={reviews} />
}
