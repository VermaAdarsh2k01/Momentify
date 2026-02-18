"use client";
import React, { useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Copy from "../TextAnimation/Copy";

gsap.registerPlugin(ScrollTrigger);

const OurProcess = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Vision",
      description: "We begin with an in-depth consultation to understand your vision, preferences, and requirements. Every detail matters to us.",
      icon: "💭"
    },
    {
      number: "02", 
      title: "Creative Planning",
      description: "Our team crafts a comprehensive plan that brings your vision to life while ensuring seamless execution and memorable experiences.",
      icon: "✨"
    },
    {
      number: "03",
      title: "Flawless Execution",
      description: "On the day of your event, we handle every detail so you can focus on creating memories with your loved ones.",
      icon: "🎯"
    },
    {
      number: "04",
      title: "Memorable Moments",
      description: "We ensure every moment is captured and celebrated, creating lasting memories that you'll treasure forever.",
      icon: "📸"
    }
  ];

  useGSAP(() => {
    // Set initial state for cards
    gsap.set(cardsRef.current, {
      opacity: 0,
      yPercent: 50
    });

    // Animate cards when component is 40% visible from bottom
    gsap.to(cardsRef.current, {
      opacity: 1,
      yPercent: 0,
      filter: "blur(0px)",
      duration: 1.2,
      stagger: {
        each: 0.22,
        ease: "power1.inOut",
        from: "start"
      },
      ease: "expo.out",
      filter: "blur(0px)",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "40% 60%",
        end: "top 20%",
        scrub: 0.6,
        toggleActions: "play none none none",
      }
    });
  }, { scope: containerRef });

  return (
    <section className="bg-[#8F1B32] min-h-screen flex items-center py-20 lg:py-32" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <Copy delay={0} type="slide">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-white text-5xl lg:text-7xl xl:text-8xl font-title leading-[1] mb-6">
              Our Process
            </h2>
            <div className="flex justify-center mb-8">
              <img 
                src="/highlight.svg" 
                alt="Highlight decoration" 
                className="w-40 h-auto lg:w-48 xl:w-56"
              />
            </div>
            <p className="text-white text-lg lg:text-xl font-body max-w-3xl mx-auto leading-relaxed">
              From initial consultation to final celebration, our proven process ensures every detail is perfect
            </p>
          </div>
        </Copy>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {processSteps.map((step, index) => (
            <div 
              key={step.number} 
              ref={el => cardsRef.current[index] = el}
              className="rounded-2xl p-8 group T hover:bg-opacity-10 transition-all duration-300 border-2 border-white border-opacity-30 h-full flex flex-col"
            >
              <div className="text-white text-6xl lg:text-8xl font-title-bold mb-4 transform group-hover:scale-110 transition-transform duration-300 text-left">
                {step.number}
              </div>
              <h3 className="text-white text-xl lg:text-2xl font-title mb-8 leading-tight text-left">
                {step.title}
              </h3>
              <p className="text-white font-body text-sm lg:text-base leading-relaxed opacity-90 mt-auto text-left">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;