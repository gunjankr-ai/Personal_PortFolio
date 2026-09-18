"use client";

import { useEffect } from "react";
import { X, Sparkles, FolderGit2, Cpu, Wrench } from "lucide-react";
import { SkillItem } from "@/types/portfolio";

interface SkillDetailModalProps {
  skill: SkillItem | null;
  onClose: () => void;
}

export function SkillDetailModal({ skill, onClose }: SkillDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (skill) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [skill, onClose]);

  if (!skill) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl animate-modal-in overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Header Accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500" />

        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                {skill.categoryName}
              </span>
              {skill.proficiency && (
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  {skill.proficiency}
                </span>
              )}
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              {skill.name}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-5 text-sm">
          {/* Description */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
              Technical Overview
            </h4>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {skill.description}
            </p>
          </div>

          {/* Technologies / Frameworks Used */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-blue-500" />
              Libraries &amp; Ecosystem Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {skill.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* My Usage Experience */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5 text-emerald-500" />
              My Applied Experience
            </h4>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
              {skill.experience}
            </p>
          </div>

          {/* Related Projects */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
              <FolderGit2 className="w-3.5 h-3.5 text-purple-500" />
              Applied in Projects
            </h4>
            <div className="flex flex-wrap gap-2">
              {skill.relatedProjects.map((proj) => (
                <span
                  key={proj}
                  className="px-2.5 py-1 text-xs rounded-md bg-cyan-50 dark:bg-cyan-950/40 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/60 font-medium"
                >
                  {proj}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
