
import React from 'react';
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
        <main className="pt-[10vh] px-[3vw] pb-[10vh]">
          <div className="max-w-7xl mx-auto">
            {/* Process Header */}
            <div className="cyber-card p-[2em] mb-[3em]">
              <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr,auto] items-center gap-[1em]">
                <Code2 className="w-[2em] h-[2em] text-neon-green justify-self-start" />
                <div className="min-w-0">
                  <h1 className="text-[clamp(1.5rem,4vw,3rem)] font-bold break-words leading-[1.2]">
                    DEVELOPMENT <span className="text-neon-purple">PROCESS</span>
                  </h1>
                  <p className="text-neon-green/60 text-[0.875em] sm:text-[1em]">WEBSITE_CREATION_ENGINE</p>
                </div>
                <div className="px-[1em] py-[0.25em] bg-neon-green/10 rounded-full border border-neon-green/30 justify-self-start sm:justify-self-end">
                  <div className="flex items-center gap-[0.5em]">
                    <div className="w-[0.5em] h-[0.5em] bg-neon-green rounded-full animate-pulse"></div>
                    <span className="text-[0.875em] whitespace-nowrap">SYSTEM_ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Phases Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5em]">
              {phases.map((phase) => (
                <div key={phase.number} className="cyber-card flex flex-col h-full p-[1.5em]">
                  <div className="grid grid-cols-[auto,1fr] gap-[0.75em] mb-[1.5em]">
                    <div className="w-[2.5em] h-[2.5em] rounded-full bg-neon-green/10 border border-neon-green/30 flex items-center justify-center text-[0.875em]">
                      {phase.number}
                    </div>
                    <div>
                      <h3 className="text-[1.25em] font-bold leading-[1.2]">{phase.title}</h3>
                      <p className="text-[0.875em] text-neon-green/60">{phase.subtitle}</p>
                    </div>
                  </div>

                  <div className="mb-[1.5em]">
                    {React.cloneElement(phase.icon as React.ReactElement, {
                      className: "w-[2em] h-[2em] text-neon-green"
                    })}
                  </div>
                  
                  <p className="text-[0.875em] text-neon-green/80 mb-[1.5em]">{phase.description}</p>

                  <div className="grid gap-[0.5em] mb-[1.5em]">
                    {phase.features.map((feature, index) => (
                      <div key={index} className="grid grid-cols-[auto,1fr] gap-[0.5em] text-[0.875em] items-center">
                        <span className="text-neon-green/60">→</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto grid grid-cols-3 gap-[1em]">
                    {phase.metrics.map((metric, index) => (
                      <div key={index} className="text-center">
                        <div className="text-[0.75em] text-neon-green/60 mb-[0.25em]">{metric.label}</div>
                        <div className={`text-[0.875em] font-bold ${metric.color}`}>{metric.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Process;
