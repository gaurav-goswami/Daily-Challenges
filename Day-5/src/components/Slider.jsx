import React, { useEffect } from "react";
import { MdCancel } from "react-icons/md";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import scene1 from "../assets/scene1.jpg";
import scene2 from "../assets/scene2.jpg";
import scene3 from "../assets/scene3.jpg";
import scene4 from "../assets/scene4.jpg";
import scene5 from "../assets/scene5.jpg";
import scene6 from "../assets/scene6.jpg";
import scene7 from "../assets/scene7.jpg";

const Slider = ({ currentIndex, open, changeIndex }) => {
  const images = [scene1, scene2, scene3, scene4, scene5, scene6, scene7];

  const goForward = () => {
    if (currentIndex === images.length - 1) {
      changeIndex(0);
    } else {
      changeIndex(currentIndex + 1);
    }
  };

  const goBack = () => {
    if (currentIndex === 0) {
      changeIndex(images.length - 1);
    } else {
      changeIndex(currentIndex - 1);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      goBack();
    } else if (event.key === "ArrowRight") {
      goForward();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex]);

  return (
    <>
      <div className="w-full h-full bg-[#71263134] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-20">
        <div className="w-[80vw] h-[90vh] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-black">
          <button className="absolute top-2 left-2 z-10" onClick={open}>
            <MdCancel className="text-white text-2xl" />
          </button>

          <button className="absolute top-[50%] left-4" onClick={goBack}>
            <FaAngleLeft className="text-white text-2xl" />
          </button>

          <button className="absolute top-[50%] right-4" onClick={goForward}>
            <FaAngleRight className="text-white text-2xl" />
          </button>

          <img
            src={images[currentIndex]}
            alt="image"
            className={`w-full h-full object-contain transition-opacity duration-500 opacity-0 ${
              currentIndex === 0 ? "transition-opacity" : ""
            }`}
            onLoad={() => {
              setTimeout(() => {
                document
                  .getElementById("slider-image")
                  .classList.remove("opacity-0");
              }, 0);
            }}
            id="slider-image"
          />
        </div>
      </div>
    </>
  );
};

export default Slider;
