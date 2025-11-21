import HeaderTop from "../components/HeaderTop";
import Footer from "../components/Footer";
import NavigationBar from "./NavigationBar";
import { Outlet } from "react-router-dom";
import VantaBackground from "./VantaBackground";
export default function Layout() {
  return (
    <div className="Layout">
      <HeaderTop />
      <NavigationBar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
