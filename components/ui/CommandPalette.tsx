"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Search,
  ArrowRight,
  Download,
  Moon,
  Sun,
  Mail,
  FolderGit2,
  BrainCircuit,
  GraduationCap,
  Award,
  FileText,
  UserCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "Quick Action" | "System";
  icon: React.ComponentType<{ className?: string }>;
  action: () => void;
  keywords?: string[];
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAuth: () => void;
  onShowToast: (message: string) => void;
}

export function CommandPalette({
  isOpen,
  onClose,
  onOpenAuth,
  onShowToast,
}: CommandPaletteProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { resolvedTheme, setTheme } = useTheme();

  const handleNavigate = useCallback(
    (hash: string) => {
      onClose();
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
    [onClose]
  );

  const commands: CommandItem[] = useMemo(() => [
    {
      id: "nav-home",
      title: "Jump to Home / Hero",
      category: "Navigation",
      icon: Sparkles,
      action: () => handleNavigate("#home"),
      keywords: ["start", "intro", "gunjan", "hero"],
    },
    {
      id: "nav-about",
      title: "Jump to About Me",
      category: "Navigation",
      icon: UserCheck,
      action: () => handleNavigate("#about"),
      keywords: ["bio", "background", "experience"],
    },
    {
      id: "nav-skills",
      title: "Jump to Technical Skills",
      category: "Navigation",
      icon: BrainCircuit,
      action: () => handleNavigate("#skills"),
      keywords: ["python", "pytorch", "nextjs", "react", "sql"],
    },
    {
      id: "nav-projects",
      title: "Jump to Featured Projects",
      category: "Navigation",
      icon: FolderGit2,
      action: () => handleNavigate("#projects"),
      keywords: ["wetland", "resumatch", "digital twin", "portfolio"],
    },
    {
      id: "nav-research",
      title: "Jump to Research & AI Flow",
      category: "Navigation",
      icon: BrainCircuit,
      action: () => handleNavigate("#research"),
      keywords: ["sentinel", "satellite", "wetland", "pipeline", "paper"],
    },
    {
      id: "nav-education",
      title: "Jump to Education & Timeline",
      category: "Navigation",
      icon: GraduationCap,
      action: () => handleNavigate("#education"),
      keywords: ["muit", "lucknow", "btech", "codealpha", "cgpa"],
    },
    {
      id: "nav-certifications",
      title: "Jump to Verified Certifications",
      category: "Navigation",
      icon: Award,
      action: () => handleNavigate("#certifications"),
      keywords: ["google cloud", "nasscom", "power bi", "credentials"],
    },
    {
      id: "nav-endorsements",
      title: "Jump to Endorsements Wall",
      category: "Navigation",
      icon: UserCheck,
      action: () => handleNavigate("#endorsements"),
      keywords: ["guestbook", "reviews", "recommendations", "feedback"],
    },
    {
      id: "nav-resume",
      title: "Jump to Resume Section",
      category: "Navigation",
      icon: FileText,
      action: () => handleNavigate("#resume"),
      keywords: ["cv", "curriculum vitae", "download"],
    },
    {
      id: "nav-contact",
      title: "Jump to Contact Form",
      category: "Navigation",
      icon: Mail,
      action: () => handleNavigate("#contact"),
      keywords: ["email", "phone", "hire", "message"],
    },
    {
      id: "action-resume",
      title: "Download Verified Resume (PDF)",
      category: "Quick Action",
      icon: Download,
      action: () => {
        onClose();
        const link = document.createElement("a");
        link.href = "/resume.pdf";
        link.download = "Gunjan_Kumar_Sah_Resume.pdf";
        link.click();
        onShowToast("Downloading Gunjan's verified Resume PDF...");
      },
      keywords: ["pdf", "cv", "resume"],
    },
    {
      id: "action-copy-email",
      title: "Copy Email Address (gunjansah63@gmail.com)",
      category: "Quick Action",
      icon: Mail,
      action: () => {
        onClose();
        navigator.clipboard.writeText("gunjansah63@gmail.com");
        onShowToast("Copied gunjansah63@gmail.com to clipboard!");
      },
      keywords: ["email", "copy", "clipboard"],
    },
    {
      id: "action-theme",
      title: `Toggle Theme (Switch to ${resolvedTheme === "dark" ? "Light" : "Dark"} Mode)`,
      category: "Quick Action",
      icon: resolvedTheme === "dark" ? Sun : Moon,
      action: () => {
        onClose();
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
        onShowToast(`Theme switched to ${resolvedTheme === "dark" ? "Light" : "Dark"} Mode`);
      },
      keywords: ["light", "dark", "theme", "mode", "color"],
    },
    {
      id: "action-auth",
      title: "Sign In / Switch Profile (Visitor, Recruiter, Admin)",
      category: "Quick Action",
      icon: UserCheck,
      action: () => {
        onClose();
        onOpenAuth();
      },
      keywords: ["login", "signin", "auth", "recruiter", "account"],
    },
    {
      id: "action-admin",
      title: "Admin Dashboard Control Center",
      category: "System",
      icon: ShieldCheck,
      action: () => {
        onClose();
        router.push("/admin");
      },
      keywords: ["admin", "login", "portal", "dashboard"],
    },
  ], [resolvedTheme, setTheme, onOpenAuth, onShowToast, onClose, handleNavigate, router]);

  const filtered = useMemo(() => {
    if (!query.trim()) return commands;
    const q = query.toLowerCase().trim();
    return commands.filter(
      (cmd) =>
        cmd.title.toLowerCase().includes(q) ||
        cmd.category.toLowerCase().includes(q) ||
        cmd.keywords?.some((k) => k.toLowerCase().includes(q))
    );
  }, [query, commands]);

  // Keyboard navigation & shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open
          setQuery("");
        }
      }

      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          filtered[selectedIndex].action();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, filtered, selectedIndex]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/60 backdrop-blur-md animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden animate-modal-in">
        {/* Search Header */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or search (e.g. projects, resume, theme)..."
            className="w-full pl-3 pr-8 py-1 bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
            autoFocus
          />
          <kbd className="hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-500">
            ESC
          </kbd>
        </div>

        {/* Command List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-slate-100 dark:divide-slate-800/50">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-500">
              No matching commands or destinations found for &quot;{query}&quot;.
            </div>
          ) : (
            filtered.map((cmd, idx) => {
              const Icon = cmd.icon;
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={cmd.id}
                  type="button"
                  onClick={cmd.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-colors ${
                    isSelected
                      ? "bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg border ${
                        isSelected
                          ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-500"
                          : "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold">{cmd.title}</div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">
                        {cmd.category}
                      </span>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      isSelected ? "translate-x-0.5 opacity-100" : "opacity-0"
                    }`}
                  />
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <span>Use &uarr; &darr; keys to navigate, Enter to select</span>
          <span className="font-mono">Gunjan Kumar Sah &bull; 2026</span>
        </div>
      </div>
    </div>
  );
}
