"use client";
import React from "react";
import Link from "next/link";
import { Monitor, Palette, BarChart2, Lightbulb, Megaphone, ShieldCheck, ChevronRight, Star , SendToBack } from "lucide-react";
import Copy from "../TextAnimation/Copy";

const whyChooseUsFeatures = [
  {
    title: "Luxury Experience",
    description: "We specialize in creating high-end, sophisticated events that reflect your unique style and vision.",
    icon: <Monitor size={28} strokeWidth={1.5} />,
    highlight: true,
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
    <section className="bg-white min-h-screen flex items-center py-20 lg:py-32" id="our-values">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 w-full">
        <Copy delay={0} type="slide">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-black text-4xl lg:text-5xl xl:text-6xl font-title font-bold leading-tight mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-gray-600 text-lg font-body max-w-2xl mx-auto leading-relaxed">
              Discover what sets us apart in creating extraordinary events and unforgettable experiences
            </p>
          </div>
        </Copy>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {whyChooseUsFeatures.map((service, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 flex flex-col justify-between border transition-all duration-200 group ${
              service.highlight
                ? "bg-[#8F1B32] text-white border-blue-600"
                : "bg-white text-gray-900 border-gray-200 hover:border-gray-300 hover:shadow-sm"
            }`}
          >
            <div>
              <div
                className={`mb-4 ${
                  service.highlight ? "text-white" : "text-gray-800"
                }`}
              >
                {service.icon}
              </div>
              <h3
                className={`text-base font-semibold mb-2 leading-snug ${
                  service.highlight ? "text-white" : "text-gray-900"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  service.highlight ? "text-blue-100" : "text-gray-500"
                }`}
              >
                {service.description}
              </p>
            </div>
            {/* <div className="mt-6">
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-all duration-150 ${
                  service.highlight
                    ? "text-white hover:gap-2"
                    : "text-gray-700 hover:text-blue-600 hover:gap-2"
                }`}
              >
                See details <ChevronRight size={14} />
              </button>
            </div> */}
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
