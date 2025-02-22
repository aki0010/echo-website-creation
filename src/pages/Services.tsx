
import Navigation from '@/components/Navigation';
import MatrixRain from '@/components/MatrixRain';
import ServiceCard from '@/components/ServiceCard';

const Services = () => {
  const services = [
    {
      title: "Website Development",
      type: "website" as const,
      description: "Professional website development with modern design principles and comprehensive branding integration.",
      status: "READY" as const,
      features: [
        { name: "Professional Design" },
        { name: "Mobile Responsiveness" },
        { name: "Brand Identity" },
        { name: "Visual Excellence" }
      ]
    },
    {
      title: "Web3 Integration",
      type: "web3" as const,
      description: "Seamless integration of Web3 functionality with optimized performance and user experience.",
      status: "READY" as const,
      features: [
        { name: "Blockchain Integration" },
        { name: "Wallet Connectivity" },
        { name: "Transaction Handling" },
        { name: "Cross-Platform Support" }
      ]
    },
    {
      title: "Performance Analytics",
      type: "analytics" as const,
      description: "Comprehensive analytics dashboard for monitoring project metrics and user engagement.",
      status: "INITIALIZING" as const,
      features: [
        { name: "Data Visualization" },
        { name: "Metric Tracking" },
        { name: "User Insights" },
        { name: "Performance Monitoring" }
      ]
    },
    {
      title: "Community Platform",
      type: "community" as const,
      description: "Integrated community management platform with comprehensive engagement tools.",
      status: "READY" as const,
      features: [
        { name: "Social Features" },
        { name: "Member Management" },
        { name: "Communication Tools" },
        { name: "Engagement Tracking" }
      ]
    },
    {
      title: "Security Implementation",
      type: "security" as const,
      description: "Enterprise-grade security implementation with comprehensive protection measures.",
      status: "READY" as const,
      features: [
        { name: "Attack Prevention" },
        { name: "Data Protection" },
        { name: "Access Control" },
        { name: "Security Updates" }
      ]
    },
    {
      title: "Technical Operations",
      type: "technical" as const,
      description: "Professional technical support and maintenance services for optimal performance.",
      status: "INITIALIZING" as const,
      features: [
        { name: "Continuous Support" },
        { name: "System Updates" },
        { name: "Performance Optimization" },
        { name: "Infrastructure Management" }
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
            <h1 className="text-5xl font-bold mb-6">SERVICES_MATRIX</h1>
            <p className="text-neon-green/80 mb-12 max-w-2xl">
              Explore our comprehensive range of services designed to transform your digital presence
              with cutting-edge technology and innovative solutions.
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
