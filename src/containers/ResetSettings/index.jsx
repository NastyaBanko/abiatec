// @flow
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as customActions } from "../../store/custom";

import ResetSettings from "../../components/molecules/ResetSettings";

const mapStateToProps = state => {
  return {
    characters: state.custom.breakingBadCharacters
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCharacters: customActions.getBreakingBad,
      resetSettings: customActions.resetSettings
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ResetSettings);
