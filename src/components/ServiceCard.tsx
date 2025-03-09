
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
      className="service-card"
      onClick={onClick}
    >
      <div className="service-header">
        <div className="service-title">
          <span>{'>'}</span>
          <span>{title}</span>
        </div>
        <div className="access-tag">
          {status}
        </div>
      </div>
      
      <div className="service-icon">
        <Icon className="w-6 h-6" />
      </div>
      
      <h3 className="service-name">{title}</h3>
      
      <p className="service-desc">
        {description}
      </p>
      
      <div className="features">
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
  );
};

export default ServiceCard;
