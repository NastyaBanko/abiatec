import React from "react";
import { Typography } from "antd";

import { connect } from "react-redux";

const { Text } = Typography;

const TodoStatus = props => {
  let { card } = props;
  let doneValue = 0;
  card.forEach(item => {
    if (item.done) doneValue++;
  });
  return (
    <Text>{`${card.length - doneValue} more to do, ${doneValue} done`}</Text>
  );
};

const mapStateToProps = state => {
  return {
    card: state.custom.card
  };
};

export default connect(mapStateToProps)(TodoStatus);
