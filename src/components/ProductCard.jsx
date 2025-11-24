import React from "react";
import "../styles/productcardstyle.css";

export default function ProductCard({ product, onClick }) {
  return (
    <div className="product-card" onClick={onClick}>
      <div className="product-card-img-container">
        <img src={product.images[0]} alt={product.name} />
        <div className="product-card-overlay">
          <h3>{product.name}</h3>
        </div>
      </div>
    </div>
  );
}
