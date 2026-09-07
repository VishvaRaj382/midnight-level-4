import React from 'react';
import { ExternalLink, Twitter, ShieldCheck } from 'lucide-react';
import { AIShieldLogo } from './AIShieldLogo.js';

interface LayoutProps {
  children: React.ReactNode;
  headerRight?: React.ReactNode;
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  headerRight,
  activeTab = 'guard',
  onTabChange,
}) => {
  const tabs = [
    { id: 'guard', label: '🛡️ ZK Guard & Prover' },
    { id: 'demo', label: '🎥 Video Demo Showcase' },
    { id: 'feedback', label: '📊 Living Feedback Loop' },
    { id: 'users', label: '👥 70 Preprod User Directory' },
    { id: 'brand', label: '🎨 Brand Kit & Vector Logo' },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#0b0f19] text-slate-100 font-sans">
      {/* Navigation Header */}
      <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between gap-4">
            {/* Logo & Brand Title */}
            <div className="flex items-center gap-3">
              <AIShieldLogo size="md" showText={false} />
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-2">
                  AIShield
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-semibold uppercase">
                    Level 6 Preprod
                  </span>
                </span>
                <p className="text-[11px] text-slate-400 hidden sm:block">
                  Confidential AI Identity & Access Control on Midnight
                </p>
              </div>
            </div>

            {/* Right Action Bar */}
            <div className="flex items-center gap-3">
              <a
                href="https://x.com/vishva_raj98207"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 text-xs font-semibold transition-all"
              >
                <Twitter className="w-3.5 h-3.5 text-cyan-400" />
                <span>@vishva_raj98207</span>
              </a>

              {headerRight && <div>{headerRight}</div>}
            </div>
          </div>

          {/* Navigation Bar Tabs */}
          {onTabChange && (
            <div className="flex items-center gap-1 overflow-x-auto py-2 border-t border-slate-900 text-xs font-medium no-scrollbar">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => onTabChange(t.id)}
                  className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === t.id
                      ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-semibold shadow-md shadow-cyan-500/10'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Built for Midnight Builder Challenge — Level 6 Preprod Verified Deployment</span>
          </div>

          <div className="flex items-center gap-6 text-slate-400">
            <a
              href="https://x.com/vishva_raj98207"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 flex items-center gap-1 transition-colors"
            >
              <span>Product X</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://midnight.network"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 flex items-center gap-1 transition-colors"
            >
              <span>Midnight Network</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://docs.midnight.network"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 flex items-center gap-1 transition-colors"
            >
              <span>Compact Docs</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
