"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { personalInfo } from "@/lib/portfolioData";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Certifications", href: "#certifications" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // ScrollSpy active link detection
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-950/85 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800/80 py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 focus:outline-none"
          aria-label="Gunjan Kumar Sah Homepage"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-white font-extrabold text-sm shadow-md group-hover:scale-105 transition-transform">
            {personalInfo.monogram}
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 dark:text-white text-sm sm:text-base tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono hidden sm:inline-block -mt-0.5">
              AI Engineer &bull; Full-Stack
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all ${
                  isActive
                    ? "text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40"
                    : "text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100/60 dark:hover:bg-slate-800/60"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Theme Toggle + Contact Button + Mobile Menu Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <ThemeToggle />

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all shadow-sm hover:shadow-cyan-500/20 active:scale-95"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Over Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl animate-modal-in px-4 pt-3 pb-6 shadow-xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/50 font-semibold"
                      : "text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 shadow-md"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
