"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg border border-slate-700/50 bg-slate-800/40 animate-pulse" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative p-2 rounded-lg border border-slate-300 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 hover:border-cyan-500/50 hover:bg-cyan-500/10 dark:hover:bg-cyan-500/10 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
      aria-label="Toggle Color Theme"
      title={`Switch to ${isDark ? "Light" : "Dark"} Mode`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45 duration-300" />
      ) : (
        <Moon className="w-4 h-4 text-slate-700 transition-transform hover:-rotate-12 duration-300" />
      )}
    </button>
  );
}
