import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const ProjectCard = ({ project }) => {
  const { title, description, imageUrl, techStacks, liveUrl, githubUrl } =
    project;
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
    >
      <img src={imageUrl} alt={title} className=" w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className=" text-2xl font-bold mb-2 text-blue-400">{title}</h3>
        <div className=" flex flex-wrap gap-2 mb-4">
          {techStacks.map((techStack) => (
            <span
              key={techStack}
              className="bg-gray-700 text-blue-300 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
            >
              {techStack}
            </span>
          ))}
        </div>
        <p className=" text-gray-400 mb-4">{description}</p>
        <div className=" flex justify-start space-x-4">
          <Link
            to={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className=" text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Live Demo
          </Link>
          <Link
            to={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className=" text-white bg-gray-600 hover:bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            GitHub
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
