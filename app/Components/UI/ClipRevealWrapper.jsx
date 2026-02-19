"use client";
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ClipRevealWrapper = ({ 
  children, 
  duration = 1.5,
  delay = 0,
  ease = "power2.inOut",
  direction = "center", // center, left, right, top, bottom
  triggerOnMount = true,
  className = "",
  style = {},
  onComplete = null
}) => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  // Define different clipping polygon patterns
  const getClipPath = (direction, isInitial = true) => {
    const patterns = {
      center: {
        initial: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
        final: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      },
      left: {
        initial: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        final: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      },
      right: {
        initial: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
        final: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      },
      top: {
        initial: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        final: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      },
      bottom: {
        initial: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        final: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      },
      diagonal: {
        initial: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",
        final: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      },
      circle: {
        initial: "circle(0% at 50% 50%)",
        final: "circle(100% at 50% 50%)"
      }
    };

    return isInitial ? patterns[direction]?.initial : patterns[direction]?.final;
  };

  useGSAP(() => {
    if (!triggerOnMount) return;

    // Set initial clip path
    gsap.set(contentRef.current, {
      clipPath: getClipPath(direction, true)
    });

    // Animate to final clip path
    gsap.to(contentRef.current, {
      clipPath: getClipPath(direction, false),
      duration: duration,
      delay: delay,
      ease: ease,
      onComplete: onComplete
    });
  }, { scope: wrapperRef });

  // Method to trigger animation manually
  const triggerReveal = () => {
    gsap.set(contentRef.current, {
      clipPath: getClipPath(direction, true)
    });

    gsap.to(contentRef.current, {
      clipPath: getClipPath(direction, false),
      duration: duration,
      ease: ease,
      onComplete: onComplete
    });
  };

  // Method to reverse animation
  const reverseReveal = () => {
    gsap.to(contentRef.current, {
      clipPath: getClipPath(direction, true),
      duration: duration,
      ease: ease
    });
  };

  // Expose methods to parent components
  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.triggerReveal = triggerReveal;
      wrapperRef.current.reverseReveal = reverseReveal;
    }
  }, []);

  return (
    <div 
      ref={wrapperRef}
      className={`relative overflow-hidden ${className}`}
      style={style}
    >
      <div
        ref={contentRef}
        className="w-full h-full"
        style={{
          clipPath: triggerOnMount ? getClipPath(direction, true) : getClipPath(direction, false)
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ClipRevealWrapper;