
import { Link } from 'react-scroll';
import { Menu, Eye } from 'lucide-react';
import { useState } from 'react';
import ColorModeToggle from './ColorModeToggle';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 border-b border-neon-green/20">
      <div className="flex items-center justify-between">
        <Link to="home" smooth={true} className="logo flex items-center gap-3 cursor-pointer">
          <div className="logo-icon">
            <span>N</span>
          </div>
          <div className="logo-text">
            <span className="neo">NEO</span><span className="code">CODE</span>
          </div>
        </Link>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-neon-green"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="services" smooth={true} duration={500} className="text-cyber-text-secondary hover:text-neon-green transition-colors cursor-pointer">TJÄNSTER</Link>
          <Link to="process" smooth={true} duration={500} className="text-cyber-text-secondary hover:text-neon-green transition-colors cursor-pointer">PROCESS</Link>
          <Link to="contact" smooth={true} duration={500} className="text-cyber-text-secondary hover:text-neon-green transition-colors cursor-pointer">KONTAKT</Link>
        </nav>
        
        {/* Status section */}
        <div className="status hidden md:flex items-center gap-4">
          <ColorModeToggle />
          <div className="online-status flex items-center gap-2 px-3 py-1 bg-neon-purple/10 rounded-full border border-neon-purple/30">
            <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse"></div>
            <span className="text-sm text-neon-purple">SYSTEM_ONLINE</span>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-0.5 p-4 bg-cyber-dark/95 border-b border-neon-green/20 md:hidden z-50">
            <div className="flex flex-col gap-4">
              <Link 
                to="services" 
                smooth={true} 
                duration={500} 
                className="text-cyber-text-secondary hover:text-neon-green transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                TJÄNSTER
              </Link>
              <Link 
                to="process" 
                smooth={true} 
                duration={500} 
                className="text-cyber-text-secondary hover:text-neon-green transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                PROCESS
              </Link>
              <Link 
                to="contact" 
                smooth={true} 
                duration={500} 
                className="text-cyber-text-secondary hover:text-neon-green transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                KONTAKT
              </Link>
              <ColorModeToggle />
              <div className="flex items-center gap-2 px-3 py-1 bg-neon-purple/10 rounded-full border border-neon-purple/30 w-fit">
                <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse"></div>
                <span className="text-sm text-neon-purple">SYSTEM_ONLINE</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
