"use client";
import React from "react";
import Copy from "../TextAnimation/Copy";

const CTABanner = () => {
  return (
    <section className="bg-[#8F1B32] min-h-screen flex items-center py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center w-full">
        <Copy delay={0} type="slide">
          <h2 className="text-white text-4xl lg:text-6xl xl:text-7xl font-title leading-[1] mb-6">
            Ready to Create Your Perfect Event?
          </h2>
        </Copy>
        
        <Copy delay={0.2} type="slide">
          <p className="text-white text-lg lg:text-xl font-body mb-12 leading-relaxed max-w-2xl mx-auto">
            Let's bring your vision to life. Contact us today for a personalized consultation and start planning your unforgettable celebration.
          </p>
        </Copy>
        
        <Copy delay={0.4} type="slide">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-[#8F1B32] px-8 py-4 rounded-full font-title text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-title text-lg hover:bg-white hover:text-[#8F1B32] transition-all duration-300 transform hover:scale-105">
              View Our Portfolio
            </button>
          </div>
        </Copy>
      </div>
    </section>
  );
};

export default CTABanner;