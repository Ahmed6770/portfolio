import Globe from "@/ui/Globe/Globe";
import TechText from "@/ui/TechText/TechText";

function HeroGlobe() {
  return (
    <div className="relative w-full md:w-1/2 max-w-lg aspect-square flex items-center justify-center">
      <Globe className="w-full h-full" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className="w-80 h-56 md:w-96 md:h-64 pointer-events-auto flex items-center justify-center">
          <TechText
            text="</>"
            fontSize={115}
            color="#FF716B"
            accentColor="#FFA5A0"
            intro="assemble"
            guides={false}
            labels={false}
            sweep={true}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroGlobe;
