import React from 'react';
import { Sparkles, Twitter, ExternalLink, Shield, Palette, Copy, Check } from 'lucide-react';
import { AIShieldLogo } from './AIShieldLogo';

export const BrandKitView: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null);

  const posts = [
    {
      title: 'Post 1: Launch Announcement',
      content: `🔒 Announcing AIShield on @MidnightNtwrk Preprod!

AIShield enables users to prove identity & API authorization rights for enterprise AI models using Zero-Knowledge proofs.

Raw credentials & secrets NEVER leave your device.

📍 Contract: 0x02008f3a...0d7e
🌐 Demo: https://vishvaraj382.github.io/midnight-level-4/

#MidnightNetwork #Privacy #ZeroKnowledge #Cardano`,
    },
    {
      title: 'Post 2: Technical Deep Dive',
      content: `⚡ How AIShield leverages Compact 0.23 ZK Circuits on Midnight:

1️⃣ Witnesses: localSecretKey & rawIdentitySecret kept strictly off-chain
2️⃣ Proving: deriveUserHash generates persistent 32-byte commitment
3️⃣ Disclose: On-chain ledger receives only ZK proof & verified access tier

Zero data leakage for AI users! 🚀`,
    },
  ];

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="glass-panel p-6 border border-cyan-500/20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Official Brand Identity & Media Kit
            </div>
            <h2 className="text-2xl font-extrabold text-white">
              AIShield <span className="gradient-text">Brand & Social Assets</span>
            </h2>
            <p className="text-slate-400 text-xs max-w-2xl mt-1">
              Design specifications, logo vector assets, color tokens, and ready-to-post Product X social copy.
            </p>
          </div>

          <a
            href="https://x.com/vishva_raj98207"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-2 px-4 text-xs inline-flex items-center gap-1.5"
          >
            <Twitter className="w-3.5 h-3.5" />
            <span>@vishva_raj98207</span>
          </a>
        </div>
      </div>

      {/* Logo & Colors Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Vector Logo Showcase */}
        <div className="lg:col-span-6 glass-panel p-6 space-y-4 border border-slate-800">
          <h3 className="text-lg font-bold text-cyan-300 flex items-center gap-2">
            <Shield className="w-5 h-5 text-cyan-400" />
            <span>Official Vector Logo Asset</span>
          </h3>

          <div className="bg-slate-950 p-8 rounded-xl border border-slate-800 flex items-center justify-center min-h-[180px]">
            <AIShieldLogo size="xl" showText={true} />
          </div>
        </div>

        {/* Color System Tokens */}
        <div className="lg:col-span-6 glass-panel p-6 space-y-4 border border-slate-800">
          <h3 className="text-lg font-bold text-cyan-300 flex items-center gap-2">
            <Palette className="w-5 h-5 text-purple-400" />
            <span>Cyber Midnight Color Tokens</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <div className="w-full h-8 rounded bg-[#0b0f19] border border-slate-800 mb-2"></div>
              <div className="font-bold text-slate-200">Midnight Abyss</div>
              <div className="text-[11px] text-slate-400 font-mono">#0b0f19</div>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <div className="w-full h-8 rounded bg-[#06b6d4] shadow-lg shadow-cyan-500/20 mb-2"></div>
              <div className="font-bold text-slate-200">Cyber Cyan</div>
              <div className="text-[11px] text-slate-400 font-mono">#06b6d4</div>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <div className="w-full h-8 rounded bg-[#8b5cf6] shadow-lg shadow-purple-500/20 mb-2"></div>
              <div className="font-bold text-slate-200">Violet Pulse</div>
              <div className="text-[11px] text-slate-400 font-mono">#8b5cf6</div>
            </div>
          </div>
        </div>
      </div>

      {/* Product X Ready Posts */}
      <div className="glass-panel p-6 space-y-4 border border-slate-800">
        <h3 className="text-lg font-bold text-cyan-300 flex items-center gap-2">
          <Twitter className="w-5 h-5 text-cyan-400" />
          <span>Product X Campaign Posts</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-cyan-400">{post.title}</span>
                <button
                  onClick={() => handleCopy(post.content, idx)}
                  className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-cyan-400 flex items-center gap-1"
                >
                  {copiedIndex === idx ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" /> Copy Post
                    </>
                  )}
                </button>
              </div>

              <pre className="font-sans text-xs text-slate-300 whitespace-pre-wrap bg-slate-900/60 p-3 rounded-lg border border-slate-800/80 leading-relaxed">
                {post.content}
              </pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
