
import { Globe, Code2, Timer, Star } from 'lucide-react';

interface StatsCardProps {
  type: 'websites' | 'innovation' | 'uptime' | 'satisfaction';
  value: string;
  label: string;
}

const StatsCard = ({ type, value, label }: StatsCardProps) => {
  const icons = {
    websites: Globe,
    innovation: Code2,
    uptime: Timer,
    satisfaction: Star
  };

  const Icon = icons[type];

  return (
    <div className="stats-card bg-cyber-card border border-cyber-border rounded-lg p-3 sm:p-4 hover:border-neon-green hover:border-opacity-30 hover:shadow-[0_0_20px_rgba(0,255,196,0.2)] transition-all duration-300">
      <div className="flex justify-between items-center mb-2">
        <div className="text-xs text-neon-green flex items-center gap-1">
          <span>{'>'}</span>
          <span className="truncate">{label}</span>
        </div>
        <div className="px-1.5 py-0.5 rounded-full text-[10px] border transition-colors duration-300 border-neon-purple/30 bg-neon-purple/10 text-neon-purple">
          STATISTIK
        </div>
      </div>
      
      <div className="flex items-center gap-2 sm:gap-3 mt-2 sm:mt-3">
        <div className="p-1.5 sm:p-2 rounded-lg bg-neon-green/10 border border-neon-green/30 transition-colors w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-neon-green">
          <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
        </div>
        <div className="font-bold text-base sm:text-lg">{value}</div>
      </div>
    </div>
  );
};

export default StatsCard;
