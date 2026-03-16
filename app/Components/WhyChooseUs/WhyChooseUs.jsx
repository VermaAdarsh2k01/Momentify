"use client";
import React from "react";
import Link from "next/link";
import { Monitor, Palette, BarChart2, Lightbulb, Megaphone, ShieldCheck, ChevronRight, Star , SendToBack } from "lucide-react";
import Copy from "../TextAnimation/Copy";
import TextBlock from "../TextBlock/TextBlock";

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
    <section
      className="bg-white py-20 lg:py-28 border-t border-gray-100"
      id="our-values"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8 w-full">
        <TextBlock
          title="Why clients choose us"
          body="See what sets us apart—from our creative process to the way we support you before, during, and after every project."
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 lg:gap-y-14">
          {whyChooseUsFeatures.map((service, index) => (
            <Copy key={service.title} delay={index * 0.08} type="slide">
              <div className="flex items-start gap-4 w-fit">
                <div className="shrink-0 ">
                  <div className="h-11 w-11 rounded-xl bg-[#8F1B32] text-white flex items-center justify-center shadow-lg">
                    {service.icon}
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1.5 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 ">
                    {service.description}
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
