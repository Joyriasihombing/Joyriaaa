"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { label: "Home",     href: "#home" },
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen]           = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [activeSection, setActive]    = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = navLinks.map(l => l.href.replace("#", ""));
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setIsOpen(false);
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-[#FAF8FF]/95 backdrop-blur-md border-b border-[#E4DFFF] shadow-[0_2px_16px_rgba(124,58,237,0.08)]"
        : "bg-[#FAF8FF]/80 backdrop-blur-sm border-b border-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <button onClick={() => go("#home")} className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center shadow-md shadow-violet-200">
              <Code2 size={15} className="text-white" />
            </div>
            <div className="hidden sm:block leading-none">
              <p className="font-bold text-[#1E1B2E] text-sm">Joy Ria</p>
              <p className="text-[10px] text-[#9B96B0] font-medium tracking-wide">Software Engineer</p>
            </div>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center">
            {navLinks.map(link => {
              const active = activeSection === link.href.replace("#", "");
              return (
                <button key={link.label} onClick={() => go(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-150 ${
                    active ? "text-[#7C3AED]" : "text-[#5B5675] hover:text-[#1E1B2E]"
                  }`}>
                  {link.label}
                  {active && (
                    <motion.div layoutId="nav-pill"
                      className="absolute inset-0 bg-[#EDE9FE] rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                  )}
                </button>
              );
            })}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2">
            <button onClick={() => go("#contact")}
              className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-md shadow-violet-200">
              Hire Me ✨
            </button>
            <button onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center text-[#5B5675] hover:bg-[#F3F0FF] transition-colors"
              aria-label="Toggle menu">
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-[#FAF8FF] border-t border-[#E4DFFF]">
            <div className="px-6 py-4 space-y-1">
              {navLinks.map(link => {
                const active = activeSection === link.href.replace("#", "");
                return (
                  <button key={link.label} onClick={() => go(link.href)}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-colors duration-150 ${
                      active ? "text-[#7C3AED] bg-[#EDE9FE]" : "text-[#5B5675] hover:text-[#1E1B2E] hover:bg-[#F3F0FF]"
                    }`}>
                    {link.label}
                  </button>
                );
              })}
              <div className="pt-2">
                <button onClick={() => go("#contact")}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white text-sm font-semibold">
                  Hire Me ✨
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
