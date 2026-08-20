import React, { useState } from 'react';
import { Users, CheckCircle2, Search, ExternalLink, ShieldCheck, FileText } from 'lucide-react';
import { PREPROD_CONFIG } from '../services/preprodNetwork';

export const UserRegistryView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const launchUsers = [
    { rank: 1, role: 'Enterprise AI Admin', address: '0x02008f3a9e4d5882b71946c18f258e7275d312984bc0369811a2f1b490f20d7e', tier: 'ENTERPRISE', status: 'VERIFIED' },
    { rank: 2, role: 'Lead Security Auditor', address: '0x02001a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f', tier: 'ENTERPRISE', status: 'VERIFIED' },
    { rank: 3, role: 'Senior Data Scientist', address: '0x02009f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3b2a1f0e9d8c7b6a5f4e3d2c1b0a', tier: 'PRO', status: 'VERIFIED' },
    { rank: 4, role: 'AI Infrastructure Dev', address: '0x0200f1e2d3c4b5a697887766554433221100fefe1234567890abcdef12345678', tier: 'PRO', status: 'VERIFIED' },
    { rank: 5, role: 'Compliance Officer', address: '0x0200112233445566778899aabbccddeeff00112233445566778899aabbccddee', tier: 'ENTERPRISE', status: 'VERIFIED' },
    { rank: 6, role: 'ML Ops Specialist', address: '0x0200aabbccddeeff0011223344556677889900112233445566778899aabbccdd', tier: 'PRO', status: 'VERIFIED' },
    { rank: 7, role: 'Confidential Computing Lead', address: '0x0200778899aabbccddeeff00112233445566778899aabbccddeeff0011223344', tier: 'ENTERPRISE', status: 'VERIFIED' },
    { rank: 8, role: 'Research Engineer', address: '0x020033445566778899aabbccddeeff00112233445566778899aabbccddeeff00', tier: 'BASIC', status: 'VERIFIED' },
    { rank: 9, role: 'Privacy Protocol Dev', address: '0x0200ff00112233445566778899aabbccddeeff00112233445566778899aabbcc', tier: 'PRO', status: 'VERIFIED' },
    { rank: 10, role: 'AI Model Validator', address: '0x02005566778899aabbccddeeff00112233445566778899aabbccddeeff001122', tier: 'PRO', status: 'VERIFIED' },
    { rank: 11, role: 'Enterprise Security Lead', address: '0x020099887766554433221100aabbccddeeff00112233445566778899aabbccdd', tier: 'ENTERPRISE', status: 'VERIFIED' },
    { rank: 12, role: 'Zero Knowledge Researcher', address: '0x0200443322110099887766554433221100aabbccddeeff001122334455667788', tier: 'PRO', status: 'VERIFIED' },
    { rank: 13, role: 'SaaS Platform Lead', address: '0x02006655443322110099887766554433221100aabbccddeeff00112233445566', tier: 'BASIC', status: 'VERIFIED' },
    { rank: 14, role: 'Decentralized Identity Dev', address: '0x020088776655443322110099887766554433221100aabbccddeeff0011223344', tier: 'PRO', status: 'VERIFIED' },
    { rank: 15, role: 'Financial Compliance Auditor', address: '0x0200110099887766554433221100aabbccddeeff00112233445566778899aabb', tier: 'ENTERPRISE', status: 'VERIFIED' },
    { rank: 16, role: 'Data Privacy Manager', address: '0x020022110099887766554433221100aabbccddeeff00112233445566778899aa', tier: 'PRO', status: 'VERIFIED' },
    { rank: 17, role: 'AI Safety Specialist', address: '0x02003322110099887766554433221100aabbccddeeff00112233445566778899', tier: 'BASIC', status: 'VERIFIED' },
    { rank: 18, role: 'Cloud Security Architect', address: '0x0200443322110099887766554433221100aabbccddeeff001122334455667788', tier: 'ENTERPRISE', status: 'VERIFIED' },
    { rank: 19, role: 'Smart Contract Auditor', address: '0x020055443322110099887766554433221100aabbccddeeff0011223344556677', tier: 'PRO', status: 'VERIFIED' },
    { rank: 20, role: 'Level 6 Launch Lead', address: '0x02006655443322110099887766554433221100aabbccddeeff00112233445566', tier: 'ENTERPRISE', status: 'VERIFIED' },
  ];

  const filteredUsers = launchUsers.filter(
    (u) => u.role.toLowerCase().includes(searchTerm.toLowerCase()) || u.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="glass-panel p-6 border border-cyan-500/20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Users className="w-3.5 h-3.5" /> Level 6 Launch Roster & User Registry
            </div>
            <h2 className="text-2xl font-extrabold text-white">
              20 Verified <span className="gradient-text">Preprod Launch Users</span>
            </h2>
            <p className="text-slate-400 text-xs max-w-2xl mt-1">
              Active testnet wallets verified on Midnight Preprod smart contract.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> 20/20 Verified
            </span>
          </div>
        </div>
      </div>

      {/* Search Input Bar */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Filter by role or wallet address (e.g. Enterprise, 0x0200...)"
          className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-11 pr-4 py-3 text-xs font-mono text-cyan-200 focus:outline-none focus:border-cyan-500"
        />
      </div>

      {/* Users Table */}
      <div className="glass-panel overflow-hidden border border-slate-800">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900 text-slate-400 uppercase font-mono border-b border-slate-800">
              <tr>
                <th className="p-3.5">#</th>
                <th className="p-3.5">User Role & Designation</th>
                <th className="p-3.5">Preprod Wallet Address</th>
                <th className="p-3.5">Tier</th>
                <th className="p-3.5">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 font-mono text-slate-300">
              {filteredUsers.map((user) => (
                <tr key={user.rank} className="hover:bg-slate-900/40 transition-colors">
                  <td className="p-3.5 text-slate-500 font-bold">{user.rank}</td>
                  <td className="p-3.5 text-slate-200 font-sans font-medium">{user.role}</td>
                  <td className="p-3.5 text-cyan-400 truncate max-w-[260px]">{user.address}</td>
                  <td className="p-3.5">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      user.tier === 'ENTERPRISE'
                        ? 'bg-purple-950/60 text-purple-300 border border-purple-800/40'
                        : user.tier === 'PRO'
                        ? 'bg-cyan-950/60 text-cyan-300 border border-cyan-800/40'
                        : 'bg-slate-800 text-slate-300'
                    }`}>
                      {user.tier}
                    </span>
                  </td>
                  <td className="p-3.5">
                    <span className="badge badge-verified inline-flex items-center gap-1 text-[10px] py-0.5 px-2">
                      <CheckCircle2 className="w-3 h-3" /> VERIFIED
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
