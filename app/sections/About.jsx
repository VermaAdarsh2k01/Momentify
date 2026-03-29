"use client";
import React from 'react'
import Copy from '../Components/TextAnimation/Copy'

const About = () => {
  return (
    <section className="w-screen bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto">

        {/* ABOUT badge */}
        <div className="flex justify-center mb-10">
          <span className="font-body text-xs tracking-widest uppercase border border-gray-300 rounded-full px-5 py-1.5 text-black">
            About
          </span>
        </div>

        {/* Two-tone headline */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Copy delay={0.5} type="slide">
            <p className="font-body text-xl md:text-2xl">
              <span className="text-black">
                We create experiences that go beyond expectations. With a deep passion for design and precision
              </span>
              <span className="text-[#727272]">
                , our team brings together creativity and expertise to deliver events that feel effortless and refined. From concept to execution, every detail is carefully curated to reflect your vision and leave a lasting impression.
              </span>
            </p>
          </Copy>
        </div>

        {/* Cards row */}
        <div className="flex flex-col md:flex-row gap-6">

          {/* Left card: Founder photo + quote */}
          <div className="w-full md:w-1/2 bg-[#f2f2f0] rounded-2xl p-4 flex flex-col md:flex-row gap-6">

            {/* Photo */}
            <div className="w-40 mx-auto md:mx-0 md:w-44 md:shrink-0 rounded-2xl overflow-hidden self-start">
              <img
                src="/owner.webp"
                alt="Founder"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Quote + body */}
            <div className="flex flex-col gap-4">
              <Copy type="slide">
                <p className="font-title text-3xl text-black mb-4">
                  "We don't just manage events — we create moments that stay with you"
                </p>
                <span className="font-body text-sm text-black "> - VK Sharma , Founder</span>
              </Copy>
              <Copy type="slide">
                <p className="font-body text-sm text-gray-500 ">
                  When I started this journey, the vision was simple — to bring a level of creativity and precision to events that truly sets them apart. Every celebration is unique, and we believe it deserves a thoughtful approach that reflects its story.
                </p>
              </Copy>
            </div>

          </div>

          {/* Right card: Stats */}
          <div className="w-full md:w-1/2 bg-[#f2f2f0] rounded-2xl p-8 flex flex-col justify-center gap-8">

            {/* Stat 1 */}
            <div className="flex items-start gap-6">
              <Copy type="slide">
                <span className="font-title text-7xl text-black leading-none">100+</span>
              </Copy>
              <div className="flex flex-col justify-center gap-1 pt-2">
                <p className="font-body text-sm font-medium text-black">Events Successfully Delivered</p>
                <p className="font-body text-xs text-gray-400">From intimate gatherings to large-scale productions</p>
              </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-300" />

            {/* Stat 2 */}
            <div className="flex items-start gap-6">
              <Copy type="slide">
                <span className="font-title text-7xl text-black leading-none">98%</span>
              </Copy>
              <div className="flex flex-col justify-center gap-1 pt-2">
                <p className="font-body text-sm font-medium text-black">Client Satisfaction Rate</p>
                <p className="font-body text-xs text-gray-400">Built on trust, consistency, and attention to detail</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About
