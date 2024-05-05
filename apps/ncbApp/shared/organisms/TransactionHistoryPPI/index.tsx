import React from "react";
import { View } from "react-native";

// import { BaseText } from "@app-components-atoms/Text";
// import { BaseList } from "@app-components-atoms/List";

import BaseText from "../../atoms/Text/BaseText";
import BaseList from "../../atoms/List/BaseList";
import BaseButton from "../../atoms/Button/BaseButton";

import { useSelector, useDispatch } from 'react-redux';
import { fetchTxns, transactions  } from '../../../redux/transactionSlice';

const TransactionHistoryPPI = (props): JSX.Element => {
  const { textContent = "I am from PPI to view transactions" } = props;

  const txnData = useSelector(transactions);
  const dispatch = useDispatch();

  return (
    <View>
      <BaseText content={textContent} />
      <BaseList data={txnData} />
      <BaseButton title="Fetch Txns" onPress={() => dispatch(fetchTxns())} />
    </View>
  );
};

export default TransactionHistoryPPI;
