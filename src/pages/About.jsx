import { motion } from "framer-motion";
import React from "react";

export default function About() {
  return (
    <section id="about" className="h-screen">
      <motion.div
        className="h-full w-full bg-white flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h1 className="bg-red-500 text-center">About</h1>
      </motion.div>
    </section>
  );
}
