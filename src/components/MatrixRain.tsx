
import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const rainContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Script to create the digital rain effect
    const rainContainer = rainContainerRef.current;
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

    // Recreate rain effect on window resize
    const handleResize = () => {
      if (!rainContainer) return;
      
      const newContainerWidth = window.innerWidth;
      rainContainer.innerHTML = '';
      
      for (let i = 0; i < 50; i++) {
        const column = document.createElement('div');
        column.className = 'rain-column';
        column.style.left = `${Math.random() * newContainerWidth}px`;
        column.style.animationDuration = `${15 + Math.random() * 20}s`;
        column.style.animationDelay = `${Math.random() * 10}s`;
        rainContainer.appendChild(column);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      if (rainContainer) {
        rainContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <div 
      ref={rainContainerRef}
      className="fixed inset-0 z-0 pointer-events-none digital-rain"
    />
  );
};

export default MatrixRain;
