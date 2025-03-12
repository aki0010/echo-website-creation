
import { Mail, MessageSquare, Twitter, Bot, Calendar, Clock, Send } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);
  const { toast } = useToast();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const form = e.target;
    
    // Validate required fields
    const name = form.user_name.value;
    const email = form.user_email.value;
    const message = form.message.value;
    
    if (!name || !email || !message) {
      toast({
        title: "Validering misslyckades",
        description: "Vänligen fyll i alla obligatoriska fält.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Now explicitly including all form fields in the EmailJS submission
      const templateParams = {
        user_name: name,
        user_email: email,
        project_type: form.project_type.value,
        budget: form.budget.value,
        timeline: form.timeline.value,
        message: message
      };
      
      await emailjs.send(
        'service_fnrpg2n', 
        'template_z7sd88l', 
        templateParams,
        'RXtO2yaS1DANkbyq7'
      );
      
      toast({
        title: "Förfrågan skickad!",
        description: "Vi återkommer till dig så snart som möjligt."
      });
      
      // Reset form after successful submission
      form.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Ett fel uppstod",
        description: "Det gick inte att skicka förfrågan. Försök igen senare.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return <section id="contact" className="section-padding py-12 sm:py-16 md:py-[60px] overflow-hidden">
      <div className="container">
        <div className="inline-block px-2 sm:px-3 py-1 bg-neon-green/10 rounded-full border border-neon-green/30 mb-4 sm:mb-6 text-xs sm:text-sm">
          KONTAKTA OSS
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          <div className="max-w-full text-left">
            <h1 className="font-bold py-0 text-2xl xs:text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
              Projekt<span className="code"> FÖRFRÅGAN</span>
            </h1>
            <div className="description mx-0">
              <h2 className="text-xl sm:text-2xl mb-2 sm:mb-4">
                Låt oss diskutera ditt projekt.<br className="hidden sm:block" />
                Från idé till verklighet.
              </h2>
              <p className="text-sm sm:text-base">
                Vi hjälper dig att ta din idé från koncept till verklighet. 
                Fyll i formuläret så återkommer vi inom 24 timmar.
              </p>
            </div>
            
            <div className="space-y-3 sm:space-y-4 mt-6 sm:mt-8">
              <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 md:p-4 rounded-lg border border-neon-green/20 bg-cyber-dark">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-neon-green flex-shrink-0" />
                <div className="min-w-0">
                  <h3 className="font-medium text-xs sm:text-sm md:text-base truncate">Email</h3>
                  <p className="text-xs sm:text-sm truncate text-neon-blue">support@neocode.se</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 md:p-4 rounded-lg border border-neon-green/20 bg-cyber-dark">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-neon-green flex-shrink-0" />
                <div className="min-w-0">
                  <h3 className="font-medium text-xs sm:text-sm md:text-base truncate">Svarstid</h3>
                  <p className="text-xs sm:text-sm truncate text-neon-blue">Inom 24 timmar</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 md:p-4 rounded-lg border border-neon-green/20 bg-cyber-dark">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-neon-green flex-shrink-0" />
                <div className="min-w-0">
                  <h3 className="font-medium text-xs sm:text-sm md:text-base truncate">Tillgänglighet</h3>
                  <p className="text-xs sm:text-sm truncate text-neon-blue">Mån-Fre, 09:00-17:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cyber-card w-full p-4 sm:p-5 md:p-6 border border-neon-green/30 rounded-lg shadow-[0_0_15px_rgba(57,255,20,0.15)] backdrop-blur-sm relative overflow-hidden bg-cyber-dark mt-6 lg:mt-0">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-green/40 to-transparent"></div>
            <div className="absolute top-0 right-0 p-1 sm:p-2 text-[10px] sm:text-xs text-neon-green/70">FORM_v1.2</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-300">SKICKA_FÖRFRÅGAN</h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="min-w-0">
                  <Label htmlFor="user_name" className="text-xs sm:text-sm">Namn *</Label>
                  <input 
                    type="text" 
                    id="user_name" 
                    name="user_name" 
                    className="w-full bg-cyber-dark border border-neon-green/30 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 mt-1 focus:outline-none focus:border-neon-green text-xs sm:text-sm" 
                    required 
                  />
                </div>
                <div className="min-w-0">
                  <Label htmlFor="user_email" className="text-xs sm:text-sm">Email *</Label>
                  <input 
                    type="email" 
                    id="user_email" 
                    name="user_email" 
                    className="w-full bg-cyber-dark border border-neon-green/30 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 mt-1 focus:outline-none focus:border-neon-green text-xs sm:text-sm" 
                    required 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="min-w-0">
                  <Label htmlFor="project_type" className="text-xs sm:text-sm">Projekttyp</Label>
                  <select 
                    id="project_type" 
                    name="project_type" 
                    className="w-full bg-cyber-dark border border-neon-green/30 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 mt-1 focus:outline-none focus:border-neon-green text-xs sm:text-sm"
                  >
                    <option value="">Välj typ</option>
                    <option value="website">Webbplats</option>
                    <option value="webapp">Webbapplikation</option>
                    <option value="ecommerce">E-handel</option>
                    <option value="other">Annat</option>
                  </select>
                </div>
                <div className="min-w-0">
                  <Label htmlFor="budget" className="text-xs sm:text-sm">Budget</Label>
                  <select 
                    id="budget" 
                    name="budget" 
                    className="w-full bg-cyber-dark border border-neon-green/30 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 mt-1 focus:outline-none focus:border-neon-green text-xs sm:text-sm"
                  >
                    <option value="">Välj budget</option>
                    <option value="small">10k - 25k SEK</option>
                    <option value="medium">25k - 50k SEK</option>
                    <option value="large">50k+ SEK</option>
                  </select>
                </div>
              </div>

              <div className="min-w-0">
                <Label htmlFor="timeline" className="text-xs sm:text-sm">Önskad tidslinje</Label>
                <select 
                  id="timeline" 
                  name="timeline" 
                  className="w-full bg-cyber-dark border border-neon-green/30 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 mt-1 focus:outline-none focus:border-neon-green text-xs sm:text-sm"
                >
                  <option value="">Välj tidslinje</option>
                  <option value="asap">Så snart som möjligt</option>
                  <option value="1month">Inom 1 månad</option>
                  <option value="3months">Inom 3 månader</option>
                  <option value="flexible">Flexibel</option>
                </select>
              </div>

              <div className="min-w-0">
                <Label htmlFor="message" className="text-xs sm:text-sm">Projektbeskrivning *</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  className="w-full bg-cyber-dark border border-neon-green/30 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 mt-1 focus:outline-none focus:border-neon-green min-h-[80px] sm:min-h-[120px] text-xs sm:text-sm" 
                  placeholder="Berätta om ditt projekt..." 
                  required 
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-neon-green/10 rounded-lg border border-neon-green/30 hover:bg-neon-green/20 transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm"
              >
                {isSubmitting ? "Skickar..." : <>
                  <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                  Skicka förfrågan
                </>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};

export default ContactSection;
