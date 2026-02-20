"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTABanner = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, textRef.current, buttonsRef.current], {
        y: 50,
        opacity: 0
      });

      // Create timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Add animations to timeline
      tl.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      })
      .to(textRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4")
      .to(buttonsRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-[#8F1B32] min-h-screen flex items-center py-20 lg:py-32"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center w-full">
        <h2 
          ref={titleRef}
          className="text-white text-4xl lg:text-6xl xl:text-7xl font-title leading-[1] mb-6"
        >
          Ready to Create Your Perfect Event?
        </h2>
        
        <p 
          ref={textRef}
          className="text-white text-lg lg:text-xl font-body mb-12 leading-relaxed max-w-2xl mx-auto"
        >
          Let's bring your vision to life. Contact us today for a personalized consultation and start planning your unforgettable celebration.
        </p>
        
        <div 
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <button className="bg-white text-[#8F1B32] px-8 py-4 rounded-full font-title text-lg hover:bg-[#8F1B32] hover:text-white hover:border-white hover:border-2 transition-all duration-300 transform hover:scale-105">
            <Link href="/contact">Get Started Today</Link>
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-title text-lg hover:bg-white hover:text-[#8F1B32] transition-all duration-300 transform hover:scale-105">
            <Link href="/services">View Our Services</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;