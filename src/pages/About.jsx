import React from "react";
import "../styles.css";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { staggerContainer } from "../utils/motion";
import { transition1 } from "../utils/motion";

import webdev from "/assets/about/webdev.png";
import nativedev from "/assets/about/nativedev.png";
import gamedev from "/assets/about/gamedev.png";
import contentdev from "/assets/about/contentdev.png";
import GifBackground from "../components/GifBackground";

const service = [
  { title: "Web Developer", icon: webdev },
  { title: "React Native Developer", icon: nativedev },
  { title: "Game Developer", icon: gamedev },
  { title: "Content Creator", icon: contentdev },
];

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      animate="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Tilt className="min-[426px]:w-full max-w-[270px]">
        <motion.div
          className="w-full green-pink-gradient p-[1.2px] rounded-[20px]"
          variants={fadeIn("right", "spring", 0.3 * index, 0.6)}
        >
          <div className="bg-[#000000e1] rounded-[20px] py-5 px-12 min-h-[360px] flex flex-col justify-evenly items-center">
            <img src={icon} alt={title} className="w-20 h-20 object-cover" />
            <h3 className="text-[#f5f5d1] text-[20px] text-center">{title}</h3>
          </div>
        </motion.div>
      </Tilt>
    </motion.section>
  );
};

const About = () => {
  return (
    <>
      <GifBackground src="/assets/night_city.gif" />
      <motion.section
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.5 }}
        transition={transition1}
        className="flex flex-col items-center justify-center gap-3 h-full pt-24 md:pt-36 xl:h-[100vh] relative overflow-hidden"
      >
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.23, duration: 0.35 }}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          className="text-[#f5f5D1] md:text-[70px] sm:text-[60px] xs:text-[50px] text-[40px] text-shadow "
        >
          Who am I?
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mt-4 md:mt-7 text-[#f5f5d1f1] text-[23px]  sm:text-[25px] text-xl max-w-[80%] sm:w-[900px] sm:max-w-[90%] leading-[30px] text-shadow"
        >
          I'm an experienced web developer specializing in{" "}
          <span className="text-[#f7df1e]">JavaScript</span> and{" "}
          <span className="text-[#007acc]">TypeScript</span>. I'm proficient in
          frameworks like <span className="text-[#61dbfb]">React</span>,{" "}
          <span className="text-[#68A063]">Node.js</span>,{" "}
          <span className="text-[#ffff] text-shadow3">Three.js</span>, and{" "}
          <span className="text-[#000] text-shadow2">Next.js</span>. Known for
          my attention to detail, adaptability, and commitment to continuous
          learning.
        </motion.p>
        <div className="mt-12 md:mt-20 flex flex-wrap justify-center gap-10 max-w-[90%]">
          {service.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
        <div className="h-16" />
      </motion.section>
    </>
  );
};

export default About;
