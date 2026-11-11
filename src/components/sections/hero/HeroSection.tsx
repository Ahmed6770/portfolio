import HeroContent from "./HeroContent";
import HeroVisual from "./HeroGlobe";
import TechLoop from "./TechLoop";

function HeroSection() {
  return (
    <section id="home" className="page-section relative flex flex-col justify-between overflow-hidden">
      <div className="relative flex flex-col justify-between flex-1">
        <div className="flex-1 flex flex-col md:flex-row items-center justify-around md:justify-between px-6 md:px-16 pt-20 pb-4 md:py-12 md:gap-10">
          <HeroContent />
          <HeroVisual />
        </div>

        <TechLoop />
      </div>
    </section>
  );
}

export default HeroSection;
