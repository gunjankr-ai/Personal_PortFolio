"use client";

import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  Search,
  UserCheck,
  LogOut,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { personalInfo } from "@/lib/portfolioData";

interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: "USER" | "RECRUITER" | "ADMIN";
  company?: string | null;
  avatar?: string | null;
}

interface NavbarProps {
  currentUser: AuthUser | null;
  onOpenAuth: () => void;
  onOpenCommand: () => void;
  onLogout: () => void;
}

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Endorsements", href: "#endorsements" },
  { name: "Certifications", href: "#certifications" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export function Navbar({
  currentUser,
  onOpenAuth,
  onOpenCommand,
  onLogout,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

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

  // Close user dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 dark:bg-slate-950/85 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800/80 py-2.5"
          : "bg-transparent py-3.5 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 focus:outline-none shrink-0"
          aria-label="Gunjan Kumar Sah Homepage"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-white font-extrabold text-xs sm:text-sm shadow-md group-hover:scale-105 transition-transform">
            {personalInfo.monogram}
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono hidden xl:inline-block -mt-0.5">
              AI Engineer &bull; Full-Stack
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? "text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 font-semibold"
                    : "text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100/60 dark:hover:bg-slate-800/60"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Command Palette + Theme + Auth / Profile */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Spotlight Command Palette trigger */}
          <button
            type="button"
            onClick={onOpenCommand}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-900/60 text-slate-500 dark:text-slate-400 hover:text-cyan-500 hover:border-cyan-500/40 text-xs transition-colors"
            title="Open Command Palette (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden md:inline font-medium">Search</span>
            <kbd className="hidden md:inline-block text-[10px] font-mono px-1 py-0.2 rounded bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700">
              Ctrl+K
            </kbd>
          </button>

          <ThemeToggle />

          {/* User Profile / Sign In */}
          {currentUser ? (
            <div className="relative" ref={userMenuRef}>
              <button
                type="button"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 p-1.5 sm:px-3 sm:py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/60 dark:bg-slate-900/60 hover:border-cyan-500/40 transition-colors text-xs"
              >
                <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-cyan-600 to-blue-600 text-white font-bold text-[10px] flex items-center justify-center">
                  {currentUser.avatar || currentUser.name.slice(0, 2).toUpperCase()}
                </div>
                <span className="hidden sm:inline font-semibold text-slate-800 dark:text-slate-200 max-w-[100px] truncate">
                  {currentUser.name}
                </span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {/* User Dropdown Menu */}
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-2 z-50 animate-modal-in">
                  <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800/80 mb-1">
                    <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                      {currentUser.name}
                    </div>
                    <div className="text-[11px] text-slate-400 truncate">
                      {currentUser.email}
                    </div>
                    <span className="inline-block mt-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                      {currentUser.role}
                    </span>
                  </div>

                  {currentUser.role === "ADMIN" && (
                    <a
                      href="/admin"
                      className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Admin Control Center</span>
                    </a>
                  )}

                  <a
                    href="#endorsements"
                    onClick={() => setUserMenuOpen(false)}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <UserCheck className="w-3.5 h-3.5 text-cyan-500" />
                    <span>My Endorsements</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setUserMenuOpen(false);
                      onLogout();
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-rose-500 hover:bg-rose-500/10 transition-colors mt-1"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              type="button"
              onClick={onOpenAuth}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors shadow-sm"
            >
              <UserCheck className="w-3.5 h-3.5 text-cyan-500" />
              <span>Sign In</span>
            </button>
          )}

          {/* Let's Connect CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all shadow-sm active:scale-95"
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl animate-modal-in px-4 pt-3 pb-6 shadow-xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 rounded-xl text-xs font-medium transition-colors ${
                    isActive
                      ? "text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/50 font-semibold"
                      : "text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3 flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommand();
                }}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Command Menu</span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 shadow-md"
              >
                <span>Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
