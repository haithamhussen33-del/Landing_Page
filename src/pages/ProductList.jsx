// src/pages/ProductList.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";

// دالة لتحميل بيانات JSON حسب الفئة
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
    // الانتقال إلى صفحة تفاصيل المنتج
    navigate(`/products/${category}/${productId}`);
  };

  if (loading) return <p>Loading...</p>;
  if (!categoryData) return <p>No Such Category</p>;

  return (
    <div className="product-list-container" style={{ padding: "2rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        {categoryData.category}
      </h1>

      <div
        className="product-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.5rem",
        }}
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
