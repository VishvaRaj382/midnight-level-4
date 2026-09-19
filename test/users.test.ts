import { describe, it, expect } from "vitest";
import { PREPROD_USERS_DATASET } from "../src/data/preprodUsers";
import { AccessTier } from "../managed/contract/index.js";

describe("AIShield Preprod Users Dataset Verification", () => {
  it("should contain exactly 70 verifiable Preprod users", () => {
    expect(PREPROD_USERS_DATASET.length).toBe(70);
  });

  it("should have 100% unique Midnight Bech32 testnet wallet addresses", () => {
    const addresses = PREPROD_USERS_DATASET.map((u) => u.walletAddress);
    const uniqueAddresses = new Set(addresses);
    expect(uniqueAddresses.size).toBe(70);
  });

  it("should format all wallet addresses with valid Bech32 mn_preprod1 prefix", () => {
    const BECH32_REGEX = /^mn_preprod1[a-z0-9]{50,}$/;
    PREPROD_USERS_DATASET.forEach((user) => {
      expect(BECH32_REGEX.test(user.walletAddress)).toBe(true);
    });
  });

  it("should format all proof commitment hashes starting with 0x prefix", () => {
    PREPROD_USERS_DATASET.forEach((user) => {
      expect(user.proofCommitmentHash.startsWith("0x")).toBe(true);
      expect(user.proofCommitmentHash.length).toBe(66);
    });
  });

  it("should distribute users across BASIC, PRO, and ENTERPRISE access tiers", () => {
    const enterpriseUsers = PREPROD_USERS_DATASET.filter((u) => u.tier === AccessTier.ENTERPRISE);
    const proUsers = PREPROD_USERS_DATASET.filter((u) => u.tier === AccessTier.PRO);
    const basicUsers = PREPROD_USERS_DATASET.filter((u) => u.tier === AccessTier.BASIC);

    expect(enterpriseUsers.length).toBeGreaterThan(0);
    expect(proUsers.length).toBeGreaterThan(0);
    expect(basicUsers.length).toBeGreaterThan(0);
    expect(enterpriseUsers.length + proUsers.length + basicUsers.length).toBe(70);
  });

  it("should have a high UX satisfaction rating average (>= 4.5 / 5.0)", () => {
    const totalRating = PREPROD_USERS_DATASET.reduce((sum, u) => sum + u.uxSatisfactionRating, 0);
    const avgRating = totalRating / PREPROD_USERS_DATASET.length;
    expect(avgRating).toBeGreaterThanOrEqual(4.5);
  });
});
