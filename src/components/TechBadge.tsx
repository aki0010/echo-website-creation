
interface TechBadgeProps {
  name: string;
}

const TechBadge = ({ name }: TechBadgeProps) => {
  return (
    <div className="px-4 py-1 bg-neon-green/10 rounded-full border border-neon-green/30 text-sm uppercase text-neon-green">
      {name}
    </div>
  );
};

export default TechBadge;
