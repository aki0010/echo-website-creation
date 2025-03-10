import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
interface CommandResponse {
  text: string[];
  type?: 'success' | 'error' | 'info';
}
const Terminal = () => {
  const [commandHistory, setCommandHistory] = useState<{
    command: string;
    response: CommandResponse;
  }[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const executeCommand = (command: string): CommandResponse => {
    const cmd = command.toLowerCase().trim();
    switch (cmd) {
      case 'help':
        return {
          text: ['=== TILLGÄNGLIGA KOMMANDON ===', 'help     - Visa tillgängliga kommandon', 'clear    - Rensa terminalutdata', 'stats    - Visa prestandamätriker', 'websites - Visa lanserade webbplatser', 'contact  - Kontaktinformation', 'ratings  - Visa kundbetyg'],
          type: 'info'
        };
      case 'clear':
        setCommandHistory([]);
        return {
          text: []
        };
      case 'stats':
        return {
          text: ['=== PRESTANDA STATISTIK ===', 'Webbplatser lanserade: 5+', 'Kundnöjdhet: 100%', 'Uptime: 99.9%', 'Genomsnittlig svarstid: 0.8s', 'Säkerhetsrating: A+'],
          type: 'success'
        };
      case 'websites':
        return {
          text: ['=== LANSERADE WEBBPLATSER ===', '> TechCorp Solutions (2024)', '  - Fullstack webbapplikation', '  - React, Node.js, PostgreSQL', '', '> Digital Innovation Hub (2023)', '  - E-handelsplattform', '  - Next.js, Stripe integration', '', '> CyberSec Portal (2023)', '  - Säkerhetsplattform', '  - Zero-trust arkitektur'],
          type: 'info'
        };
      case 'contact':
        return {
          text: ['=== KONTAKTINFORMATION ===', 'Email: contact@neocode.dev', 'Tel: +46 70 123 45 67', 'Plats: Stockholm, Sverige', '', 'Kontakta oss för mer information!'],
          type: 'info'
        };
      case 'ratings':
        return {
          text: ['=== KUNDBETYG ===', '★★★★★ TechCorp Solutions', '"Exceptionell service och kvalitet"', '', '★★★★★ Digital Innovation Hub', '"Överträffade alla förväntningar"', '', '★★★★★ CyberSec Portal', '"Professionellt team, utmärkt resultat"'],
          type: 'success'
        };
      default:
        return {
          text: [`Kommando inte hittat: ${command}. Skriv "help" för tillgängliga kommandon.`],
          type: 'error'
        };
    }
  };
  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && currentCommand) {
      const response = executeCommand(currentCommand);
      setCommandHistory([...commandHistory, {
        command: currentCommand,
        response
      }]);
      setCurrentCommand('');
    }
  };
  return <div className="cyber-card">
      <div className="flex items-center gap-2 p-2 border-b border-neon-green/20 px-[151px]">
        
        
      </div>
      
    </div>;
};
export default Terminal;