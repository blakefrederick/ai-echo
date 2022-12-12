import React, { useEffect, useRef } from 'react';

const Snowflake: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const context = canvasRef.current.getContext('2d');
    const width = canvasRef.current.width;
    const height = canvasRef.current.height;

    context.fillStyle = 'lightblue';

    setInterval(() => {
        context.clearRect(0, 0, width, height);

        context.beginPath();
        context.moveTo(width / 2, height / 2);

        for (let i = 0; i < 6; i++) {
            let x = Math.sin(i * Math.PI / 4);
            let y = Math.cos(i * Math.PI / 4);
            context.lineTo((width / 3) + (x * (width / 2)), (height / 3) + (y * (height / 2)));
        }

        context.fill();
    }, 1000);
  });

  return <canvas ref={canvasRef} width={500} height={500} />;
};

export default Snowflake;
