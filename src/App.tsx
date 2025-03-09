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
import { Twitter, Github, Linkedin, Mail, Globe, ArrowRight } from 'lucide-react';

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
            <section id="home">
              <Index />
            </section>
            
            <section id="services">
              <Services />
            </section>

            <section id="process">
              <Process />
            </section>

            <section id="portfolio">
              <PortfolioSection />
            </section>
            
            <Terminal />

            <ContactSection />
          </main>

          <footer className="relative z-20 py-8 mt-24 border-t border-neon-green/20 bg-cyber-dark/95">
            <div className="container">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <h3 className="font-bold mb-4">DEGENDESIGNS</h3>
                  <p className="text-sm text-neon-green/60">NeoCode Development Agency specializing in high-performance dApps, DeFi interfaces, and crypto platforms.</p>
                  <div className="space-y-2 mt-4">
                    <a href="mailto:support@neocode.se" className="block text-neon-green/60 hover:text-neon-green transition-colors">
                      <Mail className="w-4 h-4 inline-block mr-2" />
                      support@neocode.se
                    </a>
                    <a href="https://www.neocode.se" target="_blank" rel="noopener noreferrer" className="block text-neon-green/60 hover:text-neon-green transition-colors">
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
                    <ScrollLink to="services" smooth={true} duration={500} className="group block p-2 text-neon-green/60 hover:text-neon-green hover:bg-neon-green/5 rounded-md transition-all duration-300 cursor-pointer">
                      <span className="flex items-center">
                        <span className="mr-2">{'>'}</span>
                        <span className="flex-grow">SERVICES</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                      </span>
                    </ScrollLink>
                    <ScrollLink to="portfolio" smooth={true} duration={500} className="group block p-2 text-neon-green/60 hover:text-neon-green hover:bg-neon-green/5 rounded-md transition-all duration-300 cursor-pointer">
                      <span className="flex items-center">
                        <span className="mr-2">{'>'}</span>
                        <span className="flex-grow">PORTFOLIO</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                      </span>
                    </ScrollLink>
                    <ScrollLink to="process" smooth={true} duration={500} className="group block p-2 text-neon-green/60 hover:text-neon-green hover:bg-neon-green/5 rounded-md transition-all duration-300 cursor-pointer">
                      <span className="flex items-center">
                        <span className="mr-2">{'>'}</span>
                        <span className="flex-grow">PROCESS</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                      </span>
                    </ScrollLink>
                    <ScrollLink to="contact" smooth={true} duration={500} className="group block p-2 text-neon-green/60 hover:text-neon-green hover:bg-neon-green/5 rounded-md transition-all duration-300 cursor-pointer">
                      <span className="flex items-center">
                        <span className="mr-2">{'>'}</span>
                        <span className="flex-grow">CONTACT</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                      </span>
                    </ScrollLink>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-4">SERVICES</h3>
                  <div className="space-y-2 text-sm">
                    <ScrollLink to="services" smooth={true} duration={500} className="group block p-2 text-neon-green/60 hover:text-neon-green hover:bg-neon-green/5 rounded-md transition-all duration-300 cursor-pointer">
                      <span className="flex items-center">
                        <span className="mr-2">{'>'}</span>
                        <span className="flex-grow">WEBSITE DEVELOPMENT</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                      </span>
                    </ScrollLink>
                    <ScrollLink to="services" smooth={true} duration={500} className="group block p-2 text-neon-green/60 hover:text-neon-green hover:bg-neon-green/5 rounded-md transition-all duration-300 cursor-pointer">
                      <span className="flex items-center">
                        <span className="mr-2">{'>'}</span>
                        <span className="flex-grow">WEB3 INTEGRATION</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                      </span>
                    </ScrollLink>
                    <ScrollLink to="services" smooth={true} duration={500} className="group block p-2 text-neon-green/60 hover:text-neon-green hover:bg-neon-green/5 rounded-md transition-all duration-300 cursor-pointer">
                      <span className="flex items-center">
                        <span className="mr-2">{'>'}</span>
                        <span className="flex-grow">COMMUNITY PLATFORM</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                      </span>
                    </ScrollLink>
                    <ScrollLink to="services" smooth={true} duration={500} className="group block p-2 text-neon-green/60 hover:text-neon-green hover:bg-neon-green/5 rounded-md transition-all duration-300 cursor-pointer">
                      <span className="flex items-center">
                        <span className="mr-2">{'>'}</span>
                        <span className="flex-grow">SECURITY IMPLEMENTATION</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                      </span>
                    </ScrollLink>
                    <ScrollLink to="services" smooth={true} duration={500} className="group block p-2 text-neon-green/60 hover:text-neon-green hover:bg-neon-green/5 rounded-md transition-all duration-300 cursor-pointer">
                      <span className="flex items-center">
                        <span className="mr-2">{'>'}</span>
                        <span className="flex-grow">PERFORMANCE ANALYTICS</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                      </span>
                    </ScrollLink>
                    <ScrollLink to="services" smooth={true} duration={500} className="group block p-2 text-neon-green/60 hover:text-neon-green hover:bg-neon-green/5 rounded-md transition-all duration-300 cursor-pointer">
                      <span className="flex items-center">
                        <span className="mr-2">{'>'}</span>
                        <span className="flex-grow">TECHNICAL OPERATIONS</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                      </span>
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
              <div className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-8 border-t border-neon-green/20">
                <p className="text-sm text-neon-green/60">SYSTEM_VERSION_2024 | All rights reserved</p>
                <p className="text-sm text-neon-green/60 mt-4 sm:mt-0">GLOBAL_OPERATIONS_ACTIVE</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
