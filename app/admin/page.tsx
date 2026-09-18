"use client";

import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Mail,
  Trash2,
  CheckCircle2,
  Clock,
  Archive,
  RefreshCw,
  LogOut,
  X,
  Phone,
  Calendar,
  ExternalLink,
  Download,
  AlertTriangle,
  Inbox,
  Filter,
} from "lucide-react";
import { ContactMessageRecord } from "@/types/portfolio";

interface AdminStats {
  total: number;
  unread: number;
  read: number;
  archived: number;
  today: number;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [messages, setMessages] = useState<ContactMessageRecord[]>([]);
  const [stats, setStats] = useState<AdminStats>({
    total: 0,
    unread: 0,
    read: 0,
    archived: 0,
    today: 0,
  });
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [selectedMessage, setSelectedMessage] = useState<ContactMessageRecord | null>(null);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  // Fetch messages from backend API
  const fetchMessages = async () => {
    try {
      setLoading(true);
      const url = `/api/admin/messages?status=${statusFilter}&search=${encodeURIComponent(
        searchTerm
      )}`;
      const res = await fetch(url);

      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }

      const data = await res.json();
      if (data.messages) {
        setMessages(data.messages);
      }
      if (data.stats) {
        setStats(data.stats);
      }
    } catch (err) {
      console.error("Failed to load messages", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [statusFilter]);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchMessages();
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Mark status (READ, UNREAD, ARCHIVED)
  const handleUpdateStatus = async (id: string, newStatus: "READ" | "UNREAD" | "ARCHIVED") => {
    try {
      setActionLoading(id);
      const res = await fetch(`/api/admin/messages/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        setMessages((prev) =>
          prev.map((msg) => (msg.id === id ? { ...msg, status: newStatus } : msg))
        );
        if (selectedMessage && selectedMessage.id === id) {
          setSelectedMessage((prev) => (prev ? { ...prev, status: newStatus } : null));
        }
        // Update stats
        fetchMessages();
      }
    } catch (err) {
      console.error("Failed to update status", err);
    } finally {
      setActionLoading(null);
    }
  };

  // Delete message
  const handleDeleteMessage = async (id: string) => {
    if (!window.confirm("Are you sure you want to permanently delete this message?")) {
      return;
    }

    try {
      setActionLoading(id);
      const res = await fetch(`/api/admin/messages/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setMessages((prev) => prev.filter((msg) => msg.id !== id));
        if (selectedMessage && selectedMessage.id === id) {
          setSelectedMessage(null);
        }
        fetchMessages();
      }
    } catch (err) {
      console.error("Failed to delete message", err);
    } finally {
      setActionLoading(null);
    }
  };

  // Logout
  const handleLogout = async () => {
    try {
      await fetch("/api/admin/auth", { method: "DELETE" });
      router.push("/admin/login");
      router.refresh();
    } catch (err) {
      console.error("Failed to logout", err);
    }
  };

  // Export to CSV
  const handleExportCSV = () => {
    if (messages.length === 0) return;

    const headers = ["ID", "Name", "Email", "Phone", "Subject", "Message", "Status", "CreatedAt"];
    const rows = messages.map((m) => [
      m.id,
      `"${m.name.replace(/"/g, '""')}"`,
      `"${m.email.replace(/"/g, '""')}"`,
      `"${(m.phone || "").replace(/"/g, '""')}"`,
      `"${m.subject.replace(/"/g, '""')}"`,
      `"${m.message.replace(/"/g, '""')}"`,
      m.status,
      m.createdAt,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Gunjan_Portfolio_Inquiries_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Visitor Inquiries &amp; Messages
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Real-time management of contact form submissions, leads, and correspondence.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={fetchMessages}
            disabled={loading}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            title="Refresh submissions"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          </button>

          <button
            type="button"
            onClick={handleExportCSV}
            disabled={messages.length === 0}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors disabled:opacity-50"
            title="Download CSV"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Export CSV</span>
          </button>

          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs font-semibold text-rose-400 hover:bg-rose-500/20 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* KPI Stats Overview Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>Total Submissions</span>
            <Inbox className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-2xl font-extrabold text-white">{stats.total}</div>
          <div className="text-[11px] text-slate-500 mt-1">All-time received</div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>Unread Messages</span>
            <span className="w-2 h-2 rounded-full bg-amber-400" />
          </div>
          <div className="text-2xl font-extrabold text-amber-400">{stats.unread}</div>
          <div className="text-[11px] text-slate-500 mt-1">Requires your attention</div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>Messages Today</span>
            <Clock className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-extrabold text-emerald-400">{stats.today}</div>
          <div className="text-[11px] text-slate-500 mt-1">Received in last 24h</div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>Archived / Handled</span>
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-2xl font-extrabold text-slate-200">
            {stats.read + stats.archived}
          </div>
          <div className="text-[11px] text-slate-500 mt-1">Read &amp; archived leads</div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name, email, subject..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-800/80 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
          />
        </div>

        {/* Status Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          {[
            { id: "ALL", label: "All" },
            { id: "UNREAD", label: "Unread" },
            { id: "READ", label: "Read" },
            { id: "ARCHIVED", label: "Archived" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setStatusFilter(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                statusFilter === tab.id
                  ? "bg-cyan-600 text-white shadow-sm"
                  : "bg-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Messages Table Container */}
      <div className="rounded-3xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden">
        {loading && messages.length === 0 ? (
          <div className="p-16 text-center text-slate-400 text-sm">
            <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-cyan-400" />
            <span>Loading submissions from database...</span>
          </div>
        ) : messages.length === 0 ? (
          <div className="p-16 text-center text-slate-400 text-sm">
            <Inbox className="w-8 h-8 mx-auto mb-2 text-slate-600" />
            <p className="font-semibold text-slate-300">No submissions found</p>
            <p className="text-xs text-slate-500 mt-1">
              {searchTerm
                ? "Try searching with different terms or clear the filter."
                : "Messages submitted through the portfolio contact form will appear here."}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/60 text-slate-400 text-[11px] uppercase tracking-wider font-semibold">
                  <th className="py-3.5 px-4 sm:px-6">Status</th>
                  <th className="py-3.5 px-4 sm:px-6">Sender</th>
                  <th className="py-3.5 px-4 sm:px-6">Subject &amp; Snippet</th>
                  <th className="py-3.5 px-4 sm:px-6">Submitted On</th>
                  <th className="py-3.5 px-4 sm:px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {messages.map((msg) => {
                  const isUnread = msg.status === "UNREAD";
                  const dateStr = new Intl.DateTimeFormat("en-IN", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  }).format(new Date(msg.createdAt));

                  return (
                    <tr
                      key={msg.id}
                      className={`hover:bg-slate-800/40 transition-colors ${
                        isUnread ? "bg-cyan-950/20" : ""
                      }`}
                    >
                      {/* Status */}
                      <td className="py-4 px-4 sm:px-6 shrink-0">
                        {isUnread ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                            UNREAD
                          </span>
                        ) : msg.status === "READ" ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-slate-400 border border-slate-700">
                            READ
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            ARCHIVED
                          </span>
                        )}
                      </td>

                      {/* Sender */}
                      <td className="py-4 px-4 sm:px-6">
                        <div className="font-bold text-white">{msg.name}</div>
                        <div className="text-slate-400 text-xs font-mono">{msg.email}</div>
                        {msg.phone && (
                          <div className="text-slate-500 text-[11px] font-mono mt-0.5">
                            {msg.phone}
                          </div>
                        )}
                      </td>

                      {/* Subject & Snippet */}
                      <td
                        className="py-4 px-4 sm:px-6 cursor-pointer max-w-xs sm:max-w-md"
                        onClick={() => {
                          setSelectedMessage(msg);
                          if (msg.status === "UNREAD") {
                            handleUpdateStatus(msg.id, "READ");
                          }
                        }}
                      >
                        <div className="font-semibold text-slate-200 hover:text-cyan-400 transition-colors">
                          {msg.subject}
                        </div>
                        <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                          {msg.message}
                        </p>
                      </td>

                      {/* Date */}
                      <td className="py-4 px-4 sm:px-6 text-xs text-slate-400 font-mono whitespace-nowrap">
                        {dateStr}
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-4 sm:px-6 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-1.5">
                          {/* Toggle Read/Unread */}
                          {msg.status === "UNREAD" ? (
                            <button
                              type="button"
                              onClick={() => handleUpdateStatus(msg.id, "READ")}
                              disabled={actionLoading === msg.id}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                              title="Mark as Read"
                            >
                              <CheckCircle2 className="w-4 h-4" />
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={() => handleUpdateStatus(msg.id, "UNREAD")}
                              disabled={actionLoading === msg.id}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition-colors"
                              title="Mark as Unread"
                            >
                              <Clock className="w-4 h-4" />
                            </button>
                          )}

                          {/* Delete */}
                          <button
                            type="button"
                            onClick={() => handleDeleteMessage(msg.id)}
                            disabled={actionLoading === msg.id}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors"
                            title="Delete Message"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Visitor Message Detail Modal */}
      {selectedMessage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedMessage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl animate-modal-in overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800 mb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {selectedMessage.status}
                </span>
                <h3 className="text-xl font-bold text-white mt-1.5">
                  {selectedMessage.subject}
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  {new Date(selectedMessage.createdAt).toLocaleString("en-IN")}
                </p>
              </div>

              <button
                onClick={() => setSelectedMessage(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Sender Dossier */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs mb-6">
              <div>
                <span className="text-slate-500 font-medium block">Sender Name:</span>
                <strong className="text-white text-sm">{selectedMessage.name}</strong>
              </div>
              <div>
                <span className="text-slate-500 font-medium block">Email Address:</span>
                <a
                  href={`mailto:${selectedMessage.email}`}
                  className="text-cyan-400 hover:underline font-mono"
                >
                  {selectedMessage.email}
                </a>
              </div>
              <div>
                <span className="text-slate-500 font-medium block">Phone Number:</span>
                <span className="text-slate-300 font-mono">
                  {selectedMessage.phone || "Not provided"}
                </span>
              </div>
              <div>
                <span className="text-slate-500 font-medium block">Database ID:</span>
                <span className="text-slate-500 font-mono">{selectedMessage.id}</span>
              </div>
            </div>

            {/* Message Body */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Full Inquiry Message
              </h4>
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 text-sm leading-relaxed whitespace-pre-wrap">
                {selectedMessage.message}
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${selectedMessage.email}?subject=Re: ${encodeURIComponent(
                    selectedMessage.subject
                  )}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 transition-colors shadow-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>Reply via Email</span>
                </a>

                {selectedMessage.status === "UNREAD" ? (
                  <button
                    onClick={() => handleUpdateStatus(selectedMessage.id, "READ")}
                    className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors"
                  >
                    Mark as Read
                  </button>
                ) : (
                  <button
                    onClick={() => handleUpdateStatus(selectedMessage.id, "UNREAD")}
                    className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors"
                  >
                    Mark as Unread
                  </button>
                )}
              </div>

              <button
                onClick={() => handleDeleteMessage(selectedMessage.id)}
                className="px-3 py-2 rounded-xl text-xs font-semibold text-rose-400 hover:bg-rose-500/10 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
