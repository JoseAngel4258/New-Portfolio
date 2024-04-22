import React from "react";
import "../styles.css";
import { motion } from "framer-motion";
import { transition1 } from "../utils/motion";

import VideoBackground from "../components/VideoBackground";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const project1Technologies = ["HTML", "CSS"];
  const project2Technologies = ["HTML", "CSS", "JavaScript"];

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <VideoBackground src="/assets/videos/test.mp4" />
      <motion.section
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.5 }}
        transition={transition1}
        className="flex flex-col items-center justify-center gap-3 h-full pt-12 md:pt-16 pr-[800px] relative overflow-hidden"
      >
        <div className="h-full w-full flex justify-center pt-32 lg:pt-8 xl:pt-16">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.23, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -75 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-[#f5f5D1] md:text-[65px] sm:text-[60px] xs:text-[50px] text-[40px] text-shadow pl-40 md:pl-80 lg:pl-[140px]"
          >
            Projects
          </motion.h2>
        </div>
        <div>
          <ProjectCard
            img="/assets/bg.jpg"
            title={"Hola mundo"}
            description={
              "Hola criaturitas del señor como estan los amo mucho amo a mi novia de filipinas ajskdhajkh"
            }
            technologies={project1Technologies}
          />
        </div>
      </motion.section>{" "}
    </>
  );
};

export default Projects;
