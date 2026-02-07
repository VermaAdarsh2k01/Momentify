"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Showcase.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Showcase = () => {
  const spotlightRef = useRef(null);
  const projectIndexRef = useRef(null);
  const projectImagesContainerRef = useRef(null);
  const projectNamesContainerRef = useRef(null);

  const projects = [
    { name: "Baby Showers", image: "/img1.jpg" },
    { name: "Birthday Parties", image: "/img2.jpg" },
    { name: "Graduation Parties", image: "/img3.jpg" },
    { name: "Wedding Receptions", image: "/img4.jpg" },
    { name: "Corporate Events", image: "/img5.jpg" },
    { name: "Bar Mitzvahs", image: "/img6.jpg" },
    { name: "Quinceañeras", image: "/img7.jpg" },
    { name: "Sweet 16s", image: "/img8.jpg" },
    { name: "Holiday Parties", image: "/img9.jpg" },
    { name: "Anniversary Parties", image: "/img10.jpg" },
  ];

  useEffect(() => {
    const spotlightSection = spotlightRef.current;
    const projectIndex = projectIndexRef.current;
    const projectImgs = spotlightSection.querySelectorAll(".project-img");
    const projectImagesContainer = projectImagesContainerRef.current;
    const projectNames = spotlightSection.querySelectorAll(".project-names p");
    const projectNamesContainer = projectNamesContainerRef.current;
    const totalProjectCount = projectNames.length;

    const spotlightSectionHeight = spotlightSection.offsetHeight;
    const spotlightSectionPadding = parseFloat(
      getComputedStyle(spotlightSection).padding,
    );
    const projectIndexHeight = projectIndex.offsetHeight;
    const containerHeight = projectNamesContainer.offsetHeight;
    const imagesHeight = projectImagesContainer.offsetHeight;

    const moveDistanceIndex =
      spotlightSectionHeight - spotlightSectionPadding * 2 - projectIndexHeight;
    const moveDistanceNames =
      spotlightSectionHeight - spotlightSectionPadding * 2 - containerHeight;
    const moveDistanceImages = window.innerHeight - imagesHeight;

    const imgActivationThreshold = window.innerHeight / 2;

    const scrollTrigger = ScrollTrigger.create({
      trigger: spotlightSection,
      start: "top top",
      end: `+=${window.innerHeight * 5}px`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const currentIndex = Math.min(
          Math.floor(progress * totalProjectCount) + 1,
          totalProjectCount,
        );

        projectIndex.textContent = `${String(currentIndex).padStart(
          2,
          "0",
        )}/${String(totalProjectCount).padStart(2, "0")}`;

        gsap.set(projectIndex, {
          y: progress * moveDistanceIndex,
        });

        gsap.set(projectImagesContainer, {
          y: progress * moveDistanceImages,
        });

        projectImgs.forEach((img) => {
          const imgRect = img.getBoundingClientRect();
          const imgTop = imgRect.top;
          const imgBottom = imgRect.bottom;

          if (
            imgTop <= imgActivationThreshold &&
            imgBottom >= imgActivationThreshold
          ) {
            gsap.set(img, {
              opacity: 1,
            });
          } else {
            gsap.set(img, {
              opacity: 0.5,
            });
          }
        });

        projectNames.forEach((p, index) => {
          const startProgress = index / totalProjectCount;
          const endProgress = (index + 1) / totalProjectCount;
          const projectProgress = Math.max(
            0,
            Math.min(
              1,
              (progress - startProgress) / (endProgress - startProgress),
            ),
          );

          gsap.set(p, {
            y: -projectProgress * moveDistanceNames,
          });

          if (projectProgress > 0 && projectProgress < 1) {
            gsap.set(p, {
              color: "#fff",
            });
          } else {
            gsap.set(p, {
              color: "#4a4a4a",
            });
          }
        });
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <div className="showcase-container">
      <section className="spotlight" ref={spotlightRef}>
        <div className="project-index hidden lg:block">
          <h1 ref={projectIndexRef}>01/10</h1>
        </div>

        <div className="project-images" ref={projectImagesContainerRef}>
          {projects.map((project, index) => (
            <div key={index} className="project-img rounded-2xl">
              <img src={project.image} alt={project.name} />
            </div>
          ))}
        </div>

        <div className="project-names" ref={projectNamesContainerRef}>
          {projects.map((project, index) => (
            <p key={index}>{project.name}</p>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Showcase;