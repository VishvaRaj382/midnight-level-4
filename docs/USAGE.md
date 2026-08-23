# How to Use AIShield

> Complete step-by-step user guide for generating zero-knowledge authorization proofs, querying protected AI models, and inspecting Midnight Preprod Testnet state.

---

## Official Project Links

- **Product X (Twitter) Profile**: [https://x.com/AIShieldMidnight](https://x.com/AIShieldMidnight)
- **Live Preprod Demo**: [https://vishvaraj382.github.io/midnight-level-4/](https://vishvaraj382.github.io/midnight-level-4/)
- **Level 6 Launch Users (20 Roster)**: [LAUNCH_USERS.md](file:///Users/VishwaRajSingh/Developer/midnight/midnight-level-4/LAUNCH_USERS.md)
- **Level 6 Feedback & Improvements**: [docs/FEEDBACK.md](file:///Users/VishwaRajSingh/Developer/midnight/midnight-level-4/docs/FEEDBACK.md)
- **Brand Brief & Media Kit**: [docs/BRAND.md](file:///Users/VishwaRajSingh/Developer/midnight/midnight-level-4/docs/BRAND.md)

---

## Prerequisites & Requirements

Before getting started, make sure you have:
1. **Midnight Lace Wallet** installed in your browser (Chrome or Brave).
2. **tNight Testnet Tokens** (obtain free testnet tokens from the [Midnight Preprod Faucet](https://faucet.preprod.midnight.network)).
3. **Node.js (v22+)** and **npm** installed on your system if running locally.
4. Your confidential credentials (e.g. Government/Enterprise ID and AI Provider Secret API Key).

---

## Step-by-Step Usage Guide

### Step 1: Connect Your Midnight Lace Wallet
1. Open the AIShield Web Application (`https://vishvaraj382.github.io/midnight-level-4/` or `http://localhost:5173`).
2. Click the **Connect Midnight Wallet** button in the top right header.
3. Approve the connection request in your Lace Wallet popup.
4. Verify your active network is set to **Preprod Testnet** and your `tNight` balance displays.

### Step 2: Select Your Required AI Access Tier
Choose the tier of AI model access you require:
- **Basic AI Access**: For lightweight conversational models (e.g., Llama 3 8B, GPT-3.5 Turbo).
- **Pro AI Access**: For advanced reasoning and code models (e.g., GPT-4o, Claude 3.5 Sonnet).
- **Enterprise ZK Access**: For dedicated private nodes and confidential audit workflows.

### Step 3: Enter Your Local Private Credentials
1. Type your **Government ID / Employee Credential Secret** into the private input field.
2. Enter your **AI Service API Secret Token**.
3. *Note: These values are processed exclusively inside your browser using Midnight private witnesses and zero-knowledge circuit inputs. They are never transmitted across the network or written to the blockchain.*

### Step 4: Execute Zero-Knowledge Proof & Disclose Commitment
1. Click **Execute ZK Proof & Disclose Commitment**.
2. The application compiles a zero-knowledge proof locally:
   - Derives a cryptographic commitment hash from your private credentials.
   - Proves you possess valid access rights without revealing the credentials themselves.
3. Submit the transaction to Midnight Preprod Testnet contract (`0x02008f3a9e4d5882b71946c18f258e7275d312984bc0369811a2f1b490f20d7e`).
4. Once confirmed, your on-chain state will transition to **VERIFIED** with your requested access tier.

### Step 5: Test the Live AI Model Guard Interceptor
1. Scroll down to the **Live AI Model Guard Interceptor Demo**.
2. Select your desired target model (e.g. `GPT-4o Enterprise ZK`).
3. Enter your prompt (e.g., *"Analyze financial compliance for confidential Q3 audit report"*).
4. Click **Test Protected AI Request**.
5. The interceptor gateway checks your on-chain Midnight verification proof. If valid, the AI model processes your query and returns the confidential response!

### Step 6: Revoke Access (Optional)
If you wish to terminate active authorization:
1. Click the **Revoke** button next to your active status.
2. The `revokeAccess` circuit executes on Midnight, setting your state back to **REVOKED** and updating the ledger on-chain.

---

## What Gets Proved (and What Stays Private)

| Information Item | On-Chain Ledger (Public) | Local Witness (Private) | Zero-Knowledge Proof |
| :--- | :---: | :---: | :---: |
| **Government ID / Identity Details** | ❌ Never | ✅ Kept Local | Proves ownership without revealing raw text |
| **API Secret Key / Token** | ❌ Never | ✅ Kept Local | Proves token hash validity |
| **Derived Identity Hash** | ✅ Disclosed Hash Only | ❌ | Uniquely identifies proof commitment |
| **Granted Access Tier** | ✅ Disclosed Tier Enum | ❌ | Verifies tier level (Basic, Pro, Enterprise) |
| **Verification State** | ✅ VERIFIED / REVOKED | ❌ | Public status indicator |

---

## Troubleshooting

### Lace Wallet Not Connecting
- Ensure the Midnight Lace browser extension is enabled and unlocked.
- Check that your network in Lace settings is configured to **Preprod Testnet**.
- Refresh the page and try clicking **Connect Midnight Wallet** again.

### ZK Proof Generation Error
- Check that neither input field is empty.
- Ensure your wallet has sufficient `tNight` testnet balance for transaction fees.
- If running locally, confirm `npm run compact` compiled contracts successfully.

### AI Interceptor Denies Access
- Ensure you have clicked **Execute ZK Proof** and your on-chain status displays **VERIFIED**.
- If access was revoked, generate a new proof for your desired access tier.
