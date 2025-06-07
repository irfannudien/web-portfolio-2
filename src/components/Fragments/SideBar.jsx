import React, { useState, useEffect } from "react";
import { FaHome, FaUserAlt } from "react-icons/fa";
import { IoFileTrayFull } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { RiMenuUnfoldLine } from "react-icons/ri";
import ButtonSidebar from "../Elements/ButtonSidebar";
import { useActivePage } from "../../context/ActiveSectionContext";

export default function SideBar() {
  const { activePage, setActivePage } = useActivePage();
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
      setActivePage(id);
      section.scrollIntoView({ behavior: "auto", block: "start" });
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            setActivePage(id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // 50% kelihatan baru trigger
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [setActivePage]);

  // const handleScrollSidebar = () => {
  //   const sections = document.querySelectorAll("section");
  //   const scrollPosition = window.scrollY;
  //   const viewportHeight = window.innerHeight;

  //   sections.forEach((sec) => {
  //     const scrollTop = sec.offsetTop;
  //     const scrollHeight = sec.offsetHeight;
  //     const sectionId = sec.getAttribute("id");

  //     // Ini kuncinya:
  //     const sectionCenter = scrollTop + scrollHeight / 2;

  //     if (
  //       scrollPosition + viewportHeight / 6 >= scrollTop &&
  //       scrollPosition + viewportHeight / 6 < scrollTop + scrollHeight
  //     ) {
  //       setActivePage(sectionId);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScrollSidebar);

  //   return () => {
  //     window.removeEventListener("scroll", handleScrollSidebar);
  //   };
  // }, []);

  return (
    <div
      className={`fixed top-1/2 transform -translate-y-1/2 transition-all duration-300 ease-in-out z-50
      flex-col overflow-hidden
      ${isOpen ? "w-28" : "w-10"}
      hidden md:flex
        `}
      // style={{ width: isOpen ? "fit-content" : "3.5rem" }}
    >
      <nav className="flex flex-col bg-[#1a1a1a]/80 backdrop-blur-md h-full justify-center gap-3 rounded-r-lg py-2 shadow-lg shadow-[#38bdf8]/10">
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
              activePage === item.id
                ? "bg-[#38bdf8] drop-shadow-[0_0_6px_#38bdf8] transition"
                : "text-white"
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
