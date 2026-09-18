"use client";

import { useEffect } from "react";
import { X, Compass, Target, Code, Sparkles, GraduationCap } from "lucide-react";
import { aboutData, personalInfo } from "@/lib/portfolioData";

interface AboutMoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AboutMoreModal({ isOpen, onClose }: AboutMoreModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-2xl my-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl animate-modal-in overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950 text-white border-b border-slate-800 shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  Detailed Dossier
                </span>
                <span className="text-xs text-slate-400">Gunjan Kumar Sah</span>
              </div>
              <h2 className="text-2xl font-bold text-white">
                Career Vision, Philosophy &amp; Focus
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-700 dark:text-slate-300">
          {/* Professional Introduction */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              Professional Introduction
            </h3>
            <p className="leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
              {aboutData.paragraph1}
            </p>
          </div>

          {/* Career & Technical Interests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1.5 flex items-center gap-1.5">
                <Compass className="w-4 h-4" />
                Career Interests
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed">
                {aboutData.extendedBio.careerInterests}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-1.5 flex items-center gap-1.5">
                <Code className="w-4 h-4" />
                Technical Interests
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed">
                {aboutData.extendedBio.technicalInterests}
              </p>
            </div>
          </div>

          {/* Professional Goals */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1.5 flex items-center gap-1.5">
              <Target className="w-4 h-4" />
              Core Engineering Goals
            </h4>
            <p className="text-xs sm:text-sm leading-relaxed">
              {aboutData.extendedBio.goals}
            </p>
          </div>

          {/* What I Do & What I Build */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-1.5">
                What I Do
              </h4>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                {aboutData.extendedBio.whatIDo}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-1.5">
                What Type of Projects I Build
              </h4>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                {aboutData.extendedBio.projectTypes}
              </p>
            </div>
          </div>

          {/* Academic Affiliation */}
          <div className="p-4 rounded-xl bg-cyan-50 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-800/40 flex items-start gap-3">
            <GraduationCap className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
            <div className="text-xs leading-relaxed">
              <strong className="text-cyan-950 dark:text-cyan-200 block text-sm">
                Maharishi University of Information Technology (MUIT), Lucknow
              </strong>
              <span className="text-cyan-800 dark:text-cyan-300">
                B.Tech in Computer Science &amp; Engineering &bull; 2024–2028 &bull; CGPA 8.5 / 10
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 flex items-center justify-between shrink-0">
          <a
            href="#contact"
            onClick={onClose}
            className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white transition-colors"
          >
            Get in Touch
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
