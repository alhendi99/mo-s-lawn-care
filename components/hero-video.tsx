'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { site } from '@/lib/site'

export function HeroVideo() {
  const [reduced, setReduced] = useState(true)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <>
      <Image
        src={site.heroPoster || '/placeholder.svg'}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {!reduced && !failed && (
        <video
          key={site.heroVideo}
          className="absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={site.heroPoster}
          aria-hidden="true"
          tabIndex={-1}
          onError={() => setFailed(true)}
        >
          <source src={site.heroVideo} type="video/mp4" />
        </video>
      )}
    </>
  )
}
