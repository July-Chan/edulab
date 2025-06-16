import React from "react";

export default function SliderIndicators({ current, total, onIndicatorClick }) {
  return (
    <div className="slider-indicators">
      {[...Array(total)].map((_, index) => (
        <button
          key={index}
          className={`indicator ${index === current ? "active" : ""}`}
          onClick={() => onIndicatorClick(index)}
          aria-label={`Перейти до слайда ${index + 1}`}
        />
      ))}
    </div>
  );
}
