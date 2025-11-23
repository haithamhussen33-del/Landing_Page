import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { createPortal } from "react-dom";

export default function VantaBackground() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/vanta.fog.min.js"; 
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.VANTA && !vantaEffect.current) {
        vantaEffect.current = window.VANTA.FOG({
          el: vantaRef.current,
          THREE: THREE, 
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
        highlightColor: 0x000000,
  midtoneColor: 0xa78d36,
  lowlightColor: 0x000000,
  baseColor: 0x000000,
  blurFactor: 0.57,
  speed: 0.60,
  zoom: 0.30
        });
      }
    };

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
      document.body.removeChild(script);
    };
  }, []);

  return createPortal(
    <div
      ref={vantaRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none", 
      }}
    />,
    document.body
  );
}
