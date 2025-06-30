import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { dataList } from "../data";

gsap.registerPlugin(ScrollTrigger);

export default function Project() {
  const sectionRef = useRef(null);
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
    <section
      ref={sectionRef}
      className=" text-white relative min-h-screen px-48"
    >
      <div className="h-screen flex flex-col items-center justify-center gap-6 pt-10">
        <div className="w-full text-center flex flex-col gap-4">
          <h2 className="text-2xl md:text-5xl font-bold tracking-widest text-white font-majorMono">
            Projects
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto tracking-wide">
            Some of my projects, I've worked on — simple, clean, and made with
            style. From landing pages to digital invites.
          </p>
        </div>
        <div className="horizontal-scroll flex gap-6 px-24 flex-nowrap w-fit">
          {dataList.projectList.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="group relative bg-cover bg-center rounded-2xl overflow-hidden transition-all origin-left w-[150px] h-[350px] hover:w-[220px] duration-700 font-poiret shrink-0"
              style={{
                backgroundImage: `url(${item.imageUrl})`,
              }}
            >
              <p className="absolute bottom-0 left-4 text-white text-xl tracking-widest rotate-[-90deg] origin-top-left whitespace-nowrap transition-all duration-700 ease-in-out group-hover:rotate-0 group-hover:bottom-16 group-hover:left-4 font-bold group-hover:opacity-0">
                {item.title}
              </p>

              <p className="absolute bottom-16 left-4 mb-1 w-[150px] text-white text-xl tracking-widest rotate-[-90deg] transition-all duration-700 ease-in-out opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:rotate-0 font-bold whitespace-normal break-words leading-tight">
                {item.title}
              </p>

              <div className="absolute -bottom-12 left-4 flex flex-col gap-1 items-start opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:bottom-4 group-hover:left-4">
                <p className="text-white text-base transition-all delay-200 tracking-widest">
                  {item.year}
                </p>
                {/* <p className="text-white text-xs mb-1 transition-all delay-300">
                  {p.desc}
                </p> */}
                <button className="px-5 py-1 bg-white text-black text-sm rounded transition-all delay-400">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
