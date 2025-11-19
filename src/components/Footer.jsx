import React from "react";
import "../styles/Footer.css";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 1 — قسم المعلومات الأساسية */}
        <div className="footer-section company-info">
          <h3 className="footer-title">CeramicExport</h3>
          <p className="footer-text">
            Premium Ceramic & Tile Export — Delivering quality materials to
            global markets with a focus on durability, elegance, and
            craftsmanship.
          </p>
        </div>

        {/* 2 — روابط التواصل */}
        <div className="footer-section contact-info">
          <h4 className="footer-subtitle">Contact Information</h4>

          <p className="footer-item">
            <Mail className="footer-icon" />
            contact@ceramicexport.com
          </p>

          <p className="footer-item">
            <Phone className="footer-icon" />
            +963 93 750 4277
          </p>

          <p className="footer-item">
            <MapPin className="footer-icon" />
            Theo Uden Masmanstraat 52, 3813 ZE Amersfoort
          </p>
        </div>

        {/* 3 — روابط وسائل التواصل */}
        <div className="footer-section social-info">
          <h4 className="footer-subtitle">Follow Us</h4>

          <div className="social-icons">
            <a href="https://www.google.com/" target="_blank">
              <Facebook />
            </a>
            <a href="#" target="_blank">
              <Instagram />
            </a>
            <a href="#" target="_blank">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>

      {/* الخط السفلي */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Casapiugroup — All Rights Reserved.</p>
      </div>
    </footer>
  );
}
