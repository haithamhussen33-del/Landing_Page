import React from "react";
import "../styles/services1.css";
import { motion, useScroll, useTransform } from "motion/react";

export default function CardRoulet() {
  const cards = [
    { front: "Design", back: "We create custom ceramic designs." },
    { front: "Quality", back: "We ensure high quality in every product." },
    { front: "Support", back: "We offer 24/7 client assistance." },
  ];

  function MotionCard({ children, index, total }) {
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      // Start progress when the card reaches the top, finish when it fully leaves the top
      offset: ["start start", "end start"],
    });

    // Hold the appearance while fully in view, then animate as it leaves
    const y = useTransform(scrollYProgress, [0, 0.15, 1], [0, 0, -250]);
    const scale = useTransform(scrollYProgress, [0, 0.15, 1], [1, 1, 0.5]);
    const opacity = useTransform(scrollYProgress, [0, 0.15, 1], [1, 1, 0.1]);

    return (
      <motion.div
        ref={ref}
        style={{ y, scale, opacity, zIndex: total - index }}
        viewport={{ amount: 0.1 }}
        className="flip-card1"
      >
        {children}
      </motion.div>
    );
  }

  return (
    <section className="services-flip1">
      <h2>Flip Cards</h2>
      <div className="flip-container1">
        <MotionCard index={0} total={3}>
          <h1>Card 1</h1>
          <p>
            Hi jdfsjkbdskjfbkdsjbfkjdsbfsdfsdfjsdfkdsjbfksdbfkjfdskjbfkdsjbfs
          </p>
        </MotionCard>
        <MotionCard index={1} total={3}>
          <h1>Card 2</h1>
          <p>Hi 2</p>
        </MotionCard>
        <MotionCard index={2} total={3}>
          <h1>Card 3</h1>
          <p>Hi 3</p>
        </MotionCard>
      </div>
    </section>
  );
}
