"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  UserCheck,
  Lock,
  Mail,
  Loader2,
  ArrowLeft,
  Eye,
  EyeOff,
  ShieldCheck,
  AlertCircle,
  Briefcase,
  Sparkles,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"credentials" | "demo">("credentials");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCredentialLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Invalid email or password");
      }

      router.push("/");
      router.refresh();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to sign in");
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = async (demoType: "recruiter" | "peer") => {
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ demoType }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Demo authentication failed");
      }

      router.push("/");
      router.refresh();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to sign in via demo");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center p-4 relative font-sans">
      {/* Background Radial Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Navigation */}
      <div className="w-full max-w-md flex items-center justify-between mb-6 px-1 relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Portfolio</span>
        </Link>

        <Link
          href="/admin/login"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
          <span>Admin Portal</span>
        </Link>
      </div>

      {/* Card Container */}
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl relative z-10">
        <div className="text-center mb-6">
          <div className="w-13 h-13 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-3 shadow-inner">
            <UserCheck className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Sign In to Portfolio</h1>
          <p className="text-xs text-slate-400 mt-1">
            Unlock project upvoting, community endorsements, and direct notes
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="grid grid-cols-2 p-1 bg-slate-800/80 rounded-2xl text-xs font-semibold mb-6">
          <button
            type="button"
            onClick={() => {
              setActiveTab("credentials");
              setError("");
            }}
            className={`py-2 rounded-xl transition-all ${
              activeTab === "credentials"
                ? "bg-slate-900 text-cyan-400 shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Email &amp; Password
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab("demo");
              setError("");
            }}
            className={`py-2 rounded-xl transition-all ${
              activeTab === "demo"
                ? "bg-slate-900 text-cyan-400 shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            1-Click Demo Profiles
          </button>
        </div>

        {error && (
          <div className="mb-5 p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2.5">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
            <span>{error}</span>
          </div>
        )}

        {/* TAB 1: STANDARD CREDENTIALS */}
        {activeTab === "credentials" && (
          <form onSubmit={handleCredentialLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 disabled:opacity-60 transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Verifying Credentials...</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Sign In</span>
                </>
              )}
            </button>
          </form>
        )}

        {/* TAB 2: INSTANT 1-CLICK DEMO PROFILES */}
        {activeTab === "demo" && (
          <div className="space-y-3">
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Explore authenticated interactions immediately without registering a new password:
            </p>

            {/* Recruiter Card */}
            <button
              type="button"
              disabled={loading}
              onClick={() => handleDemoLogin("recruiter")}
              className="w-full flex items-center justify-between p-4 rounded-2xl border border-slate-800 bg-slate-800/50 hover:border-cyan-500/50 hover:bg-slate-800 transition-all text-left group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center font-bold text-xs">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">
                    Sign In as Tech Recruiter
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Sarah Chen &bull; Apex AI Ventures
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950/60 text-indigo-400 border border-indigo-500/30">
                Instant
              </span>
            </button>

            {/* AI Peer Card */}
            <button
              type="button"
              disabled={loading}
              onClick={() => handleDemoLogin("peer")}
              className="w-full flex items-center justify-between p-4 rounded-2xl border border-slate-800 bg-slate-800/50 hover:border-cyan-500/50 hover:bg-slate-800 transition-all text-left group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center font-bold text-xs">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">
                    Sign In as AI Peer / Engineer
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Dr. Marcus Vance &bull; Compute Lab
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-500/30">
                Instant
              </span>
            </button>
          </div>
        )}

        {/* Footer Link to Register */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 text-center text-xs text-slate-400">
          Don&apos;t have an account yet?{" "}
          <Link
            href="/register"
            className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors ml-1"
          >
            Create free profile &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
