'use client'

import Image from 'next/image'
import { useState } from 'react'
import type { PublicWorkComparison, PublicWorkItem } from '@/content/projects'
import { useI18n } from '@/lib/i18n'

function Frame({ item, side }: { item: PublicWorkItem; side: 'Before' | 'After' }) {
  const { locale, t } = useI18n()
  return (
    <Image
      src={item.src}
      alt={`${t(`${side} view`)}: ${item.alt[locale]}`}
      fill
      sizes="(min-width: 1536px) 1500px, (min-width: 1024px) 90vw, 100vw"
      loading="lazy"
      className="object-cover"
    />
  )
}

export function BeforeAfterSliderClient({ comparisons }: { comparisons: readonly PublicWorkComparison[] }) {
  const { t } = useI18n()
  const [slideIndex, setSlideIndex] = useState(0)
  const [value, setValue] = useState(50)
  const comparison = comparisons[slideIndex]

  const changeSlide = (index: number) => {
    setSlideIndex(index)
    setValue(50)
  }
  const previousSlide = () => changeSlide(slideIndex === 0 ? comparisons.length - 1 : slideIndex - 1)
  const nextSlide = () => changeSlide(slideIndex === comparisons.length - 1 ? 0 : slideIndex + 1)

  return (
    <div className="w-full" data-comparison-count={comparisons.length}>
      <div className="relative mx-auto w-full max-w-[1600px] sm:px-14 lg:px-16 xl:px-20">
        <button type="button" onClick={previousSlide} aria-label={t('Previous comparison')} className="absolute top-1/2 left-1 z-40 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-black/55 text-2xl text-white backdrop-blur-sm transition hover:bg-black/80 sm:left-2 lg:left-2">
          <span aria-hidden="true">‹</span>
        </button>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl shadow-2xl focus-within:ring-3 focus-within:ring-[#D5EE72] focus-within:ring-offset-3 focus-within:ring-offset-evergreen min-[480px]:aspect-[4/3] sm:aspect-[3/2] md:aspect-[16/10] lg:aspect-[16/9] xl:aspect-[2/1]">
          <div className="absolute inset-0"><Frame item={comparison.after} side="After" /></div>
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}><Frame item={comparison.before} side="Before" /></div>

          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 z-20 w-px" style={{ left: `${value}%`, backgroundColor: 'var(--accent)' }}>
            <span className="comparison-handle absolute top-1/2 left-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-sm font-bold text-white lg:h-14 lg:w-14 lg:text-base" style={{ backgroundColor: 'var(--accent)', boxShadow: '0 0 0 3px rgba(255,255,255,0.3), 0 5px 20px rgba(0,0,0,0.3)' }}>↔</span>
          </div>

          <span className="pointer-events-none absolute top-3 left-3 z-20 text-[0.65rem] font-bold tracking-[0.2em] text-white uppercase drop-shadow sm:top-4 sm:left-4 sm:text-xs lg:top-6 lg:left-6 lg:text-sm">{t('Before')}</span>
          <span className="pointer-events-none absolute top-3 right-3 z-20 text-[0.65rem] font-bold tracking-[0.2em] text-white uppercase drop-shadow sm:top-4 sm:right-4 sm:text-xs lg:top-6 lg:right-6 lg:text-sm">{t('After')}</span>

          <input
            type="range"
            min={0}
            max={100}
            step={1}
            value={value}
            onChange={(event) => setValue(Number(event.target.value))}
            aria-label={`${t('Reveal before and after comparison')} ${slideIndex + 1}`}
            aria-valuetext={`${value}% ${t('before view visible')}`}
            className="absolute inset-0 z-30 h-full w-full cursor-ew-resize touch-pan-y appearance-none bg-transparent opacity-0 focus-visible:outline-none"
          />
        </div>

        <button type="button" onClick={nextSlide} aria-label={t('Next comparison')} className="absolute top-1/2 right-1 z-40 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-black/55 text-2xl text-white backdrop-blur-sm transition hover:bg-black/80 sm:right-2 lg:right-2">
          <span aria-hidden="true">›</span>
        </button>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-2" role="group" aria-label={t('Before and after comparisons')}>
        {comparisons.map((item, index) => (
          <button key={item.id} type="button" aria-pressed={index === slideIndex} aria-label={`${t('Show comparison')} ${index + 1}`} onClick={() => changeSlide(index)} className="group grid min-h-11 min-w-11 place-items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper focus-visible:ring-offset-2 focus-visible:ring-offset-evergreen">
            <span aria-hidden="true" className={`h-2 rounded-full transition-all duration-300 motion-reduce:transition-none ${index === slideIndex ? 'w-8' : 'w-2 bg-white/30 group-hover:bg-white/60'}`} style={index === slideIndex ? { backgroundColor: 'var(--accent)' } : undefined} />
          </button>
        ))}
      </div>
    </div>
  )
}
