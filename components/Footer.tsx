"use client";

import { Mail, ArrowUp, Heart } from "lucide-react";

const GithubIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#1E1B2E] py-12 relative overflow-hidden">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#7C3AED]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center">
                <span className="text-white font-bold text-xs">J</span>
              </div>
              <span className="font-bold text-white text-sm">Joy Ria Sihombing</span>
            </div>
            <p className="text-xs text-[#5B5675]">Applied Software Engineering · Del Institute of Technology</p>
            <p className="text-xs text-[#3D3A52] mt-0.5 flex items-center gap-1">
              © {new Date().getFullYear()} · Made with <Heart size={10} className="text-[#F43F5E] fill-[#F43F5E]" /> using Next.js & Tailwind
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {[
              { icon: GithubIcon,   href: "https://github.com/Joyriasihombing",                          label: "GitHub" },
              { icon: LinkedinIcon, href: "https://www.linkedin.com/in/joy-ria-sihombing-9703b11b6/",    label: "LinkedIn" },
              { icon: Mail,         href: "mailto:joysihombing21@gmail.com",                              label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#5B5675] hover:text-white hover:bg-gradient-to-br hover:from-[#7C3AED] hover:to-[#EC4899] hover:border-transparent transition-all duration-200">
                <Icon size={15} />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-xs font-bold text-[#5B5675] hover:text-white hover:border-[#7C3AED]/50 hover:bg-[#7C3AED]/10 transition-all duration-150">
            <ArrowUp size={13} /> Back to top
          </button>

        </div>
      </div>
    </footer>
  );
}
