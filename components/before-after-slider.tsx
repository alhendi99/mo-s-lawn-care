'use client'

import Image from 'next/image'
import { useState } from 'react'
import { projects } from '@/lib/site'
import { useI18n } from '@/lib/i18n'

function Frame({
  src,
  label,
  path,
}: {
  src: string
  label: string
  path: string
}) {
  const { t } = useI18n()
  if (src) {
    return (
      <Image
        src={src || '/placeholder.svg'}
        alt={`${t(label)} — ${t("Mo's Lawn Care project")}`}
        fill
        sizes="(min-width: 1536px) 1500px, (min-width: 1024px) 90vw, 100vw"
        loading="lazy"
        className="object-cover"
      />
    )
  }

  const isBefore = label === 'Before'

  return (
    <div
      className={`flex h-full w-full flex-col justify-center gap-2 px-[8%] ${
        isBefore
          ? 'items-start text-left'
          : 'items-end text-right'
      }`}
      style={{
        backgroundColor: isBefore ? '#2a2a24' : '#20361f',
        backgroundImage: isBefore
          ? 'repeating-linear-gradient(135deg, rgba(243,240,231,0.07) 0 1px, transparent 1px 10px)'
          : 'repeating-linear-gradient(45deg, rgba(243,240,231,0.05) 0 1px, transparent 1px 18px)',
      }}
    >
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 sm:text-sm">
        {label}
      </span>

      <span className="text-lg font-semibold text-white sm:text-2xl">
        {t('Photo placeholder')}
      </span>

      <span className="text-xs text-white/40 sm:text-sm">
        {path}
      </span>
    </div>
  )
}

export function BeforeAfterSlider() {
  const { t } = useI18n()
  const [slideIndex, setSlideIndex] = useState(0)
  const [value, setValue] = useState(50)

  const project = projects[slideIndex]

  const changeSlide = (index: number) => {
    setSlideIndex(index)
    setValue(50)
  }

  const previousSlide = () => {
    changeSlide(
      slideIndex === 0
        ? projects.length - 1
        : slideIndex - 1
    )
  }

  const nextSlide = () => {
    changeSlide(
      slideIndex === projects.length - 1
        ? 0
        : slideIndex + 1
    )
  }

  return (
    <div className="w-full">
      {/* Slider + navigation */}
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1600px]

          sm:px-14
          lg:px-16
          xl:px-20
        "
      >
        {/* Previous project */}
        <button
          type="button"
          onClick={previousSlide}
          aria-label={t('Previous project')}
          className="
            absolute
            left-1
            top-1/2
            z-40
            grid
            h-8
            w-8
            -translate-y-1/2
            place-items-center
            rounded-full
            bg-black/50
            text-lg
            text-white
            backdrop-blur-sm
            transition
            hover:bg-black/75

            sm:left-2
            sm:h-10
            sm:w-10
            sm:text-xl

            lg:left-2
            lg:h-12
            lg:w-12
            lg:text-2xl
          "
        >
          ‹
        </button>

        {/* Image / Before After Slider */}
        <div
          className="
            relative
            w-full
            overflow-hidden
            rounded-xl
            shadow-2xl

            aspect-[4/5]
            min-[480px]:aspect-[4/3]
            sm:aspect-[3/2]
            md:aspect-[16/10]
            lg:aspect-[16/9]
            xl:aspect-[2/1]
          "
        >
          {/* After */}
          <div className="absolute inset-0">
            <Frame
              src={project.after}
              label="After"
              path={`/projects/${project.id}-after.webp`}
            />
          </div>

          {/* Before */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: `inset(0 ${100 - value}% 0 0)`,
            }}
          >
            <Frame
              src={project.before}
              label="Before"
              path={`/projects/${project.id}-before.webp`}
            />
          </div>

          {/* Comparison line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 z-20 w-px"
            style={{
              left: `${value}%`,
              backgroundColor: 'var(--accent)',
            }}
          >
            {/* Comparison handle */}
            <span
              className="
                comparison-handle
                absolute
                left-1/2
                top-1/2
                grid
                h-9
                w-9
                -translate-x-1/2
                -translate-y-1/2
                place-items-center
                rounded-full
                text-xs
                font-bold
                text-white

                sm:h-11
                sm:w-11
                sm:text-sm

                lg:h-14
                lg:w-14
                lg:text-base
              "
              style={{
                backgroundColor: 'var(--accent)',
                boxShadow:
                  '0 0 0 3px rgba(255,255,255,0.3), 0 5px 20px rgba(0,0,0,0.3)',
              }}
            >
              ↔
            </span>
          </div>

          {/* Before label */}
          <span
            className="
              pointer-events-none
              absolute
              left-3
              top-3
              z-20
              text-[0.6rem]
              font-bold
              uppercase
              tracking-[0.2em]
              text-white/80

              sm:left-4
              sm:top-4
              sm:text-xs

              lg:left-6
              lg:top-6
              lg:text-sm
            "
          >
            {t('Before')}
          </span>

          {/* After label */}
          <span
            className="
              pointer-events-none
              absolute
              right-3
              top-3
              z-20
              text-[0.6rem]
              font-bold
              uppercase
              tracking-[0.2em]
              text-white/80

              sm:right-4
              sm:top-4
              sm:text-xs

              lg:right-6
              lg:top-6
              lg:text-sm
            "
          >
            {t('After')}
          </span>

          {/* Before / After control */}
          <input
            type="range"
            min={0}
            max={100}
            step={1}
            value={value}
            onChange={(e) =>
              setValue(Number(e.target.value))
            }
            aria-label={`${t('Reveal before and after for')} ${t(project.title)}`}
            className="
  absolute
  inset-0
  z-30
  h-full
  w-full
  cursor-ew-resize
  appearance-none
  bg-transparent
  opacity-0

"
          />
        </div>

        {/* Next project */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label={t('Next project')}
          className="
            absolute
            right-1
            top-1/2
            z-40
            grid
            h-8
            w-8
            -translate-y-1/2
            place-items-center
            rounded-full
            bg-black/50
            text-lg
            text-white
            backdrop-blur-sm
            transition
            hover:bg-black/75

            sm:right-2
            sm:h-10
            sm:w-10
            sm:text-xl

            lg:right-2
            lg:h-12
            lg:w-12
            lg:text-2xl
          "
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div
        className="mt-5 flex flex-wrap items-center justify-center gap-2"
        role="tablist"
        aria-label={t('Projects')}
      >
        {projects.map((project, index) => (
          <button
            key={project.id}
            type="button"
            role="tab"
            aria-selected={index === slideIndex}
            aria-label={`${t('Show')} ${t(project.title)}`}
            onClick={() => changeSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === slideIndex
                ? 'w-8'
                : 'w-2 bg-white/30 hover:bg-white/60'
            }`}
            style={
              index === slideIndex
                ? {
                    backgroundColor: 'var(--accent)',
                  }
                : undefined
            }
          />
        ))}
      </div>
    </div>
  )
}
