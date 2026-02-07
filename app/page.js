import Image from "next/image";
import Showcase from "./Components/ServiceShowcase/Showcase.jsx";
import MarqueeBanner from "./Components/Marquee/MarqueeBanner.jsx";
import Hero from "./Components/Hero/Hero.jsx";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <AboutSection /> */}
      <Showcase/>
      <MarqueeBanner />
      <div className="h-screen w-full bg-red-500"></div>
    </div>
  );
}
