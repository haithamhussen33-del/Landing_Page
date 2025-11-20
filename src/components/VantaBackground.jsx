import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function VantaBackground() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    // تحميل سكريبت Vanta Fog من public
    const script = document.createElement("script");
    script.src = "/vanta.fog.min.js"; // موجود في public
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.VANTA && !vantaEffect.current) {
        vantaEffect.current = window.VANTA.FOG({
          el: vantaRef.current,
          THREE: THREE, // نمرر Three من npm
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0xe8b519,
          midtoneColor: 0xebdede,
          lowlightColor: 0xc9c4d7,
          baseColor: 0xd4c8c8,
          blurFactor: 0.63,
          speed: 1.9,
          zoom: 0.4,
        });
      }
    };

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
      document.body.removeChild(script); // تنظيف السكريبت
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // خلف كل العناصر
      }}
    />
  );
}
