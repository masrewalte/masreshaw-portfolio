import React from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending...");

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        formData
      );
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Message failed to send. Please try again.");
      console.error(error);
    }
  };
  return (
    <div className=" max-w-2xl mx-auto py-12 text-gray-200">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=" text-4xl font-bold text-center mb-8"
      >
        Contact me
      </motion.h1>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className=" space-y-6"
      >
        <div>
          <label
            htmlFor="name"
            className=" block text-lg font-medium text-gray-300"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            className=" mt-1 block w-full bg-gray-700 border border-gray-500 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-700 focus:border-indigo-800"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className=" block text-lg font-medium text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            className=" mt-1 block w-full bg-gray-700 border border-gray-500 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-700 focus:border-indigo-800"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className=" block text-lg font-medium text-gray-300"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            className=" mt-1 block w-full bg-gray-700 border border-gray-500 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-700 focus:border-indigo-800"
          />
        </div>
        <div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className=" w-full bg-indigo-900 text-gray-300 font-semibold py-3 px-6 rounded-lg text-lg hover:bg-indigo-800 transition duration-300"
          >
            Send Message
          </motion.button>
        </div>
      </motion.form>
      {status && <p className=" text-center mt-4 text-lg">{status}</p>}
    </div>
  );
};

export default Contact;
