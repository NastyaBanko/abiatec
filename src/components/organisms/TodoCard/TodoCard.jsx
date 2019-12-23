import React from "react";

import { Card } from "antd";
import { connect } from "react-redux";

import TodoTableItems from "../../molecules/TodoTableItems";

const TodoCard = () => {
  return (
    <Card
      size="small"
      title="Actions"
      style={{ marginTop: "10px", marginBottom: "10px" }}
    >
      <TodoTableItems />
    </Card>
  );
};

// const mapStateToProps = state => {
//   return {
//     rows: state.rows
//   };
// };

// export default connect(mapStateToProps)(TodoCard);
export default TodoCard;
