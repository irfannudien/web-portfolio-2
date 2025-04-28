import { motion } from "framer-motion";
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="h-screen">
      <motion.div
        className="h-full w-full bg-white flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h1 className="bg-amber-900 text-center">Contact</h1>
      </motion.div>
    </section>
  );
}
