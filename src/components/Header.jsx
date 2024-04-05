import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import MobileNav from "./MobileNav";

import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.07, duration: 0.61 }}
      variants={{
        hidden: { opacity: 0, y: -75 },
        visible: { opacity: 1, y: 0 },
      }}
      className={`flex items-center fixed w-full px-[20px] lg:px-[100px] z-30 h-[100px] lg-[140px] transition-all  ${
        scrolled ? "bg-slate-950" : ""
      }`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-end">
        <nav className="hidden lg:flex gap-x-11 font-concertOne text-2xl text-[#f5f5d1] ">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/projects"}>Projects</Link>
          <Link to={"/contact"}>Contact</Link>
        </nav>
      </div>
      <MobileNav />
    </motion.header>
  );
};

export default Header;
