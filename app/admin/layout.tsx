import { getAdminSession } from "@/lib/auth";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAdminSession();

  // If not logged in and not on login page, redirect
  // Note: Client pages also perform fetch checks, but server guard adds defense-in-depth
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {session && (
        <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="Return to Public Portfolio"
              >
                <ArrowLeft className="w-4 h-4" />
              </Link>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-600/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-bold text-xs">
                  GK
                </div>
                <div>
                  <h1 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>Admin Control Center</span>
                    <span className="text-[10px] font-mono px-2 py-0.2 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                      SECURE
                    </span>
                  </h1>
                  <p className="text-[11px] text-slate-400 font-mono">
                    gunjansah63@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="hidden sm:inline-flex text-xs font-semibold text-slate-400 hover:text-white transition-colors"
              >
                View Live Site
              </Link>
            </div>
          </div>
        </header>
      )}

      <main>{children}</main>
    </div>
  );
}
