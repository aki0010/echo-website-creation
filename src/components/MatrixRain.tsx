
import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rainColumnsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Canvas rain effect (existing)
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '01';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(0);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#00FFC4';
      ctx.font = `${fontSize}px JetBrains Mono`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    // New CSS-based rain effect
    const rainContainer = rainColumnsRef.current;
    if (rainContainer) {
      const containerWidth = window.innerWidth;
      
      // Create 50 rain columns at random positions
      for (let i = 0; i < 50; i++) {
        const column = document.createElement('div');
        column.className = 'rain-column';
        column.style.left = `${Math.random() * containerWidth}px`;
        column.style.animationDuration = `${15 + Math.random() * 20}s`;
        column.style.animationDelay = `${Math.random() * 10}s`;
        rainContainer.appendChild(column);
      }
    }

    const interval = setInterval(draw, 33);
    return () => {
      clearInterval(interval);
      if (rainContainer) {
        rainContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="matrix-bg"
      />
      <div 
        ref={rainColumnsRef}
        className="fixed inset-0 z-0 pointer-events-none opacity-10"
      />
      <style jsx>{`
        .rain-column {
          position: absolute;
          top: -100px;
          width: 1px;
          height: 100px;
          background: linear-gradient(to bottom, transparent, #00FFC4, transparent);
          animation: rain linear infinite;
          opacity: 0.5;
        }
      `}</style>
    </>
  );
};

export default MatrixRain;
