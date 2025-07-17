import React, { useRef, useEffect } from "react";
import ProjectCardHorizontal from "./ProjectCardHorizontal";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { dataList } from "../../../data";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimate({ sectionRef }) {
  const cardRefs = useRef([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const total = dataList.projectList.length;
    const step = 1 / total;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${total * 700}`,
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      },
    });

    cardRefs.current.forEach((card, i) => {
      if (!card) return;

      card.style.pointerEvents = "none";

      const start = i * step;

      tl.fromTo(
        card,
        { y: 100, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          ease: "power2.out",
          onStart: () => {
            card.style.pointerEvents = "auto";
          },
          onReverseComplete: () => {
            card.style.pointerEvents = "none";
          },
        },
        start
      );
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div className="flex gap-6 px-24 flex-nowrap w-fit">
      {dataList.projectList.map((item, index) => (
        <ProjectCardHorizontal
          key={index}
          innerRef={(el) => (cardRefs.current[index] = el)}
          title={item.title}
          imageUrl={item.imageUrl}
          year={item.year}
        />
      ))}
    </div>
  );
}
