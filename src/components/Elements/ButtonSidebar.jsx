import React from "react";

const ButtonSidebar = (props) => {
  const { children, onClick, className } = props;
  return (
    <div
      className={`text-white cursor-pointer p-2 hover:bg-[#666666] ${className}`}
    >
      <a onClick={onClick} className={`${className}`}>
        {children}
      </a>
    </div>
  );
};

export default ButtonSidebar;
