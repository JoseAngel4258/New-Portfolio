import React from "react";
import "../styles.css";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { staggerContainer } from "../utils/motion";
import { transition1 } from "../utils/motion";

import VideoBackground from "../components/VideoBackground";

const Projects = () => {
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
        <div className="h-full w-full flex justify-center pt-16 lg:pt-8 xl:pt-0">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.23, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -75 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-[#f5f5D1] md:text-[65px] sm:text-[60px] xs:text-[50px] text-[40px] text-shadow pl-40 md:pl-80 lg:pl-[400pxpx]"
          >
            Projects
          </motion.h2>
        </div>
      </motion.section>{" "}
    </>
  );
};

export default Projects;
