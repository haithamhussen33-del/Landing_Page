import "../styles/HomePageStyles.css";
import CardRoulet from "./CardRoulet";
import ServicesFlip from "./ServicesFlip";
import HeroCarousel from "./HeroCarousel";
import CardTest from "./CardTest";
import { ReactLenis } from "lenis/react";
import VantaBackground from "./VantaBackground";

export default function Home() {
  return (
    <ReactLenis root>
      <div className="home">
        <HeroCarousel />
        <VantaBackground />
        <ServicesFlip />
        <CardRoulet />
        <br />
        <br />
        <CardTest />
        <br />
        <br />
      </div>
    </ReactLenis>
  );
}
