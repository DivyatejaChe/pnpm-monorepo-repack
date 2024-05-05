import React from "react";
import { Text } from "react-native";

const BaseText = (props): JSX.Element => {
  const { content = "Hello World!" } = props;

  return <Text>{content}</Text>;
};

export default BaseText;
