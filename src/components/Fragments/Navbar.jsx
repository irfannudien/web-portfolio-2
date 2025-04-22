import React, { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScrollBlur = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScrollBlur);
    return () => window.removeEventListener("scroll", handleScrollBlur);
  }, []);

  return (
    <div
      className={`${
        isScroll ? "backdrop-blur-sm bg-[#a5a5a5]/20" : "bg-transparent"
      }
      fixed w-full transition-all duration-300 ease-in-out px-5 items-center z-50`}
    >
      <div className="flex items-center justify-between mx-10">
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
      </div>
    </div>
  );
};

export default Navbar;
