"use client";

import { useEffect, useRef, useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TextBlock from '../TextBlock/TextBlock'

gsap.registerPlugin(ScrollTrigger)

// Accent color system based on #8F1B32
const ACCENT_BASE = '#8F1B32'
const ACCENT_DARK_BG = '#3C0713'
const ACCENT_LIGHT_BG = '#FBE9ED'
const ACCENT_TEXT_LIGHT = '#FDE7EC'
const ACCENT_TEXT_MUTED = '#C56A81'
const ACCENT_TEXT_SOFT = '#F4B6C6'
const ACCENT_BORDER = '#E3A3B3'
const ACCENT_LINE = '#F0C3CF'

const packages = [
  {
    num: '01',
    title: 'Starter Spark',
    description: 'Basic venue coordination, event timeline, and on-site support for intimate gatherings.',
    dark: true,
    height: 220,
  },
  {
    num: '02',
    title: 'Social Buzz',
    description: 'Décor setup, catering liaison, and a dedicated event host for birthdays and private parties.',
    dark: false,
    height: 280,
  },
  {
    num: '03',
    title: 'Corporate Edge',
    description: 'AV setup, branding coordination and registration management for conferences and launches.',
    dark: false,
    height: 330,
  },
  {
    num: '04',
    title: 'Grand Affair',
    description: 'Full-service weddings and galas. Custom floral design, live entertainment and luxury catering.',
    dark: false,
    height: 390,
  },
  {
    num: '05',
    title: 'Elite Signature',
    description: 'White-glove bespoke package. Global venue sourcing, premium PR coverage and concierge service.',
    dark: false,
    height: 300,
  },
]

export default function PricingCards() {
  const sectionRef = useRef(null)
  const wrapperRefs = useRef([])

  useEffect(() => {
    const wrappers = wrapperRefs.current

    wrappers.forEach((wrap, i) => {
      // Start clipped from the bottom — clipPath reveals upward
      gsap.fromTo(
        wrap,
        { clipPath: 'inset(100% 0% 0% 0%)', y: 0 },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 0.8,
          ease: 'power3.out',
          delay: i * 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <section ref={sectionRef} className="py-20 max-w-5xl mx-auto px-4">
      {/* Section label */}
      <TextBlock title="Event Packages" body="Choose the plan that fits your occasion" />

      {/* Bottom border line — cards slide up from this */}
      <div className="relative">
        {/* The baseline */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px z-10"
          style={{ backgroundColor: ACCENT_LINE }}
        />

        {/* Cards — no gap, bottom-aligned, no bottom rounding */}
        <div className="flex items-end">
          {packages.map((pkg, i) => (
            <HoverCard key={pkg.num} pkg={pkg} i={i} wrapperRefs={wrapperRefs} />
          ))}
        </div>
      </div>
    </section>
  )
}

function HoverCard({ pkg, i, wrapperRefs }) {
  const innerRef = useRef(null)

  const onEnter = useCallback(() => {
    gsap.to(innerRef.current, {
      backgroundColor: pkg.dark ? ACCENT_LIGHT_BG : ACCENT_DARK_BG,
      duration: 0.35,
      ease: 'power2.out',
    })
    // text colours
    gsap.to(innerRef.current.querySelectorAll('[data-title]'), {
      color: pkg.dark ? ACCENT_BASE : ACCENT_TEXT_LIGHT,
      duration: 0.35,
    })
    gsap.to(innerRef.current.querySelectorAll('[data-desc]'), {
      color: pkg.dark ? ACCENT_TEXT_MUTED : ACCENT_TEXT_SOFT,
      duration: 0.35,
    })
    gsap.to(innerRef.current.querySelectorAll('[data-num]'), {
      color: pkg.dark ? ACCENT_TEXT_SOFT : ACCENT_TEXT_LIGHT,
      duration: 0.35,
    })
  }, [pkg.dark])

  const onLeave = useCallback(() => {
    gsap.to(innerRef.current, {
      backgroundColor: pkg.dark ? ACCENT_DARK_BG : ACCENT_LIGHT_BG,
      duration: 0.35,
      ease: 'power2.out',
    })
    gsap.to(innerRef.current.querySelectorAll('[data-title]'), {
      color: pkg.dark ? ACCENT_TEXT_LIGHT : ACCENT_BASE,
      duration: 0.35,
    })
    gsap.to(innerRef.current.querySelectorAll('[data-desc]'), {
      color: pkg.dark ? ACCENT_TEXT_SOFT : ACCENT_TEXT_MUTED,
      duration: 0.35,
    })
    gsap.to(innerRef.current.querySelectorAll('[data-num]'), {
      color: pkg.dark ? ACCENT_TEXT_LIGHT : ACCENT_BASE,
      duration: 0.35,
    })
  }, [pkg.dark])

  return (
    <div
      ref={(el) => (wrapperRefs.current[i] = el)}
      className="flex-1"
      style={{ height: `${pkg.height}px`, clipPath: 'inset(100% 0% 0% 0%)' }}
    >
      <div
        ref={innerRef}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        className={`
          w-full h-full flex flex-col justify-between p-5
          rounded-tl-xl rounded-tr-xl cursor-default
          ${i > 0 ? 'border-l' : ''}
        `}
        style={{
          backgroundColor: pkg.dark ? ACCENT_DARK_BG : ACCENT_LIGHT_BG,
          borderColor: ACCENT_BORDER,
        }}
      >
        <div>
          <p
            data-title
            className="text-sm font-semibold leading-snug mb-2"
            style={{ color: pkg.dark ? ACCENT_TEXT_LIGHT : ACCENT_BASE }}
          >
            {pkg.title}
          </p>
          <p
            data-desc
            className="text-xs leading-relaxed"
            style={{ color: pkg.dark ? ACCENT_TEXT_SOFT : ACCENT_TEXT_MUTED }}
          >
            {pkg.description}
          </p>
        </div>

        <span
          data-num
          className="text-2xl font-bold tracking-tight leading-none"
          style={{ color: pkg.dark ? ACCENT_TEXT_LIGHT : ACCENT_BASE }}
        >
          {pkg.num}
        </span>
      </div>
    </div>
  )
}

