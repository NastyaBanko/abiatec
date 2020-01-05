import React from "react";
import { Button, Form, Input } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { actions as customActions } from "../../../store/custom";

class AddItem extends React.Component {
  state = {
    name: "",
    description: ""
  };
  newItemName = e => {
    this.setState({ name: e.target.value });
  };
  newItemDescription = e => {
    this.setState({ description: e.target.value });
  };

  addAction = () => {
    const newAction = {
      name: this.state.name,
      description: this.state.description
    };
    this.props.addItem(newAction);
    this.setState({ name: "", description: "" });
  };
  render() {
    const { addItem } = this.props;
    return (
      <Form>
        <Input
          type="text"
          placeholder="Name of your action"
          onChange={this.newItemName}
          value={this.state.name}
          style={{ width: "400px", display: "block", marginTop: "10px" }}
        />
        <Input
          type="text"
          placeholder="Description of your action"
          onChange={this.newItemDescription}
          value={this.state.description}
          style={{ width: "400px", display: "block" }}
        />
        <Button
          type="primary"
          style={{ width: "400px" }}
          onClick={this.addAction}
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
