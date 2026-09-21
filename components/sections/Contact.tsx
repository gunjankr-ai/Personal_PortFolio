"use client";

import { useState } from "react";
import {
  Mail,
  Send,
  Loader2,
  Phone,
  MapPin,
  Copy,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { personalInfo } from "@/lib/portfolioData";
import { Toast } from "@/components/ui/Toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  website_bot_check?: string; // Honeypot
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  website_bot_check: "",
};

const quickSubjects = [
  "Hiring Opportunity",
  "AI / ML Consulting",
  "Full-Stack Web Project",
  "Research Collaboration",
  "General Inquiry",
];

interface ContactProps {
  onShowGlobalToast?: (message: string) => void;
}

export function Contact({ onShowGlobalToast }: ContactProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    show: boolean;
    type: "success" | "error";
    message: string;
  }>({
    show: false,
    type: "success",
    message: "",
  });

  const showNotification = (message: string, type: "success" | "error" = "success") => {
    if (onShowGlobalToast) {
      onShowGlobalToast(message);
    } else {
      setToast({ show: true, type, message });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showNotification(`Copied ${label} to clipboard!`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Client Validations
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      showNotification("Please provide your full name (minimum 2 characters).", "error");
      return;
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      showNotification("Please enter a valid email address.", "error");
      return;
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      showNotification("Please enter a subject (minimum 3 characters).", "error");
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      showNotification("Please write a message with at least 10 characters.", "error");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit message");
      }

      // Success
      showNotification(
        data.message || "Message sent successfully! A confirmation email has been dispatched."
      );
      setFormData(initialFormData);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "An unexpected error occurred. Please try again or email directly.";
      showNotification(errorMessage, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 relative bg-slate-50/70 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Inquiries &amp; Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let&apos;s Connect &amp; <span className="gradient-text">Collaborate</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Interested in hiring, research collaborations, or software consultation? Fill out the form below or reach out directly.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card with 1-click copy */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between group">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Email Address
                  </h4>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                    {personalInfo.email}
                  </p>
                </div>
              </a>
              <button
                type="button"
                onClick={() => handleCopy(personalInfo.email, "email")}
                className="p-2 rounded-xl text-slate-400 hover:text-cyan-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Copy email to clipboard"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3.5 group hover:border-blue-500/40 transition-all block"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  LinkedIn Profile
                </h4>
                <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                  gunjan-kumar-sah-3b0b28435
                </p>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3.5 group hover:border-cyan-500/40 transition-all block"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  GitHub Repositories
                </h4>
                <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                  gunjankr-ai
                </p>
              </div>
            </a>

            {/* Phone & Location Info with 1-click copy */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {personalInfo.phone}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(personalInfo.phone, "phone number")}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  title="Copy phone to clipboard"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Collaboration Readiness Banner */}
            <div className="p-5 rounded-2xl bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800/40 text-xs leading-relaxed text-cyan-950 dark:text-cyan-200">
              <div className="font-bold flex items-center gap-1.5 mb-1 text-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Collaboration Readiness
              </div>
              Actively available for undergraduate research roles, summer software engineering internships, AI/ML development, and open-source contributions.
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Send Me a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-5">
              Submissions are stored securely and trigger an immediate notification and automated confirmation.
            </p>

            {/* Quick Subject Chips */}
            <div className="mb-4">
              <span className="block text-[11px] font-semibold text-slate-400 mb-1.5">
                Quick Subject Select:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {quickSubjects.map((sub) => (
                  <button
                    key={sub}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, subject: sub }))}
                    className={`px-2.5 py-1 text-xs rounded-lg border transition-all ${
                      formData.subject === sub
                        ? "bg-cyan-500/10 border-cyan-500/40 text-cyan-600 dark:text-cyan-400 font-semibold"
                        : "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300"
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Anti-spam honeypot (hidden from real users) */}
              <input
                type="text"
                name="website_bot_check"
                value={formData.website_bot_check}
                onChange={handleChange}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/60 text-slate-900 dark:text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@domain.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/60 text-slate-900 dark:text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone (Optional) */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Phone Number <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/60 text-slate-900 dark:text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Internship Opportunity / Research"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/60 text-slate-900 dark:text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {formData.message.length} / 1000
                  </span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  maxLength={1000}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details about your inquiry, project scope, or opportunity..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/60 text-slate-900 dark:text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all resize-y"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 disabled:opacity-60 transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Processing Submission...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-center text-slate-400 dark:text-slate-500">
                🔒 Protected by in-memory rate limiting and server-side Zod validation. Zero API secrets exposed.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Floating Toast Notification (Local fallback) */}
      <Toast
        show={toast.show}
        type={toast.type}
        message={toast.message}
        onClose={() => setToast((prev) => ({ ...prev, show: false }))}
      />
    </section>
  );
}
