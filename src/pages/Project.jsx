import { motion } from "framer-motion";
import React from "react";

export default function Project() {
  return (
    <section id="project" className="h-screen">
      <motion.div
        className="h-full w-full bg-white flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h1 className="bg-cyan-700 text-center">Project</h1>
      </motion.div>
    </section>
  );
}
