import React from "react";
import CeramicCard from "./CeramicCard";

export default function CeramicGrid({ ceramics }) {
  return (
    <div className="ceramic-grid">
      {ceramics.map((item, i) => (
        <CeramicCard
          key={i}
          name={item.name}
          img={item.img}
          description={item.description}
        />
      ))}
    </div>
  );
}
