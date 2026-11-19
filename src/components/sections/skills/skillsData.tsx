import {
  Monitor,
  Layers,
  ShieldCheck,
  FlaskConical,
  Accessibility,
  Gauge,
  MonitorSmartphone,
} from "lucide-react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiReactrouter,
  SiTailwindcss,
  SiReactquery,
  SiAxios,
  SiGit,
  SiGithub,
  SiVite,
  SiVercel,
  SiVitest,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import type { SkillsCategory } from "./Card";

export const skillsData: SkillsCategory[] = [
  {
    title: "Frontend",
    icon: <Monitor className="w-5 h-5 text-primaryClass" />,
    skills: [
      { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <SiCss className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
      { name: "React Router", icon: <SiReactrouter className="text-red-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
      { name: "TanStack Query", icon: <SiReactquery className="text-red-400" /> },
      { name: "Axios", icon: <SiAxios className="text-violet-400" /> },
    ],
  },
  {
    title: "Tools",
    icon: <Layers className="w-5 h-5 text-primaryClass" />,
    skills: [
      { name: "VS Code", icon: <VscVscode className="text-sky-500" /> },
      { name: "Git", icon: <SiGit className="text-orange-600" /> },
      { name: "GitHub", icon: <SiGithub className="text-white" /> },
      { name: "Vite", icon: <SiVite className="text-indigo-400" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
      { name: "Vitest", icon: <SiVitest className="text-yellow-400" /> },
    ],
  },
  {
    title: "Practices",
    icon: <ShieldCheck className="w-5 h-5 text-primaryClass" />,
    skills: [
      { name: "Responsive", icon: <MonitorSmartphone className="text-primaryClass" /> },
      { name: "Accessibility", icon: <Accessibility className="text-primaryClass" /> },
      { name: "Testing", icon: <FlaskConical className="text-primaryClass" /> },
      { name: "Performance", icon: <Gauge className="text-primaryClass" /> },
    ],
  },
];
