import React from 'react';
import { Layout } from './components/Layout';
import { WalletConnect } from './components/WalletConnect';
import { AIShieldGuard } from './components/AIShieldGuard';
import { useMidnight } from './hooks/useMidnight';

export function App() {
  const {
    wallet,
    verification,
    isProcessing,
    activeStep,
    connectWallet,
    disconnectWallet,
    proveAndVerifyIdentity,
    revokeVerification,
  } = useMidnight();

  return (
    <Layout
      headerRight={
        <WalletConnect
          wallet={wallet}
          onConnect={connectWallet}
          onDisconnect={disconnectWallet}
        />
      }
    >
      <AIShieldGuard
        wallet={wallet}
        verification={verification}
        isProcessing={isProcessing}
        activeStep={activeStep}
        onVerify={proveAndVerifyIdentity}
        onRevoke={revokeVerification}
        onConnectWallet={connectWallet}
      />
    </Layout>
  );
}

export default App;
