"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextBlock from "../TextBlock/TextBlock";

const TribehouseDetail = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const gridRef = useRef(null);
  const imageRefs = useRef([]);
  const mobileImageRefs = useRef([]);
  const linkButtonRef = useRef(null);

  const assets = [
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/44d65af4-e9b6-4719-afd8-999e849433b3-smalltribe-studio/assets/images/7nhXpmlIOiESWJ3OoGR9HBgV5Y8-22.jpg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/44d65af4-e9b6-4719-afd8-999e849433b3-smalltribe-studio/assets/images/mTRESd7otbaABKWOn8BxLW6m6U-26.jpeg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/44d65af4-e9b6-4719-afd8-999e849433b3-smalltribe-studio/assets/images/4ME4Wcngjgqlyh72qAtOlqYxiZY-27.jpeg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/44d65af4-e9b6-4719-afd8-999e849433b3-smalltribe-studio/assets/images/e6podg8165mAfB0JGBA1eF82MNQ-28.jpeg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/44d65af4-e9b6-4719-afd8-999e849433b3-smalltribe-studio/assets/images/vubyAuM0N7yIQMi8lqF1T7sZnc-29.jpeg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/44d65af4-e9b6-4719-afd8-999e849433b3-smalltribe-studio/assets/images/ZWcm8YUhXg26cg06tDJQfhjQ-11.jpeg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/44d65af4-e9b6-4719-afd8-999e849433b3-smalltribe-studio/assets/images/ZdcQJmyRqskeEGkvUZ0jGWBzdIg-12.jpeg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/44d65af4-e9b6-4719-afd8-999e849433b3-smalltribe-studio/assets/images/NDH8zX3k3bMIhzWUhuayg4ivMk-13.jpeg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/44d65af4-e9b6-4719-afd8-999e849433b3-smalltribe-studio/assets/images/PPPQT5BDFKNGQb80W2ydFJ3dg-6.jpg"
  ];

  const CENTER_INDEX = 4;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (typeof window === "undefined") return;

    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    // Desktop: pin + scrub gallery animation
    if (isDesktop) {
      const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        }
      });

      // Initial state
      imageRefs.current.forEach((ref, index) => {
        if (!ref) return;
        
        if (index === CENTER_INDEX) {
          gsap.set(ref, { 
            scale: 2,
            zIndex: 10,
          });
        } else {
          // Calculate center offset for other images
          const centerRect = imageRefs.current[CENTER_INDEX]?.getBoundingClientRect();
          const currentRect = ref.getBoundingClientRect();
          
          if (centerRect && currentRect) {
            const dx = centerRect.left - currentRect.left;
            const dy = centerRect.top - currentRect.top;
            
            gsap.set(ref, {
              x: dx,
              y: dy,
              scale: 0,
              opacity: 0,
              zIndex: 1,
            });
          }
        }
      });

      // Set link button initial state
      if (linkButtonRef.current) {
        gsap.set(linkButtonRef.current, {
          opacity: 0
        });
      }

      // Animation
      tl.to(imageRefs.current[CENTER_INDEX], {
        scale: 1,
        duration: 1,
        ease: "power2.inOut"
      }, 0);

      imageRefs.current.forEach((ref, index) => {
        if (index === CENTER_INDEX || !ref) return;
        
        tl.to(ref, {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.inOut"
        }, 0);
      });

      // Animate link button after cards animation finishes
      if (linkButtonRef.current) {
        tl.to(linkButtonRef.current, {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        }); // Start after 1 second (when cards animation finishes)
      }
    }, sectionRef);

      return () => ctx.revert();
    }

    // Mobile: slide reveal as each image comes into view
    if (!isDesktop) {
      const mobileEls = mobileImageRefs.current.filter(Boolean);
      if (mobileEls.length) {
        gsap.set(mobileEls, { opacity: 0, y: 48 });
        const ctx = gsap.context(() => {
          mobileEls.forEach((el) => {
            gsap.to(el, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                end: "top 60%",
                toggleActions: "play none none none",
              },
            });
          });
        }, sectionRef);
        return () => ctx.revert();
      }
    }
  }, []);

  return (
    <section ref={sectionRef} id="researches" className="w-full bg-white md:h-screen flex items-center overflow-hidden py-12 md:py-0">
      <div ref={containerRef} className="max-w-[1440px] mx-auto px-5 relative flex flex-col gap-8 items-center justify-center w-full">
        <TextBlock
          title="Visual gallery"
          body="Browse highlights from past shoots and campaigns to get a feel for our visual style and storytelling."
        />

        {/* Desktop Grid Container - Hidden on mobile */}
        <div 
          ref={gridRef}
          className="hidden md:grid grid-cols-3 gap-4 md:gap-6 w-full max-w-[800px]"
        >
          {assets.map((src, index) => (
            <div
              key={index}
              ref={el => { imageRefs.current[index] = el; }}
              className="aspect-[4/3] relative rounded-[12px] overflow-hidden bg-[#f8f8f8]"
            >
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Mobile grid */}
        <div className="md:hidden flex flex-col gap-6 w-full max-w-[400px] items-start">
          <div className="grid grid-cols-1 gap-4 w-full">
          {assets.map((src, index) => (
            <div
              key={index}
              ref={el => { mobileImageRefs.current[index] = el; }}
              className="aspect-[4/3] relative rounded-[12px] overflow-hidden bg-[#f8f8f8]"
            >
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          ))}
          </div>
        </div>
        {/* <a 
          ref={linkButtonRef}
          href='/researches' 
          className=' px-3 py-2 md:px-8 md:py-3 border border-black rounded-2xl text-[14px] md:text-[16px]'
        >
          Explore More
        </a> */}
      </div>
    </section>
  );
};

export default TribehouseDetail;
