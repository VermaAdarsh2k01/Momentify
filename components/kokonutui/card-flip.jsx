"use client";;
/**
 * @author: @dorianbaffier
 * @description: Card Flip
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { ArrowRight, Repeat2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import ContactButton from "@/app/Components/ContactButton/ContactButton";

export default function CardFlip({
  title = "Design Systems",
  subtitle = "Explore the fundamentals",
  description = "Dive deep into the world of modern UI/UX design.",
  features = ["UI/UX", "Modern Design", "Tailwind CSS", "Kokonut UI"],
  mediaUrl = null,
  mediaType = "image" // "image" or "video"
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    // Only use hover on larger screens (desktop)
    if (window.innerWidth >= 768) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setIsHovered(false);
    }
  };

  const handleClick = () => {
    // Only use click on smaller screens (mobile/tablet)
    if (window.innerWidth < 768) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div
      className="group relative h-[400px] md:h-[320px] w-full [perspective:2000px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div
        className={cn(
          "relative h-full w-full",
          "[transform-style:preserve-3d]",
          "transition-all duration-700",
          (isFlipped || isHovered)
            ? "[transform:rotateY(180deg)]"
            : "[transform:rotateY(0deg)]"
        )}>
        <div
          className={cn(
            "absolute inset-0 h-full w-full",
            "[backface-visibility:hidden] [transform:rotateY(0deg)]",
            "overflow-hidden rounded-2xl",
            "bg-zinc-50",
            "border border-zinc-200",
            "shadow-xs",
            "transition-all duration-700",
            "group-hover:shadow-lg",
            (isFlipped || isHovered) ? "opacity-0" : "opacity-100"
          )}
          onClick={handleClick}>
          <div className="relative h-full p-6 bg-gradient-to-b from-zinc-100 to-white">
            {/* Desktop Layout - Side by side */}
            <div className="hidden md:flex h-full items-center justify-between">
              {/* Left side - Title and Description */}
              <div className="max-w-md space-y-4">
                <h3 className="font-title-bold text-2xl xl:text-7xl text-black leading-tight tracking-tight transition-all duration-500 ease-out-expo group-hover:translate-y-[-2px]">
                  {title}
                </h3>
                <p className="text-base text-zinc-600 leading-relaxed transition-all delay-[50ms] duration-500 ease-out-expo group-hover:translate-y-[-2px]">
                  {description}
                </p>
              </div>

              {/* Right side - Media Container */}
              <div className="flex-shrink-0 w-56 h-full">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-zinc-200 transition-all duration-500 group-hover:scale-105">
                  {mediaUrl ? (
                    mediaType === "video" ? (
                      <video
                        src={mediaUrl}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <img
                        src={mediaUrl}
                        alt={title}
                        className="w-full h-full object-cover"
                      />
                    )
                  ) : null}
                </div>
              </div>
            </div>

            {/* Mobile Layout - Top to bottom */}
            <div className="md:hidden flex flex-col h-full justify-between">
              {/* Top - Media Container */}
              <div className="flex-shrink-0 w-full h-40">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-zinc-200 transition-all duration-500 group-hover:scale-105">
                  {mediaUrl ? (
                    mediaType === "video" ? (
                      <video
                        src={mediaUrl}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <img
                        src={mediaUrl}
                        alt={title}
                        className="w-full h-full object-cover"
                      />
                    )
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-orange-500/40"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom - Title and Description */}
              <div className=" space-y-3">
                <h3 className="font-title text-3xl text-zinc-900 leading-tight tracking-tight transition-all duration-500 ease-out-expo group-hover:translate-y-[-2px]">
                  {title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed transition-all delay-[50ms] duration-500 ease-out-expo group-hover:translate-y-[-2px]">
                  {description}
                </p>
              </div>
            </div>

            
            
          </div>
        </div>

        {/* Back of card */}
        <div
          className={cn(
            "absolute inset-0 h-full w-full",
            "[backface-visibility:hidden] [transform:rotateY(180deg)]",
            "rounded-2xl p-6",
            "bg-gradient-to-b from-zinc-100 to-white",
            "border border-zinc-200",
            "shadow-xs",
            "flex flex-col",
            "transition-all duration-700",
            "group-hover:shadow-lg",
            (isFlipped || isHovered) ? "opacity-100" : "opacity-0"
          )}
          onClick={handleClick}>
          <div className="flex-1 space-y-6">
            <div className="space-y-2 grid grid-cols-1 xl:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  className="flex items-center gap-2 text-lg xl:text-3xl text-zinc-700 transition-all duration-500"
                  key={feature}
                  style={{
                    transform: (isFlipped || isHovered)
                      ? "translateX(0)"
                      : "translateX(-10px)",
                    opacity: (isFlipped || isHovered) ? 1 : 0,
                    transitionDelay: `${index * 100 + 200}ms`,
                  }}>
                  <ArrowRight className="h-3 w-3 text-red-500" />
                  <span className="font-title">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 border-zinc-200 border-t pt-4">
            <ContactButton 
              buttonText="Contact Us"
              modalTitle="Let's Plan Your Perfect Event"
              modalSubtitle="Tell us about your event vision and we'll help bring it to life."
              className="w-full"
              scale={false}
              size="sm"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
                @keyframes scale {
                    0% {
                        transform: scale(2);
                        opacity: 0;
                        box-shadow: 0px 0px 50px rgba(255, 165, 0, 0.5);
                    }
                    50% {
                        transform: translate(0px, -5px) scale(1);
                        opacity: 1;
                        box-shadow: 0px 8px 20px rgba(255, 165, 0, 0.5);
                    }
                    100% {
                        transform: translate(0px, 5px) scale(0.1);
                        opacity: 0;
                        box-shadow: 0px 10px 20px rgba(255, 165, 0, 0);
                    }
                }
            `}</style>
    </div>
  );
}
