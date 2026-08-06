import type { AccessTier, VerificationState } from '../../managed/contract/index.js';

export function formatTierName(tier: AccessTier | number): string {
  switch (Number(tier)) {
    case 1:
      return 'Basic AI Access';
    case 2:
      return 'Pro AI Access';
    case 3:
      return 'Enterprise AI Access';
    default:
      return 'None / Unverified';
  }
}

export function formatStatusName(status: VerificationState | number): string {
  switch (Number(status)) {
    case 1:
      return 'VERIFIED';
    case 2:
      return 'REVOKED';
    default:
      return 'UNVERIFIED';
  }
}

export function truncateHash(hash: string | Uint8Array, length = 6): string {
  if (!hash) return '0x0000...0000';
  let hexString = '';
  if (typeof hash === 'string') {
    hexString = hash;
  } else {
    hexString = Array.from(hash)
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
  }
  if (hexString.length <= length * 2) return `0x${hexString}`;
  return `0x${hexString.slice(0, length)}...${hexString.slice(-length)}`;
}

export function stringToBytes32(str: string): Uint8Array {
  const bytes = new Uint8Array(32);
  const encoder = new TextEncoder();
  const encoded = encoder.encode(str);
  bytes.set(encoded.subarray(0, 32));
  return bytes;
}

export function generateRandomSecret(): Uint8Array {
  const bytes = new Uint8Array(32);
  if (typeof window !== 'undefined' && window.crypto) {
    window.crypto.getRandomValues(bytes);
  } else {
    for (let i = 0; i < 32; i++) {
      bytes[i] = Math.floor(Math.random() * 256);
    }
  }
  return bytes;
}

export function getStoredLocalSecretKey(): Uint8Array {
  const KEY = 'aishield_local_sk';
  if (typeof window !== 'undefined' && window.localStorage) {
    const saved = window.localStorage.getItem(KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length === 32) {
        return new Uint8Array(parsed);
      }
    }
    const newSk = generateRandomSecret();
    window.localStorage.setItem(KEY, JSON.stringify(Array.from(newSk)));
    return newSk;
  }
  return generateRandomSecret();
}

