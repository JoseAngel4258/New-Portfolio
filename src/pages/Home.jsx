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
import StarsBackground from "../components/StarsBackground";
import VideoBackground from "../components/VideoBackground";

const Home = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.5 }}
        transition={transition1}
        className="h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-transparent"
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
          src="/assets/punpun.jpg"
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
            className="sm:text-5xl text-4xl font-bold text-[#f3ede1] z-20"
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
            transition={{ delay: 0.33, duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -75 },
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
      </motion.section>
    </>
  );
};

export default Home;
