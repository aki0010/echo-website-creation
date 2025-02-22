import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Link as ScrollLink } from 'react-scroll';
import Navigation from "./components/Navigation";
import MatrixRain from "./components/MatrixRain";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Process from "./pages/Process";
import PortfolioSection from "./components/PortfolioSection";
import Terminal from "./components/Terminal";
import ContactSection from "./components/ContactSection";
import { Twitter, Github, Linkedin, Mail, Globe } from 'lucide-react';
const queryClient = new QueryClient();
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="relative min-h-screen bg-cyber-dark text-neon-green">
        <div className="absolute inset-0 z-0">
          <MatrixRain />
        </div>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            <div className="max-w-7xl mx-auto px-6">
              <section id="home">
                <Index />
              </section>
              
              <section id="services">
                <Services />
              </section>

              <section id="process">
                <Process />
              </section>

              <PortfolioSection />
              
              <Terminal />

              <ContactSection />
            </div>
          </main>

          <footer className="relative z-20 py-8 mt-24 border-t border-neon-green/20 bg-cyber-dark/95">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="font-bold mb-4">DEGENDESIGNS</h3>
                  <p className="text-sm text-neon-green/60">
                    Elite Web3 Development Agency specializing in high-performance dApps, DeFi interfaces, and crypto platforms.
                  </p>
                  <div className="space-y-2 mt-4">
                    <a 
                      href="mailto:support@neocode.se" 
                      className="block text-neon-green/60 hover:text-neon-green transition-colors"
                    >
                      <Mail className="w-4 h-4 inline-block mr-2" />
                      support@neocode.se
                    </a>
                    <a 
                      href="https://www.neocode.se" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-neon-green/60 hover:text-neon-green transition-colors"
                    >
                      <Globe className="w-4 h-4 inline-block mr-2" />
                      www.neocode.se
                    </a>
                  </div>
                  <div className="flex gap-4 mt-4">
                    <a href="https://twitter.com/degendesigns" target="_blank" rel="noopener noreferrer" className="text-neon-green/60 hover:text-neon-green transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="https://github.com/degendesigns" target="_blank" rel="noopener noreferrer" className="text-neon-green/60 hover:text-neon-green transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="https://linkedin.com/company/degendesigns" target="_blank" rel="noopener noreferrer" className="text-neon-green/60 hover:text-neon-green transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-4">QUICK_LINKS</h3>
                  <div className="space-y-2 text-sm">
                    <ScrollLink to="services" smooth={true} duration={500} className="block text-neon-green/60 hover:text-neon-green cursor-pointer transition-colors">
                      {'> SERVICES'}
                    </ScrollLink>
                    <ScrollLink to="portfolio" smooth={true} duration={500} className="block text-neon-green/60 hover:text-neon-green cursor-pointer transition-colors">
                      {'> PORTFOLIO'}
                    </ScrollLink>
                    <ScrollLink to="process" smooth={true} duration={500} className="block text-neon-green/60 hover:text-neon-green cursor-pointer transition-colors">
                      {'> PROCESS'}
                    </ScrollLink>
                    <ScrollLink to="contact" smooth={true} duration={500} className="block text-neon-green/60 hover:text-neon-green cursor-pointer transition-colors">
                      {'> CONTACT'}
                    </ScrollLink>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-4">SERVICES</h3>
                  <div className="space-y-2 text-sm">
                    <ScrollLink to="services" smooth={true} duration={500} className="block text-neon-green/60 hover:text-neon-green cursor-pointer transition-colors">
                      {'> WEBSITE DEVELOPMENT'}
                    </ScrollLink>
                    <ScrollLink to="services" smooth={true} duration={500} className="block text-neon-green/60 hover:text-neon-green cursor-pointer transition-colors">
                      {'> WEB3 INTEGRATION'}
                    </ScrollLink>
                    <ScrollLink to="services" smooth={true} duration={500} className="block text-neon-green/60 hover:text-neon-green cursor-pointer transition-colors">
                      {'> COMMUNITY PLATFORM'}
                    </ScrollLink>
                    <ScrollLink to="services" smooth={true} duration={500} className="block text-neon-green/60 hover:text-neon-green cursor-pointer transition-colors">
                      {'> SECURITY IMPLEMENTATION'}
                    </ScrollLink>
                    <ScrollLink to="services" smooth={true} duration={500} className="block text-neon-green/60 hover:text-neon-green cursor-pointer transition-colors">
                      {'> PERFORMANCE ANALYTICS'}
                    </ScrollLink>
                    <ScrollLink to="services" smooth={true} duration={500} className="block text-neon-green/60 hover:text-neon-green cursor-pointer transition-colors">
                      {'> TECHNICAL OPERATIONS'}
                    </ScrollLink>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-4">SYSTEM_STATUS</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center group cursor-pointer">
                      <span className="text-neon-green/60">MAINNET</span>
                      <span className="text-neon-green group-hover:animate-pulse">OPERATIONAL ●</span>
                    </div>
                    <div className="flex justify-between items-center group cursor-pointer">
                      <span className="text-neon-green/60">SECURITY</span>
                      <span className="text-neon-green group-hover:animate-pulse">OPTIMAL ●</span>
                    </div>
                    <div className="flex justify-between items-center group cursor-pointer">
                      <span className="text-neon-green/60">UPTIME</span>
                      <span className="text-neon-green group-hover:animate-pulse">99.99% ●</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-neon-green/20">
                <p className="text-sm text-neon-green/60">SYSTEM_VERSION_2024 | All rights reserved</p>
                <p className="text-sm text-neon-green/60 mt-4 md:mt-0">GLOBAL_OPERATIONS_ACTIVE</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
