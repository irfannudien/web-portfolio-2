import { useEffect, useRef } from "react";
import baffle from "baffle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrambleText({ text, className = "" }) {
  const spanRef = useRef(null);

  useEffect(() => {
    const el = spanRef.current;

    let ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          y: 50,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
            onEnter: () => {
              const b = baffle(el, {
                characters: "!@#$%^&*",
                speed: 100,
              });
              b.start();
              b.text(() => text).reveal(1000);
            },
          },
        }
      );
    }, [el]);

    return () => ctx.revert();
  }, [text]);

  return (
    <span ref={spanRef} className={`inline-block whitespace-pre ${className}`}>
      {text}
    </span>
  );
}
