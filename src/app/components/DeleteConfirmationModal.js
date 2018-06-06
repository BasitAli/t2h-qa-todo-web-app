import React, { Component } from "react";
import AnimatedBox from "../../common/AnimatedBox";
import { Button, Text, View } from "../../react-native-wrapper";

export default class DeleteConfirmationModal extends Component {
  render() {
    const { visible, onProceed, onCancel } = this.props;

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
          Are you sure you want to clear all items?
        </Text>

        <View>
          <Button
            title={"Yes"}
            contentStyle={{ width: 100, margin: 10 }}
            onPress={onProceed}
          />
          <Button
            title="No"
            contentStyle={{ width: 100, margin: 10 }}
            onPress={onCancel}
          />
        </View>
      </AnimatedBox>
    );
  }
}
