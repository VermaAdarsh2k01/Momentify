"use client";
import React from "react";
import { Monitor, Lightbulb, Megaphone, ShieldCheck, Star, SendToBack } from "lucide-react";
import Copy from "../TextAnimation/Copy";

const whyChooseUsFeatures = [
  {
    title: "Luxury Experience",
    description: "We specialize in creating high-end, sophisticated events that reflect your unique style and vision.",
    icon: <Monitor size={28} strokeWidth={1.5} />,
  },
  {
    title: "End-to-End Service",
    description: "From initial concept to final cleanup, we handle every aspect of your event with meticulous attention to detail.",
    icon: <SendToBack size={28} strokeWidth={1.5} />,
  },
  {
    title: "Personalized Approach",
    description: "Every event is tailored to your specific needs, ensuring a truly unique and personalized experience.",
    icon: <Lightbulb size={28} strokeWidth={1.5} />,
  },
  {
    title: "Expert Team",
    description: "Our experienced professionals bring creativity, expertise, and passion to every project we undertake.",
    icon: <Megaphone size={28} strokeWidth={1.5} />,
  },
  {
    title: "Stress-Free Planning",
    description: "We take care of all the logistics so you can enjoy the planning process and your special day.",
    icon: <ShieldCheck size={28} strokeWidth={1.5} />,
  },
  {
    title: "Unforgettable Results",
    description: "We create events that exceed expectations and leave lasting impressions on you and your guests.",
    icon: <Star size={28} strokeWidth={1.5} />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-screen bg-white py-24 px-4" id="our-values">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex flex-col items-center mb-16">
          <span className="font-body text-xs tracking-[0.18em] border border-gray-300 rounded-full px-5 py-1.5 text-gray-600 mb-6 uppercase">
            Why Us
          </span>
          <Copy delay={0.5} type="slide">
            <p className="font-body text-2xl text-black text-center max-w-lg">
              From our creative process to every last detail — here's what sets us apart and keeps our clients coming back.
            </p>
          </Copy>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {whyChooseUsFeatures.map((feature, index) => (
            <Copy key={feature.title} delay={index * 0.08} type="slide">
              <div className="bg-[#f2f2f0] rounded-2xl p-6 flex flex-col gap-4 h-full">
                <div className="h-11 w-11 rounded-xl bg-[#8F1B32] shadow-md shadow-[#8F1B32]/30 text-white flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-body text-sm font-semibold text-black mb-1.5 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="font-body text-sm text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Copy>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
