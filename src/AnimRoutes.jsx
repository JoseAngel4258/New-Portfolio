import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Circle from "./components/Circle";

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode="wait">
      <div className="hidden xl:block">
        <Circle />
      </div>

      <Routes key={location.pathname} location={location}>
        <Route
          path="/"
          element={
            <div className="h-[100vh] font-light ">
              {" "}
              <Home />
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div className="overflow-x-hidden">
              <section>
                <About />
              </section>
            </div>
          }
        />
        <Route
          path="/projects"
          element={
            <div className="overflow-x-hidden z-0">
              <section className="snap-center">
                <Projects />
              </section>
            </div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;
