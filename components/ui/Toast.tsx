"use client";

import { CheckCircle2, AlertCircle, X } from "lucide-react";

interface ToastProps {
  show: boolean;
  type: "success" | "error";
  message: string;
  onClose: () => void;
}

export function Toast({ show, type, message, onClose }: ToastProps) {
  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md animate-modal-in">
      <div
        className={`flex items-start gap-3 p-4 rounded-xl shadow-2xl border backdrop-blur-md ${
          type === "success"
            ? "bg-slate-900/95 border-emerald-500/50 text-slate-100"
            : "bg-slate-900/95 border-rose-500/50 text-slate-100"
        }`}
      >
        {type === "success" ? (
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
        ) : (
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
        )}

        <div className="text-sm font-medium pr-2 leading-relaxed">{message}</div>

        <button
          onClick={onClose}
          className="text-slate-400 hover:text-slate-200 transition-colors shrink-0 ml-auto"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
