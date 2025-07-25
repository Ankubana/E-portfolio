import React, { useRef } from 'react';
import triangle from '../Assets/triangle.svg';
import circle from '../Assets/circle.svg';
import semiCircle from '../Assets/semi-circle.svg';
import squiggly from '../Assets/squiggly.svg';

const Shape = () => {
  const shapeRefs = useRef([]);

  const shapeImages = [
    semiCircle,
    circle,
    squiggly,
    circle,
    triangle,
    circle,
    squiggly,
    circle,
    semiCircle,
  ];

  const moveBackground = (event) => {
    const scaleFactor = 1 / 20;
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    shapeRefs.current.forEach((shape, i) => {
      if (!shape) return;
      const isOdd = i % 2 !== 0;
      const direction = isOdd ? -1 : 1;
      shape.style.transform = `translate(${x * direction}px, ${y * direction}px)`;
    });
  };

  const resetShapes = () => {
    shapeRefs.current.forEach((shape) => {
      if (shape) shape.style.transform = 'translate(0px, 0px)';
    });
  };

  return (
    <div
      className="shape-container"
      onMouseMove={moveBackground}
      onMouseLeave={resetShapes}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {shapeImages.map((src, i) => (
        <img
          key={i}
          src={src}
          ref={(el) => (shapeRefs.current[i] = el)}
          className={`shape shape--${i}`}
          alt={`Shape ${i}`}
        />
      ))}
    </div>
  );
};

export default Shape;