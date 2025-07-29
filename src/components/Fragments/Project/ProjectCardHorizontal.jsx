import React from "react";

export default function ProjectCardHorizontal(props) {
  const { title, year, imageUrl, innerRef, desc, onViewClick } = props;

  return (
    <div
      ref={innerRef}
      className="group relative bg-cover bg-center rounded-2xl overflow-hidden transition-all origin-left w-[150px] h-[350px] hover:w-[220px] duration-700 font-poiret shrink-0"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <p className="absolute bottom-0 left-4 text-white text-xl tracking-widest rotate-[-90deg] origin-top-left whitespace-nowrap transition-all duration-700 ease-in-out group-hover:rotate-0 group-hover:bottom-16 group-hover:left-4 font-bold group-hover:opacity-0">
        {title}
      </p>
      <p className="absolute bottom-16 left-4 mb-1 w-[150px] text-white text-xl tracking-widest rotate-[-90deg] transition-all duration-700 ease-in-out opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:rotate-0 font-bold whitespace-normal break-words leading-tight">
        {title}
      </p>
      <div className="absolute -bottom-12 left-4 flex flex-col gap-1 items-start opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:bottom-4 group-hover:left-4">
        <p className="text-white text-base transition-all delay-200 tracking-widest">
          {year}
        </p>
        <button
          className="px-5 py-1 bg-white text-black text-sm rounded transition-all delay-400"
          onClick={() => onViewClick({ title, year, imageUrl, desc })}
        >
          View
        </button>
      </div>
    </div>
  );
}
