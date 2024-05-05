import React from "react";
import { View } from "react-native";

// import { BaseText } from "@app-components-atoms/Text";
// import { BaseList } from "@app-components-atoms/List";

import BaseText from "../../atoms/Text/BaseText";
import BaseList from "../../atoms/List/BaseList";
import BaseButton from "../../atoms/Button/BaseButton";


const TransactionHistoryPPI = (props): JSX.Element => {
  const { textContent = "I am from PPI to view transactions" } = props;

  // this data will come from backend
const transactionsData = [
  {id: '1', txnAmount: '100 THB', txnDate: '24/04/2024'},
  {id: '2', txnAmount: '75 THB', txnDate: '28/04/2024'},
];


  return (
    <View>
      <BaseText content={textContent} />
      <BaseList data={transactionsData} />
      <BaseButton title="Fetch Txns" onPress={() => console.log("Hello")} />
    </View>
  );
};

export default TransactionHistoryPPI;
