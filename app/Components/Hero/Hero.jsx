"use client";
import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Copy from '../TextAnimation/Copy';
import ContactButton from '../ContactButton/ContactButton';

const Hero = () => {
    const videoContainer = useRef(null);
    const heroContainer = useRef(null);
    const textContainer = useRef(null);
    const contactButtonContainer = useRef(null);
    useGSAP( () => {
        // Set initial states immediately to prevent FOUC
        gsap.set(heroContainer.current, { padding: "0px" });
        gsap.set(videoContainer.current, { borderRadius: "0%" });
        
        // Create matchMedia instance for responsive animations
        const mm = gsap.matchMedia();
        
        // Mobile breakpoint (up to 768px)
        mm.add("(max-width: 768px)", () => {
            const tl = gsap.timeline();
            
            tl.to(heroContainer.current , {
                padding:"16px",
                duration: 1,
                ease: "power2.inOut",
                delay: 0.5,
            })
            .to(videoContainer.current , {
                borderRadius: "16px",
                duration: 1,
                ease: "power2.inOut",
            }, "-=1");
        });
        
        mm.add("(min-width: 769px) and (max-width: 1024px)", () => {
            const tl = gsap.timeline();
            
            tl.to(heroContainer.current , {
                padding:"16px",
                duration: 1,
                ease: "power2.inOut",
                delay: 0.5,
            })
            .to(videoContainer.current , {
                borderRadius: "24px",
                duration: 1,
                ease: "power2.inOut",
            }, "-=1");
        });
        
        mm.add("(min-width: 1025px)", () => {
            const tl = gsap.timeline();
            
            tl.to(heroContainer.current , {
                padding:"16px",
                duration: 1,
                ease: "power2.inOut",
                delay: 0.5,
            })
            .to(videoContainer.current , {
                borderRadius: "32px",
                duration: 1,
                ease: "power2.inOut",
            }, "-=1")
            .to(textContainer.current , {
                opacity: 1,
                duration: 1,
                ease: "power2.inOut",
            }, "-=1");
        });
        
    } , { scope: heroContainer })
  return (
    <div className='h-screen w-full bg-[#8F1B32]' style={{ padding: '0px' }} ref={heroContainer}>
        <div className='relative w-full h-full bg-white overflow-hidden' style={{ borderRadius: '0%' }} ref={videoContainer}>
            <video src="/hero_vid.mp4" autoPlay muted loop className='w-full h-full object-cover' />

            <div className=' w-full xl:w-[40%] rounded-4xl h-fit p-6 absolute bottom-30 left-1/2 transform max-[1000px]:-translate-x-1/2 xl:bottom-4 xl:left-4' ref={textContainer}>
                <div className='w-full h-full'>
                    <Copy delay={1.5} type='slide' animateOnScroll={false}>
                        <p className='font-title text-4xl xl:text-7xl text-white opacity-0 '>Live the Events that you have always dreamed of</p>
                    </Copy>
                </div>
            </div>

            <div className='w-full xl:w-[40%] h-fit p-6 absolute bottom-30 right-1/2 transform max-[1000px]:-translate-x-1/2 xl:bottom-4 xl:right-4 flex flex-col gap-6' ref={contactButtonContainer}>
                <p className='font-title text-white xl:text-5xl '>Experience for people who are looking for the best</p>
                <ContactButton className='w-fit'/>
            </div>
        </div>

        
    </div>
  )
}

export default Hero