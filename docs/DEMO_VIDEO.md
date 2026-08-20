# AIShield — Interactive Demo Video Script & Walkthrough Timeline

This document provides the full scene-by-scene demo video recording script, voiceover cues, and recording checklist for AIShield.

---

## 🎬 Video Overview

- **Title**: AIShield — Confidential AI Identity & Access Control on Midnight Preprod
- **Duration**: 2 minutes (120 seconds)
- **Target Audience**: Midnight Hackathon Judges & Developers
- **Key Message**: AIShield proves authorization rights for enterprise AI models using Zero-Knowledge proofs without ever leaking credentials or secrets on-chain.

---

## ⏱️ Timeline & Scene Breakdown

### Scene 1: Introduction & Problem Statement (0:00 - 0:25)
- **Visual**: Show AIShield DApp homepage with glowing vector shield logo (`AIShieldLogo.tsx`) and header badges.
- **Voiceover**: *"Enterprise AI services require identity verification, but uploading raw IDs or secret API tokens leaks sensitive user data. AIShield solves this on Midnight Network using zero-knowledge smart contracts."*

### Scene 2: ZK Proof Generation & Prover (0:25 - 0:55)
- **Visual**: Navigate to **`🛡️ ZK Guard & Prover`** tab. Select `ENTERPRISE` tier and click **`Execute ZK Proof & Disclose Commitment`**. Show live proof progress bar (`COMPUTING_WITNESS` ➔ `GENERATING_ZK_PROOF` ➔ `VERIFIED`).
- **Voiceover**: *"In under 800 milliseconds, AIShield computes private witnesses locally in browser memory. The raw identity secret never leaves the user's device. On-chain, only a 32-byte cryptographic commitment hash is disclosed."*

### Scene 3: Live AI Interceptor Gateway (0:55 - 1:25)
- **Visual**: Test prompt in the **Live AI Model Interceptor Demo** box before and after verification. Demonstrate `ACCESS DENIED` vs `ACCESS GRANTED by Midnight ZK Proof`.
- **Voiceover**: *"The protected AI gateway intercepts incoming prompts, querying the Midnight smart contract ledger. Once verified, enterprise LLM outputs are unlocked seamlessly."*

### Scene 4: 70 Preprod Users & Living Feedback Loop (1:25 - 1:45)
- **Visual**: Click **`👥 70 Preprod User Directory`** tab showing search/filters, and **`📊 Living Feedback Loop`** tab displaying the Impact vs. Effort matrix.
- **Voiceover**: *"AIShield has onboarded 70 verifiable Preprod testnet users, maintaining a 4.86 out of 5 satisfaction rating backed by a living feedback loop."*

### Scene 5: Brand Kit & Conclusion (1:45 - 2:00)
- **Visual**: Click **`🎨 Brand Kit & Vector Logo`** tab displaying downloadable vector SVG logos, brand color tokens, and Product X campaign posts.
- **Voiceover**: *"AIShield delivers complete, privacy-first authentication for the future of AI. Check out our GitHub repository and live demo link below."*
