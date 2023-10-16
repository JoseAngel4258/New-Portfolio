import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import BackgroundCircles from "./BackgroundCircles";
import Sidenav from "./Sidenav";
import Sphere from "./Sphere";

const Main = () => {
  return (
    <div className="">
      <Sidenav />

      <img
        className="h-[100vh] w-full object-cover"
        src="/assets/bg.jpg"
        alt="/"
      />
      <section className="h-[100vh] w-full absolute top-0 left-0 bg-black bg-opacity-40 overflow-hidden">
        <Sphere />
        <div className="max-w-[700px] m-auto h-full w-full  flex flex-col justify-center items-center bg-scroll">
          <BackgroundCircles />
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="sm:text-5xl text-4xl font-bold text-[#f3ede1] z-50"
          >
            I&apos;m José Ángel
          </motion.h1>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex sm:text-3xl text-2xl pt-4 text-[#f3ede1] z-50 px-2 text-center"
          >
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "I'm a Coder.jsx",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "I'm a <FrontEndDeveloper />",
                2000,
                "I'm a Game-Developer.exe",
                2000,
              ]}
              wrapper="p"
              speed={50}
              style={{
                fontSize: "1em",
                display: "inline-block",
                paddingLeft: "5px",
              }}
              repeat={Infinity}
            />
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex justify-between pt-6 max-w-[200px] w-full text-[#f3ede1] z-50"
          >
            <FaTwitter
              className="cursor-pointer hover:scale-110 ease-soft-spring duration-300"
              size={20}
            />
            <FaFacebook
              className="cursor-pointer hover:scale-110 ease-soft-spring duration-300"
              size={20}
            />
            <FaInstagram
              className="cursor-pointer hover:scale-110 ease-soft-spring duration-300"
              size={20}
            />
            <FaLinkedinIn
              className="cursor-pointer hover:scale-110 ease-soft-spring duration-300"
              size={20}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Main;
