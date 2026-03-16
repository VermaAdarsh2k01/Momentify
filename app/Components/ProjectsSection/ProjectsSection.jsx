"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { portfolioItems } from "../../services/servicesData";
import TextBlock from "../TextBlock/TextBlock";

// Map portfolio data (same as ImageReveal) to carousel format
const projects = portfolioItems.map((item, i) => ({
  id: item.id,
  image: item.mediaUrl,
  title: item.title,
  description: item.description,
  aspectClass: i % 2 === 0 ? "aspect-[4/3]" : "aspect-[3/4]",
}));

const CARD_WIDTH = 320;
const CARD_GAP = 16;

export default function ProjectsSection() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalCards = projects.length;
    const step = CARD_WIDTH + CARD_GAP;
    const totalWidth = totalCards * step;

    const tween = gsap.fromTo(
      track,
      { x: 0 },
      {
        x: -totalWidth,
        duration: 20,
        ease: "none",
        repeat: -1,
      }
    );

    return () => {
      tween.kill();
    };
  }, []);

  // Duplicate the list so the marquee scrolls seamlessly
  const marqueeProjects = [...projects, ...projects];

  return (
    <section className="py-16 flex flex-col justify-between min-h-[100svh]">
      <TextBlock
        title="Our recent projects"
        body="Explore a selection of recent work that showcases how we capture and elevate meaningful moments for our clients."
        className="mb-16"
      />
      <div className="overflow-hidden w-full">
        <div
          ref={trackRef}
          className="flex gap-4 will-change-transform"
          style={{ width: 'max-content' }}
        >
          {marqueeProjects.map((project, index) => (
            <CarouselCard
              key={`${project.id}-${index}`}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CarouselCard({ project }) {
  return (
    <div
      className="shrink-0 rounded-3xl overflow-hidden bg-[#eeeeee] flex flex-col h-fit"
      style={{ width: `${CARD_WIDTH}px` }}
    >
      <div className={`w-full ${project.aspectClass} overflow-hidden p-[0.4rem] `}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-2xl"
          loading="lazy"
        />
      </div>
      <div className="px-3 py-2 flex flex-col gap-1">
        <h3 className="text-base font-semibold text-gray-900 leading-snug">
          {project.title}
        </h3>
        {/* <p className="text-xs text-gray-500 leading-relaxed">
          {project.description}
        </p> */}
      </div>
    </div>
  );
}
