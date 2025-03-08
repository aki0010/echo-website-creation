interface TechBadgeProps {
  name: string;
}
const TechBadge = ({
  name
}: TechBadgeProps) => {
  return <div className="bg-neon-green/10 border border-neon-green/30 text-sm uppercase text-neon-green py-[3px] rounded-md px-[14px]">
      {name}
    </div>;
};
export default TechBadge;