import React from "react";
import "../styles/services1.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Card from "./Card";
import heroImage from "../assets/images/hero2.jpg";

export default function CardRoulet() {
  const cards = [
    { front: "Design", imgback: heroImage },
    { front: "Quality", imgback: heroImage },
    { front: "Support", imgback: heroImage },
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const sections = cards.length + 1;
  const segment = 1 / (cards.length * 0.7);

  // Build per-card animation using normalized segments
  // Card stays fully visible during first half of its segment, then animates out
  const animate = cards.map((_, i) => {
    const start = i * segment;
    const end = (i + 1) * segment;
    const animationStart = start + segment * 0.5; // Extended from 0.7 to 0.85 for longer center time
    return {
      scale: useTransform(scrollYProgress, [animationStart, end], [1, 0.6]),
      opacity: useTransform(scrollYProgress, [animationStart, end], [1, 0]),
    };
  });

  return (
    <motion.div className="services-flip1" ref={ref}>
      <h2>Flip Cards</h2>

      {cards.map((card, i) => (
        <motion.div
          key={card.front}
          className="h-dvh py-10 sticky top-0"
          style={{
            scale: animate[i].scale,
            opacity: animate[i].opacity,
          }}
        >
          <Card heading={card.front} imgBackground={card.imgback} />
        </motion.div>
      ))}
    </motion.div>
  );
}
