
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const MissionLog = () => {
  const projects = [
    {
      name: "BARSTOOL_SOL",
      description: "High-Energy Solana Token Platform with Degen Vibes",
      chain: "Solana",
      theme: "Memecoin",
      features: "One-Tap $BARSTOOL purchase, The best FAKE news around",
      image: "/lovable-uploads/3e03d912-c9d7-4c76-8211-56f4ac6f55c5.png"
    }
    // Add more projects as needed
  ];

  return (
    <section id="portfolio" className="py-24">
      <div className="cyber-card p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Star className="w-6 h-6 text-neon-green" />
            <div>
              <h2 className="text-2xl font-bold">
                MISSION_<span className="text-neon-purple">LOG</span>
              </h2>
              <p className="text-neon-green/60">COMPLETED_OPERATIONS</p>
            </div>
          </div>
          <div className="px-4 py-1 bg-neon-green/10 rounded-full border border-neon-green/30">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
              <span className="text-sm">MISSION_ACTIVE</span>
            </div>
          </div>
        </div>

        <div className="relative">
          {projects.map((project, index) => (
            <div key={index} className="relative">
              <img src={project.image} alt={project.name} className="w-full aspect-video rounded-lg object-cover" />
              <div className="mt-6 space-y-4">
                <h3 className="text-xl font-bold text-neon-green">{project.name}</h3>
                <p className="text-neon-green/70">{project.description}</p>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <div className="text-neon-green/60 text-sm mb-1">CHAIN</div>
                    <div>{project.chain}</div>
                  </div>
                  <div>
                    <div className="text-neon-green/60 text-sm mb-1">PROJECT_THEME</div>
                    <div>{project.theme}</div>
                  </div>
                  <div>
                    <div className="text-neon-green/60 text-sm mb-1">FEATURES</div>
                    <div className="text-sm">{project.features}</div>
                  </div>
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-neon-green hover:text-neon-green/80 transition-colors">
                  <span>Visit Project</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
          <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-cyber-dark/80 border border-neon-green/30 rounded-full flex items-center justify-center text-neon-green hover:bg-neon-green/10 transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-cyber-dark/80 border border-neon-green/30 rounded-full flex items-center justify-center text-neon-green hover:bg-neon-green/10 transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MissionLog;
