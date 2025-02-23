import MatrixRain from '@/components/MatrixRain';
import Navigation from '@/components/Navigation';
import StatsCard from '@/components/StatsCard';
import TechBadge from '@/components/TechBadge';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const Index = () => {
  const seoChecklist = [
    { title: "Keyword research done", completed: true },
    { title: "Title tags & meta descriptions optimized", completed: true },
    { title: "Fast & mobile-friendly website", completed: true },
    { title: "Internal linking in place", completed: true },
    { title: "Content is high-quality & regularly updated", completed: true },
    { title: "Backlinks built from high-authority sites", completed: true },
    { title: "Tracking SEO performance with Google Search Console & Analytics", completed: true },
  ];

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

          {/* SEO Checklist Section */}
          <section className="max-w-7xl mx-auto mb-24">
            <div className="inline-block px-4 py-1 bg-neon-green/10 rounded-full border border-neon-green/30 mb-6">
              SEO_OPTIMIZATION
            </div>
            <h2 className="text-3xl font-bold mb-8">Final Checklist for SEO Success</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {seoChecklist.map((item, index) => (
                <div
                  key={index}
                  className="cyber-card group p-4 flex items-start gap-4 transition-all duration-300 hover:border-neon-purple hover:shadow-[0_0_20px_rgba(147,51,234,0.2)]"
                >
                  <CheckCircle2 className="w-6 h-6 text-neon-purple flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-neon-green/90 group-hover:text-neon-green transition-colors duration-300">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;
