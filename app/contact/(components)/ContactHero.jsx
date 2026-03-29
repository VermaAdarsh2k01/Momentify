import React from "react";
import Copy from "../../Components/TextAnimation/Copy";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="w-full bg-white pt-28 md:pt-36 pb-6">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Page title */}
        <div className="mb-10 md:mb-14 text-center">
          <Copy delay={0.3} type="slide" animateOnScroll={false}>
            <h1 className="font-title text-5xl md:text-7xl xl:text-7xl text-black leading-none mb-5">
              Contact Us
            </h1>
          </Copy>
          <Copy delay={0.6} type="slide" animateOnScroll={false}>
            <p className="font-body text-neutral-500 text-base max-w-xl mx-auto">
              We'd love to hear about your next event. Reach out and let's start
              turning your ideas into unforgettable experiences.
            </p>
          </Copy>
        </div>

        {/* Founder card + contact pills row */}
        <div className="flex flex-col md:flex-row gap-4 mt-10">
          {/* Left — owner image + personal message */}
          <div className="w-full md:w-[60%] bg-[#f2f2f0] rounded-2xl p-5 flex flex-col md:flex-row gap-6">
            <div className="w-48 mx-auto md:mx-0 md:w-56 shrink-0 rounded-2xl overflow-hidden self-stretch">
              <img
                src="/owner.webp"
                alt="VK Sharma — Founder"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center gap-4">
              <Copy delay={0.5} type="slide" animateOnScroll={false}>
                <h2 className="font-title text-3xl md:text-4xl text-black leading-snug">
                  "Let's Create Memories Together"
                </h2>
              </Copy>
              <Copy delay={0.7} type="slide" animateOnScroll={false}>
                <p className="font-body text-sm text-gray-500 leading-relaxed">
                  Every great event starts with a simple conversation. Whether
                  you have a clear vision or just the spark of an idea — I'd
                  love to sit down, listen, and help bring it to life. No
                  consultation fee, no pressure — just a genuine passion for
                  making your moments extraordinary.
                </p>
              </Copy>
              <Copy delay={0.8} type="slide" animateOnScroll={false}>
                <span className="font-body text-sm text-black font-medium">
                  — VK Sharma, Founder
                </span>
              </Copy>
            </div>
          </div>

          {/* Right — quick-contact pills */}
          <div className="w-full md:w-[40%] flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <a
                href="tel:3034191999"
                className="flex flex-col bg-[#f2f2f0] rounded-2xl px-5 py-5 hover:bg-[#eaeae7] transition-colors"
              >
                <Copy delay={0.5} type="slide" animateOnScroll={false}>
                  <div className="h-10 w-10 rounded-lg bg-[#8F1B32] text-white flex items-center justify-center mb-3 shadow-md shadow-[#8F1B32]/30">
                    <Phone size={18} strokeWidth={1.5} />
                  </div>
                </Copy>
                <Copy delay={0.7} type="slide" animateOnScroll={false}>
                  <p className="font-body text-xs text-neutral-400 uppercase tracking-widest mb-1">
                    Phone
                  </p>
                </Copy>
                <Copy delay={0.8} type="slide" animateOnScroll={false}>
                  <p className="font-body text-sm text-black">303 419 1999</p>
                </Copy>
              </a>
              <a
                href="tel:3039951927"
                className="flex flex-col bg-[#f2f2f0] rounded-2xl px-5 py-5 hover:bg-[#eaeae7] transition-colors"
              >
                <Copy delay={0.5} type="slide" animateOnScroll={false}>
                  <div className="h-10 w-10 rounded-lg bg-[#8F1B32] text-white flex items-center justify-center mb-3 shadow-md shadow-[#8F1B32]/30">
                    <Phone size={18} strokeWidth={1.5} />
                  </div>
                </Copy>
                <Copy delay={0.7} type="slide" animateOnScroll={false}>
                  <p className="font-body text-xs text-neutral-400 uppercase tracking-widest mb-1">
                    Phone
                  </p>
                </Copy>
                <Copy delay={0.8} type="slide" animateOnScroll={false}>
                  <p className="font-body text-sm text-black">303 995 1927</p>
                </Copy>
              </a>
            </div>
            <a
              href="mailto:contact@momentifyevents.com"
              className="flex flex-col bg-[#f2f2f0] rounded-2xl px-5 py-5 hover:bg-[#eaeae7] transition-colors"
            >
              <Copy delay={0.5} type="slide" animateOnScroll={false}>
              <div className="h-10 w-10 rounded-lg bg-[#8F1B32] text-white flex items-center justify-center mb-3 shadow-md shadow-[#8F1B32]/30">
                <Mail size={18} strokeWidth={1.5} />
              </div>
              </Copy>
              <Copy delay={0.6} type="slide" animateOnScroll={false}>
              <p className="font-body text-xs text-neutral-400 uppercase tracking-widest mb-1">
                Email
              </p>
              </Copy>
              <Copy delay={0.7} type="slide" animateOnScroll={false}>
              <p className="font-body text-sm text-black">contact@momentifyevents.com</p>
              </Copy>
            </a>
            <div className="flex flex-col bg-[#f2f2f0] rounded-2xl px-5 py-5">
              <Copy delay={0.5} type="slide" animateOnScroll={false}>
                <div className="h-10 w-10 rounded-lg bg-[#8F1B32] text-white flex items-center justify-center mb-3 shadow-md shadow-[#8F1B32]/30">
                  <MapPin size={18} strokeWidth={1.5} />
                </div>
              </Copy>
              <Copy delay={0.6} type="slide" animateOnScroll={false}>
                <p className="font-body text-xs text-neutral-400 uppercase tracking-widest mb-1">
                  Location
                </p>
              </Copy>
              <Copy delay={0.7} type="slide" animateOnScroll={false}>
                <p className="font-body text-sm text-black">
                  Aurora, CO 80016 · Denver, Colorado
                </p>
              </Copy>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
