import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const HamburgerButton = ({ isOpen, toggle }) => {
  const [lastScroll, setLastScroll] = useState(0);

  const topRef = useRef(null);
  const centerRef = useRef(null);
  const bottomRef = useRef(null);
  const tlRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (tlRef.current) tlRef.current.kill();
    const tl = gsap.timeline({
      defaults: { duration: 0.3, ease: "power2.inOut" },
    });

    if (isOpen) {
      tl.to(topRef.current, { y: 10, rotate: 45 }, "<")
        .to(centerRef.current, { rotate: -45 }, "<")
        .to(bottomRef.current, { y: -10, rotate: 45 }, "<");
    } else {
      tl.to(topRef.current, { y: 0, rotate: 0 }, "<")
        .to(centerRef.current, { rotate: 0 }, "<")
        .to(bottomRef.current, { y: 0, rotate: 0 }, "<");
    }
  }, [isOpen]);

  useEffect(() => {
    const scrollTarget = window.lenis?.target || document.body;

    if (isOpen) {
      gsap.to(menuRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        pointerEvents: "auto",
      });

      // Matikan scroll
      scrollTarget.style.overflow = "hidden";
      window.lenis?.stop?.();
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        pointerEvents: "none",
      });

      // Aktifkan scroll
      scrollTarget.style.overflow = "";
      window.lenis?.start?.();
    }

    return () => {
      scrollTarget.style.overflow = "";
      window.lenis?.start?.();
    };
  }, [isOpen]);

  // const handleNavClick = (target) => {
  //   window.lenis?.scrollTo(target);
  //   toggle();
  // };

  return (
    <>
      <button
        className="fixed top-6 right-6 md:hidden flex flex-col gap-2 z-50 w-6 h-6"
        onClick={toggle}
      >
        <span ref={topRef} className="h-[2px] w-6 bg-white block" />
        <span ref={centerRef} className="h-[2px] w-6 bg-white block" />
        <span
          ref={bottomRef}
          className="h-[2px] w-3 bg-white block origin-left self-end"
        />
      </button>

      <div
        ref={menuRef}
        className="fixed inset-0 w-full h-screen bg-black/50 backdrop-blur-md text-white p-8 z-40 flex flex-col justify-center items-center gap-4"
        style={{
          transform: "translateX(100%)",
          opacity: 0,
          pointerEvents: "none",
        }}
      >
        <button
          className="py-2 border-b border-white/20 w-full text-center"
          // onClick={() => handleNavClick("#profile")}
        >
          Profile
        </button>
        <button
          className="py-2 border-b border-white/20 w-full text-center"
          // onClick={() => handleNavClick("#project")}
        >
          Project
        </button>
        <button
          className="py-2 w-full text-center"
          // onClick={() => handleNavClick("#contact")}
        >
          Contact
        </button>
      </div>
    </>
  );
};

export default HamburgerButton;
