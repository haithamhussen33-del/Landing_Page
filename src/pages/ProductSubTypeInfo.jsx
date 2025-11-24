import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductSubTypeInfo() {
  const { category, productId } = useParams();
  const [product, setProduct] = useState(null);

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

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <div>
        {product.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={product.name}
            style={{ width: "200px" }}
          />
        ))}
      </div>
    </div>
  );
}
