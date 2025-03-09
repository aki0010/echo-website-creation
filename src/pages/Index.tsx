import StatsCard from '@/components/StatsCard';
import TechBadge from '@/components/TechBadge';
import { ArrowRight } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
const Index = () => {
  return <div id="home" className="section-padding">
      <div className="container">
        {/* Hero Section */}
        <div className="hero text-left py-[60px]">
          <div className="badge">
            NÄSTA_GENERATIONS_INNOVATION
          </div>
          <h1>
            NEO<span className="code">CODE</span>
          </h1>
          <div className="description mx-0">
            <h2 className="text-2xl mb-4">
              Moderna webbplatser.<br />
              Företagslösningar.
            </h2>
            <p>
              Från innovativa applikationer till skalbara företagslösningar, 
              erbjuder vi högpresterande plattformar med oöverträffad säkerhet.
              Din vision, vår expertis.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-8 mt-8">
            <ScrollLink to="contact" smooth={true} duration={500} className="px-6 py-3 bg-neon-green/10 rounded-lg border border-neon-green/30 hover:bg-neon-green/20 transition-all duration-300 flex items-center gap-2 cursor-pointer">
              STARTA_PROJEKT
              <ArrowRight className="w-4 h-4" />
            </ScrollLink>
          </div>

          <div className="flex flex-wrap gap-3">
            <TechBadge name="MODERNA_TECH" />
            <TechBadge name="RESPONSIV" />
            <TechBadge name="UI/UX" />
            <TechBadge name="PRESTANDA" />
          </div>
        </div>

        {/* Stats Grid - updated to display in a single row */}
        <div className="stats-grid mt-24 grid grid-cols-2 md:grid-cols-4 gap-3 py-[45px]">
          <StatsCard type="websites" value="5+" label="WEBBPLATSER_LANSERADE" />
          <StatsCard type="satisfaction" value="100%" label="KUNDNÖJDHET" />
          <StatsCard type="innovation" value="ELIT" label="UTVECKLING" />
          <StatsCard type="uptime" value="99.9%" label="TILLFÖRLITLIGHET" />
        </div>
      </div>
    </div>;
};
export default Index;