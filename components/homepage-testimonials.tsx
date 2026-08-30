'use client'

import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { routesById } from '@/content/routes'
import { site } from '@/lib/site'
import { useI18n } from '@/lib/i18n'

const featuredReviews = [
  {
    name: 'Shahbaz Khan',
    rating: 5,
    quote: "Excellent service from Mo's Lawn Care & Snow Removal Services LLC! The team was professional, punctual, and did an amazing job. They paid attention to every detail and made our property look clean and well-maintained. Great communication and fair pricing as well. Highly recommended!",
  },
  {
    name: 'Jesse T',
    rating: 5,
    quote: "Mo was able to come out next day to take care of my mother's lawn. Super professional and incredibly nice. Honestly couldn't have asked for better service. From now on he's my go to guy for lawn care services.\n\nSeriously, he's awesome.",
  },
  {
    name: 'Erick & Deanna Van Cura',
    rating: 5,
    quote: 'We have been so happy and satisfied with Mo and his services. He is very reliable and very professional and always does a great job. From mowing and snow removal he is the best. We would highly recommend him.',
  },
  {
    name: 'Lori Stiles',
    rating: 5,
    quote: "Mo has had great advice for us with our lawn, patch reseeding tips, and is very generous with his time and availability. He's aerated & mowed for us and is always very personable. I highly recommend.",
  },
  {
    name: 'Regina Nsanzimana',
    rating: 5,
    quote: 'Mo’s Lawn Care did an awesome job mowing my lawn! They were incredibly fast, professional, and left everything looking super clean and well-maintained. I really appreciated how quickly they got the job done without cutting any corners. Highly recommend if you’re looking for efficient and reliable lawn care!',
  },
] as const

export function HomepageTestimonials() {
  const { t } = useI18n()
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = useCallback((next: number, nextDirection: number) => {
    setDirection(nextDirection)
    setIndex((next + featuredReviews.length) % featuredReviews.length)
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(() => {
      setDirection(1)
      setIndex((current) => (current + 1) % featuredReviews.length)
    }, 6500)
    return () => window.clearInterval(timer)
  }, [])

  const review = featuredReviews[index]

  return (
    <section
      id="reviews"
      data-home-section="reviews"
      aria-labelledby="reviews-heading"
      className="relative overflow-hidden bg-[#f5faf5] py-20 sm:py-28"
    >
      <div aria-hidden="true" className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-[#3e7a45]/8 blur-3xl" />
      <div className="relative mx-auto grid w-full max-w-[112rem] gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(18rem,0.55fr)_minmax(0,1fr)] lg:items-start lg:gap-20">
        <div>
          <p className="eyebrow text-[#3e7a45]"><TrText text="Google Reviews" t={t} /></p>
          <h2 id="reviews-heading" className="display-md mt-5 max-w-[12ch] text-[#1d2b1f]">
            <TrText text="What customers say about Mo's." t={t} />
          </h2>
          <p className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-ink-soft">
            <TrText text="A curated selection of feedback shared through Mo's Google Business Profile." t={t} />
          </p>
          <p className="mt-6 font-display text-2xl font-bold tracking-[-0.03em] text-[#244729] uppercase">
            {t(site.reviewSummary.displayCopy)}
          </p>
          <div className="mt-7 flex flex-col items-start gap-3">
            <Link href={routesById.reviews.path} prefetch={false} className="btn-solid group bg-[#3e7a45]">
              {t('Read More Customer Reviews')}
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <a
              href={site.googleBusinessProfileHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center text-sm font-semibold text-[#244729] underline decoration-[#3e7a45]/35 underline-offset-4 hover:decoration-current"
            >
              {t('View on Google')}
            </a>
          </div>
        </div>

        <div className="border-t-4 border-[#3e7a45] bg-white p-6 shadow-[0_24px_70px_-35px_rgba(35,72,41,0.42)] sm:p-10 lg:p-12">
          <div className="min-h-[24rem] sm:min-h-[20rem]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.blockquote
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 28 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -28 }}
                transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex gap-1 text-[#3e7a45]" role="img" aria-label={`${review.rating} ${t('out of 5 stars')}`}>
                  {Array.from({ length: review.rating }).map((_, starIndex) => (
                    <Star key={starIndex} aria-hidden="true" className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="mt-7 whitespace-pre-line text-[clamp(1.18rem,1rem+0.65vw,1.65rem)] leading-relaxed font-medium text-[#263329]">
                  &ldquo;{t(review.quote)}&rdquo;
                </p>
                <footer className="mt-8 border-t border-[#3e7a45]/12 pt-5">
                  <p className="font-bold text-[#244729]">{review.name}</p>
                  <p className="mt-1 text-sm text-ink-soft">{t('Google Review')}</p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-4 flex items-center justify-between gap-5 border-t border-[#3e7a45]/12 pt-5">
            <p aria-live="polite" className="text-sm font-bold text-[#3e7a45] tabular-nums">
              {String(index + 1).padStart(2, '0')} <span className="text-ink-soft">/ {featuredReviews.length}</span>
            </p>
            <div className="flex gap-2">
              <button type="button" onClick={() => go(index - 1, -1)} aria-label={t('Previous review')} className="grid h-11 w-11 place-items-center rounded-full border border-[#3e7a45]/30 text-[#3e7a45] transition-colors hover:bg-[#3e7a45] hover:text-white">
                <ChevronLeft aria-hidden="true" className="h-5 w-5" />
              </button>
              <button type="button" onClick={() => go(index + 1, 1)} aria-label={t('Next review')} className="grid h-11 w-11 place-items-center rounded-full bg-[#3e7a45] text-white transition-colors hover:bg-[#326438]">
                <ChevronRight aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrText({ text, t }: { text: string; t: (value: string) => string }) {
  return <>{t(text)}</>
}
