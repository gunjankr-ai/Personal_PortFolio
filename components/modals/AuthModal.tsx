"use client";

import { useState, useEffect } from "react";
import {
  X,
  UserCheck,
  Lock,
  Mail,
  Building,
  ShieldCheck,
  Loader2,
  Eye,
  EyeOff,
  AlertCircle,
} from "lucide-react";

interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: "USER" | "RECRUITER" | "ADMIN";
  company?: string | null;
  avatar?: string | null;
}

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthSuccess: (user: AuthUser) => void;
  onShowToast: (message: string) => void;
}

export function AuthModal({
  isOpen,
  onClose,
  onAuthSuccess,
  onShowToast,
}: AuthModalProps) {
  const [tab, setTab] = useState<"demo" | "signin" | "register">("demo");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState<"USER" | "RECRUITER">("RECRUITER");
  const [adminPassword, setAdminPassword] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // 1-Click Demo Login
  const handleDemoLogin = async (demoType: "recruiter" | "peer" | "admin") => {
    try {
      setLoading(true);
      setError("");

      const payload =
        demoType === "admin"
          ? { demoType: "admin", password: adminPassword }
          : { demoType };

      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to sign in via demo profile");
      }

      onAuthSuccess(data.user);
      onShowToast(data.message || "Successfully signed in!");
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Authentication error");
    } finally {
      setLoading(false);
    }
  };

  // Sign In Form
  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");

      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Invalid credentials");
      }

      onAuthSuccess(data.user);
      onShowToast(`Welcome back, ${data.user.name}!`);
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to sign in");
    } finally {
      setLoading(false);
    }
  };

  // Register Form
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role, company }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to create account");
      }

      onAuthSuccess(data.user);
      onShowToast("Account created successfully!");
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden animate-modal-in">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Portfolio Authentication
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Unlock project upvoting, guestbook &amp; admin controls
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="grid grid-cols-3 p-1.5 m-4 bg-slate-100 dark:bg-slate-800/80 rounded-2xl text-xs font-semibold">
          <button
            type="button"
            onClick={() => {
              setTab("demo");
              setError("");
            }}
            className={`py-2 rounded-xl transition-all ${
              tab === "demo"
                ? "bg-white dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Instant Demo
          </button>
          <button
            type="button"
            onClick={() => {
              setTab("signin");
              setError("");
            }}
            className={`py-2 rounded-xl transition-all ${
              tab === "signin"
                ? "bg-white dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => {
              setTab("register");
              setError("");
            }}
            className={`py-2 rounded-xl transition-all ${
              tab === "register"
                ? "bg-white dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Register
          </button>
        </div>

        {/* Error notification banner */}
        {error && (
          <div className="mx-6 mb-3 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* TAB 1: INSTANT 1-CLICK DEMO */}
        {tab === "demo" && (
          <div className="p-6 pt-2 space-y-3.5">
            <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Explore authenticated interactions immediately without registering a new account:
            </div>

            {/* Recruiter Card */}
            <button
              type="button"
              disabled={loading}
              onClick={() => handleDemoLogin("recruiter")}
              className="w-full flex items-center justify-between p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all text-left group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 flex items-center justify-center font-bold text-xs">
                  HR
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                    Sign In as Tech Recruiter
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Sarah Chen &bull; Apex AI Ventures
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                1-Click
              </span>
            </button>

            {/* Peer Engineer Card */}
            <button
              type="button"
              disabled={loading}
              onClick={() => handleDemoLogin("peer")}
              className="w-full flex items-center justify-between p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all text-left group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 flex items-center justify-center font-bold text-xs">
                  AI
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                    Sign In as AI Peer / Engineer
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Dr. Marcus Vance &bull; Compute Lab
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                1-Click
              </span>
            </button>

            {/* Admin Gunjan Card */}
            <div className="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Admin Mode (Gunjan)</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  Secured
                </span>
              </div>
              <div className="flex gap-2">
                <input
                  type="password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  placeholder="Enter Master Admin Password..."
                  className="w-full px-3 py-1.5 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
                <button
                  type="button"
                  disabled={loading || !adminPassword}
                  onClick={() => handleDemoLogin("admin")}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 transition-colors disabled:opacity-50 shrink-0"
                >
                  Verify
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SIGN IN FORM */}
        {tab === "signin" && (
          <form onSubmit={handleSignIn} className="p-6 pt-2 space-y-3.5">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-9 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Sign In to Account"}
            </button>
          </form>
        )}

        {/* TAB 3: REGISTER FORM */}
        {tab === "register" && (
          <form onSubmit={handleRegister} className="p-6 pt-2 space-y-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alexandra Smith"
                className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@tech.com"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Role
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value as "USER" | "RECRUITER")}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="RECRUITER">Recruiter / Talent Lead</option>
                  <option value="USER">Software / AI Engineer</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Company / Institution (Optional)
              </label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Google, DeepMind, Microsoft..."
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Create Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="password"
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 6 characters"
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-50 mt-1"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Create Free Profile"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
