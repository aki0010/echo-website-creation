
import Navigation from '@/components/Navigation';
import MatrixRain from '@/components/MatrixRain';
import ServiceCard from '@/components/ServiceCard';

const Services = () => {
  const services = [
    {
      title: "Webbutveckling",
      type: "website" as const,
      description: "Professionell webbutveckling med moderna designprinciper och omfattande varumärkesintegration.",
      status: "REDO" as const,
      features: [
        { name: "Professionell Design" },
        { name: "Mobilanpassning" },
        { name: "Varumärkesidentitet" },
        { name: "Visuell Excellens" }
      ]
    },
    {
      title: "Webbplats/App UI Design",
      type: "web3" as const,
      description: "Skapa moderna och användarvänliga gränssnitt för webbplatser och appar.",
      status: "REDO" as const,
      features: [
        { name: "Användarcentrerad Design" },
        { name: "Interaktiva Prototyper" },
        { name: "Responsiv Design" },
        { name: "Designsystem" }
      ]
    },
    {
      title: "Prestandaanalys",
      type: "analytics" as const,
      description: "Omfattande analysdashboard för övervakning av projektmätvärden och användarengagemang.",
      status: "INITIERAR" as const,
      features: [
        { name: "Datavisualisering" },
        { name: "Mätning" },
        { name: "Användarinsikter" },
        { name: "Prestandaövervakning" }
      ]
    },
    {
      title: "Communityplattform",
      type: "community" as const,
      description: "Integrerad communityhanteringsplattform med omfattande engagemangsverktyg.",
      status: "REDO" as const,
      features: [
        { name: "Sociala Funktioner" },
        { name: "Medlemshantering" },
        { name: "Kommunikationsverktyg" },
        { name: "Engagemangsövervakning" }
      ]
    },
    {
      title: "Säkerhetsimplementering",
      type: "security" as const,
      description: "Säkerhetsimplementering på företagsnivå med omfattande skyddsåtgärder.",
      status: "REDO" as const,
      features: [
        { name: "Attackprevention" },
        { name: "Dataskydd" },
        { name: "Åtkomstkontroll" },
        { name: "Säkerhetsuppdateringar" }
      ]
    },
    {
      title: "Teknisk Drift",
      type: "technical" as const,
      description: "Professionell teknisk support och underhållstjänster för optimal prestanda.",
      status: "INITIERAR" as const,
      features: [
        { name: "Kontinuerligt Stöd" },
        { name: "Systemuppdateringar" },
        { name: "Prestandaoptimering" },
        { name: "Infrastrukturhantering" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-cyber-dark text-neon-green overflow-hidden">
      <MatrixRain />
      <div className="relative z-10">
        <Navigation />
        <main className="pt-24 px-6 pb-24">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">TJÄNSTER_MATRIS</h1>
            <p className="text-neon-green/80 mb-12 max-w-2xl">
              Utforska vårt omfattande utbud av tjänster utformade för att transformera din digitala närvaro
              med toppmodern teknik och innovativa lösningar.
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
          </div>
        </main>
      </div>
    </div>
  );
};

export default Services;
