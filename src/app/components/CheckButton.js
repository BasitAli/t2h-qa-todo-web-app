import React from "react";
import { View, TouchableWithoutFeedback } from "../../react-native-wrapper";

export default function CheckButton({ onPress, checked, ...props }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          padding: 5,
          borderWidth: 2,
          borderColor: "black",
          borderStyle: "solid",
          borderRadius: 20
        }}
      >
        <View
          style={{
            width: 10,
            height: 10,
            borderRadius: 20,
            backgroundColor: checked ? "black" : "white"
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
