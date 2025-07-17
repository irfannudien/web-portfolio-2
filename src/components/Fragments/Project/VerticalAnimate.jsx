import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import ProjectCardVertical from "./ProjectCardVertical";

gsap.registerPlugin(ScrollTrigger);

const projectList = Array.from({ length: 5 }, (_, i) => ({
  title: `Project ${i + 1}`,
  desc: `Deskripsi project ${i + 1}`,
}));

export default function VerticalAnimate() {
  const lenis = useRef();
  const cardsRef = useRef([]);

  useEffect(() => {
    const lenisInstance = new Lenis({ smooth: true });
    lenis.current = lenisInstance;

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

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
    <section className="min-h-screen w-full text-white">
      <div className="flex flex-col gap-16">
        {projectList.map((p, i) => (
          <ProjectCardVertical
            key={i}
            title={p.title}
            innerRef={(el) => (cardsRef.current[i] = el)}
          />
        ))}
      </div>
    </section>
  );
}
