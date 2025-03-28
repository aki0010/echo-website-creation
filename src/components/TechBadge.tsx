
interface TechBadgeProps {
  name: string;
}

const TechBadge = ({
  name
}: TechBadgeProps) => {
  return <div className="bg-neon-green/10 border border-neon-green/30 text-xs sm:text-sm uppercase text-neon-green rounded-md px-2 sm:px-[14px] py-px">
      {name}
    </div>;
};

export default TechBadge;
