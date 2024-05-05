import React from "react";
import { View } from "react-native";

// import { BaseButton } from "@app-components-atoms/Button";
// import { BaseText } from "@app-components-atoms/Text";

import BaseButton from "../../atoms/Button/BaseButton";
import BaseText from "../../atoms/Text/BaseText";

const BalanceInquiryBUP = (props): JSX.Element => {
  const { textContent = "I am from BUP", buttonTitle = "View balance" } = props;

  return (
    <View>
      <BaseText content={textContent} />
      <BaseButton title={buttonTitle} />
    </View>
  );
};

export default BalanceInquiryBUP;
