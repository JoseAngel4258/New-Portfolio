import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Work from "./pages/Work";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import StarsBackground from "./components/StarsBackground";
import Skills from "./components/Skills";

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route
          path="/"
          element={
            <div className="h-[100vh] snap-y snap-mandatory overflow-scroll overflow-x-hidden z-0">
              <section className="snap-center">
                {" "}
                <Home />
              </section>

              <section className="snap-center">
                <Projects />
              </section>
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div className="overflow-x-hidden">
              <section>
                <About />
                <Skills />
                <StarsBackground />
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
