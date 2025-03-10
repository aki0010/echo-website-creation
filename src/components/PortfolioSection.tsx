
import { ArrowUpRight, Github, Globe, Shield, Zap, CreditCard, Server, Lock, Download, Upload, Smartphone } from 'lucide-react';

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
    title: "Hexo VPN",
    description: "Fast and reliable VPN application with just one tap to connect. Focuses on privacy, internet browsing and gaming experience with a point-based subscription system.",
    tags: ["Android", "Privacy", "VPN"],
    liveUrl: "https://apkpure.com/hexo-vpn-fast-and-reliable/com.hala.halavpn",
    imageUrl: "/lovable-uploads/3fc3ee27-61dd-49af-ac54-2854e9c1e9fe.png",
    features: [
      {
        icon: <Zap className="w-4 h-4 text-neon-purple" />,
        title: "Fast Connection",
        description: "Fast and reliable connection with best ping for gaming."
      },
      {
        icon: <Server className="w-4 h-4 text-neon-purple" />,
        title: "Large Server Network",
        description: "Access to large number of servers with ability to suggest new locations."
      },
      {
        icon: <Lock className="w-4 h-4 text-neon-purple" />,
        title: "Privacy Focused",
        description: "Add your favorite DNS server or choose from best DNS servers for enhanced privacy."
      },
      {
        icon: <Download className="w-4 h-4 text-neon-purple" />,
        title: "High Speed Streaming",
        description: "Download and stream videos with high speed connection, no time limits."
      },
      {
        icon: <Smartphone className="w-4 h-4 text-neon-purple" />,
        title: "Wide Compatibility",
        description: "Compatible with WiFi, LTE, 3G, and all mobile data carriers."
      },
      {
        icon: <Globe className="w-4 h-4 text-neon-purple" />,
        title: "Unrestricted Access",
        description: "Access blocked and geo-restricted content with unlimited free usage."
      }
    ]
  },
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
  }
];

const PortfolioSection = () => {
  return (
    <section className="section-padding" id="portfolio">
      <div className="container">
        <div className="badge mb-6">
          PROJEKT_GALLERI
        </div>
        
        <h1 className="mb-6">
          LANSERADE_<span className="code">PROJEKT</span>
        </h1>
        
        <p className="description mb-12 mx-0 text-left">
          Utforska våra senaste digitala projekt där vi har hjälpt företag att uppnå sina mål
          genom innovativa och skräddarsydda lösningar.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="service-card"
            >
              <div className="service-header">
                <div className="service-title">
                  <span>{'>'}</span>
                  <span className="truncate">{project.title}</span>
                </div>
                <div className="access-tag">
                  PROJEKT
                </div>
              </div>
              
              <div className="aspect-video bg-cyber-dark/80 overflow-hidden flex items-center justify-center mb-4 rounded border border-neon-green/20">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <h3 className="service-name">{project.title}</h3>
              <p className="service-desc">
                {project.description}
              </p>
              
              {project.features && (
                <div className="space-y-3 my-4">
                  {project.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm text-cyber-text-secondary">
                      <span className="text-neon-purple">+</span>
                      {feature.title}
                    </div>
                  ))}
                </div>
              )}
              
              <div className="flex flex-wrap gap-2 my-4">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="text-xs px-2 py-1 bg-neon-green/10 rounded-full border border-neon-green/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3 mt-4">
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
