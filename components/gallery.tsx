'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const galleryItems = [
  {
    src: '/gallery/gallery1.png',
    label: 'Precision mowing',
    alt: 'Freshly striped front lawn surrounding a residential property',
    layout: 'md:col-span-8 md:row-span-2',
  },
  {
    src: '/gallery/gallery2.png',
    label: 'Ground preparation',
    alt: 'Newly prepared soil beside a backyard patio',
    layout: 'md:col-span-4',
  },
  {
    src: '/gallery/gallery3.png',
    label: 'Snow removal',
    alt: 'Cleared driveway and front walk after snowfall',
    layout: 'md:col-span-4',
  },
  {
    src: '/gallery/gallery4.png',
    label: 'Backyard care',
    alt: 'Freshly maintained backyard lawn at sunset',
    layout: 'md:col-span-5',
  },
  {
    src: '/gallery/gallery5.png',
    label: 'Woodline cleanup',
    alt: 'Maintained lawn meeting a cleaned woodland edge',
    layout: 'md:col-span-7',
  },
  {
    src: '/gallery/gallery6.png',
    label: 'Spring beds',
    alt: 'Freshly mulched garden beds with spring flowers',
    layout: 'md:col-span-7',
  },
  {
    src: '/gallery/gallery7.png',
    label: 'Routine mowing',
    alt: 'Mowed backyard beneath mature shade trees',
    layout: 'md:col-span-5',
  },
  {
    src: '/gallery/gallery8.png',
    label: 'Landscape design',
    alt: 'Layered backyard planting beds around a mature tree',
    layout: 'md:col-span-8',
  },
  {
    src: '/gallery/gallery9.png',
    label: 'Planting detail',
    alt: 'Detailed flower bed with hostas and colorful perennials',
    layout: 'md:col-span-4',
  },
  {
    src: '/gallery/gallery10.png',
    label: 'Fall property care',
    alt: 'Maintained front lawn beneath orange autumn foliage',
    layout: 'md:col-span-7',
  },
  {
    src: '/gallery/gallery11.png',
    label: 'Aeration & seeding',
    alt: 'Close view of seed and soil plugs spread across a lawn',
    layout: 'md:col-span-5',
  },
  {
    src: '/gallery/gallery12.png',
    label: 'Full-property care',
    alt: 'Finished front lawn and landscaped beds along a brick home',
    layout: 'md:col-span-12 md:h-[32rem]',
  },
] as const

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const activeItem = activeIndex === null ? null : galleryItems[activeIndex]

  useEffect(() => {
    if (activeIndex === null) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null)
      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) =>
          current === null ? 0 : (current - 1 + galleryItems.length) % galleryItems.length,
        )
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex((current) =>
          current === null ? 0 : (current + 1) % galleryItems.length,
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeIndex])

  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8">
        <header className="grid gap-6 border-t border-[color:var(--rule)] pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.45fr)] lg:items-end lg:gap-16">
          <div>
            <p className="eyebrow text-ink-soft">Field notes · Des Moines</p>
            <h2 id="gallery-heading" className="display-md mt-5 max-w-[16ch]">
              Care you can
              <br />
              <span className="text-accent">see from the curb.</span>
            </h2>
          </div>
          <p className="max-w-md text-[1.0625rem] leading-relaxed text-ink-soft lg:pb-2">
            A closer look at the mowing lines, clean edges, open driveways, and planted details
            that finish a property.
          </p>
        </header>

        <div className="mt-10 grid gap-2 md:auto-rows-[15rem] md:grid-cols-12 sm:mt-14 lg:gap-3">
          {galleryItems.map((item, index) => (
            <figure
              key={item.src}
              className={`group relative min-h-[15rem] overflow-hidden bg-evergreen ${item.layout}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={
                  index === 0 || index === galleryItems.length - 1
                    ? '(min-width: 1280px) 1120px, (min-width: 768px) 70vw, 100vw'
                    : '(min-width: 1280px) 650px, (min-width: 768px) 50vw, 100vw'
                }
                loading="lazy"
                className="object-cover transition-transform duration-700 ease-out motion-reduce:transition-none md:group-hover:scale-[1.035]"
              />
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Expand ${item.label} image`}
                className="absolute inset-0 z-10 cursor-zoom-in focus-visible:outline-offset-[-4px]"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-4 right-4 grid h-10 w-10 place-items-center border border-paper/40 bg-evergreen/75 text-lg text-paper opacity-100 backdrop-blur-sm transition-[opacity,transform,background-color] duration-200 md:scale-90 md:opacity-0 md:group-hover:scale-100 md:group-hover:opacity-100"
                >
                  ⤢
                </span>
              </button>
            </figure>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-5 border-t border-[color:var(--rule)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="eyebrow text-ink-soft">12 views · Four-season care</p>
          <a href="#estimate" className="btn-ghost group w-fit text-ink">
            Start with your property
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>

      {activeItem && activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${activeItem.label} expanded image`}
          className="fixed inset-0 z-[100] bg-evergreen/96 p-4 text-paper backdrop-blur-md sm:p-8"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="mx-auto flex h-full w-full max-w-[100rem] flex-col"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-5 border-b border-paper/15 pb-4">
              <div>
                <p className="text-[0.6875rem] font-semibold tracking-[0.18em] text-paper/45 uppercase tabular-nums">
                  {String(activeIndex + 1).padStart(2, '0')} / {galleryItems.length}
                </p>
                <p className="mt-1 font-display text-lg font-bold tracking-[-0.02em] uppercase sm:text-xl">
                  {activeItem.label}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                aria-label="Close expanded image"
                autoFocus
                className="grid h-12 w-12 place-items-center border border-paper/25 text-2xl transition-colors duration-200 hover:border-paper hover:bg-paper hover:text-evergreen"
              >
                ×
              </button>
            </div>

            <div className="relative min-h-0 flex-1 py-4 sm:py-6">
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                fill
                sizes="100vw"
                priority
                className="object-contain"
              />

              <button
                type="button"
                onClick={() =>
                  setActiveIndex(
                    (activeIndex - 1 + galleryItems.length) % galleryItems.length,
                  )
                }
                aria-label="Show previous gallery image"
                className="absolute top-1/2 left-0 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center bg-evergreen/80 text-2xl transition-colors duration-200 hover:bg-paper hover:text-evergreen sm:left-4"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => setActiveIndex((activeIndex + 1) % galleryItems.length)}
                aria-label="Show next gallery image"
                className="absolute top-1/2 right-0 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center bg-evergreen/80 text-2xl transition-colors duration-200 hover:bg-paper hover:text-evergreen sm:right-4"
              >
                →
              </button>
            </div>

            <p className="border-t border-paper/15 pt-4 text-center text-[0.6875rem] tracking-[0.16em] text-paper/45 uppercase">
              Use ← → keys to browse · Esc to close
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
