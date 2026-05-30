"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const E = [0.25, 0.1, 0.25, 1] as const;

const skillGroups = [
  {
    category: "Programming Languages",
    dot: "bg-[#7C3AED]",
    chip: "bg-[#EDE9FE] text-[#6D28D9] border-[#C4B5FD]",
    card: "border-[#C4B5FD] bg-[#FAF8FF]",
    skills: ["Python", "JavaScript", "Dart", "HTML5", "CSS3", "SQL"],
  },
  {
    category: "Data Analysis",
    dot: "bg-[#BE185D]",
    chip: "bg-[#FFF0F3] text-[#9D174D] border-[#FECDD3]",
    card: "border-[#FECDD3] bg-[#FFF8FA]",
    skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Data Visualization", "Jupyter Notebook"],
  },
  {
    category: "Frameworks & Tools",
    dot: "bg-[#0891B2]",
    chip: "bg-[#F0F9FF] text-[#0369A1] border-[#BAE6FD]",
    card: "border-[#BAE6FD] bg-[#F8FCFF]",
    skills: ["Flutter", "Next.js", "Git", "GitHub", "Jupyter Notebook", "VS Code", "Figma", "Postman"],
  },
  {
    category: "Cloud & Platforms",
    dot: "bg-[#D97706]",
    chip: "bg-[#FFFBEB] text-[#B45309] border-[#FDE68A]",
    card: "border-[#FDE68A] bg-[#FFFDF5]",
    skills: ["Microsoft Azure", "Microsoft Fabric", "Power BI", "Android Studio", "Linux", "Notion"],
  },
];

const softSkills = ["Leadership", "Communication", "Problem Solving", "Teamwork", "Time Management", "Adaptability"];

export default function SkillsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const a = (d = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { delay: d, duration: 0.6, ease: E },
  });

  return (
    <section id="skills" ref={ref} className="py-28 bg-[#FAF8FF] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E4DFFF] to-transparent" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-gradient-to-r from-[#EDE9FE] to-transparent rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-50" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">

        {/* Header */}
        <motion.div {...a(0)} className="mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE9FE] border border-[#C4B5FD] text-[#6D28D9] text-xs font-bold uppercase tracking-widest mb-4">
            ✦ Skills
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1E1B2E] leading-tight tracking-tight">
            Technical <span className="grad-text">expertise</span>
          </h2>
        </motion.div>

        {/* Skill groups */}
        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          {skillGroups.map((group, i) => (
            <motion.div key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6, ease: E }}
              className={`p-6 border-2 ${group.card} rounded-2xl hover:shadow-lg hover:shadow-violet-100/50 transition-all duration-200`}>
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-2.5 h-2.5 rounded-full ${group.dot}`} />
                <p className="text-xs font-bold text-[#1E1B2E] uppercase tracking-widest">{group.category}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span key={skill}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-semibold ${group.chip} transition-all duration-150 cursor-default`}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft skills */}
        <motion.div {...a(0.4)}>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-bold text-[#1E1B2E] uppercase tracking-widest">Soft Skills</span>
            <div className="flex-1 h-px bg-[#E4DFFF]" />
          </div>
          <div className="flex flex-wrap gap-2">
            {softSkills.map(skill => (
              <span key={skill}
                className="px-4 py-2 rounded-xl bg-white border-2 border-[#E4DFFF] text-sm font-semibold text-[#5B5675] hover:border-[#C4B5FD] hover:text-[#7C3AED] hover:bg-[#EDE9FE] transition-all duration-150 cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
