import { FaGithub } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "./projectsData";

type MainCardProps = {
  project: Project;
  index: number;
  total: number;
};

export default function MainCard({ project, index, total }: MainCardProps) {
  return (
    <div className="w-full h-full bg-cardClass border border-borderClass rounded-2xl md:rounded-3xl p-5 md:p-8 flex flex-col justify-between">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center h-full">
        {/* Project Preview */}
        <div className="relative aspect-video overflow-hidden rounded-xl border border-borderClass bg-bgClass">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Project Information */}
        <div className="flex flex-col items-start gap-3">
          <span className="text-primaryClass text-xs md:text-sm font-bold font-mono">
            {index + 1} / {total}
          </span>

          <h3 className="text-2xl md:text-3xl font-bold text-textClass">
            {project.title}
          </h3>

          <p className="text-subtextClass text-xs md:text-sm leading-relaxed max-w-lg">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 my-1">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="text-xs bg-cardClass border border-borderClass px-3.5 py-1.5 rounded-full text-textClass"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Project Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={project.liveUrl}
              target="_blank"
              className="flex items-center gap-2 bg-primaryClass text-black text-xs md:text-sm font-bold px-6 py-2.5 rounded-xl hover:bg-hoverClass active:scale-95 transition-all "
            >
              Live Demo
              <ArrowUpRight size={16} />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              className="flex items-center gap-2 border border-borderClass text-textClass text-xs md:text-sm font-bold px-6 py-2.5 rounded-xl hover:border-primaryClass active:scale-95 transition-all "
            >
              Source Code
              <FaGithub size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
