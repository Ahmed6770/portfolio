import Card from "./Card";
import { skillsData } from "./skillsData";

function SkillsSection() {
  return (
    <section
      id="skills"
      className="page-section relative flex flex-col justify-start md:justify-center overflow-x-hidden pt-20 pb-16 md:py-12"
    >
      <div className="px-6 md:px-16 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-1 bg-primaryClass rounded-full" />
          <span className="text-xs md:text-sm font-medium text-subtextClass">
            Skills & Journey
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-textClass mb-3">
          My Skills &{" "}
          <span className="text-primaryClass">Journey</span>
        </h2>

        {/* Description */}
        <p className="text-xs md:text-sm text-subtextClass max-w-2xl leading-relaxed">
          The technologies and tools I work with today—and where I'm heading next.
        </p>

        {/*Container */}
        <div className="bg-cardClass border border-borderClass rounded-2xl md:rounded-3xl p-6 md:p-8 mt-6">
          {skillsData.map((category) => (
            <Card key={category.title} {...category} />
          ))}
        </div>

        <p className="text-center text-xs md:text-sm text-subtextClass mt-6">
          Currently focused on
          <span className="text-primaryClass font-medium">
            {" "}Frontend Development
          </span>
          , with
          <span className="text-primaryClass font-medium">
            {" "} Backend Development {" "}
          </span>
          as my next step towards becoming a Full-Stack Developer.
        </p>
      </div>
    </section>
  );
}

export default SkillsSection;
