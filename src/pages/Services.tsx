
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
  
  return (
    <div id="services" className="section-padding">
      <div className="container">
        <div className="badge mb-6">
          DIGITAL INNOVATION
        </div>
        <h1 className="mb-6">TJÄNSTER</h1>
        <p className="description mb-12">
          Vi är experter på att skapa digitala lösningar som hjälper företag att växa online. 
          Med vårt unika "betala när du är nöjd"-koncept garanterar vi högsta kvalitet och kundnöjdhet.
        </p>
        
        <div className="services">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              type={service.type} 
              description={service.description} 
              status={service.status} 
              features={service.features} 
              selected={selectedService === index} 
              onClick={() => setSelectedService(index === selectedService ? null : index)} 
            />
          ))}
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-8">VÅR EXPERTIS</h2>
          
          <div className="services">
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div key={index} className="service-card">
                  <div className="service-header">
                    <div className="service-title">
                      <span>{'>'}</span>
                      <span>{area.title}</span>
                    </div>
                    <div className="access-tag">
                      EXPERTIS
                    </div>
                  </div>
                  
                  <div className="service-icon">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="service-name">{area.title}</h3>
                  
                  <p className="service-desc">
                    {area.description}
                  </p>
                  
                  <div className="features">
                    {area.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="feature">
                        <span className="feature-icon">+</span>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
