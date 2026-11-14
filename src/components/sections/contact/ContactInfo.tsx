import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const socialLinks = [
  {
    name: "GitHub",
    link: "https://github.com/Ahmed6770",
    icon: <FaGithub size={18} />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ahmed-mamdouh-489749286/",
    icon: <FaLinkedin size={18} />,
  },
  {
    name: "Email",
    link: "mailto:mamdouhahmed677@gmail.com",
    icon: <Mail size={18} />,
    isMail: true,
  },
];

function ContactInfo() {
  return (
    <div className="flex flex-col items-start">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-6 h-1 bg-primaryClass rounded-full" />
        <span className="text-xs md:text-sm font-medium text-subtextClass">
          Get in Touch
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-textClass mb-4 leading-tight">
        Let's Work <span className="text-primaryClass">Together</span>
      </h2>

      {/* Description */}
      <p className="text-sm md:text-base text-subtextClass max-w-md leading-relaxed mb-8">
        Have a project in mind, a job opportunity, or just want to say hi?
        I'd be happy to hear from you.
      </p>

      {/* Social Links */}
      <div className="flex items-center gap-3">
        {socialLinks.map((item) => (
          <a
            key={item.name}
            href={item.link}
            target={item.isMail ? undefined : "_blank"}
            aria-label={item.name}
            className="w-11 h-11 rounded-xl bg-cardClass border border-borderClass flex items-center justify-center text-subtextClass hover:text-primaryClass hover:border-primaryClass active:scale-95 transition-all"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

export default ContactInfo;
