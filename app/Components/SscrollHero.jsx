"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";
import AboutSection from "./AboutSection/About.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function WaabiScrollAnimation() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);

    const ticker = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    const heroCopySplit = SplitText.create(".hero-copy h3", {
      type: "words",
      wordsClass: "word",
    });

    let isHeroCopyHidden = false;

    const heroTrigger = ScrollTrigger.create({
      trigger: ".hero",
      start: "top top",
      end: `+${window.innerHeight * 3.5}px`,
      pin: true,
      pinSpacing: false,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        const heroHeaderProgress = Math.min(progress / 0.29, 1);
        gsap.set(".hero-header", { yPercent: -heroHeaderProgress * 100 });

        const heroWordsProgress = Math.max(
          0,
          Math.min((progress - 0.29) / 0.21, 1),
        );
        const totalWords = heroCopySplit.words.length;
        heroCopySplit.words.forEach((word, i) => {
          const wordStart = i / totalWords;
          const wordEnd = (i + 1) / totalWords;
          const wordOpacity = Math.max(
            0,
            Math.min((heroWordsProgress - wordStart) / (wordEnd - wordStart), 1),
          );
          gsap.set(word, { opacity: wordOpacity });
        });

        if (progress > 0.64 && !isHeroCopyHidden) {
          isHeroCopyHidden = true;
          gsap.to(".hero-copy h3", { opacity: 0, duration: 0.2 });
        } else if (progress <= 0.64 && isHeroCopyHidden) {
          isHeroCopyHidden = false;
          gsap.to(".hero-copy h3", { opacity: 1, duration: 0.2 });
        }

        const heroImgProgress = Math.max(
          0,
          Math.min((progress - 0.71) / 0.29, 1),
        );
        const heroImgWidth = gsap.utils.interpolate(
          window.innerWidth,
          150,
          heroImgProgress,
        );
        const heroImgHeight = gsap.utils.interpolate(
          window.innerHeight,
          150,
          heroImgProgress,
        );
        const heroImgBorderRadius = gsap.utils.interpolate(
          0,
          10,
          heroImgProgress,
        );
        gsap.set(".hero-img", {
          width: heroImgWidth,
          height: heroImgHeight,
          borderRadius: heroImgBorderRadius,
        });
      },
    });

    const aboutImgCols = [
      { id: "#about-imgs-col-1", y: -500 },
      { id: "#about-imgs-col-2", y: -250 },
      { id: "#about-imgs-col-3", y: -250 },
      { id: "#about-imgs-col-4", y: -500 },
    ];

    const aboutTweens = aboutImgCols.map(({ id, y }) =>
      gsap.to(id, {
        y,
        scrollTrigger: {
          trigger: ".about",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }),
    );

    return () => {
      heroTrigger.kill();
      aboutTweens.forEach((tween) => tween.kill());
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.ticker.remove(ticker);
      lenis.destroy();
      if (heroCopySplit && heroCopySplit.revert) {
        heroCopySplit.revert();
      }
    };
  }, []);

  return (
    <main className="bg-[#e3e3db] font-[Inter,sans-serif] overflow-x-hidden">
      {/* HERO */}
      <section className="hero relative w-full h-[100svh]">
        <div
          className="hero-img absolute top-1/2 left-1/2 overflow-hidden"
          style={{
            transform: "translate(-50%, -50%)",
            willChange: "transform, opacity, width, height",
          }}
        >
          <video
            src="/hero_vid.mp4"
            autoPlay muted loop
            alt=""
            className="w-full h-full object-cover z-40"
          />
        </div>

        <div
          className="hero-header absolute inset-0 flex items-end px-8 py-16 text-white md:px-16"
          style={{ willChange: "transform, opacity, width, height" }}
        >
          <h1 className="w-full text-3xl leading-none tracking-[-0.05rem] font-normal md:w-3/4 md:text-[5rem]">
            Live the Events that you have always dreamed of
          </h1>
        </div>

        <div
          className="hero-copy absolute inset-0 flex items-end px-8 py-16 text-white md:px-16"
          style={{ willChange: "transform, opacity, width, height" }}
        >
          <h3 className="w-full text-2xl leading-none tracking-[-0.05rem] font-normal md:w-1/2 md:text-3xl">
            Experience for people who are looking for the best
          </h3>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about relative mt-[275svh] flex h-[100svh] w-full items-center justify-center text-center">
        <div className="about-images  flex h-full w-full items-center justify-between px-8 py-16 md:px-16">
          <div
            id="about-imgs-col-1"
            className="about-imgs-col relative flex h-[125%] flex-col justify-around"
            style={{ willChange: "transform" }}
          >
            {["/services/babyshower.jpg", "/services/corporate.jpg", "/services/cultural.jpg", "/services/holiday.jpg"].map(
              (src, idx) => (
                <div
                  key={idx}
                  className="img h-[90px] w-[90px] overflow-hidden rounded-[10px] opacity-100 saturate-100 lg:h-[140px] lg:w-[140px] lg:opacity-100 lg:saturate-100 -z!"
                >
                  <img
                    src={src}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              ),
            )}
          </div>

          <div
            id="about-imgs-col-2"
            className="about-imgs-col hidden lg:flex relative h-[125%] flex-col justify-around translate-y-[500px] md:-translate-x-[225px]"
            style={{ willChange: "transform" }}
          >
            {["/services/music.jpg", "/services/social.jpg", "/services/wedding.jpg", "/services/holi.jpg"].map(
              (src, idx) => (
                <div
                  key={idx}
                  className="img h-[90px] w-[90px] overflow-hidden rounded-[10px] opacity-25 saturate-0 lg:h-[140px] lg:w-[140px] lg:opacity-100 lg:saturate-100"
                >
                  <img
                    src={src}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              ),
            )}
          </div>

          <div
            id="about-imgs-col-3"
            className="about-imgs-col hidden lg:flex relative h-[125%] flex-col justify-around translate-y-[500px] md:translate-x-[225px]"
            style={{ willChange: "transform" }}
          >
            {["/services/music.jpg", "/services/social.jpg", "/services/wedding.jpg", "/services/holi.jpg"].map(
              (src, idx) => (
                <div
                  key={idx}
                  className="img h-[90px] w-[90px] overflow-hidden rounded-[10px] opacity-25 saturate-0 lg:h-[140px] lg:w-[140px] lg:opacity-100 lg:saturate-100"
                >
                  <img
                    src={src}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              ),
            )}
          </div>

          <div
            id="about-imgs-col-4"
            className="about-imgs-col relative flex h-[125%] flex-col justify-around"
            style={{ willChange: "transform" }}
          >
            {["/services/babyshower.jpg", "/services/corporate.jpg", "/services/cultural.jpg", "/services/holiday.jpg"].map(
              (src, idx) => (
                <div
                  key={idx}
                  className="img h-[90px] w-[90px] overflow-hidden rounded-[10px] opacity-100 saturate-100 lg:h-[140px] lg:w-[140px] lg:opacity-100 lg:saturate-100"
                >
                  <img
                    src={src}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              ),
            )}
          </div>
        </div>

        <div className="about-header absolute left-1/2 top-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 px-8 md:w-2/5 md:px-0">
          <h3 className="text-2xl font-normal leading-none tracking-[-0.05rem] md:text-3xl">
            We are a team of professionals who are passionate about creating events that are unique and memorable.
          </h3>
        </div>
      </section>

      {/* OUTRO */}
      <AboutSection />
    </main>
  );
}