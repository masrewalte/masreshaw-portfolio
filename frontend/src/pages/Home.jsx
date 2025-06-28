import React from "react";
import AnimatedPage from "../components/AnimatedPage";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profileImage from "../assets/images/profile-pic.JPG";
import Skills from "./Skills";
import Contact from "./Contact";
const Home = () => {
  return (
    <AnimatedPage>
      <div className=" min-h-screen flex items-center justify-center bg-gray-900">
        <div className=" text-center p-8 pt-0">
          <motion.img
            src={profileImage}
            alt="Profile"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-48 h-48 rounded-full mx-auto mb-6 shadow-2xl border-4 border-emerald-400"
          />
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className=" text-5xl font-extrabold text-white mb-2"
          >
            Hi, I'm <span className=" text-emerald-400 mb-6">Masreshaw</span>
          </motion.h1>
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className=" text-2xl text-gray-300 mb-6"
          >
            A Full Stack Web Developer
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className=" max-w-2xl mx-auto text-gray-400 mb-8"
          >
            I specialize in building exceptional, high-quality websites and
            applications. With a strong foundation in both front-end and
            back-end technologies, I transform complex problems into elegant,
            user-friendly solutions. My passion lies in crafting responsive,
            performant, and accessible digital experiences.
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className=" flex flex-col md:flex-row justify-center gap-4"
          >
            <Link
              to={"/projects"}
              className=" bg-emerald-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-emerald-600 transition-colors"
            >
              View My Work
            </Link>
            <Link
              to={"/about"}
              className="bg-cyan-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-cyan-600 transition-colors"
            >
              Learn More About Me
            </Link>
            <Link
              to={"/contact"}
              className=" bg-gray-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </div>
      <Skills />
      <Contact />
    </AnimatedPage>
  );
};

export default Home;
