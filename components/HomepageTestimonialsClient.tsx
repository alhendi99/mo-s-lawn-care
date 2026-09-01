'use client'

import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { routesById } from '@/content/routes'
import type { PublicReviewItem } from '@/content/reviews'
import { site } from '@/lib/site'
import { useI18n } from '@/lib/i18n'

export function HomepageTestimonialsClient({ reviews }: { reviews: readonly PublicReviewItem[] }) {
  const { t } = useI18n()
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = useCallback((next: number, nextDirection: number) => {
    setDirection(nextDirection)
    setIndex((next + reviews.length) % reviews.length)
  }, [reviews.length])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || reviews.length <= 1) return
    const timer = window.setInterval(() => {
      setDirection(1)
      setIndex((current) => (current + 1) % reviews.length)
    }, 6500)
    return () => window.clearInterval(timer)
  }, [reviews.length])

  const review = reviews[index]
  if (!review) return null

  return (
    <section id="reviews" data-home-section="reviews" data-review-mode="home" aria-labelledby="reviews-heading" className="relative overflow-hidden bg-[#f5faf5] py-20 sm:py-28">
      <div aria-hidden="true" className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-[#3e7a45]/8 blur-3xl" />
      <div className="relative mx-auto grid w-full max-w-[112rem] gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(18rem,0.55fr)_minmax(0,1fr)] lg:items-start lg:gap-20">
        <div>
          <p className="eyebrow text-[#3e7a45]">{t('Google Reviews')}</p>
          <h2 id="reviews-heading" className="display-md mt-5 max-w-[12ch] text-[#1d2b1f]">{t("What customers say about Mo's.")}</h2>
          <p className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-ink-soft">{t("A curated selection of feedback shared through Mo's Google Business Profile.")}</p>
          <p className="mt-6 font-display text-2xl font-bold tracking-[-0.03em] text-[#244729] uppercase">{t(site.reviewSummary.displayCopy)}</p>
          <div className="mt-7 flex flex-col items-start gap-3">
            <Link href={routesById.reviews.path} prefetch={false} className="btn-solid group bg-[#3e7a45]">
              {t('Read More Customer Reviews')}<span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <a href={site.googleBusinessProfileHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-sm font-semibold text-[#244729] underline decoration-[#3e7a45]/35 underline-offset-4 hover:decoration-current">{t('View on Google')}</a>
          </div>
        </div>

        <div className="border-t-4 border-[#3e7a45] bg-white p-6 shadow-[0_24px_70px_-35px_rgba(35,72,41,0.42)] sm:p-10 lg:p-12">
          <div className="min-h-[24rem] sm:min-h-[20rem]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.blockquote key={review.id} custom={direction} initial={{ opacity: 0, x: direction * 28 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: direction * -28 }} transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}>
                <p className="eyebrow text-[#3e7a45]">{t('Customer feedback')}</p>
                <p className="mt-7 whitespace-pre-line text-[clamp(1.18rem,1rem+0.65vw,1.65rem)] leading-relaxed font-medium text-[#263329]">&ldquo;{review.text}&rdquo;</p>
                <footer className="mt-8 border-t border-[#3e7a45]/12 pt-5">
                  <p className="font-bold text-[#244729]">{review.reviewerDisplayName}</p>
                  <p className="mt-1 text-sm text-ink-soft">{t(review.sourceLabel)}</p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>
          <div className="mt-4 flex items-center justify-between gap-5 border-t border-[#3e7a45]/12 pt-5">
            <p aria-live="polite" className="text-sm font-bold text-[#3e7a45] tabular-nums">{String(index + 1).padStart(2, '0')} <span className="text-ink-soft">/ {reviews.length}</span></p>
            <div className="flex gap-2">
              <button type="button" onClick={() => go(index - 1, -1)} aria-label={t('Previous review')} className="grid h-11 w-11 place-items-center rounded-full border border-[#3e7a45]/30 text-[#3e7a45] transition-colors hover:bg-[#3e7a45] hover:text-white"><ChevronLeft aria-hidden="true" className="h-5 w-5" /></button>
              <button type="button" onClick={() => go(index + 1, 1)} aria-label={t('Next review')} className="grid h-11 w-11 place-items-center rounded-full bg-[#3e7a45] text-white transition-colors hover:bg-[#326438]"><ChevronRight aria-hidden="true" className="h-5 w-5" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
