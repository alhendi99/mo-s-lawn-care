import { NextRequest, NextResponse } from 'next/server'
import { WORK_BATCH_SIZE, getOurWorkRecords, getPublicWorkBatch } from '@/content/projects'

export function GET(request: NextRequest) {
  const offsetValue = Number.parseInt(request.nextUrl.searchParams.get('offset') ?? '0', 10)
  const limitValue = Number.parseInt(request.nextUrl.searchParams.get('limit') ?? String(WORK_BATCH_SIZE), 10)
  const offset = Number.isFinite(offsetValue) ? Math.max(0, offsetValue) : 0
  const limit = Number.isFinite(limitValue) ? Math.min(WORK_BATCH_SIZE, Math.max(1, limitValue)) : WORK_BATCH_SIZE
  const total = getOurWorkRecords().length
  const items = getPublicWorkBatch(offset, limit)

  return NextResponse.json(
    { items, nextOffset: offset + items.length, hasMore: offset + items.length < total, total },
    { headers: { 'Cache-Control': 'public, max-age=300, stale-while-revalidate=3600' } },
  )
}
