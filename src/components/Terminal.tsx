
import { useState } from 'react';

const Terminal = () => {
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setCommandHistory([...commandHistory, currentCommand]);
      setCurrentCommand('');
    }
  };

  return (
    <div className="cyber-card">
      <div className="flex items-center gap-2 p-2 border-b border-neon-green/20">
        <span className="text-neon-green">SYSTEM_TERMINAL</span>
        <div className="px-2 py-0.5 bg-neon-green/10 rounded text-xs border border-neon-green/30">
          <span>LIVE</span>
        </div>
      </div>
      <div className="p-4 font-mono text-sm">
        <div className="mb-4">
          <p>=== AVAILABLE COMMANDS ===</p>
          <p className="text-neon-green">help - Show available commands</p>
          <p className="text-neon-green">clear - Clear terminal output</p>
          <p className="text-neon-green">stats - View performance metrics</p>
          <p className="text-neon-green">websites - View launched websites</p>
          <p className="text-neon-green">contact - Contact information</p>
          <p className="text-neon-green">ratings - View client ratings</p>
        </div>
        {commandHistory.map((cmd, index) => (
          <div key={index} className="mb-2">
            <span className="text-neon-green/60">{`> ${cmd}`}</span>
            <p>Command not found. Type "help" for available commands.</p>
          </div>
        ))}
        <div className="flex items-center gap-2">
          <span className="text-neon-green/60">{'>'}</span>
          <input
            type="text"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            onKeyDown={handleCommand}
            className="bg-transparent border-none outline-none text-neon-green w-full"
            placeholder="Type a command..."
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
