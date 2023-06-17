import { StyleSheet, Text, View, TouchableNativeFeedback } from "react-native";
import React from "react";

const GoalItem = (props) => {
  return (
    <TouchableNativeFeedback onPress={props.onPress}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
