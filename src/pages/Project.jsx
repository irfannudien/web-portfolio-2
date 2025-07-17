import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrambleText from "../components/Elements/ScrambleText";
import {
  HorizontalAnimate,
  VerticalAnimate,
} from "../components/Fragments/Project";

gsap.registerPlugin(ScrollTrigger);

export default function Project() {
  const sectionRef = useRef(null);
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const activeRef = useMemo(
    () => (isDesktop ? desktopRef : mobileRef),
    [isDesktop]
  );

  return (
    <section
      // // ref={isDesktop ? desktopRef : mobileRef}
      ref={sectionRef}
      id="project"
      className="relative z-10 min-h-screen text-white px-48 overflow-hidden"
    >
      {/* <div
        className={
          isDesktop
            ? "h-screen flex flex-col items-center justify-center gap-6 pt-10"
            : "flex flex-col items-center justify-center gap-6 pt-10"
        }
      > */}

      {/* {isDesktop && <HorizontalAnimate isActive={true} />} */}
      {/* {isDesktop && <HorizontalAnimate isActive={true} />}
      {!isDesktop && <VerticalAnimate isActive={true} />} */}
      {isDesktop ? (
        <HorizontalAnimate sectionRef={sectionRef} key="desktop" />
      ) : (
        <VerticalAnimate sectionRef={sectionRef} key="mobile" />
      )}
      {/* </div> */}
    </section>
  );
}
