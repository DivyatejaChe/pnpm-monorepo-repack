import React from "react";
import { Button } from "react-native";

const BaseButton = (props): JSX.Element => {
  const {
    title = "press me",
    color = "#f194ff",
    onPress = () => console.log("Base Button pressed"),
    isDisabled = false,
  } = props;

  return (
    <Button
      title={title}
      onPress={onPress}
      color={color}
      disabled={isDisabled}
    />
  );
};

export default BaseButton;
