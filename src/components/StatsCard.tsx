
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
    <div className="service-card">
      <div className="service-header">
        <div className="service-title">
          <span>{'>'}</span>
          <span>{label}</span>
        </div>
        <div className="access-tag">
          STATISTIK
        </div>
      </div>
      
      <div className="service-icon">
        <Icon className="w-6 h-6" />
      </div>
      
      <div className="service-name">{value}</div>
      <p className="service-desc">{label}</p>
    </div>
  );
};

export default StatsCard;
