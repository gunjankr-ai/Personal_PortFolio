"use client";

import { useState } from "react";
import { GraduationCap, Calendar, MapPin, Award, BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import { educationData } from "@/lib/portfolioData";

export function Education() {
  const [expandedId, setExpandedId] = useState<string | null>("muit-btech");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="education" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education &amp; <span className="gradient-text">Foundations</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Theoretical computational principles, departmental coursework, and university recognitions.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto">
          {educationData.map((edu) => {
            const isExpanded = expandedId === edu.id;

            return (
              <div
                key={edu.id}
                className="relative pl-6 sm:pl-8 pb-8 border-l-2 border-cyan-500/40 last:border-l-0"
              >
                {/* Timeline Node Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-white dark:border-slate-950 shadow-md" />

                {/* Main Card */}
                <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden transition-all duration-300">
                  {/* Card Top Header */}
                  <div
                    onClick={() => toggleExpand(edu.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") toggleExpand(edu.id);
                    }}
                    className="p-6 sm:p-8 cursor-pointer hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                          CGPA: {edu.cgpa}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {edu.duration}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-rose-500" />
                          {edu.location}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mt-1">
                        {edu.institution}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 shrink-0">
                      <span>{isExpanded ? "Collapse Details" : "View Complete Details"}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>

                  {/* Expandable Body */}
                  {isExpanded && (
                    <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2 border-t border-slate-100 dark:border-slate-800 space-y-5 text-sm animate-modal-in">
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {edu.description}
                      </p>

                      {/* Coursework Grid */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5 flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                          Core Coursework &amp; Subjects
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.subjects.map((subj) => (
                            <span
                              key={subj}
                              className="px-3 py-1 text-xs rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-medium"
                            >
                              {subj}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5 flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-amber-500" />
                          Academic Recognitions &amp; Achievements
                        </h4>
                        <div className="space-y-2">
                          {edu.achievements.map((ach, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                              <span className="text-amber-500 font-bold shrink-0">★</span>
                              <span>{ach}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
