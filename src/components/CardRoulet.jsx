import React, { useState, useEffect, useRef } from "react";
import "../styles/services1.css";
import { motion, useScroll, useTransform } from "framer-motion";
import Card from "./Card";
import materialsImg from "../assets/images/services/materials-supply.png";
import sanitaryImg from "../assets/images/services/sanitary-ware.png";
import samplesImg from "../assets/images/services/custom-samples.png";
import logisticsImg from "../assets/images/services/logistics.png";

export default function CardRoulet() {
  const cards = [
    { 
      leftCard: { heading: "Supply of Ceramics, Porcelain, Marble & Granite", imgback: materialsImg, description: "We supply a complete range of ceramics, porcelain, marble, and granite in various sizes and finishes — suitable for residential, commercial, and large-scale projects." },
      rightCard: { heading: "Supply of Sanitary Ware & Washbasins", imgback: sanitaryImg, description: "High-quality sanitary ware including toilets, washbasins, bathtubs, mixers, and accessories — designed for durability and modern aesthetics." }
    },
    { 
      leftCard: { heading: "Samples & Custom Sizes", imgback: samplesImg, description: "We provide product samples and custom-size options tailored to meet the exact specifications of your project." },
      rightCard: { heading: "Shipping & Delivery Coordination", imgback: logisticsImg, description: "Complete logistics support including shipping arrangements, documentation, customs coordination, and on-time project delivery." }
    },
   
  ];

  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });


  
  // Animation timing based on physical layout
  const CARD_HEIGHT_VH = 100;
  const MARGIN_VH = 40;
  const TOTAL_VH = CARD_HEIGHT_VH + MARGIN_VH;
  
  // Total scroll distance is proportional to (cards.length * TOTAL_VH)
  // Each card occupies one 'segment' of the total scroll
  const segment = 1 / (cards.length*0.8);

  // Build per-card animation using normalized segments
  // Card stays fully visible during the CARD_HEIGHT portion, then animates out during MARGIN
  const animate = cards.map((_, i) => {
    const start = i * segment;
    const end = (i + 1) * segment;
    
    // The animation (fade/scale out) should start after the card height is scrolled past
    const animationStart = start + segment * (CARD_HEIGHT_VH / TOTAL_VH);
    
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
          key={card.leftCard.heading + i}
          className="md:h-dvh md:sticky md:top-0 md:flex md:items-center md:justify-center h-auto relative mb-8 md:mb-[40vh]"
          style={!isMobile ? {
            scale: animate[i].scale,
            opacity: animate[i].opacity,
          } : { scale: 1, opacity: 1 }}
        >
          <Card leftCard={card.leftCard} rightCard={card.rightCard} />
        </motion.div>
      ))}
    </motion.div>
  );
}
