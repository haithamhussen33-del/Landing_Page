import logoImage from "../assets/images/text-casa.png";
import { NavLink } from "react-router-dom";
import "../styles/NavigationBar.css";
export default function NavigationBar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <img src={logoImage} alt="Company Logo" className="logo-img" />
        </div>
        <ul className="nav-menu">
          <li>
            <NavLink
              to={"/"}
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
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
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
