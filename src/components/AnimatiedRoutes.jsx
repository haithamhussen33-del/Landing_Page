import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Contact from "./Contact";

import ProductList from "../pages/ProductList";
import ProductSubTypeInfo from "../pages/ProductSubTypeInfo";

import { AnimatePresence, motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, x: -100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const AnimatedPage = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    {children}
  </motion.div>
);

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <AnimatedPage>
                <Home />
              </AnimatedPage>
            }
          />

          <Route
            path="/contact"
            element={
              <AnimatedPage>
                <Contact />
              </AnimatedPage>
            }
          />

          {/* صفحة قائمة منتجات فئة معينة */}
          <Route
            path="/products/:category"
            element={
              <AnimatedPage>
                <ProductList />
              </AnimatedPage>
            }
          />

          {/* صفحة تفاصيل منتج */}
          <Route
            path="/products/:category/:productId"
            element={
              <AnimatedPage>
                <ProductSubTypeInfo />
              </AnimatedPage>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
