import React from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import navLinks from "../../data";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLinkStyle = {
    color: "#34D399",
    textDecoration: "underline",
  };
  return (
    <nav className="bg-gray-800 bg-opacity-50 backdrop-blur-md sticky top-0 z-50 shadow-lg">
      <div className=" maw-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" flex items-center justify-between h-16">
          <div className=" flex items-center">
            <Link to={"/"} className=" text-white font-bold text-xl">
              <span className=" text-emerald-400">Masreshaw</span>
              <span className=" text-emerald-400"></span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className=" ml-10 flex items-baseline space-x-4">
              {navLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  style={({ isActive }) =>
                    isActive ? activeLinkStyle : undefined
                  }
                  className=" text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.title}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3  space-y-1 sm:px-3">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                style={({ isActive }) =>
                  isActive ? activeLinkStyle : undefined
                }
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {link.title}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Header;
