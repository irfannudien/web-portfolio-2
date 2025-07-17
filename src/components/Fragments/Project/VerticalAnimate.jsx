import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectHeader from "./ProjectHeader";
import ProjectCardVertical from "./ProjectCardVertical";
import { dataList } from "../../../data";

gsap.registerPlugin(ScrollTrigger);

export default function VerticalAnimate({ sectionRef }) {
  const itemsRef = useRef([]);

  useEffect(() => {
    if (!sectionRef?.current) return;

    const items = itemsRef.current.filter(Boolean);

    items.forEach((item, index) => {
      if (index !== 0) {
        gsap.set(item, { yPercent: 100 });
      }
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        start: "top top",
        end: `+=${items.length * 100}%`,
        scrub: 1,
        invalidateOnRefresh: true,
        pinSpacing: true,
        refreshPriority: -1,
      },
      defaults: { ease: "none" },
    });

    items.forEach((item, index) => {
      timeline.to(item, {
        scale: 0.9,
        borderRadius: "0.5rem",
      });

      if (index < items.length - 1) {
        timeline.to(
          items[index + 1],
          {
            yPercent: 0,
          },
          "<"
        );
      }
    });

    return () => {
      timeline.scrollTrigger?.kill();
      timeline.kill();
    };
  }, [sectionRef]);

  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="h-1/2 flex flex-col gap-6">
        <ProjectHeader />

        <div className="relative h-full w-full flex items-start justify-center p-1 overflow-hidden gap-5">
          {dataList.projectList.map((item, i) => (
            <ProjectCardVertical
              key={i}
              item={item}
              innerRef={(el) => (itemsRef.current[i] = el)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
