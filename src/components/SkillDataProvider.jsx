import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const SkillDataProvider = ({ src, width, height, index }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const options = {
      triggerOnce: true,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(ref.current);
      }
    }, options);

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      <img src={src} width={width} height={height} alt="skill image" />
    </motion.div>
  );
};

export default SkillDataProvider;
