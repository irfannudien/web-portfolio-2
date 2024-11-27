import React from "react";

export default function Button(props) {
  const { children, path } = props;
  return (
    <div className="text-white">
      <a href={path}>{children}</a>
    </div>
  );
}
