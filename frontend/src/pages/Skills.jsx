import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiVercel,
  SiNextdotjs,
} from "react-icons/si";

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const mySkills = [
  { name: "React", icon: <FaReact className="text-5xl text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-5xl text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-5xl text-green-500" /> },
  {
    name: "Express.js",
    icon: <SiExpress className="text-5xl text-gray-400" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-5xl text-green-600" />,
  },
  { name: "MySQL", icon: <FaDatabase className="text-5xl text-orange-600" /> },
  {
    name: "REST APIs",
    icon: <FaServer className="text-5xl text-yellow-500" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-5xl text-teal-400" />,
  },
  {
    name: "Git & GitHub",
    icon: <FaGithub className="text-5xl text-orange-800" />,
  },
  { name: "Vercel", icon: <SiVercel className="text-5xl text-white" /> },
];
const Skills = () => {
  return (
    <div className="py-16 pt-0 bg-gray-900 text-white mx-auto">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className=" text-4xl font-bold text-center mb-12"
        >
          Technical Skills
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className=" grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {mySkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center cursor-pointer hover:border-1 hover:border-cyan-800 hover:border transition-all duration-500"
            >
              {skill.icon}
              <p className=" mt-4 text-lg font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
