import TextType from "@/ui/TextType/TextType";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

function HeroContent() {
  return (
    <div className="flex flex-col gap-2 text-center md:text-left items-center md:items-start">
      <span className="text-subtextClass text-base md:text-xl font-medium tracking-wide pt-2">
      I'm
      </span>
      <h1 className="text-4xl md:text-6xl font-bold text-textClass">
        Ahmed Mamdouh
      </h1>
      <div className="text-2xl md:text-4xl font-bold text-primaryClass">
        <TextType
          text={["Frontend Developer"]}
          typingSpeed={80}
          pauseDuration={1500}
          deletingSpeed={80}
          deleteMode="backspace"
          typeEffect="none"
          mistakes={0}
          cursorStyle="character"
          cursorCharacter="|"
          cursorColor="#FF716B"
          cursorBlinkDuration={0.8}
          showCursor
        />
      </div>

      <p className="text-subtextClass text-sm md:text-base max-w-md mt-2">
        I build responsive, interactive web applications with React and TypeScript, focusing on clean UI and smooth user experiences.
      </p>

      {/* CTA Buttons */}
      <div className="flex items-center justify-center md:justify-start gap-3 mt-5 w-full md:w-auto">
        <a
          href="#projects"
          className="flex-1 md:flex-initial px-6 py-2.5 rounded-xl font-bold text-sm bg-primaryClass text-black hover:bg-hoverClass active:scale-95 transition-all inline-flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <span>View My Projects</span>
          <ArrowUpRight className="size-5" />
        </a>

        <a
          href="mailto:mamdouhahmed677@gmail.com"
          className="flex-1 md:flex-initial px-6 py-2.5 rounded-xl font-bold text-sm bg-cardClass border border-borderClass
            text-textClass hover:border-primaryClass hover:text-primaryClass active:scale-95 transition-all inline-flex
            items-center justify-center gap-2 whitespace-nowrap"
        >
          <span>Contact Me</span>
          <Mail className="size-5" />
        </a>
      </div>

      {/* Social Links */}
      <div className="hidden md:flex items-center justify-center md:justify-start gap-3 mt-6">
        <a
          href="https://github.com/Ahmed6770"
          target="_blank"
          aria-label="GitHub Profile"
          className="w-11 h-11 rounded-xl bg-cardClass border border-borderClass flex items-center justify-center text-subtextClass hover:text-primaryClass hover:border-primaryClass active:scale-95 transition-all"
        >
          <FaGithub size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/ahmed-mamdouh-489749286/"
          target="_blank"
          aria-label="LinkedIn Profile"
          className="w-11 h-11 rounded-xl bg-cardClass border border-borderClass flex items-center justify-center text-subtextClass hover:text-primaryClass hover:border-primaryClass active:scale-95 transition-all"
        >
          <FaLinkedin size={18} />
        </a>
      </div>
    </div>
  );
}

export default HeroContent;
