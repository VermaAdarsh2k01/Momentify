import Image from "next/image";
import Copy from "../../Components/TextAnimation/Copy";
import { portfolioItems } from "../servicesData";

const ServicesContent = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-14">

        {/* ── Section header ── */}
        <div className="flex flex-col items-center mb-20">
          <Copy>
            <span className="font-body text-xs tracking-[0.18em] border border-gray-300 rounded-full px-5 py-1.5 text-gray-600 mb-6 uppercase inline-block">
              Services
            </span>
          </Copy>
          <Copy>
            <h2 className="font-body text-2xl md:text-3xl text-black text-center max-w-xl leading-tight">
              Explore the Events We Bring to Life
            </h2>
          </Copy>
        </div>

        {portfolioItems.map((item) => (
          <div key={item.id} id={item.id} className="group pt-8 pb-14 md:pb-20 scroll-mt-24">
            {/* Top divider */}
            <div className="h-px bg-neutral-300 mb-8 md:mb-10" />

            {/* Three-column layout */}
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_2.5fr_2.5fr] gap-10 md:gap-16 items-start">

              {/* Left: title */}
              <div>
                <Copy>
                  <h3 className="font-title text-base md:text-2xl text-[#8F1B32] leading-snug">
                    {item.title}
                  </h3>
                </Copy>
              </div>

              {/* Middle: description + features */}
              <div className="flex flex-col gap-5">
                <Copy>
                  <p className="text-sm md:text-lg text-neutral-600 max-w-sm font-body">
                    {item.description}
                  </p>
                </Copy>
                <ul className="flex flex-col gap-1">
                  {item.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-base text-black tracking-wide">
                      <Image src="/dot-icons.png" alt="" width={12} height={12} className="shrink-0" />
                      <Copy delay={0.1} type="slide">
                        <span className="inline-block">{feat}</span>
                      </Copy>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: image */}
              <div className="overflow-hidden rounded-2xl">
                <div className="relative w-full aspect-4/3 overflow-hidden rounded-2xl">
                  <Image
                    src={item.mediaUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesContent;
