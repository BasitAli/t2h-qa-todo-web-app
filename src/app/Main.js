import React, { Component } from "react";
import { connect } from "react-redux";
import TabBar from "./components/TabBar";
import ToDoListContainer from "./containers/ToDoListContainer";
import ProfilesContainer from "./containers/ProfilesContainer";
import { switchTab } from "../store/actions";
import { View } from "../react-native-wrapper";

class Main extends Component {
  renderContent() {
    switch (this.props.activeTab) {
      case 0:
        return <ToDoListContainer />;
      case 1:
        return <ProfilesContainer />;
      default:
        return null;
    }
  }

  render() {
    return (
      <View className="main" style={{ flex: 1 }}>
        <TabBar
          items={["To Do", "Profiles"]}
          activeTab={this.props.activeTab}
          onTabChange={index => this.props.switchTab(index)}
        />
        {this.renderContent()}
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    activeTab: state.activeTab
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    switchTab: index => {
      dispatch(switchTab(index));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
