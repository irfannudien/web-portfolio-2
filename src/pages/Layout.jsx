import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import SideBar from "../components/Fragments/SideBar";

export default function Layout() {
  return (
    <>
      <SideBar />
      <div className="flex flex-col">
        <Home />
        <About />
        <Project />
        <Contact />
      </div>
    </>
  );
}
