import React, { useEffect, useRef } from 'react';

const Lines: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const context = canvasRef.current.getContext('2d');
    const width = canvasRef.current.width;
    const height = canvasRef.current.height;

    // set the stroke style for the lines
    context.strokeStyle = 'black';

    // draw random lines on the canvas every 1 second
    setInterval(() => {
        // choose a random starting point for the line
        var x1 = Math.floor(Math.random() * width);
        var y1 = Math.floor(Math.random() * height);

        // choose a random ending point for the line
        var x2 = Math.floor(Math.random() * width);
        var y2 = Math.floor(Math.random() * height);

        // choose a random color for the line
        var color = '#' + Math.floor(Math.random() * 16777215).toString(16);

        // set the stroke color for the line
        context.strokeStyle = color;

        // draw the line on the canvas
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
    }, 1000);
  });

  return <canvas ref={canvasRef} width={500} height={500} />;
};

export default Lines;
