import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectList } from "../data";

gsap.registerPlugin(ScrollTrigger);

export default function Project() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const total = projectList.length;
    const delay = 0.05;
    const step = (1 - delay) / total;

    const scrollLength = total * 300;
    sectionRef.current.style.paddingBottom = `${scrollLength}px`;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${scrollLength}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    cardRefs.current.forEach((card, i) => {
      const start = delay + i * step;

      tl.fromTo(
        card,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
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
    <section
      ref={sectionRef}
      className="bg-transparent text-white relative min-h-screen"
    >
      <div className="h-screen flex items-center justify-center">
        <div className="flex gap-6 px-24">
          {projectList.map((p, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="group relative bg-cover bg-center rounded-xl overflow-hidden transition-[width] origin-left w-[150px] h-[350px] hover:w-[200px]"
              style={{ backgroundImage: `url(${p.imageUrl})` }}
            >
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
                <p className="text-white text-sm transform rotate-[-90deg] origin-center transition-transform duration-500 ease-in-out group-hover:rotate-0">
                  {p.title}
                </p>

                <div className="flex flex-col items-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                  <p className="text-white text-xs mt-2">{p.year}</p>
                  <p className="text-white text-xs mt-1">{p.desc}</p>
                  <button className="mt-2 px-2 py-1 bg-white text-black text-xs rounded">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
