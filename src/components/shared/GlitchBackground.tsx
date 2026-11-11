import LetterGlitch from "@/ui/LetterGlitch/LetterGlitch";

function GlitchBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <LetterGlitch
        glitchColors={["#FF716B", "#FFA5A0", "#FFFFFF", "#61DCA3"]}
        baseColor="#5A6572"
        baseOpacity={0.2}
        glitchAmount={0.4}
        speed={0.5}
        fontSize={15}
        smooth
        edgeFade={0}
        centerFade={0}
        interactive={false}
        backgroundColor="#0B0D0F"
      />
    </div>
  );
}

export default GlitchBackground;
