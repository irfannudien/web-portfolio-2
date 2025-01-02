import React, { useState } from "react";
import Button from "../Elements/Button";
import { FaHome, FaUserAlt } from "react-icons/fa";
import { IoFileTrayFull } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { RiMenuUnfoldLine } from "react-icons/ri";

export default function SideBar() {
  const [active, setActive] = useState("#home");

  const navItems = [
    { path: "#home", icon: <FaHome size={25} /> },
    { path: "#about", icon: <FaUserAlt size={25} /> },
    { path: "#project", icon: <IoFileTrayFull size={25} /> },
    { path: "#contact", icon: <IoIosMail size={25} /> },
  ];

  return (
    <div className="hidden fixed items-center md:flex top-1/2 transform -translate-y-1/2">
      <nav className="flex flex-col bg-emerald-600 h-full justify-center gap-3 rounded-r-lg py-2">
        <div>
          <Button>
            <RiMenuUnfoldLine size={25} />
          </Button>
        </div>
        {navItems.map((item) => (
          <Button
            key={item.path}
            path={item.path}
            onClick={() => setActive(item.path)}
            className={`${
              active === item.path ? "bg-slate-600" : "text-white"
            }`}
          >
            {item.icon}
          </Button>
        ))}
      </nav>
    </div>
  );
}
