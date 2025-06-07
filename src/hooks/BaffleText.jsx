import baffle from "baffle";
import React, { useEffect, useRef } from "react";

const BaffleText = ({ children, className = "" }) => {
  const ref = useRef(null);

  useEffect(() => {
    const b = baffle(ref.current);
    b.set({
      characters: "█▓▒░▀▄■●▲◆◣◤◥◀▶◉◎◈⇄⇆⇋⇌⇔",
      speed: 150,
    });
    b.start();
    b.reveal(2000);

    return () => {
      b.stop();
    };
  }, [children]);

  return (
    <h1 ref={ref} className={className} style={{ whiteSpace: "pre-line" }}>
      {children}
    </h1>
  );
};

export default BaffleText;
