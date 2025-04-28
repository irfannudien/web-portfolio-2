import { easeInOut, motion } from "framer-motion";
import React from "react";

export default function Home() {
  return (
    <section id="home" className="h-screen">
      <motion.div
        className="h-full w-full bg-white bg-grid-pattern flex items-center justify-center"
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1 className="bg-yellow-500 text-center">FRONT END DEVELOPER</h1>
      </motion.div>
    </section>
  );
}
