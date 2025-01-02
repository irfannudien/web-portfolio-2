import React from "react";

export default function Button(props) {
  const { children, path, onClick, className } = props;
  return (
    <div
      className={`text-white cursor-pointer p-2 rounded-r-lg mr-0.5 hover:bg-slate-600 ${className}`}
    >
      <a href={path} onClick={onClick}>
        {children}
      </a>
    </div>
  );
}
