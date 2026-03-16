"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardFlip from "@/components/kokonutui/card-flip";
import ContactSection from "@/app/Components/ContactSection/ContactSection";
import { portfolioItems } from "../servicesData";

gsap.registerPlugin(ScrollTrigger);

const ServicesContent = () => {
  const portfolioRef = useRef(null);
  const highlightsRef = useRef(null);

  useEffect(() => {
    // Portfolio cards animation
    gsap.fromTo(
      ".portfolio-card",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: portfolioRef.current,
          start: "top 80%",
        },
      }
    );

    // Highlights animation
    gsap.fromTo(
      ".highlight-item",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: highlightsRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const highlights = [
    {
      id: 1,
      image: "/api/placeholder/200/200",
      title: "Gourmet Catering",
      description: "Exquisite culinary experiences"
    },
    {
      id: 2,
      image: "/api/placeholder/200/200",
      title: "Pesto Chicken Salad",
      description: "Fresh and flavorful"
    },
    {
      id: 3,
      image: "/api/placeholder/200/200",
      title: "Premium Desserts",
      description: "Sweet endings to perfect events"
    },
    {
      id: 4,
      image: "/api/placeholder/200/200",
      title: "Artisan Appetizers",
      description: "Beautifully crafted starters"
    }
  ];

  return (
    <>
      {/* Services Section */}
      <section className="py-20 bg-[#8F1B32]" ref={portfolioRef}>
        <div className="max-w-6xl mx-auto px-5">

          <div className="grid grid-cols-1 gap-6 lg:gap-8">
            {portfolioItems.map((item) => (
              <div key={item.id} className="portfolio-card flex justify-center">
                <CardFlip
                  title={item.title}
                  subtitle={item.subtitle}
                  description={item.description}
                  features={item.features}
                  mediaUrl={item.mediaUrl}
                  mediaType={item.mediaType}
                  scale={false}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      {/* <section className="py-20 bg-[#faf9f6]" ref={highlightsRef}>
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2c2c2c] mb-4 tracking-tight">Highlights That Define Excellence</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every detail matters in creating extraordinary experiences that leave lasting impressions
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:gap-8 mt-10">
            {highlights.map((highlight) => (
              <div 
                key={highlight.id} 
                className="highlight-item bg-white rounded-2xl p-6 lg:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-5">
                  <Image
                    src={highlight.image}
                    alt={highlight.title}
                    width={120}
                    height={120}
                    className="w-28 h-36 lg:w-32 lg:h-32 rounded-xl object-cover mx-auto"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg lg:text-xl font-bold text-[#2c2c2c]">{highlight.title}</h4>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <ContactSection/>
    </>
  );
}

export default ServicesContent;