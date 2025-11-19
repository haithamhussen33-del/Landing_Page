import HeaderTop from "../components/HeaderTop";
import Footer from "../components/Footer";
import NavigationBar from "./NavigationBar";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div className="Layout">
      <HeaderTop />
      <NavigationBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
