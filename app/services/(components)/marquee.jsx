"use client";

import React from 'react';

const Marquee = ({
  images = [],
  speed = 20,
  direction = 'left',
  pauseOnHover = true,
}) => {
  const defaultImages = [
    '/services/wedding.webp',
    '/services/corporate.jpg',
    '/services/music.jpg',
    '/services/social.jpg',
    '/services/babyshower.jpg',
    '/services/cultural.webp',
    '/services/holiday.webp',
    '/services/wedding-2.jpeg',
  ];

  const imagesToUse = images.length > 0 ? images : defaultImages;

  const animationName = direction === 'left' ? 'marquee-left' : 'marquee-right';

  return (
    <div className="w-full overflow-hidden pb-1">
      {/* Keyframes can't be expressed as Tailwind classes */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div
        className={`inline-flex items-end gap-3 will-change-transform ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
        style={{ animation: `${animationName} ${speed}s linear infinite` }}
      >
        {[...imagesToUse, ...imagesToUse].map((src, i) => (
          <img
            key={i}
            src={typeof src === 'string' ? src : src.src}
            alt=""
            className="w-[220px] max-w-none h-auto shrink-0 block rounded-[10px] md:w-[200px] sm:w-[160px]"
          />
        ))}
      </div>
    </div>
  );
};

export default Marquee;
