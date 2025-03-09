
import { Mail, MessageSquare, Twitter, Bot, Calendar, Clock, Send } from 'lucide-react';
import { useState, useEffect } from 'react';
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

  useEffect(() => {
    emailjs.init("RXtO2yaS1DANkbyq7");
  }, []);

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
        'service_fnrpg2n',
        'template_lcsxkbq',
        {
          from_name: formData.name,
          from_email: formData.email,
          project_type: formData.projectType,
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.description,
        }
      );

      toast({
        title: "Förfrågan skickad!",
        description: "Vi återkommer till dig så snart som möjligt.",
      });

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
      console.error('EmailJS error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="inline-block px-3 py-1 bg-neon-green/10 rounded-full border border-neon-green/30 mb-6 text-sm">
          KONTAKTA OSS
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="max-w-full text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 break-words">Låt oss diskutera ditt projekt</h2>
            <p className="text-neon-green/80 mb-6 sm:mb-8 text-sm sm:text-base break-words">
              Vi hjälper dig att ta din idé från koncept till verklighet. 
              Fyll i formuläret så återkommer vi inom 24 timmar.
            </p>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 p-3 sm:p-4 bg-neon-green/5 rounded-lg border border-neon-green/20">
                <Mail className="w-5 h-5 text-neon-green flex-shrink-0" />
                <div className="min-w-0">
                  <h3 className="font-medium text-sm sm:text-base truncate">Email</h3>
                  <p className="text-xs sm:text-sm text-neon-green/60 truncate">support@neocode.se</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 sm:p-4 bg-neon-green/5 rounded-lg border border-neon-green/20">
                <Clock className="w-5 h-5 text-neon-green flex-shrink-0" />
                <div className="min-w-0">
                  <h3 className="font-medium text-sm sm:text-base truncate">Svarstid</h3>
                  <p className="text-xs sm:text-sm text-neon-green/60 truncate">Inom 24 timmar</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 sm:p-4 bg-neon-green/5 rounded-lg border border-neon-green/20">
                <Calendar className="w-5 h-5 text-neon-green flex-shrink-0" />
                <div className="min-w-0">
                  <h3 className="font-medium text-sm sm:text-base truncate">Tillgänglighet</h3>
                  <p className="text-xs sm:text-sm text-neon-green/60 truncate">Mån-Fre, 09:00-17:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cyber-card w-full bg-neon-green/5 p-6 border border-neon-green/30 rounded-lg shadow-[0_0_15px_rgba(57,255,20,0.15)] backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-green/40 to-transparent"></div>
            <div className="absolute top-0 right-0 p-2 text-xs text-neon-green/70">FORM_v1.2</div>
            <h3 className="text-xl font-semibold mb-4 text-neon-green">SKICKA_FÖRFRÅGAN</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="min-w-0">
                  <Label htmlFor="name" className="text-sm">Namn *</Label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-cyber-dark border border-neon-green/30 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-neon-green text-sm"
                    required
                  />
                </div>
                <div className="min-w-0">
                  <Label htmlFor="email" className="text-sm">Email *</Label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-cyber-dark border border-neon-green/30 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-neon-green text-sm"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="min-w-0">
                  <Label htmlFor="projectType" className="text-sm">Projekttyp</Label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full bg-cyber-dark border border-neon-green/30 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-neon-green text-sm"
                  >
                    <option value="">Välj typ</option>
                    <option value="website">Webbplats</option>
                    <option value="webapp">Webbapplikation</option>
                    <option value="ecommerce">E-handel</option>
                    <option value="other">Annat</option>
                  </select>
                </div>
                <div className="min-w-0">
                  <Label htmlFor="budget" className="text-sm">Budget</Label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full bg-cyber-dark border border-neon-green/30 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-neon-green text-sm"
                  >
                    <option value="">Välj budget</option>
                    <option value="small">10k - 25k SEK</option>
                    <option value="medium">25k - 50k SEK</option>
                    <option value="large">50k+ SEK</option>
                  </select>
                </div>
              </div>

              <div className="min-w-0">
                <Label htmlFor="timeline" className="text-sm">Önskad tidslinje</Label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full bg-cyber-dark border border-neon-green/30 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-neon-green text-sm"
                >
                  <option value="">Välj tidslinje</option>
                  <option value="asap">Så snart som möjligt</option>
                  <option value="1month">Inom 1 månad</option>
                  <option value="3months">Inom 3 månader</option>
                  <option value="flexible">Flexibel</option>
                </select>
              </div>

              <div className="min-w-0">
                <Label htmlFor="description" className="text-sm">Projektbeskrivning *</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full bg-cyber-dark border border-neon-green/30 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-neon-green min-h-[120px] text-sm"
                  placeholder="Berätta om ditt projekt..."
                  required
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-neon-green/10 rounded-lg border border-neon-green/30 hover:bg-neon-green/20 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {isSubmitting ? (
                  "Skickar..."
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Skicka förfrågan
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
