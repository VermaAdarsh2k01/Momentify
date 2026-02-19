"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

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

  const portfolioItems = [
    {
      id: 1,
      title: "Annual Sales Conference",
      client: "XYZ Corporate",
      description: "A comprehensive corporate event featuring keynote speakers, networking sessions, and product launches. We managed everything from venue selection to post-event analytics.",
      image: "/api/placeholder/400/300",
      category: "Corporate Events",
      link: "#"
    },
    {
      id: 2,
      title: "Elegant Garden Wedding",
      client: "John and Emily Smith",
      description: "An enchanting outdoor wedding celebration with custom floral arrangements, live entertainment, and gourmet catering in a picturesque garden setting.",
      image: "/api/placeholder/400/300",
      category: "Weddings",
      link: "#"
    },
    {
      id: 3,
      title: "Multi-Day Family Reunion",
      client: "Smith Family Reunion",
      description: "A memorable three-day family gathering featuring activities for all ages, catered meals, and professional photography to capture precious moments.",
      image: "/api/placeholder/400/300",
      category: "Family Events",
      link: "#"
    },
    {
      id: 4,
      title: "Product Launch Campaign",
      client: "ABC Cosmetics",
      description: "An exclusive product launch event with influencer partnerships, media coverage, and immersive brand experiences that generated significant buzz.",
      image: "/api/placeholder/400/300",
      category: "Product Launches",
      link: "#"
    }
  ];

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
      {/* Portfolio Section */}
      <section className="py-20 bg-white" ref={portfolioRef}>
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2c2c2c] mb-4 tracking-tight">Our Portfolio</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our recent work and the exceptional events we've brought to life
            </p>
          </div>

          <div className="flex flex-col gap-16">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className={`portfolio-card grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={`relative rounded-2xl overflow-hidden aspect-[4/3] ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-5 right-5">
                    <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold text-gray-800">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className={`space-y-4 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#2c2c2c] leading-tight">{item.title}</h3>
                  <p className="text-base font-semibold text-[#d4af37]">Client: {item.client}</p>
                  <p className="text-base text-gray-600 leading-relaxed">{item.description}</p>
                  <Link 
                    href={item.link} 
                    className="inline-flex items-center text-base font-semibold text-[#d4af37] hover:text-[#b8941f] transition-all duration-300 hover:translate-x-1"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-[#faf9f6]" ref={highlightsRef}>
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2c2c2c] mb-4 tracking-tight">Highlights That Define Excellence</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every detail matters in creating extraordinary experiences that leave lasting impressions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-10">
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
                    className="w-28 h-28 lg:w-32 lg:h-32 rounded-xl object-cover mx-auto"
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#2c2c2c] to-[#1a1a1a] text-center">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">Ready to Create Your Perfect Event?</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Let's discuss how we can bring your vision to life with our comprehensive event planning services.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-[#d4af37] hover:bg-[#b8941f] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesContent;