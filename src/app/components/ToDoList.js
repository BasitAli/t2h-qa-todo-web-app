import React, { Component } from "react";
import {
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
  Button
} from "../../react-native-wrapper";
import CheckButton from "./CheckButton";
import ToDoItemModal from "./ToDoItemModal";

const ToDoItem = ({ item, onCheck, onEdit, onDelete }) => {
  const { title, checked } = item;
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        padding: 10,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
        borderRadius: 5
      }}
    >
      <CheckButton onPress={() => onCheck(!checked)} checked={checked} />
      <TouchableWithoutFeedback
        style={{
          flex: 1,
          flexDirection: "row",
          alignSelf: "stretch",
          alignItems: "center"
        }}
        onPress={onEdit}
      >
        <Text style={{ marginLeft: 10 }}>{title}</Text>
      </TouchableWithoutFeedback>
      <Button title="Delete" onPress={onDelete} />
    </View>
  );
};

class ToDoList extends Component {
  state = {
    selectedItem: -1,
    showModal: false
  };

  onEdit(index) {
    this.setState({
      showModal: true,
      selectedItem: index
    });
  }

  onDelete(item) {
    this.props.removeItem(item);
  }

  onCheckChanged(item, checked) {
    this.props.updateItem({ id: item.id, checked });
  }

  onSave(item, title) {
    this.props.updateItem({ id: item.id, title });
    this.closeModal();
  }

  addItem(title) {
    this.props.addItem({ title });
    this.closeModal();
  }

  closeModal() {
    this.setState({
      showModal: false,
      selectedItem: -1
    });
  }

  render() {
    const { items } = this.props;
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <ScrollView style={{ flex: 1, flexDirection: "column" }}>
          {items.map((item, index) => (
            <ToDoItem
              key={index}
              item={item}
              onCheck={checked => this.onCheckChanged(item, checked)}
              onEdit={() => this.onEdit(index)}
              onDelete={() => this.onDelete(item)}
            />
          ))}
        </ScrollView>
        <TouchableWithoutFeedback
          style={{ alignSelf: "center" }}
          onPress={() => this.setState({ showModal: true })}
        >
          <Text
            style={{
              padding: 10,
              margin: 10,
              backgroundColor: "#555",
              borderRadius: 5,
              color: "white"
            }}
          >
            New Item
          </Text>
        </TouchableWithoutFeedback>
        <ToDoItemModal
          item={
            this.state.selectedItem >= 0 ? items[this.state.selectedItem] : null
          }
          visible={this.state.showModal}
          onCancel={() => this.closeModal()}
          onAdd={title => this.addItem(title)}
          onSave={title => this.onSave(items[this.state.selectedItem], title)}
        />
      </View>
    );
  }
}

export default ToDoList;
