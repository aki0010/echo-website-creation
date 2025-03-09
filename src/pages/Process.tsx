
import React from 'react';
import { Palette, Code2, Rocket } from 'lucide-react';

const Process = () => {
  const phases = [
    {
      number: "01",
      title: "DESIGN",
      subtitle: "PHASE_1",
      icon: <Palette className="w-6 h-6" />,
      description: "Crafting your digital vision with precision",
      features: [
        "CONSULTATION",
        "PLANNING",
        "DRAFT_IMPLEMENTATION"
      ],
      metrics: [
        { label: "PLANNING", value: "100%" },
        { label: "PRECISION", value: "Elite" },
        { label: "VISION", value: "Clear" }
      ]
    },
    {
      number: "02",
      title: "DEVELOPMENT",
      subtitle: "PHASE_2",
      icon: <Code2 className="w-6 h-6" />,
      description: "Building with innovation and excellence",
      features: [
        "UPDATING",
        "LIMIT_PUSHING",
        "OPTIMIZING"
      ],
      metrics: [
        { label: "SPEED", value: "99.9%" },
        { label: "QUALITY", value: "A+" },
        { label: "PERFORMANCE", value: "Elite" }
      ]
    },
    {
      number: "03",
      title: "LAUNCH",
      subtitle: "PHASE_3",
      icon: <Rocket className="w-6 h-6" />,
      description: "Deploying and evolving your platform",
      features: [
        "DEPLOYMENT",
        "HOSTING",
        "CONTINUED_EVOLUTION"
      ],
      metrics: [
        { label: "UPTIME", value: "99.999%" },
        { label: "SPEED", value: "Ultra" },
        { label: "RELIABILITY", value: "100%" }
      ]
    }
  ];

  return (
    <div id="process" className="section-padding">
      <div className="container">
        <div className="badge mb-6">
          UTVECKLINGS PROCESS
        </div>
        <h1 className="mb-6">PROCESS</h1>
        <p className="description mb-12">
          Vår utvecklingsprocess är utformad för att säkerställa högsta kvalitet 
          och kundnöjdhet från start till mål.
        </p>

        <div className="services">
          {phases.map((phase) => (
            <div key={phase.number} className="service-card">
              <div className="service-header">
                <div className="service-title">
                  <span>{phase.number}</span>
                  <span>{phase.title}</span>
                </div>
                <div className="access-tag">
                  {phase.subtitle}
                </div>
              </div>
              
              <div className="service-icon">
                {React.cloneElement(phase.icon as React.ReactElement, {
                  className: "w-6 h-6"
                })}
              </div>
              
              <h3 className="service-name">{phase.title}</h3>
              
              <p className="service-desc">{phase.description}</p>
              
              <div className="features">
                {phase.features.map((feature, index) => (
                  <div key={index} className="feature">
                    <span className="feature-icon">+</span>
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-3 gap-4 mt-6">
                {phase.metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xs text-neon-green/60 mb-1">{metric.label}</div>
                    <div className="text-sm font-bold text-neon-green">{metric.value}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
