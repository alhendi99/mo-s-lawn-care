'use client'

import Image from 'next/image'
import { useState } from 'react'
import { projects } from '@/lib/site'

function Frame({
  src,
  label,
  path,
}: {
  src: string
  label: string
  path: string
}) {
  if (src) {
    return (
      <Image
        src={src || '/placeholder.svg'}
        alt={`${label} — Mo's Lawn Care project`}
        fill
        sizes="(min-width: 1280px) 1100px, 100vw"
        loading="lazy"
        className="object-cover"
      />
    )
  }
  const isBefore = label === 'Before'
  return (
    <div
      className={`flex h-full w-full flex-col justify-center gap-2 px-[8%] ${
        isBefore ? 'items-start text-left' : 'items-end text-right'
      }`}
      style={{
        backgroundColor: isBefore ? '#2a2a24' : '#20361f',
        backgroundImage: isBefore
          ? 'repeating-linear-gradient(135deg, rgba(243,240,231,0.07) 0 1px, transparent 1px 10px)'
          : 'repeating-linear-gradient(45deg, rgba(243,240,231,0.05) 0 1px, transparent 1px 18px)',
      }}
    >
      <p className="font-display text-2xl leading-none font-extrabold tracking-[-0.03em] text-paper/70 uppercase sm:text-4xl">
        {label}
      </p>
      <p className="text-[0.8125rem] leading-relaxed tracking-[0.14em] text-paper/40 uppercase">
        Photo placeholder
      </p>
      <code className="text-[0.8125rem] text-paper/35">{path}</code>
    </div>
  )
}

export function BeforeAfterSlider() {
  const [projectIndex, setProjectIndex] = useState(0)
  const [value, setValue] = useState(50)
  const project = projects[projectIndex]

  return (
    <div className="mt-10 sm:mt-14">
      <div
        role="tablist"
        aria-label="Projects"
        className="flex flex-wrap gap-x-6 gap-y-2 border-t border-paper/15 pt-4"
      >
        {projects.map((p, i) => (
          <button
            key={p.id}
            type="button"
            role="tab"
            aria-selected={i === projectIndex}
            onClick={() => {
              setProjectIndex(i)
              setValue(50)
            }}
            className="flex min-h-11 items-center text-[0.8125rem] font-bold tracking-[0.16em] uppercase transition-colors duration-200"
            style={{ color: i === projectIndex ? 'var(--accent)' : 'rgba(243,240,231,0.5)' }}
          >
            {p.title}
          </button>
        ))}
      </div>

      <div className="relative mt-4 aspect-[16/10] w-full overflow-hidden sm:aspect-[16/9]">
        <div className="absolute inset-0">
          <Frame src={project.after} label="After" path={`/projects/${project.id}-after.webp`} />
        </div>

        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
        >
          <Frame src={project.before} label="Before" path={`/projects/${project.id}-before.webp`} />
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-y-0 w-px"
          style={{ left: `${value}%`, backgroundColor: 'var(--accent)' }}
        >
          <span
            className="comparison-handle absolute top-1/2 left-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-sm font-bold text-white"
            style={{
              backgroundColor: 'var(--accent)',
              boxShadow: '0 0 0 3px rgba(255,255,255,0.3), 0 5px 20px rgba(0,0,0,0.3)',
            }}
          >
            <span className="comparison-arrows">↔</span>
          </span>
        </div>

        <span className="pointer-events-none absolute top-4 left-4 text-[0.75rem] font-bold tracking-[0.2em] text-paper/70 uppercase">
          Before
        </span>
        <span className="pointer-events-none absolute top-4 right-4 text-[0.75rem] font-bold tracking-[0.2em] text-paper/70 uppercase">
          After
        </span>

        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          aria-label={`Reveal before and after for ${project.title}`}
          className="absolute inset-0 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
        />
      </div>
    </div>
  )
}
