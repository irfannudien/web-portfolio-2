import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import BaffleText from "../hooks/BaffleText";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const headingRef = useRef(null);
  const lineRef = useRef(null);
  const textRef = useRef();
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { scale: 0.8, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      gsap.fromTo(
        lineRef.current,
        {
          width: "0.5rem",
          height: "0.25rem",
          borderRadius: "9999px",
        },
        {
          width: "7rem",
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
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen bg-[#0e0e0e] bg-grid-pattern flex flex-col items-center justify-center text-white overflow-hidden px-48 gap-6"
    >
      <h1
        className="text-2xl font-poiret uppercase tracking-widest mb-4 relative"
        ref={headingRef}
      >
        Hi there, I'm Irfan
        <span
          className="block w-40 h-1 bg-yellow-400 mt-2 rounded-full"
          ref={lineRef}
        ></span>
        <span className="absolute w-4 h-4 bg-yellow-400 left-0 mt-0.5 top-8 rounded-full"></span>
      </h1>

      <div className="absolute top-10 left-10 w-72 h-72 bg-[#e41376]/20 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-[#01c8ee]/15 rounded-full blur-[100px] pointer-events-none" />

      <BaffleText
        className="
    text-9xl font-majorMono
    bg-gradient-to-r from-purple-500 via-purple-700 to-sky-300
    bg-clip-text text-transparent
  
  "
      >
        FRONT END
      </BaffleText>
      <BaffleText
        className="
    text-9xl font-majorMono
    bg-gradient-to-r from-sky-300 to-purple-500
    bg-clip-text text-transparent
    
  "
      >
        DEVELOPER
      </BaffleText>

      <p
        className="text-xl font-poiret italic text-gray-400 max-w-lg text-center tracking-widest overflow-hidden whitespace-nowrap"
        style={{ textShadow: "0 0 5px rgba(100,100,100,0.5)" }}
        ref={textRef}
      >
        Crafting interactive experiences on the web
      </p>
    </section>
  );
}
