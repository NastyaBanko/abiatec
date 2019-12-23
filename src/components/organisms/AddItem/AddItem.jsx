import React from "react";
import { Button, Form, Input } from "antd";

const AddItem = () => {
  return (
    <Form>
      <Input placeholder="Add new action" style={{ width: "300px" }} />
      <Button type="primary">Add</Button>
    </Form>
  );
};

export default AddItem;
