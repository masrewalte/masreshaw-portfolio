import React from "react";
import AnimatedPage from "../components/AnimatedPage";
import profilePic from "../assets/images/profile-pic.JPG";
import { motion } from "framer-motion";
import { skills } from "../../data";

const About = () => {
  return (
    <AnimatedPage>
      <div className="container max-w-7xl mx-auto md:p-4 text-gray-300">
        <h1 className=" text-4xl font-bold text-center mb-8">About Me</h1>
        <div className=" flex flex-col md:flex-row items-center bg-gray-800 p-8 rounded-lg shadow-xl ">
          <img
            src={profilePic}
            alt="Masre Walte"
            className=" md:w-80 md:h-80 w-48 h-48 rounded-full md:rounded-3xl object-cover mb-6 md:mb-0 md:mr-8"
          />
          <div className=" text-lg text-gray-400 p-5">
            <p className=" mb-4 border border-gray-700 rounded-2xl p-3  ">
              Hello! I'm Masreshaw Waltengus, a passionate and driven Full Stack
              Web Developer with a strong foundation in modern web technologies.
              My journey into the world of coding began out of a deep curiosity
              for how things work on the internet, which quickly evolved into a
              full-fledged passion for building beautiful, functional, and
              user-centric web applications.
            </p>
            <p className=" mb-4  border border-gray-700 rounded-2xl p-3">
              I specialize in the MERN stack (MongoDB, Express.js, React,
              Node.js), which allows me to handle everything from database
              management and server-side logic to creating interactive and
              dynamic user interfaces. I thrive on the challenge of solving
              complex problems and am constantly learning and adapting to new
              technologies and best practices in the ever-evolving landscape of
              web development.
            </p>
            <p className=" border border-gray-700 rounded-2xl p-3">
              When I'm not coding, you can find me exploring new hiking trails,
              experimenting with new recipes in the kitchen, or contributing to
              open-source projects. I believe in the power of technology to
              connect people and create meaningful experiences, and I am excited
              to bring my skills and dedication to a team that shares this
              vision.
            </p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="my-12 text-gray-400"
        >
          <h2 className=" text-3xl font-bold mb-6">My Skills</h2>
          <div className=" flex flex-wrap gap-5">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-700 text-white py-2 px-4 rounded-lg"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedPage>
  );
};

export default About;
