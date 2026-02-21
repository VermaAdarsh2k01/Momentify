import React from 'react'
import Copy from '@/app/Components/TextAnimation/Copy'
import './Hero2.css'
import Marquee from './marquee'

const Hero2 = () => {
  return (
    <>
    <section 
        className="relative w-full h-screen overflow-hidden bg-[#8F1B32] "
      >
        {/* Fixed Title Container */}
        <div className="absolute top-[40%] left-1/2 md:top-[40%] md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[70svw] md:w-[50svw] ">
          <Copy delay={0.5} type="slide">
          <h1 className="font-title text-[3rem] text-nowrap xl:text-[7vw] font-medium text-white text-center leading-none">
            Our Services
          </h1>
          <div className="flex justify-center mb-8">
            <img 
              src="/highlight.svg" 
              alt="Highlight decoration" 
              className="w-40 h-auto lg:w-48 xl:w-56"
            />
          </div>
          </Copy>

          <Copy delay={1} type="slide">
            <p className="font-body text-white text-center text-lg xl:text-xl xl:mt-10 w-full">
              From intimate celebrations to grand weddings and global corporate events, we bring together creativity, cultural understanding, and international standards of execution to transform visions into remarkable realities
            </p>
          </Copy>
        </div>

        <div className='w-full xl:w-[100vw] mx-auto h-full absolute bottom-32 md:bottom-0 left-0 flex justify-center items-end'>
          <Marquee />
        </div>
      </section>
    </>
  );
};

export default Hero2;