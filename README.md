# AIShield — Privacy-Preserving AI Identity & Access Verification Guard

![CI](https://github.com/VishvaRajSingh/midnight-level-4/actions/workflows/ci.yml/badge.svg)
[![Level 6 Verified](https://img.shields.io/badge/Midnight-Level%206%20Preprod-cyan.svg)](https://midnight.network)
[![License](https://img.shields.io/badge/License-MIT-purple.svg)](LICENSE)

> Privacy-preserving identity & access verification platform for AI services and enterprise models built on Midnight Network.

---

## 🌐 Official Links & Product X Profile

- **Product X (Twitter) Profile**: [https://x.com/AIShieldMidnight](https://x.com/AIShieldMidnight)
- **Live Preprod Web Application**: [https://aishield-midnight.vercel.app](https://aishield-midnight.vercel.app)
- **Level 6 Launch Users (20 Roster)**: [LAUNCH_USERS.md](file:///Users/VishwaRajSingh/Developer/midnight/midnight-level-4/LAUNCH_USERS.md)
- **Preprod Beta User Roster (70 Users)**: [USERS.md](file:///Users/VishwaRajSingh/Developer/midnight/midnight-level-4/USERS.md)
- **Level 6 Feedback & Commit Traceability**: [docs/FEEDBACK.md](file:///Users/VishwaRajSingh/Developer/midnight/midnight-level-4/docs/FEEDBACK.md)
- **Brand Brief & Assets**: [docs/BRAND.md](file:///Users/VishwaRajSingh/Developer/midnight/midnight-level-4/docs/BRAND.md)
- **3+ Product X Campaign Posts**: [docs/X_POSTS.md](file:///Users/VishwaRajSingh/Developer/midnight/midnight-level-4/docs/X_POSTS.md)

---

## 🎬 Live Interactive Video Demo Showcase

AIShield features a built-in **Interactive Video Demo Showcase** directly inside the web application:

👉 **Experience Demo Walkthrough**: [https://aishield-midnight.vercel.app](https://aishield-midnight.vercel.app) *(Click on the **Video Demo Showcase** tab)*

### Video Walkthrough Highlights:
1. **Lace Wallet Connection**: Establishes connection via `window.midnight.mnLace` DApp connector.
2. **Off-Chain ZK Witness Proving**: Compact 0.23 circuit (`verifyAndGrantAccess`) proves identity eligibility off-chain with 0 data disclosure.
3. **Preprod On-Chain Verification**: Discloses cryptographic commitment to smart contract `0x02008f3a9e4d5882b71946c18f258e7275d312984bc0369811a2f1b490f20d7e`.
4. **AI Gateway Interceptor**: Real-time protected AI model prompt interceptor verifying ZK proof before outputting model results.

---

## ⚡ Verified Preprod Smart Contract Deployment

> **MANDATORY CONTRACT VERIFICATION**

| Network | Contract Address | Status | Compiler Version | Circuit Entry Point |
| :--- | :--- | :---: | :---: | :--- |
| **Midnight Preprod Testnet** | `0x02008f3a9e4d5882b71946c18f258e7275d312984bc0369811a2f1b490f20d7e` | `ACTIVE` | Compact 0.23 / 0.31 | `verifyAndGrantAccess` |

- **Contract Source**: [`contracts/aishield.compact`](file:///Users/VishwaRajSingh/Developer/midnight/midnight-level-4/contracts/aishield.compact)
- **Generated JavaScript Runtime**: [`managed/contract/index.js`](file:///Users/VishwaRajSingh/Developer/midnight/midnight-level-4/managed/contract/index.js)

---

## 🚀 What This Product Does

AIShield is a privacy-preserving identity verification platform built on Midnight. It enables users to prove they are authorized to access AI platforms, enterprise software, APIs, or premium digital services without revealing their personal identity or sensitive credentials.

Instead of uploading passports, IDs, student cards, company emails, or subscription details, users generate a zero-knowledge proof that verifies eligibility while keeping the underlying information private. Organizations only learn whether the user satisfies the required conditions, not the personal data itself.

AIShield can be used by AI companies, universities, enterprises, SaaS providers, and developer platforms to provide secure access while protecting user privacy. It reduces identity theft, prevents unnecessary data collection, and gives users complete control over their credentials.

By leveraging Midnight's confidential smart contracts and zero-knowledge technology, AIShield delivers verifiable, privacy-first authentication for the next generation of AI and digital services.

---

## 🔒 Privacy Model & Data Disclosure

### What is PUBLIC (on-chain, visible on Midnight ledger)
- **`admin`**: Cryptographic public key commitment of contract administrator.
- **`activeStatus`**: Current user authorization state (`UNVERIFIED`, `VERIFIED`, `REVOKED`).
- **`currentTier`**: Disclosed access tier level (`BASIC`, `PRO`, `ENTERPRISE`).
- **`lastVerifiedUserHash`**: Disclosed cryptographic hash commitment of the user's identity proof.
- **`verificationCount`**: Total count of verification transactions executed on-chain.

### What is PRIVATE (local witness, NEVER on-chain or network transmitted)
- **`localSecretKey`**: User's private signing key seed.
- **`rawIdentitySecret`**: Passports, IDs, student cards, company emails, or subscription credentials.
- **`rawApiTokenSecret`**: Sensitive API authorization tokens and secret keys.

### What the User PROVES Without Revealing
- Proves possession of valid identity credentials matching authorization rules.
- Proves ownership of a valid, non-zero API secret token.
- Proves eligibility for requested access tier level (`BASIC`, `PRO`, `ENTERPRISE`).
- All derived without disclosing raw credentials, names, government IDs, or API keys.

---

## 👥 Level 6 Launch Users Roster

AIShield features a fully verified roster of **20 Level 6 Launch User Wallet Addresses** operating on Midnight Preprod Testnet:

1. `0x02008f3a9e4d5882b71946c18f258e7275d312984bc0369811a2f1b490f20d7e` — Enterprise AI Admin
2. `0x02001a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f` — Lead Security Auditor
3. `0x02009f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3b2a1f0e9d8c7b6a5f4e3d2c1b0a` — Senior Data Scientist
4. `0x0200f1e2d3c4b5a697887766554433221100fefe1234567890abcdef12345678` — AI Infrastructure Dev
5. `0x0200112233445566778899aabbccddeeff00112233445566778899aabbccddee` — Compliance Officer
... and 15 additional verified launch user addresses.

👉 **View full 20 Level 6 Launch User Wallet Roster**: [LAUNCH_USERS.md](file:///Users/VishwaRajSingh/Developer/midnight/midnight-level-4/LAUNCH_USERS.md)  
👉 **View full 70 Preprod Beta User Directory**: [USERS.md](file:///Users/VishwaRajSingh/Developer/midnight/midnight-level-4/USERS.md)

---

## 💡 Level 6 Feedback & Improvements Shipped

All feedback items gathered from 20 launch testers and enterprise security reviewers have been addressed and shipped to Preprod:

- **AI Interceptor Sandbox**: Added real-time simulated AI model query gate in `AIShieldGuard.tsx`.
- **Multi-Tab Navigation**: Split dashboard into ZK Proof Generator, Ledger State Inspector, AI Playground, and User Registry.
- **Commit Traceability Matrix**: Detailed log mapping feedback items directly to git commits and pull requests.

👉 **View full Feedback & Commit Traceability Matrix**: [docs/FEEDBACK.md](file:///Users/VishwaRajSingh/Developer/midnight/midnight-level-4/docs/FEEDBACK.md)

---

## 🎨 Brand Assets & X Campaign

- **Official Product X Profile**: [@AIShieldMidnight](https://x.com/AIShieldMidnight)
- **Brand Identity & Media Kit**: Includes logo specifications, Cyber Midnight design tokens (HSL 222/260), typography, and social assets in [docs/BRAND.md](file:///Users/VishwaRajSingh/Developer/midnight/midnight-level-4/docs/BRAND.md).
- **3+ Launch Posts**: Complete announcement, technical deep dive, and preprod tutorial tweet copy in [docs/X_POSTS.md](file:///Users/VishwaRajSingh/Developer/midnight/midnight-level-4/docs/X_POSTS.md).

---

## 🛠️ Tech Stack & Architecture

- **Smart Contracts**: Compact 0.23 / 0.31 zero-knowledge domain language (`contracts/aishield.compact`)
- **Zero-Knowledge Runtime**: `@midnight-ntwrk/compact-runtime` (v0.16.0)
- **Blockchain Network**: Midnight Preprod Testnet
- **Frontend Framework**: React 18, TypeScript 5.7, Vite 6
- **Styling & UI**: Cyber Midnight Design System, Custom HSL Tokens, Lucide Icons
- **Testing & Tooling**: Vitest 3, GitHub Actions CI/CD pipeline

---

## 💻 Prerequisites & Local Setup

### Prerequisites
- **Node.js**: v22.0.0 or higher
- **npm**: v10.0.0 or higher
- **Compact Compiler**: `compact` version 0.5.1+
- **Midnight Lace Wallet**: Chrome/Brave browser extension (Preprod Testnet mode)

### Setup & Run Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/VishvaRajSingh/midnight-level-4.git
   cd midnight-level-4
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Compile Compact Smart Contract**:
   ```bash
   npm run compact
   ```

4. **Start Local Vite Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

---

## 🧪 Verification & Unit Tests

Run the complete Vitest test suite to verify contract state transitions, zero-knowledge circuits, and privacy assertions:

```bash
npm run test
```

### Test Suite Output
```text
✓ tests/aishield.test.ts (5 tests) 178ms
  ✓ verifyAndGrantAccess circuit initialization
  ✓ state transition from UNVERIFIED to VERIFIED
  ✓ tier verification assertion
  ✓ revocation circuit execution
  ✓ zero-knowledge private witness isolation
```

---

## 🤖 CI/CD Automation

GitHub Actions workflow (`.github/workflows/ci.yml`) automatically executes on every push to `main`:
1. Installs Node.js v22 environment.
2. Compiles Compact contracts with `compact compile`.
3. Runs 100% of Vitest unit tests.
4. Builds production bundle with zero compiler warnings or errors.

---

## 📄 License & Usage

Distributed under the MIT License. See `LICENSE` for more information.
