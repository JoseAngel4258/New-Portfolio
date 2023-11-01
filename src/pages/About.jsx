import React from "react";
import "../styles.css";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { staggerContainer } from "../utils/motion";
import { TypeAnimation } from "react-type-animation";

import webdev from "/assets/about/webdev.png";
import nativedev from "/assets/about/nativedev.png";
import gamedev from "/assets/about/gamedev.png";
import contentdev from "/assets/about/contentdev.png";

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
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Tilt className="min-[426px]:w-full max-w-[250px]">
        <motion.div
          className="w-full green-pink-gradient p-[1.2px] rounded-[20px]"
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        >
          <div className="bg-slate-950 rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center">
            <img src={icon} alt={title} className="w-20 h-20 object-cover" />
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    </motion.section>
  );
};

const About = () => {
  return (
    <section className="flex flex-col px-4 md:px-12">
      <motion.div>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.13, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          className="sm:text-[18px] text-[14px] text-[#ffffffb7] uppercase tracking-wider mt-36"
        >
          Introduction
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.23, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
        >
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Who Am I?",
              2000, // wait 1s before replacing "Mice" with "Hamsters"
              "What do I do?",
              2000,
              "My experience.",
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
      </motion.div>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.33, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        }}
        className="mt-4 text-[#ffffffb7] text-[17px] max-w-5xl leading-[30px]"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
      <div className="mt-20 flex flex-wrap justify-center md:justify-normal gap-10">
        {service.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <div className="h-16" />
    </section>
  );
};

export default About;
