import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useActivePage } from "../context/ActiveSectionContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projectList = [
  {
    title: "Barbershop App",
    desc: "Sistem booking & manajemen untuk barbershop.",
    img: "/assets/project1.jpg",
  },
  {
    title: "Portofolio Web",
    desc: "Website pribadi dengan gaya retro pixel.",
    img: "/assets/project2.jpg",
  },
  {
    title: "UI Kit Tailwind",
    desc: "Kumpulan reusable UI komponen dengan Tailwind.",
    img: "/assets/project3.jpg",
  },
  {
    title: "Landing Page Produk",
    desc: "Halaman promosi produk dengan efek interaktif.",
    img: "/assets/project4.jpg",
  },
  {
    title: "Admin Dashboard",
    desc: "Dashboard analitik real-time dengan chart dan auth.",
    img: "/assets/project5.jpg",
  },
];

export default function Project() {
  const { activePage } = useActivePage();
  const sectionRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      className="relative px-48 py-20 bg-transparent text-white"
      ref={sectionRef}
    >
      <h2 className="text-2xl md:text-3xl text-end font-majorMono tracking-wider mb-12">
        Project
      </h2>

      <div className="flex flex-wrap gap-8 justify-center">
        {projectList.map((project, i) => (
          <div
            key={i}
            className="project-card w-72 h-96 bg-cover bg-center rounded-xl overflow-hidden 
              relative group transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{ backgroundImage: `url(${project.img})` }}
          >
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-all duration-300 backdrop-blur-sm p-4 flex flex-col justify-end">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-sm mt-1">{project.desc}</p>
              <button className="mt-4 border border-white px-3 py-1 text-sm hover:bg-white hover:text-black transition-all">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
