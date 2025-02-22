import { Mail, MessageSquare, Twitter, Bot, Calendar, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.description) {
      toast({
        title: "Validering misslyckades",
        description: "Vänligen fyll i alla obligatoriska fält.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // You'll need to replace this with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // You'll need to replace this with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          project_type: formData.projectType,
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.description,
        },
        'YOUR_PUBLIC_KEY' // You'll need to replace this with your EmailJS public key
      );

      toast({
        title: "Förfrågan skickad!",
        description: "Vi återkommer till dig så snart som möjligt.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: ''
      });

    } catch (error) {
      toast({
        title: "Ett fel uppstod",
        description: "Det gick inte att skicka förfrågan. Försök igen senare.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

        {/* Consultation Booking Section */}
        <div className="cyber-card mb-8">
          <h3 className="text-2xl font-bold mb-6">BOKA_KONSULTATION</h3>
          <p className="text-neon-green/80 mb-8">
            Ta första steget mot din digitala transformation. Boka en kostnadsfri 
            30-minuters konsultation med våra experter.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-neon-green" />
                <span>Flexibla tider tillgängliga</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-neon-green" />
                <span>30 minuters kostnadsfri session</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="flex items-center justify-center gap-2 px-6 py-3 bg-neon-green/10 rounded-lg border border-neon-green/30 hover:bg-neon-green/20 transition-all duration-300">
                    BESKRIV_DITT_PROJEKT
                    <Send className="w-4 h-4" />
                  </button>
                </DialogTrigger>
                <DialogContent className="bg-cyber-dark border-neon-green/30 text-neon-green">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold mb-4">PROJEKT_DETALJER</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ditt namn</Label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ditt namn"
                        className="w-full bg-cyber-dark/50 border border-neon-green/30 rounded-lg px-4 py-2 focus:outline-none focus:border-neon-green"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Din e-post</Label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Din e-post"
                        className="w-full bg-cyber-dark/50 border border-neon-green/30 rounded-lg px-4 py-2 focus:outline-none focus:border-neon-green"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="projectType">Typ av projekt</Label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full bg-cyber-dark/50 border border-neon-green/30 rounded-lg px-4 py-2 focus:outline-none focus:border-neon-green"
                      >
                        <option value="">Välj projekttyp</option>
                        <option value="website">Webbplats</option>
                        <option value="ecommerce">E-handel</option>
                        <option value="webapp">Webbapplikation</option>
                        <option value="other">Annat</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget (SEK)</Label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full bg-cyber-dark/50 border border-neon-green/30 rounded-lg px-4 py-2 focus:outline-none focus:border-neon-green"
                      >
                        <option value="">Välj budget</option>
                        <option value="10-30k">10,000 - 30,000</option>
                        <option value="30-50k">30,000 - 50,000</option>
                        <option value="50-100k">50,000 - 100,000</option>
                        <option value="100k+">100,000+</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timeline">Önskad tidslinje</Label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full bg-cyber-dark/50 border border-neon-green/30 rounded-lg px-4 py-2 focus:outline-none focus:border-neon-green"
                      >
                        <option value="">Välj tidslinje</option>
                        <option value="1-2">1-2 månader</option>
                        <option value="2-3">2-3 månader</option>
                        <option value="3-6">3-6 månader</option>
                        <option value="6+">6+ månader</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Projektbeskrivning</Label>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Beskriv ditt projekt i detalj..."
                        className="min-h-[150px] bg-cyber-dark/50 border border-neon-green/30 rounded-lg px-4 py-2 focus:outline-none focus:border-neon-green"
                      />
                    </div>

                    <button 
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-neon-green/10 rounded-lg border border-neon-green/30 hover:bg-neon-green/20 transition-all duration-300"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span>SKICKAR...</span>
                      ) : (
                        <>
                          SKICKA_FÖRFRÅGAN
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </DialogContent>
              </Dialog>
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
