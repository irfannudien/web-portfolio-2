// components/Project/ProjectCardVertical.jsx
import React from "react";

export default function ProjectCardVertical({ item, innerRef }) {
  return (
    <div
      ref={innerRef}
      className="absolute inset-0 flex flex-col items-center justify-center w-full h-full shadow-md overflow-hidden"
    >
      <div className="absolute top-24 left-12 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-lg font-medium">
        {item.year}
      </div>
      <div className="w-full h-full my-10 bg-white text-black p-10 flex flex-col justify-center items-start rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
        {/* <p className="text-base">{item.description}</p> */}
      </div>
    </div>
  );
}
