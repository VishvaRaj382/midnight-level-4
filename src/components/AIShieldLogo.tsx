import React from "react";

interface AIShieldLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
}

export const AIShieldLogo: React.FC<AIShieldLogoProps> = ({
  className = "",
  size = "md",
  showText = true,
}) => {
  const sizeMap = {
    sm: { icon: "w-6 h-6", text: "text-lg", badge: "text-[10px] px-1.5 py-0.2" },
    md: { icon: "w-9 h-9", text: "text-xl", badge: "text-xs px-2 py-0.5" },
    lg: { icon: "w-12 h-12", text: "text-2xl", badge: "text-xs px-2.5 py-0.5" },
    xl: { icon: "w-16 h-16", text: "text-3xl", badge: "text-sm px-3 py-1" },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Glowing SVG Logo Shield */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-40 group-hover:opacity-80 transition duration-300"></div>
        <div className={`relative ${currentSize.icon} flex items-center justify-center bg-slate-950 rounded-xl border border-cyan-500/50 p-1 shadow-lg shadow-cyan-500/20`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" className="w-full h-full">
            <defs>
              <linearGradient id="logoBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
              <linearGradient id="logoCoreGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
            </defs>
            <path d="M256 48 L416 112 V240 C416 346 348 438 256 464 C164 438 96 346 96 240 V112 L256 48 Z" fill="#0b0f19" stroke="url(#logoBorderGrad)" strokeWidth="18" strokeLinejoin="round" />
            <path d="M256 86 L376 134 V236 C376 318 324 390 256 412 C188 390 136 318 136 236 V134 L256 86 Z" fill="#111827" stroke="url(#logoCoreGrad)" strokeWidth="6" strokeOpacity="0.8" />
            <g transform="translate(176, 176)">
              <path d="M44 80 V48 C44 26 62 8 80 8 C98 8 116 26 116 48 V80" stroke="url(#logoBorderGrad)" strokeWidth="14" strokeLinecap="round" fill="none" />
              <rect x="24" y="76" width="112" height="80" rx="16" fill="url(#logoCoreGrad)" stroke="#67e8f9" strokeWidth="5" />
              <circle cx="80" cy="108" r="12" fill="#0b0f19" />
              <polygon points="74,112 86,112 88,132 72,132" fill="#0b0f19" />
            </g>
          </svg>
        </div>
      </div>

      {/* Brand Name Typography */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className={`font-black tracking-tight text-white ${currentSize.text}`}>
              AIShield
            </span>
            <span className={`rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono font-bold ${currentSize.badge}`}>
              ZK Guard
            </span>
          </div>
          <span className="text-[10px] text-slate-400 font-medium tracking-wide">
            Powered by Midnight Preprod
          </span>
        </div>
      )}
    </div>
  );
};
