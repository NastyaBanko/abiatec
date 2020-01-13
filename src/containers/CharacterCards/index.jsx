// @flow
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as customActions } from "../../store/custom";

import CharacterCards from "../../components/organisms/CharacterCards";

const mapStateToProps = state => {
  return {
    characters: state.custom.breakingBadCharacters,
    currentStatus: state.custom.currentStatus,
    currentCategory: state.custom.currentCategory,
    minAge: state.custom.minAge,
    maxAge: state.custom.maxAge,
    sortAlphabetical: state.custom.sortAlphabetical
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCharacters: customActions.getBreakingBad
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCards);
