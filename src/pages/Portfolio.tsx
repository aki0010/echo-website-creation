
import Navigation from '@/components/Navigation';
import MatrixRain from '@/components/MatrixRain';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-cyber-dark text-neon-green overflow-hidden">
      <MatrixRain />
      <div className="relative z-10">
        <Navigation />
        <main className="pt-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">PROJECT_GALLERY</h1>
            {/* Portfolio grid will be implemented in next iteration */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Portfolio;
