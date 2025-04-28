import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import SideBar from "../components/Fragments/SideBar";
import Navbar from "../components/Fragments/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <SideBar />

      <main className="flex flex-col">
        <Home />
        <About />
        <Project />
        <Contact />
      </main>
    </>
  );
}
