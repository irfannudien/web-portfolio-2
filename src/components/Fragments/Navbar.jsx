import React, { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { animate, motion } from "framer-motion";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isTabletUp, setIsTabletUp] = useState(window.innerWidth > 767);
  const [isOpen, setIsOpen] = useState(false);

  // SCROLL ACTIVE
  useEffect(() => {
    const handleScrollBlur = () => {
      setIsScroll(window.scrollY > 0);
    };

    const handleResize = () => {
      setIsTabletUp(window.innerWidth > 767);
    };
    handleResize();

    window.addEventListener("scroll", handleScrollBlur);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScrollBlur);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const bgColor = isTabletUp
    ? isScroll
      ? "backdrop-blur-sm bg-[#a5a5a5]/20"
      : "bg-transparent"
    : "bg-white";

  // HAMBURGER MENU
  const topBarVariants = {
    open: {
      y: [0, 10, 10],
      rotate: [0, 0, 45],
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    closed: {
      y: [10, 10, 0],
      rotate: [45, 0, 0],
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const centerBarVariants = {
    open: {
      rotate: [0, 0, -45],
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    closed: {
      rotate: [-45, 0, 0],
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const bottomBarVariants = {
    open: {
      y: [0, -10, -10],
      rotate: [0, 0, 45],
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    closed: {
      y: [-10, -10, 0],
      rotate: [45, 0, 0],
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };
  return (
    <div
      className={`
        fixed w-full transition-all duration-300 ease-in-out px-5 items-center z-50 ${bgColor}
        
      `}
    >
      <div className="flex items-center justify-between mx-10 pt-1 pb-2">
        <div>
          <p className="font-poiret text-3xl font-bold tracking-widest leading-7 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]">
            ear
            <br />
            <span className="text-[#38bdf8]">-fun</span>
          </p>
        </div>

        <div className="flex gap-2 text-2xl">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="text-white hover:text-[#38bdf8] hover:drop-shadow-[0_0_6px_#38bdf8] transition cursor-pointer" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-white hover:text-[#a855f7] hover:drop-shadow-[0_0_6px_#a855f7] transition cursor-pointer" />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-white hover:text-pink-500 hover:drop-shadow-[0_0_6px_#ec4899] transition cursor-pointer" />
          </a>
        </div>
        <div className="flex md:hidden">
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
        </div>

        {isOpen && (
          <div className="md:hidden flex flex-col items-center gap-6 py-10 text-lg bg-white absolute top-[100%] left-0 w-full z-40 shadow-md">
            <a href="#home" className="hover:underline">
              Home
            </a>
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#project" className="hover:underline">
              Project
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
