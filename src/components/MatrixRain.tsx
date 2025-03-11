
import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const rainCanvasRef = useRef<HTMLCanvasElement>(null);
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
      
      // Add random characters to each column
      const charCount = 20 + Math.floor(Math.random() * 30);
      for (let j = 0; j < charCount; j++) {
        const char = document.createElement('div');
        char.className = 'matrix-char';
        
        // Use a mix of numbers, katakana characters, and symbols
        const randomCharType = Math.random();
        if (randomCharType < 0.5) {
          // Numbers and letters
          char.textContent = String.fromCharCode(
            48 + Math.floor(Math.random() * 75)
          );
        } else {
          // Katakana characters
          char.textContent = String.fromCharCode(
            0x30A0 + Math.floor(Math.random() * 96)
          );
        }
        
        // Random brightness for characters
        const brightness = Math.random();
        if (brightness < 0.2) {
          char.style.opacity = '1'; // Bright characters
          char.style.textShadow = '0 0 8px rgba(0, 255, 196, 0.8)';
        } else if (brightness < 0.5) {
          char.style.opacity = '0.8';
        } else {
          char.style.opacity = '0.5';
        }
        
        char.style.animationDelay = `${Math.random() * 5}s`;
        column.appendChild(char);
      }
      
      rainContainer.appendChild(column);
    }

    // Handle window resize
    const handleResize = () => {
      if (rainContainer) {
        rainContainer.innerHTML = '';
        const newWidth = window.innerWidth;
        
        for (let i = 0; i < 50; i++) {
          const column = document.createElement('div');
          column.className = 'rain-column';
          column.style.left = `${Math.random() * newWidth}px`;
          column.style.animationDuration = `${15 + Math.random() * 20}s`;
          column.style.animationDelay = `${Math.random() * 10}s`;
          rainContainer.appendChild(column);
        }
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
      ref={rainColumnsRef}
      className="fixed inset-0 z-0 pointer-events-none digital-rain"
    />
  );
};

export default MatrixRain;
