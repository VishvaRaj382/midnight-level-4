# AIShield

![CI](https://github.com/VishvaRaj382/midnight-level-4/actions/workflows/ci.yml/badge.svg)

> Privacy-preserving identity & access verification platform for AI services and enterprise models built on Midnight Network.

---

## Live Demo
[https://aishield-midnight.vercel.app](https://aishield-midnight.vercel.app)

---

## Contract Address
> **MANDATORY FOR SUBMISSION**

| Network | Address |
| :--- | :--- |
| **Preprod** | `0x02008f3a9e4d5882b71946c18f258e7275d312984bc0369811a2f1b490f20d7e` |

---

## What This Product Does

AIShield is a privacy-preserving identity verification platform built on Midnight. It enables users to prove they are authorized to access AI platforms, enterprise software, APIs, or premium digital services without revealing their personal identity or sensitive credentials.

Instead of uploading passports, IDs, student cards, company emails, or subscription details, users generate a zero-knowledge proof that verifies eligibility while keeping the underlying information private. Organizations only learn whether the user satisfies the required conditions, not the personal data itself.

AIShield can be used by AI companies, universities, enterprises, SaaS providers, and developer platforms to provide secure access while protecting user privacy. It reduces identity theft, prevents unnecessary data collection, and gives users complete control over their credentials.

By leveraging Midnight's confidential smart contracts and zero-knowledge technology, AIShield delivers verifiable, privacy-first authentication for the next generation of AI and digital services.

---

## Privacy Model

### What is PUBLIC (on-chain, visible to everyone)
- **`admin`**: Derived public key commitment of contract administrator.
- **`activeStatus`**: Current state of user verification (`UNVERIFIED`, `VERIFIED`, `REVOKED`).
- **`currentTier`**: Disclosed access tier level (`BASIC`, `PRO`, `ENTERPRISE`).
- **`lastVerifiedUserHash`**: Disclosed cryptographic hash commitment of the user's identity proof.
- **`verificationCount`**: Total count of verification transactions processed on-chain.

### What is PRIVATE (private witness, NEVER on-chain or network transmitted)
- **`localSecretKey`**: User's private signing key seed.
- **`rawIdentitySecret`**: Passports, IDs, student cards, company emails, or subscription credentials.
- **`rawApiTokenSecret`**: Sensitive API authorization tokens and secret keys.

### What the User PROVES Without Revealing
- Proves possession of valid identity credentials matching authorization rules.
- Proves ownership of a non-zero API secret token.
- Proves eligibility for requested access tier level (`Basic`, `Pro`, `Enterprise`).
- All derived without disclosing raw credentials, names, government IDs, or API keys.

---

## Tech Stack

- **Smart Contracts**: Compact 0.23 / 0.31 language (`contracts/aishield.compact`)
- **Zero-Knowledge Runtime**: `@midnight-ntwrk/compact-runtime` (v0.16.0)
- **Blockchain Network**: Midnight Preprod Testnet
- **Frontend Framework**: React 18, TypeScript 5.7, Vite 6
- **Styling & UI**: Custom Cyber Midnight Design System, Tailwind HSL Tokens, Lucide Icons
- **Testing & Tooling**: Vitest 3, GitHub Actions CI/CD

---

## Prerequisites

- **Node.js**: v22.0.0 or higher
- **npm**: v10.0.0 or higher
- **Compact Compiler**: `compact` version 0.5.1+
- **Midnight Lace Wallet**: Extension installed in Chrome/Brave (configured for Preprod Testnet)
- **Docker**: (Optional, for running local Midnight proof server)

---

## Setup & Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/VishvaRaj382/midnight-level-4.git
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

4. **Start Vite Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

---

## Run Tests

Execute the Vitest test suite to verify contract circuits, state transitions, ZK privacy bounds, and security assertions:

```bash
npm run test
```

---

## CI/CD

GitHub Actions automatically runs on every push and pull request to `main`:
1. Installs Node.js v22 & dependencies.
2. Compiles Compact contracts with `compact compile`.
3. Runs 100% of Vitest unit tests.
4. Builds production bundle with zero compiler errors.

---

## Usage Guide

See [docs/USAGE.md](file:///Users/VishwaRajSingh/Developer/midnight/midnight-level-4/docs/USAGE.md)

---

## Product X Profile

[https://x.com/AIShieldMidnight](https://x.com/AIShieldMidnight)

