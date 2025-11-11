import React, { useState, useEffect } from "react";
import "./assets/styles/HeroCarousel.css";

import hero1 from "./assets/images/hero1.jpg";
import hero2 from "./assets/images/hero2.jpg";
import hero3 from "./assets/images/hero3.jpg";

const images = [hero1, hero2, hero3];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // الانتقال التلقائي كل 5 ثواني
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
            <h1 className="hero-title">Discover Timeless Elegance</h1>
            <p className="hero-subtitle">
              Premium Ceramic Exports — Crafting Excellence for Modern Spaces
            </p>
            <button className="hero-btn">Explore More</button>
          </div>
        </div>
      ))}

      {/* أزرار التنقل */}
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
      {/* Indicators (النقاط) */}
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
