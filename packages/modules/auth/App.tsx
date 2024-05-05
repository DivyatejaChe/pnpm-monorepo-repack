import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';

import BalanceInquiryBUP from '../../../apps/ncbApp/shared/organisms/BalanceInquiryBUP';
import TransactionHistoryPPI from '../../../apps/ncbApp/shared/organisms/TransactionHistoryPPI';

function App(): React.JSX.Element {
  return (

      <SafeAreaView>
          <View>
            <Text>AUTH MODULE</Text>
            <TransactionHistoryPPI />
            <BalanceInquiryBUP />
          </View>
      </SafeAreaView>
  );
}

export default App;
