import React, { useRef, useEffect } from "react";
import ProjectCardHorizontal from "./ProjectCardHorizontal";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { dataList } from "../../../data";
import ProjectHeader from "./ProjectHeader";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalAnimate({ sectionRef }) {
  const cardRefs = useRef([]);

  useEffect(() => {
    if (!sectionRef?.current) return;

    const cards = cardRefs.current.filter(Boolean);

    const total = cards.length;
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
        refreshPriority: -1,
      },
    });

    cards.forEach((card, i) => {
      if (!card) return;

      gsap.set(card, { y: 100, autoAlpha: 0 });
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
  }, [sectionRef]);

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center gap-6 pt-10">
        <ProjectHeader />
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
      </div>
    </>
  );
}
