import React from "react";
import "../styles.css";
import { motion } from "framer-motion";
import { transition1 } from "../utils/motion";
import { fadeIn } from "../utils/motion";
import { staggerContainer } from "../utils/motion";

import VideoBackground from "../components/VideoBackground";

const cards = [
  {
    title: "ABDO77 Web Site #2",
    arrow: "/assets/arrow.png",
    href: "https://abdo77.netlify.app/",
    description:
      "The second Web Site I created for the company ABDO77, I learned a lot working on this one, concepts like automatic carousel and different ways to work on the scroll system.",
    src: "/assets/abdowebsite.png",
    technologies: ["React", "Vite", "TailwindCSS", "Framer Motion", "Netlify"],
  },
  {
    title: "Anime Website",
    arrow: "/assets/arrow.png",
    href: "https://anime-gray.netlify.app/",
    description:
      "Website I worked on to practice the Infinite Scroll concept, it worked perfectly on development although on production it didn't. I tried to fix it but I couldn't, so I decided to work on the concept another time.",
    src: "/assets/animepage.png",
    technologies: ["NextJS", "CSS", "Netlify"],
  },
  {
    title: "ABDO77 Web Site",
    arrow: "/assets/arrow.png",
    href: "https://abdo-website.netlify.app/",
    description:
      "The First Website I developed for a company, which actually was the first company I worked in.",
    src: "/assets/abdolanding.png",
    technologies: ["NextJS", "TailwindCSS", "Framer Motion", "Netlify"],
  },
  {
    title: "Fefy's Cakes",
    arrow: "/assets/arrow.png",
    href: "https://fefyscakes.netlify.app/",
    description:
      "A Landing Page I created for my mother as I wanted to implement the new concepts I learned. It's pretty simple, yet very charming.",
    src: "/assets/fefyscakes.png",
    technologies: ["HTML", "CSS", "Netlify"],
  },
  {
    title: "Milky Way Electronics",
    arrow: "/assets/arrow.png",
    href: "https://mkwelectronics.netlify.app/?",
    description:
      "Landing Page I made to practice the basics of Front-End Development and the principles of Web Design.",
    src: "/assets/mkwelectronics.png",
    technologies: ["HTML", "CSS", "Netlify"],
  },
];

const ProjectCard = ({
  src,
  title,
  arrow,
  href,
  description,
  technologies,
  index,
}) => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      animate="show"
      viewport={{ once: true, amount: 0.25 }}
      className="hover:scale-105 transition-all flex items-center justify-center"
    >
      <motion.a
        href={href}
        target="_blank"
        variants={fadeIn("right", "spring", 0.3 * index, 0.6)}
        className="flex flex-col justify-center items-center lg:justify-start lg:items-start lg:flex-row relative rounded-xl shadow-2xl bg-[#131212] transition-all lg:w-[520px] lg:p-5 lg:pr-2 p-6 py-8 text-shadow3 group w-[70%] border border-[#f3f3d3]"
      >
        <img
          className="object-cover rounded-xl mt-[8px] lg:mr-4 w-[100%] lg:w-[41%]  h-[100%] hover:cursor-pointer hover:scale-105 transition-all mb-4"
          src={src}
          alt="Imagen"
        />

        <div>
          <div className="flex gap-2 justify-start w-full px-2 hover:cursor-pointer">
            {" "}
            <h2 className="text-[24px] text-[#f5f5d1]">{title}</h2>
            <img
              className="w-[25px] object-scale-down group-hover:translate-x-[5px] group-hover:-translate-y-[5px] transition-all -ml-[0.8px]"
              src={arrow}
            />
          </div>
          <div className="w-full px-2 mb-4 mt-2">
            <p className="opacity-[80%] text-[#ffffe6d8]  text-[19px] leading-[19px]">
              {description}
            </p>
          </div>
          <ul className="ml-2 flex flex-wrap justify-items-center gap-x-5 gap-y-2 text-[#f5f5d1]">
            {technologies &&
              technologies.map((tech, techIndex) => (
                <li
                  className="bg-[#ffffa9b7] py-[4px] px-[14px] shadow-2xl text-shadow3 text-[16.5px] rounded-3xl hover:scale-105 transition-all text-center"
                  key={techIndex}
                >
                  {tech}
                </li>
              ))}
          </ul>
        </div>
      </motion.a>
    </motion.section>
  );
};

const Projects = () => {
  return (
    <>
      <VideoBackground src="/assets/videos/sky-and-river.mp4" />
      <motion.section
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.5 }}
        transition={transition1}
        className="flex flex-col items-center justify-center pt-[24%] xl:pt-[6%] overflow-hidden"
      >
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.23, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          className=" md:text-[70px] sm:text-[60px] xs:text-[50px] text-[50px] text-shadow text-shadow1 text-[#f5f5d1]"
        >
          Projects
        </motion.h2>

        <div className="flex flex-wrap w-full lg:w-[70%] items-center justify-center gap-9">
          <div className="mt-20 flex flex-wrap justify-center gap-14 max-w-[100%]">
            {cards.map((cards, index) => (
              <ProjectCard key={cards.title} index={index} {...cards} />
            ))}
          </div>
        </div>
        <div className="h-48" />
      </motion.section>{" "}
    </>
  );
};

export default Projects;
