'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { portfolioItems } from '../../services/servicesData';
import './ExpandableServicesSection.css';

const expandableServices = portfolioItems.slice(0, 4).map((item, i) => ({
  ...item,
  number: String(i + 1).padStart(2, '0'),
  handledBy: ['Event Lead', 'Coordinator', 'Design Lead'],
}));

export default function ExpandableServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const detailRefs = useRef([]);

  useEffect(() => {
    detailRefs.current.forEach((el, idx) => {
      if (!el) return;
      if (idx === activeIndex) {
        const contentHeight = el.scrollHeight;
        gsap.to(el, {
          height: contentHeight,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
        });
      } else {
        gsap.to(el, {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: 'power2.inOut',
        });
      }
    });
  }, [activeIndex]);

  const handleEnter = (index) => {
    setActiveIndex(index);
  };

  const handleLeave = () => {
    // keep the last active card expanded instead of collapsing everything
  };

  return (
    <section className="expandable-services py-20 bg-[#faf9f6]">
      <div className="expandable-services__container max-w-6xl mx-auto px-5">
        <header className="expandable-services__header flex flex-wrap items-start justify-between gap-6 mb-12">
          <div>
            <p className="expandable-services__eyebrow text-sm font-semibold tracking-wide text-[#8F1B32] border-b-2 border-[#8F1B32] pb-1 inline-block mb-4">
              Our Service.
            </p>
            <h2 className="expandable-services__title text-2xl sm:text-3xl md:text-4xl font-title text-gray-900 leading-tight max-w-2xl">
              Comprehensive event services tailored to your needs
            </h2>
          </div>
          <a
            href="#contact"
            className="expandable-services__arrow shrink-0 w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#8F1B32] text-[#8F1B32] hover:bg-[#8F1B32] hover:text-white transition-colors"
            aria-label="View all services"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </header>

        <div className="expandable-services__list space-y-0">
          {expandableServices.map((svc, i) => (
            <div key={svc.id} className="expandable-services__row">
              <button
                type="button"
                className="expandable-services__row-inner"
                onMouseEnter={() => handleEnter(i)}
                onFocus={() => handleEnter(i)}
                onMouseLeave={handleLeave}
              >
                <div className="expandable-services__row-text">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="expandable-services__card-num">{svc.number}.</span>
                    <h3 className="expandable-services__card-title">{svc.title}</h3>
                  </div>

                  <div
                    ref={(el) => {
                      detailRefs.current[i] = el;
                    }}
                    className="expandable-services__detail"
                  >
                    <div className="expandable-services__detail-inner">
                      <p className="expandable-services__card-handled">HANDLED BY</p>
                      <ul className="expandable-services__card-names">
                        {svc.handledBy.map((name, j) => (
                          <li key={j}>{name}</li>
                        ))}
                      </ul>
                      <p className="expandable-services__card-desc">{svc.description}</p>
                      <a href="#contact" className="expandable-services__card-cta">
                        Get a Quote
                      </a>
                    </div>
                  </div>
                </div>

                <div className="expandable-services__row-image">
                  <img
                    src={svc.mediaUrl}
                    alt={svc.title}
                    className="expandable-services__image"
                  />
                </div>
              </button>

              {i < expandableServices.length - 1 && (
                <hr className="expandable-services__divider" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
