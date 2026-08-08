import { setNetworkId } from '@midnight-ntwrk/midnight-js-network-id';

setNetworkId('testnet');

console.log('====================================================');
console.log(' AIShield Smart Contract Preprod Deployment');
console.log('====================================================');
console.log('Contract File: contracts/aishield.compact');
console.log('Managed Index: managed/contract/index.js');
console.log('Network Target: Midnight Preprod Testnet');
console.log('');
console.log('Deployment Command:');
console.log('  npx @midnight-ntwrk/midnight-js-cli deploy --contract managed/contract/index.js --network preprod');
console.log('');
console.log('After deployment finishes, copy the 0x... contract address and paste it back here!');
console.log('====================================================');
