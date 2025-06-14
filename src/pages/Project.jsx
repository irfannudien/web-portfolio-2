import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projectList = Array.from({ length: 8 }, (_, i) => ({
  title: `Project ${i + 1}`,
  desc: `Deskripsi project ${i + 1}`,
}));

export default function Project() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const total = projectList.length;
    const delay = 0.05;
    const step = (1 - delay) / total;

    const scrollLength = total * 300; // Semakin banyak card, makin panjang scrollnya
    sectionRef.current.style.paddingBottom = `${scrollLength}px`;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${scrollLength}`, // dinamis berdasarkan jumlah card
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    cardRefs.current.forEach((card, i) => {
      const start = delay + i * step;
      // const end = delay + (i + 1) * step;

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
      className="bg-transparent text-white relative" // ⬅️ pakai min-h agar bisa nutupin pin area
    >
      <div className="h-screen flex items-center justify-center">
        <div className="flex gap-6 px-24">
          {projectList.map((p, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="w-[130px] h-[180px] bg-white text-black rounded-xl shadow-lg flex items-center justify-center text-center text-sm font-semibold"
            >
              {p.title}
            </div>
          ))}
        </div>
      </div>

      {/* <div
        style={{
          height: `${projectList.length * 300}px`,
          pointerEvents: "none",
        }}
      /> */}
    </section>
  );
}
