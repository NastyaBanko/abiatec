// @flow
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as customActions } from "../../store/custom";

import SortAlphabetically from "../../components/molecules/SortAlphabetically";

const mapStateToProps = state => {
  return {
    characters: state.custom.breakingBadCharacters
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCharacters: customActions.getBreakingBad,
      sortAlphabetical: customActions.sortAlphabetical
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SortAlphabetically);
