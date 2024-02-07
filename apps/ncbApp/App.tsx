import { Federated } from '@callstack/repack/client';
import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/navigators/MainNavigator';

//const HelpCenter = React.lazy(() => Federated.importModule('help', './App'));


export default function App() {
  return (
    <NavigationContainer>
        <MainNavigator />
        {/* <React.Suspense fallback={<Text>Loading Help Center...</Text>}>
          <HelpCenter />
        </React.Suspense> */}
    </NavigationContainer>
  );
}