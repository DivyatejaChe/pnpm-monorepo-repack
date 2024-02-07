import { Federated } from '@callstack/repack/client';
import React from 'react';
import { Text, SafeAreaView } from 'react-native';

const Auth = React.lazy(() => Federated.importModule('auth', './App'));
const Transactions = React.lazy(() => Federated.importModule('transactions', './App'));
//const HelpCenter = React.lazy(() => Federated.importModule('help', './App'));

export default function App() {
  return (
    <SafeAreaView>
      <Text>Host App</Text>
      <React.Suspense fallback={<Text>Loading Auth...</Text>}>
        <Auth />
      </React.Suspense>
      <React.Suspense fallback={<Text>Loading Transactions...</Text>}>
        <Transactions />
      </React.Suspense>
      {/* <React.Suspense fallback={<Text>Loading Help Center...</Text>}>
        <HelpCenter />
      </React.Suspense> */}
    </SafeAreaView>
  );
}