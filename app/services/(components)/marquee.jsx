"use client";

import React from 'react';

const Marquee = ({ 
  images = [], 
  speed = 20, 
  direction = 'left',
  className = '',
  imageClassName = '',
  pauseOnHover = true 
}) => {
  // Default images if none provided
  const defaultImages = [
    '/services/wedding.jpg',
    '/services/corporate.jpg',
    '/services/social.jpg',
    '/services/cultural.jpg',
    '/services/babyshower.jpg',
    '/services/holiday.jpg',
    '/services/music.jpg',
  ];

  const imagesToUse = images.length > 0 ? images : defaultImages;

  return (
    <div className={`marquee-container ${className}`}>
      <div 
        className={`marquee-content ${pauseOnHover ? 'pause-on-hover' : ''}`}
        style={{
          '--speed': `${speed}s`,
          '--direction': direction === 'left' ? 'scroll-left' : 'scroll-right'
        }}
      >
        {/* First set of images */}
        {imagesToUse.map((src, index) => (
          <img
            key={`first-${index}`}
            src={src}
            alt={`Marquee image ${index + 1}`}
            className={`marquee-image ${imageClassName}`}
          />
        ))}
        
        {/* Duplicate set for seamless loop */}
        {imagesToUse.map((src, index) => (
          <img
            key={`second-${index}`}
            src={src}
            alt={`Marquee image ${index + 1}`}
            className={`marquee-image ${imageClassName}`}
          />
        ))}
      </div>

      <style jsx>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          background: #f8f9fa;
          border: 1px solid #e9ecef;
          border-radius: 8px;
        }

        .marquee-content {
          display: inline-flex;
          animation: var(--direction) var(--speed) linear infinite;
          gap: 20px;
          padding: 20px 0;
        }

        .marquee-content.pause-on-hover:hover {
          animation-play-state: paused;
        }

        .marquee-image {
          height: 120px;
          width: 200px;
          object-fit: cover;
          border-radius: 6px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .marquee-image:hover {
          transform: scale(1.05);
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .marquee-image {
            height: 320px;
            width: 200px;
          }
          
          .marquee-content {
            gap: 15px;
            padding: 15px 0;
          }
        }

        @media (max-width: 480px) {
          .marquee-image {
            height: 100px;
            width: 160px;
          }
          
          .marquee-content {
            gap: 10px;
            padding: 10px 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Marquee;