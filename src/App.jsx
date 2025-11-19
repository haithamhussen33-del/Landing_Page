import { useState } from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import "./styles/NavigationBar.css";
import "./styles/Footer.css";
import logoImage from "./assets/images/casa-text.png";
import HeaderTop from "./components/HeaderTop";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import "./index.css";
import { Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}
