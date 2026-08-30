'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useI18n } from '@/lib/i18n'
import { routesById } from '@/content/routes'

type GalleryItem = {
  src: string
  label: string
  alt: string
}

type GalleryClientProps = {
  galleryItems: GalleryItem[]
}

export function GalleryClient({
  galleryItems,
}: GalleryClientProps) {
  const { t } = useI18n()

  const trackRef = useRef<HTMLDivElement>(null)
  const slideRefs = useRef<(HTMLElement | null)[]>([])
  const scrollFrame = useRef<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const BATCH_SIZE = 10;
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

  const visibleItems = galleryItems.slice(0, visibleCount);

  const activeItem =
    activeIndex === null ? null : galleryItems[activeIndex];

  // ✅ Load more when approaching the end
  useEffect(() => {
    if (
      currentIndex >= visibleCount - 3 &&
      visibleCount < galleryItems.length
    ) {
      setVisibleCount((current) =>
        Math.min(current + BATCH_SIZE, galleryItems.length),
      );
    }
  }, [currentIndex, visibleCount, galleryItems.length]);

  const updateCurrentSlide = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const trackLeft = track.getBoundingClientRect().left;

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    slideRefs.current.forEach((slide, index) => {
      if (!slide) return;

      const distance = Math.abs(
        slide.getBoundingClientRect().left - trackLeft,
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setCurrentIndex(closestIndex);
  }, []);


  const handleScroll = useCallback(() => {
    if (scrollFrame.current !== null) cancelAnimationFrame(scrollFrame.current)
    scrollFrame.current = requestAnimationFrame(updateCurrentSlide)
  }, [updateCurrentSlide])

  const goToSlide = useCallback((index: number) => {
    const nextIndex = (index + galleryItems.length) % galleryItems.length
    slideRefs.current[nextIndex]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    })
  }, [])

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

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null)
      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) => current === null ? 0 : (current - 1 + galleryItems.length) % galleryItems.length)
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex((current) => current === null ? 0 : (current + 1) % galleryItems.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeIndex])

  return (
    <section id="gallery" data-home-section="featured-work" aria-labelledby="gallery-heading" className="overflow-hidden bg-paper py-20 sm:py-28">
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
        <header className="grid gap-6 border-t border-[color:var(--rule)] pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.45fr)] lg:items-end lg:gap-16">
          <div>
            <p className="eyebrow text-ink-soft">{t('Featured Work')}</p>
            <h2 id="gallery-heading" className="display-md mt-5 max-w-[16ch]">
              {t('A closer look at')}<br />
              <span className="text-accent">{t('the work.')}</span>
            </h2>
          </div>
          <p className="max-w-md text-[1.0625rem] leading-relaxed text-ink-soft lg:pb-2">
            {t("A curated selection from Mo's existing property-care gallery.")}
          </p>
        </header>

        <div className="mt-10 flex items-end justify-between gap-5 sm:mt-14">
          <p aria-live="polite" aria-atomic="true" className="eyebrow text-ink-soft tabular-nums">
            <span className="text-ink">{String(currentIndex + 1).padStart(2, '0')}</span>
            <span aria-hidden="true"> / </span>
            <span className="sr-only">{t('of')} </span>
            {String(galleryItems.length).padStart(2, '0')}
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => goToSlide(currentIndex - 1)}
              aria-label={t('Show previous gallery image')}
              className="grid h-12 w-12 place-items-center border border-[color:var(--rule)] text-xl text-ink transition-colors duration-200 hover:border-evergreen hover:bg-evergreen hover:text-paper"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              onClick={() => goToSlide(currentIndex + 1)}
              aria-label={t('Show next gallery image')}
              className="grid h-12 w-12 place-items-center border border-evergreen bg-evergreen text-xl text-paper transition-colors duration-200 hover:bg-evergreen-700"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          role="region"
          aria-roledescription="carousel"
          aria-label={t('Completed lawn care projects')}
          tabIndex={0}
          onScroll={handleScroll}
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft') {
              event.preventDefault()
              goToSlide(currentIndex - 1)
            }
            if (event.key === 'ArrowRight') {
              event.preventDefault()
              goToSlide(currentIndex + 1)
            }
          }}
          className="gallery-track mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 focus-visible:outline-offset-4 sm:gap-4"
        >
          {visibleItems.map((item, index) => (
            <figure
              key={item.src}
              ref={(node) => { slideRefs.current[index] = node }}
              aria-roledescription="slide"
              aria-label={`${index + 1} ${t('of')} ${galleryItems.length}: ${t(item.label)}`}
              className="group relative aspect-[4/5] w-[84vw] max-w-[30rem] shrink-0 snap-start overflow-hidden bg-evergreen sm:aspect-[4/3] sm:w-[68vw] sm:max-w-none lg:w-[46vw] xl:w-[40vw]"
            >
              <Image
                src={item.src}
                alt={t(item.alt)}
                fill
                sizes="(min-width: 1280px) 40vw, (min-width: 1024px) 46vw, (min-width: 640px) 68vw, 84vw"
                loading="lazy"
                className="object-contain"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-evergreen/90 via-evergreen/35 to-transparent px-5 pt-20 pb-5 text-paper sm:px-6 sm:pb-6">
                <figcaption className="flex items-end justify-between gap-4">
                  <span className="text-[0.6875rem] font-semibold tracking-[0.16em] text-paper/70 uppercase tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                </figcaption>
              </div>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`${t('Expand project image')} ${index + 1}`}
                className="absolute inset-0 z-10 cursor-zoom-in focus-visible:outline-offset-[-4px]"
              >
                <span aria-hidden="true" className="absolute top-4 right-4 grid h-10 w-10 place-items-center border border-paper/40 bg-evergreen/70 text-lg text-paper backdrop-blur-sm transition-colors duration-200 group-hover:bg-paper group-hover:text-evergreen">⤢</span>
              </button>
            </figure>
          ))}
          <div aria-hidden="true" className="w-1 shrink-0" />
        </div>

        <div className="mt-5 h-px overflow-hidden bg-[color:var(--rule)]">
          <div
            className="h-full bg-accent transition-transform duration-300 ease-out motion-reduce:transition-none"
            style={{
              width: `${100 / galleryItems.length}%`,
              transform: `translateX(${currentIndex * 100}%)`,
            }}
          />
        </div>

        <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="eyebrow text-ink-soft">{t('Curated homepage selection')}</p>
          <Link href={routesById['our-work'].path} prefetch={false} className="btn-ghost group w-fit text-ink">
            {t('View Our Work')}
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>

      {activeItem && activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${t('Project')} ${activeIndex + 1}: ${t('expanded image')}`}
          className="fixed inset-0 z-[100] bg-evergreen/96 p-4 text-paper backdrop-blur-md sm:p-8"
          onClick={() => setActiveIndex(null)}
        >
          <div className="mx-auto flex h-full w-full max-w-[100rem] flex-col" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between gap-5 border-b border-paper/15 pb-4">
              <div>
                <p className="text-[0.75rem] font-semibold tracking-[0.14em] text-paper/70 uppercase tabular-nums">{String(activeIndex + 1).padStart(2, '0')} / {galleryItems.length}</p>
                <p className="mt-1 font-display text-lg font-bold tracking-[-0.02em] uppercase sm:text-xl">{t('Project')} {String(activeIndex + 1).padStart(2, '0')}</p>
              </div>
              <button type="button" onClick={() => setActiveIndex(null)} aria-label={t('Close expanded image')} autoFocus className="grid h-12 w-12 place-items-center border border-paper/25 text-2xl transition-colors duration-200 hover:border-paper hover:bg-paper hover:text-evergreen">×</button>
            </div>

            <div className="relative min-h-0 flex-1 py-4 sm:py-6">
              <Image src={activeItem.src} alt={t(activeItem.alt)} fill sizes="100vw" priority className="object-contain" />
              <button type="button" onClick={() => setActiveIndex((activeIndex - 1 + galleryItems.length) % galleryItems.length)} aria-label={t('Show previous gallery image')} className="absolute top-1/2 left-0 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center bg-evergreen/80 text-2xl transition-colors duration-200 hover:bg-paper hover:text-evergreen sm:left-4">←</button>
              <button type="button" onClick={() => setActiveIndex((activeIndex + 1) % galleryItems.length)} aria-label={t('Show next gallery image')} className="absolute top-1/2 right-0 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center bg-evergreen/80 text-2xl transition-colors duration-200 hover:bg-paper hover:text-evergreen sm:right-4">→</button>
            </div>

            <p className="border-t border-paper/15 pt-4 text-center text-[0.75rem] tracking-[0.14em] text-paper/70 uppercase">{t('Use ← → keys to browse · Esc to close')}</p>
          </div>
        </div>
      )}
    </section>
  )
}
