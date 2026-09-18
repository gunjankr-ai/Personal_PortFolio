"use client";

import { useEffect } from "react";
import { X, BookOpen, ExternalLink, CheckCircle2, Milestone } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { researchData, researchPipelineSteps } from "@/lib/portfolioData";

interface ResearchPaperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResearchPaperModal({ isOpen, onClose }: ResearchPaperModalProps) {
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
        className="relative w-full max-w-3xl my-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl animate-modal-in overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-6 sm:p-8 bg-slate-950 text-white border-b border-slate-800 shrink-0 relative">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 mb-3">
                <BookOpen className="w-3.5 h-3.5" />
                Scientific Paper Synopsis
              </span>
              <h2 className="text-xl sm:text-2xl font-bold leading-snug text-white">
                {researchData.title}
              </h2>
              <p className="text-xs sm:text-sm text-cyan-200 mt-1 font-mono">
                Field: {researchData.area}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-700 dark:text-slate-300">
          {/* Executive Abstract */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
              Executive Abstract
            </h3>
            <p className="leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
              {researchData.overview}
            </p>
          </div>

          {/* Research Objective & Problem */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                Core Research Objective
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed">
                {researchData.objective}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-500 mb-2">
                Problem Statement
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed">
                {researchData.problemStatement}
              </p>
            </div>
          </div>

          {/* Key Technical Components Table */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              Technical &amp; Methodological Stack
            </h3>
            <div className="divide-y divide-slate-200 dark:divide-slate-800 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
              {researchData.technicalComponents.map((comp, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:px-4 text-xs sm:text-sm bg-white dark:bg-slate-900/60">
                  <span className="font-semibold text-slate-900 dark:text-white sm:w-1/3">
                    {comp.label}
                  </span>
                  <span className="text-slate-600 dark:text-slate-400 sm:w-2/3 mt-0.5 sm:mt-0 font-mono text-xs">
                    {comp.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 8-Step Pipeline Overview */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-1.5">
              <Milestone className="w-4 h-4" />
              8-Step Automated Pipeline Architecture
            </h3>
            <div className="space-y-2.5">
              {researchPipelineSteps.map((step) => (
                <div
                  key={step.stepNumber}
                  className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 flex items-start gap-3"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 font-mono text-xs font-bold shrink-0 mt-0.5">
                    0{step.stepNumber}
                  </span>
                  <div>
                    <h5 className="font-semibold text-slate-900 dark:text-white text-xs sm:text-sm">
                      {step.title}
                    </h5>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                      {step.detailedDesc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expected Impact & Future Scope */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Ecological Impact
              </h4>
              <p className="text-xs leading-relaxed text-emerald-900 dark:text-emerald-200">
                {researchData.expectedImpact}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800/40">
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400 mb-1.5">
                Future Scope &amp; Edge AI
              </h4>
              <p className="text-xs leading-relaxed text-purple-900 dark:text-purple-200">
                {researchData.futureScope}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="p-4 sm:p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 flex items-center justify-between gap-3 shrink-0">
          <a
            href="https://github.com/gunjan-kumar-sah/Wetland-Project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            View Research Repository
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            Close Synopsis
          </button>
        </div>
      </div>
    </div>
  );
}
