'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { routesById } from '@/content/routes'
import type { PublicWorkItem } from '@/content/projects'
import { useI18n } from '@/lib/i18n'

const focusableSelector = 'button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])'

type GalleryClientProps = Readonly<{
  mode: 'home' | 'full'
  initialItems: readonly PublicWorkItem[]
  totalCount: number
  batchSize: number
}>

export function GalleryClient({ mode, initialItems, totalCount, batchSize }: GalleryClientProps) {
  const { locale, t } = useI18n()
  const [items, setItems] = useState<readonly PublicWorkItem[]>(initialItems)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)
  const [loadError, setLoadError] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)
  const slideRefs = useRef<(HTMLElement | null)[]>([])
  const scrollFrame = useRef<number | null>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const returnFocusRef = useRef<HTMLElement | null>(null)
  const collectionStatusRef = useRef<HTMLParagraphElement>(null)
  const activeItem = activeIndex === null ? null : items[activeIndex]
  const hasMore = mode === 'full' && items.length < totalCount

  const closeDialog = useCallback(() => {
    setActiveIndex(null)
    requestAnimationFrame(() => returnFocusRef.current?.focus())
  }, [])

  const openDialog = (index: number, trigger: HTMLElement) => {
    returnFocusRef.current = trigger
    setActiveIndex(index)
  }

  const updateCurrentSlide = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const trackLeft = track.getBoundingClientRect().left
    let closestIndex = 0
    let closestDistance = Number.POSITIVE_INFINITY
    slideRefs.current.forEach((slide, index) => {
      if (!slide) return
      const distance = Math.abs(slide.getBoundingClientRect().left - trackLeft)
      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = index
      }
    })
    setCurrentIndex(closestIndex)
  }, [])

  const handleScroll = useCallback(() => {
    if (scrollFrame.current !== null) cancelAnimationFrame(scrollFrame.current)
    scrollFrame.current = requestAnimationFrame(updateCurrentSlide)
  }, [updateCurrentSlide])

  const goToSlide = useCallback((index: number) => {
    if (items.length === 0) return
    const nextIndex = (index + items.length) % items.length
    slideRefs.current[nextIndex]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
  }, [items.length])

  const loadMore = async () => {
    if (loading || !hasMore) return
    setLoading(true)
    setLoadError(false)
    try {
      const response = await fetch(`/api/work?offset=${items.length}&limit=${batchSize}`)
      if (!response.ok) throw new Error('Unable to load work batch')
      const payload = await response.json() as { items: PublicWorkItem[]; hasMore: boolean }
      setItems((current) => {
        const ids = new Set(current.map(({ id }) => id))
        return [...current, ...payload.items.filter(({ id }) => !ids.has(id))]
      })
      if (!payload.hasMore) requestAnimationFrame(() => collectionStatusRef.current?.focus())
    } catch {
      setLoadError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', updateCurrentSlide)
    return () => {
      window.removeEventListener('resize', updateCurrentSlide)
      if (scrollFrame.current !== null) cancelAnimationFrame(scrollFrame.current)
    }
  }, [updateCurrentSlide])

  useEffect(() => {
    if (activeIndex === null) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    requestAnimationFrame(() => closeButtonRef.current?.focus())
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeDialog()
        return
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        setActiveIndex((current) => current === null ? 0 : (current - 1 + items.length) % items.length)
        return
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        setActiveIndex((current) => current === null ? 0 : (current + 1) % items.length)
        return
      }
      if (event.key !== 'Tab' || !dialogRef.current) return
      const focusable = [...dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector)]
        .filter((element) => element.getClientRects().length > 0)
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeIndex, closeDialog, items.length])

  const modal = activeItem && activeIndex !== null ? (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="work-dialog-title"
      className="fixed inset-0 z-[100] bg-evergreen/96 p-3 text-paper backdrop-blur-md sm:p-8"
      onMouseDown={(event) => { if (event.target === event.currentTarget) closeDialog() }}
    >
      <div className="mx-auto flex h-full w-full max-w-[100rem] flex-col">
        <div className="flex items-center justify-between gap-5 border-b border-paper/15 pb-3 sm:pb-4">
          <div>
            <p className="text-[0.75rem] font-semibold tracking-[0.14em] text-paper/70 uppercase tabular-nums">{String(activeIndex + 1).padStart(2, '0')} / {items.length}</p>
            <h2 id="work-dialog-title" className="mt-1 font-display text-lg font-bold tracking-[-0.02em] uppercase sm:text-xl">{t('Expanded work image')}</h2>
          </div>
          <button ref={closeButtonRef} type="button" onClick={closeDialog} aria-label={t('Close expanded image')} className="grid h-12 w-12 place-items-center border border-paper/25 text-2xl transition-colors duration-200 hover:border-paper hover:bg-paper hover:text-evergreen"><span aria-hidden="true">×</span></button>
        </div>
        <div className="relative min-h-0 flex-1 py-3 sm:py-6">
          <Image src={activeItem.src} alt={activeItem.alt[locale]} fill sizes="100vw" className="object-contain" />
          <button type="button" onClick={() => setActiveIndex((activeIndex - 1 + items.length) % items.length)} aria-label={t('Show previous gallery image')} className="absolute top-1/2 left-0 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center bg-evergreen/85 text-2xl transition-colors duration-200 hover:bg-paper hover:text-evergreen sm:left-4"><span aria-hidden="true">←</span></button>
          <button type="button" onClick={() => setActiveIndex((activeIndex + 1) % items.length)} aria-label={t('Show next gallery image')} className="absolute top-1/2 right-0 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center bg-evergreen/85 text-2xl transition-colors duration-200 hover:bg-paper hover:text-evergreen sm:right-4"><span aria-hidden="true">→</span></button>
        </div>
        <p className="border-t border-paper/15 pt-3 text-center text-[0.68rem] tracking-[0.12em] text-paper/70 uppercase sm:pt-4 sm:text-[0.75rem]">{t('Use ← → keys to browse · Esc to close')}</p>
      </div>
    </div>
  ) : null

  if (mode === 'full') {
    return (
      <section id="gallery" data-work-mode="full" aria-labelledby="work-gallery-heading" className="bg-paper py-16 sm:py-24">
        <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
          <header className="grid gap-6 border-t border-[color:var(--rule)] pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.55fr)] lg:items-end lg:gap-16">
            <div><p className="eyebrow text-ink-soft">{t('Full governed collection')}</p><h2 id="work-gallery-heading" className="display-md mt-5 max-w-[14ch]">{t('Browse the visual archive.')}</h2></div>
            <p className="max-w-[36rem] text-[1.0625rem] leading-relaxed text-ink-soft lg:pb-2">{t('Images use observable descriptions. City, customer and service labels are omitted when the record does not verify them.')}</p>
          </header>
          <p aria-live="polite" aria-atomic="true" className="eyebrow mt-10 text-ink-soft tabular-nums"><span className="text-ink">{items.length}</span> {t('of')} {totalCount} {t('images shown')}</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
            {items.map((item, index) => (
              <figure key={item.id} className="group relative aspect-[4/3] overflow-hidden bg-evergreen">
                <Image src={item.src} alt={item.alt[locale]} fill sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" loading="lazy" className="object-contain transition-transform duration-500 group-hover:scale-[1.015] motion-reduce:transition-none" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-evergreen/88 to-transparent px-4 pt-14 pb-4 text-[0.68rem] font-semibold tracking-[0.14em] text-paper/72 uppercase tabular-nums">{t('Archive view')} {String(index + 1).padStart(2, '0')}</figcaption>
                <button type="button" onClick={(event) => openDialog(index, event.currentTarget)} aria-label={`${t('Expand image')}: ${item.alt[locale]}`} className="absolute inset-0 z-10 cursor-zoom-in focus-visible:outline-offset-[-4px]"><span aria-hidden="true" className="absolute top-3 right-3 grid h-11 w-11 place-items-center border border-paper/40 bg-evergreen/72 text-lg text-paper backdrop-blur-sm transition-colors duration-200 group-hover:bg-paper group-hover:text-evergreen">⤢</span></button>
              </figure>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-start gap-4 border-t border-[color:var(--rule)] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p ref={collectionStatusRef} tabIndex={-1} className="max-w-xl text-sm leading-relaxed text-ink-soft focus-visible:outline-offset-4">{hasMore ? t('Additional records load in small, ordered batches.') : t('The full display-eligible collection is shown.')}</p>
            {hasMore ? <button type="button" onClick={loadMore} aria-busy={loading} aria-disabled={loading} className={`btn-solid min-w-44 ${loading ? 'cursor-wait opacity-65' : ''}`}>{t(loading ? 'Loading more…' : 'Load more work')}</button> : null}
          </div>
          {loadError ? <p role="alert" className="mt-4 text-sm font-semibold text-[#8f2d1e]">{t('More images could not be loaded. Please try again.')}</p> : null}
        </div>
        {modal}
      </section>
    )
  }

  return (
    <section id="gallery" data-home-section="featured-work" data-work-mode="home" aria-labelledby="gallery-heading" className="overflow-hidden bg-paper py-20 sm:py-28">
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
        <header className="grid gap-6 border-t border-[color:var(--rule)] pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.45fr)] lg:items-end lg:gap-16">
          <div><p className="eyebrow text-ink-soft">{t('Featured Work')}</p><h2 id="gallery-heading" className="display-md mt-5 max-w-[16ch]">{t('A closer look at')}<br /><span className="text-accent">{t('the work.')}</span></h2></div>
          <p className="max-w-md text-[1.0625rem] leading-relaxed text-ink-soft lg:pb-2">{t("A curated selection from Mo's existing property-care gallery.")}</p>
        </header>
        <div className="mt-10 flex items-end justify-between gap-5 sm:mt-14">
          <p aria-live="polite" aria-atomic="true" className="eyebrow text-ink-soft tabular-nums"><span className="text-ink">{String(currentIndex + 1).padStart(2, '0')}</span><span aria-hidden="true"> / </span><span className="sr-only">{t('of')} </span>{String(items.length).padStart(2, '0')}</p>
          <div className="flex gap-2">
            <button type="button" onClick={() => goToSlide(currentIndex - 1)} aria-label={t('Show previous gallery image')} className="grid h-12 w-12 place-items-center border border-[color:var(--rule)] text-xl text-ink transition-colors duration-200 hover:border-evergreen hover:bg-evergreen hover:text-paper"><span aria-hidden="true">←</span></button>
            <button type="button" onClick={() => goToSlide(currentIndex + 1)} aria-label={t('Show next gallery image')} className="grid h-12 w-12 place-items-center border border-evergreen bg-evergreen text-xl text-paper transition-colors duration-200 hover:bg-evergreen-700"><span aria-hidden="true">→</span></button>
          </div>
        </div>
        <div ref={trackRef} role="region" aria-roledescription="carousel" aria-label={t('Property-care gallery')} tabIndex={0} onScroll={handleScroll} onKeyDown={(event) => { if (event.key === 'ArrowLeft') { event.preventDefault(); goToSlide(currentIndex - 1) } if (event.key === 'ArrowRight') { event.preventDefault(); goToSlide(currentIndex + 1) } }} className="gallery-track mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 focus-visible:outline-offset-4 sm:gap-4">
          {items.map((item, index) => (
            <figure key={item.id} ref={(node) => { slideRefs.current[index] = node }} aria-roledescription="slide" aria-label={`${index + 1} ${t('of')} ${items.length}`} className="group relative aspect-[4/5] w-[84vw] max-w-[30rem] shrink-0 snap-start overflow-hidden bg-evergreen sm:aspect-[4/3] sm:w-[68vw] sm:max-w-none lg:w-[46vw] xl:w-[40vw]">
              <Image src={item.src} alt={item.alt[locale]} fill sizes="(min-width: 1280px) 40vw, (min-width: 1024px) 46vw, (min-width: 640px) 68vw, 84vw" loading="lazy" className="object-contain" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-evergreen/90 via-evergreen/35 to-transparent px-5 pt-20 pb-5 text-[0.6875rem] font-semibold tracking-[0.16em] text-paper/70 uppercase tabular-nums sm:px-6 sm:pb-6">{String(index + 1).padStart(2, '0')}</figcaption>
              <button type="button" onClick={(event) => openDialog(index, event.currentTarget)} aria-label={`${t('Expand image')}: ${item.alt[locale]}`} className="absolute inset-0 z-10 cursor-zoom-in focus-visible:outline-offset-[-4px]"><span aria-hidden="true" className="absolute top-4 right-4 grid h-10 w-10 place-items-center border border-paper/40 bg-evergreen/70 text-lg text-paper backdrop-blur-sm transition-colors duration-200 group-hover:bg-paper group-hover:text-evergreen">⤢</span></button>
            </figure>
          ))}
          <div aria-hidden="true" className="w-1 shrink-0" />
        </div>
        <div className="mt-5 h-px overflow-hidden bg-[color:var(--rule)]"><div className="h-full bg-accent transition-transform duration-300 ease-out motion-reduce:transition-none" style={{ width: `${100 / items.length}%`, transform: `translateX(${currentIndex * 100}%)` }} /></div>
        <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><p className="eyebrow text-ink-soft">{t('Curated homepage selection')}</p><Link href={routesById['our-work'].path} prefetch={false} className="btn-ghost group w-fit text-ink">{t('View Our Work')}<span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span></Link></div>
      </div>
      {modal}
    </section>
  )
}
