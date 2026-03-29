import React from 'react'
import Copy from '../../Components/TextAnimation/Copy'
import Marquee from './marquee'

const Hero2 = () => {
  return (
    <section className="w-full bg-white pt-28 md:pt-36 pb-6">
      <div className="max-w-7xl mx-auto px-6 md:px-10 ">

        <div className="mb-10 md:mb-14">
          <Copy delay={0.3} type="slide">
            <h1 className="font-title text-5xl md:text-7xl xl:text-7xl text-black leading-none mb-5">
              Our Services
            </h1>
          </Copy>
          <Copy delay={0.6} type="slide">
            <p className="font-body text-neutral-500 text-base md:text-base max-w-xl">
              From intimate celebrations to grand weddings and global corporate events,
              we bring together creativity, cultural understanding, and international
              standards of execution to transform visions into remarkable realities.
            </p>
          </Copy>
        </div>
        <div className="relative mt-24 pt-4 rounded-2xl">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-20 hidden md:block bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-20 hidden md:block bg-gradient-to-l from-white to-transparent" />
          <Marquee speed={30} />
        </div>
      </div>
    </section>
  );
};

export default Hero2;
