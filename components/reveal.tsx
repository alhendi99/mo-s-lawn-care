'use client'

import { motion, useInView, type Variants } from 'motion/react'
import { useRef, type ReactNode } from 'react'


const variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.05,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'li' | 'article' | 'span'
}

export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px 10% 0px' })
  const MotionTag = motion[as]

  return (
    <MotionTag
      ref={ref}
      className={className}
      variants={variants}
      custom={delay}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </MotionTag>
  )
}
