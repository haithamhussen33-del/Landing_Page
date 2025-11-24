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
        <div className="footer-section company-info">
          <h3 className="footer-title">CASAPIU</h3>
          <p className="footer-text">
            Premium Ceramic & Tile Export — Delivering quality materials to
            global markets with a focus on durability, elegance, and
            craftsmanship.
          </p>
        </div>

        <div className="footer-section contact-info">
          <h4 className="footer-subtitle">Contact Information</h4>

          <p className="footer-item">
            <Mail className="footer-icon" />
            info@Casapiugroup.com
          </p>

          <p className="footer-item">
            <Phone className="footer-icon" />
            +963 93 750 4277
          </p>

          <p className="footer-item">
            <MapPin className="footer-icon" />
            <a href="https://maps.app.goo.gl/urFcTHFrgSBQYedx7" target="_blank">
              UAE DUBAI ALGOZE FIRST -ADEL MOH ALMARZOUQI-OFFICE 33
            </a>
          </p>
        </div>

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

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Casapiugroup — All Rights Reserved.</p>
      </div>
    </footer>
  );
}
