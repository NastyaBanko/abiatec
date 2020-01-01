import React from "react";
import { Button, Form, Input } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { actions as customActions } from "../../../store/custom";

class AddItem extends React.Component {
  state = {
    name: ""
  };
  newItemName = e => {
    this.setState({ name: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.name);
    this.setState({ name: "" });
  };
  render() {
    const { addItem } = this.props;
    return (
      <Form onSubmit={this.onSubmit}>
        <Input
          type="text"
          placeholder="Add new action"
          onChange={this.newItemName}
          value={this.state.name}
          style={{ width: "300px" }}
        />
        <Button
          type="primary"
          onClick={() => {
            addItem(this.state.name);
          }}
        >
          Add
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    card: state.custom.card
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addItem: customActions.addItem
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
