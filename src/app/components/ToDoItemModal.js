import React, { Component } from "react";
import AnimatedBox from "../../common/AnimatedBox";
import { View, Text, Button, TextInput } from "../../react-native-wrapper";

const defaultState = { text: "", action: "Add" };

export default class ToDoItemModal extends Component {
  state = defaultState;

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.visible && this.props.visible) {
      if (this.props.item) {
        this.setState({ text: this.props.item.title, action: "Save" });
      }

      this.input.focus();
    }
  }

  render() {
    const { visible, onAdd, onSave, onCancel } = this.props;
    const { action, text } = this.state;

    return (
      <AnimatedBox
        style={{
          position: "absolute",
          backgroundColor: "lightgrey",
          top: 0,
          left: 0,
          right: 0,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: 20
        }}
        pose={visible ? "visible" : "hidden"}
      >
        <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
          Add new item
        </Text>
        <TextInput
          innerRef={input => (this.input = input)}
          value={text}
          style={{ width: "100%" }}
          onChangeText={text => this.setState({ text })}
        />
        <View>
          <Button
            title={action}
            contentStyle={{ width: 100, margin: 10 }}
            onPress={() => {
              this.state.action === "Add"
                ? onAdd(this.state.text)
                : onSave(this.state.text);
              this.setState(defaultState);
            }}
          />
          <Button
            title="Cancel"
            contentStyle={{ width: 100, margin: 10 }}
            onPress={() => {
              onCancel();
              this.setState(defaultState);
            }}
          />
        </View>
      </AnimatedBox>
    );
  }
}
