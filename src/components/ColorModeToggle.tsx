
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
      className={`flex items-center gap-2 px-3 py-1 rounded-full transition-colors ${
        isColorBlindMode 
          ? 'bg-[rgb(254,198,161)]/20 border border-[rgb(254,198,161)]/30 text-[rgb(254,198,161)]' 
          : 'bg-neon-green/10 border border-neon-green/30 text-neon-green'
      } ${className}`}
    >
      <Eye className="w-4 h-4" />
      <span className="text-sm">
        {isColorBlindMode ? 'ACCESSIBLE_MODE' : 'STANDARD_MODE'}
      </span>
    </button>
  );
};

export default ColorModeToggle;
