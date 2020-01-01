// @flow
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as customActions } from "../../store/custom";

import MainPage from "../../components/pages/MainPage";

const mapStateToProps = state => {
  return {
    films: state.custom.ghibliFilms,
    card: state.custom.card
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getFilms: customActions.getGhibliFilms,
      changeColor: customActions.changeColor,
      doneItem: customActions.doneItem
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
