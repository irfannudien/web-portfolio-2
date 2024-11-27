import React from "react";
import Button from "../Elements/Button";
import { FaHome } from "react-icons/fa";

export default function SideNav() {
  return (
    <div className="bg-emerald-600 flex items-center fixed">
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
  );
}
