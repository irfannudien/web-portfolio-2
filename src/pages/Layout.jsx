import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import SideNav from "../components/Fragments/SideNav";

export default function Layout() {
  return (
    <>
      <SideNav />
      <div className="flex flex-col">
        <Home />
        <About />
        <Contact />
        <Project />
      </div>
    </>
  );
}
