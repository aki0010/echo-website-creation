
interface TechStackItem {
  name: string;
  icon?: React.ReactNode;
}

interface TechStackCardProps {
  title: string;
  icon: React.ReactNode;
  items: TechStackItem[];
}

const TechStackCard = ({ title, icon, items }: TechStackCardProps) => {
  return (
    <div className="cyber-card h-full">
      <div className="flex items-center gap-2 mb-6">
        {icon}
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {items.map((item, index) => (
          <div 
            key={index}
            className="px-4 py-3 bg-neon-green/5 border border-neon-green/20 rounded-lg hover:bg-neon-green/10 transition-all duration-300 flex items-center gap-2"
          >
            {item.icon}
            <span className="text-sm">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackCard;
