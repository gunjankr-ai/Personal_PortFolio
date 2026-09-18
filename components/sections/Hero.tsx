"use client";

import Image from "next/image";
import {
  ArrowRight,
  Download,
  Mail,
  BrainCircuit,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { personalInfo, heroPillars } from "@/lib/portfolioData";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 sm:pt-36 sm:pb-24 flex items-center overflow-hidden"
    >
      {/* Subtle Background Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10 opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Indicator Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                {personalInfo.status}
              </span>
            </div>

            {/* Name Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Hi, I&apos;m{" "}
                <span className="gradient-text">{personalInfo.name}</span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-cyan-600 dark:text-cyan-400">
                {personalInfo.headline}
              </p>
            </div>

            {/* Introduction Narrative */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Computer Science Engineering undergraduate at{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">
                MUIT Lucknow
              </strong>{" "}
              passionate about Artificial Intelligence, Data Analytics, Environmental Remote Sensing, and high-performance Full-Stack Web Applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all shadow-md hover:shadow-cyan-500/25 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Gunjan_Kumar_Sah_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:border-cyan-500/50 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all active:scale-95 shadow-sm"
              >
                <Download className="w-4 h-4 text-cyan-500" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 border border-transparent hover:border-slate-200 dark:hover:border-slate-800 hover:bg-slate-100/50 dark:hover:bg-slate-800/40 transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Proof & Quick Handles */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-all shadow-sm"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-blue-500 hover:border-blue-500/40 transition-all shadow-sm"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-cyan-500 hover:border-cyan-500/40 transition-all shadow-sm"
                aria-label="Direct Email"
                title="Email Me"
              >
                <Mail className="w-4 h-4" />
              </a>

              <span className="text-xs text-slate-400 dark:text-slate-500 font-mono ml-2 hidden sm:inline-block">
                gunjansah63@gmail.com
              </span>
            </div>
          </div>

          {/* Right Column: Profile Image Visual + AI Profile Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center gap-6">
            {/* Profile Avatar Card with Glowing Ring */}
            <div className="relative group">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-500 rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition duration-500 -z-10" />

              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden bg-slate-900 border-2 border-white/20 dark:border-slate-800 shadow-2xl">
                <Image
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  fill
                  sizes="(max-width: 640px) 256px, 288px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  priority
                />

                {/* Bottom Overlay Pill on Avatar */}
                <div className="absolute bottom-3 inset-x-3 py-1.5 px-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-center">
                  <span className="text-xs font-semibold text-white tracking-wide">
                    Gunjan Kumar Sah &bull; AI Engineer
                  </span>
                </div>
              </div>
            </div>

            {/* AI Career & Research Profile Pillars Card */}
            <div className="w-full max-w-sm p-4 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/80 backdrop-blur-md shadow-lg">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <BrainCircuit className="w-4 h-4 text-cyan-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    AI Career &amp; Research Profile
                  </span>
                </div>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                  Core Pillars
                </span>
              </div>

              <div className="space-y-2">
                {heroPillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60 text-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base">{pillar.icon}</span>
                      <div>
                        <div className="font-semibold text-slate-800 dark:text-slate-200">
                          {pillar.title}
                        </div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400">
                          {pillar.tag}
                        </div>
                      </div>
                    </div>

                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-md ${
                        pillar.type === "ai"
                          ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20"
                          : pillar.type === "web"
                          ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20"
                          : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                      }`}
                    >
                      {pillar.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
