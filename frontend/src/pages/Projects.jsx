import React from "react";
import { AnimatePresence, motion, stagger } from "framer-motion";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { data } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/projects`
        );
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects: ", error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-10 transition-all duration-500"
    >
      <h1 className=" text-4xl font-bold text-center mb-12 text-blue-400">
        My Projects
      </h1>
      {loading ? (
        <p className=" text-center">Loading projects...</p>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Projects;
