import React, { useEffect } from "react";
import Home from "./Home";
import About from "./About";
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
  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
  }, []);

  return (
    <>
      <Navbar />
      <SideBar />

      <main className="flex flex-col">
        <Home />
        <div className="relative z-10 h-screen" />
        <About />
        <Project />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
