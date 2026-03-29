'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, useMotionValue, animate } from 'framer-motion'

const GAP           = 16   // px — matches gap-4
const AUTO_INTERVAL = 3500
const BREAKPOINT    = 768  // px — md

export default function ServicesCarousel({ services }) {
  const N          = services.length
  const LOOP_ITEMS = [...services, ...services, ...services]

  // ── refs ─────────────────────────────────────────────────────────────────
  const containerRef = useRef(null)   // outer wrapper — measured for card widths
  const timerRef     = useRef(null)
  const indexRef     = useRef(N)      // starts at first item of the middle copy
  const animating    = useRef(false)

  // ── responsive state ─────────────────────────────────────────────────────
  const [isMobile,  setIsMobile]  = useState(false)
  const [cardWidth, setCardWidth] = useState(0)

  const x = useMotionValue(0)

  /* ─── track mobile breakpoint ─────────────────────────────────────────── */
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${BREAKPOINT - 1}px)`)
    setIsMobile(mq.matches)
    const handler = (e) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  /* ─── measure container → derive cardWidth ────────────────────────────── */
  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return
      const w = containerRef.current.offsetWidth
      const mobile = w < BREAKPOINT
      const cw = mobile
        ? (w - GAP) / 2                    // 2 cards visible, 1 gap
        : (w - GAP * 3) / 4               // 4 equal cards (info + 3), 3 gaps
      setCardWidth(Math.floor(cw))
    }

    measure()
    const ro = new ResizeObserver(measure)
    if (containerRef.current) ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [])

  /* ─── reset x whenever cardWidth changes (resize / breakpoint switch) ─── */
  useEffect(() => {
    if (cardWidth > 0) {
      x.set(-(indexRef.current * (cardWidth + GAP)))
    }
  }, [cardWidth, x])

  /* ─── slide to absolute loop index ───────────────────────────────────── */
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

  /* ─── advance + auto-play ─────────────────────────────────────────────── */
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

  // ── derived dimensions ───────────────────────────────────────────────────
  const cardHeight  = cardWidth > 0 ? Math.round(cardWidth * (isMobile ? 1.6 : 1.25)) : 0
  const trackWidth  = LOOP_ITEMS.length * (cardWidth + GAP) - GAP

  return (
    <div ref={containerRef} className="flex flex-col gap-6">

      {/* ── Row on desktop / Column on mobile ── */}
      <div className="flex flex-col md:flex-row gap-4 items-start">

        {/* Column 1 — static info card */}
        <div
          className="bg-[#f2f2f0] rounded-2xl p-6 flex flex-col justify-end"
          style={cardWidth
            ? isMobile
              ? { width: '100%' }                            // full-width on mobile, auto height
              : { width: cardWidth, height: cardHeight, flexShrink: 0 }  // fixed 4:5 on desktop
            : { flex: '1 1 0' }
          }
        >
          <div className="mb-4">
            <h3 className="font-title text-2xl text-black leading-snug mb-3">
              Custom Tailored Events
            </h3>
            <p className="font-body text-sm text-gray-500 leading-relaxed">
              From intimate celebrations to large-scale productions, we design
              and deliver events that reflect your vision. Every detail is
              carefully curated to create seamless, memorable experiences.
            </p>
          </div>
          <a href="/services" className="inline-flex items-center gap-2 font-body text-xs font-semibold tracking-widest text-black border rounded-full px-5 py-2.5 hover:bg-black hover:text-white transition-colors w-fit uppercase bg-white">
            View All <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Column 2 — clipping viewport */}
        <div className="overflow-hidden w-full md:flex-1 md:min-w-0">
          <motion.div
            className="flex items-start"
            style={{
              x,
              gap: GAP,
              width: trackWidth > 0 ? trackWidth : 'max-content',
            }}
          >
            {LOOP_ITEMS.map((service, i) => (
              <div
                key={i}
                className="rounded-2xl flex flex-col shrink-0"
                style={cardWidth ? { width: cardWidth, height: cardHeight } : { width: 200 }}
              >
                {/* Image — inset, fills remaining height above label */}
                <div className="p-2 pb-0 flex-1 min-h-0">
                  <div className="rounded-2xl overflow-hidden w-full h-full">
                    <img
                      src={service.image}
                      alt={service.label}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Label row */}
                <div className="flex items-center justify-between px-4 py-3 shrink-0 bg-[#f2f2f0] rounded-2xl mt-2">
                  <span className="font-body text-base text-black" style={{ fontWeight: 700 }}>
                    {service.label}
                  </span>
                  <a href={`/services/#${service.id}`} className="w-10 h-10 border bg-white rounded-full flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors shrink-0">
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>

      {/* ── Nav buttons ── */}
      <div className="flex justify-center gap-3">
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

    </div>
  )
}
