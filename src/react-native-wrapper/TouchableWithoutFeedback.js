import React from "react";
import { View } from ".";

export default function TouchableWithoutFeedback({ onPress, style, ...props }) {
  const touchableStyle = { cursor: "pointer" };
  if (!style) {
    style = touchableStyle;
  } else if (style.length) {
    style = [touchableStyle, ...style];
  } else {
    style = { ...touchableStyle, ...style };
  }

  return <View onClick={onPress} style={style} {...props} />;
}
