import { NextRequest, NextResponse } from 'next/server'
import {
  REVIEW_CATEGORIES,
  REVIEWS_BATCH_SIZE,
  getDisplayReviewRecords,
  getPublicReviewBatch,
  type ReviewFilterId,
} from '@/content/reviews'

const validCategories = new Set<ReviewFilterId>(['all', ...REVIEW_CATEGORIES.map(({ id }) => id)])

export function GET(request: NextRequest) {
  const requestedCategory = request.nextUrl.searchParams.get('category') ?? 'all'
  const category: ReviewFilterId = validCategories.has(requestedCategory as ReviewFilterId) ? requestedCategory as ReviewFilterId : 'all'
  const offsetValue = Number.parseInt(request.nextUrl.searchParams.get('offset') ?? '0', 10)
  const limitValue = Number.parseInt(request.nextUrl.searchParams.get('limit') ?? String(REVIEWS_BATCH_SIZE), 10)
  const offset = Number.isFinite(offsetValue) ? Math.max(0, offsetValue) : 0
  const limit = Number.isFinite(limitValue) ? Math.min(REVIEWS_BATCH_SIZE, Math.max(1, limitValue)) : REVIEWS_BATCH_SIZE
  const total = getDisplayReviewRecords(category).length
  const items = getPublicReviewBatch(category, offset, limit)

  return NextResponse.json(
    { items, nextOffset: offset + items.length, hasMore: offset + items.length < total, total, category },
    { headers: { 'Cache-Control': 'public, max-age=300, stale-while-revalidate=3600' } },
  )
}
