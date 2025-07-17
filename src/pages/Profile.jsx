import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";

import {
  FaBootstrap,
  FaCss3Alt,
  FaFacebook,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNode,
  FaNodeJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import {
  SiFirebase,
  SiFramer,
  SiGreensock,
  SiTailwindcss,
} from "react-icons/si";
import ScrambleText from "../components/Elements/ScrambleText";
import GsapMagnetic from "../components/Elements/GsapMagnetic";
import FluidImageMask from "../components/FluidImageMask";

const Profile = () => {
  const [shouldAnimateImage, setShouldAnimateImage] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const length = pathRef.current.getTotalLength();
    pathRef.current.style.strokeDasharray = length;
    pathRef.current.style.strokeDashoffset = length;

    let ctx = gsap.context(() => {
      gsap.fromTo(
        "#svg-wrapper",
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          delay: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
            scroller: document.body,
          },
        }
      );

      gsap.fromTo(
        pathRef.current,
        { strokeDashoffset: length },
        {
          strokeDashoffset: 0,
          duration: 2.5,
          delay: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: pathRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
            scroller: document.body,
          },
        }
      );

      // Fade-in animation
      gsap.fromTo(
        ".fade-in",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 1.2,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
            scroller: document.body,
          },
        }
      );

      gsap.fromTo(
        ".skill-item",
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          delay: 1.2,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
            once: true,
            scroller: document.body,
          },
        }
      );

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          setShouldAnimateImage(true);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width <= 1024);
      setIsDesktop(width > 1366);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const skills = [
    { icon: <FaHtml5 className="text-orange-400" size={30} />, label: "HTML" },
    { icon: <FaCss3Alt className="text-blue-500" size={30} />, label: "CSS" },
    {
      icon: <FaJs className="text-yellow-400" size={30} />,
      label: "JavaScript",
    },
    { icon: <FaReact className="text-cyan-400" size={30} />, label: "React" },
    {
      icon: <FaWordpress className="text-sky-800" size={30} />,
      label: "Wordpress",
    },
    {
      icon: <SiTailwindcss className="text-sky-400" size={30} />,
      label: "Tailwind",
    },
    {
      icon: <FaBootstrap className="text-purple-700" size={30} />,
      label: "Bootstrap",
    },
    {
      icon: <SiFirebase className="text-yellow-400" size={30} />,
      label: "Firebase",
    },
    {
      icon: <FaGitAlt className="text-orange-600" size={30} />,
      label: "Git",
    },
    {
      icon: <FaNode className="text-emerald-700" size={30} />,
      label: "NodeJs",
    },
  ];

  return (
    <>
      <section
        id="profile"
        ref={sectionRef}
        className="relative z-10 px-6 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 3xl:px-80 4xl:px-96 py-16 bg-transparent text-white flex flex-col-reverse md:flex-row items-center justify-between gap-16 overflow-hidden"
      >
        {/* <div className="absolute top-20 right-10 w-72 h-72 bg-[#00ff9f]/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-50 left-20 w-60 h-60 bg-yellow-500/20 rounded-full blur-[100px] pointer-events-none" /> */}
        <div className="w-full md:w-1/2 flex flex-col relative">
          <div className="flex flex-col gap-10">
            <ScrambleText
              text="Profile"
              className="text-2xl md:text-5xl font-majorMono tracking-wider font-bold"
            />
            {/* <h2
              ref={headingRef}
              className="text-2xl md:text-5xl font-majorMono tracking-wider font-bold"
            >
              Profile
            </h2> */}

            <p className="text-lg font-poiret text-white fade-in tracking-widest">
              I'm Irfan, a front-end developer who blends clean design and
              creative interactions. I build things with love for details and a
              techy twist.
            </p>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(5rem,1fr))] gap-x-2 gap-y-2 sm:gap-y-3 md:gap-y-4 w-full">
              {skills.map((skill, index) => (
                <GsapMagnetic key={index}>
                  <span
                    className="skill-item w-20 h-20 bg-white/5 border border-white/10
                    backdrop-blur-md rounded-xl flex flex-col items-center justify-center
                    transition-shadow duration-300
                    hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                  >
                    {skill.icon}
                    <span className="text-xs mt-1 font-poiret text-center tracking-widest">
                      {skill.label}
                    </span>
                  </span>
                </GsapMagnetic>
              ))}
            </div>
          </div>

          <div id="svg-wrapper" className="absolute top-10">
            <svg
              viewBox="-210 140 600 400"
              fill="none"
              className="w-[40rem] h-auto overflow-visible"
            >
              <path
                d={
                  isMobile
                    ? "M-50 120, L50 120"
                    : isTablet
                    ? "M50 130, L150 130, L250 200"
                    : isDesktop
                    ? "M50 130, L250 130, L400 185"
                    : "M50 130, L200 130, L300 185"
                }
                className="animated-path"
                ref={pathRef}
              />
              <circle
                cx={isMobile ? "-50" : "50"}
                cy={isMobile ? "120" : "130"}
                r="5"
                fill="#d4c300"
              />
              {isMobile ? null : isTablet ? (
                <circle cx="250" cy="200" r="5" fill="#d4c300" />
              ) : isDesktop ? (
                <circle cx="400" cy="185" r="5" fill="#d4c300" />
              ) : (
                <circle cx="300" cy="185" r="5" fill="#d4c300" />
              )}
            </svg>
          </div>
        </div>

        <div className="w-full sm:w-4/5 md:w-1/2 lg:w-[40%] flex justify-center items-center mx-auto fade-in">
          <FluidImageMask shouldAnimate={shouldAnimateImage} />
        </div>
      </section>
    </>
  );
};

export default Profile;
