import Navbar from "./components/layout/Navbar";
import GlitchBackground from "./components/shared/GlitchBackground";
import HeroSection from "./components/sections/hero/HeroSection";
import ProjectsSection from "./components/sections/projects/ProjectsSection";

function App() {
  return (
    <div className="min-h-screen bg-bgClass text-textClass overflow-x-clip relative">
      <GlitchBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <ProjectsSection />
      </main>
    </div>
  );
}

export default App;