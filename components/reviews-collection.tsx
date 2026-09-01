import {
  REVIEW_CATEGORIES,
  REVIEWS_BATCH_SIZE,
  REVIEWS_INITIAL_COUNT,
  getDisplayReviewRecords,
  getPublicReviewBatch,
  getReviewCategoryCounts,
} from '@/content/reviews'
import { ReviewsCollectionClient } from './ReviewsCollectionClient'

export function ReviewsCollection() {
  const records = getDisplayReviewRecords()
  return (
    <ReviewsCollectionClient
      categories={REVIEW_CATEGORIES.map(({ id, label }) => ({ id, label }))}
      categoryCounts={getReviewCategoryCounts()}
      initialItems={getPublicReviewBatch('all', 0, REVIEWS_INITIAL_COUNT)}
      totalCount={records.length}
      batchSize={REVIEWS_BATCH_SIZE}
    />
  )
}
