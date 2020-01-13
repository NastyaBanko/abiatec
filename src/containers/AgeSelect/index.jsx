// @flow
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as customActions } from "../../store/custom";

import AgeSelect from "../../components/molecules/AgeSelect";

const mapStateToProps = state => {
  return {
    characters: state.custom.breakingBadCharacters,
    minAge: state.custom.minAge,
    maxAge: state.custom.maxAge
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCharacters: customActions.getBreakingBad,
      onMinAge: customActions.onMinAge,
      onMaxAge: customActions.onMaxAge
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(AgeSelect);
