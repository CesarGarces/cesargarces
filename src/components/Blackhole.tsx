import React, { useRef, useEffect } from 'react';

const BlackHoleAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    const centerX = width / 2;
    const centerY = height / 2;
    let radius = 10;
    const maxRadius = 100;
    const speed = 0.05;
    const color = 'rgba(150, 75, 200, 0.8)';
    const whiteGlow = 'rgba(255, 255, 255, 0.7)';

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Create radial gradient
      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        radius,
        centerX,
        centerY,
        maxRadius
      );
      gradient.addColorStop(0, whiteGlow);
      gradient.addColorStop(0.4, color);
      gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');

      // Draw the black hole
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, maxRadius, 0, Math.PI * 2);
      ctx.fill();

      // Update the radius for animation
      radius += speed;
      if (radius > maxRadius || radius < 10) {
        radius = 10;
      }

      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -2 }} />;
};

export default BlackHoleAnimation;