import React from "react";

export default function TextInput({ onChangeText, innerRef, style, ...props }) {
  const inputStyle = {
    backgroundColor: "white",
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "#555",
    height: 40,
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10
  };

  if (!style) {
    style = inputStyle;
  } else if (style.length) {
    style = [inputStyle, ...style];
  } else {
    style = { ...inputStyle, ...style };
  }

  return (
    <input
      ref={innerRef}
      style={style}
      type="text"
      onChange={event => onChangeText && onChangeText(event.target.value)}
      {...props}
    />
  );
}
