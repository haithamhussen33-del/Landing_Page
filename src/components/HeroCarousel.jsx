import React, { useState, useEffect } from "react";
import "../styles/HeroCarousel.css";
import hero1 from "../assets/images/hero1.jpg";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.jpg";
import "../index.css";

const images = [hero1, hero2, hero3];
const talk = [
  {
    title: "Discover Timeless Elegance",
    subtitle: "Premium Ceramic Exports — Crafting Excellence for Modern Spaces",
  },
  {
    title: "Discover ME",
    subtitle: "Premium MOMO",
  },
  {
    title: "Discover123123123",
    subtitle: "Premium M12323123",
  },
];
export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="hero-carousel">
      {images.map((img, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">{talk[index].title}</h1>
            <p className="hero-subtitle">{talk[index].subtitle}</p>
          </div>
        </div>
      ))}

      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>

      <div className="indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
     
    </section>
  );
}
