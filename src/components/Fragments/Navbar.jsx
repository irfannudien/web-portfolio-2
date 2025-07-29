import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HamburgerButton from "./HamburgerButton";
gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ isModalOpen }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Scroll blur
  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgColor = isOpen
    ? "bg-transparent"
    : isScroll
    ? "bg-black/60 backdrop-blur-sm "
    : "bg-transparent";

  const navbarClass = isModalOpen
    ? "hidden"
    : "fixed w-full z-30 transition-all duration-150 ease-in-out";

  // Hamburger bar animation
  const topBarVariants = {
    open: { y: [0, 10, 10], rotate: [0, 0, 45], transition: { duration: 0.3 } },
    closed: {
      y: [10, 10, 0],
      rotate: [45, 0, 0],
      transition: { duration: 0.3 },
    },
  };
  const centerBarVariants = {
    open: { rotate: [0, 0, -45], transition: { duration: 0.3 } },
    closed: { rotate: [-45, 0, 0], transition: { duration: 0.3 } },
  };
  const bottomBarVariants = {
    open: {
      y: [0, -10, -10],
      rotate: [0, 0, 45],
      transition: { duration: 0.3 },
    },
    closed: {
      y: [-10, -10, 0],
      rotate: [45, 0, 0],
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className={navbarClass}>
      <div
        className={`fixed w-full z-30 transition-all duration-150 ease-in-out ${bgColor}`}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-2">
          {/* Logo */}
          <div className="border-r border-white pr-4 sm:pr-6 md:pr-10">
            <p className="font-poiret text-2xl sm:text-3xl font-bold tracking-widest md:leading-7 leading-6 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]">
              ear
              <br />
              <span className="text-[#38bdf8]">-fun</span>
            </p>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-base lg:text-lg font-poiret text-white tracking-widest">
            <a href="#profile" className="hover:text-yellow-400 transition">
              Profile
            </a>
            <a href="#projects" className="hover:text-yellow-400 transition">
              Project
            </a>
            <a href="#contact" className="hover:text-yellow-400 transition">
              Contact
            </a>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex gap-4 sm:gap-5 text-xl sm:text-2xl">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-white hover:text-[#38bdf8] hover:drop-shadow-[0_0_6px_#38bdf8] transition" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-white hover:text-[#a855f7] hover:drop-shadow-[0_0_6px_#a855f7] transition" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white hover:text-pink-500 hover:drop-shadow-[0_0_6px_#ec4899] transition" />
            </a>
          </div>

          {/* Hamburger (mobile) */}
          <div className="flex md:hidden justify-end">
            <HamburgerButton
              isOpen={isOpen}
              toggle={() => setIsOpen(!isOpen)}
            />
          </div>

          {/* <div className="flex md:hidden">
          <button
            className="flex flex-col gap-2 z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.span
              className="h-[2px] w-6 bg-[#666666]"
              variants={topBarVariants}
              animate={isOpen ? "open" : "closed"}
            ></motion.span>
            <motion.span
              className="h-[2px] w-6 bg-[#666666]"
              variants={centerBarVariants}
              animate={isOpen ? "open" : "closed"}
            ></motion.span>
            <motion.span
              className="h-[2px] w-3 bg-[#666666] origin-left self-end"
              variants={bottomBarVariants}
              animate={isOpen ? "open" : "closed"}
            ></motion.span>
          </button>
        </div> */}
        </div>

        {/* Sidebar Slide-in */}
        {/* <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-40 flex md:hidden ">
            <motion.div
              className="absolute z-40 inset-0 bg-black/50 backdrop-blur-sm h-screen w-screen"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="ml-auto w-64 h-full bg-[#0e0e0e] shadow-lg px-6 py-10 flex flex-col gap-6 text-white font-poiret tracking-widest"
            >
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="hover:text-yellow-400"
              >
                Home
              </a>
              <a
                href="#profile"
                onClick={() => setIsOpen(false)}
                className="hover:text-yellow-400"
              >
                Profile
              </a>
              <a
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="hover:text-yellow-400"
              >
                Project
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-yellow-400"
              >
                Contact
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence> */}
      </div>
    </div>
  );
};

export default Navbar;
