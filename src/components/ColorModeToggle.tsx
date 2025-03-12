
import React from 'react';
import { Eye } from 'lucide-react';
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
      title: newMode ? "Color blind mode enabled" : "Standard mode enabled",
      description: newMode ? "Using high contrast, colorblind-friendly colors" : "Using standard colors",
      duration: 2000,
    });
  };

  return (
    <button
      onClick={toggleColorMode}
      className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
        isColorBlindMode 
          ? 'bg-[rgb(254,198,161)]/10 border border-[rgb(254,198,161)]/30 text-[rgb(254,198,161)]' 
          : 'bg-neon-green/10 border border-neon-green/30 text-neon-green'
      } ${className}`}
    >
      <div className="w-2 h-2 rounded-full animate-pulse" style={{ 
        backgroundColor: isColorBlindMode ? 'rgb(254,198,161)' : '#00FFC4' 
      }}></div>
      <span>
        {isColorBlindMode ? 'ACCESSIBLE_MODE' : 'STANDARD_MODE'}
      </span>
    </button>
  );
};

export default ColorModeToggle;
