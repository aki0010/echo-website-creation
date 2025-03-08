
import { Palette, Globe, BarChart3, Users, Shield, Code2 } from 'lucide-react';
import { cn } from "@/lib/utils";

interface ServiceFeature {
  name: string;
}

interface ServiceCardProps {
  title: string;
  type: 'website' | 'web3' | 'analytics' | 'community' | 'security' | 'technical';
  description: string;
  status: 'TILLGÄNGLIG';
  features: ServiceFeature[];
  selected?: boolean;
  onClick?: () => void;
}

const ServiceCard = ({ 
  title, 
  type, 
  description, 
  status, 
  features,
  selected = false,
  onClick 
}: ServiceCardProps) => {
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
    <div 
      className={cn(
        "relative group cursor-pointer transition-all duration-300",
        selected && "scale-[1.02]"
      )}
      onClick={onClick}
    >
      <div className="service-card h-full flex flex-col">
        <div className="service-header flex items-center justify-between mb-4">
          <div className="service-title text-neon-green">
            <span>{'>'}</span>
            <span className="font-mono">{title}</span>
          </div>
          <div className="access-tag">
            {status}
          </div>
        </div>
        
        <div className={cn(
          "service-icon",
          selected ? "text-neon-purple" : "text-neon-green",
        )}>
          <Icon className="w-6 h-6" />
        </div>
        
        <h3 className="service-name">{title}</h3>
        
        <p className="service-desc">
          {description}
        </p>
        
        <div className="mt-auto">
          <div className="features space-y-2">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature"
              >
                <span className="feature-icon">+</span>
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
