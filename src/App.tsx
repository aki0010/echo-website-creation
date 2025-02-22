
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navigation from "./components/Navigation";
import MatrixRain from "./components/MatrixRain";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Process from "./pages/Process";
import PortfolioSection from "./components/PortfolioSection";
import Terminal from "./components/Terminal";
import ContactSection from "./components/ContactSection";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="min-h-screen bg-cyber-dark text-neon-green overflow-hidden">
        <MatrixRain />
        <div className="relative z-10">
          <Navigation />
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

            <footer className="py-8 mt-24 border-t border-neon-green/20">
              <div className="grid grid-cols-4 gap-8">
                <div>
                  <h3 className="font-bold mb-4">DEGENDESIGNS</h3>
                  <p className="text-sm text-neon-green/60">
                    Elite Web3 Development Agency specializing in high-performance dApps, DeFi interfaces, and crypto platforms.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-4">QUICK_LINKS</h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-neon-green/60">{'> SERVICES'}</p>
                    <p className="text-neon-green/60">{'> PORTFOLIO'}</p>
                    <p className="text-neon-green/60">{'> PROCESS'}</p>
                    <p className="text-neon-green/60">{'> CONTACT'}</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-4">SERVICES</h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-neon-green/60">{'> WEBSITE DEVELOPMENT'}</p>
                    <p className="text-neon-green/60">{'> WEB3 INTEGRATION'}</p>
                    <p className="text-neon-green/60">{'> COMMUNITY PLATFORM'}</p>
                    <p className="text-neon-green/60">{'> SECURITY IMPLEMENTATION'}</p>
                    <p className="text-neon-green/60">{'> PERFORMANCE ANALYTICS'}</p>
                    <p className="text-neon-green/60">{'> TECHNICAL OPERATIONS'}</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-4">SYSTEM_STATUS</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-neon-green/60">MAINNET</span>
                      <span className="text-neon-green">OPERATIONAL ●</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neon-green/60">SECURITY</span>
                      <span className="text-neon-green">OPTIMAL ●</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neon-green/60">UPTIME</span>
                      <span className="text-neon-green">99.99% ●</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-12 pt-8 border-t border-neon-green/20">
                <p className="text-sm text-neon-green/60">SYSTEM_VERSION_2024 | All rights reserved</p>
                <p className="text-sm text-neon-green/60">GLOBAL_OPERATIONS_ACTIVE</p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
