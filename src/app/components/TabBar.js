import React, { Component } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback
} from "../../react-native-wrapper";

const styles = {
  tabBar: {},
  tabBarItem: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderBottomStyle: "solid",
    borderBottomColor: "transparent"
  },
  tabBarItemActive: {
    borderBottomColor: "black"
  },
  tabBarItemText: { textAlign: "center" }
};

const TabBarItem = ({ title, index, active, onPress }) => (
  <TouchableWithoutFeedback
    onPress={onPress}
    style={[styles.tabBarItem, active ? styles.tabBarItemActive : {}]}
  >
    <Text style={styles.tabBarItemText}>{title}</Text>
  </TouchableWithoutFeedback>
);

class TabBar extends Component {
  render() {
    return (
      <View style={styles.tabBar}>
        {this.props.items.map((title, index) => (
          <TabBarItem
            key={index}
            active={this.props.activeTab === index}
            title={title}
            onPress={() => this.props.onTabChange(index)}
          />
        ))}
      </View>
    );
  }
}

export default TabBar;
