"use client";
import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const AdvancedClipReveal = forwardRef(({ 
  children, 
  duration = 1.5,
  delay = 0,
  ease = "power2.inOut",
  direction = "center",
  triggerOnMount = true,
  className = "",
  style = {},
  onComplete = null,
  onStart = null,
  customClipPath = null, // For custom polygon shapes
  stagger = 0, // For multiple children animation
  repeat = 0,
  yoyo = false,
  scale = false, // Add scale animation
  rotation = false, // Add rotation animation
  opacity = false, // Add opacity animation
  blur = false // Add blur effect
}, ref) => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const timelineRef = useRef(null);

  // Advanced clipping polygon patterns
  const getClipPath = (direction, isInitial = true) => {
    if (customClipPath) {
      return isInitial ? customClipPath.initial : customClipPath.final;
    }

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
      },
      diamond: {
        initial: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
        final: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
      },
      hexagon: {
        initial: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%)",
        final: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)"
      },
      star: {
        initial: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%)",
        final: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
      },
      wave: {
        initial: "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
        final: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      }
    };

    return isInitial ? patterns[direction]?.initial : patterns[direction]?.final;
  };

  useGSAP(() => {
    if (!triggerOnMount) return;

    // Create timeline for complex animations
    const tl = gsap.timeline({
      onStart: onStart,
      onComplete: onComplete,
      repeat: repeat,
      yoyo: yoyo
    });

    // Set initial states
    const initialProps = {
      clipPath: getClipPath(direction, true)
    };

    if (scale) initialProps.scale = 0.8;
    if (rotation) initialProps.rotation = -10;
    if (opacity) initialProps.opacity = 0;
    if (blur) initialProps.filter = "blur(10px)";

    gsap.set(contentRef.current, initialProps);

    // Animate to final states
    const finalProps = {
      clipPath: getClipPath(direction, false),
      duration: duration,
      delay: delay,
      ease: ease
    };

    if (scale) finalProps.scale = 1;
    if (rotation) finalProps.rotation = 0;
    if (opacity) finalProps.opacity = 1;
    if (blur) finalProps.filter = "blur(0px)";

    tl.to(contentRef.current, finalProps);

    timelineRef.current = tl;
  }, { scope: wrapperRef });

  // Animation control methods
  const triggerReveal = (customDuration = duration) => {
    const tl = gsap.timeline({
      onStart: onStart,
      onComplete: onComplete
    });

    const initialProps = {
      clipPath: getClipPath(direction, true)
    };
    const finalProps = {
      clipPath: getClipPath(direction, false),
      duration: customDuration,
      ease: ease
    };

    if (scale) {
      initialProps.scale = 0.8;
      finalProps.scale = 1;
    }
    if (rotation) {
      initialProps.rotation = -10;
      finalProps.rotation = 0;
    }
    if (opacity) {
      initialProps.opacity = 0;
      finalProps.opacity = 1;
    }
    if (blur) {
      initialProps.filter = "blur(10px)";
      finalProps.filter = "blur(0px)";
    }

    gsap.set(contentRef.current, initialProps);
    tl.to(contentRef.current, finalProps);

    return tl;
  };

  const reverseReveal = (customDuration = duration) => {
    const finalProps = {
      clipPath: getClipPath(direction, true),
      duration: customDuration,
      ease: ease
    };

    if (scale) finalProps.scale = 0.8;
    if (rotation) finalProps.rotation = -10;
    if (opacity) finalProps.opacity = 0;
    if (blur) finalProps.filter = "blur(10px)";

    return gsap.to(contentRef.current, finalProps);
  };

  const pauseAnimation = () => {
    if (timelineRef.current) {
      timelineRef.current.pause();
    }
  };

  const resumeAnimation = () => {
    if (timelineRef.current) {
      timelineRef.current.resume();
    }
  };

  const restartAnimation = () => {
    if (timelineRef.current) {
      timelineRef.current.restart();
    }
  };

  // Expose methods via ref
  useImperativeHandle(ref, () => ({
    triggerReveal,
    reverseReveal,
    pauseAnimation,
    resumeAnimation,
    restartAnimation,
    timeline: timelineRef.current
  }));

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
});

AdvancedClipReveal.displayName = 'AdvancedClipReveal';

export default AdvancedClipReveal;