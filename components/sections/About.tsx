"use client";

import { useState } from "react";
import { Sparkles, GraduationCap, ChevronRight, MapPin } from "lucide-react";
import { aboutData } from "@/lib/portfolioData";
import { AboutMoreModal } from "@/components/modals/AboutMoreModal";

export function About() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Bridging Computer Science with{" "}
            <span className="gradient-text">Real-World Impact</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Driven by curiosity and a commitment to applying modern algorithms and machine learning toward environmental sustainability and reliable full-stack engineering.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
            <p>
              I am a <strong className="text-slate-900 dark:text-white font-semibold">Computer Science Engineering student</strong> at Maharishi University of Information Technology (MUIT), Lucknow, specializing in Artificial Intelligence, Data Analytics, and Full-Stack Web Development.
            </p>

            <p>
              My focus centers on understanding computational foundations and applying modern machine learning techniques to tackle complex challenges. In projects like my <span className="text-cyan-600 dark:text-cyan-400 font-semibold">AI Wetland Monitoring Observatory</span>, I explore how satellite imagery (Sentinel-2), GIS spatial analysis, and convolutional networks can monitor vital ecological buffers and provide early warning signals.
            </p>

            <p>
              As a full-stack engineer, I design clean, maintainable web applications using React, Next.js, and Node.js. Whether architecting transparent 5-factor resume evaluation platforms or building MLOps drift monitoring pipelines, I emphasize code quality, performance, and real-world utility.
            </p>

            {/* Read More Interactive Trigger */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/60 hover:bg-cyan-100 dark:hover:bg-cyan-900/40 transition-all group"
              >
                <span>Read Full Bio &amp; Career Goals</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Highlights Metrics Cards */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Primary Pursuit</div>
                <div className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                  B.Tech in CSE
                </div>
                <div className="text-xs text-cyan-600 dark:text-cyan-400 font-mono">MUIT Lucknow (2024-2028)</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Research Focus</div>
                <div className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                  Environmental AI &amp; GIS
                </div>
                <div className="text-xs text-emerald-600 dark:text-emerald-400 font-mono">Satellite Remote Sensing</div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Facts Card (5 cols) */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
            <div className="flex items-center gap-2 pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
              <GraduationCap className="w-5 h-5 text-cyan-500" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Academic &amp; Profile Summary
              </h3>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm">
              {aboutData.quickFacts.map((fact, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-2 border-b border-slate-100 dark:border-slate-800/60 last:border-b-0 last:pb-0 gap-1">
                  <span className="text-slate-500 dark:text-slate-400 font-medium shrink-0 sm:w-28">
                    {fact.label}
                  </span>
                  <span className="text-slate-900 dark:text-white font-semibold sm:text-right">
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                Lucknow, Uttar Pradesh
              </span>
              <span className="flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Open to Opportunities
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Extended Modal */}
      <AboutMoreModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
