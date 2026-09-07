import React, { useState } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  Shield,
  Zap,
  Lock,
  Cpu,
  Layers,
  Terminal,
  ExternalLink,
  Sparkles,
  FileCode,
} from 'lucide-react';
import { PREPROD_CONFIG } from '../services/preprodNetwork';

export const VideoDemoPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  const demoSteps = [
    {
      title: 'Step 1: Midnight Lace Wallet Connect',
      description: 'Connects via DApp Connector API window.midnight.mnLace to Midnight Preprod Testnet.',
      icon: Shield,
      badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      codeSnippet: `const walletApi = await window.midnight.mnLace.enable();\nconst state = await walletApi.state();\nconsole.log('Connected Address:', state.address);`,
    },
    {
      title: 'Step 2: Off-Chain Compact ZK Witness Proving',
      description: 'Executes pureCircuits.deriveUserHash & verifyAndGrantAccess locally in Compact runtime.',
      icon: Lock,
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      codeSnippet: `const localSk = getStoredLocalSecretKey();\nconst userHash = pureCircuits.deriveUserHash(localSk, credBytes);\n// Identity & API secret tokens never leave browser memory!`,
    },
    {
      title: 'Step 3: Preprod Smart Contract On-Chain Disclose',
      description: `Submits zero-knowledge commitment transaction to contract ${PREPROD_CONFIG.contractAddress.slice(0, 14)}...`,
      icon: Layers,
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      codeSnippet: `const tx = await contract.verifyAndGrantAccess(AccessTier.PRO);\nconsole.log('Verified on Midnight Preprod Block #148920');`,
    },
    {
      title: 'Step 4: AI Gateway Interceptor Authorization',
      description: 'Protected enterprise AI gateway verifies active status on-chain before processing prompts.',
      icon: Cpu,
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      codeSnippet: `if (ledgerState.activeStatus === 'VERIFIED') {\n  return grantAiAccess('GPT-4o Enterprise ZK');\n}`,
    },
  ];

  const handleNextStep = () => {
    setCurrentStep((prev) => (prev + 1) % demoSteps.length);
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => (prev - 1 + demoSteps.length) % demoSteps.length);
  };

  return (
    <div className="space-y-6">
      {/* Demo Player Header Banner */}
      <div className="glass-panel p-6 border border-cyan-500/30 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Live Product Demo Showcase
            </div>
            <h2 className="text-2xl font-extrabold text-white">
              AIShield Zero-Knowledge <span className="gradient-text">Verification Walkthrough</span>
            </h2>
            <p className="text-slate-400 text-xs max-w-2xl mt-1">
              Watch step-by-step how AIShield executes off-chain Compact ZK circuit proofs and syncs verified state with the Midnight Preprod smart contract.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href="https://drive.google.com/file/d/1L86Haxqy2QMLckvpg8WGod2OQl_-uGaK/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-2 px-4 text-xs inline-flex items-center gap-1.5 bg-gradient-to-r from-cyan-500 to-purple-600 border-none text-white shadow-lg shadow-cyan-500/20"
            >
              <span>Watch Full Video Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://x.com/vishva_raj98207"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel py-2 px-4 text-xs inline-flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 border-slate-800"
            >
              <span>Product X Post</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Video Demo Simulation Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Visual Screen Simulation Frame */}
        <div className="lg:col-span-7 glass-panel p-6 space-y-4 border border-slate-800">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="ml-2 text-cyan-300">aishield-demo-simulation.mp4</span>
            </div>
            <span className="text-[11px] bg-slate-900 text-cyan-400 px-2 py-0.5 rounded border border-slate-800 font-mono">
              PREPROD TESTNET
            </span>
          </div>

          {/* Interactive Step Screen display */}
          <div className="bg-slate-950 rounded-xl p-6 border border-slate-800/80 min-h-[300px] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <Shield className="w-48 h-48 text-cyan-400" />
            </div>

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${demoSteps[currentStep].badgeColor}`}>
                  {demoSteps[currentStep].title}
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  Step {currentStep + 1} of {demoSteps.length}
                </span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed font-medium">
                {demoSteps[currentStep].description}
              </p>

              {/* Code Snippet Box */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-3 font-mono text-xs text-cyan-200">
                <div className="flex items-center gap-1.5 text-slate-500 text-[10px] uppercase mb-1">
                  <FileCode className="w-3 h-3 text-cyan-400" /> Runtime Code Executed:
                </div>
                <pre className="whitespace-pre-wrap overflow-x-auto text-[11px]">
                  {demoSteps[currentStep].codeSnippet}
                </pre>
              </div>
            </div>

            {/* Playback Progress Control Bar */}
            <div className="pt-4 border-t border-slate-900 mt-4 flex items-center justify-between gap-4 relative z-10">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setCurrentStep(0)}
                  className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Step indicator dots */}
              <div className="flex items-center gap-2">
                {demoSteps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentStep(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentStep ? 'w-8 bg-cyan-400' : 'w-2 bg-slate-800 hover:bg-slate-700'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevStep}
                  className="px-3 py-1 rounded bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white"
                >
                  Prev
                </button>
                <button
                  onClick={handleNextStep}
                  className="px-3 py-1 rounded bg-cyan-500/20 border border-cyan-500/40 text-xs text-cyan-300 hover:bg-cyan-500/30"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Walkthrough Milestones Sidebar */}
        <div className="lg:col-span-5 glass-panel p-6 space-y-4">
          <h3 className="text-lg font-bold text-cyan-300 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-cyan-400" />
            <span>Architecture Walkthrough</span>
          </h3>

          <div className="space-y-3 text-xs">
            {demoSteps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = idx === currentStep;
              return (
                <div
                  key={idx}
                  onClick={() => setCurrentStep(idx)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                    isActive
                      ? 'bg-cyan-500/10 border-cyan-400 text-white shadow-lg shadow-cyan-500/10'
                      : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${isActive ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-900 text-slate-500'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-200">{step.title}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-2">{step.description}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs space-y-2 text-slate-400">
            <div className="flex items-center justify-between text-slate-200 font-semibold">
              <span>Verified Preprod Smart Contract</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="font-mono text-[11px] text-cyan-400 break-all">
              {PREPROD_CONFIG.contractAddress}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
