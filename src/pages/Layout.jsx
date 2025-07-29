import React, { useEffect, useState } from "react";
import Home from "./Home";
import Profile from "./Profile";
import Contact from "./Contact";
import Project from "./Project";
import SideBar from "../components/Fragments/SideBar";
import Navbar from "../components/Fragments/Navbar";
import ProjectVertical from "./ProjectVertical";
import Footer from "../components/Fragments/Footer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Navbar isModalOpen={isModalOpen} />
      {/* <SideBar /> */}

      <main className="flex flex-col">
        <Home />
        <div className="relative z-10 h-screen" />
        <Profile />
        <Project setIsModalOpen={setIsModalOpen} />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
