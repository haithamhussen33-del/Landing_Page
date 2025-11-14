import "../styles/HomePageStyles.css";
import CardRoulet from "./CardRoulet";
import ServicesFlip from "./ServicesFlip";
import HeroCarousel from "./HeroCarousel";
export default function Home() {
  return (
    <div className="home">
      <HeroCarousel />
      <br></br>
      <br></br>

      <ServicesFlip />
      <br />
      <br />
      <CardRoulet />

      <section className="about">
        <div className="about-content">
          <h2>About Our Company</h2>
        </div>
      </section>
    </div>
  );
}
