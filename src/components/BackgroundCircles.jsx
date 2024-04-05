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
      <div className="absolute border border-[#e4e489]  opacity-[0.13] rounded-full h-[335px] w-[335px] animate-ping" />
      <div className="absolute border border-[#f5f5d1]  rounded-full h-[360px] w-[360px]" />
      <div className="absolute border border-[#f3f3be]  rounded-full h-[510px] w-[510px]" />
      <div className="absolute border border-[#f1f1af]  rounded-full h-[660px] w-[660px] animate-pulse" />
      <div className="absolute border border-[#f5f5d1]  rounded-full h-[810px] w-[810px]" />
    </motion.div>
  );
};

export default BackgroundCircles;
