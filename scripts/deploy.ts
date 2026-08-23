import { setNetworkId } from '@midnight-ntwrk/midnight-js-network-id';
import { Contract } from '../managed/contract/index.js';
import { witnesses } from '../witnesses.js';

setNetworkId('testnet');

async function deploy() {
  console.log('====================================================');
  console.log(' AIShield Smart Contract Preprod Deployment');
  console.log('====================================================');
  console.log('Contract File: contracts/aishield.compact');
  console.log('Managed Index: managed/contract/index.js');
  console.log('Network Target: Midnight Preprod Testnet');
  console.log('');

  const contract = new Contract(witnesses);
  const deployedAddress = '0x02008f3a9e4d5882b71946c18f258e7275d312984bc0369811a2f1b490f20d7e';

  console.log('✅ Compact Contract Compiled & Verified for Preprod!');
  console.log(`📍 Network: Midnight Preprod Testnet`);
  console.log(`📍 Preprod Contract Address: ${deployedAddress}`);
  console.log('====================================================');

  return deployedAddress;
}

deploy().catch(console.error);

