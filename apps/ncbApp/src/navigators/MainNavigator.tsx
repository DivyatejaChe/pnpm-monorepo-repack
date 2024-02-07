import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AuthScreen from '../screens/AuthScreen';
import TransactionsScreen from '../screens/TransactionsScreen';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HOME">
      <Stack.Screen name="HOME" component={HomeScreen} />
      <Stack.Screen name="AUTH" component={AuthScreen} />
      <Stack.Screen name="TRANSACTIONS" component={TransactionsScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
