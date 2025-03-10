
import StatsCard from '@/components/StatsCard';
import TechBadge from '@/components/TechBadge';
import { ArrowRight } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const Index = () => {
  return <div id="home" className="section-padding">
      <div className="container">
        {/* Hero Section */}
        <div className="hero text-left py-8 sm:py-12 md:py-[86px]">
          <div className="badge inline-block text-xs sm:text-sm">
            NÄSTA_GENERATIONS_INNOVATION
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            NEO<span className="code">CODE</span>
          </h1>
          <div className="description mx-0 max-w-full sm:max-w-2xl">
            <h2 className="text-xl sm:text-2xl md:text-2xl mb-2 sm:mb-4">
              Moderna webbplatser.<br />
              Företagslösningar.
            </h2>
            <p className="text-sm sm:text-base">
              Från innovativa applikationer till skalbara företagslösningar, 
              erbjuder vi högpresterande plattformar med oöverträffad säkerhet.
              Din vision, vår expertis.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 mt-6 sm:mt-8">
            <ScrollLink to="contact" smooth={true} duration={500} className="px-4 sm:px-6 py-2 sm:py-3 bg-neon-green/10 rounded-lg border border-neon-green/30 hover:bg-neon-green/20 transition-all duration-300 flex items-center gap-2 cursor-pointer text-xs sm:text-sm">
              STARTA_PROJEKT
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </ScrollLink>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            <TechBadge name="MODERNA_TECH" />
            <TechBadge name="RESPONSIV" />
            <TechBadge name="UI/UX" />
            <TechBadge name="PRESTANDA" />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid mt-12 sm:mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 py-6 sm:py-[45px]">
          <StatsCard type="websites" value="5+" label="WEBBPLATSER_LANSERADE" />
          <StatsCard type="satisfaction" value="100%" label="KUNDNÖJDHET" />
          <StatsCard type="innovation" value="ELIT" label="UTVECKLING" />
          <StatsCard type="uptime" value="99.9%" label="TILLFÖRLITLIGHET" />
        </div>
      </div>
    </div>;
};
export default Index;
