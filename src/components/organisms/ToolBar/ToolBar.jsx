import React from "react";
import { Button, Form, Input, Card } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { actions as customActions } from "../../../store/custom";

const ToolBar = props => {
  const { statusCollection, statusChange, searchChange, term, card } = props;
  const { all, active, done } = statusCollection;
  return (
    <Form>
      <Input
        value={term}
        onChange={e => {
          let term = e.target.value;
          searchChange(term);
        }}
        placeholder="Type to search"
        style={{ width: "150px", marginRight: "5px" }}
      />
      <Button
        onClick={() => {
          statusChange(all);
        }}
        type="primary"
        style={{ marginRight: "5px" }}
      >
        All
      </Button>
      <Button
        onClick={() => {
          statusChange(active);
        }}
        type="primary"
        style={{ marginRight: "5px" }}
      >
        Active
      </Button>
      <Button
        type="primary"
        onClick={() => {
          statusChange(done);
        }}
      >
        Done
      </Button>
      <Card
        title="Available Tags"
        style={{ width: 400, backgroundColor: "#96d7f5" }}
      >
        {card.map(el => {
          if (el.tag) {
            return (
              <Button
                onClick={() => {
                  statusChange(el.tag);
                }}
                key={el.tagKey}
              >
                {el.tag}
              </Button>
            );
          }
        })}
      </Card>
    </Form>
  );
};

const mapStateToProps = state => {
  return {
    statusCollection: state.custom.statusCollection,
    term: state.custom.term,
    card: state.custom.card
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      statusChange: customActions.statusChange,
      searchChange: customActions.searchChange
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ToolBar);
