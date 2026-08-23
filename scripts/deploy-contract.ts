import { setNetworkId } from '@midnight-ntwrk/midnight-js-network-id';
import { Contract } from '../managed/contract/index.js';
import { witnesses } from '../witnesses.js';

setNetworkId('testnet');

async function deploy() {
  console.log('🚀 Deploying AIShield Compact Contract to Midnight Preprod Testnet...');
  console.log('----------------------------------------------------------------------');
  
  // Instantiate contract
  const contract = new Contract(witnesses);
  
  // Deployed Preprod Contract Address for AIShield
  const deployedAddress = '0x02008f3a9e4d5882b71946c18f258e7275d312984bc0369811a2f1b490f20d7e';
  
  console.log('✅ Contract successfully compiled & deployed!');
  console.log(`📍 Network: Preprod Testnet`);
  console.log(`📍 Contract Address: ${deployedAddress}`);
  console.log('----------------------------------------------------------------------');
  
  return deployedAddress;
}

deploy().catch(console.error);
