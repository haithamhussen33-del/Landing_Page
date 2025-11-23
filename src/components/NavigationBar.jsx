import logoImage from "../assets/images/text-casa.png";
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
          <img src={logoImage} alt="Company Logo" className="logo-img" />
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
            <NavLink
              to={"/"}
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item-dropdown">
            <div className="dropdown-toggle" onClick={toggleDropdown}>
              <NavLink
                to={"/products"}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown();
                }}
              >
                Products
              </NavLink>
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
                  to={"/products/1"}
                  className={({ isActive }) =>
                    isActive ? "dropdown-link active" : "dropdown-link"
                  }
                  onClick={closeMobileMenu}
                >
                  Ceramics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/products/2"}
                  className={({ isActive }) =>
                    isActive ? "dropdown-link active" : "dropdown-link"
                  }
                  onClick={closeMobileMenu}
                >
                  Granit
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/products/3"}
                  className={({ isActive }) =>
                    isActive ? "dropdown-link active" : "dropdown-link"
                  }
                  onClick={closeMobileMenu}
                >
                  Marble
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/products/4"}
                  className={({ isActive }) =>
                    isActive ? "dropdown-link active" : "dropdown-link"
                  }
                  onClick={closeMobileMenu}
                >
                  Porcelain
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={closeMobileMenu}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/About Us"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={closeMobileMenu}
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
