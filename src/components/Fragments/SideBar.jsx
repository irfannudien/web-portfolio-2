import React, { useState, useEffect } from "react";
import { FaHome, FaUserAlt } from "react-icons/fa";
import { IoFileTrayFull } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { RiMenuUnfoldLine } from "react-icons/ri";
import ButtonSidebar from "../Elements/ButtonSidebar";

export default function SideBar() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", icon: <FaHome size={25} />, label: "Home" },
    { id: "about", icon: <FaUserAlt size={25} />, label: "About" },
    { id: "project", icon: <IoFileTrayFull size={25} />, label: "Project" },
    {
      id: "contact",
      icon: <IoIosMail size={25} />,
      label: "Contact",
    },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      setActive(id);
      section.scrollIntoView({ behavior: "auto", block: "start" });
    }
  };

  const handleScrollSidebar = () => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY;

    sections.forEach((sec) => {
      const scrollTop = sec.offsetTop;
      const scrollHeight = sec.offsetHeight;
      const sectionId = sec.getAttribute("id");

      if (
        scrollPosition >= scrollTop - 150 &&
        scrollPosition < scrollTop + scrollHeight - 150
      ) {
        // window.history.pushState(null, "", `#${sec.getAttribute("id")}`);
        setActive(sectionId);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollSidebar);

    return () => {
      window.removeEventListener("scroll", handleScrollSidebar);
    };
  }, []);

  return (
    <div
      className={`fixed top-1/2 transform -translate-y-1/2 transition-all duration-300 ease-in-out
      flex-col overflow-hidden
      ${isOpen ? "w-28" : "w-10"}
      hidden md:flex
        `}
      // style={{ width: isOpen ? "fit-content" : "3.5rem" }}
    >
      <nav className="flex flex-col bg-[#404040] h-full justify-center gap-3 rounded-r-lg py-2">
        <ButtonSidebar
          onClick={toggleSidebar}
          className={`flex gap-2 items-center ${
            isOpen ? "rounded-none" : "rounded-r-lg"
          }`}
        >
          <RiMenuUnfoldLine size={25} />
          {isOpen && <span className="text-sm">Menu</span>}
        </ButtonSidebar>
        {navItems.map((item) => (
          <ButtonSidebar
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`flex gap-2 items-center ${
              isOpen ? "rounded-none" : "rounded-r-lg"
            } ${
              active === item.id ? "bg-[#666666]" : "text-white"
            } duration-500`}
          >
            {item.icon}
            {isOpen && <span className="text-sm">{item.label}</span>}
          </ButtonSidebar>
        ))}
      </nav>
    </div>
  );
}
