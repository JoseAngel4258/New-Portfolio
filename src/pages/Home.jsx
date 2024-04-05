import React from "react";

import BackgroundCircles from "../components/BackgroundCircles";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { transition1 } from "../utils/motion";
import VideoBackground from "../components/VideoBackground";
import Circle from "../components/Circle";

const Home = () => {
  return (
    <>
      <Circle />
      <motion.section
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.5 }}
        transition={transition1}
        className="h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-transparent text-[#dfdfbf]"
      >
        <VideoBackground />
        <motion.img
          initial="hidden"
          whileInView="visible"
          animate={{
            scale: [0.1, 1],
          }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.27, duration: 0.7 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          className="relative rounded-full w-32 h-32 overflow-hidden object-cover mb-3"
          src="/assets/punpun.gif"
          alt="pfp"
        />
        <BackgroundCircles />

        <div className="max-w-[700px] flex flex-col justify-center items-center">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.13, duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -75 },
              visible: { opacity: 1, x: 0 },
            }}
            className="sm:text-[48px] text-[42px] font-normal text-[#f5f5d1] z-20"
          >
            I&apos;m José Ángel
          </motion.h1>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.23, duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -75 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex sm:text-3xl text-2xl font-light text-[#f5f5D1] z-50 px-2 text-center"
          >
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Coder.jsx",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "<FrontEndDeveloper />",
                2000,
                "Game-Developer.exe",
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
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.33, duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex justify-between pt-5 max-w-[200px] w-full text-[#f5f5D9] z-50"
        >
          <FaTwitter
            className="cursor-pointer hover:scale-110 hover:text-cyan-400 ease-soft-spring duration-300"
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
      </motion.section>
      <div className="absolute left-0 bottom-0 pl-5 pb-3 text-[#f5f5D9]">
        <p>Copyright © All rights reserved. </p>
      </div>
    </>
  );
};

export default Home;
