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
        <div className={`relative ${currentSize.icon} flex items-center justify-center bg-slate-950 rounded-xl border border-cyan-500/40 p-1`}>
          <img src="/logo.svg" alt="AIShield Logo" className="w-full h-full object-contain" />
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
