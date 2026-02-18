"use client";
import React from "react";
import Copy from "../TextAnimation/Copy";

const WhyChooseUs = () => {
  const whyChooseUsFeatures = [
    {
      title: "Luxury Experience",
      description: "We specialize in creating high-end, sophisticated events that reflect your unique style and vision.",
      icon: "👑"
    },
    {
      title: "End-to-End Service",
      description: "From initial concept to final cleanup, we handle every aspect of your event with meticulous attention to detail.",
      icon: "🔄"
    },
    {
      title: "Personalized Approach",
      description: "Every event is tailored to your specific needs, ensuring a truly unique and personalized experience.",
      icon: "💎"
    },
    {
      title: "Expert Team",
      description: "Our experienced professionals bring creativity, expertise, and passion to every project we undertake.",
      icon: "🎨"
    },
    {
      title: "Stress-Free Planning",
      description: "We take care of all the logistics so you can enjoy the planning process and your special day.",
      icon: "🧘‍♀️"
    },
    {
      title: "Unforgettable Results",
      description: "We create events that exceed expectations and leave lasting impressions on you and your guests.",
      icon: "⭐"
    }
  ];

  return (
    <section className="bg-white min-h-screen flex items-center py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <Copy delay={0} type="slide">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-black text-5xl lg:text-7xl xl:text-8xl font-title leading-[1] mb-6">
              Why Choose Us
            </h2>
            <div className="flex justify-center mb-8">
              <img 
                src="/highlight.svg" 
                alt="Highlight decoration" 
                className="w-40 h-auto lg:w-48 xl:w-56 invert"
              />
            </div>
            <p className="text-black text-lg lg:text-xl font-body max-w-3xl mx-auto leading-relaxed">
              Discover what sets us apart in creating extraordinary events and unforgettable experiences
            </p>
          </div>
        </Copy>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {whyChooseUsFeatures.map((feature, index) => (
            <Copy key={feature.title} delay={index * 0.1} type="slide">
              <div className="text-center group hover:bg-gray-50 p-6 rounded-2xl transition-all duration-300">
                <div className="text-5xl lg:text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-black text-xl lg:text-2xl font-title mb-4 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-700 font-body text-sm lg:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Copy>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;