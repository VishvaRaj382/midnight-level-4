# Product Proposal

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

## Mainnet Feasibility

Yes. The smart contract for confidential identity verification and access control is realistic to complete by Level 6. The core functionality, including private credential verification and secure access management, can be implemented using Midnight's privacy features. Additional enhancements such as a web dashboard, enterprise integrations, multi-factor authentication, and AI service connectivity can be developed after the core blockchain infrastructure is complete.
