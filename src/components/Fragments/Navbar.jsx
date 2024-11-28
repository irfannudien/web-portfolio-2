import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="fixed w-screen backdrop-blur-sm bg-[rgba(64,64,64,.2)] px-5 items-center h-16">
      <div className="flex items-center justify-between">
        <h1 className="font-poiret text-3xl super-bold tracking-widest leading-7">
          ear
          <br />
          -fun
        </h1>
        <div className="flex gap-2 text-2xl">
          <FaLinkedinIn />
          <FaGithub />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
}
