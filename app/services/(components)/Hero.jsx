"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const titlesContainerRef = useRef(null);
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

    const titlesContainer = titlesContainerRef.current;
    const imagesContainer = imagesContainerRef.current;
    const moveDistance = window.innerWidth * 3;

    // Create image cards dynamically
    for (let i = 1; i <= 10; i++) {
      const card = document.createElement("div");
      card.className = `card card-${i} absolute w-[200px] h-[200px] rounded-[2em] bg-gray-300 overflow-hidden`;
      card.style.transformStyle = "preserve-3d";
      card.style.willChange = "transform";

      const img = document.createElement("img");
      img.src = `/api/placeholder/200/200?text=Image${i}`;
      img.alt = `Image ${i}`;
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
      end: `+=${window.innerHeight * 5}px`,
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const xPosition = -moveDistance * self.progress;
        gsap.set(titlesContainer, {
          x: xPosition,
        });

        const velocity = self.getVelocity();
        const normalizedVelocity = velocity / Math.abs(velocity) || 0;
        const maxOffset = 30;
        const currentSpeed = Math.min(Math.abs(velocity / 500), maxOffset);

        const isAtEdge = self.progress <= 0 || self.progress >= 1;

        document.querySelectorAll(".title").forEach((titleContainer) => {
          const title1 = titleContainer.querySelector(".title-1");
          const title2 = titleContainer.querySelector(".title-2");
          const title3 = titleContainer.querySelector(".title-3");

          if (isAtEdge) {
            gsap.to([title1, title2], {
              xPercent: -50,
              x: 0,
              duration: 0.3,
              ease: "power2.out",
              overwrite: true,
            });
          } else {
            const baseOffset = normalizedVelocity * currentSpeed;

            gsap.to(title1, {
              xPercent: -50,
              x: `${baseOffset * 4}px`,
              duration: 0.2,
              ease: "power1.out",
              overwrite: "auto",
            });

            gsap.to(title2, {
              xPercent: -50,
              x: `${baseOffset * 2}px`,
              duration: 0.2,
              ease: "power1.out",
              overwrite: "auto",
            });
          }

          gsap.set(title3, {
            xPercent: -50,
            x: 0,
          });
        });

        cards.forEach((card, index) => {
          const staggerOffset = index * 0.075;
          const scaledProgress = (self.progress - staggerOffset) * 3;
          const individualProgress = Math.max(0, Math.min(1, scaledProgress));
          const targetZ = index === cards.length - 1 ? 1500 : 2000;
          const newZ = -50000 + (targetZ + 50000) * individualProgress;
          const scaleProgress = Math.min(1, individualProgress * 10);
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
        className="relative w-full h-screen overflow-hidden bg-[#fffef8] "
      >
        {/* Titles Container */}
        <div 
          ref={titlesContainerRef}
          className="absolute top-0 left-0 w-[400vw] h-screen flex"
          style={{ willChange: "transform" }}
        >
          {/* Title 1 - Showcase Hub */}
          <div className="title relative flex-1 flex justify-center items-center">
            <h1 className="title-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[9vw] italic font-medium text-[#dafa6c]" style={{ willChange: "transform" }}>
              Showcase Hub
            </h1>
            <h1 className="title-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[9vw] italic font-medium text-[#10d0f4]" style={{ willChange: "transform" }}>
              Showcase Hub
            </h1>
            <h1 className="title-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[9vw] italic font-medium text-[#1f1f1f]" style={{ willChange: "transform" }}>
              Showcase Hub
            </h1>
          </div>

          {/* Title 2 - Nova Stream */}
          <div className="title relative flex-1 flex justify-center items-center">
            <h1 className="title-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[9vw] italic font-medium text-[#dafa6c]" style={{ willChange: "transform" }}>
              Nova Stream
            </h1>
            <h1 className="title-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[9vw] italic font-medium text-[#10d0f4]" style={{ willChange: "transform" }}>
              Nova Stream
            </h1>
            <h1 className="title-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[9vw] italic font-medium text-[#1f1f1f]" style={{ willChange: "transform" }}>
              Nova Stream
            </h1>
          </div>

          {/* Title 3 - Circle 30 */}
          <div className="title relative flex-1 flex justify-center items-center">
            <h1 className="title-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[9vw] italic font-medium text-[#dafa6c]" style={{ willChange: "transform" }}>
              Circle 30
            </h1>
            <h1 className="title-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[9vw] italic font-medium text-[#10d0f4]" style={{ willChange: "transform" }}>
              Circle 30
            </h1>
            <h1 className="title-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[9vw] italic font-medium text-[#1f1f1f]" style={{ willChange: "transform" }}>
              Circle 30
            </h1>
          </div>

          {/* Title 4 - Bites & Banter */}
          <div className="title relative flex-1 flex justify-center items-center">
            <h1 className="title-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[9vw] italic font-medium text-[#dafa6c]" style={{ willChange: "transform" }}>
              Bites & Banter
            </h1>
            <h1 className="title-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[9vw] italic font-medium text-[#10d0f4]" style={{ willChange: "transform" }}>
              Bites & Banter
            </h1>
            <h1 className="title-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[9vw] italic font-medium text-[#1f1f1f]" style={{ willChange: "transform" }}>
              Bites & Banter
            </h1>
          </div>
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