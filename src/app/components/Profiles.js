import React, { Component } from "react";

import { View, Text, TextInput, Button } from "../../react-native-wrapper";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

const ProfileItem = ({ label, value, onChange }) => (
  <View style={{ flexDirection: "column", marginBottom: 20 }}>
    <Text style={{ fontWeight: "bold" }}>{label}</Text>
    <TextInput value={value} onChangeText={onChange} />
  </View>
);

class Profiles extends Component {
  state = {
    showModal: false
  };

  updateField = async (name, value) => {
    this.props.updateProfile({ [name]: value });
  };

  onDelete() {
    this.setState({
      showModal: true
    });
  }

  clearAllItems() {
    this.props.clearAllItems();
    this.closeModal();
  }

  closeModal() {
    this.setState({
      showModal: false
    });
  }

  render() {
    const { name, about, location } = this.props.profile;

    return (
      <View style={{ flexDirection: "column", padding: 20 }}>
        <ProfileItem
          label="Name"
          value={name}
          onChange={value => this.updateField("name", value)}
        />
        <ProfileItem
          label="About"
          value={about}
          onChange={value => this.updateField("about", value)}
        />
        <ProfileItem
          label="Location"
          value={location}
          onChange={value => this.updateField("location", value)}
        />

        <Button
          title="Clear all items"
          onPress={() => this.onDelete()}
          contentStyle={{ flex: 1 }}
        />

        <DeleteConfirmationModal
          visible={this.state.showModal}
          onCancel={() => this.clearAllItems()}
          onProceed={() => this.clearAllItems()}
        />
      </View>
    );
  }
}

export default Profiles;
