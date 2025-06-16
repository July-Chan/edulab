import React, { useState, useEffect, useRef, useCallback } from "react";
import SliderIndicators from "./SliderIndicators";

const images = [
  "/svg/slide_home1.svg",
  "/svg/slide_home2.svg",
  "/svg/slide_home3.svg",
  "/svg/slide_home4.svg",
];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [direction, setDirection] = useState(null);
  const [prevCurrent, setPrevCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);


  const slideToNext = useCallback(() => {
    if (isSliding) return;
    setDirection("next");
    setPrevCurrent(current);
    setIsSliding(true);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setIsSliding(false);
      setDirection(null);
    }, 500);
  }, [current, isSliding]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      slideToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [slideToNext]);

  const slideToPrev = () => {
    if (isSliding) return;
    setDirection("prev");
    setPrevCurrent(current);
    setIsSliding(true);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
      setIsSliding(false);
      setDirection(null);
    }, 500);
  };

  const goToSlide = (index) => {
    if (isSliding || index === current) return;
    setDirection(index > current ? "next" : "prev");
    setPrevCurrent(current);
    setIsSliding(true);
    timeoutRef.current = setTimeout(() => {
      setCurrent(index);
      setIsSliding(false);
      setDirection(null);
    }, 500);
  };

  const baseTransforms = {
    left: "calc(-50% - 1200px)",
    center: "-50%",
    right: "calc(-50% + 1200px)",
  };


  const referenceIndex = isSliding ? prevCurrent : current;
  const leftIndex = (referenceIndex - 1 + images.length) % images.length;
  const rightIndex = (referenceIndex + 1) % images.length;

  const shiftPx = isSliding ? (direction === "next" ? -1200 : 1200) : 0;

  return (
    <div className="slider-wrapper">
      <div className="slider-container">
        <div
          className="slide slide-left"
          onClick={slideToPrev}
          style={{
            backgroundImage: `url(${images[leftIndex]})`,
            transform: `translateX(calc(${baseTransforms.left} + ${shiftPx}px)) scale(1)`,
            transition: isSliding ? "transform 0.5s ease, opacity 0.5s ease" : "none",
            opacity: 1,
            width: "1020px",
            zIndex: 2,
          }}
        />
        <div
          className="slide slide-center"
          style={{
            backgroundImage: `url(${images[referenceIndex]})`,
            transform: `translateX(calc(${baseTransforms.center} + ${shiftPx}px)) scale(1)`,
            transition: isSliding ? "transform 0.5s ease, opacity 0.5s ease" : "none",
            width: "1020px",
            zIndex: 3,
            opacity: 1,
          }}
        />
        <div
          className="slide slide-right"
          onClick={slideToNext}
          style={{
            backgroundImage: `url(${images[rightIndex]})`,
            transform: `translateX(calc(${baseTransforms.right} + ${shiftPx}px)) scale(1)`,
            transition: isSliding ? "transform 0.5s ease, opacity 0.5s ease" : "none",
            opacity: 1,
            width: "1020px",
            zIndex: 2,
          }}
        />
      </div>

      <SliderIndicators current={current} total={images.length} onIndicatorClick={goToSlide} />
    </div>
  );
}
