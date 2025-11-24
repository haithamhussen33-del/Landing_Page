import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/ProductInfostyle.css";
export default function ProductSubTypeInfo() {
  const { category, productId } = useParams();
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await import(
          `../ProductsData/${category.toLowerCase()}.json`
        );
        const found = data.types.find((p) => p.id === productId);
        setProduct(found || null);
      } catch (err) {
        setProduct(null);
      }
    };
    loadProduct();
  }, [category, productId]);

  if (!product) return <p>No Such Product</p>;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="product-info-container">
      <div className="product-images-section">
        <div className="carousel-container">
          <button className="carousel-btn prev" onClick={prevImage}>
            &#10094;
          </button>
          <div className="carousel-slide">
            <img
              src={product.images[currentImageIndex]}
              alt={`${product.name} view ${currentImageIndex + 1}`}
              className="carousel-image"
            />
          </div>
          <button className="carousel-btn next" onClick={nextImage}>
            &#10095;
          </button>
          <div className="carousel-indicators">
            {product.images.map((_, idx) => (
              <span 
                key={idx} 
                className={`indicator ${idx === currentImageIndex ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="product-description-section">
        <h1 className="product-title">{product.name}</h1>
        <div className="product-details">
          <p className="product-description">{product.description}</p>
          <div className="product-meta">
            <p><strong>Sizes:</strong> {product.sizes}</p>
            <p><strong>Finish:</strong> {product.finish}</p>
            <p><strong>Applications:</strong> {product.applications}</p>
            <p><strong>What Casapiu Provides:</strong> {product.whatcasapiuprovides}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
