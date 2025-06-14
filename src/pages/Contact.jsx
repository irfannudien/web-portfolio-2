import { motion } from "framer-motion";
import React from "react";
import { useActivePage } from "../context/ActiveSectionContext";

export default function Contact() {
  const { activePage } = useActivePage();
  return (
    <section
      id="contact"
      className="bg-transparent min-h-screen text-white flex items-center justify-center z-10 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold text-center">Contact Me</h1>
        <p className="text-center mt-4 text-gray-300">
          Hubungi saya lewat email atau sosial media
        </p>
      </motion.div>
    </section>
  );
}
