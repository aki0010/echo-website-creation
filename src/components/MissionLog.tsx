
import React from 'react';
import { ArrowRight } from 'lucide-react';

const MissionLog = () => {
  return (
    <section className="max-w-7xl mx-auto my-24">
      <div className="cyber-card p-8">
        <h2 className="text-3xl font-bold mb-6">UPPDRAGSLOGG_2024</h2>
        <p className="text-neon-green/80 mb-8">
          Vi levererar moderna webbprojekt med fokus på användarupplevelse och prestanda. 
          Vårt team använder de senaste teknologierna för att skapa framtidssäkrade digitala lösningar.
        </p>

        <div className="space-y-6">
          <div className="flex items-center justify-between gap-4 p-4 bg-neon-green/5 rounded-lg border border-neon-green/20">
            <div>
              <h3 className="font-bold mb-2">Webbplatsoptimering</h3>
              <p className="text-sm text-neon-green/70">Förbättrad prestanda och SEO för ökad digital närvaro</p>
            </div>
            <ArrowRight className="w-5 h-5 text-neon-green" />
          </div>

          <div className="flex items-center justify-between gap-4 p-4 bg-neon-green/5 rounded-lg border border-neon-green/20">
            <div>
              <h3 className="font-bold mb-2">Responsiv Design</h3>
              <p className="text-sm text-neon-green/70">Användarvänliga webbplatser för alla enheter</p>
            </div>
            <ArrowRight className="w-5 h-5 text-neon-green" />
          </div>

          <div className="flex items-center justify-between gap-4 p-4 bg-neon-green/5 rounded-lg border border-neon-green/20">
            <div>
              <h3 className="font-bold mb-2">Teknisk Utveckling</h3>
              <p className="text-sm text-neon-green/70">Modern webbteknologi med React och Next.js</p>
            </div>
            <ArrowRight className="w-5 h-5 text-neon-green" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionLog;
