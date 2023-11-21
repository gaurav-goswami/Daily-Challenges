import React, { useState } from "react";
import Image from "./Image";
import scene1 from "../assets/scene1.jpg";
import scene2 from "../assets/scene2.jpg";
import scene3 from "../assets/scene3.jpg";
import scene4 from "../assets/scene4.jpg";
import scene5 from "../assets/scene5.jpg";
import scene6 from "../assets/scene6.jpg";
import scene7 from "../assets/scene7.jpg";
import Slider from "./Slider";

const Grid = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [scene1, scene2, scene3, scene4, scene5, scene6, scene7];

  const handleClick = (index) => {
    setIsOpen(true);
    setCurrentIndex(index)
  }

  return (
    <>
      <div className="w-full h-[100vh] overflow-y-scroll grid grid-container gap-2 text-white max-[1200px]:max-h-max max-[1200px]:flex max-[1200px]:flex-col p-2">
        {images.map((img, index) => {
          return (
            <div
              key={index}
              className={`grid-child-${index + 1} grid-child overflow-hidden`}
              onClick={() => handleClick(index)}
            >
              <Image src={img} />
            </div>
          );
        })}
      </div>

      {isOpen ? <Slider open={() => setIsOpen(false)} currentIndex={currentIndex} changeIndex={setCurrentIndex}/> : null}
    </>
  );
};

export default Grid;
