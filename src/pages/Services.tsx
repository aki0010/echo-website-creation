import Navigation from '@/components/Navigation';
import MatrixRain from '@/components/MatrixRain';
import ServiceCard from '@/components/ServiceCard';
import { Code2, Database, Cpu, Globe, Boxes, Workflow } from 'lucide-react';
import { useState } from 'react';
const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const services = [{
    title: "Webbdesign & Utveckling",
    type: "website" as const,
    description: "Skräddarsydda webbplatser med responsiv design och SEO-optimering.",
    status: "TILLGÄNGLIG" as const,
    features: [{
      name: "Responsiv Design"
    }, {
      name: "SEO-optimering"
    }, {
      name: "Moderna Tekniker"
    }, {
      name: "Prestanda"
    }]
  }, {
    title: "App-utveckling",
    type: "technical" as const,
    description: "iOS, Android och hybrid-appar med modern teknologi och användarfokus.",
    status: "TILLGÄNGLIG" as const,
    features: [{
      name: "iOS & Android"
    }, {
      name: "Hybrid-appar"
    }, {
      name: "Användarfokus"
    }, {
      name: "Modern Teknologi"
    }]
  }, {
    title: "UI Design",
    type: "web3" as const,
    description: "Användarvänliga gränssnitt med fokus på UX och interaktionsdesign.",
    status: "TILLGÄNGLIG" as const,
    features: [{
      name: "UX Design"
    }, {
      name: "Interaktionsdesign"
    }, {
      name: "Användartester"
    }, {
      name: "Prototyper"
    }]
  }, {
    title: "E-handelslösningar",
    type: "analytics" as const,
    description: "Kompletta e-handelsplattformar med säker betalning och lagerhantering.",
    status: "TILLGÄNGLIG" as const,
    features: [{
      name: "Säker Betalning"
    }, {
      name: "Lagerhantering"
    }, {
      name: "Integration"
    }, {
      name: "E-handelsplattform"
    }]
  }, {
    title: "Logotyp & Grafisk Design",
    type: "community" as const,
    description: "Företagslogotyper, visuell identitet och tryckmaterial.",
    status: "TILLGÄNGLIG" as const,
    features: [{
      name: "Logotyper"
    }, {
      name: "Visuell Identitet"
    }, {
      name: "Tryckmaterial"
    }, {
      name: "Varumärkesdesign"
    }]
  }, {
    title: "Webbunderhåll",
    type: "security" as const,
    description: "Kontinuerlig support, uppdateringar och tekniskt underhåll.",
    status: "TILLGÄNGLIG" as const,
    features: [{
      name: "Support"
    }, {
      name: "Uppdateringar"
    }, {
      name: "Tekniskt Underhåll"
    }, {
      name: "Övervakning"
    }]
  }];
  const expertiseAreas = [{
    title: "Backend",
    icon: Database,
    skills: ["Node.js", "Python", "PostgreSQL", "REST API"],
    description: "Robusta och skalbara backend-lösningar"
  }, {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "TypeScript", "TailwindCSS", "Next.js"],
    description: "Moderna och responsiva användargränssnitt"
  }, {
    title: "Utvecklingsverktyg",
    icon: Workflow,
    skills: ["Databaser", "Docker", "AWS", "CI/CD"],
    description: "Effektiva verktyg för utveckling och driftsättning"
  }, {
    title: "Cloud & DevOps",
    icon: Globe,
    skills: ["AWS", "Azure", "Kubernetes", "Jenkins"],
    description: "Molnbaserade lösningar och automation"
  }, {
    title: "System Integration",
    icon: Boxes,
    skills: ["API", "Microservices", "ESB", "ETL"],
    description: "Sömlös integration mellan system"
  }, {
    title: "Performance & Security",
    icon: Cpu,
    skills: ["SSL", "Caching", "Load Balancing", "Monitoring"],
    description: "Optimerad prestanda och säkerhet"
  }];
  return <div id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="inline-block px-4 py-1 bg-neon-green/10 rounded-full border border-neon-green/30 mb-6 color-blind-mode:bg-[rgb(254,198,161)]/10 color-blind-mode:border-[rgb(254,198,161)]/30">
          DIGITAL INNOVATION
        </div>
        <h1 className="text-5xl font-bold mb-6">TJÄNSTER</h1>
        <p className="mb-12 max-w-2xl text-gray-300">
          Vi är experter på att skapa digitala lösningar som hjälper företag att växa online. 
          Med vårt unika "betala när du är nöjd"-koncept garanterar vi högsta kvalitet och kundnöjdhet.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => <ServiceCard key={index} title={service.title} type={service.type} description={service.description} status={service.status} features={service.features} selected={selectedService === index} onClick={() => setSelectedService(index === selectedService ? null : index)} />)}
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-8">VÅR EXPERTIS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return <div key={index} className="relative group cursor-pointer transition-all duration-300 hover:scale-[1.02]">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-green/20 to-transparent blur opacity-75 group-hover:opacity-100 transition-all duration-300 color-blind-mode:from-[rgb(254,198,161)]/20" />
                  <div className="cyber-card group h-full relative bg-cyber-dark/95">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-neon-green/10 border border-neon-green/30 group-hover:bg-neon-green/20 transition-colors color-blind-mode:bg-[rgb(254,198,161)]/10 color-blind-mode:border-[rgb(254,198,161)]/30 color-blind-mode:group-hover:bg-[rgb(254,198,161)]/20">
                        <Icon className="w-6 h-6 text-neon-green color-blind-mode:text-[rgb(254,198,161)]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl mb-2 group-hover:text-neon-green transition-colors color-blind-mode:group-hover:text-[rgb(254,198,161)]">{area.title}</h3>
                        <p className="text-sm text-neon-green/60 mb-4 group-hover:text-neon-green/80 transition-colors color-blind-mode:text-[rgb(254,198,161)]/60 color-blind-mode:group-hover:text-[rgb(254,198,161)]/80">{area.description}</p>
                        <div className="grid grid-cols-2 gap-2">
                          {area.skills.map((skill, skillIndex) => <div key={skillIndex} className="flex items-center gap-2 text-sm text-neon-green/80 group-hover:text-neon-green transition-colors color-blind-mode:text-[rgb(254,198,161)]/80 color-blind-mode:group-hover:text-[rgb(254,198,161)]">
                              <span className="w-1.5 h-1.5 bg-neon-green/50 rounded-full group-hover:bg-neon-green transition-colors color-blind-mode:bg-[rgb(254,198,161)]/50 color-blind-mode:group-hover:bg-[rgb(254,198,161)]"></span>
                              {skill}
                            </div>)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>;
          })}
          </div>
        </div>
      </div>
    </div>;
};
export default Services;