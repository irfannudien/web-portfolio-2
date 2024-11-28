import React from "react";
import Button from "../Elements/Button";
import { FaHome } from "react-icons/fa";

export default function SideNav() {
  return (
    <div className="hidden fixed items-center md:flex h-60 top-1/2 transform -translate-y-1/2">
      <div className="flex flex-col bg-emerald-600 h-full justify-center">
        <Button path="#home">
          <FaHome />
        </Button>
        <Button path="#about">
          <FaHome />
        </Button>
        <Button path="#project">
          <FaHome />
        </Button>
        <Button path="#contact">
          <FaHome />
        </Button>
      </div>
    </div>
  );
}
