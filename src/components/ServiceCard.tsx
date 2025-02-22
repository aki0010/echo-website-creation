
import { Palette, Globe, BarChart3, Users, Shield, Code2 } from 'lucide-react';

interface ServiceFeature {
  name: string;
}

interface ServiceCardProps {
  title: string;
  type: 'website' | 'web3' | 'analytics' | 'community' | 'security' | 'technical';
  description: string;
  status: 'TILLGÄNGLIG';
  features: ServiceFeature[];
}

const ServiceCard = ({ title, type, description, status, features }: ServiceCardProps) => {
  const icons = {
    website: Palette,
    web3: Globe,
    analytics: BarChart3,
    community: Users,
    security: Shield,
    technical: Code2
  };

  const Icon = icons[type];

  return (
    <div className="relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-green/20 to-transparent rounded-lg blur opacity-75"></div>
      <div className="cyber-card relative h-full flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-sm text-neon-green/80">
            <span>{'>'}</span>
            <span className="font-mono">{title}</span>
          </div>
          <div className="px-2 py-0.5 rounded-full text-xs border border-neon-green/30 bg-neon-green/10 text-neon-green">
            {status}
          </div>
        </div>
        
        <Icon className="w-12 h-12 mb-4 text-neon-green" />
        
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        
        <p className="text-neon-green/70 text-sm mb-6">{description}</p>
        
        <div className="mt-auto">
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-neon-green/90">
                <span className="text-xs">→</span>
                {feature.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
