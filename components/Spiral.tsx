import React, { useEffect, useRef } from 'react';

const Spiral: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const ctx = canvasRef.current.getContext('2d');

    const n = 100; // number of circles in the spiral
    const rotationAngle = 5; // angle to rotate each circle by
    const radiusIncrease = 5; // amount to increase the radius by each step
    const delay = 800; // time to wait before drawing the next arc

    let x = 0;
    let y = 0;
    let r = 0;

    // draw each circle in the spiral with a delay in between
    for (let i = 0; i < n; i++) {
      setTimeout(() => {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.stroke();

        // rotate the circle by the specified angle and increase its radius
        x = x * Math.cos(rotationAngle) - y * Math.sin(rotationAngle);
        y = x * Math.sin(rotationAngle) + y * Math.cos(rotationAngle);
        r += radiusIncrease;
      }, delay * i);
    }
  });

  return <canvas ref={canvasRef} width={500} height={500} />;
};

export default Spiral;
