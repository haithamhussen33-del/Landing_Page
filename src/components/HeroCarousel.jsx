import React, { useState, useEffect } from "react";
import "../styles/HeroCarousel.css";

import hero1 from "../assets/images/hero1.jpg";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.jpg";
import "../index.css";
import logohero from "../assets/images/logoNoBg.png";
import { motion } from "motion/react";
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
      <motion.img
        src={logohero}
        alt="logo"
        className="hero-logo"
        // initial={{ y: -60, opacity: 0, scale: 0.8 }} //هون الحركة بينزل من فوق بمقدار 60
        // animate={{ y: 0, opacity: 1, scale: 1 }}
        // transition={{ duration: 1.4, ease: "easeOut" }} // سرعة الحركة
        // transition={{ duration: 1.2, delay: 0.8 }}
        // *********بيكون صغير وبيكبر
        // initial={{ scale: 0.6, opacity: 0 }}
        // animate={{ scale: 1, opacity: 1 }}
        // transition={{ duration: 0.9, ease: "easeOut" }}
        // ********* بينزل بسرعة مع ارتداد
        // initial={{ opacity: 0, y: -20 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{ duration: 1.8, ease: [0.17, 0.55, 0.55, 1] }}
        // *******
        // initial={{ y: -80, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{
        //   type: "spring",
        //   damping: 12,
        //   stiffness: 120,
        //   duration: 1.4,
        // }}
        // *************
        initial={{ scale: 1.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />
      {/* SVG Shape Divider */}
      <div
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          zIndex: 10,
          pointerEvents: "none",
          background: "inherit",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -2 20 3"
          preserveAspectRatio="none"
          style={{
            display: "block",
            width: "100%",
            height: "80px",
            background: "inherit",
          }}
        >
          <path d="M 0 1 L 10 -2 L 20 1 Z" fill="#F7F7F7" />
        </svg>
      </div>
    </section>
  );
}
