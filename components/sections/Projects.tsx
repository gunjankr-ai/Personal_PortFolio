"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FolderGit2,
  ExternalLink,
  Clock,
  Sparkles,
  Layers,
  CheckCircle,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { projectsData } from "@/lib/portfolioData";
import { Project } from "@/types/portfolio";
import { ProjectDossierModal } from "@/components/modals/ProjectDossierModal";

const projectFilters = [
  { id: "all", label: "All Projects" },
  { id: "ai-data", label: "AI & Data Science" },
  { id: "full-stack", label: "Full-Stack Web" },
  { id: "research-twin", label: "Research & Digital Twin" },
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Applied Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured <span className="gradient-text">Projects &amp; Architectures</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Real software systems, automated ML pipelines, and research prototypes. Every project features direct verified repository links.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectFilters.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === tab.id
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md scale-105"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Visual Header */}
                <div className="relative h-48 sm:h-56 w-full bg-slate-950 overflow-hidden border-b border-slate-200 dark:border-slate-800">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-950/80 text-cyan-400 border border-cyan-500/30 backdrop-blur-sm">
                      {project.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Problem / Solution Snippets */}
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800/80 space-y-2 text-xs">
                    <div>
                      <span className="font-bold text-rose-500">The Problem: </span>
                      <span className="text-slate-600 dark:text-slate-400 line-clamp-2">{project.problem}</span>
                    </div>
                    <div>
                      <span className="font-bold text-emerald-500">The Solution: </span>
                      <span className="text-slate-600 dark:text-slate-400 line-clamp-2">{project.solution}</span>
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-1.5 py-0.5 text-[10px] rounded text-slate-400 font-mono">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Actions Bar */}
              <div className="p-4 sm:px-7 sm:py-5 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm"
                      title="Open GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white transition-colors"
                      title="Open Live Deployed Project"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1.5 text-[11px] font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                      <Clock className="w-3 h-3" />
                      <span>Live Demo Coming Soon</span>
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>View Dossier</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Dossier Modal */}
      <ProjectDossierModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
