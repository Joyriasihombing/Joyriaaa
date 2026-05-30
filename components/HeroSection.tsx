"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight, MapPin, Mail } from "lucide-react";
import Image from "next/image";

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

function ProfilePhoto() {
  const [err, setErr] = useState(false);
  if (err) return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#EDE9FE] to-[#FFF0F3]">
      <span className="grad-text font-black text-5xl">J</span>
    </div>
  );
  return (
    <Image src="/profile.jpg" alt="Joy Ria Sihombing" fill
      sizes="(max-width: 640px) 160px, 220px"
      className="object-cover object-top" priority onError={() => setErr(true)} />
  );
}

const E = [0.25, 0.1, 0.25, 1] as const;
const a = (d: number) => ({ initial: { opacity: 0, y: 22 }, animate: { opacity: 1, y: 0 }, transition: { delay: d, duration: 0.6, ease: E } });

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#FAF8FF] pt-16 overflow-hidden">

      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#EDE9FE] via-[#F3F0FF] to-transparent rounded-full -translate-y-1/4 translate-x-1/4 pointer-events-none opacity-70" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#FFF0F3] via-[#FAF8FF] to-transparent rounded-full translate-y-1/4 -translate-x-1/4 pointer-events-none opacity-60" />
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 w-full py-20">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* ── Text ── */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">

            {/* Badge */}
            <motion.div {...a(0)}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0FDF8] border border-[#A7F3D0] text-[#059669] text-xs font-bold mb-8 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              Open to internship &amp; full-time roles
            </motion.div>

            {/* Name */}
            <motion.div {...a(0.1)}>
              <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold text-[#1E1B2E] leading-[1.05] tracking-tight mb-2">
                Hi, I&apos;m
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.05] tracking-tight mb-6 grad-text">
                Joy Ria ✦
              </h1>
            </motion.div>

            {/* Role chips */}
            <motion.div {...a(0.2)} className="flex flex-wrap gap-2 justify-center lg:justify-start mb-5">
              {[
                { label: "Data Analyst",       bg: "bg-[#EDE9FE] text-[#6D28D9] border-[#C4B5FD]" },
                { label: "Software Developer",  bg: "bg-[#FFF0F3] text-[#BE185D] border-[#FECDD3]" },
                { label: "Tech Enthusiast",     bg: "bg-[#F0FDF8] text-[#065F46] border-[#A7F3D0]" },
              ].map(r => (
                <span key={r.label} className={`px-3 py-1 rounded-lg border text-xs font-bold tracking-wide ${r.bg}`}>{r.label}</span>
              ))}
            </motion.div>

            {/* Location */}
            <motion.div {...a(0.25)} className="flex items-center gap-1.5 text-sm text-[#9B96B0] mb-6 justify-center lg:justify-start">
              <MapPin size={13} />
              <span>Del Institute of Technology · North Sumatra, Indonesia</span>
            </motion.div>

            {/* Summary */}
            <motion.p {...a(0.3)} className="text-[#5B5675] text-base leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
              6th semester student who enjoys working with data and building software.
              I&apos;ve explored data analysis, machine learning basics, and web & mobile development
              through coursework and personal projects. Always eager to learn and grow.
            </motion.p>

            {/* CTAs */}
            <motion.div {...a(0.4)} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white text-sm font-bold hover:opacity-90 transition-opacity shadow-lg shadow-violet-200">
                View Projects <ArrowRight size={15} />
              </button>
              <a href="/cv.pdf" download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-[#E4DFFF] text-[#1E1B2E] text-sm font-bold hover:bg-[#F3F0FF] hover:border-[#C4B5FD] transition-all duration-150">
                <Download size={15} /> Download CV
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div {...a(0.5)} className="flex items-center gap-5 justify-center lg:justify-start">
              {[
                { icon: GithubIcon,   href: "https://github.com/Joyriasihombing",                          label: "GitHub" },
                { icon: LinkedinIcon, href: "https://www.linkedin.com/in/joy-ria-sihombing-9703b11b6/",    label: "LinkedIn" },
                { icon: Mail,         href: "mailto:joysihombing21@gmail.com",                              label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href}
                  target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-[#9B96B0] hover:text-[#7C3AED] transition-colors duration-150 font-semibold">
                  <Icon size={15} />{label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.7, ease: E }}
            className="flex-shrink-0 order-1 lg:order-2">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#C4B5FD] via-[#FECDD3] to-[#A7F3D0] opacity-40 blur-xl -z-10" />
              {/* Decorative border */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-br from-[#C4B5FD] via-[#FECDD3] to-[#A7F3D0] -z-10" />

              {/* Photo */}
              <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-2xl overflow-hidden bg-[#F3F0FF] shadow-2xl shadow-violet-100">
                <ProfilePhoto />
              </div>

              {/* Floating stat cards */}
              <div className="absolute -bottom-5 -left-8 bg-white border border-[#E4DFFF] rounded-2xl px-4 py-3 shadow-xl shadow-violet-100">
                <p className="text-xl font-extrabold text-[#7C3AED] leading-none">3.41</p>
                <p className="text-[10px] text-[#9B96B0] font-bold uppercase tracking-wider mt-0.5">GPA</p>
              </div>
              <div className="absolute -top-5 -right-8 bg-white border border-[#FECDD3] rounded-2xl px-4 py-3 shadow-xl shadow-rose-100">
                <p className="text-xl font-extrabold text-[#F43F5E] leading-none">3+</p>
                <p className="text-[10px] text-[#9B96B0] font-bold uppercase tracking-wider mt-0.5">Projects</p>
              </div>
              <div className="absolute top-1/2 -right-10 -translate-y-1/2 bg-white border border-[#A7F3D0] rounded-2xl px-4 py-3 shadow-xl shadow-emerald-100">
                <p className="text-xl font-extrabold text-[#059669] leading-none">8+</p>
                <p className="text-[10px] text-[#9B96B0] font-bold uppercase tracking-wider mt-0.5">Certs</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#FAF8FF] to-transparent pointer-events-none" />
    </section>
  );
}
