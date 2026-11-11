import Navbar from "./components/layout/Navbar";
import GlitchBackground from "./components/shared/GlitchBackground";
import HeroSection from "./components/sections/hero/HeroSection";

function App() {
  return (
    <div className="min-h-screen bg-bgClass text-textClass overflow-x-clip relative">
      <GlitchBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
      </main>
    </div>
  );
}

export default App;