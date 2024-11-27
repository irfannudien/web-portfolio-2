import React from "react";

export default function Home() {
  return (
    <div id="home" className="h-screen relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-grid-pattern flex items-center justify-center">
        <h1 className="bg-yellow-500 text-center">Home</h1>
      </div>
    </div>
  );
}
