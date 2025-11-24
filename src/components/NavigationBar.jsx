import logoImage from "../assets/images/casa-logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles/NavigationBar.css";

export default function NavigationBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <img src={logoImage} alt="Company Logo" className="logo-img" loading="lazy" />
        </div>

        <button
          className="hamburger-menu"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span
            className={
              isMobileMenuOpen ? "hamburger-line open" : "hamburger-line"
            }
          ></span>
          <span
            className={
              isMobileMenuOpen ? "hamburger-line open" : "hamburger-line"
            }
          ></span>
          <span
            className={
              isMobileMenuOpen ? "hamburger-line open" : "hamburger-line"
            }
          ></span>
        </button>

        <ul
          className={`nav-menu ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}
        >
          <li>
            <NavLink to="/" end className="nav-link" onClick={closeMobileMenu}>
              Home
            </NavLink>
          </li>

          <li className="nav-item-dropdown">
            <div className="dropdown-toggle" onClick={toggleDropdown}>
              <span className="nav-link">Products</span>
              <span
                className={`dropdown-arrow ${isDropdownOpen ? "open" : ""}`}
              >
                ▼
              </span>
            </div>

            <ul
              className={`dropdown-menu ${
                isDropdownOpen ? "dropdown-open" : ""
              }`}
            >
              <li>
                <NavLink
                  to="/products/ceramics"
                  className="dropdown-link"
                  onClick={closeMobileMenu}
                >
                  Ceramics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products/granite"
                  className="dropdown-link"
                  onClick={closeMobileMenu}
                >
                  Granite
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products/marble"
                  className="dropdown-link"
                  onClick={closeMobileMenu}
                >
                  Marble
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products/porcelain"
                  className="dropdown-link"
                  onClick={closeMobileMenu}
                >
                  Porcelain
                </NavLink>
              </li>
               <li>
                <NavLink
                  to="/products/santryware"
                  className="dropdown-link"
                  onClick={closeMobileMenu}
                >
                  SantryWare
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink
              to="/contact"
              className="nav-link"
              onClick={closeMobileMenu}
            >
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className="nav-link" onClick={closeMobileMenu}>
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
