import React from "react";

export default function View({ style, ...props }) {
  if (!style) {
    style = {};
  }

  if (style.length) {
    style = Object.assign({}, ...style);
  }

  if (!style.display) {
    style.display = "flex";
  }

  return <div style={style} {...props} />;
}
