import Image from "next/image";
import Showcase from "./components/ServiceShowcase/Showcase";
import MarqueeBanner from "./Components/Marquee/MarqueeBanner";
import Hero from "./Components/Hero/Hero";

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
