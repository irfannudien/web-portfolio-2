import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const headingRef = useRef(null);
  const lineRef = useRef(null);
  const textRef = useRef();
  const blurOverlayRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,

        onUpdate: (self) => {
          const progress = self.progress;
          const isActive = progress > 0.01;
          gsap.to(blurOverlayRef.current, {
            opacity: isActive ? 1 : 0,
            duration: 0.01,
            ease: "power2.out",
          });
        },
      });

      gsap.fromTo(
        headingRef.current,
        { scale: 0.8, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      let targetWidth = "7rem"; // default untuk desktop

      const screenWidth = window.innerWidth;

      if (screenWidth < 640) {
        // Mobile
        targetWidth = "4rem";
      } else if (screenWidth >= 640 && screenWidth < 1024) {
        // Tablet
        targetWidth = "5rem";
      } else if (screenWidth >= 1024 && screenWidth < 1440) {
        // Laptop
        targetWidth = "6rem";
      } else {
        // Desktop / Curve / Ultra-wide
        targetWidth = "7rem";
      }

      gsap.fromTo(
        lineRef.current,
        {
          width: "0.5rem",
          height: "0.25rem",
          borderRadius: "9999px",
        },
        {
          width: targetWidth,
          height: "0.25rem",
          borderRadius: "0.5rem",
          duration: 1,
          delay: 1,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        textRef.current,
        {
          width: "0ch",
        },
        {
          width: "40ch",
          duration: 3.5,
          ease: "steps(30)",
          delay: 1,
        }
      );
    });

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="home"
      className="fixed w-full h-screen z-0 bg-[#0e0e0e] bg-grid-pattern flex flex-col items-center justify-center text-white overflow-hidden
    px-6 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 3xl:px-80 4xl:px-96 gap-10 pointer-events-none"
    >
      <div
        ref={blurOverlayRef}
        className="absolute inset-0 pointer-events-none z-20 bg-black/30 backdrop-blur-[30px] transition-opacity duration-300 opacity-0"
      />

      <h1
        className="text-base sm:text-lg md:text-xl lg:text-2xl font-poiret uppercase tracking-widest mb-2 relative"
        ref={headingRef}
      >
        Hi there, I'm
        <span
          className="block w-20 sm:w-24 md:w-32 lg:w-40 h-1 bg-yellow-400 mt-2 rounded-full"
          ref={lineRef}
        ></span>
        <span className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 left-0 mt-0.5 top-[1.7rem] md:top-[1.8rem] lg:top-[2rem] rounded-full"></span>
      </h1>

      <div className="text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[12rem] xl:text-[14rem] 2xl:text-[16rem] 3xl:text-[18rem] 4xl:text-[20rem] font-majorMono flex gap-1 -my-10 sm:-my-12 md:-my-14 lg:-my-16">
        {"IRFNN".split("").map((char, i) => {
          const duration = 10 + Math.random();
          const delay = Math.random() * 10;
          return (
            <span
              key={i}
              className="electric-letter"
              style={{
                animationDuration: `${duration.toFixed(10)}s`,
                animationDelay: `${delay.toFixed(10)}s`,
              }}
            >
              {char}
            </span>
          );
        })}
      </div>

      <p
        className="mt-2 text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-poiret italic text-gray-400 text-center tracking-widest overflow-hidden whitespace-nowrap"
        style={{ textShadow: "0 0 5px rgba(100,100,100,0.5)" }}
        // ref={textRef}
      >
        Crafting interactive experiences on the web
      </p>
    </section>
  );
}
