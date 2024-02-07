import {Federated} from '@callstack/repack/client';
import React from 'react';
import { Text } from 'react-native';

const Auth = React.lazy(() => Federated.importModule('auth', './App'));


const AuthScreen = () => {
  return (
    <React.Suspense fallback={<Text>Loading Auth...</Text>}>
        <Auth />
    </React.Suspense>
  );
};

export default AuthScreen;
