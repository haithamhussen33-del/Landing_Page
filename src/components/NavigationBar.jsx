import logoImage from "../assets/images/casa-text.png";
import { Link } from "react-router-dom";
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
            <Link to={"/"}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link to={"/contact"}>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
