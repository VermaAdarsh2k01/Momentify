'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StickyCards = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const cardData = [
    {
      id: 'card-1',
      subtitle: 'Silent Repetition',
      title: 'Wedding Receptions',
      image: '/service-section/wedding.png',
      bgColor: 'bg-[#785f47]',
      zIndex: 'z-50'
    },
    {
      id: 'card-2',
      subtitle: 'Silent Repetition',
      title: 'Festive Parties',
      image: '/service-section/festive.png',
      bgColor: 'bg-[#7c3aed]',
      zIndex: 'z-40'
    },
    {
      id: 'card-3',
      subtitle: 'Silent Repetition',
      title: 'Anniversary Parties',
      image: '/service-section/anniversary.png',
      bgColor: 'bg-[#0891b2]',
      zIndex: 'z-30'
    },
    {
      id: 'card-4',
      subtitle: 'Fluid Structures',
      title: 'Birthday Parties',
      image: '/service-section/birthday.png',
      bgColor: 'bg-[#ff7722]',
      zIndex: 'z-20'
    },
    {
      id: 'card-5',
      subtitle: 'Quiet Control',
      title: 'Baby Showers',
      image: '/service-section/baby-shower.png',
      bgColor: 'bg-[#3d2fa9]',
      zIndex: 'z-10'
    },
    {
      id: 'card-6',
      subtitle: 'Wired Thought',
      title: 'Graduation Parties',
      image: '/service-section/grad.png',
      bgColor: 'bg-[#ff3d33]',
      zIndex: 'z-9'
    },
    {
      id: 'card-7',
      subtitle: 'Silent Repetition',
      title: 'Corporate Events',
      image: '/service-section/corporate.png',
      bgColor: 'bg-[#2563eb]',
      zIndex: 'z-8'
    },
    {
      id: 'card-8',
      subtitle: 'Silent Repetition',
      title: 'Bar Mitzvahs',
      image: '/service-section/barmitzvah.png',
      bgColor: 'bg-[#059669]',
      zIndex: 'z-7'
    },
    // {
    //   id: 'card-9',
    //   subtitle: 'Silent Repetition',
    //   title: 'Quinceañeras',
    //   image: '/service-section/quinceanera.png',
    //   bgColor: 'bg-[#dc2626]',
    //   zIndex: 'z-6'
    // },
    {
      id: 'card-9',
      subtitle: 'Silent Repetition',
      title: 'Holiday Parties',
      image: '/service-section/holiday.png',
      bgColor: 'bg-[#ea580c]',
      zIndex: 'z-5'
    },
  ];

  useEffect(() => {
    const cards = cardsRef.current;
    const totalCards = cards.length;
    const segmentSize = 1 / totalCards;
    const cardYOffset = 5;
    const cardScaleStep = 0.075;

    // Initial setup for cards
    cards.forEach((card, i) => {
      if (card) {
        gsap.set(card, {
          xPercent: -50,
          yPercent: -50 + i * cardYOffset,
          scale: 1 - i * cardScaleStep,
        });
      }
    });

    // Create ScrollTrigger animation
    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: `+=${window.innerHeight * 8}px`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const activeIndex = Math.min(
          Math.floor(progress / segmentSize),
          totalCards - 1,
        );
        const segProgress = (progress - activeIndex * segmentSize) / segmentSize;

        cards.forEach((card, i) => {
          if (!card) return;

          if (i < activeIndex) {
            gsap.set(card, {
              yPercent: -250,
              rotationX: 35,
            });
          } else if (i === activeIndex) {
            gsap.set(card, {
              yPercent: gsap.utils.interpolate(-50, -200, segProgress),
              rotationX: gsap.utils.interpolate(0, 35, segProgress),
              scale: 1,
            });
          } else {
            const behindIndex = i - activeIndex;
            const currentYOffset = (behindIndex - segProgress) * cardYOffset;
            const currentScale = 1 - (behindIndex - segProgress) * cardScaleStep;

            gsap.set(card, {
              yPercent: -50 + currentYOffset,
              rotationX: 0,
              scale: currentScale,
            });
          }
        });
      },
    });

    // Cleanup function
    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="sticky-cards relative w-full h-screen overflow-hidden bg-[#e3e3db]"
      style={{ perspective: '1000px' }}
    >
      {cardData.map((card, index) => (
        <div
          key={card.id}
          ref={(el) => (cardsRef.current[index] = el)}
          className={`
            card absolute top-1/2 left-1/2 w-[65%] h-[60%] 
            flex justify-center items-center gap-4 p-10 rounded-2xl text-white
            ${card.bgColor} ${card.zIndex}
            max-lg:w-[calc(100%-4rem)] max-lg:h-[75%] max-lg:flex-col
          `}
          style={{ 
            transformOrigin: 'center bottom',
            willChange: 'transform'
          }}
        >
          <div className="col flex-1 h-full flex flex-col justify-between p-2 max-lg:w-full">
            <p className="uppercase font-mono text-sm tracking-wider">
              {card.subtitle}
            </p>
            <h1 className="uppercase text-5xl leading-none tracking-tight">
              {card.title}
            </h1>
          </div>
          <div className="col flex-1 h-full rounded-xl overflow-hidden max-lg:w-full">
            <img 
              src={card.image} 
              alt={card.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default StickyCards;