import { useState } from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import "./styles/NavigationBar.css";
import "./styles/Footer.css";
import logoImage from "./assets/images/casa-logo.png";
import HeaderTop from "./components/HeaderTop";
import Footer from "./components/Footer";
import "./index.css";
export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="app">
      <HeaderTop />

      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img src={logoImage} alt="Company Logo" className="logo-img" />
          </div>
          <ul className="nav-menu">
            <li>
              <button
                className={activeTab === "home" ? "active" : ""}
                onClick={() => setActiveTab("home")}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className={activeTab === "contact" ? "active" : ""}
                onClick={() => setActiveTab("contact")}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <main className="main-content">
        {activeTab === "home" && <Home />}
        {activeTab === "contact" && <Contact />}
      </main>

      <Footer />
    </div>
  );
}
