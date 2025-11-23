import React from "react";
import { useParams } from "react-router-dom";
import "../styles/ceramics-details.css";

import ceramic1 from "../assets/ceramics/ceramic1.jpg";
import ceramic2 from "../assets/ceramics/ceramic2.jpg";
import ceramic3 from "../assets/ceramics/ceramic3.jpg";

export default function CeramicDetails() {
  const { id } = useParams();

  const products = [
    {
      id: "1",
      name: "Marble",
      img: ceramic1,
      description: "Description",
    },
    {
      id: "2",
      name: " Granite",
      img: ceramic2,
      description: "Description",
    },
    {
      id: "3",
      nname: "Ceramic",
      img: ceramic3,
      description: "Description",
    },
  ];

  const product = products.find((p) => p.id === id);

  if (!product) return <h2>No Such Product</h2>;

  return (
    <div className="details-page">
      <div className="details-heading"><h2>{product.name}</h2></div>
      <div className="features-section">

  <div className="details-img-wrapper">
        <img src={product.img} alt={product.name} className="details-img" />
      </div>
  <div className="details-info">
    <ul className="features-list">
      <legend>
          <h4>Features</h4>
      </legend>
      <li>Marble-effect large format tiles
</li>
<li>High-gloss & soft-matt finishes
</li>
<li>Available in a range of sizes and finishes
</li>
<li>Easy to clean and maintain
</li>
<li>Available in a range of sizes and finishes
</li>
    </ul>
  </div>
      </div>
    
    

      
    </div>
  );
}
