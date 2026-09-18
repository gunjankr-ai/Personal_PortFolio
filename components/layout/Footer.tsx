import { Mail, ArrowUp, ShieldCheck } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { personalInfo } from "@/lib/portfolioData";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-100/60 dark:bg-slate-950 text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-200 dark:border-slate-800/80">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-white font-extrabold text-xs shadow-sm">
                {personalInfo.monogram}
              </div>
              <span className="font-bold text-slate-900 dark:text-white text-lg">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium">
              {personalInfo.headline}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md leading-relaxed">
              Engineering high-reliability computational systems, machine learning pipelines, and responsive full-stack web applications with modern architectures.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#home" className="hover:text-cyan-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-cyan-500 transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-cyan-500 transition-colors">Technical Skills</a></li>
              <li><a href="#projects" className="hover:text-cyan-500 transition-colors">Featured Projects</a></li>
              <li><a href="#research" className="hover:text-cyan-500 transition-colors">Research &amp; AI Flow</a></li>
              <li><a href="#education" className="hover:text-cyan-500 transition-colors">Education &amp; Credentials</a></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-cyan-500 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-500" />
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-cyan-500 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-500" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-cyan-500 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repositories</span>
              </a>
              <div className="pt-2">
                <Link
                  href="/admin"
                  className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-400 hover:text-slate-200 transition-colors"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
                  <span>Admin Portal</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 dark:text-slate-400">
            &copy; 2026 {personalInfo.name}. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-400 dark:text-slate-500">
              B.Tech CSE &bull; MUIT Lucknow
            </span>
            <a
              href="#home"
              className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
