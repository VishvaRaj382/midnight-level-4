# Product Proposal — AIShield

## What is the product, and who uses it?

AIShield is a privacy-preserving identity verification platform built on Midnight. It enables users to prove they are authorized to access AI platforms, enterprise software, APIs, or premium digital services without revealing their personal identity or sensitive credentials.

Instead of uploading passports, IDs, student cards, company emails, or subscription details, users generate a zero-knowledge proof that verifies eligibility while keeping the underlying information private. Organizations only learn whether the user satisfies the required conditions, not the personal data itself.

AIShield can be used by AI companies, universities, enterprises, SaaS providers, and developer platforms to provide secure access while protecting user privacy. It reduces identity theft, prevents unnecessary data collection, and gives users complete control over their credentials.

By leveraging Midnight's confidential smart contracts and zero-knowledge technology, AIShield delivers verifiable, privacy-first authentication for the next generation of AI and digital services.

## Category
Identity/credentials

## Why Midnight specifically?

Traditional blockchains expose transaction and identity information publicly, making them unsuitable for confidential authentication. Midnight enables private witnesses and zero-knowledge proofs, allowing users to prove they possess valid credentials without revealing their identity or sensitive information. Only the authorization result is recorded on the blockchain, ensuring both privacy and trust.

## Data Model

| Data Point                  | Type            | Disclosed To        |
| --------------------------- | --------------- | ------------------- |
| User ID Hash                | Public Ledger   | Everyone            |
| Verification Status         | Public Ledger   | Everyone            |
| Access Level                | Public Ledger   | Everyone            |
| Identity Details            | Private Witness | No one              |
| Government ID / Student Card| Private Witness | No one              |
| API Token / Email / Secret  | Private Witness | No one              |
| Proof of Authorization      | Private Witness | Smart Contract Only |

## Mainnet & Preprod Feasibility (Level 6 Achieved)

Yes. The smart contract for confidential identity verification and access control is fully deployed on the **Midnight Preprod Testnet** (`0x02008f3a9e4d5882b71946c18f258e7275d312984bc0369811a2f1b490f20d7e`). Core zero-knowledge proof verification, multi-tier authorization, and AI guard interceptor integration are active and tested by 20 Level 6 launch users.

---

## Official Level 6 Assets

- **Product X (Twitter)**: [https://x.com/vishwa_raj98207](https://x.com/vishwa_raj98207)
- **Live Preprod Demo**: [https://vishvaraj382.github.io/midnight-level-4/](https://vishvaraj382.github.io/midnight-level-4/)
- **Demo Video Recording**: [Google Drive Video Demo](https://drive.google.com/file/d/1L86Haxqy2QMLckvpg8WGod2OQl_-uGaK/view?usp=sharing)
- **Level 6 Launch Users**: [LAUNCH_USERS.md](file:///Users/VishwaRajSingh/Developer/midnight/midnight-level-4/LAUNCH_USERS.md)
- **Level 6 Feedback Matrix**: [docs/FEEDBACK.md](file:///Users/VishwaRajSingh/Developer/midnight/midnight-level-4/docs/FEEDBACK.md)
- **Brand Brief & Guidelines**: [docs/BRAND.md](file:///Users/VishwaRajSingh/Developer/midnight/midnight-level-4/docs/BRAND.md)
