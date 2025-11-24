// src/components/ProductCard.jsx
import React from "react";

export default function ProductCard({ product, onClick }) {
  return (
    <div
      className="product-card"
      style={{
        cursor: "pointer",
        borderRadius: "1rem",
        overflow: "hidden",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
      }}
      onClick={onClick}
    >
      <img
        src={product.images[0]}
        alt={product.name}
        style={{ width: "100%", height: "180px", objectFit: "cover" }}
      />
      <div style={{ padding: "1rem", textAlign: "center" }}>
        <h3>{product.name}</h3>
      </div>
    </div>
  );
}
