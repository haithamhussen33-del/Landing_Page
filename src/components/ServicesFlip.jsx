import React from "react";
import "../styles/services.css";

export default function ServicesFlip() {
  const cards = [
    { front: "Design", back: "We create custom ceramic designs." },
    { front: "Quality", back: "We ensure high quality in every product." },
    { front: "Support", back: "We offer 24/7 client assistance." },
  ];

  return (
    <section className="services-flip">
      <h2>Flip Cards</h2>
      <div className="flip-container">
        {cards.map((card, i) => (
          <div key={i} className="flip-card">
            <div className="flip-inner">
              <div className="flip-front">{card.front}</div>
              <div className="flip-back">{card.back}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
