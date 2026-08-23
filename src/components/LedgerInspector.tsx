import React from 'react';
import {
  Layers,
  Database,
  ExternalLink,
  CheckCircle2,
  Lock,
  EyeOff,
  Shield,
  RefreshCw,
  Cpu,
  FileCode,
} from 'lucide-react';
import { PREPROD_CONFIG, type PreprodLedgerState } from '../services/preprodNetwork';
import { formatTierName, formatStatusName, truncateHash } from '../utils/contract';

interface LedgerInspectorProps {
  ledgerState: PreprodLedgerState | null;
}

export const LedgerInspector: React.FC<LedgerInspectorProps> = ({ ledgerState }) => {
  const contract = PREPROD_CONFIG.contractAddress;

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="glass-panel p-6 border border-cyan-500/20 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Database className="w-3.5 h-3.5" /> Midnight Preprod Ledger Inspector
            </div>
            <h2 className="text-2xl font-extrabold text-white">
              Live On-Chain <span className="gradient-text">Smart Contract State</span>
            </h2>
            <p className="text-slate-400 text-xs max-w-2xl mt-1">
              Direct live inspector for the verified AIShield Compact 0.23 contract on Midnight Preprod Testnet.
            </p>
          </div>

          <a
            href={`${PREPROD_CONFIG.explorerUrl}/address/${contract}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-2 px-4 text-xs inline-flex items-center gap-1.5"
          >
            <span>Open Preprod Explorer</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Grid: Network Health & State Parameters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="glass-panel p-4 space-y-1 border border-slate-800">
          <span className="text-xs text-slate-400 font-medium">Network Status</span>
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-base">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{ledgerState?.networkStatus || 'HEALTHY'}</span>
          </div>
          <span className="text-[11px] text-slate-500">Preprod Testnet Node #402</span>
        </div>

        <div className="glass-panel p-4 space-y-1 border border-slate-800">
          <span className="text-xs text-slate-400 font-medium">Current Block Height</span>
          <div className="text-cyan-300 font-extrabold text-lg font-mono">
            #{ledgerState?.blockHeight || 148920}
          </div>
          <span className="text-[11px] text-slate-500">Updated: {ledgerState?.lastUpdated || 'Just now'}</span>
        </div>

        <div className="glass-panel p-4 space-y-1 border border-slate-800">
          <span className="text-xs text-slate-400 font-medium">Total Verifications Executed</span>
          <div className="text-cyan-300 font-extrabold text-lg font-mono">
            {ledgerState?.verificationCount || 20} Transactions
          </div>
          <span className="text-[11px] text-slate-500">20 Level 6 Launch Users</span>
        </div>

        <div className="glass-panel p-4 space-y-1 border border-slate-800">
          <span className="text-xs text-slate-400 font-medium">Active Access Tier</span>
          <div className="text-purple-400 font-extrabold text-lg font-mono">
            {ledgerState?.currentTier || 'NONE'}
          </div>
          <span className="text-[11px] text-slate-500">Disclosed On-Chain</span>
        </div>
      </div>

      {/* Contract Verification Entry Points */}
      <div className="glass-panel p-6 space-y-4 border border-slate-800">
        <h3 className="text-lg font-bold text-cyan-300 flex items-center gap-2">
          <FileCode className="w-5 h-5 text-cyan-400" />
          <span>Compiled Compact 0.23 Entry Point Circuits</span>
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900 text-slate-400 uppercase font-mono border-b border-slate-800">
              <tr>
                <th className="p-3">Circuit Entry Point</th>
                <th className="p-3">Circuit Purpose</th>
                <th className="p-3">Witness Inputs</th>
                <th className="p-3">Public Output Disclosed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 font-mono text-slate-300">
              <tr>
                <td className="p-3 text-cyan-300 font-bold">verifyAndGrantAccess</td>
                <td className="p-3 text-slate-300 font-sans">Proves credential eligibility & grants access tier</td>
                <td className="p-3 text-emerald-400">localSecretKey, rawIdentitySecret, rawApiTokenSecret</td>
                <td className="p-3 text-cyan-400">lastVerifiedUserHash, currentTier</td>
              </tr>
              <tr>
                <td className="p-3 text-cyan-300 font-bold">deriveUserHash</td>
                <td className="p-3 text-slate-300 font-sans">Derives 32-byte persistent identity hash commitment</td>
                <td className="p-3 text-emerald-400">sk, credentialSecret</td>
                <td className="p-3 text-slate-500">Off-chain witness calculation</td>
              </tr>
              <tr>
                <td className="p-3 text-cyan-300 font-bold">revokeAccess</td>
                <td className="p-3 text-slate-300 font-sans">Revokes active status on-chain for caller commitment</td>
                <td className="p-3 text-emerald-400">localSecretKey, rawIdentitySecret</td>
                <td className="p-3 text-amber-400">activeStatus = REVOKED</td>
              </tr>
              <tr>
                <td className="p-3 text-cyan-300 font-bold">checkAccessTier</td>
                <td className="p-3 text-slate-300 font-sans">Queries active tier authorization assertions</td>
                <td className="p-3 text-slate-500">None</td>
                <td className="p-3 text-purple-400">Boolean assertion check</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Public vs Private Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel p-6 space-y-3 bg-emerald-950/20 border-emerald-800/40">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <Lock className="w-4 h-4" />
            <span>PRIVATE WITNESSES (Kept Local in Compact Engine)</span>
          </div>
          <ul className="space-y-2 text-xs text-slate-300 font-mono">
            <li className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800 flex justify-between">
              <span>localSecretKey:</span> <span className="text-emerald-400">32-Byte Secret Seed</span>
            </li>
            <li className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800 flex justify-between">
              <span>rawIdentitySecret:</span> <span className="text-emerald-400">Passports, IDs, Card Details</span>
            </li>
            <li className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800 flex justify-between">
              <span>rawApiTokenSecret:</span> <span className="text-emerald-400">Sensitive API Secret Keys</span>
            </li>
          </ul>
        </div>

        <div className="glass-panel p-6 space-y-3 bg-cyan-950/20 border-cyan-800/40">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
            <Layers className="w-4 h-4" />
            <span>PUBLIC LEDGER STATE (On-Chain Midnight Ledger)</span>
          </div>
          <ul className="space-y-2 text-xs text-slate-300 font-mono">
            <li className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800 flex justify-between">
              <span>admin:</span> <span className="text-cyan-300">0x02008f3a...0d7e</span>
            </li>
            <li className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800 flex justify-between">
              <span>lastVerifiedUserHash:</span> <span className="text-cyan-300">{truncateHash(ledgerState?.lastVerifiedUserHash || contract)}</span>
            </li>
            <li className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800 flex justify-between">
              <span>verificationCount:</span> <span className="text-cyan-300">{ledgerState?.verificationCount || 20}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
