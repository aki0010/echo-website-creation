
import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const rainColumnsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // CSS-based rain effect
    const rainContainer = rainColumnsRef.current;
    if (!rainContainer) return;
    
    const containerWidth = window.innerWidth;
    rainContainer.innerHTML = '';
    
    // Create 50 rain columns at random positions
    for (let i = 0; i < 50; i++) {
      const column = document.createElement('div');
      column.className = 'rain-column';
      column.style.left = `${Math.random() * containerWidth}px`;
      column.style.animationDuration = `${15 + Math.random() * 20}s`;
      column.style.animationDelay = `${Math.random() * 10}s`;
      rainContainer.appendChild(column);
    }

    // Cleanup function
    return () => {
      if (rainContainer) {
        rainContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <div 
      ref={rainColumnsRef}
      className="fixed inset-0 z-0 pointer-events-none digital-rain"
    />
  );
};

export default MatrixRain;
