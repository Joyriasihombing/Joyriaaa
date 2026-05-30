"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Send, Loader2, CheckCircle, MapPin, Phone } from "lucide-react";

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

const E = [0.25, 0.1, 0.25, 1] as const;
const inputClass = "w-full px-4 py-3 rounded-xl border-2 border-[#E4DFFF] bg-white text-[#1E1B2E] text-sm placeholder-[#C4B5FD] focus:outline-none focus:border-[#A78BFA] focus:ring-2 focus:ring-[#7C3AED]/10 transition-all duration-150";

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const a = (d = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { delay: d, duration: 0.6, ease: E },
  });

  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading"); setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) { setErrorMsg(data.error || "Failed to send."); setStatus("error"); setTimeout(() => setStatus("idle"), 4000); return; }
      setStatus("success"); setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setErrorMsg("Network error. Please check your connection.");
      setStatus("error"); setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-28 bg-[#FAF8FF] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E4DFFF] to-transparent" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#EDE9FE] to-transparent rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none opacity-50" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">

        {/* Header */}
        <motion.div {...a(0)} className="mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE9FE] border border-[#C4B5FD] text-[#6D28D9] text-xs font-bold uppercase tracking-widest mb-4">
            ✦ Contact
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1E1B2E] leading-tight tracking-tight">
            Let&apos;s <span className="grad-text">connect</span>
          </h2>
          <p className="text-[#5B5675] mt-3 text-base max-w-xl">
            Open to internship opportunities, project collaborations, and professional conversations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">

          {/* Left */}
          <motion.div {...a(0.1)} className="lg:col-span-2 space-y-5">

            {/* Availability */}
            <div className="p-5 bg-gradient-to-br from-[#F0FDF8] to-[#ECFDF5] border-2 border-[#A7F3D0] rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-sm font-bold text-[#065F46]">Available for hire ✨</span>
              </div>
              <p className="text-sm text-[#047857] leading-relaxed">
                Actively looking for internship and entry-level positions in Data Analytics,
                AI Engineering, and Software Development.
              </p>
            </div>

            {/* Contact items */}
            <div className="space-y-2">
              {[
                { icon: Mail,         label: "Email",     value: "joysihombing21@gmail.com",                              href: "mailto:joysihombing21@gmail.com",                         iconBg: "bg-[#EDE9FE] text-[#7C3AED]" },
                { icon: Phone,        label: "WhatsApp",  value: "+62 895-3930-00550",                                     href: "https://wa.me/6289539300550",                             iconBg: "bg-[#F0FDF8] text-[#059669]" },
                { icon: GithubIcon,   label: "GitHub",    value: "github.com/Joyriasihombing",                             href: "https://github.com/Joyriasihombing",                      iconBg: "bg-[#F3F0FF] text-[#1E1B2E]" },
                { icon: LinkedinIcon, label: "LinkedIn",  value: "Joy Ria Sihombing",                                      href: "https://www.linkedin.com/in/joy-ria-sihombing-9703b11b6/",iconBg: "bg-[#EFF6FF] text-[#2563EB]" },
                { icon: MapPin,       label: "Location",  value: "Balige, North Sumatra 🇮🇩",                              href: null,                                                      iconBg: "bg-[#FFF0F3] text-[#F43F5E]" },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#F3F0FF] transition-colors duration-150 group">
                  <div className={`w-9 h-9 rounded-xl ${item.iconBg} flex items-center justify-center flex-shrink-0`}>
                    <item.icon size={15} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold text-[#9B96B0] uppercase tracking-widest">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm font-semibold text-[#1E1B2E] hover:text-[#7C3AED] transition-colors duration-150 truncate block">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-[#1E1B2E] truncate">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div {...a(0.2)} className="lg:col-span-3">
            <div className="p-8 bg-white/80 border-2 border-[#E4DFFF] rounded-2xl shadow-xl shadow-violet-100/40">
              <h3 className="text-lg font-bold text-[#1E1B2E] mb-6">Send a message 💌</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#5B5675] uppercase tracking-wider mb-2">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}
                      placeholder="Your name" required className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#5B5675] uppercase tracking-wider mb-2">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange}
                      placeholder="your@email.com" required className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#5B5675] uppercase tracking-wider mb-2">Subject</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange}
                    placeholder="Internship opportunity / Project collaboration" required className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#5B5675] uppercase tracking-wider mb-2">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..." required rows={5}
                    className={`${inputClass} resize-none`} />
                </div>
                <button type="submit" disabled={status === "loading" || status === "success"}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold transition-all duration-150 ${
                    status === "success" ? "bg-[#10B981] text-white"
                    : status === "error"   ? "bg-[#F43F5E] text-white"
                    : "bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white hover:opacity-90 shadow-lg shadow-violet-200 disabled:opacity-60"
                  }`}>
                  {status === "loading" ? <><Loader2 size={15} className="animate-spin" /> Sending...</>
                  : status === "success" ? <><CheckCircle size={15} /> Message sent! 🎉</>
                  : <><Send size={15} /> Send Message</>}
                </button>
                {status === "error" && errorMsg && (
                  <p className="text-xs text-[#F43F5E] text-center">{errorMsg}</p>
                )}
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
