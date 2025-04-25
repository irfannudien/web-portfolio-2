import React, { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isTabletUp, setIsTabletUp] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div
      className={`
        fixed w-full transition-all duration-300 ease-in-out px-5 items-center z-50 ${bgColor}
        
      `}
    >
      <div className="flex items-center justify-between mx-5">
        <div>
          <p className="font-poiret text-3xl super-bold tracking-widest leading-7">
            ear
            <br />
            -fun
          </p>
          <p>Frontend Developer</p>
        </div>
        <div className="flex gap-2 text-2xl">
          <FaLinkedinIn />
          <FaGithub />
          <FaInstagram />
        </div>
        <div className="flex md:hidden">
          <button
            className="flex flex-col gap-2 z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`h-[2px] w-6 bg-[#666666]
                ${isOpen ? "top-rotate" : "reset-top-rotate"}`}
            ></span>
            <span
              className={`h-[2px] w-6 bg-[#666666] transition-transform duration-500 ease-in-out
                ${isOpen ? "center-rotate" : "reset-center-rotate"}`}
            ></span>
            <span
              className={`h-[2px] w-3 bg-[#666666] origin-left self-end
              ${isOpen ? "bottom-rotate" : "reset-bottom-rotate"}`}
            ></span>
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
