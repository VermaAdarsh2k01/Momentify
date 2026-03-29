'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, useMotionValue, animate } from 'framer-motion'

const GAP           = 16
const AUTO_INTERVAL = 4000
const BREAKPOINT    = 768

export default function TestimonialsCarousel({ testimonials }) {
  const N          = testimonials.length
  const LOOP_ITEMS = [...testimonials, ...testimonials, ...testimonials]

  const containerRef = useRef(null)
  const timerRef     = useRef(null)
  const indexRef     = useRef(N)
  const animating    = useRef(false)

  const [isMobile,  setIsMobile]  = useState(false)
  const [cardWidth, setCardWidth] = useState(0)

  const x = useMotionValue(0)

  /* ── breakpoint tracker ──────────────────────────────────────────────────── */
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${BREAKPOINT - 1}px)`)
    setIsMobile(mq.matches)
    const handler = (e) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  /* ── measure container → card width ─────────────────────────────────────── */
  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return
      const w = containerRef.current.offsetWidth
      const cw = w < BREAKPOINT
        ? Math.floor(w * 0.82)
        : Math.floor((w - GAP * 2) / 3)
      setCardWidth(cw)
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (containerRef.current) ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [])

  /* ── reset x on resize ───────────────────────────────────────────────────── */
  useEffect(() => {
    if (cardWidth > 0) x.set(-(indexRef.current * (cardWidth + GAP)))
  }, [cardWidth, x])

  /* ── slide to absolute loop index ───────────────────────────────────────── */
  const slideTo = useCallback(async (idx) => {
    if (!cardWidth) return
    animating.current = true
    await animate(x, -(idx * (cardWidth + GAP)), {
      duration: 0.55,
      ease: [0.32, 0.72, 0, 1],
    })
    animating.current = false

    if (idx >= N * 2) {
      const r = idx - N
      indexRef.current = r
      x.set(-(r * (cardWidth + GAP)))
    } else if (idx < N) {
      const r = idx + N
      indexRef.current = r
      x.set(-(r * (cardWidth + GAP)))
    } else {
      indexRef.current = idx
    }
  }, [N, cardWidth, x])

  /* ── advance + auto-play ─────────────────────────────────────────────────── */
  const advance = useCallback((dir = 1) => {
    if (animating.current) return
    const next = indexRef.current + dir
    indexRef.current = next
    slideTo(next)
  }, [slideTo])

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => advance(1), AUTO_INTERVAL)
  }, [advance])

  useEffect(() => {
    if (cardWidth > 0) startTimer()
    return () => clearInterval(timerRef.current)
  }, [startTimer, cardWidth])

  const handlePrev = () => { advance(-1); startTimer() }
  const handleNext = () => { advance(1);  startTimer() }

  const cardHeight = cardWidth > 0 ? Math.round(cardWidth * (isMobile ? 1.5 : 1.1)) : 0
  const trackWidth = LOOP_ITEMS.length * (cardWidth + GAP) - GAP

  return (
    <div className="flex flex-col gap-6">

      {/* ── Nav buttons ── */}
      <div className="flex items-center gap-3">
        <button
          onClick={handlePrev}
          aria-label="Previous"
          className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={handleNext}
          aria-label="Next"
          className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* ── Sliding track ── */}
      <div ref={containerRef} className="overflow-hidden w-full">
        <motion.div
          className="flex items-start"
          style={{
            x,
            gap: GAP,
            width: trackWidth > 0 ? trackWidth : 'max-content',
          }}
        >
          {LOOP_ITEMS.map((t, i) => (
            <div
              key={i}
              className="bg-[#f2f2f0] rounded-2xl p-7 flex flex-col justify-between shrink-0"
              style={cardWidth ? { width: cardWidth, height: cardHeight } : { width: 280 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} className="w-3.5 h-3.5 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.95 2.878c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="font-body text-xl text-gray-500 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-6">
                <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center shrink-0">
                  <span className="font-body text-[10px] text-white font-medium tracking-wide">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-black leading-none mb-1">
                    {t.name}
                  </p>
                  <p className="font-body text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

    </div>
  )
}
