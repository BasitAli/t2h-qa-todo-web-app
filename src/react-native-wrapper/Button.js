import React from "react";
import { TouchableWithoutFeedback, Text } from ".";

export default function Button({ title, contentStyle, onPress, ...props }) {
  return (
    <TouchableWithoutFeedback {...props} onPress={onPress}>
      <Text
        style={{
          padding: 10,
          backgroundColor: "#555",
          borderRadius: 5,
          color: "white",
          alignItems: "center",
          justifyContent: "center",
          ...contentStyle
        }}
      >
        {title}
      </Text>
    </TouchableWithoutFeedback>
  );
}
