import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} Masreshaw. All rights reserved.
        </p>

        <div className="flex justify-center space-x-4 mt-4">
          <Link
            to="#"
            className="bg-gray-700 hover:bg-emerald-500 transition-all duration-500 p-3 rounded-full text-gray-300"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </Link>
          <Link
            to="#"
            className="bg-gray-700 hover:bg-emerald-500 transition-all duration-500 p-3 rounded-full text-gray-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </Link>
          <Link
            to="#"
            className="bg-gray-700 hover:bg-emerald-500 transition-all duration-500 p-3 rounded-full text-gray-300"
            aria-label="Twitter"
          >
            <FaTwitter size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
