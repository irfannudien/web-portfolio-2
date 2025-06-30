import React, { useEffect } from "react";
import { useActivePage } from "../context/ActiveSectionContext";

import { FaLocationArrow } from "react-icons/fa6";
import { dataList } from "../data";

export default function Contact() {
  const { activePage } = useActivePage();

  return (
    <section
      id="contact-section"
      className="bg-transparent min-h-screen text-white flex items-center justify-center px-20 md:px-48 pt-16 relative z-10"
    >
      <div className="w-full">
        <h1 className="text-2xl md:text-5xl font-majorMono font-bold ">
          Contact
        </h1>
        <p className="mt-4 text-gray-300">
          Feel free to reach out via email or through my social platforms below.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          {dataList.contacts.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-6 md:gap-4 cursor-pointer"
            >
              <div className="text-white border border-gray-700 p-3 rounded-lg group-hover:bg-white group-hover:text-gray-800 transition-all duration-500">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h3 className="font-poiret tracking-widest bold text-lg text-[#38bdf8]">
                    {item.title}
                  </h3>
                  <div className="rotate-45 transition-all duration-500 group-hover:rotate-0">
                    <FaLocationArrow size={20} />
                  </div>
                </div>
                <p className="text-sm text-gray-400 font-semibold">
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
