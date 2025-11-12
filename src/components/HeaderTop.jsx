import React from "react";
import "../styles/HeaderTop.css";

export default function HeaderTop() {
  return (
    <div className="header-top">
      <div className="header-top-container">
        <div className="contact-info">
          <span>📧 info@ceramicexport.com</span>
          <span>📞 +971 55 123 4567</span>
        </div>
        <div className="top-links">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Blog</a>
        </div>
      </div>
    </div>
  );
}
