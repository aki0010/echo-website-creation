
import { Mail, MessageSquare, Twitter, Bot } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="cyber-card p-8">
        <h2 className="text-4xl font-bold mb-2">
          INITIATE_<span className="text-neon-purple">CONTACT</span>
        </h2>
        <p className="text-neon-green/60 mb-8">READY_TO_LAUNCH_YOUR_PROJECT</p>

        <div className="flex gap-4 mb-8">
          <div className="px-4 py-2 bg-neon-green/10 rounded-full border border-neon-green/30">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              <span className="text-sm">24/7 Response</span>
            </div>
          </div>
          <div className="px-4 py-2 bg-neon-green/10 rounded-full border border-neon-green/30">
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4" />
              <span className="text-sm">Secure Channel</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="cyber-card">
            <h3 className="text-xl font-bold mb-4">QUICK_CONNECT</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-neon-green" />
                <a href="mailto:nickw@degenwebdesign.com" className="text-neon-green hover:text-neon-green/80">
                  nickw@degenwebdesign.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-neon-green" />
                <a href="mailto:shaunh@degenwebdesign.com" className="text-neon-green hover:text-neon-green/80">
                  shaunh@degenwebdesign.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Twitter className="w-4 h-4 text-neon-green" />
                <a href="https://twitter.com/DegenWebDesign" className="text-neon-green hover:text-neon-green/80">
                  @DegenWebDesign
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Bot className="w-4 h-4 text-neon-green" />
                <a href="#" className="text-neon-green hover:text-neon-green/80">
                  Join Discord
                </a>
              </div>
            </div>
          </div>

          <div className="cyber-card">
            <h3 className="text-xl font-bold mb-4">START_TRANSMISSION</h3>
            <p className="text-neon-green/80 mb-6">
              Initialize secure communication channel for your project requirements.
            </p>
            <button className="w-full py-3 bg-neon-green/10 rounded-lg border border-neon-green/30 hover:bg-neon-green/20 transition-colors">
              CONNECT_NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
