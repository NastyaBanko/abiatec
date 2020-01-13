// @flow
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as customActions } from "../../store/custom";

import CategorySelect from "../../components/molecules/CategorySelect";

const mapStateToProps = state => {
  return {
    characters: state.custom.breakingBadCharacters,
    currentCategory: state.custom.currentCategory
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCharacters: customActions.getBreakingBad,
      onCurrentCategory: customActions.onCurrentCategory
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CategorySelect);
