import "../styles/HomePageStyles.css";
import CardRoulet from "./CardRoulet";
import ServicesFlip from "./ServicesFlip";
import HeroCarousel from "./HeroCarousel";
import CardTest from "./CardTest";
export default function Home() {
  return (
    <div className="home">
      <HeroCarousel />

      <ServicesFlip />
      <br />
      <br />
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
  );
}
