import React from "react";
import { motion } from "framer-motion";

const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 0.6, 1, 3.65, 3.35, 2.95, 0.4, 1.1, 1],
        opacity: [1, 0.2, 0.4, 0.8, 0.2, 0.6, 0.1, 0.4, 0.65],
        borderRadius: ["20", "20", "50", "80", "20"],
      }}
      transition={{
        duration: 2.35,
        delay: 0.18,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#f3ddb1] opacity-10 rounded-full h-[335px] w-[335px] animate-ping" />
      <div className="absolute border border-yellow-500 opacity-50 rounded-full h-[350px] w-[350px]" />
      <div className="absolute border border-[#f3ede1] rounded-full h-[500px] w-[500px]" />
      <div className="absolute border border-blue-500 opacity-40 rounded-full h-[650px] w-[650px] animate-pulse" />
      <div className="absolute border border-[#f3ede1] rounded-full h-[800px] w-[800px]" />
    </motion.div>
  );
};

export default BackgroundCircles;
