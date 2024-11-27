import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";

export default function Layout() {
  return (
    <div className="flex flex-col">
      <Home />
      <About />
      <Contact />
      <Project />
    </div>
  );
}
