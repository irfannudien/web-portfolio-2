import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const projectList = Array.from({ length: 5 }, (_, i) => ({
  title: `Project ${i + 1}`,
  desc: `Deskripsi project ${i + 1}`,
}));

export default function ProjectVertical() {
  const lenis = useRef();
  const cardsRef = useRef([]);

  useEffect(() => {
    // Init Lenis
    const lenisInstance = new Lenis({ smooth: true });
    lenis.current = lenisInstance;

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sinkronisasi ScrollTrigger
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length
          ? lenisInstance.scrollTo(value)
          : window.scrollY;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.refresh();

    // Animasi scroll muncul satu-satu naik
    cardsRef.current.forEach((card, i) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 40%",
              scrub: true,
            },
          }
        );
      }
    });
  }, []);

  return (
    <section className="min-h-screen px-24 py-32 bg-neutral-900 text-white">
      <h2 className="text-3xl font-bold mb-20 text-right">Project</h2>

      <div className="flex flex-col gap-16">
        {projectList.map((p, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="w-full h-64 bg-white text-black rounded-xl shadow-xl p-6 text-xl font-semibold flex items-center justify-center"
          >
            {p.title}
          </div>
        ))}
      </div>
    </section>
  );
}
