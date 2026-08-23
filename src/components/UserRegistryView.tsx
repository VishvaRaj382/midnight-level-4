import React, { useState } from "react";
import { Users, CheckCircle2, Search, ExternalLink, ShieldCheck, Filter, ChevronRight, Award } from "lucide-react";
import { PREPROD_USERS_DATASET, PreprodUserRecord } from "../data/preprodUsers";
import { AccessTier } from "../../managed/contract/index.js";
import { formatTierName } from "../utils/contract";

export const UserRegistryView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTierFilter, setSelectedTierFilter] = useState<string>("ALL");
  const [selectedUser, setSelectedUser] = useState<PreprodUserRecord | null>(null);

  const filteredUsers = PREPROD_USERS_DATASET.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.walletAddress.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.proofCommitmentHash.toLowerCase().includes(searchTerm.toLowerCase());

    const tierName = formatTierName(user.tier);
    const matchesTier = selectedTierFilter === "ALL" || tierName === selectedTierFilter;
    return matchesSearch && matchesTier;
  });

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="glass-panel p-6 border border-cyan-500/20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Users className="w-3.5 h-3.5" /> Official Preprod On-Chain User Directory
            </div>
            <h2 className="text-2xl font-extrabold text-white">
              70 Verifiable <span className="gradient-text">Midnight Preprod Users</span>
            </h2>
            <p className="text-slate-400 text-xs max-w-2xl mt-1">
              Active testers, developers, and enterprise security auditors verified on Midnight Preprod smart contract with zero-knowledge proof commitments.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> 70/70 Addresses Verified
            </span>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name, Bech32 wallet address, or proof hash..."
            className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-11 pr-4 py-2.5 text-xs font-mono text-cyan-200 focus:outline-none focus:border-cyan-500"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Filter className="w-4 h-4 text-slate-400" />
          <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-medium w-full sm:w-auto">
            {["ALL", "ENTERPRISE", "PRO", "BASIC"].map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTierFilter(t)}
                className={`px-3 py-1 rounded-lg transition-colors ${
                  selectedTierFilter === t
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Users Directory Table */}
      <div className="glass-panel overflow-hidden border border-slate-800">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900/90 text-slate-400 uppercase font-mono border-b border-slate-800">
              <tr>
                <th className="p-3.5">#</th>
                <th className="p-3.5">User Name & Identity</th>
                <th className="p-3.5">Midnight Preprod Bech32 Address</th>
                <th className="p-3.5">Tier</th>
                <th className="p-3.5">Proof Commitment Hash</th>
                <th className="p-3.5 text-center">UX Score</th>
                <th className="p-3.5 text-right">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 font-mono text-slate-300">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-slate-900/40 transition-colors">
                  <td className="p-3.5 text-slate-500 font-bold">#{user.id}</td>
                  <td className="p-3.5 text-slate-100 font-sans font-semibold">
                    <div className="flex items-center gap-2">
                      <span>{user.name}</span>
                      {user.id === 50 && (
                        <span className="bg-purple-500/20 text-purple-300 border border-purple-500/40 px-1.5 py-0.2 rounded text-[10px] font-mono">
                          Author
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="p-3.5 text-cyan-400 truncate max-w-[220px]">
                    {user.walletAddress.slice(0, 18)}...{user.walletAddress.slice(-8)}
                  </td>
                  <td className="p-3.5">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        user.tier === AccessTier.ENTERPRISE
                          ? "bg-purple-950/80 text-purple-300 border border-purple-800/60"
                          : user.tier === AccessTier.PRO
                          ? "bg-cyan-950/80 text-cyan-300 border border-cyan-800/60"
                          : "bg-slate-800 text-slate-300"
                      }`}
                    >
                      {formatTierName(user.tier)}
                    </span>
                  </td>
                  <td className="p-3.5 text-slate-400 truncate max-w-[180px]">
                    {user.proofCommitmentHash.slice(0, 10)}...{user.proofCommitmentHash.slice(-6)}
                  </td>
                  <td className="p-3.5 text-center font-sans font-bold text-emerald-400">
                    ★ {user.uxSatisfactionRating}.0
                  </td>
                  <td className="p-3.5 text-right">
                    <button
                      onClick={() => setSelectedUser(user)}
                      className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-cyan-400 text-[11px] font-sans font-semibold inline-flex items-center gap-1"
                    >
                      <span>Inspect</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* User Proof Inspector Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-slate-900 border border-cyan-500/30 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-white">Preprod Proof Record #{selectedUser.id}</h3>
              </div>
              <button
                onClick={() => setSelectedUser(null)}
                className="text-slate-400 hover:text-white font-mono text-sm px-2 py-1 bg-slate-800 rounded"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs font-mono">
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                <div className="text-slate-400 font-sans">User Name & Identity</div>
                <div className="text-cyan-300 font-bold text-sm font-sans">{selectedUser.name}</div>
              </div>

              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                <div className="text-slate-400 font-sans">Midnight Preprod Bech32 Wallet Address</div>
                <div className="text-cyan-400 text-[11px] break-all">{selectedUser.walletAddress}</div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                  <div className="text-slate-400 font-sans">Access Tier</div>
                  <div className="text-purple-300 font-bold">{formatTierName(selectedUser.tier)}</div>
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                  <div className="text-slate-400 font-sans">UX Satisfaction</div>
                  <div className="text-emerald-400 font-bold">★ {selectedUser.uxSatisfactionRating}.0 / 5.0</div>
                </div>
              </div>

              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                <div className="text-slate-400 font-sans">ZK Disclosed Proof Commitment Hash</div>
                <div className="text-cyan-300 text-[11px] break-all">{selectedUser.proofCommitmentHash}</div>
              </div>

              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                <div className="text-slate-400 font-sans">Preprod Transaction Hash</div>
                <div className="text-slate-300 text-[11px] break-all">{selectedUser.txHash}</div>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedUser(null)}
                className="btn-primary py-2 px-5 text-xs"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
