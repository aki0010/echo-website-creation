
import Navigation from '@/components/Navigation';
import MatrixRain from '@/components/MatrixRain';
import TechStackCard from '@/components/TechStackCard';
import { Database, Code2, Server, Blocks, MonitorSmartphone, Wrench } from 'lucide-react';

const Process = () => {
  const techStack = [
    {
      title: "Blockchain Networks",
      icon: <Blocks className="w-6 h-6 text-neon-green" />,
      items: [
        { name: "Ethereum" },
        { name: "Solana" },
        { name: "Polygon" },
        { name: "BSC" }
      ]
    },
    {
      title: "Smart Contracts",
      icon: <Code2 className="w-6 h-6 text-neon-green" />,
      items: [
        { name: "Solidity" },
        { name: "Rust" },
        { name: "Anchor" },
        { name: "Hardhat" }
      ]
    },
    {
      title: "Frontend",
      icon: <MonitorSmartphone className="w-6 h-6 text-neon-green" />,
      items: [
        { name: "React" },
        { name: "TypeScript" },
        { name: "TailwindCSS" },
        { name: "Next.js" }
      ]
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6 text-neon-green" />,
      items: [
        { name: "Node.js" },
        { name: "GraphQL" },
        { name: "PostgreSQL" },
        { name: "Redis" }
      ]
    },
    {
      title: "Web3 Integration",
      icon: <Database className="w-6 h-6 text-neon-green" />,
      items: [
        { name: "ethers.js" },
        { name: "web3.js" },
        { name: "Wallet Conn." },
        { name: "IPFS" }
      ]
    },
    {
      title: "Development Tools",
      icon: <Wrench className="w-6 h-6 text-neon-green" />,
      items: [
        { name: "Git" },
        { name: "Docker" },
        { name: "AWS" },
        { name: "CI/CD" }
      ]
    }
  ];

  const processSteps = [
    {
      phase: "Discovery",
      description: "Initial consultation and project scoping",
      status: "COMPLETE"
    },
    {
      phase: "Planning",
      description: "Technical architecture and resource allocation",
      status: "IN_PROGRESS"
    },
    {
      phase: "Development",
      description: "Iterative development with regular updates",
      status: "PENDING"
    },
    {
      phase: "Testing",
      description: "Comprehensive testing and quality assurance",
      status: "PENDING"
    },
    {
      phase: "Deployment",
      description: "System deployment and final checks",
      status: "PENDING"
    }
  ];

  return (
    <div className="min-h-screen bg-cyber-dark text-neon-green overflow-hidden">
      <MatrixRain />
      <div className="relative z-10">
        <Navigation />
        <main className="pt-24 px-6 pb-24">
          <div className="max-w-7xl mx-auto">
            {/* Technical Expertise Section */}
            <div className="mb-24">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-5xl font-bold mb-2">
                    TECHNICAL_<span className="text-neon-purple">EXPERTISE</span>
                  </h1>
                  <p className="text-neon-green/60">CUTTING_EDGE_STACK</p>
                </div>
                <div className="px-4 py-1 bg-neon-green/10 rounded-full border border-neon-green/30">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                    <span className="text-sm">SYSTEMS_OPERATIONAL</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {techStack.map((stack, index) => (
                  <TechStackCard
                    key={index}
                    title={stack.title}
                    icon={stack.icon}
                    items={stack.items}
                  />
                ))}
              </div>
            </div>

            {/* Process Section */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-4xl font-bold mb-2">
                    DESIGN <span className="text-neon-purple">PROCESS</span>
                  </h2>
                  <p className="text-neon-green/60">DEVELOPMENT_WORKFLOW</p>
                </div>
                <div className="px-4 py-1 bg-neon-green/10 rounded-full border border-neon-green/30">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                    <span className="text-sm">SYSTEM_ACTIVE</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {processSteps.map((step, index) => (
                  <div 
                    key={index}
                    className="cyber-card flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-neon-green/10 rounded-lg flex items-center justify-center border border-neon-green/30">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">{step.phase}</h3>
                        <p className="text-sm text-neon-green/60">{step.description}</p>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs border ${
                      step.status === 'COMPLETE'
                        ? 'border-neon-green/30 bg-neon-green/10 text-neon-green'
                        : step.status === 'IN_PROGRESS'
                        ? 'border-neon-purple/30 bg-neon-purple/10 text-neon-purple'
                        : 'border-neon-green/20 bg-transparent text-neon-green/40'
                    }`}>
                      {step.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Process;
