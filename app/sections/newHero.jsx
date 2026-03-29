import React from 'react'
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { Phone, Mail, ArrowUpRight } from 'lucide-react'
import Copy from '../Components/TextAnimation/Copy'

const NewHero = () => {
  return (
    <section className="w-screen bg-white pt-32 pb-12 px-4">
      <div className="max-w-7xl mx-auto ">

        {/* Row 1: Heading (70%) + Socials (30%) */}
        <div className="flex flex-col md:flex-row gap-6 mb-16 ">

          {/* Left column — heading & subtext */}
          <div className="w-full md:w-[70%]">
            <Copy delay={0.5} type="slide">
            <h1 className="font-title text-5xl sm:text-6xl lg:text-6xl xl:w-[70%] text-black leading-tight tracking-tight">
              Crafting Experiences That People Remember
            </h1>
            </Copy>
            <Copy delay={0.8} type="slide">
            <p className="font-body text-md md:text-sm  text-gray-500 mt-4 max-w-lg">
              From intimate gatherings to grand celebrations, we design, plan, and
              execute events that leave a lasting impression.
            </p>
            </Copy>
          </div>

          {/* Right column — socials */}
          <div className="w-full md:w-[30%] flex flex-row md:flex-col items-start md:items-end justify-start md:justify-end gap-4 md:gap-3">
            <Copy delay={0.6} type="slide">
            <p className="text-md text-black font-body">Our Socials</p>
            </Copy>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/invites/contact/?i=uctp105vmxm1&utm_content=112tvhri"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="https://wa.me/13034191999"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Row 2: Video (50%) + Contact card (50%) */}
        <div className="flex flex-col md:flex-row gap-6 h-full">

          {/* Left column — video */}
          <Copy delay={0.5} type="slide">
          <div className="w-full md:w-2/3 rounded-2xl overflow-hidden aspect-16/7">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/hero_vid.mp4" type="video/mp4" />
            </video>
          </div>
          </Copy>

          {/* Right column — contact card */}
          <div className="w-full md:w-1/3 bg-[#f2f2f0] rounded-2xl p-8 flex flex-col justify-between min-h-80">
            <Copy delay={0.5} type="slide">
              <h2 className="font-title text-2xl md:text-3xl text-black leading-snug">
                Get your quotation without any consultation fee
              </h2>
            </Copy>
            <Copy delay={0.8} type="slide">
              <div className="flex flex-col gap-4 mt-6">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-black shrink-0" />
                  <span className="font-body text-sm text-black">303 419 1999</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-black shrink-0" />
                  <span className="font-body text-sm text-black">contact@momentifyevents.com</span>
                </div>
              </div>
            </Copy>
            
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-black text-white text-sm font-body px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
              >
                Contact Now
                <ArrowUpRight size={15} />
              </a>
            </div>

          </div> {/* closes contact card */}

        </div> {/* closes Row 2 */}

      </div> {/* closes max-w-7xl */}
    </section>
  )
}

export default NewHero
