import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Logo from "/assets/header/logo.png";
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
      className={`flex items-center fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg-[140px] transition-all ${
        scrolled ? "bg-slate-950" : ""
      }`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-end">
        <nav className="hidden lg:flex gap-x-11 font-semibold">
          <Link className="text-white hover:text-[#d7d7a8] transition" to={"/"}>
            Home
          </Link>
          <Link
            className="text-white hover:text-[#d7d7a8] transition"
            to={"/about"}
          >
            About
          </Link>
          <Link
            className="text-white hover:text-[#d7d7a8] transition"
            to={"/projects"}
          >
            Projects
          </Link>
          <Link
            className="text-white hover:text-[#d7d7a8] transition"
            to={"/contact"}
          >
            Contact
          </Link>
        </nav>
      </div>
      <MobileNav />
    </motion.header>
  );
};

export default Header;
