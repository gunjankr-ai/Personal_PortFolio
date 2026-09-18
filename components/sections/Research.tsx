"use client";

import { useState } from "react";
import {
  Satellite,
  BookOpen,
  Milestone,
} from "lucide-react";
import { researchData, researchPipelineSteps } from "@/lib/portfolioData";
import { ResearchPaperModal } from "@/components/modals/ResearchPaperModal";

export function Research() {
  const [activeStep, setActiveStep] = useState(1);
  const [paperModalOpen, setPaperModalOpen] = useState(false);

  const selectedStepData =
    researchPipelineSteps.find((s) => s.stepNumber === activeStep) ||
    researchPipelineSteps[0];

  return (
    <section id="research" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 mb-3">
            <Satellite className="w-3.5 h-3.5" />
            <span>Scientific Inquiry &amp; Innovation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Research &amp; <span className="gradient-text">Geospatial AI</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Multi-sensor environmental telemetry, satellite remote sensing, and deep convolutional segmentation architectures for ecological conservation.
          </p>
        </div>

        {/* Spotlight Investigation Card */}
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-10 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                {researchData.spotlightBadge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                {researchData.title}
              </h3>
              <p className="text-xs sm:text-sm text-cyan-600 dark:text-cyan-400 font-medium">
                Research Area: {researchData.area}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                {researchData.overview}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setPaperModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all shadow-md active:scale-95"
              >
                <BookOpen className="w-4 h-4" />
                <span>View Research Synopsis</span>
              </button>
            </div>
          </div>

          {/* 4-Column Methodology Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                1. Objective
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {researchData.objective}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-500 mb-2">
                2. Problem
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {researchData.problemStatement}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
                3. Expected Impact
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {researchData.expectedImpact}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">
                4. Future Scope
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {researchData.futureScope}
              </p>
            </div>
          </div>
        </div>

        {/* Interactive 8-Step Research Workflow Visualizer */}
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-200 dark:border-slate-800 gap-2">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Milestone className="w-5 h-5 text-cyan-500" />
                <span>Interactive 8-Step Pipeline Visualizer</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Click on any node in the sequence below to inspect the mathematical and algorithmic phase:
              </p>
            </div>
            <span className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-500/20 shrink-0">
              Step 0{activeStep} of 08 Selected
            </span>
          </div>

          {/* 8 Stepper Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-6">
            {researchPipelineSteps.map((step) => {
              const isCurrent = activeStep === step.stepNumber;
              return (
                <button
                  key={step.stepNumber}
                  type="button"
                  onClick={() => setActiveStep(step.stepNumber)}
                  className={`p-3 rounded-xl text-left border transition-all ${
                    isCurrent
                      ? "bg-cyan-50 dark:bg-cyan-950/60 border-cyan-500 shadow-md ring-2 ring-cyan-500/20"
                      : "bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  <div
                    className={`font-mono text-xs font-bold ${
                      isCurrent ? "text-cyan-600 dark:text-cyan-400" : "text-slate-400"
                    }`}
                  >
                    0{step.stepNumber}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-800 dark:text-slate-200 line-clamp-1 mt-1">
                    {step.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Active Step Detail Box */}
          <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6 animate-modal-in">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                  Step 0{selectedStepData.stepNumber}
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  {selectedStepData.metrics}
                </span>
              </div>
              <h4 className="text-lg font-bold text-white">
                {selectedStepData.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                {selectedStepData.detailedDesc}
              </p>
            </div>

            <div className="flex flex-wrap md:flex-col gap-2 shrink-0">
              <span className="text-xs font-medium text-slate-400">Core Technologies:</span>
              <div className="flex flex-wrap gap-1.5">
                {selectedStepData.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-xs font-mono rounded bg-slate-800 text-cyan-300 border border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Research Paper Synopsis Modal */}
      <ResearchPaperModal
        isOpen={paperModalOpen}
        onClose={() => setPaperModalOpen(false)}
      />
    </section>
  );
}
