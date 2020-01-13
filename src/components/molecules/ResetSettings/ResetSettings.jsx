import React from "react";
import { Button } from "antd";

class ResetSettings extends React.Component {
  render() {
    const { resetSettings } = this.props;
    return <Button onClick={resetSettings}>Reset Settings</Button>;
  }
}

export default ResetSettings;
