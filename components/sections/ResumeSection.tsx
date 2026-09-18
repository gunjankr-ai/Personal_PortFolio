"use client";

import { FileText, Download, ExternalLink, Printer } from "lucide-react";
import { personalInfo } from "@/lib/portfolioData";

export function ResumeSection() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional <span className="gradient-text">Resume Overview</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Consolidated overview of education, technical competencies, engineering experience, and project leadership.
          </p>
        </div>

        {/* Resume Box Wrapper */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
          {/* Top Action Bar */}
          <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {personalInfo.name} &mdash; Official Resume
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Verified Document &bull; Updated for 2026 Academic &amp; Career Review
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={personalInfo.resumeUrl}
                download="Gunjan_Kumar_Sah_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all shadow-md active:scale-95"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>View Full PDF</span>
              </a>

              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print</span>
              </button>
            </div>
          </div>

          {/* Clean Resume Paper View */}
          <div className="p-6 sm:p-10 space-y-6 text-slate-800 dark:text-slate-200 text-xs sm:text-sm leading-relaxed font-sans">
            {/* Header / Identity */}
            <div className="border-b-2 border-slate-200 dark:border-slate-800 pb-5">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                GUNJAN KUMAR SAH
              </h1>
              <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mt-1">
                Data Science &amp; AI Engineer | Full-Stack Developer
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
                <span>{personalInfo.phone}</span>
                <span>&bull;</span>
                <span>{personalInfo.email}</span>
                <span>&bull;</span>
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
                Professional Summary
              </h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Computer Science undergraduate with strong foundations in Python, SQL, Data Analysis, Machine Learning, and modern Full-Stack Web Development. Experienced in building end-to-end applications, real-time ML pipelines, interactive Power BI dashboards, and satellite remote sensing systems. Seeking high-impact software engineering, data science, and AI opportunities.
              </p>
            </div>

            {/* Education */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
                Education
              </h4>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <strong className="text-slate-900 dark:text-white text-sm">
                  Bachelor of Technology (B.Tech) in Computer Science &amp; Engineering
                </strong>
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                  2024 &ndash; 2028
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Maharishi University of Information Technology (MUIT), Lucknow &bull; <strong>CGPA: 8.5 / 10</strong>
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                Relevant Coursework: Data Structures &amp; Algorithms, DBMS, Operating Systems, Computer Networks, Machine Learning, Probability.
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
                Technical Skills
              </h4>
              <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                <div>
                  <strong className="text-slate-900 dark:text-white">Programming: </strong>
                  Python (Pandas, NumPy, Scikit-Learn), JavaScript, TypeScript, SQL, HTML5, CSS3.
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white">Data Science &amp; AI: </strong>
                  Machine Learning, Deep Learning (U-Net, CNNs), Computer Vision, Generative AI (Gemini Studio), Data Analytics.
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white">Web Development: </strong>
                  React, Next.js (App Router), Node.js, Express, REST APIs, Tailwind CSS.
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white">Tools &amp; Geospatial: </strong>
                  Power BI, QGIS, Git, GitHub, VS Code, Jupyter Notebook, SQLite, PostgreSQL.
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
                Experience &amp; Internships
              </h4>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <strong className="text-slate-900 dark:text-white text-sm">
                  Python Programming Intern &mdash; CodeAlpha
                </strong>
                <span className="text-xs font-mono text-slate-500">
                  Jun 2026 &ndash; Aug 2026 (Remote)
                </span>
              </div>
              <ul className="list-disc list-inside mt-1.5 space-y-1 text-xs text-slate-600 dark:text-slate-300">
                <li>Developed Python-based applications, including rule-based chatbots and interactive algorithmic logic.</li>
                <li>Practiced writing modular, readable code, unit test cases, and debugging complex edge scenarios.</li>
              </ul>
            </div>

            {/* Key Projects */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
                Key Projects &amp; Research
              </h4>
              <div className="space-y-2.5 text-xs">
                <div>
                  <strong className="text-slate-900 dark:text-white">
                    Artificial Intelligence for Wetland Monitoring &amp; Conservation:
                  </strong>{" "}
                  <span className="text-slate-600 dark:text-slate-300">
                    Engineered an AI framework leveraging Sentinel-2 multi-spectral satellite feeds and U-Net CNN segmentation to detect water loss and spatial encroachment.
                  </span>
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white">
                    ResuMatch AI — Production-Quality Resume Analyzer:
                  </strong>{" "}
                  <span className="text-slate-600 dark:text-slate-300">
                    Full-stack platform extracting facts from PDF/DOCX resumes, computing an audited 5-factor mathematical score, and mapping missing skills across 8 domains.
                  </span>
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white">
                    Full-Lifecycle Fraud Detection &amp; Drift Monitoring Pipeline:
                  </strong>{" "}
                  <span className="text-slate-600 dark:text-slate-300">
                    High-accuracy LightGBM fraud model (0.9942 AUC-ROC) served via FastAPI (&lt;15ms) with continuous KS-test drift gates using Evidently AI.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
