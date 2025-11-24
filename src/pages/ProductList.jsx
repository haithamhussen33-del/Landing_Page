// src/pages/ProductList.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "../styles/ProductListStyles.css";

const loadCategoryData = async (category) => {
  try {
    const data = await import(`../ProductsData/${category.toLowerCase()}.json`);
    return data.default;
  } catch (error) {
    console.error("Category not found:", category, error);
    return null;
  }
};

export default function ProductList() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categoryData, setCategoryData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    loadCategoryData(category)
      .then((data) => {
        if (!data) {
          setProducts([]);
          setCategoryData(null);
        } else {
          setProducts(data.types || []);
          setCategoryData(data);
        }
      })
      .finally(() => setLoading(false));
  }, [category]);

  const handleProductClick = (productId) => {
   
    navigate(`/products/${category}/${productId}`);
  };

  if (loading) return <p>Loading...</p>;
  if (!categoryData) return <p>No Such Category</p>;

  return (

    
    <div className="product-list-container" >
      <div className="product-list-hero">
        <img src={categoryData.hero} alt="hero" />
          <h2 >
        {categoryData.category}
      </h2>
      </div>

      <div
        className="product-grid"
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => handleProductClick(product.id)}
          />
        ))}
      </div>
    </div>
  );
}
