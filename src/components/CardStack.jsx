import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Card from "./Card";
import heroImage from "../assets/images/hero2.jpg";
import "../styles/CardStackStyles.css";

export default function CardStack() {
  const target = useRef(null);
  const { scrollY } = useScroll({
    target: target,
    offset: ["start start", "end end"],
  });
  return (
    <div ref={target}>
      <div className="stack-container">
        <h1>Our Services</h1>
      </div>
      {cardData.map((data) => (
        <div key={data.heading} className="stack-card-container">
          <Card heading={data.heading} imgBackground={data.imgBackground} />
        </div>
      ))}
    </div>
  );
}
const cardData = [
  {
    heading: "Hi 1",
    imgBackground: heroImage,
  },
  {
    heading: "Hi 1",
    imgBackground: heroImage,
  },
];
