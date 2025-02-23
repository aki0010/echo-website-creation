
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
      <div className={cn(
        "absolute -inset-0.5 bg-gradient-to-r blur opacity-75 transition-all duration-300 group-hover:opacity-100",
        selected 
          ? "from-neon-purple/40 to-transparent" 
          : "from-neon-green/20 to-transparent",
        "color-blind-mode:from-[rgb(211,228,253)]/40 color-blind-mode:to-transparent"
      )}/>
      <div className={cn(
        "cyber-card relative h-full flex flex-col bg-cyber-dark/95",
        selected && "border-neon-purple border-opacity-40",
        "color-blind-mode:border-[rgb(211,228,253)] color-blind-mode:border-opacity-40"
      )}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-sm text-neon-green color-blind-mode:text-[rgb(254,198,161)]">
            <span>{'>'}</span>
            <span className="font-mono">{title}</span>
          </div>
          <div className={cn(
            "px-2 py-0.5 rounded-full text-xs border transition-colors duration-300",
            selected 
              ? "border-neon-purple/30 bg-neon-purple/10 text-neon-purple" 
              : "border-neon-green/30 bg-neon-green/10 text-neon-green",
            "color-blind-mode:border-[rgb(211,228,253)]/30 color-blind-mode:bg-[rgb(211,228,253)]/10 color-blind-mode:text-[rgb(211,228,253)]"
          )}>
            {status}
          </div>
        </div>
        
        <Icon className={cn(
          "w-12 h-12 mb-4 transition-colors duration-300",
          selected ? "text-neon-purple" : "text-neon-green",
          "color-blind-mode:text-[rgb(211,228,253)]"
        )} />
        
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        
        <p className="text-neon-green/70 text-sm mb-6 color-blind-mode:text-[rgb(254,198,161)]/70">
          {description}
        </p>
        
        <div className="mt-auto">
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={cn(
                  "flex items-center gap-2 text-sm transition-colors duration-300",
                  selected ? "text-neon-purple/90" : "text-neon-green/90",
                  "color-blind-mode:text-[rgb(211,228,253)]/90"
                )}
              >
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
