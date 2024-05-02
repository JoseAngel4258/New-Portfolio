import React from "react";
import "../styles.css";
import { motion } from "framer-motion";
import { transition1 } from "../utils/motion";
import { fadeIn } from "../utils/motion";
import { staggerContainer } from "../utils/motion";

import VideoBackground from "../components/VideoBackground";

const Contact = () => {
  return (
    <>
      <VideoBackground src="/assets/videos/golden-forest.mp4" />
      <motion.section
        className="flex flex-col justify-between"
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.5 }}
        transition={transition1}
      >
        <div className="flex flex-col pl-[13%] px-[8%]  pt-[6.8%]   overflow-hidden w-full">
          <div className="flex flex-row ">
            <div>
              {" "}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.33, duration: 0.7 }}
                variants={{
                  hidden: { opacity: 0, x: -75 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex flex-row flex-wrap lg:pt-5 pt-16 lg:w-[40%] gap-8 gap-x-12 text-[#f5f5D9] z-10 h-[100%]"
              >
                <div className="w-[70%] h-[]">
                  <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.23, duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: -75 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className="md:text-[85px] sm:text-[60px] xs:text-[50px] text-[40px] text-shadow text-[#f5f5d1]"
                  >
                    Contact
                  </motion.h2>
                  <p className="opacity-[84%] text-[#ffffe6d8]  text-[29px] leading-[19px] text-shadow w-[100%] mb-8">
                    Get in touch with me via social media or email.
                  </p>
                </div>
                <a
                  className="flex items-center  gap-3 w-[218px] text-[35px]"
                  href="https://www.instagram.com/joseangeru/"
                >
                  <img
                    className="w-20 h-20 hover:scale-110 transition-all"
                    src="/assets/instagram_pixel.png"
                    alt="Instagram"
                  />
                  Instagram
                </a>
                <a
                  className="flex items-center  gap-3 w-[218px] text-[35px]"
                  href="https://twitter.com/joseangeru"
                >
                  <img
                    className="w-20 h-20 hover:scale-110 transition-all"
                    src="/assets/twitter_pixel.png"
                    alt="Twitter"
                  />
                  Twitter(X)
                </a>
                <a
                  className="flex items-center gap-3 w-[218px] text-[35px]"
                  href="https://www.facebook.com/joseph.angel.184/"
                >
                  <img
                    className="w-20 h-20 hover:scale-110 transition-all"
                    src="/assets/facebook_pixel.png"
                    alt="Facebook"
                  />
                  Facebook
                </a>
                <a
                  className="flex items-center gap-3 w-[218px] text-[35px]"
                  href="https://www.linkedin.com/in/jos%C3%A9-%C3%A1ngel-bravo-859839218/"
                >
                  <img
                    className="w-20 h-20 hover:scale-110 transition-all"
                    src="/assets/linkedin_pixel.png"
                    alt="Linkedin"
                  />
                  Linkdin
                </a>
              </motion.div>
            </div>
          </div>
        </div>{" "}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.35 }}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          className="backdrop-filter backdrop-blur-lg w-full mt-12 lg:mt-28 lg:h-[350px] h-[550px] items-center justify-center flex"
        >
          <div className="w-full flex">
            <div className="w-[100%] flex">
              <form
                className="w-full flex flex-col lg:flex-row"
                action="https://getform.io/f/pbgxnloa"
                method="POST"
              >
                <div className="w-full pl-0 lg:pl-[13%] lg:w-[50%] flex flex-col justify-center items-center lg:items-start">
                  <h3 className="max-[820px]:w-full min-[768px]:pl-[86px] pl-12 lg:pl-0 md:text-[45px] sm:text-[40px] xs:text-[30px] text-[30px] mb-8 lg:mb-4 text-shadow text-[#f5f5d1] mt-0 xl:-mt-[112px]">
                    Send me an Email
                  </h3>
                  <div className="w-full flex flex-col items-center lg:items-start">
                    <p className="max-[820px]:w-full min-[768px]:pl-[91px] pl-12 lg:pl-0 text-[#ffffe6d8] text-[24px] -mt-[16px]">
                      Name
                    </p>
                    <input
                      className="w-[78%] lg:w-[85%] p-2 focus:outline-none rounded-lg"
                      type="text"
                      name="name"
                    />

                    <div className="w-full flex flex-col items-center lg:items-start">
                      <p className="max-[820px]:w-full min-[768px]:pl-[91px] pl-12 lg:pl-0 text-[#ffffe6d8] text-[24px]">
                        Email
                      </p>
                      <input
                        className="w-[78%] lg:w-[85%] p-2 focus:outline-none rounded-lg"
                        type="text"
                        name="email"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-[50%] flex flex-col justify-center items-center lg:items-start lg:mt-[7.5px] lg:pr-[13%]">
                  <p className="max-[820px]:w-full min-[768px]:pl-[91px] pl-12 lg:pl-0 text-[#ffffe6d8] text-[24px] mt-4 lg:mt-[6px]">
                    Message
                  </p>
                  <textarea
                    name="message"
                    rows="5"
                    className="w-[78%] lg:w-[100%] p-2 rounded-lg focus:outline-none"
                  ></textarea>
                  <div className="w-full justify-center xl:justify-end flex">
                    <button className="text-[#ffffe6d8] text-[24px] mt-4  bg-[#131212] p-2 rounded-lg border border-[#ffffe6d8]">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Contact;
