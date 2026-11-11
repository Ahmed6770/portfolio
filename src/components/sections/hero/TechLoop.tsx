import LogoLoop, { type LogoItem } from "@/ui/LogoLoop/LogoLoop";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiReactrouter,
  SiTailwindcss,
  SiBootstrap,
  SiReactquery,
  SiAxios,
  SiGit,
  SiGithub,
  SiVite,
  SiVercel,
  SiFigma,
} from "react-icons/si";

const techLogos: LogoItem[] = [
  { node: <SiHtml5 />, title: "HTML5", hoverColor: "#E34F26" },
  { node: <SiCss />, title: "CSS3", hoverColor: "#1572B6" },
  { node: <SiJavascript />, title: "JavaScript", hoverColor: "#F7DF1E" },
  { node: <SiTypescript />, title: "TypeScript", hoverColor: "#3178C6" },
  { node: <SiReact />, title: "React.js", hoverColor: "#61DAFB" },
  { node: <SiReactrouter />, title: "React Router", hoverColor: "#CA4245" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", hoverColor: "#38BDF8" },
  { node: <SiBootstrap />, title: "Bootstrap", hoverColor: "#7952B3" },
  { node: <SiReactquery />, title: "TanStack Query", hoverColor: "#FF4154" },
  { node: <SiAxios />, title: "Axios", hoverColor: "#5A29E4" },
  { node: <SiGit />, title: "Git", hoverColor: "#F05032" },
  { node: <SiGithub />, title: "GitHub", hoverColor: "#FFFFFF" },
  { node: <SiVite />, title: "Vite", hoverColor: "#646CFF" },
  { node: <SiVercel />, title: "Vercel", hoverColor: "#FFFFFF" },
  { node: <SiFigma />, title: "Figma", hoverColor: "#F24E1E" },
];

function TechLoop() {
  return (
    <div className="relative h-28 overflow-hidden flex items-center">
      <LogoLoop
        logos={techLogos}
        speed={80}
        direction="left"
        logoHeight={44}
        gap={56}
        hoverSpeed={0}
        scaleOnHover
        labels="hover"
        ariaLabel="Technologies"
      />
    </div>
  );
}

export default TechLoop;
