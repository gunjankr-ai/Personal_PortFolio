"use client";

import { useState } from "react";
import { Terminal, Brain, Globe, Wrench, Sparkles, ArrowUpRight } from "lucide-react";
import { skillsData } from "@/lib/portfolioData";
import { SkillItem } from "@/types/portfolio";
import { SkillDetailModal } from "@/components/modals/SkillDetailModal";

const categories = [
  { id: "all", name: "All Skills", icon: Sparkles },
  { id: "programming", name: "Programming", icon: Terminal },
  { id: "ai-data", name: "Data Science & AI", icon: Brain },
  { id: "web", name: "Web Development", icon: Globe },
  { id: "tools", name: "Tools & Platforms", icon: Wrench },
];

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(null);

  const filteredSkills =
    selectedCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 sm:py-28 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 mb-3">
            <Brain className="w-3.5 h-3.5" />
            <span>Technical Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills &amp; <span className="gradient-text">Domains of Mastery</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Click on any skill to inspect in-depth technical details, libraries, usage experience, and related portfolio projects.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md scale-105"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              onClick={() => setActiveSkill(skill)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setActiveSkill(skill);
              }}
              className="group p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 hover:shadow-xl dark:hover:shadow-cyan-500/5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                    {skill.categoryName}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </h3>

                <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Technologies Badges Preview */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {skill.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] rounded bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {skill.technologies.length > 3 && (
                    <span className="px-1.5 py-0.5 text-[10px] rounded text-slate-400 font-mono">
                      +{skill.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Detail Modal */}
      <SkillDetailModal skill={activeSkill} onClose={() => setActiveSkill(null)} />
    </section>
  );
}
