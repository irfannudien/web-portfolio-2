import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const GsapMagnetic = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = el.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      gsap.to(el, {
        x: x,
        y: y,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const mouseLeave = (e) => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    el.addEventListener("mousemove", mouseMove);
    el.addEventListener("mouseleave", mouseLeave);

    return () => {
      el.removeEventListener("mousemove", mouseMove);
      el.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return (
    <div ref={ref} className="inline-block will-change-transform z-30">
      {children}
    </div>
  );
};

export default GsapMagnetic;
