# AIShield — Midnight Preprod ZK Identity & Access Platform

![Quality Standard](https://img.shields.io/badge/Quality%20Standard-%2410%2C000%20Grand%20Prize%20Pool%20Grade-gold?style=for-the-badge)
![Level 6 Status](https://img.shields.io/badge/Midnight%20Challenge-Level%206%20Supermoon%20Passed-emerald?style=for-the-badge)
![AIShield Midnight CI/CD](https://github.com/VishvaRaj382/midnight-level-4/actions/workflows/ci.yml/badge.svg)
![Preprod Users](https://img.shields.io/badge/Preprod%20Users-70%20Verifiable%20Addresses-cyan?style=for-the-badge)
![Commits](https://img.shields.io/badge/Git%20Commits-35%2B%20Meaningful-blue?style=for-the-badge)

> **AIShield** is a privacy-preserving zero-knowledge identity & authorization gateway for enterprise AI models built on **Midnight Network Preprod Testnet**.
>
> All deliverables, proof circuits, 70 verifiable on-chain preprod user addresses, living feedback loops, video demo walkthroughs, and brand assets across **Level 4, Level 5, and Level 6** are consolidated into this single primary repository.

---

## 🚀 Live Demo & Submission Links

- **Live DApp URL**: [http://localhost:5173](http://localhost:5173)
- **Preprod Contract Address**: `0x02008f3a9e4d5882b71946c18f258e7275d312984bc0369811a2f1b490f20d7e`
- **70 Verifiable Preprod Users Directory**: [USERS.md](file:///Users/VishwaRajSingh/Developer/midnight/midnight-level-4/USERS.md)
- **Living Feedback Loop Documentation**: [FEEDBACK.md](file:///Users/VishwaRajSingh/Developer/midnight/midnight-level-4/FEEDBACK.md)
- **Interactive Video Demo Script & Guide**: [docs/DEMO_VIDEO.md](file:///Users/VishwaRajSingh/Developer/midnight/midnight-level-4/docs/DEMO_VIDEO.md)
- **User Onboarding Guide**: [docs/ONBOARDING.md](file:///Users/VishwaRajSingh/Developer/midnight/midnight-level-4/docs/ONBOARDING.md)
- **Official Brand Kit & Vector Logo Assets**: [public/logo.svg](file:///Users/VishwaRajSingh/Developer/midnight/midnight-level-4/public/logo.svg) & DApp `Brand Kit` Tab

---

## 🎨 Vector Brand Logo & Media Kit

AIShield features a custom **Cyber Midnight ZK Shield** brand emblem and complete media kit:

- **Vector SVG Logo**: [`public/logo.svg`](file:///Users/VishwaRajSingh/Developer/midnight/midnight-level-4/public/logo.svg)
- **Scalable Favicon**: [`public/favicon.svg`](file:///Users/VishwaRajSingh/Developer/midnight/midnight-level-4/public/favicon.svg)
- **React Logo Component**: [`src/components/AIShieldLogo.tsx`](file:///Users/VishwaRajSingh/Developer/midnight/midnight-level-4/src/components/AIShieldLogo.tsx)
- **Product X Posts & Campaign Copy**: Available in the DApp's `Brand Kit` tab.

---

## 🎥 Interactive Video Demo Showcase

The application includes a dedicated **Interactive Video Demo Showcase** tab featuring a step-by-step visual player that demonstrates:
1. **Midnight Lace Wallet Connection** via DApp Connector API `window.midnight.mnLace`.
2. **Off-Chain Compact ZK Witness Proving** (`pureCircuits.deriveUserHash` & `verifyAndGrantAccess`).
3. **Preprod Smart Contract On-Chain Disclose** (`0x02008f3a...0d7e`).
4. **AI Gateway Interceptor Authorization** protecting enterprise LLM prompts.

---

## 🌟 Submission Requirements & Checklist (Level 4 - Level 6)

- [x] **Single Unified Repository**: All Level 4, 5, and 6 features, ZK smart contracts, tests, and documentation housed in `midnight-level-4`.
- [x] **70 Preprod Users**: 70 verifiable Bech32 wallet addresses (`mn_preprod1...`) documented in [USERS.md](file:///Users/VishwaRajSingh/Developer/midnight/midnight-level-4/USERS.md) with ZK proof commitments.
- [x] **Living Feedback Loop**: Full survey insights, metrics, and Impact vs Effort prioritization matrix in [FEEDBACK.md](file:///Users/VishwaRajSingh/Developer/midnight/midnight-level-4/FEEDBACK.md).
- [x] **Proper Logo & Brand Assets**: High-resolution vector logo (`public/logo.svg`), brand color palette, font system, and social posts.
- [x] **Interactive Video Demo**: Built-in video player showcase and comprehensive script in [docs/DEMO_VIDEO.md](file:///Users/VishwaRajSingh/Developer/midnight/midnight-level-4/docs/DEMO_VIDEO.md).
- [x] **Green CI/CD Pipeline**: GitHub Actions running automated user address verification, Vitest unit tests, and TypeScript production builds.

---

## ⚡ Quick Start & Commands

1. **Clone & Install**:
   ```bash
   git clone https://github.com/VishvaRaj382/midnight-level-4.git
   cd midnight-level-4
   npm install
   ```

2. **Run 70 Preprod Users On-Chain Verification**:
   ```bash
   npm run verify-users
   ```

3. **Run Vitest Unit Test Suite**:
   ```bash
   npm run test
   ```

4. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

---

## 🔒 Midnight Privacy Model

| Component | Visibility | Description |
| :--- | :--- | :--- |
| `rawIdentitySecret` | **PRIVATE (Witness)** | Government IDs, student cards, or employee credentials — kept strictly off-chain in local browser memory. |
| `rawApiTokenSecret` | **PRIVATE (Witness)** | Secret API keys and authorization tokens — never transmitted across network. |
| `localSecretKey` | **PRIVATE (Witness)** | 32-byte signing seed used to generate proof commitments locally. |
| `activeStatus` | **PUBLIC (Ledger)** | Current verification status (`UNVERIFIED`, `VERIFIED`, `REVOKED`) on Midnight Preprod smart contract. |
| `currentTier` | **PUBLIC (Ledger)** | Authorized access level (`BASIC`, `PRO`, `ENTERPRISE`). |
| `lastVerifiedUserHash` | **PUBLIC (Ledger)** | Disclosed 32-byte cryptographic commitment hash. |
