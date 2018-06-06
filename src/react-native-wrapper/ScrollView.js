import React from "react";
import { View } from ".";

export default function ScrollView({ style, ...props }) {
  const scrollerStyle = { overflowX: "hidden", overflowY: "scroll" };
  if (!style) {
    style = scrollerStyle;
  } else if (style.length) {
    style = [scrollerStyle, ...style];
  } else {
    style = { ...scrollerStyle, ...style };
  }

  return <View style={style} {...props} />;
}
