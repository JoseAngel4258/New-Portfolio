import React, { useState } from "react";
import "./Sidenav.css";
import { motion } from "framer-motion";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { LiaCubesSolid } from "react-icons/lia";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] block md:hidden text-white text-3xl"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white text-black flex md:hidden flex-col justify-center items-center z-[99] open-menu ">
          <AiOutlineClose
            onClick={handleNav}
            className="absolute top-4 right-4 text-black text-3xl"
          />
          <a
            onClick={handleNav}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#f3ede1] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            href="#main"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#f3ede1] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            href="#projects"
          >
            <BsPerson size={20} />
            <span className="pl-4">Resume</span>
          </a>
          <a
            onClick={handleNav}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#f3ede1] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            href="#work"
          >
            <LiaCubesSolid size={20} />
            <span className="pl-4">Work</span>
          </a>
          <a
            onClick={handleNav}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#f3ede1] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            href="#projects"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>

          <a
            onClick={handleNav}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#f3ede1] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            href="#contact"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:flex md:flex-col justify-center hidden fixed z-10 h-screen pl-2">
        <motion.div className="flex flex-col ">
          <a
            href="#main"
            className="rounded-full shadow-sm bg-[#f3ede1] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300 hover:text-violet-800"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#main"
            className="rounded-full shadow-sm bg-[#f3ede1] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300 hover:text-violet-800"
          >
            <BsPerson size={20} />
          </a>
          <a
            href="#work"
            className="rounded-full shadow-sm bg-[#f3ede1] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300 hover:text-violet-800"
          >
            <LiaCubesSolid size={20} />
          </a>
          <a
            href="#projects"
            className="rounded-full shadow-sm bg-[#f3ede1] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300 hover:text-violet-800"
          >
            <AiOutlineProject size={20} />
          </a>

          <a
            href="#contact"
            className="rounded-full shadow-sm bg-[#f3ede1] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300 hover:text-violet-800"
          >
            <AiOutlineMail size={20} />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Sidenav;
