import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button
} from 'react-native';

function App({navigation}: any): React.JSX.Element {
  return (
    <SafeAreaView>
        <View>
            <Text>Welcome to NCB Host App</Text>
            <Button
                title="Go to Auth"
                onPress={() => navigation.navigate('AUTH')}
            />
            <Button
                title="Go to Transactions"
                onPress={() => navigation.navigate('TRANSACTIONS')}
            />
        </View>
    </SafeAreaView>
  );
}

export default App;
