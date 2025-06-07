import { motion } from "framer-motion";
import React from "react";
import { useActivePage } from "../context/ActiveSectionContext";

export default function Contact() {
  const { activePage } = useActivePage();
  return (
    <section id="contact" className="h-screen">
      <motion.div
        // key={activePage}
        className="h-full w-full flex items-center justify-center bg-blue-600"
        animate={
          activePage === "contact"
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 50 }
        }
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1 className="bg-amber-900 text-center">Contact</h1>
      </motion.div>
    </section>
  );
}
