import React from "react";
import { Button } from "antd";

class SortAlphabetically extends React.Component {
  render() {
    const { sortAlphabetical } = this.props;
    return <Button onClick={sortAlphabetical}>Sort Alphabetically</Button>;
  }
}

export default SortAlphabetically;
