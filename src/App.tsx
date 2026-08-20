import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { WalletConnect } from './components/WalletConnect';
import { AIShieldGuard } from './components/AIShieldGuard';
import { VideoDemoPlayer } from './components/VideoDemoPlayer';
import { LedgerInspector } from './components/LedgerInspector';
import { UserRegistryView } from './components/UserRegistryView';
import { FeedbackDashboard } from './components/FeedbackDashboard';
import { BrandKitView } from './components/BrandKitView';
import { useMidnight } from './hooks/useMidnight';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('guard');

  const {
    wallet,
    verification,
    ledgerState,
    isProcessing,
    activeStep,
    connectWallet,
    disconnectWallet,
    proveAndVerifyIdentity,
    revokeVerification,
  } = useMidnight();

  return (
    <Layout
      activeTab={activeTab}
      onTabChange={setActiveTab}
      headerRight={
        <WalletConnect
          wallet={wallet}
          onConnect={connectWallet}
          onDisconnect={disconnectWallet}
        />
      }
    >
      {activeTab === 'guard' && (
        <AIShieldGuard
          wallet={wallet}
          verification={verification}
          ledgerState={ledgerState}
          isProcessing={isProcessing}
          activeStep={activeStep}
          onVerify={proveAndVerifyIdentity}
          onRevoke={revokeVerification}
          onConnectWallet={connectWallet}
        />
      )}

      {activeTab === 'demo' && <VideoDemoPlayer />}

      {activeTab === 'feedback' && <FeedbackDashboard />}

      {activeTab === 'users' && <UserRegistryView />}

      {activeTab === 'brand' && <BrandKitView />}
    </Layout>
  );
}

export default App;
