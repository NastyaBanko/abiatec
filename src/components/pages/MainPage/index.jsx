// @flow
import * as React from "react";
import { Card, Typography, List, Button } from "antd";
import "./style.css";

import TodoHeader from "../../organisms/TodoHeader";
import TodoStatus from "../../organisms/TodoStatus";
import ToolBar from "../../organisms/ToolBar";
import TodoCard from "../../organisms/TodoCard";
import AddItem from "../../organisms/AddItem";

const { Title, Text } = Typography;

class MainPage extends React.Component {
  state = {
    error: false
  };

  componentDidCatch(error, info) {
    this.setState({ error: true });
  }

  componentDidMount() {
    this.props.getFilms();
  }

  render() {
    const { error } = this.state;
    const { card, changeColor } = this.props;
    return (
      <div className="MainPage">
        <TodoHeader />
        <TodoStatus />
        <ToolBar />
        <TodoCard />
        <AddItem />
      </div>
    );
  }
}

export default MainPage;
