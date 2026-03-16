"use client";

import { useEffect, useState, useRef } from "react";
import { useLenis } from "lenis/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);

let isInitialLoad = true;

const Preloader = () => {
  const [showPreloader, setShowPreloader] = useState(isInitialLoad);
  const [loaderAnimating, setLoaderAnimating] = useState(isInitialLoad);
  const [isMobileMask, setIsMobileMask] = useState(false);
  const wrapperRef = useRef(null);
  const lenis = useLenis();

  useEffect(() => {
    return () => {
      isInitialLoad = false;
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateMask = () => {
      setIsMobileMask(window.innerWidth <= 800);
    };

    updateMask();
    window.addEventListener("resize", updateMask);

    return () => {
      window.removeEventListener("resize", updateMask);
    };
  }, []);

  useEffect(() => {
    if (loaderAnimating) {
      if (lenis) lenis.stop();
      document.body.style.overflow = "hidden";
    } else {
      if (lenis) lenis.start();
      document.body.style.overflow = "";
    }
  }, [lenis, loaderAnimating]);

  useGSAP(
    () => {
      if (!showPreloader) return;

      if (!document.fonts || !document.fonts.ready) return;

      document.fonts.ready.then(() => {
        const logoSplit = SplitText.create(".preloader-logo h1", {
          type: "chars",
          charsClass: "char",
          mask: "chars",
        });

        gsap.set(logoSplit.chars, { x: "110%" });
        gsap.set(".preloader-logo h1", { opacity: 1 });

        function animateProgress(duration = 4.75) {
          const tl = gsap.timeline();
          const counterSteps = 5;
          let currentProgress = 0;

          for (let i = 0; i < counterSteps; i++) {
            const finalStep = i === counterSteps - 1;
            const targetProgress = finalStep
              ? 1
              : Math.min(currentProgress + Math.random() * 0.3 + 0.1, 0.9);
            currentProgress = targetProgress;

            tl.to(".preloader-progress-bar", {
              scaleX: targetProgress,
              duration: duration / counterSteps,
              ease: "power2.out",
            });
          }

          return tl;
        }

        const isMobile =
          typeof window !== "undefined" ? window.innerWidth < 1000 : false;
        const maskScale = isMobile ? 25 : 15;

        const tl = gsap.timeline({
          delay: 0.5,
          onComplete: () => {
            setLoaderAnimating(false);
            setTimeout(() => {
              setShowPreloader(false);
            }, 100);
          },
        });

        tl.to(logoSplit.chars, {
          x: "0%",
          stagger: 0.05,
          ease: "power4.out",
          duration: 1,
        })
          .add(animateProgress(), "<")
          .set(".preloader-progress", { backgroundColor: "#bg-[#D4D4D4]" })
          .to(
            logoSplit.chars,
            {
              x: "-110%",
              stagger: 0.05,
              duration: 1,
              ease: "power4.out",
            },
            "-=0.5"
          )
          .to(
            ".preloader-progress",
            {
              opacity: 0,
              duration: 0.5,
              ease: "power3.out",
            },
            "-=0.5"
          )
          .to(
            ".preloader-mask",
            {
              scale: maskScale,
              duration: 1.25,
              ease: "power3.out",
            },
            "<"
          );
      });
    },
    { scope: wrapperRef, dependencies: [showPreloader] }
  );

  if (!showPreloader) return null;

  return (
    <div
      ref={wrapperRef}
      className="fixed inset-0 h-[100svh] w-full z-[100000]"
    >
      {/* Progress layer */}
      <div
        className={`
          preloader-progress
          fixed inset-0 h-[100svh] w-full pointer-events-none
          bg-[#8F1B32]
          will-change-[opacity,transform]
          z-10
        `}
      >
        <div
          className={`
            preloader-progress-bar
            absolute top-1/2 left-1/2
            w-full md:w-[55%]
            h-[3.25rem]
            bg-neutral-300
            origin-left
            will-change-transform 
            rounded-2xl
          `}
          style={{ transform: "translate(-50%, -50%) scaleX(0)" }}
        />
        <div
          className={`
            preloader-logo
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-full text-center
            mix-blend-difference
            z-20
          `}
        >
          <h1
            className={`
              relative text-neutral-200
              text-3xl md:text-4xl
              font-medium tracking-[-0.02em]
              opacity-0
            `}
          >
            MomentifyEvents
          </h1>
        </div>
      </div>

      {/* Mask layer */}
      <div
        className={`
          preloader-mask
          fixed inset-0 h-[100svh] w-full pointer-events-none
          will-change-transform  bg-[#D4D4D4]
          z-0
        `}
        style={{
        //   backgroundColor: "#D4D4D4",bg-[#D4D4D4]
          WebkitMaskImage:
            'linear-gradient(#e5e7eb,#e5e7eb), url("/home/mask.svg")',
          maskImage:
            'linear-gradient(#e5e7eb,#e5e7eb), url("/home/mask.svg")',
          WebkitMaskComposite: "destination-out",
          maskComposite: "exclude",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          WebkitMaskSize: isMobileMask ? "90%" : "50%",
          maskSize: isMobileMask ? "90%" : "50%",
        }}
      />
    </div>
  );
};

export { isInitialLoad };
export default Preloader;