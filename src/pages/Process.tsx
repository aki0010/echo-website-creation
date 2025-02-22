
import Navigation from '@/components/Navigation';
import MatrixRain from '@/components/MatrixRain';
import { Palette, Code2, Rocket, Star } from 'lucide-react';

const Process = () => {
  const phases = [
    {
      number: "01",
      title: "DESIGN",
      subtitle: "PHASE_1",
      icon: <Palette className="w-8 h-8 text-neon-green" />,
      description: "Crafting your digital vision with precision",
      features: [
        "CONSULTATION",
        "PLANNING",
        "DRAFT_IMPLEMENTATION"
      ],
      metrics: [
        { label: "PLANNING", value: "100%", color: "text-neon-green" },
        { label: "PRECISION", value: "Elite", color: "text-neon-green" },
        { label: "VISION", value: "Clear", color: "text-neon-green" }
      ]
    },
    {
      number: "02",
      title: "DEVELOPMENT",
      subtitle: "PHASE_2",
      icon: <Code2 className="w-8 h-8 text-neon-green" />,
      description: "Building with innovation and excellence",
      features: [
        "UPDATING",
        "LIMIT_PUSHING",
        "OPTIMIZING"
      ],
      metrics: [
        { label: "SPEED", value: "99.9%", color: "text-neon-green" },
        { label: "QUALITY", value: "A+", color: "text-neon-green" },
        { label: "PERFORMANCE", value: "Elite", color: "text-neon-green" }
      ]
    },
    {
      number: "03",
      title: "LAUNCH",
      subtitle: "PHASE_3",
      icon: <Rocket className="w-8 h-8 text-neon-green" />,
      description: "Deploying and evolving your platform",
      features: [
        "DEPLOYMENT",
        "HOSTING",
        "CONTINUED_EVOLUTION"
      ],
      metrics: [
        { label: "UPTIME", value: "99.999%", color: "text-neon-green" },
        { label: "SPEED", value: "Ultra", color: "text-neon-green" },
        { label: "RELIABILITY", value: "100%", color: "text-neon-green" }
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
            {/* Process Header */}
            <div className="cyber-card p-8 mb-12">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Code2 className="w-8 h-8 text-neon-green" />
                  <div>
                    <h1 className="text-4xl font-bold">
                      DESIGN <span className="text-neon-purple">PROCESS</span>
                    </h1>
                    <p className="text-neon-green/60">WEBSITE_CREATION_ENGINE</p>
                  </div>
                </div>
                <div className="px-4 py-1 bg-neon-green/10 rounded-full border border-neon-green/30">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                    <span className="text-sm">SYSTEM_ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Phases Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {phases.map((phase) => (
                <div key={phase.number} className="cyber-card flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-neon-green/10 border border-neon-green/30 flex items-center justify-center text-sm">
                      {phase.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{phase.title}</h3>
                      <p className="text-sm text-neon-green/60">{phase.subtitle}</p>
                    </div>
                  </div>

                  <div className="mb-6">{phase.icon}</div>
                  
                  <p className="text-sm text-neon-green/80 mb-6">{phase.description}</p>

                  <div className="space-y-2 mb-6">
                    {phase.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <span className="text-neon-green/60">→</span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto grid grid-cols-3 gap-4">
                    {phase.metrics.map((metric, index) => (
                      <div key={index} className="text-center">
                        <div className="text-xs text-neon-green/60 mb-1">{metric.label}</div>
                        <div className={`text-sm font-bold ${metric.color}`}>{metric.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Mission Log Section */}
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
              
              <div className="aspect-video w-full bg-cyber-dark/50 rounded-lg border border-neon-green/20">
                {/* Mission log content placeholder */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Process;
