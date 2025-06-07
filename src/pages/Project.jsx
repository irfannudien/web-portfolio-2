import { motion } from "framer-motion";
import React from "react";
import { useActivePage } from "../context/ActiveSectionContext";

export default function Project() {
  const { activePage } = useActivePage();
  return (
    <section id="project" className="h-screen">
      <motion.div
        // key={activePage}
        className="h-full w-full flex items-center justify-center bg-red-600"
        animate={
          activePage === "project"
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 50 }
        }
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1 className="bg-cyan-700 text-center">Project</h1>
      </motion.div>
    </section>
  );
}
