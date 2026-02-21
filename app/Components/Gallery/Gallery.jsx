"use client";
import React from "react";
import { motion } from "framer-motion";
import Copy from "../TextAnimation/Copy";

const Gallery = () => {
  const galleryImages = [
    { id: 1, src: "/gallery/1.jpeg", alt: "Gallery image 1" },
    { id: 2, src: "/gallery/2.jpeg", alt: "Gallery image 2" },
    { id: 3, src: "/gallery/3.jpeg", alt: "Gallery image 3" },
    { id: 4, src: "/gallery/4.jpeg", alt: "Gallery image 4" },
    { id: 5, src: "/gallery/5.jpeg", alt: "Gallery image 5" },
    { id: 6, src: "/gallery/6.jpeg", alt: "Gallery image 6" }
  ];

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

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          layout
        >
          {galleryImages.map((image, index) => (
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
              {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <p className="text-white font-title text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                  {image.alt}
                </p>
              </div> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
