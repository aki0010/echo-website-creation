
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
    <div className="cyber-card h-full">
      <Icon className="w-6 h-6 mb-4 text-neon-green" />
      <div className="text-4xl font-bold mb-2 text-neon-blue">{value}</div>
      <div className="text-cyber-text-secondary text-sm uppercase">{label}</div>
    </div>
  );
};

export default StatsCard;
