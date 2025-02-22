
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 bg-cyber-dark/80 backdrop-blur-sm border-b border-neon-green/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-neon-green/20 rounded-lg flex items-center justify-center border border-neon-green/30">
            <span className="text-neon-green font-bold">D</span>
          </div>
          <div className="text-lg font-bold">
            DEGENERATE_<span className="text-neon-purple">DESIGNS</span>
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <Link to="/contact" className="text-neon-green/80 hover:text-neon-green">CONTACT</Link>
          <Link to="/services" className="text-neon-green/80 hover:text-neon-green">SERVICES</Link>
          <Link to="/process" className="text-neon-green/80 hover:text-neon-green">PROCESS</Link>
          <Link to="/portfolio" className="text-neon-green/80 hover:text-neon-green">PORTFOLIO</Link>
          <div className="flex items-center gap-2 px-3 py-1 bg-neon-green/10 rounded-full border border-neon-green/30">
            <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
            <span className="text-sm">SYSTEM_ONLINE</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
