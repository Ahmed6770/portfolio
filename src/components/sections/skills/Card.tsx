import type { ReactNode } from "react";

export type SkillItem = {
  name: string;
  icon: ReactNode;
};

export type SkillsCategory = {
  title: string;
  icon: ReactNode;
  skills: SkillItem[];
};

function Card({ title, icon, skills }: SkillsCategory) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-5 border-b border-borderClass last:border-b-0">
      {/* Header */}
      <div className="flex items-center gap-3 md:w-36 shrink-0">
        <span className="shrink-0">{icon}</span>
        <h3 className="text-base font-bold text-textClass">{title}</h3>
      </div>

      {/* Icons */}
      <ul className="flex flex-wrap items-center gap-2.5">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bgClass border border-borderClass text-xs md:text-sm font-medium text-textClass hover:border-primaryClass transition-colors"
          >
            <span className="text-base shrink-0">{skill.icon}</span>
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
