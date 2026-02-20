"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Copy from "@/app/Components/TextAnimation/Copy";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const imagesContainerRef = useRef(null);
  const stickyRef = useRef(null);

  useEffect(() => {
    const cardPositions = [
      { top: "30%", left: "55%" },
      { top: "20%", left: "25%" },
      { top: "50%", left: "10%" },
      { top: "60%", left: "40%" },
      { top: "30%", left: "30%" },
      { top: "60%", left: "60%" },
      { top: "20%", left: "50%" },
      { top: "60%", left: "10%" },
      { top: "20%", left: "40%" },
      { top: "45%", left: "55%" },
    ];

    // Using images from trail-images folder
    const imagePaths = [
      "/trail-images/img1.jpg",
      "/trail-images/img2.jpg", 
      "/trail-images/img3.jpg",
      "/trail-images/img4.jpg",
      "/trail-images/img5.jpg",
      "/trail-images/img6.jpg",
    ];

    const imagesContainer = imagesContainerRef.current;

    // Create image cards dynamically
    for (let i = 1; i <= 6; i++) {
      const card = document.createElement("div");
      card.className = `card card-${i} absolute w-[250px] h-[250px] rounded-[2em] bg-gray-300 overflow-hidden`;
      card.style.transformStyle = "preserve-3d";
      card.style.willChange = "transform";

      const img = document.createElement("img");
      img.src = imagePaths[i - 1] || `/trail-images/img${i}.jpg`; // Uses imagePaths array or fallback
      img.alt = `Service Image ${i}`;
      img.className = "w-full h-full object-cover";
      card.appendChild(img);

      const position = cardPositions[i - 1];
      card.style.top = position.top;
      card.style.left = position.left;

      imagesContainer.appendChild(card);
    }

    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      gsap.set(card, {
        z: -50000,
        scale: 0,
      });
    });

    ScrollTrigger.create({
      trigger: stickyRef.current,
      start: "top top",
      end: `+=${window.innerHeight * 2}px`,
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        // Only animate the images, no title movement
        cards.forEach((card, index) => {
          const staggerOffset = index * 0.1;
          const scaledProgress = (self.progress - staggerOffset) * 2;
          const individualProgress = Math.max(0, Math.min(1, scaledProgress));
          const targetZ = index === cards.length - 1 ? 1500 : 2000;
          const newZ = -50000 + (targetZ + 50000) * individualProgress;
          const scaleProgress = Math.min(1, individualProgress * 8);
          const scale = Math.max(0, Math.min(1, scaleProgress));

          gsap.set(card, {
            z: newZ,
            scale: scale,
          });
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Sticky Section */}
      <section 
        ref={stickyRef}
        className="relative w-full h-screen overflow-hidden bg-[#8F1B32] "
      >
        {/* Fixed Title Container */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <Copy delay={0.5} type="slide">
          <h1 className="font-title text-[3rem] text-nowrap xl:text-[7vw] font-medium text-white text-center leading-[1] ">
            Our Services
          </h1>
          <div className="flex justify-center mb-8">
            <img 
              src="/highlight.svg" 
              alt="Highlight decoration" 
              className="w-40 h-auto lg:w-48 xl:w-56"
            />
          </div>
          </Copy>

          <Copy delay={1} type="slide">
            <p className="font-body text-white text-center text-lg xl:text-2xl xl:mt-10 w-full">
              From intimate celebrations to grand weddings and global corporate events, we bring together creativity, cultural understanding, and international standards of execution to transform visions into remarkable realities
            </p>
          </Copy>
        </div>

        {/* Images Container */}
        <div 
          ref={imagesContainerRef}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vh] -z-10"
          style={{ 
            transformStyle: "preserve-3d", 
            perspective: "2000px" 
          }}
        >
          {/* Cards will be dynamically created here */}
        </div>
      </section>
    </>
  );
};

export default Hero;