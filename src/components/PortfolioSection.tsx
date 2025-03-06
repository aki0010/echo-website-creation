
import { ArrowUpRight, Github, Globe, Shield, Zap, CreditCard } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl: string;
  features?: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
}

const projects: Project[] = [
  {
    title: "Hexacard",
    description: "Digital card management application with secure transactions and real-time monitoring. Optimized for modern financial needs.",
    tags: ["React Native", "Security", "Fintech"],
    liveUrl: "https://hexacard.me",
    imageUrl: "/lovable-uploads/8137f629-22c9-4f59-a6a2-914e9729a1de.png",
    features: [
      {
        icon: <Zap className="w-4 h-4 text-neon-purple" />,
        title: "Transaction Statistics",
        description: "Easily access information about all your transactions."
      },
      {
        icon: <Shield className="w-4 h-4 text-neon-purple" />,
        title: "Professional Card Security",
        description: "24/7 monitoring of transaction quality and security to prevent fraud."
      },
      {
        icon: <CreditCard className="w-4 h-4 text-neon-purple" />,
        title: "Diverse Features",
        description: "Change card phone number, receive 3D card codes, support for 32 currency units and more."
      }
    ]
  },
  {
    title: "E-handelslösning",
    description: "Modern e-handelsplattform byggd med Next.js och Stripe integration. Optimerad för prestanda och konvertering.",
    tags: ["Next.js", "Stripe", "TailwindCSS"],
    liveUrl: "https://example-shop.com",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "SaaS Dashboard",
    description: "Administrativt dashboard för SaaS-företag med realtidsanalyser och användarhantering.",
    tags: ["React", "TypeScript", "GraphQL"],
    liveUrl: "https://example-dashboard.com",
    imageUrl: "/placeholder.svg"
  }
];

const PortfolioSection = () => {
  return (
    <section className="max-w-7xl mx-auto my-24" id="portfolio">
      <div className="cyber-card p-8">
        <div className="flex items-center gap-2 px-4 py-1 bg-neon-green/10 rounded-full border border-neon-green/30 w-fit mb-6">
          <span className="text-sm">PROJEKT_GALLERI</span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 break-words">
          LANSERADE_<span className="text-neon-purple">PROJEKT</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-cyber-dark/50 border border-neon-green/20 rounded-lg overflow-hidden hover:border-neon-green/40 transition-all duration-300"
            >
              <div className="aspect-video bg-cyber-dark/80 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-neon-green/70 text-sm mb-4">
                  {project.description}
                </p>
                
                {project.features && (
                  <div className="space-y-3 mb-4 border-t border-neon-green/20 pt-4">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <div className="mt-1">{feature.icon}</div>
                        <div>
                          <h4 className="text-sm font-semibold">{feature.title}</h4>
                          <p className="text-xs text-neon-green/60">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs px-2 py-1 bg-neon-green/10 rounded-full border border-neon-green/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-neon-green hover:text-neon-green/80 transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-neon-green hover:text-neon-green/80 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Kod
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="px-6 py-3 bg-neon-purple/10 rounded-lg border border-neon-purple/30 hover:bg-neon-purple/20 transition-all duration-300 flex items-center gap-2 mx-auto">
            VISA_FLER_PROJEKT
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
