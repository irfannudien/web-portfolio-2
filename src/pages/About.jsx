import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

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

const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
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
          },
        }
      );

      gsap.fromTo(
        pathRef.current,
        { strokeDashoffset: length },
        {
          strokeDashoffset: 0,
          duration: 0.8,
          delay: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: pathRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
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
          },
        }
      );

      // gsap.set(".skill-item", { autoAlpha: 0, y: 40 });

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
          },
        }
      );

      gsap.fromTo(
        headingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 100%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
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
        id="about"
        ref={sectionRef}
        className="relative z-10 px-48 py-16 bg-transparent text-white flex flex-col-reverse md:flex-row items-center justify-between gap-16 overflow-hidden"
      >
        {/* <div className="absolute top-20 right-10 w-72 h-72 bg-[#00ff9f]/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-50 left-20 w-60 h-60 bg-yellow-500/20 rounded-full blur-[100px] pointer-events-none" /> */}
        <div className="md:w-1/2 flex flex-col relative">
          <div id="svg-wrapper" className="absolute top-10">
            <svg
              viewBox="-210 140 600 400"
              fill="none"
              className="w-[40rem] h-auto overflow-visible"
            >
              <path
                d="M50 130, L200 130, L300 185"
                className="animated-path"
                ref={pathRef}
              />
              <circle cx="50" cy="130" r="5" fill="#d4c300" />
              <circle cx="300" cy="185" r="5" fill="#d4c300" />
            </svg>
          </div>

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

            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <GsapMagnetic>
                  <span
                    key={index}
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
        </div>

        <div className="md:w-1/2 flex justify-center fade-in py-40">
          <img
            src="https://res.cloudinary.com/daly4jtr1/image/upload/v1751254359/illustration.png"
            alt="Illustration"
            className="w-full max-w-md drop-shadow-neonPink"
          />
        </div>
      </section>
    </>
  );
};

export default About;
