'use client';

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const IMAGES = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&q=80",
  "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&q=80",
  "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=800&q=80",
  "https://images.unsplash.com/photo-1455156218388-5e61b526818b?w=800&q=80",
  "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80",
  "https://images.unsplash.com/photo-1490682143684-14369e18dce8?w=800&q=80",
  "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&q=80",
  "https://images.unsplash.com/photo-1439853949212-36089be43dc4?w=800&q=80",
];

function lerp(a, b, t) {
  return a + (b - a) * t;
}

export default function Minimap() {
  const pinnedRef = useRef(null);
  const containerRef = useRef(null);
  const itemsRef = useRef(null);
  const indicatorRef = useRef(null);
  const itemRefs = useRef([]);
  const rafRef = useRef(null);

  const s = useRef({
    isHorizontal: false,
    itemSize: 0,
    containerSize: 0,
    indicatorSize: 0,
    maxTranslate: 0,
    currentTranslate: 0,
    targetTranslate: 0,
    isClickMove: false,
    currentImageIndex: 0,
  });

  const [previewSrc, setPreviewSrc] = useState(IMAGES[0]);
  const [activeIndex, setActiveIndex] = useState(0);

 
  const triggerEl = pinnedRef.current;
    if (!triggerEl) return;

      ScrollTrigger.create({
        trigger: triggerEl,
        start: "top top",
        end: `+=${window.innerHeight * 4}`,
        pin: true,
        pinSpacing: true,
    });


  // ── DIMENSIONS ──────────────────────────────────────────────
  const updateDimensions = useCallback(() => {
    const state = s.current;
    state.isHorizontal = window.innerWidth <= 900;
    const first = itemRefs.current[0];
    if (!first || !itemsRef.current || !indicatorRef.current) return;
    if (state.isHorizontal) {
      state.itemSize = first.getBoundingClientRect().width;
      state.containerSize = itemsRef.current.scrollWidth;
      state.indicatorSize = indicatorRef.current.getBoundingClientRect().width;
    } else {
      state.itemSize = first.getBoundingClientRect().height;
      state.containerSize = itemsRef.current.getBoundingClientRect().height;
      state.indicatorSize = indicatorRef.current.getBoundingClientRect().height;
    }
    state.maxTranslate = state.containerSize - state.indicatorSize;
  }, []);

  // ── ACTIVE ITEM ─────────────────────────────────────────────
  const getActiveIndex = useCallback(() => {
    const state = s.current;
    const start = -state.currentTranslate;
    const end = start + state.indicatorSize;
    let maxOverlap = 0;
    let selected = 0;
    itemRefs.current.forEach((item, i) => {
      if (!item) return;
      const iStart = i * state.itemSize;
      const iEnd = iStart + state.itemSize;
      const overlap = Math.max(0, Math.min(end, iEnd) - Math.max(start, iStart));
      if (overlap > maxOverlap) { maxOverlap = overlap; selected = i; }
    });
    return selected;
  }, []);

  // ── RAF LOOP ────────────────────────────────────────────────
  const animate = useCallback(() => {
    const state = s.current;
    const factor = state.isClickMove ? 0.05 : 0.075;
    state.currentTranslate = lerp(state.currentTranslate, state.targetTranslate, factor);
    if (Math.abs(state.currentTranslate - state.targetTranslate) > 0.01) {
      if (itemsRef.current) {
        itemsRef.current.style.transform = state.isHorizontal
          ? `translateX(${state.currentTranslate}px)`
          : `translateY(${state.currentTranslate}px)`;
      }
      const idx = getActiveIndex();
      if (idx !== state.currentImageIndex) {
        state.currentImageIndex = idx;
        setPreviewSrc(IMAGES[idx]);
        setActiveIndex(idx);
      }
    } else {
      state.isClickMove = false;
    }
    rafRef.current = requestAnimationFrame(animate);
  }, [getActiveIndex]);

  // ── EVENTS ──────────────────────────────────────────────────
  useEffect(() => {
    updateDimensions();

    const onWheel = (e) => {
      e.preventDefault();
      const state = s.current;
      state.isClickMove = false;
      const v = Math.min(Math.max(e.deltaY * 0.5, -20), 20);
      state.targetTranslate = Math.min(Math.max(state.targetTranslate - v, -state.maxTranslate), 0);
    };

    let touchStartY = 0;
    const onTouchStart = (e) => { touchStartY = e.touches[0].clientY; };
    const onTouchMove = (e) => {
      if (!s.current.isHorizontal) return;
      const state = s.current;
      const dy = touchStartY - e.touches[0].clientY;
      const v = Math.min(Math.max(dy * 0.5, -20), 20);
      state.targetTranslate = Math.min(Math.max(state.targetTranslate - v, -state.maxTranslate), 0);
      touchStartY = e.touches[0].clientY;
      e.preventDefault();
    };

    const onResize = () => {
      updateDimensions();
      const state = s.current;
      state.targetTranslate = Math.min(Math.max(state.targetTranslate, -state.maxTranslate), 0);
      state.currentTranslate = state.targetTranslate;
      if (itemsRef.current) {
        itemsRef.current.style.transform = state.isHorizontal
          ? `translateX(${state.currentTranslate}px)`
          : `translateY(${state.currentTranslate}px)`;
      }
    };

    const el = containerRef.current;
    el?.addEventListener("wheel", onWheel, { passive: false });
    el?.addEventListener("touchstart", onTouchStart);
    el?.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("resize", onResize);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      el?.removeEventListener("wheel", onWheel);
      el?.removeEventListener("touchstart", onTouchStart);
      el?.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafRef.current);
    };
  }, [updateDimensions, animate]);

  const handleItemClick = (index) => {
    const state = s.current;
    state.isClickMove = true;
    const t = -index * state.itemSize + (state.indicatorSize - state.itemSize) / 2;
    state.targetTranslate = Math.max(Math.min(t, 0), -state.maxTranslate);
  };

  return (
    <div className="bg-[#f0ede3] font-mono">

      {/* ── INTRO ── */}
      {/* <section className="h-screen flex items-center justify-center bg-[#1a1916] px-8">
        <p className="text-[#f0ede3] text-4xl md:text-6xl italic tracking-tight font-serif text-center">
          Scroll to enter the gallery
        </p>
      </section> */}

      {/* ── PINNED ── */}
      <div ref={pinnedRef}>
        <div
          ref={containerRef}
          className="relative w-screen h-screen overflow-hidden bg-[#f0ede3] cursor-crosshair"
        >

          {/* Nav */}
          <nav className="absolute top-0 left-0 w-full px-8 py-6 flex justify-between items-center z-20">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#1a1916]">
              Codegrid
            </p>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#1a1916]">
              Menu
            </p>
          </nav>

          {/* Site info */}
          <div className="absolute top-1/2 left-8 -translate-y-1/2 flex flex-col gap-0.5 z-20">
            <p className="text-[13px] font-medium tracking-widest text-[#1a1916] uppercase">E427</p>
            <p className="text-[10px] tracking-widest uppercase text-[#9a9892]">Responsive Minimap</p>
          </div>

          {/* Preview image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[52%] h-[72%] overflow-hidden z-10 ring-1 ring-black/10">
            <img
              src={previewSrc}
              alt="Preview"
              draggable={false}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover transition-opacity duration-300 select-none"
            />
          </div>

          {/* Counter */}
          <p className="absolute bottom-4 right-4 text-[10px] tracking-widest uppercase text-[#9a9892] z-20">
            {String(activeIndex + 1).padStart(2, "0")} / {String(IMAGES.length).padStart(2, "0")}
          </p>

          {/* ── MINIMAP — desktop: right vertical | mobile: bottom horizontal ── */}
          {/*
            Desktop (>900px):
              - positioned: right-20, top-1/2, -translate-y-1/2
              - width: 72px, no fixed height
              - items flex-col, each item h-[58px]
              - indicator: w-full h-[58px]

            Mobile (≤900px):
              - We detect isHorizontal in JS and swap translateX
              - Layout switches to flex-row via inline className swap below
          */}
          <div
            className="
              absolute top-1/2 right-20 -translate-y-1/2 w-[72px] z-20
            "
          >
            {/* Indicator box */}
            <div
              ref={indicatorRef}
              className="absolute top-0 left-0 w-full h-[58px] border border-[#1a1916] z-10 pointer-events-none"
            />

            {/* Scrolling strip */}
            <div
              ref={itemsRef}
              className="relative w-full flex flex-col will-change-transform"
            >
              {IMAGES.map((src, i) => (
                <div
                  key={i}
                  ref={(el) => (itemRefs.current[i] = el)}
                  onClick={() => handleItemClick(i)}
                  className="w-full h-[58px] p-1 cursor-pointer transition-transform duration-150 hover:scale-95"
                >
                  <img
                    src={src}
                    alt={`thumb-${i}`}
                    draggable={false}
                    className="w-full h-full object-cover select-none transition-opacity duration-200"
                    style={{ opacity: activeIndex === i ? 0.2 : 1 }}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── OUTRO ── */}
      <section className="h-screen flex items-center justify-center bg-[#cecec6]">
        <p className="text-[11px] tracking-widest uppercase text-[#9a9892]">
          End of collection
        </p>
      </section>

    </div>
  );
}