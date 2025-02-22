
import Navigation from '@/components/Navigation';
import MatrixRain from '@/components/MatrixRain';
import ServiceCard from '@/components/ServiceCard';

const Services = () => {
  const services = [
    {
      title: "Webbdesign & Utveckling",
      type: "website" as const,
      description: "Skräddarsydda webbplatser med responsiv design och SEO-optimering.",
      status: "TILLGÄNGLIG" as const,
      features: [
        { name: "Responsiv Design" },
        { name: "SEO-optimering" },
        { name: "Moderna Tekniker" },
        { name: "Prestanda" }
      ]
    },
    {
      title: "App-utveckling",
      type: "technical" as const,
      description: "iOS, Android och hybrid-appar med modern teknologi och användarfokus.",
      status: "TILLGÄNGLIG" as const,
      features: [
        { name: "iOS & Android" },
        { name: "Hybrid-appar" },
        { name: "Användarfokus" },
        { name: "Modern Teknologi" }
      ]
    },
    {
      title: "UI Design",
      type: "web3" as const,
      description: "Användarvänliga gränssnitt med fokus på UX och interaktionsdesign.",
      status: "TILLGÄNGLIG" as const,
      features: [
        { name: "UX Design" },
        { name: "Interaktionsdesign" },
        { name: "Användartester" },
        { name: "Prototyper" }
      ]
    },
    {
      title: "E-handelslösningar",
      type: "analytics" as const,
      description: "Kompletta e-handelsplattformar med säker betalning och lagerhantering.",
      status: "TILLGÄNGLIG" as const,
      features: [
        { name: "Säker Betalning" },
        { name: "Lagerhantering" },
        { name: "Integration" },
        { name: "E-handelsplattform" }
      ]
    },
    {
      title: "Logotyp & Grafisk Design",
      type: "community" as const,
      description: "Företagslogotyper, visuell identitet och tryckmaterial.",
      status: "TILLGÄNGLIG" as const,
      features: [
        { name: "Logotyper" },
        { name: "Visuell Identitet" },
        { name: "Tryckmaterial" },
        { name: "Varumärkesdesign" }
      ]
    },
    {
      title: "Webbunderhåll",
      type: "security" as const,
      description: "Kontinuerlig support, uppdateringar och tekniskt underhåll.",
      status: "TILLGÄNGLIG" as const,
      features: [
        { name: "Support" },
        { name: "Uppdateringar" },
        { name: "Tekniskt Underhåll" },
        { name: "Övervakning" }
      ]
    }
  ];

  return (
    <div id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="inline-block px-4 py-1 bg-neon-green/10 rounded-full border border-neon-green/30 mb-6">
          DIGITAL INNOVATION
        </div>
        <h1 className="text-5xl font-bold mb-6">TJÄNSTER</h1>
        <p className="text-neon-green/80 mb-12 max-w-2xl">
          Vi är experter på att skapa digitala lösningar som hjälper företag att växa online. 
          Med vårt unika "betala när du är nöjd"-koncept garanterar vi högsta kvalitet och kundnöjdhet.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              type={service.type}
              description={service.description}
              status={service.status}
              features={service.features}
            />
          ))}
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-8">VÅR EXPERTIS</h2>
          
          <div className="grid gap-8">
            <div className="cyber-card p-6">
              <h3 className="text-xl mb-4">Backend</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-neon-green">Node.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neon-green">Python</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neon-green">PostgreSQL</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neon-green">REST API</span>
                </div>
              </div>
            </div>

            <div className="cyber-card p-6">
              <h3 className="text-xl mb-4">Frontend</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-neon-green">React</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neon-green">TypeScript</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neon-green">TailwindCSS</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neon-green">Next.js</span>
                </div>
              </div>
            </div>

            <div className="cyber-card p-6">
              <h3 className="text-xl mb-4">Utvecklingsverktyg</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-neon-green">Databaser</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neon-green">Docker</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neon-green">AWS</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neon-green">CI/CD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
