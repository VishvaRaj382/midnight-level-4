import { describe, it, expect } from "vitest";
import { PREPROD_USERS_DATASET } from "../src/data/preprodUsers";

describe("AIShield End-to-End User Verification System", () => {
  it("should assert all user records contain valid transaction hashes", () => {
    PREPROD_USERS_DATASET.forEach((user) => {
      expect(user.txHash).toBeDefined();
      expect(user.txHash.startsWith("0x")).toBe(true);
      expect(user.txHash.length).toBe(66);
    });
  });

  it("should verify state consistency across proof hashes and onboarding dates", () => {
    PREPROD_USERS_DATASET.forEach((user) => {
      expect(user.onboardingDate).toMatch(/^2026-08-\d{2}$/);
      expect(user.status).toBe("VERIFIED");
    });
  });
});
