import React, { useState } from "react";

import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const menuVariants = {
  hidden: {
    x: "100%",
  },
  shows: { x: 0 },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="text-black lg:hidden">
      <div onClick={toggleMenu} className="text-3xl text-white cursor-pointer">
        <CgMenuRight />
      </div>
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "shows" : ""}
        transition={{ stiffness: 100, duration: 0.2 }}
        className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20"
      >
        <div
          onClick={toggleMenu}
          className="text-4xl absolute z-30 left-4 top-14 text-black  cursor-pointer"
        >
          <IoMdClose />
        </div>
        <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-black text-3xl font-bold">
          <li>
            <Link onClick={toggleMenu} to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link onClick={toggleMenu} to={"/about"}>
              About
            </Link>
          </li>
          <li>
            <Link onClick={toggleMenu} to={"/projects"}>
              Projects
            </Link>
          </li>
          <li>
            <Link onClick={toggleMenu} to={"/contact"}>
              Contact
            </Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
