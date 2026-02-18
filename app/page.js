import Image from "next/image";
import Showcase from "./Components/ServiceShowcase/Showcase.jsx";
import MarqueeBanner from "./Components/Marquee/MarqueeBanner.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import TrailContainer from "./Components/AboutSection/About.jsx";
import ContactSection from "./Components/ContactSection/ContactSection.jsx";
import StickyCards from "./Components/StickyCards/StickyCards.jsx";
import OurProcess from "./Components/OurProcess/OurProcess.jsx";
import WhyChooseUs from "./Components/WhyChooseUs/WhyChooseUs.jsx";
import Gallery from "./Components/Gallery/Gallery.jsx";
import Testimonials from "./Components/Testimonials/Testimonials.jsx";
import CTABanner from "./Components/CTABanner/CTABanner.jsx";
import FAQ from "./Components/FAQ/FAQ.jsx";
import ContactSectionNew from "./Components/ContactSection/ContactSectionNew.jsx";

export default function Home() {
  return (
    <div>
      <Hero />
      <TrailContainer />
      <StickyCards />
      {/* <AboutSection /> */}
      {/* <Showcase/> */}
      <MarqueeBanner />
      <OurProcess />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <CTABanner />
      <FAQ />
      {/* <ContactSectionNew /> */}
      <ContactSection />
    </div>
  );
}
