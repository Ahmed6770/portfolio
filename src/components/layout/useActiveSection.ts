import { useState, useEffect } from "react";

export type NavLink = {
  id: string;
  label: string;
};

// Nav links
export const navLinks: NavLink[] = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

// check active section 
export function useActiveSection() {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    // Viewport observer
    const observer = new IntersectionObserver(
      (sections) => {
        sections.forEach((section) => {
          if (section.isIntersecting) {
            setActive(section.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px"}
    );

    // Watch sections
    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return active;
}

