import Image from "next/image";
import Showcase from "./Components/ServiceShowcase/Showcase.jsx";
import MarqueeBanner from "./Components/Marquee/MarqueeBanner.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import TrailContainer from "./Components/AboutSection/About.jsx";

export default function Home() {
  return (
    <div>
      <Hero />
      <TrailContainer />
      {/* <AboutSection /> */}
      <Showcase/>
      <MarqueeBanner />
    </div>
  );
}
