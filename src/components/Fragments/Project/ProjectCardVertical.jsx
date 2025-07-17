import React from "react";

export default function ProjectCardVertical({ title, innerRef }) {
  return (
    <div
      ref={innerRef}
      className="w-full h-64 bg-white text-black rounded-xl shadow-xl p-6 text-xl font-semibold flex items-center justify-center"
    >
      {title}
    </div>
  );
}
