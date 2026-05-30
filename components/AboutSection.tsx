"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Briefcase, Target, Award } from "lucide-react";

const E = [0.25, 0.1, 0.25, 1] as const;

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const a = (d = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { delay: d, duration: 0.6, ease: E },
  });

  return (
    <section id="about" ref={ref} className="py-28 bg-[#F3F0FF] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C4B5FD] to-transparent" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#FFF0F3] to-transparent rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">

        {/* Header */}
        <motion.div {...a(0)} className="mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE9FE] border border-[#C4B5FD] text-[#6D28D9] text-xs font-bold uppercase tracking-widest mb-4">
            ✦ About Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1E1B2E] leading-tight tracking-tight">
            Turning curiosity into<br />
            <span className="grad-text">real solutions</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Bio */}
          <motion.div {...a(0.1)} className="lg:col-span-3 space-y-5">
            <p className="text-[#1E1B2E] text-lg leading-relaxed font-medium">
              I&apos;m <strong>Joy Ria Sihombing</strong>, a 6th semester Applied Software Engineering
              student at Del Institute of Technology, Laguboti, North Sumatra — maintaining a GPA of 3.41/4.00.
            </p>
            <p className="text-[#5B5675] text-base leading-relaxed">
              My academic journey has built a strong foundation in software engineering principles,
              data structures, and algorithms. I actively apply these skills through real-world projects
              in data analytics, machine learning, and web development.
            </p>
            <p className="text-[#5B5675] text-base leading-relaxed">
              I am seeking internship and entry-level opportunities in Data Analytics, AI Engineering,
              and Software Development where I can contribute meaningfully and grow as a professional.
            </p>

            {/* Facts */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { label: "Degree",      value: "D4 Software Engineering" },
                { label: "University",  value: "Del Institute of Technology" },
                { label: "GPA",         value: "3.41 / 4.00" },
                { label: "Graduation",  value: "2027 (Expected)" },
                { label: "Location",    value: "Balige, North Sumatra" },
                { label: "Status",      value: "Open to opportunities" },
              ].map(item => (
                <div key={item.label} className="p-3 bg-white/70 rounded-xl border border-[#E4DFFF]">
                  <p className="text-[10px] font-bold text-[#9B96B0] uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-sm font-semibold text-[#1E1B2E] leading-snug">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Cards */}
          <motion.div {...a(0.2)} className="lg:col-span-2 space-y-3">
            {[
              { icon: Target,       title: "Career Interest", text: "Data Analyst, AI Engineer, and Software Developer at tech-forward companies.", color: "text-[#7C3AED]", bg: "bg-[#EDE9FE]", border: "border-[#C4B5FD]" },
              { icon: GraduationCap,title: "Education",       text: "D4 Applied Software Engineering · Del Institute of Technology · 2023–2027",   color: "text-[#BE185D]", bg: "bg-[#FFF0F3]", border: "border-[#FECDD3]" },
              { icon: Briefcase,    title: "Leadership",      text: "Head of Commission A at Student Representative Council (MPM) · 2026",          color: "text-[#0891B2]", bg: "bg-[#F0F9FF]", border: "border-[#BAE6FD]" },
              { icon: Award,        title: "Achievements",    text: "8+ professional certifications from Dicoding, Microsoft, and Del Institute.",   color: "text-[#D97706]", bg: "bg-[#FFFBEB]", border: "border-[#FDE68A]" },
            ].map(card => (
              <div key={card.title}
                className="flex items-start gap-4 p-4 bg-white/80 border border-[#E4DFFF] rounded-2xl hover:border-[#C4B5FD] hover:shadow-lg hover:shadow-violet-100/60 transition-all duration-200 group">
                <div className={`w-9 h-9 rounded-xl ${card.bg} border ${card.border} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                  <card.icon size={16} className={card.color} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1E1B2E] mb-0.5">{card.title}</p>
                  <p className="text-xs text-[#5B5675] leading-relaxed">{card.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div {...a(0.3)} className="mt-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs font-bold text-[#1E1B2E] uppercase tracking-widest">Certifications</span>
            <div className="flex-1 h-px bg-[#E4DFFF]" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { title: "Belajar Dasar AI & Pemrograman Python",           issuer: "Dicoding Indonesia",    year: "2025", accent: "border-l-[#7C3AED]" },
              { title: "Penerapan Data Science dengan Microsoft Fabric",   issuer: "Microsoft · Dicoding", year: "2025", accent: "border-l-[#BE185D]" },
              { title: "Membangun Aplikasi Gen AI dengan Microsoft Azure", issuer: "Microsoft · Dicoding", year: "2025", accent: "border-l-[#0891B2]" },
              { title: "Belajar Dasar Visualisasi Data",                   issuer: "Dicoding Indonesia",    year: "2024", accent: "border-l-[#D97706]" },
              { title: "Student Leadership Program",                       issuer: "Del Institute of Technology", year: "2024", accent: "border-l-[#059669]" },
            ].map(cert => (
              <div key={cert.title}
                className={`p-4 bg-white/80 border border-[#E4DFFF] border-l-4 ${cert.accent} rounded-xl hover:shadow-md hover:shadow-violet-100/50 transition-all duration-200`}>
                <p className="text-sm font-semibold text-[#1E1B2E] leading-snug mb-1.5">{cert.title}</p>
                <p className="text-xs text-[#5B5675]">{cert.issuer}</p>
                <p className="text-xs text-[#9B96B0] mt-1 font-medium">{cert.year}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
