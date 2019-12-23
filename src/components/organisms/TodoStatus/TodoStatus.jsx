import React from "react";
import { Typography } from "antd";

import { connect } from "react-redux";

const { Text } = Typography;

const TodoStatus = ({ done, toDo }) => {
  return <Text>{`${toDo} more to do, ${done} done`}</Text>;
};

const mapStateToProps = state => {
  return {
    done: state.done,
    toDo: state.toDo
  };
};

export default connect(mapStateToProps)(TodoStatus);
