import React, { useEffect } from "react";
import { useActivePage } from "../context/ActiveSectionContext";

import { FaLocationArrow } from "react-icons/fa6";
import { dataList } from "../data";
import ScrambleText from "../components/Elements/ScrambleText";

export default function Contact() {
  const { activePage } = useActivePage();

  const handleClick = (e, item) => {
    if (item.title === "Email") {
      e.preventDefault();

      const email = "muhammadirfannudien@gmail.com";
      const subject = encodeURIComponent("Let's Work Together");
      const body = encodeURIComponent(
        "Hi Irfan, \nI saw your portfolio and I'm interested to collaborating ..."
      );

      const gmailWeb = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
      const gmailApp = `googlegmail://co?to=${email}&subject=${subject}&body=${body}`;

      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

      if (isMobile) {
        window.location.href = gmailApp;
        setTimeout(() => {
          window.location.href = gmailWeb;
        }, 1000);
      } else {
        window.open(gmailWeb, "_blank");
      }
    }
  };

  return (
    <section
      id="contact-section"
      className="bg-transparent min-h-screen text-white flex items-center justify-center px-20 md:px-48 pt-16 relative z-10"
    >
      <div className="w-full">
        <ScrambleText
          text="Contact"
          className="text-2xl md:text-5xl tracking-widest text-white font-majorMono font-bold"
        />
        <p className="mt-4 text-gray-300">
          Feel free to reach out via email or through my social platforms below.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          {dataList.contacts.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={(e) => handleClick(e, item)}
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
