"use client";
import "./Copy.css";
import React, { useRef, ReactNode } from "react";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);


export default function Copy({
  children,
  animateOnScroll = true,
  delay = 0,
  type = "slide",
}) {
  const containerRef = useRef(null);
  const elementRefs = useRef([]);
  const splitRefs = useRef([]);


  useGSAP(
    () => {
      if (!containerRef.current) return;

      const initializeSplitText = () => {

        splitRefs.current = [];
        elementRefs.current = [];

        let elements= [];
        if (containerRef.current?.hasAttribute("data-copy-wrapper")) {
          elements = Array.from(containerRef.current.children);
        } else if (containerRef.current) {
          elements = [containerRef.current];
        }

        if (type === "slide") {
          const allLines = [];

          elements.forEach((element) => {
            elementRefs.current.push(element);

            const split = SplitText.create(element , {
              type: "lines",
              mask: "lines",
              linesClass: "line",
              lineThreshold: 0.1,
            });

            splitRefs.current.push(split);

            const computedStyle = window.getComputedStyle(element);
            const textIndent = computedStyle.textIndent;

            if (textIndent && textIndent !== "0px") {
              if (split.lines.length > 0) {
                (split.lines[0]).style.paddingLeft = textIndent;
              }
              (element).style.textIndent = "0";
            }

            allLines.push(...split.lines);
          });

          gsap.set(allLines, { y: "100%" });
          // Set opacity to 1 once SplitText is ready
          gsap.set(elements, { opacity: 1 });

          const animation = gsap.to(allLines, {
            y: "0%",
            duration: 1,
            stagger: 0.1,
            ease: "power4.out",
            delay: delay,
            paused: animateOnScroll,
          });

          if (animateOnScroll) {
            ScrollTrigger.create({
              trigger: containerRef.current,
              start: "top 80%",
              animation: animation,
              once: true,
              refreshPriority: -1,
            });
          }
        } else if (type === "flicker") {
          const allChars = [];

          elements.forEach((element) => {
            elementRefs.current.push(element);

            const split = SplitText.create(element , {
              type: "words,chars",
            });

            splitRefs.current.push(split);
            allChars.push(...split.chars);
          });

          gsap.set(allChars, { opacity: 0 });
          // Set parent opacity to 1 once SplitText is ready
          gsap.set(elements, { opacity: 1 });

          const animation = gsap.to(allChars, {
            duration: 0.05,
            opacity: 1,
            ease: "power2.inOut",
            delay: delay,
            stagger: {
              amount: 0.5,
              each: 0.1,
              from: "random",
            },
            paused: animateOnScroll,
          });

          if (animateOnScroll) {
            ScrollTrigger.create({
              trigger: containerRef.current,
              start: "top 85%",
              animation: animation,
              once: true,
            });
          }
        }
      };

      initializeSplitText();

      return () => {
        splitRefs.current.forEach((split) => {
          if (split) {
            split.revert();
          }
        });
      };
    },
    { scope: containerRef, dependencies: [animateOnScroll, delay, type] }
  );

  if (React.Children.count(children) === 1) {
    const child = React.Children.only(children);
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { ref: containerRef });
    }
  }

  return (
    <div ref={containerRef} data-copy-wrapper="true">
      {children}
    </div>
  );
}