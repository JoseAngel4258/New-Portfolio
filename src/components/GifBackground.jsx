import React from "react";

const GifBackground = ({ src }) => {
  return (
    <div className="h-screen w-screen fixed inset-0 z-[-1] overflow-hidden brightness-75">
      <img src={src} className="h-full w-full object-cover" />
    </div>
  );
};

export default GifBackground;
