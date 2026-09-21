"use client";

import { useState, useEffect, useCallback } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Projects } from "@/components/sections/Projects";
import { Research } from "@/components/sections/Research";
import { Guestbook } from "@/components/sections/Guestbook";
import { Certifications } from "@/components/sections/Certifications";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { AuthModal } from "@/components/modals/AuthModal";
import { Toast } from "@/components/ui/Toast";

interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: "USER" | "RECRUITER" | "ADMIN";
  company?: string | null;
  avatar?: string | null;
}

export default function HomePage() {
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [toast, setToast] = useState<{
    show: boolean;
    type: "success" | "error";
    message: string;
  }>({
    show: false,
    type: "success",
    message: "",
  });

  const showToast = useCallback(
    (message: string, type: "success" | "error" = "success") => {
      setToast({ show: true, type, message });
    },
    []
  );

  // Check current session on mount
  useEffect(() => {
    let ignore = false;
    const checkSession = async () => {
      try {
        const res = await fetch("/api/auth/me");
        if (res.ok) {
          const data = await res.json();
          if (!ignore && data.authenticated && data.user) {
            setCurrentUser(data.user);
          }
        }
      } catch (err) {
        console.error("Session verification error:", err);
      }
    };

    checkSession();
    return () => {
      ignore = true;
    };
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      setCurrentUser(null);
      showToast("Signed out successfully.");
    } catch (err) {
      console.error("Logout error:", err);
      showToast("Failed to sign out", "error");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 2px Gradient Reading Depth Progress Bar */}
      <ScrollProgress />

      {/* Sticky Responsive Header */}
      <Navbar
        currentUser={currentUser}
        onOpenAuth={() => setAuthModalOpen(true)}
        onOpenCommand={() => setCommandPaletteOpen(true)}
        onLogout={handleLogout}
      />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero onShowToast={showToast} />
        <About />
        <Skills />
        <Education />
        <Projects onShowToast={showToast} />
        <Research />
        <Guestbook
          currentUser={currentUser}
          onOpenAuth={() => setAuthModalOpen(true)}
          onShowToast={showToast}
        />
        <Certifications />
        <ResumeSection />
        <Contact onShowGlobalToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Spotlight Command Palette (Ctrl+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenAuth={() => setAuthModalOpen(true)}
        onShowToast={showToast}
      />

      {/* Unified Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onAuthSuccess={(user) => {
          setCurrentUser(user);
        }}
        onShowToast={showToast}
      />

      {/* Global Interactive Toast Notification */}
      <Toast
        show={toast.show}
        type={toast.type}
        message={toast.message}
        onClose={() => setToast((prev) => ({ ...prev, show: false }))}
      />
    </div>
  );
}
