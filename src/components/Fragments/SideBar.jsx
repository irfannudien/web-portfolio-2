import React, { useState, useEffect } from "react"; // Mengimpor React dan hooks useState, useEffect
import Button from "../Elements/Button"; // Mengimpor komponen Button
import { FaHome, FaUserAlt } from "react-icons/fa"; // Mengimpor ikon untuk sidebar
import { IoFileTrayFull } from "react-icons/io5"; // Mengimpor ikon untuk sidebar
import { IoIosMail } from "react-icons/io"; // Mengimpor ikon untuk sidebar

export default function SideBar() {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", icon: <FaHome size={25} /> },
    { id: "about", icon: <FaUserAlt size={25} /> },
    { id: "project", icon: <IoFileTrayFull size={25} /> },
    { id: "contact", icon: <IoIosMail size={25} /> },
  ];

  const handleClick = (id) => {
    setActive(id);
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
        window.history.pushState(null, "", `#${sec.getAttribute("id")}`);
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
    <div className="hidden fixed items-center md:flex top-1/2 transform -translate-y-1/2">
      <nav className="flex flex-col bg-emerald-600 h-full justify-center gap-3 rounded-r-lg py-2">
        {navItems.map((item) => (
          <Button
            key={item.id}
            path={`#${item.id}`}
            onClick={() => handleClick(item.id)}
            className={`${active === item.id ? "bg-slate-600" : "text-white"}`}
          >
            {item.icon}
          </Button>
        ))}
      </nav>
    </div>
  );
}
