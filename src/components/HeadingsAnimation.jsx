import "../styles/HeadingAnimationStyle.css";
import { motion } from "framer-motion";

export default function TextReveal({
  text,
  type = "reveal",
  delay = 0,
  once = true,
  className = "",
}) {
  const letters = text
    .split("")
    .map((char) => (char === " " ? "\u00A0" : char));

  const animations = {
    reveal: {
      hidden: { y: -20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.35, ease: "easeOut" },
      },
    },
    mask: {
      hidden: { y: "100%", opacity: 0 },
      visible: {
        y: "0%",
        opacity: 1,
        transition: { duration: 0.45, ease: "easeOut" },
      },
    },
    spring: {
      hidden: { y: -25, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 120, damping: 12 },
      },
    },
  };

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.045, delay } },
  };

  const letterAnim = animations[type];

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.8 }}
      className={`text-reveal-container ${className}`}
    >
      {letters.map((char, i) => (
        <motion.span key={i} variants={letterAnim}>
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
}
