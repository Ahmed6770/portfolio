import { useState } from "react";
import { ArrowDownToLine, Menu, X } from "lucide-react";
import { navLinks, useActiveSection } from "./useActiveSection";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const active = useActiveSection();

  return (
    <header className="fixed top-0 left-0 right-0 z-100 bg-bgClass/85 backdrop-blur-md border-b border-borderClass">
      <nav className="flex items-center justify-between px-6 md:px-10 py-4 text-textClass max-w-7xl mx-auto">
        {/* Logo */}
        <a
          href="#home"
          className="text-lg md:text-xl font-bold text-textClass flex items-center gap-2"
        >
          <span className="text-primaryClass font-mono font-bold text-lg">&lt;/&gt;</span>
          Ahmed Mamdouh
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 justify-center">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`py-1 text-sm font-medium transition-colors ${
                active === link.id
                  ? "text-primaryClass border-b-2 border-primaryClass"
                  : "text-subtextClass hover:text-hoverClass border-b-2 border-transparent"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="/Ahmed%20Mamdouh%20CV.pdf"
            download="Ahmed Mamdouh CV.pdf"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cardClass border border-borderClass text-sm text-textClass hover:border-primaryClass hover:text-primaryClass active:scale-95 transition-all font-medium"
          >
            <span>Download CV</span>
            <ArrowDownToLine size={16} />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="md:hidden p-2 rounded-xl text-textClass hover:text-primaryClass hover:bg-cardClass border border-borderClass active:scale-95 transition-all cursor-pointer"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden bg-bgClass border-t border-borderClass px-6 py-4 flex flex-col gap-2"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsOpen(false)}
              className={`py-2 px-3 rounded-xl text-sm font-medium transition-colors ${
                active === link.id
                  ? "text-primaryClass bg-cardClass"
                  : "text-subtextClass hover:text-textClass hover:bg-cardClass"
              }`}
            >
              {link.label}
            </a>
          ))}

          <div className="pt-2 border-t border-borderClass mt-2">
            <a
              href="/Ahmed%20Mamdouh%20CV.pdf"
              download="Ahmed Mamdouh CV.pdf"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cardClass border border-borderClass text-sm text-textClass hover:border-primaryClass
                hover:text-primaryClass active:scale-95 transition-all font-medium"
            >
              <span>Download CV</span>
              <ArrowDownToLine size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
