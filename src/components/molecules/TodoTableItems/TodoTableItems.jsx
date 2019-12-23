import React from "react";
import { connect } from "react-redux";

import { Button } from "antd";

import * as actions from "../../../store/custom/handlers";

const TodoTableItems = ({ items, styles, makeImportant }) => {
  console.log(styles);
  let rows = [];
  items.forEach(item => {
    rows.push(
      <p
        key={item.id}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <span style={styles}>{item.name}</span>
        <span>
          <Button>Delete</Button>
          <Button
            onClick={() => {
              makeImportant(item.id);
            }}
          >
            !
          </Button>
        </span>
      </p>
    );
  });
  return rows;
};

const mapStateToProps = state => {
  return {
    items: state.items,
    styles: state.styles
  };
};

export default connect(mapStateToProps, actions)(TodoTableItems);
