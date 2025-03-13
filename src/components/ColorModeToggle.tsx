
import React from 'react';
import { useToast } from '@/hooks/use-toast';

interface ColorModeToggleProps {
  className?: string;
}

const ColorModeToggle = ({ className = '' }: ColorModeToggleProps) => {
  const { toast } = useToast();
  const [isColorBlindMode, setIsColorBlindMode] = React.useState(false);

  const toggleColorMode = () => {
    const newMode = !isColorBlindMode;
    setIsColorBlindMode(newMode);
    document.documentElement.classList.toggle('color-blind-mode');
    
    toast({
      title: newMode ? "Accessible mode enabled" : "Standard mode enabled",
      description: newMode ? "Using accessible color scheme" : "Using standard colors",
      duration: 2000,
    });
  };

  return (
    <button
      onClick={toggleColorMode}
      className={`flex items-center gap-2 px-3 py-1 rounded-full border text-sm w-fit ${
        isColorBlindMode 
          ? 'bg-[#44C2FD]/10 border-[#44C2FD]/30 text-[#44C2FD]' 
          : 'bg-neon-green/10 border border-neon-green/30 text-neon-green'
      } ${className}`}
    >
      <div className="w-2 h-2 rounded-full animate-pulse" style={{ 
        backgroundColor: isColorBlindMode ? '#44C2FD' : '#00FFC4' 
      }}></div>
      <span>
        {isColorBlindMode ? 'ACCESSIBLE_MODE' : 'STANDARD_MODE'}
      </span>
    </button>
  );
};

export default ColorModeToggle;
