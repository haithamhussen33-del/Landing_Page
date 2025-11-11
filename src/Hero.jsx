import React from "react";
import heroImage from "./assets/images/hero-bg.jpg"; // استيراد الصورة
import "./assets/styles/Hero.css"; // استيراد ملف CSS الخاص بالـ Hero

export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay داكن فوق الصورة */}
      <div className="hero-overlay"></div>

      {/* المحتوى النصي */}
      <div className="hero-content">
        <h1 className="hero-title">Discover Timeless Elegance</h1>
        <p className="hero-subtitle">
          Premium Ceramic Exports — Crafting Excellence for Modern Spaces
        </p>
        <button className="hero-btn">Explore More</button>
      </div>
    </section>
  );
}
