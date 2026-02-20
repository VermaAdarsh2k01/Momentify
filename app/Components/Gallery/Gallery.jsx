"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Copy from "../TextAnimation/Copy";

const Gallery = () => {
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState("all");

  // Gallery data
  const galleryImages = [
    { id: 1, category: "weddings", src: "/gallery/wedding1.jpg", alt: "Elegant Wedding Ceremony" },
    { id: 2, category: "corporate", src: "/gallery/corporate1.jpg", alt: "Corporate Event Setup" },
    { id: 3, category: "social", src: "/gallery/social1.jpg", alt: "Social Gathering" },
    { id: 4, category: "weddings", src: "/gallery/wedding2.jpg", alt: "Wedding Reception" },
    { id: 5, category: "corporate", src: "/gallery/corporate2.jpg", alt: "Business Conference" },
    { id: 6, category: "social", src: "/gallery/social2.jpg", alt: "Birthday Celebration" },
    { id: 7, category: "weddings", src: "/gallery/wedding3.jpg", alt: "Bridal Setup" },
    { id: 8, category: "corporate", src: "/gallery/corporate3.jpg", alt: "Product Launch" },
    { id: 9, category: "social", src: "/gallery/social3.jpg", alt: "Anniversary Party" }
  ];

  const galleryCategories = [
    { id: "all", label: "All Events" },
    { id: "weddings", label: "Weddings" },
    { id: "corporate", label: "Corporate" },
    { id: "social", label: "Social Events" }
  ];

  const filteredGalleryImages = selectedGalleryCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedGalleryCategory);

  return (
    <section className="bg-[#8F1B32] min-h-screen flex items-center py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <Copy delay={0} type="slide">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-white text-5xl lg:text-7xl xl:text-8xl font-title leading-[1] mb-6">
              Gallery
            </h2>
            <div className="flex justify-center mb-8">
              <img 
                src="/highlight.svg" 
                alt="Highlight decoration" 
                className="w-40 h-auto lg:w-48 xl:w-56"
              />
            </div>
            <p className="text-white text-lg lg:text-xl font-body max-w-3xl mx-auto leading-relaxed mb-12">
              Explore our portfolio of stunning events and celebrations
            </p>
          </div>
        </Copy>

        {/* Gallery Filter */}
        <Copy delay={0.2} type="slide">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedGalleryCategory(category.id)}
                className={`px-6 py-3 rounded-full font-body text-sm lg:text-base transition-all duration-300 ${
                  selectedGalleryCategory === category.id
                    ? "bg-white text-black"
                    : "bg-transparent text-white border border-white hover:bg-white hover:text-black"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </Copy>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          layout
        >
          {filteredGalleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-square bg-gray-800"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <p className="text-white font-title text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;