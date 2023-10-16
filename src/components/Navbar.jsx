import React, { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
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
    <nav
      className={`flex items-center w-full text-zinc-200 py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center text-white max-w-7xl mx-auto px-16">
        <div>
          <ul className="flex flex-row items-center gap-5">
            <li>
              <a href="#" className="relative text-gray-200 hover:text-white">
                Home
                <span className="line absolute w-0 h-0 bg-white left-0 bottom-0 transition-transform transform translate-x-0 group-hover:translate-x-full"></span>
              </a>
            </li>
            <li>
              <a href="#" className="relative text-gray-200 hover:text-white">
                About
                <span className="line absolute w-0 h-0 bg-white left-0 bottom-0 transition-transform transform translate-x-0 group-hover:translate-x-full"></span>
              </a>
            </li>
            <li>
              <a href="#" className="relative text-gray-200 hover:text-white">
                Work
                <span className="line absolute w-0 h-0 bg-white left-0 bottom-0 transition-transform transform translate-x-0 group-hover:translate-x-full"></span>
              </a>
            </li>
            <li>
              <a href="#" className="relative text-gray-200 hover:text-white">
                Projects
                <span className="line absolute w-0 h-0 bg-white left-0 bottom-0 transition-transform transform translate-x-0 group-hover:translate-x-full"></span>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-row items-center justify-center gap-2 cursor-pointer">
          <MdEmail size={21} />
          <p className="uppercase">Get in touch</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
