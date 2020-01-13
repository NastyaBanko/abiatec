// @flow
import * as React from "react";
import "./style.css";

import ToolBar from "../../organisms/ToolBar";
import CharacterCards from "../../../containers/CharacterCards";

class MainPage extends React.Component {
  state = {
    error: false
  };

  componentDidCatch(error, info) {
    this.setState({ error: true });
  }

  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    return (
      <div className="MainPage" style={{ textAlign: "center" }}>
        <ToolBar />
        <CharacterCards />
      </div>
    );
  }
}

export default MainPage;
