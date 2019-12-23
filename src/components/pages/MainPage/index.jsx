// @flow
import * as React from "react";
// import { Card, Typography, List } from "antd";
import "./style.css";

// const { Title, Text } = Typography;

import TodoHeader from "../../organisms/TodoHeader";
import TodoStatus from "../../organisms/TodoStatus";
import TodoCard from "../../organisms/TodoCard";
import ToolBar from "../../organisms/ToolBar";
import AddItem from "../../organisms/AddItem";

const MainPage = props => {
  return (
    <section className="todoList">
      <TodoHeader />
      <TodoStatus />
      <ToolBar />
      <TodoCard />
      <AddItem />
    </section>
  );
};

export default MainPage;
