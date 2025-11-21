import React from "react";
import CeramicCard from "../components/CeramicCard"; // ✅ مهم جداً
import "../styles/ceramics.css";

import ceramic1 from "../assets/ceramics/ceramic1.jpg";
import ceramic2 from "../assets/ceramics/ceramic2.jpg";
import ceramic3 from "../assets/ceramics/ceramic3.jpg";
import HeadingsAnimation from "../components/HeadingsAnimation";

export default function CeramicTypes() {
  const ceramics = [
    {
      id: "1",
      name: "سيراميك أرضيات",
      img: ceramic1,
      description: "مقاوم للخدش ومناسب للمنازل.",
    },
    {
      id: "2",
      name: "سيراميك حوائط",
      img: ceramic2,
      description: "تصاميم فاخرة للجدران.",
    },
    {
      id: "3",
      name: "سيراميك خارجي",
      img: ceramic3,
      description: "مثالي للشرفات والحدائق.",
    },
  ];

  return (
    <div className="ceramics-page">
      <HeadingsAnimation text="Ceramic Types" />
      <h2 className="ceramics-title">أنواع السيراميك</h2>

      <div className="ceramics-grid">
        {ceramics.map((item, i) => (
          <CeramicCard
            key={i}
            id={item.id}
            name={item.name}
            img={item.img}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
