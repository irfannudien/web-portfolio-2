import React from "react";

const ButtonSidebar = (props) => {
  const { children, onClick, className } = props;
  return (
    <div
      className={`text-white cursor-pointer p-2 hover:drop-shadow-[0_0_6px_#38bdf8] transition ${className}`}
    >
      <a onClick={onClick} className={`${className}`}>
        {children}
      </a>
    </div>
  );
};

export default ButtonSidebar;
