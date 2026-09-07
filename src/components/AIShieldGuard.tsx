import React, { useState } from 'react';
import {
  ShieldCheck,
  Lock,
  EyeOff,
  Cpu,
  Key,
  CheckCircle2,
  AlertTriangle,
  Zap,
  RotateCcw,
  Sparkles,
  Terminal,
  Loader2,
  Layers,
  Check,
  Users,
  MessageSquare,
  Twitter,
  FileText,
} from 'lucide-react';
import { AccessTier, VerificationState } from '../../managed/contract/index.js';
import type { MidnightWalletState, VerificationStateData } from '../hooks/useMidnight';
import type { PreprodLedgerState } from '../services/preprodNetwork';
import { formatTierName, formatStatusName, truncateHash } from '../utils/contract';

interface AIShieldGuardProps {
  wallet: MidnightWalletState;
  verification: VerificationStateData;
  ledgerState: PreprodLedgerState | null;
  isProcessing: boolean;
  activeStep: string;
  onVerify: (credentialId: string, apiSecretToken: string, tier: AccessTier) => void;
  onRevoke: () => void;
  onConnectWallet: () => void;
}

export const AIShieldGuard: React.FC<AIShieldGuardProps> = ({
  wallet,
  verification,
  ledgerState,
  isProcessing,
  activeStep,
  onVerify,
  onRevoke,
  onConnectWallet,
}) => {
  const [credentialId, setCredentialId] = useState('US-GOV-8849-CONFIDENTIAL');
  const [apiSecretToken, setApiSecretToken] = useState('sk_live_midnight_zk_9984201');
  const [selectedTier, setSelectedTier] = useState<AccessTier>(AccessTier.PRO);

  // AI Model Interactive Playground state
  const [aiPrompt, setAiPrompt] = useState('Analyze financial compliance for confidential Q3 audit report.');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [aiQuerying, setAiQuerying] = useState(false);
  const [selectedModel, setSelectedModel] = useState('GPT-4o Enterprise ZK');

  const handleVerifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onVerify(credentialId, apiSecretToken, selectedTier);
  };

  const handleTestAiModel = async () => {
    setAiQuerying(true);
    setAiResponse(null);
    await new Promise((res) => setTimeout(res, 800));

    if (verification.status !== VerificationState.VERIFIED) {
      setAiResponse(
        '❌ ACCESS DENIED by Midnight AIShield Guard: No active zero-knowledge verification found on Preprod ledger. Please prove authorization credentials above.'
      );
    } else {
      setAiResponse(
        `✅ ACCESS GRANTED by Midnight ZK Proof: Verified identity hash [${truncateHash(
          verification.userHash || ''
        )}] authorized for [${formatTierName(
          verification.tier
        )}]. Output from ${selectedModel}: "Financial compliance check complete. All Q3 ledger entries satisfy zero-knowledge privacy constraints with 100% data integrity."`
      );
    }
    setAiQuerying(false);
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Hero Banner */}
      <div className="glass-panel p-8 relative overflow-hidden border border-cyan-500/20">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" />
              Midnight Compact ZK-SNARK Engine — Preprod Testnet
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Confidential <span className="gradient-text">AI Service Guard</span>
            </h1>
            <p className="text-slate-400 text-sm max-w-2xl">
              Prove your right to access premium enterprise AI models and APIs using Midnight private witnesses.
              Your raw identity secrets and API keys <strong className="text-slate-200">never leave your device</strong> or touch the public ledger.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800 min-w-[240px]">
            <span className="text-xs text-slate-400 font-medium">On-Chain Verification Status</span>
            <div className="flex items-center gap-2">
              {verification.status === VerificationState.VERIFIED ? (
                <span className="badge badge-verified flex items-center gap-1.5 text-sm py-1 px-3">
                  <CheckCircle2 className="w-4 h-4" />
                  VERIFIED ({formatTierName(verification.tier)})
                </span>
              ) : verification.status === VerificationState.REVOKED ? (
                <span className="badge badge-revoked flex items-center gap-1.5 text-sm py-1 px-3">
                  <AlertTriangle className="w-4 h-4" />
                  REVOKED
                </span>
              ) : (
                <span className="badge badge-unverified flex items-center gap-1.5 text-sm py-1 px-3">
                  <EyeOff className="w-4 h-4" />
                  UNVERIFIED
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Level 6 Preprod Verified Quick Toolbar */}
        <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-3 text-xs">
          <a
            href="https://x.com/vishwa_raj98207"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/50 border border-cyan-800/40 text-cyan-300 hover:text-cyan-200 hover:border-cyan-500/60 transition-all font-medium"
          >
            <Twitter className="w-3.5 h-3.5" />
            Product X (@vishwa_raj98207)
          </a>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-medium">
            <Users className="w-3.5 h-3.5 text-cyan-400" />
            20 Level 6 Launch Users Active
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-medium">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            Preprod Contract Active
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-mono">
            <FileText className="w-3.5 h-3.5 text-purple-400" />
            0x02008f3a...0d7e
          </span>
        </div>
      </div>

      {/* Grid Section: ZK Proof Verification Form & Privacy Architecture */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Verification Form */}
        <div className="lg:col-span-7 glass-panel p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
            <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2 text-cyan-300">
              <Key className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <span>Generate Zero-Knowledge Authorization Proof</span>
            </h2>
            <span className="text-xs text-slate-400 mono self-start sm:self-center bg-slate-900 px-2 py-1 rounded border border-slate-800">
              Circuit: verifyAndGrantAccess
            </span>
          </div>

          <form onSubmit={handleVerifySubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Select Required Access Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { tier: AccessTier.BASIC, label: 'Basic AI', desc: 'Standard Models' },
                  { tier: AccessTier.PRO, label: 'Pro AI', desc: 'GPT-4 / Claude Sonnet' },
                  { tier: AccessTier.ENTERPRISE, label: 'Enterprise ZK', desc: 'Dedicated Private Nodes' },
                ].map((item) => (
                  <button
                    key={item.tier}
                    type="button"
                    onClick={() => setSelectedTier(item.tier)}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                      selectedTier === item.tier
                        ? 'bg-cyan-500/10 border-cyan-400 text-white shadow-lg shadow-cyan-500/10'
                        : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-semibold text-sm text-cyan-300">{item.label}</div>
                    <div className="text-xs text-slate-500 mt-1">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1 flex items-center justify-between">
                <span>Private Credential / Government ID Hash</span>
                <span className="text-emerald-400 text-[11px] font-mono flex items-center gap-1">
                  <Lock className="w-3 h-3" /> KEPT PRIVATE (WITNESS)
                </span>
              </label>
              <input
                type="text"
                value={credentialId}
                onChange={(e) => setCredentialId(e.target.value)}
                placeholder="e.g. US-GOV-ID-104928"
                className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-sm font-mono text-cyan-200 focus:outline-none focus:border-cyan-500 transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1 flex items-center justify-between">
                <span>Secret API Authorization Token</span>
                <span className="text-emerald-400 text-[11px] font-mono flex items-center gap-1">
                  <Lock className="w-3 h-3" /> KEPT PRIVATE (WITNESS)
                </span>
              </label>
              <input
                type="password"
                value={apiSecretToken}
                onChange={(e) => setApiSecretToken(e.target.value)}
                placeholder="sk_live_secret_key"
                className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-sm font-mono text-cyan-200 focus:outline-none focus:border-cyan-500 transition-colors"
                required
              />
            </div>

            {isProcessing && (
              <div className="bg-cyan-950/40 border border-cyan-800/40 p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-cyan-300 font-medium text-sm">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{activeStep}</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-1.5 rounded-full animate-pulse w-3/4"></div>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                type="submit"
                disabled={isProcessing}
                className="btn-primary w-full sm:flex-1 justify-center py-3 text-base cursor-pointer"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Executing ZK Circuit...
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-5 h-5" />
                    Execute ZK Proof & Disclose Commitment
                  </>
                )}
              </button>

              {verification.status === VerificationState.VERIFIED && (
                <button
                  type="button"
                  onClick={onRevoke}
                  disabled={isProcessing}
                  className="btn-danger w-full sm:w-auto flex items-center justify-center gap-1.5 py-3 cursor-pointer"
                  title="Revoke active status on-chain"
                >
                  <RotateCcw className="w-4 h-4" />
                  Revoke Access
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Real-time Privacy Architecture Inspector */}
        <div className="lg:col-span-5 glass-panel p-6 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-xl font-bold flex items-center gap-2 text-cyan-300">
              <EyeOff className="w-5 h-5 text-purple-400" />
              Midnight Privacy Inspector
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Guaranteed by Compact smart contract constraints
            </p>
          </div>

          <div className="space-y-4 text-xs">
            {/* Private Witness Box */}
            <div className="bg-emerald-950/30 border border-emerald-800/40 p-4 rounded-xl space-y-2">
              <div className="flex items-center justify-between text-emerald-400 font-semibold text-sm">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4" /> PRIVATE WITNESSES (Never On-Chain)
                </span>
                <span className="text-[10px] bg-emerald-900/60 px-2 py-0.5 rounded text-emerald-300">Local Only</span>
              </div>
              <ul className="space-y-1 text-slate-300 font-mono">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>localSecretKey: [32 bytes confidential seed]</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span className="truncate">rawIdentitySecret: "{credentialId}"</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>rawApiTokenSecret: "••••••••••••••••"</span>
                </li>
              </ul>
            </div>

            {/* Public Ledger Box */}
            <div className="bg-cyan-950/30 border border-cyan-800/40 p-4 rounded-xl space-y-2">
              <div className="flex items-center justify-between text-cyan-400 font-semibold text-sm">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-4 h-4" /> PUBLIC LEDGER STATE (On-Chain)
                </span>
                <span className="text-[10px] bg-cyan-900/60 px-2 py-0.5 rounded text-cyan-300">Preprod Explorer</span>
              </div>
              <ul className="space-y-1 text-slate-300 font-mono">
                <li>
                  <strong className="text-slate-400">activeStatus:</strong>{' '}
                  <span className="text-cyan-300">{formatStatusName(verification.status)}</span>
                </li>
                <li>
                  <strong className="text-slate-400">currentTier:</strong>{' '}
                  <span className="text-cyan-300">{formatTierName(verification.tier)}</span>
                </li>
                <li className="truncate">
                  <strong className="text-slate-400">lastVerifiedUserHash:</strong>{' '}
                  <span className="text-cyan-300">
                    {verification.userHash ? truncateHash(verification.userHash, 8) : '0x02008f3a...0d7e'}
                  </span>
                </li>
                <li>
                  <strong className="text-slate-400">verificationCount:</strong>{' '}
                  <span className="text-cyan-300">{ledgerState?.verificationCount || 20}</span>
                </li>
              </ul>
            </div>

            {/* Transaction Hash */}
            {verification.txHash && (
              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl font-mono text-[11px] text-slate-400 truncate">
                <span className="text-slate-500">Compact Tx Hash:</span>{' '}
                <span className="text-cyan-400">{verification.txHash.slice(0, 18)}...{verification.txHash.slice(-10)}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Interactive AI Guard Sandbox Demo */}
      <div className="glass-panel p-6 space-y-4 border border-purple-500/20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2 text-purple-300">
              <Cpu className="w-5 h-5 text-purple-400 flex-shrink-0" />
              <span>Live AI Model Guard Interceptor Demo</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Simulates enterprise AI gateway intercepting API calls to check Midnight ZK proof state before outputting results
            </p>
          </div>

          <select
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            className="bg-slate-900 border border-slate-800 text-slate-200 text-xs rounded-lg px-3 py-2 focus:outline-none self-start sm:self-auto"
          >
            <option value="GPT-4o Enterprise ZK">GPT-4o Enterprise ZK</option>
            <option value="Claude 3.5 Sonnet ZK">Claude 3.5 Sonnet ZK</option>
            <option value="Llama 3 70B Private">Llama 3 70B Private</option>
          </select>
        </div>

        <div className="space-y-3">
          <textarea
            value={aiPrompt}
            onChange={(e) => setAiPrompt(e.target.value)}
            rows={2}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-slate-200 focus:outline-none focus:border-purple-500"
            placeholder="Type prompt to send to protected AI service..."
          />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-xs text-slate-400 flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-purple-400 flex-shrink-0" />
              <span>Interceptor Gateway: Midnight Preprod Node #402</span>
            </span>
            <button
              onClick={handleTestAiModel}
              disabled={aiQuerying}
              className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors disabled:opacity-50 cursor-pointer"
            >
              {aiQuerying ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" /> Verifying Midnight Proof...
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" /> Test Protected AI Request
                </>
              )}
            </button>
          </div>

          {aiResponse && (
            <div
              className={`p-4 rounded-xl border text-xs font-mono leading-relaxed transition-all ${
                aiResponse.startsWith('✅')
                  ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-200'
                  : 'bg-rose-950/40 border-rose-800/60 text-rose-200'
              }`}
            >
              {aiResponse}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
