// @flow
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as customActions } from "../../store/custom";

import MainPage from "../../components/pages/MainPage";

const mapStateToProps = state => {
  return {
    characters: state.custom.breakingBadCharacters
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCharacters: customActions.getBreakingBad
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
