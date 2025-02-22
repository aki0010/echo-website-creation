
import MatrixRain from '@/components/MatrixRain';
import Hero from '@/components/Hero';

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-dark text-neon-green overflow-hidden">
      <MatrixRain />
      <div className="relative z-10">
        <Hero />
      </div>
    </div>
  );
};

export default Index;
