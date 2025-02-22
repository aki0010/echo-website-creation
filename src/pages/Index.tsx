
import MatrixRain from '@/components/MatrixRain';
import Navigation from '@/components/Navigation';
import StatsCard from '@/components/StatsCard';
import TechBadge from '@/components/TechBadge';
import { ArrowRight } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

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
              NÄSTA_GENERATIONS_INNOVATION
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-glow">
              NEO<span className="text-neon-purple">CODE</span>
            </h1>
            <div className="max-w-2xl mb-8">
              <h2 className="text-2xl mb-4">
                Moderna webbplatser.<br />
                Företagslösningar.
              </h2>
              <p className="text-neon-green/80">
                Från innovativa applikationer till skalbara företagslösningar, 
                erbjuder vi högpresterande plattformar med oöverträffad säkerhet.
                Din vision, vår expertis.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <ScrollLink 
                to="contact" 
                smooth={true} 
                duration={500} 
                className="px-6 py-3 bg-neon-green/10 rounded-lg border border-neon-green/30 hover:bg-neon-green/20 transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                STARTA_PROJEKT
                <ArrowRight className="w-4 h-4" />
              </ScrollLink>
              <button className="px-6 py-3 bg-neon-purple/10 rounded-lg border border-neon-purple/30 hover:bg-neon-purple/20 transition-all duration-300 flex items-center gap-2">
                SE_LANSERINGAR
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-wrap gap-3">
              <TechBadge name="MODERNA_TECH" />
              <TechBadge name="RESPONSIV" />
              <TechBadge name="UI/UX" />
              <TechBadge name="PRESTANDA" />
            </div>
          </section>

          {/* Stats Grid */}
          <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            <StatsCard
              type="websites"
              value="5+"
              label="WEBBPLATSER_LANSERADE"
            />
            <StatsCard
              type="satisfaction"
              value="100%"
              label="KUNDNÖJDHET"
            />
            <StatsCard
              type="innovation"
              value="ELIT"
              label="UTVECKLING"
            />
            <StatsCard
              type="uptime"
              value="99.9%"
              label="TILLFÖRLITLIGHET"
            />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;
