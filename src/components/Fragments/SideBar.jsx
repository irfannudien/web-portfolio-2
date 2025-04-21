import React, { useState, useEffect } from "react"; // Mengimpor React dan hooks useState, useEffect
import Button from "../Elements/Button"; // Mengimpor komponen Button
import { FaHome, FaUserAlt } from "react-icons/fa"; // Mengimpor ikon untuk sidebar
import { IoFileTrayFull } from "react-icons/io5"; // Mengimpor ikon untuk sidebar
import { IoIosMail } from "react-icons/io"; // Mengimpor ikon untuk sidebar
import { RiMenuUnfoldLine } from "react-icons/ri";

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
      section.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
  };

  const handleScroll = () => {
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
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
      <nav className="flex flex-col bg-emerald-600 h-full justify-center gap-3 rounded-r-lg py-2">
        <Button onClick={toggleSidebar} className="flex gap-2 items-center">
          <RiMenuUnfoldLine size={25} />
          {isOpen && <span className="text-sm">Menu</span>}
        </Button>
        {navItems.map((item) => (
          <Button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`flex gap-2 items-center ${
              isOpen ? "rounded-none" : "rounded-r-lg"
            } ${
              active === item.id ? "bg-slate-600" : "text-white"
            } duration-300`}
          >
            {item.icon}
            {isOpen && <span className="text-sm">{item.label}</span>}
          </Button>
        ))}
      </nav>
    </div>
  );
}
