import React from "react";

import { Button, Form, Input } from "antd";

const ToolBar = () => {
  return (
    <Form>
      <Input
        placeholder="Type to search"
        style={{ width: "150px", marginRight: "5px" }}
      />
      <Button type="primary" style={{ marginRight: "5px" }}>
        All
      </Button>
      <Button type="primary" style={{ marginRight: "5px" }}>
        Active
      </Button>
      <Button type="primary">Done</Button>
    </Form>
  );
};

export default ToolBar;
