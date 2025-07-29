import React, { useRef, useEffect, useState } from "react";
import ProjectCardHorizontal from "./ProjectCardHorizontal";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { dataList } from "../../../data";
import ProjectHeader from "./ProjectHeader";
import ModalView from "../ModalView";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalAnimate({ sectionRef, setIsModalOpen }) {
  const cardRefs = useRef([]);
  const [modalData, setModalData] = useState(null);

  const handleOpenModal = (data) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalData(null);
    setIsModalOpen(false);
  };

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

  useEffect(() => {
    console.log(modalData);
    const scrollTarget = window.lenis?.target || document.body;

    if (modalData) {
      scrollTarget.style.overflow = "hidden";
      window.lenis?.stop?.();
    } else {
      scrollTarget.style.overflow = "";
      window.lenis?.start?.();
    }

    return () => {
      scrollTarget.style.overflow = "";
      window.lenis?.start?.();
    };
  }, [modalData]);

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
              desc={item.desc}
              onViewClick={() => handleOpenModal(item)}
            />
          ))}
        </div>
      </div>
      {modalData && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur p-20">
          <div className="flex flex-col bg-white w-full h-full rounded-xl px-5 items-center">
            <button
              onClick={handleCloseModal}
              className="flex text-black font-bold text-2xl self-end justify-center"
            >
              &times;
            </button>

            <div
              className="w-20 h-20 bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url(${modalData.imageUrl})` }}
            />

            <h2 className="text-2xl text-black font-bold px-6 pt-6">
              {modalData.title}
            </h2>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <img
                src={modalData.imageUrl}
                alt={modalData.title}
                className="rounded-xl h-36 w-36 bg-cover"
              />
              <p className="text-gray-700 leading-relaxed">
                {modalData.desc || "No data ..."}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* <ModalView data={modalData} onClose={handleCloseModal} /> */}
    </>
  );
}
