import { AccessTier } from "../../managed/contract/index.js";

export interface UserFeedbackItem {
  id: string;
  userName: string;
  userAddress: string;
  tier: AccessTier;
  rating: number;
  category: "UX_ONBOARDING" | "PRIVACY_SECURITY" | "PERFORMANCE" | "FEATURE_REQUEST";
  comment: string;
  submittedAt: string;
  impactScore: number; // 1-10 (Y-axis)
  effortScore: number; // 1-10 (X-axis)
  prioritizationQuadrant: "QUICK_WIN" | "MAJOR_PROJECT" | "FILL_IN" | "THANKLESS_TASK";
  status: "IMPLEMENTED" | "IN_PROGRESS" | "PLANNED" | "UNDER_REVIEW";
}

export const SEED_FEEDBACK_ITEMS: UserFeedbackItem[] = [
  {
    id: "fb-001",
    userName: "Elena Rostova",
    userAddress: "mn_preprod1q8k92f4x7z9...",
    tier: AccessTier.ENTERPRISE,
    rating: 5,
    category: "PRIVACY_SECURITY",
    comment: "The zero-knowledge privacy separation between local witness and public ledger is outstanding. Perfect for Enterprise LLM access.",
    submittedAt: "2026-08-01 14:22",
    impactScore: 9,
    effortScore: 3,
    prioritizationQuadrant: "QUICK_WIN",
    status: "IMPLEMENTED",
  },
  {
    id: "fb-002",
    userName: "Marcus Vance",
    userAddress: "mn_preprod1q9m2v4c6x8z...",
    tier: AccessTier.PRO,
    rating: 5,
    category: "PERFORMANCE",
    comment: "ZK proof generation took under 800ms in browser memory. Extremely smooth experience.",
    submittedAt: "2026-08-02 09:15",
    impactScore: 8,
    effortScore: 4,
    prioritizationQuadrant: "QUICK_WIN",
    status: "IMPLEMENTED",
  },
  {
    id: "fb-003",
    userName: "Sofia Chen",
    userAddress: "mn_preprod1q7x4z1c3v5b...",
    tier: AccessTier.PRO,
    rating: 4,
    category: "UX_ONBOARDING",
    comment: "Would love an interactive step-by-step onboarding modal explaining how Midnight Lace Wallet connects to testnet.",
    submittedAt: "2026-08-03 18:40",
    impactScore: 9,
    effortScore: 3,
    prioritizationQuadrant: "QUICK_WIN",
    status: "IMPLEMENTED",
  },
  {
    id: "fb-004",
    userName: "Devon Miller",
    userAddress: "mn_preprod1q5v8b0n2m4a...",
    tier: AccessTier.ENTERPRISE,
    rating: 5,
    category: "FEATURE_REQUEST",
    comment: "Add a live prompt interceptor sandbox to test protected LLM outputs after ZK proof verification.",
    submittedAt: "2026-08-04 11:05",
    impactScore: 10,
    effortScore: 5,
    prioritizationQuadrant: "MAJOR_PROJECT",
    status: "IMPLEMENTED",
  },
  {
    id: "fb-005",
    userName: "Aisha Patel",
    userAddress: "mn_preprod1q3a6s8d0f2g...",
    tier: AccessTier.ENTERPRISE,
    rating: 5,
    category: "PRIVACY_SECURITY",
    comment: "Revocation flow on Compact smart contract works instantaneously. Great security feature.",
    submittedAt: "2026-08-05 16:30",
    impactScore: 8,
    effortScore: 4,
    prioritizationQuadrant: "QUICK_WIN",
    status: "IMPLEMENTED",
  },
];
