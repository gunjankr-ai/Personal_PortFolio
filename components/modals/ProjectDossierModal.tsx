"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, CheckCircle, Layers, Cpu, Activity, Clock } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { Project } from "@/types/portfolio";

interface ProjectDossierModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDossierModal({ project, onClose }: ProjectDossierModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [project, onClose]);

  if (!project) return null;

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
        {/* Header Visual Bar */}
        <div className="relative h-48 sm:h-64 w-full bg-slate-950 shrink-0 border-b border-slate-200 dark:border-slate-800">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-contain p-4 sm:p-6"
            priority
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Title & Tag */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                {project.categoryLabel}
              </span>
              {project.comingSoon ? (
                <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  Live Deployment Coming Soon
                </span>
              ) : (
                <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                  <Activity className="w-3 h-3" />
                  Production Live
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              {project.name}
            </h2>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Quick Problem vs Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-500 mb-1.5 flex items-center gap-1.5">
                The Challenge &amp; Problem
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-500 mb-1.5 flex items-center gap-1.5">
                The Architecture &amp; Solution
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Deep Dossier Details (if available) */}
          {project.dossier && (
            <div className="space-y-4 p-5 rounded-xl bg-slate-900/50 border border-cyan-500/20 text-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-cyan-400" />
                Technical Architecture &amp; Ingest Flow
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono bg-slate-950/80 p-3 rounded-lg border border-slate-800">
                {project.dossier.architecture}
              </p>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {project.dossier.keyMetrics.map((metric, i) => (
                  <div key={i} className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/50 text-center">
                    <div className="text-xs text-slate-400 mb-1">{metric.label}</div>
                    <div className="text-sm sm:text-base font-bold text-white font-mono">{metric.value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-cyan-500" />
              Key Engineered Features
            </h4>
            <div className="space-y-2">
              {project.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-emerald-500 font-bold shrink-0">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-blue-500" />
              Technologies &amp; Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Footer Bar */}
        <div className="p-4 sm:p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm"
              >
                <GithubIcon className="w-4 h-4" />
                Open GitHub Repository
              </a>
            ) : null}

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white transition-colors shadow-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Open Live Demo
              </a>
            ) : (
              <button
                disabled
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-slate-200 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 cursor-not-allowed border border-slate-300 dark:border-slate-700"
              >
                <Clock className="w-3.5 h-3.5" />
                Live Demo Coming Soon
              </button>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
}
