"use client";

import { useState, useEffect } from "react";
import {
  MessageSquareQuote,
  Send,
  Plus,
  Loader2,
  Sparkles,
  UserCheck,
  AlertCircle,
  X,
} from "lucide-react";

interface GuestbookItem {
  id: string;
  name: string;
  role: string;
  company?: string | null;
  content: string;
  avatar?: string | null;
  createdAt: string;
}

interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: "USER" | "RECRUITER" | "ADMIN";
  company?: string | null;
  avatar?: string | null;
}

interface GuestbookProps {
  currentUser: AuthUser | null;
  onOpenAuth: () => void;
  onShowToast: (message: string) => void;
}

const initialEndorsements: GuestbookItem[] = [
  {
    id: "init-1",
    name: "CodeAlpha Internship Lead",
    role: "Technical Supervisor",
    company: "CodeAlpha Virtual Program",
    content:
      "Gunjan demonstrated rigorous problem-solving during his Python Programming Internship. His code structure, understanding of machine learning pipelines, and attention to clean documentation were exceptional.",
    avatar: "CA",
    createdAt: "2026-08-15T10:00:00.000Z",
  },
  {
    id: "init-2",
    name: "Aakash Verma",
    role: "SIH Hackathon Teammate",
    company: "MUIT Lucknow",
    content:
      "Collaborated with Gunjan on AI-MediKiosk for the Smart India Hackathon. He architected the triage queueing logic and integrated computer vision sensors seamlessly. Great team player and deep thinker!",
    avatar: "AV",
    createdAt: "2026-09-02T14:30:00.000Z",
  },
  {
    id: "init-3",
    name: "Elena Rostova",
    role: "Senior AI Researcher",
    company: "Geospatial Data Forum",
    content:
      "Reviewed Gunjan's Sentinel-2 wetland segmentation architecture. Utilizing spectral water indices alongside convolutional feature extractors for environmental telemetry shows strong applied ML aptitude.",
    avatar: "ER",
    createdAt: "2026-09-12T09:15:00.000Z",
  },
];

export function Guestbook({ currentUser, onOpenAuth, onShowToast }: GuestbookProps) {
  const [entries, setEntries] = useState<GuestbookItem[]>(initialEndorsements);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form states
  const [name, setName] = useState("");
  const [role, setRole] = useState("Tech Recruiter");
  const [company, setCompany] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  // Fetch real entries on mount
  useEffect(() => {
    let ignore = false;
    const loadEntries = async () => {
      try {
        const res = await fetch("/api/guestbook");
        if (res.ok) {
          const data = await res.json();
          if (!ignore && data.entries && data.entries.length > 0) {
            // Combine with initial presets, avoiding duplicates
            const remoteIds = new Set(data.entries.map((e: GuestbookItem) => e.id));
            const merged = [
              ...data.entries,
              ...initialEndorsements.filter((e) => !remoteIds.has(e.id)),
            ];
            setEntries(merged);
          }
        }
      } catch (err) {
        console.error("Failed to load guestbook:", err);
      }
    };

    loadEntries();
    return () => {
      ignore = true;
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");

      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: currentUser ? currentUser.name : name,
          role: currentUser
            ? currentUser.role === "RECRUITER"
              ? "Tech Recruiter"
              : "AI Peer"
            : role,
          company: currentUser?.company || company,
          content,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to publish recommendation");
      }

      setEntries((prev) => [data.entry, ...prev]);
      setContent("");
      setName("");
      setCompany("");
      setModalOpen(false);
      onShowToast("Thank you! Your endorsement is now live on the wall.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to post recommendation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="endorsements" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Community &amp; Peer Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Visitor &amp; Recruiter <span className="gradient-text">Wall of Love</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Real feedback and technical evaluations from recruiters, hackathon collaborators, and researchers.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all shadow-md active:scale-95"
            >
              <Plus className="w-4 h-4" />
              <span>Leave an Endorsement</span>
            </button>
            {!currentUser && (
              <button
                type="button"
                onClick={onOpenAuth}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:border-cyan-500/40 transition-colors"
              >
                <UserCheck className="w-3.5 h-3.5 text-cyan-500" />
                <span>Quick Sign In</span>
              </button>
            )}
          </div>
        </div>

        {/* Endorsements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-600 to-blue-600 text-white font-bold text-xs flex items-center justify-center shadow-sm shrink-0">
                      {entry.avatar || entry.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {entry.name}
                      </h4>
                      <div className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
                        <span>{entry.role}</span>
                        {entry.company && (
                          <>
                            <span>&bull;</span>
                            <span className="text-cyan-600 dark:text-cyan-400">{entry.company}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                  &ldquo;{entry.content}&rdquo;
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Verified Note</span>
                <span>
                  {new Date(entry.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leave Endorsement Modal */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalOpen(false);
          }}
        >
          <div className="w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden animate-modal-in">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-5">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-500">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Leave a Recommendation for Gunjan
                  </h3>
                  <p className="text-xs text-slate-500">
                    Will appear live on the portfolio endorsement wall
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {currentUser ? (
                <div className="p-3 rounded-xl bg-cyan-500/5 border border-cyan-500/20 text-xs flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-600 text-white font-bold flex items-center justify-center text-xs">
                    {currentUser.avatar || currentUser.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      Posting as {currentUser.name}
                    </span>
                    <span className="block text-slate-500 text-[11px]">
                      {currentUser.role === "RECRUITER" ? "Tech Recruiter" : "AI Peer"} &bull;{" "}
                      {currentUser.company || "Community"}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. John Doe"
                        className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-cyan-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Your Role
                      </label>
                      <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-cyan-500"
                      >
                        <option value="Tech Recruiter">Tech Recruiter</option>
                        <option value="Engineering Manager">Engineering Manager</option>
                        <option value="AI Researcher">AI Researcher</option>
                        <option value="Software Engineer">Software Engineer</option>
                        <option value="Academic Peer">Academic Peer</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Organization / Company
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Google, Microsoft, Startup, University"
                      className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Your Endorsement
                  </label>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {content.length} / 500
                  </span>
                </div>
                <textarea
                  required
                  rows={4}
                  maxLength={500}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Share your thoughts on Gunjan's engineering skills, projects, work ethic, or interview impression..."
                  className="w-full p-3 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading || content.trim().length < 5}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all shadow-md disabled:opacity-50"
                >
                  {loading ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Send className="w-3.5 h-3.5" />
                  )}
                  <span>Publish Note</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
