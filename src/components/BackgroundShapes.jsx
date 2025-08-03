// src/components/BackgroundShapes.jsx
import React, { useRef } from 'react';
import circle from '../Assets/circle.svg';
import semiCircle from '../Assets/semi-circle.svg';
import squiggly from '../Assets/squiggly.svg';
import triangle from '../Assets/triangle.svg';

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

const BackgroundShapes = () => {
  const shapeRefs = useRef([]);

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

  return (
    <div
      className="background-shapes-container"
      onMouseMove={moveBackground}
      onMouseLeave={() => {
        shapeRefs.current.forEach((shape) => {
          if (shape) shape.style.transform = 'translate(0px, 0px)';
        });
      }}
      style={{
        position:'fixed',
        top: 0,
        left: 0,
        width:'100vw',
        height:'100vh',
        pointerEvents: 'none',
        zIndex: -1,
        overflow:'hidden',
      }}
    >
      {shapeImages.map((src, i) => (
        <img
          key={i}
          src={src}
          ref={(el) => (shapeRefs.current[i] = el)}
          className={`shape shape--${i}`}
          alt={`Shape ${i}`}
          style={{
            position:'absolute',
            width:'40px',
            height:'40px',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.4,
            transition:'transform 0.2s ease',
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundShapes;