'use client'

import { useRef, useState } from 'react'
import type { PublicReviewItem, ReviewCategoryId, ReviewFilterId } from '@/content/reviews'
import { useI18n } from '@/lib/i18n'

type CategoryOption = Readonly<{ id: ReviewCategoryId; label: string }>

type ReviewsCollectionClientProps = Readonly<{
  categories: readonly CategoryOption[]
  categoryCounts: Readonly<Record<ReviewFilterId, number>>
  initialItems: readonly PublicReviewItem[]
  totalCount: number
  batchSize: number
}>

export function ReviewsCollectionClient({ categories, categoryCounts, initialItems, totalCount, batchSize }: ReviewsCollectionClientProps) {
  const { t } = useI18n()
  const [activeCategory, setActiveCategory] = useState<ReviewFilterId>('all')
  const [items, setItems] = useState<readonly PublicReviewItem[]>(initialItems)
  const [loading, setLoading] = useState(false)
  const [loadError, setLoadError] = useState(false)
  const requestSequence = useRef(0)
  const collectionStatusRef = useRef<HTMLParagraphElement>(null)
  const activeTotal = activeCategory === 'all' ? totalCount : categoryCounts[activeCategory]
  const hasMore = items.length < activeTotal

  const requestBatch = async (category: ReviewFilterId, offset: number) => {
    const response = await fetch(`/api/reviews?category=${encodeURIComponent(category)}&offset=${offset}&limit=${batchSize}`)
    if (!response.ok) throw new Error('Unable to load review batch')
    return response.json() as Promise<{ items: PublicReviewItem[]; hasMore: boolean }>
  }

  const selectCategory = async (category: ReviewFilterId) => {
    if (category === activeCategory || loading) return
    const previousCategory = activeCategory
    const sequence = ++requestSequence.current
    setActiveCategory(category)
    setLoading(true)
    setLoadError(false)
    try {
      const payload = await requestBatch(category, 0)
      if (sequence !== requestSequence.current) return
      setItems(payload.items)
    } catch {
      if (sequence === requestSequence.current) {
        setActiveCategory(previousCategory)
        setLoadError(true)
      }
    } finally {
      if (sequence === requestSequence.current) setLoading(false)
    }
  }

  const loadMore = async () => {
    if (loading || !hasMore) return
    const sequence = ++requestSequence.current
    setLoading(true)
    setLoadError(false)
    try {
      const payload = await requestBatch(activeCategory, items.length)
      if (sequence !== requestSequence.current) return
      setItems((current) => {
        const ids = new Set(current.map(({ id }) => id))
        return [...current, ...payload.items.filter(({ id }) => !ids.has(id))]
      })
      if (!payload.hasMore) requestAnimationFrame(() => collectionStatusRef.current?.focus())
    } catch {
      if (sequence === requestSequence.current) setLoadError(true)
    } finally {
      if (sequence === requestSequence.current) setLoading(false)
    }
  }

  return (
    <div data-review-mode="full">
      <div className="flex gap-2 overflow-x-auto pb-3" role="group" aria-label={t('Filter customer feedback')}>
        <FilterButton id="all" label={t('All feedback')} count={categoryCounts.all} active={activeCategory === 'all'} disabled={loading} onSelect={selectCategory} />
        {categories.map((category) => (
          <FilterButton key={category.id} id={category.id} label={t(category.label)} count={categoryCounts[category.id]} active={activeCategory === category.id} disabled={loading} onSelect={selectCategory} />
        ))}
      </div>

      <p aria-live="polite" aria-atomic="true" className="eyebrow mt-7 text-ink-soft tabular-nums">
        <span className="text-ink">{items.length}</span> {t('of')} {activeTotal} {t('feedback records shown')}
      </p>

      <div id="review-collection" aria-busy={loading} className="mt-5 grid border-b border-[color:var(--rule)] md:grid-cols-2 xl:grid-cols-3">
        {items.map((review) => (
          <article key={review.id} className="flex min-w-0 flex-col border-t border-[color:var(--rule)] px-1 py-8 md:px-7 md:nth-[2n+1]:pl-0 md:nth-[2n]:border-l xl:nth-[2n]:border-l-0 xl:nth-[3n+1]:pl-0 xl:nth-[3n+2]:border-l xl:nth-[3n+3]:border-l">
            <p className="eyebrow text-[#3e7a45]">{t(review.sourceLabel)}</p>
            <blockquote className="mt-5 flex-1 whitespace-pre-line text-[1.0625rem] leading-relaxed text-[#263329]">&ldquo;{review.text}&rdquo;</blockquote>
            <footer className="mt-7 border-t border-[#3e7a45]/12 pt-4 font-bold text-[#244729]">{review.reviewerDisplayName}</footer>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p ref={collectionStatusRef} tabIndex={-1} className="max-w-xl text-sm leading-relaxed text-ink-soft focus-visible:outline-offset-4">
          {hasMore ? t('Additional feedback loads in small, ordered batches.') : t('All feedback in this category is shown.')}
        </p>
        {hasMore ? (
          <button type="button" onClick={loadMore} aria-busy={loading} aria-disabled={loading} className={`btn-solid min-w-48 ${loading ? 'cursor-wait opacity-65' : ''}`}>
            {t(loading ? 'Loading more…' : 'Load more reviews')}
          </button>
        ) : null}
      </div>
      {loadError ? <p role="alert" className="mt-4 text-sm font-semibold text-[#8f2d1e]">{t('More feedback could not be loaded. Please try again.')}</p> : null}
    </div>
  )
}

function FilterButton({ id, label, count, active, disabled, onSelect }: Readonly<{ id: ReviewFilterId; label: string; count: number; active: boolean; disabled: boolean; onSelect: (id: ReviewFilterId) => void }>) {
  return (
    <button type="button" aria-pressed={active} aria-controls="review-collection" aria-disabled={disabled} onClick={() => onSelect(id)} className={`inline-flex min-h-11 shrink-0 items-center gap-2 border px-4 text-sm font-bold transition-colors focus-visible:outline-offset-2 ${active ? 'border-evergreen bg-evergreen text-paper' : 'border-[color:var(--rule)] bg-paper text-ink hover:border-evergreen'} aria-disabled:cursor-wait aria-disabled:opacity-65`}>
      <span>{label}</span><span aria-hidden="true" className="text-xs tabular-nums opacity-70">{count}</span>
    </button>
  )
}
