// @flow
import * as React from "react";
import { Select, Button } from "antd";

const { Option } = Select;

class StatusSelect extends React.Component {
  state = {
    error: false
  };

  componentDidCatch(error, info) {
    this.setState({ error: true });
  }

  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    const { error } = this.state;
    const { characters, onCurrentStatus, currentStatus } = this.props;
    const availableStatus = ["All"];

    characters.forEach(el => {
      if (!availableStatus.includes(el.status)) {
        availableStatus.push(el.status);
      }
    });

    return (
      <div>
        <Select
          defaultValue={currentStatus}
          style={{ width: 120 }}
          onChange={value => {
            onCurrentStatus(value);
          }}
          value={currentStatus}
        >
          {availableStatus.map(el => {
            return (
              <Option value={el} key={el}>
                {el}
              </Option>
            );
          })}
        </Select>
      </div>
    );
  }
}

export default StatusSelect;
