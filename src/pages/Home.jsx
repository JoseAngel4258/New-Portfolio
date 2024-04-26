import React from "react";

import { Link } from "react-router-dom";
import BackgroundCircles from "../components/BackgroundCircles";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { transition1 } from "../utils/motion";
import VideoBackground from "../components/VideoBackground";

const Home = () => {
  return (
    <>
      <VideoBackground src="/assets/videos/pixelroom.mp4" />
      <motion.section
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.5 }}
        transition={transition1}
        className="h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-transparent text-[#dfdfbf]"
      >
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
            className="sm:text-[49px] text-[44px] text-shadow font-normal text-[#f5f5d1] z-20"
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
            className="flex brightness-[85%] sm:text-3xl text-2xl font-light text-[#f5f5D1] z-10 px-2 text-center"
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
          className="flex justify-between pt-5 max-w-[200px] w-full text-[#f5f5D9] z-10"
        >
          <a href="mailto:josebravojs1810@gmail.com?Subject=I'm%20interested%20in%20contacting%20you!">
            <img
              className="w-8 h-8 hover:scale-110 transition-all"
              src="/assets/instagram_pixel.png"
              alt="Instagram"
            />
          </a>
          <a href="mailto:josebravojs1810@gmail.com?Subject=I'm%20interested%20in%20contacting%20you!">
            <img
              className="w-8 h-8 hover:scale-110 transition-all"
              src="/assets/twitter_pixel.png"
              alt="Twitter"
            />
          </a>
          <a href="mailto:josebravojs1810@gmail.com?Subject=I'm%20interested%20in%20contacting%20you!">
            <img
              className="w-8 h-8 hover:scale-110 transition-all"
              src="/assets/facebook_pixel.png"
              alt="Facebook"
            />
          </a>
          <a href="mailto:josebravojs1810@gmail.com?Subject=I'm%20interested%20in%20contacting%20you!">
            <img
              className="w-8 h-8 hover:scale-110 transition-all"
              src="/assets/linkedin_pixel.png"
              alt="Linkedin"
            />
          </a>
          <a href="mailto:josebravojs1810@gmail.com?Subject=I'm%20interested%20in%20contacting%20you!">
            <img
              className="w-8 h-8 hover:scale-110 transition-all"
              src="/assets/github_pixel.png"
              alt="Linkedin"
            />
          </a>
        </motion.div>
        <div>
          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.33, duration: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Link to={"/about"}>
              <img
                className="h-40 w-40 absolute right-0 top-1/2 -translate-y-1/2 transform -translate-x-[100%] hover:scale-110 transition hidden lg:block drop-shadow-2xl"
                src="/assets/flecha-derecha.png"
                alt=""
              />
            </Link>
          </motion.div>
        </div>
        <div className="absolute left-0 bottom-0 pl-5 pb-3 text-[#f5f5D9] text-shadow">
          <p>© 2024 José Bravo </p>
        </div>
      </motion.section>
    </>
  );
};

export default Home;
