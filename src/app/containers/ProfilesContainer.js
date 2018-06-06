import { connect } from "react-redux";
import Profiles from "../components/Profiles";
import { updateProfile, clearAllItems } from "../../store/actions";

const mapStateToProps = (state, ownProps) => {
  return {
    profile: state.profile
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateProfile: profile => {
      dispatch(updateProfile(profile));
    },
    clearAllItems: profile => {
      dispatch(clearAllItems(profile));
    }
  };
};

const ProfilesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profiles);

export default ProfilesContainer;
