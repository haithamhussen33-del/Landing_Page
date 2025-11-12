import { useState } from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import "./styles/NavigationBar.css";
import "./styles/Footer.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <h1>CeramicExport</h1>
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

      <footer className="footer">
        <p>&copy; 2024 CeramicExport. All rights reserved.</p>
      </footer>
    </div>
  );
}
