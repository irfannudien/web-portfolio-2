import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrambleText from "../components/Elements/ScrambleText";
import {
  ScrollAnimate,
  VerticalAnimate,
} from "../components/Fragments/Project";

gsap.registerPlugin(ScrollTrigger);

export default function Project() {
  const sectionRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="project"
      className="relative z-10 min-h-screen text-white px-48 overflow-hidden"
    >
      <div
        className={
          isDesktop
            ? "h-screen flex flex-col items-center justify-center gap-6 pt-10"
            : "flex flex-col items-center justify-center gap-6 pt-10"
        }
      >
        <div className="w-full text-center flex flex-col gap-4">
          <ScrambleText
            text="Project"
            className="text-2xl md:text-5xl tracking-widest text-white font-majorMono font-bold"
          />

          <p className="text-lg text-gray-300 max-w-2xl mx-auto tracking-wide">
            Some of my projects, I've worked on — simple, clean, and made with
            style. From landing pages to digital invites.
          </p>
        </div>

        {isDesktop ? (
          <ScrollAnimate sectionRef={sectionRef} />
        ) : (
          <VerticalAnimate />
        )}
      </div>
    </section>
  );
}
