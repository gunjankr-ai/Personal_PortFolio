"use client";

import { Award, ExternalLink, Calendar, ShieldCheck } from "lucide-react";
import { certificationsData, achievementsData } from "@/lib/portfolioData";

export function Certifications() {
  return (
    <section id="certifications" className="py-20 sm:py-28 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Continuous Professional Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Verified <span className="gradient-text">Certifications &amp; Credentials</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Professional certifications and verified industry specializations. Click &quot;View Credential&quot; to open the real certificate verification file.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 shadow-xl flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-2xl">📜</span>
                  {cert.verified && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      <ShieldCheck className="w-3 h-3" />
                      Verified
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {cert.name}
                </h3>

                <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mt-1">
                  {cert.issuer}
                </p>

                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {cert.date}
                </p>

                {/* Skills Covered */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-[10px] rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button: Opens Real Google Drive Certificate */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-600 dark:hover:text-white transition-all shadow-sm"
                >
                  <span>View Verified Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Milestone Honors & Achievements Sub-section */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Recognitions &amp; Hackathon Milestones
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Honors from technical hackathons, entrepreneurship bootcamps, and coding contests.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievementsData.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md text-xs space-y-2"
              >
                <div className="text-2xl">{item.icon}</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                  {item.type}
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
