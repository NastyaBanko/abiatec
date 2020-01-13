// @flow
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as customActions } from "../../store/custom";

import StatusSelect from "../../components/molecules/StatusSelect";

const mapStateToProps = state => {
  return {
    characters: state.custom.breakingBadCharacters,
    currentStatus: state.custom.currentStatus
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCharacters: customActions.getBreakingBad,
      onCurrentStatus: customActions.onCurrentStatus
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(StatusSelect);
