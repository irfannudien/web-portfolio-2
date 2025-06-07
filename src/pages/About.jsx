import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import imgAbout from "../assets/illustration.png"; // Adjust the path as necessary
import {
  FaBootstrap,
  FaCss3Alt,
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
import { label } from "framer-motion/client";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const length = pathRef.current.getTotalLength();
    pathRef.current.style.strokeDasharray = length;
    pathRef.current.style.strokeDashoffset = length;

    let ctx = gsap.context(() => {
      gsap.fromTo(
        pathRef.current,
        { strokeDashoffset: length },
        {
          strokeDashoffset: 0,
          duration: 5,
          delay: 0.2,
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
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { scale: 0.8, opacity: 0, y: 20 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
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
        className="relative min-h-screen px-40 py-15 bg-[#0e0e0e] text-white flex flex-col-reverse md:flex-row items-center justify-between gap-12 overflow-hidden"
      >
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#00ff9f]/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-50 left-20 w-60 h-60 bg-yellow-500/20 rounded-full blur-[100px] pointer-events-none" />

        <div id="svg-wrapper" className="absolute top-10">
          <svg
            viewBox="-210 150 600 400"
            fill="none"
            className="w-[40rem] h-auto overflow-visible"
          >
            <path
              d="M-200 200, L200 200, L325 325"
              className="animated-path"
              ref={pathRef}
            />
            <circle cx="-200" cy="200" r="5" fill="#d4c300" />
            <circle cx="325" cy="325" r="5" fill="#d4c300" />
          </svg>
        </div>

        <div className="relative md:w-1/2 space-y-6 fade-in">
          <h2 className="text-4xl md:text-5xl font-majorMono tracking-wider drop-shadow-neonPink">
            About Me
          </h2>

          <p className="text-lg leading-relaxed font-poiret text-white fade-in tracking-widest">
            I'm Irfan, a front-end developer who blends clean design and
            creative interactions. I build things with love for details and a
            techy twist.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="w-20 h-20 bg-white/5 border border-white/10
                    backdrop-blur-md rounded-xl flex flex-col items-center justify-center
                    transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              >
                {skill.icon}
                <span className="text-sm mt-1 font-poiret text-center tracking-widest">
                  {skill.label}
                </span>
              </span>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center fade-in">
          <img
            src={imgAbout}
            alt="Illustration"
            className="w-full max-w-md drop-shadow-neonPink"
          />
        </div>
      </section>
    </>
  );
};

export default About;
