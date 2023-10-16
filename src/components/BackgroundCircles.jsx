import React from "react";
import { motion } from "framer-motion";

const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 1, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.4, 0.2, 0.1, 0.65],
        borderRadius: ["20", "20", "50", "80", "20"],
      }}
      transition={{
        duration: 2.35,
      }}
      className="abdoluse flex justify-center items-center "
    >
      <div className="absolute border border-[#f3ede1] opacity-60 rounded-full h-[200px] w-[200px] mt-[140px] animate-ping" />
      <div className="absolute border border-violet-500 opacity-50 rounded-full h-[350px] w-[350px] mt-[140px]" />
      <div className="absolute border border-[#f3ede1] rounded-full h-[500px] w-[500px] mt-[140px]" />
      <div className="absolute border border-purple-400 opacity-50 rounded-full h-[650px] w-[650px] mt-[140px] animate-pulse" />
      <div className="absolute border border-[#f3ede1] rounded-full h-[800px] w-[800px] mt-[140px]" />
    </motion.div>
  );
};

export default BackgroundCircles;
