import {Federated} from '@callstack/repack/client';
import React from 'react';
import { Text } from 'react-native';

const Transactions = React.lazy(() => Federated.importModule('transactions', './App'));


const TransactionsScreen = () => {
  return (
    <React.Suspense fallback={<Text>Loading Transactions...</Text>}>
        <Transactions />
    </React.Suspense>
  );
};

export default TransactionsScreen;
