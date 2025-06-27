import React from "react";
import { useActivePage } from "../context/ActiveSectionContext";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

export default function Contact() {
  const { activePage } = useActivePage();

  const contacts = [
    {
      title: "Email",
      value: "email@gmail.com",
      icon: <FaEnvelope className="text-2xl" />,
      href: "mailto:youremail@example.com",
    },
    {
      title: "LinkedIn",
      value: "username",
      icon: <FaLinkedinIn className="text-2xl" />,
      href: "https://linkedin.com/in/yourusername",
    },
    {
      title: "GitHub",
      value: "github.com/yourusername",
      icon: <FaGithub className="text-2xl" />,
      href: "https://github.com/yourusername",
    },
    {
      title: "Instagram",
      value: "@yourusername",
      icon: <FaInstagram className="text-2xl" />,
      href: "https://instagram.com/yourusername",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-transparent min-h-screen text-white flex items-center justify-center px-48 py-16 relative z-10"
    >
      <div className="w-full">
        <h1 className="text-2xl md:text-5xl font-bold font-majorMono">
          Contact
        </h1>
        <p className="mt-4 text-gray-300">
          Feel free to reach out via email or through my social platforms below.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          {contacts.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-gray-700 hover:border-white hover:bg-white/10 transition duration-300 rounded-xl p-6 flex items-center gap-4 backdrop-blur-md"
            >
              <div className="text-white group-hover:text-gold transition">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-white group-hover:text-gold">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-200">
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
