"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const projects = [
  {
    title: "SMPN Laguboti Website",
    description: "A responsive school website providing information, announcements, and resources for students, teachers, and the public.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Web Development",
    emoji: "🌐",
    gradient: "from-[#EDE9FE] to-[#DDD6FE]",
    chipColor: "bg-[#EDE9FE] text-[#6D28D9] border-[#C4B5FD]",
    github: "https://github.com/Joyriasihombing",
    demo: null,
  },
  {
    title: "Cari Laundry Application",
    description: "A Flutter mobile app that helps users find nearby laundry services with search functionality and a clean, user-friendly interface.",
    tags: ["Flutter", "Dart"],
    category: "Mobile Development",
    emoji: "📱",
    gradient: "from-[#FFF0F3] to-[#FECDD3]",
    chipColor: "bg-[#FFF0F3] text-[#9D174D] border-[#FECDD3]",
    github: "https://github.com/Joyriasihombing",
    demo: null,
  },
  {
    title: "Obesity Risk Prediction",
    description: "A machine learning model predicting obesity risk for high school students based on lifestyle data, supporting early health detection.",
    tags: ["Python", "Pandas", "Scikit-learn", "ML"],
    category: "AI / Machine Learning",
    emoji: "🤖",
    gradient: "from-[#F0FDF8] to-[#A7F3D0]",
    chipColor: "bg-[#F0FDF8] text-[#065F46] border-[#A7F3D0]",
    github: "https://github.com/Joyriasihombing",
    demo: null,
  },
];

const E = [0.25, 0.1, 0.25, 1] as const;

export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const a = (d = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { delay: d, duration: 0.6, ease: E },
  });

  return (
    <section id="projects" ref={ref} className="py-28 bg-[#F3F0FF] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C4B5FD] to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#FFF0F3] to-transparent rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none opacity-60" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">

        {/* Header */}
        <motion.div {...a(0)} className="mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE9FE] border border-[#C4B5FD] text-[#6D28D9] text-xs font-bold uppercase tracking-widest mb-4">
            ✦ Projects
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1E1B2E] leading-tight tracking-tight">
              Selected <span className="grad-text">work</span>
            </h2>
            <a href="https://github.com/Joyriasihombing" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#7C3AED] hover:text-[#6D28D9] transition-colors duration-150 whitespace-nowrap">
              All projects <ArrowUpRight size={14} />
            </a>
          </div>
          <p className="text-[#5B5675] mt-3 text-base max-w-xl">
            Real projects built during my studies — spanning web development, mobile apps, and machine learning.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: E }}
              className="group bg-white/80 border-2 border-[#E4DFFF] rounded-2xl overflow-hidden hover:border-[#C4B5FD] hover:shadow-2xl hover:shadow-violet-100/60 transition-all duration-300 flex flex-col">

              {/* Visual header */}
              <div className={`h-36 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">{project.emoji}</span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <span className={`inline-flex self-start px-2.5 py-1 rounded-lg border text-[10px] font-bold uppercase tracking-wider mb-3 ${project.chipColor}`}>
                  {project.category}
                </span>
                <h3 className="text-base font-bold text-[#1E1B2E] mb-2 leading-snug">{project.title}</h3>
                <p className="text-sm text-[#5B5675] leading-relaxed mb-4 flex-1">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-[#F3F0FF] border border-[#E4DFFF] rounded-md text-xs font-semibold text-[#5B5675]">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-auto">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border-2 border-[#E4DFFF] text-xs font-bold text-[#5B5675] hover:border-[#7C3AED] hover:text-[#7C3AED] hover:bg-[#EDE9FE] transition-all duration-150">
                    <GithubIcon size={13} /> GitHub
                  </a>
                  {project.demo ? (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-xs font-bold text-white hover:opacity-90 transition-opacity">
                      <ExternalLink size={12} /> Live Demo
                    </a>
                  ) : (
                    <span className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#F3F0FF] text-xs font-bold text-[#C4B5FD] cursor-not-allowed border-2 border-[#E4DFFF]">
                      <ExternalLink size={12} /> No Demo
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
