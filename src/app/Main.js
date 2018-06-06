import React, { Component } from "react";
import { connect } from "react-redux";
import TabBar from "./components/TabBar";
import ToDoListContainer from "./containers/ToDoListContainer";
import ProfilesContainer from "./containers/ProfilesContainer";
import { switchTab } from "../store/actions";

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
      <div className="main">
        <TabBar
          items={["To Do", "Profiles"]}
          activeTab={this.props.activeTab}
          onTabChange={index => this.props.switchTab(index)}
        />
        {this.renderContent()}
      </div>
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
