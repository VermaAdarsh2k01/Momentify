// import Image from "next/image";
// import Showcase from "./Components/ServiceShowcase/Showcase.jsx";
import MarqueeBanner from "./Components/Marquee/MarqueeBanner.jsx";
// import Hero from "./Components/Hero/Hero.jsx";
// import TrailContainer from "./Components/AboutSection/About.jsx";
// import ContactSection from "./Components/ContactSection/ContactSection.jsx";
import AboutSection from "./Components/AboutSection/About.jsx";
import StickyCards from "./Components/StickyCards/StickyCards.jsx";
import OurProcess from "./Components/OurProcess/OurProcess.jsx";
import WhyChooseUs from "./Components/WhyChooseUs/WhyChooseUs.jsx";
import Gallery from "./Components/Gallery/Gallery.jsx";
import Testimonials from "./Components/Testimonials/Testimonials.jsx";
import CTABanner from "./Components/CTABanner/CTABanner.jsx";
import FAQ from "./Components/FAQ/FAQ.jsx";
import ContactSectionNew from "./Components/ContactSection/ContactSectionNew.jsx";
import ScrollHero from "./Components/SscrollHero.jsx";
import Preloader from "./Components/Preloader.jsx";
import Minimap from "./Components/Minimap.jsx";
import ImageReveal from "./Components/ImageReveal/ImageReveal.jsx";
import ProjectsSection from "./Components/ProjectsSection/ProjectsSection.jsx";
import ServiceFlipGrid from "./Components/ServiceFlipGrid/ServiceFlipGrid.jsx";
import ExpandableServicesSection from "./Components/ExpandableServicesSection/ExpandableServicesSection.jsx";
import NewAbout from "./Components/AboutSection/NewAbout.jsx";
import PricingCards from "./Components/PricingCards/PricingCards.jsx";
import NewHero from "./sections/newHero.jsx";
import About from "./sections/About.jsx";
import ServicesSection from "./sections/ServicesSection.jsx";
import PackagesSection from "./sections/PackagesSection.jsx";
import TestimonialsSection from "./sections/TestimonialsSection.jsx";
import ContactFAQ from "./contact/(components)/ContactFAQ.jsx";

export default function Home() {
  return (
    <div className="">
      {/* <Preloader /> */}
      <NewHero />
      <About />
      <ServicesSection />
      <PackagesSection />
      <TestimonialsSection />
      <WhyChooseUs />
      <ContactFAQ />
    </div>
  );
}
