
import { ArrowUpRight, Github, Globe } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl: string;
}

const projects: Project[] = [
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
  },
  {
    title: "Företagsportal",
    description: "Skalbar företagsportal med integrerad CMS och användarautentisering.",
    tags: ["React", "Node.js", "PostgreSQL"],
    imageUrl: "/placeholder.svg"
  }
];

const PortfolioSection = () => {
  return (
    <section className="max-w-7xl mx-auto my-24">
      <div className="cyber-card p-8">
        <div className="flex items-center gap-2 px-4 py-1 bg-neon-green/10 rounded-full border border-neon-green/30 w-fit mb-6">
          <span className="text-sm">PROJEKT_GALLERI</span>
        </div>
        
        <h2 className="text-4xl font-bold mb-8">
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
