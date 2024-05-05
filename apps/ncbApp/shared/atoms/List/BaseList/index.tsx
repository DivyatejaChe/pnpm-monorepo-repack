import React from "react";
import { FlatList, Text } from "react-native";

const BaseList = (props): JSX.Element => {
  const { data } = props;

  const Item = ({ content }) => <Text>{content}</Text>;

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Item content={item.content} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default BaseList;
