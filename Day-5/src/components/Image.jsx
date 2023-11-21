import React from "react";

const Image = ({ src }) => {
  return (
    <img src={src} alt="image src" className="w-full h-full object-cover cursor-pointer grayscale-[.8] hover:grayscale-0 transition-all hover:scale-[1.15]" />
  );
};

export default Image;
