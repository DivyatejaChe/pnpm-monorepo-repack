import {Federated} from '@callstack/repack/client';
import React from 'react';
import { ScrollView, Text } from 'react-native';

const Auth = React.lazy(() => Federated.importModule('auth', './App'));
const Transactions = React.lazy(() => Federated.importModule('transactions', './App'));

const AuthScreen = () => {
  return (
    <ScrollView>
    <React.Suspense fallback={<Text>Loading Auth MFE...</Text>}>
        <Auth />
    </React.Suspense>
    <React.Suspense fallback={<Text>Loading Transactions MFE...</Text>}>
        <Transactions />
    </React.Suspense>
    </ScrollView>
  );
};

export default AuthScreen;
