// import React from "react";
// import { useParams } from "react-router-dom";
// import "../styles/ceramics-details.css";
// import ProductCard from "../components/ProductCard";
// import ceramic1 from "../assets/ceramics/ceramic1.jpg";
// import ceramic2 from "../assets/ceramics/ceramic2.jpg";
// import ceramic3 from "../assets/ceramics/ceramic3.jpg";

// export default function ProductsType() {
//   const { id } = useParams();

//   const products = [
//     {
//       id: "1",
//       name: "Marble",
//       img: ceramic1,
//       description: "Description",
//     },
//     {
//       id: "2",
//       name: " Granite",
//       img: ceramic2,
//       description: "Description",
//     },
//     {
//       id: "3",
//       nname: "Ceramic",
//       img: ceramic3,
//       description: "Description",
//     },
//      {
//       id: "4",
//       nname: "Porcelain",
//       img: ceramic3,
//       description: "Description",
//     },
//   ];

//   const product = products.find((p) => p.id === id);

//   if (!product) return <h2>No Such Product</h2>;

//   return (
//    <ProductCard />
//   );
// }
