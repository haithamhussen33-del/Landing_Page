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

      <section className="hero">
        <div className="hero-content">
          <h1>Premium Ceramic Exports</h1>
          <p className="hero-subtitle">
            Delivering Excellence in Ceramic Products Worldwide
          </p>
          <p className="hero-description">
            We specialize in exporting high-quality ceramic tiles, sanitaryware,
            and decorative ceramics to markets across the globe.
          </p>
        </div>
      </section>

      <section className="features">
        <div className="features-container">
          <div className="feature-card">
            <h3>Quality Products</h3>
            <p>Premium ceramic products manufactured with precision and care</p>
          </div>
          <div className="feature-card">
            <h3>Global Reach</h3>
            <p>Exporting to over 50 countries with reliable logistics</p>
          </div>
          <div className="feature-card">
            <h3>Custom Solutions</h3>
            <p>Tailored ceramic solutions to meet your specific requirements</p>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="about-content">
          <h2>About Our Company</h2>
        </div>
      </section>
    </div>
  );
}
