
import MatrixRain from '@/components/MatrixRain';
import Navigation from '@/components/Navigation';
import StatsCard from '@/components/StatsCard';
import TechBadge from '@/components/TechBadge';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-dark text-neon-green overflow-hidden">
      <MatrixRain />
      <div className="relative z-10">
        <Navigation />
        
        <main className="pt-24 px-6">
          {/* Hero Section */}
          <section className="max-w-7xl mx-auto mb-24">
            <div className="inline-block px-4 py-1 bg-neon-green/10 rounded-full border border-neon-green/30 mb-6">
              NEXT_GEN_INNOVATION
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-glow">
              DEGEN-<span className="text-neon-purple">DESIGN</span>
            </h1>
            <div className="max-w-2xl mb-8">
              <h2 className="text-2xl mb-4">
                Websites for Degens.<br />
                Solutions for Businesses.
              </h2>
              <p className="text-neon-green/80">
                From viral memecoins and next-level degen dApps to scalable business solutions 
                we provide high-speed, high energy platforms, with ironclad security.
                Your dream, our magic.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <button className="px-6 py-3 bg-neon-green/10 rounded-lg border border-neon-green/30 hover:bg-neon-green/20 transition-all duration-300 flex items-center gap-2">
                INITIALIZE_PROJECT
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-3 bg-neon-purple/10 rounded-lg border border-neon-purple/30 hover:bg-neon-purple/20 transition-all duration-300 flex items-center gap-2">
                VIEW_DEPLOYMENTS
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-wrap gap-3">
              <TechBadge name="SOLANA" />
              <TechBadge name="EVM" />
              <TechBadge name="WEB3" />
              <TechBadge name="DEFI" />
            </div>
          </section>

          {/* Stats Grid */}
          <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            <StatsCard
              type="websites"
              value="5+"
              label="WEBSITES_LAUNCHED"
            />
            <StatsCard
              type="satisfaction"
              value="100%"
              label="CLIENT_RATING"
            />
            <StatsCard
              type="innovation"
              value="ELITE"
              label="DEVELOPMENT"
            />
            <StatsCard
              type="uptime"
              value="99.9%"
              label="RELIABILITY"
            />
          </section>

          {/* Services Section */}
          <section className="max-w-7xl mx-auto mb-24">
            <div className="cyber-card">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-neon-green/20 rounded-lg flex items-center justify-center border border-neon-green/30">
                    <span className="text-neon-green">✦</span>
                  </div>
                  <h2 className="text-xl font-bold">
                    Professional <span className="text-neon-purple">Services</span>
                  </h2>
                </div>
                <div className="px-3 py-1 bg-neon-green/10 rounded-full border border-neon-green/30 text-sm">
                  System Active
                </div>
              </div>
              <p className="text-neon-green/80">Development Solutions</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;
