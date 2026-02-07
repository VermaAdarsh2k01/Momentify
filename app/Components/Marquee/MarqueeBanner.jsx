"use client";
import { useRef } from "react";

import Copy from "../TextAnimation/Copy";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MarqueeBanner = () => {
  const marqueeBannerRef = useRef(null);
  const marquee1Ref = useRef(null);
  const marquee2Ref = useRef(null);
  const VinylRef = useRef(null);

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: marqueeBannerRef.current,
        start: "top bottom",
        end: "150% top",
        scrub: true,
        invalidateOnRefresh: true,
        refreshPriority: -1,
        onUpdate: (self) => {
            const progress = self.progress;

            const marquee1X = 25 - progress * 50;
            gsap.set(marquee1Ref.current, { x: `${marquee1X}%` });

            const marquee2X = -15 + progress * 50;
            gsap.set(marquee2Ref.current, { x: `${marquee2X}%` });

            const vinylProgress = Math.min(progress * 1.5, 1); // Double the speed, cap at 1
            const vinylY = -vinylProgress * 90; // Move up 100% when fully in view
            const vinylRotation = vinylProgress * 360;
            
            gsap.set(VinylRef.current, { 
                y: `${vinylY}%`,
                rotation: vinylRotation,
                transformOrigin: "center center"
            });
        },
      });
    },
    { scope: marqueeBannerRef }
  );

  return (
    <section 
      className="relative w-full h-svh p-4 flex justify-center items-center overflow-hidden 2xl:h-[100svh] bg-[#8F1B32]" 
      ref={marqueeBannerRef}
    >
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between xl:justify-center  py-8">
        <div 
          className="relative w-[200%] text-[--base-300] will-change-transform translate-x-[25%] 2xl:text-[8vw] text-nowrap" 
          ref={marquee1Ref}
        >
          <p className="font-title-bold text-6xl xl:text-[10rem]">We are here for your events</p>
        </div>
        <div 
          className="relative w-[200%] text-[--base-300] will-change-transform -translate-x-[25%] 2xl:text-[8vw] text-nowrap" 
          ref={marquee2Ref}
        >
          <p className="font-title-bold text-6xl xl:text-[10rem]">We are here for your events</p>
        </div>
      </div>
      
      <div className="relative w-[35%] h-[70%] 2xl:max-w-150 max-h-[40rem] rounded-2xl bg-black overflow-hidden max-[1000px]:w-[calc(100%-3rem)]">
        <div className="w-full px-8 pt-12 pb-8 text-[--base-100] flex flex-col justify-center items-center text-center gap-8">
          <Copy>
            <p className="font-title text-4xl">Make Every Moment Count</p>
          </Copy>
        </div>
        
        <div className="absolute -bottom-[10rem] xl:-bottom-[20rem] w-full flex justify-center items-center">
          <img src="/Vinyl.png" alt="" ref={VinylRef} className="w-full xl:w-[80%] h-full object-cover"/>
        </div>
        
        {/* <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[--base-100]">
          <h5>Nrmlss</h5>
        </div> */}
      </div>
    </section>
  );
};

export default MarqueeBanner;