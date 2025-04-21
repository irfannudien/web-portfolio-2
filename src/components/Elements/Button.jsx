import React from "react";

export default function Button(props) {
  const { children, onClick, className } = props;
  return (
    <div
      className={`text-white cursor-pointer p-2 hover:bg-slate-600 ${className}`}
    >
      <a onClick={onClick} className={`${className}`}>
        {children}
      </a>
    </div>
  );
}
