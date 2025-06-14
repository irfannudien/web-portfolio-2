// components/SmoothScrollProvider.jsx
import { useEffect } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2, // Semakin gede = scroll makin lambat
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 👇 Biar GSAP tau kalau pakai custom scroll
    lenis.on("scroll", ScrollTrigger.update);

    // Optional: buat debugging
    // window.lenis = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
