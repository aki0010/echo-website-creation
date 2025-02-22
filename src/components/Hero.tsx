
import { ArrowRight, Clock24, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
      <div className="cyber-card max-w-4xl animate-fade-up">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-glow">
          INITIATE_<span className="text-neon-purple">CONTACT</span>
        </h1>
        <p className="text-xl mb-8 text-neon-green/80">
          READY_TO_LAUNCH_YOUR_PROJECT
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 px-4 py-2 border border-neon-green/20 rounded-full">
            <Clock24 className="w-4 h-4" />
            <span>24/7 Response</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 border border-neon-green/20 rounded-full">
            <Shield className="w-4 h-4" />
            <span>Secure Channel</span>
          </div>
        </div>
        <button className="px-8 py-3 bg-neon-green/10 text-neon-green border border-neon-green/30 rounded-lg hover:bg-neon-green/20 transition-all duration-300 flex items-center gap-2 mx-auto">
          CONNECT_NOW
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
