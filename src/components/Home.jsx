import "../styles/HomePageStyles.css";
import CardRoulet from "./CardRoulet";
import ServicesFlip from "./ServicesFlip";
import HeroCarousel from "./HeroCarousel";
import CardTest from "./CardTest";
import { ReactLenis } from "lenis/react";
export default function Home() {
  return (
    <ReactLenis root>
      <div className="home">
        <HeroCarousel />

        <ServicesFlip />

        <CardRoulet />
        <br />
        <br />
        <CardTest />
        <br />
        <br />
        <section className="about">
          <div className="about-content">
            <h2>About Our Company</h2>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
}
