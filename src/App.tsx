import Navbar from "./components/layout/Navbar";
import GlitchBackground from "./components/shared/GlitchBackground";
import HeroSection from "./components/sections/hero/HeroSection";
import ProjectsSection from "./components/sections/projects/ProjectsSection";
import AboutSection from "./components/sections/about/AboutSection";
import SkillsSection from "./components/sections/skills/SkillsSection";
import CertificatesSection from "./components/sections/certificates/CertificatesSection";
import ContactSection from "./components/sections/contact/ContactSection";

function App() {
  return (
    <div className="min-h-screen bg-bgClass text-textClass overflow-x-clip relative">
      <GlitchBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <CertificatesSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
