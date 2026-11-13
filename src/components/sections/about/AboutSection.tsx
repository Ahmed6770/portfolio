import { CodeBlock } from "./CodeBlock";

function AboutSection() {
  return (
    <section
      id="about"
      className="page-section flex flex-col justify-start md:justify-center overflow-x-hidden pt-20 pb-16 md:py-12"
    >
      <div className="px-6 md:px-16 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Left side */}
          <div>
            {/* Subtitle Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-1 bg-primaryClass rounded-full" />
              <span className="text-xs md:text-sm font-medium text-subtextClass">
                About Me
              </span>
            </div>

            <h2 className="text-2xl md:text-4xl font-bold text-textClass mb-4 leading-tight">
              More Than Just <span className="text-primaryClass">Code.</span>
            </h2>
            <div className="space-y-4 text-subtextClass text-sm md:text-base leading-relaxed">
              <p>
                I'm Ahmed, a frontend developer focused on building modern, interactive web experiences. I enjoy turning ideas into functional, well-crafted interfaces backed by clean and maintainable code.
              </p>
              <p>
                I work mainly with React and TypeScript to build applications that are responsive, intuitive, and genuinely enjoyable to use.
              </p>
              <p>
                I'm always looking to improve how I build things, explore new technologies, and take on projects that challenge me to grow.
              </p>
            </div>
          </div>

          {/* Right side */}
          <div className="w-full flex justify-center lg:justify-end">
            <CodeBlock />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
