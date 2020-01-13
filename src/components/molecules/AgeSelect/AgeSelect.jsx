import React from "react";
import { Select, Slider, InputNumber, Row, Col } from "antd";

const { Option } = Select;

class AgeSelect extends React.Component {
  state = {
    error: false
  };

  componentDidCatch(error, info) {
    this.setState({ error: true });
  }

  componentDidMount() {
    this.props.getCharacters();
  }

  getCurrentAge = date => {
    return (
      ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) |
      0
    );
  };

  findAvailableAges = () => {
    const birthday = [];
    const ages = [];

    this.props.characters.forEach(el => {
      if (el.birthday !== "Unknown") {
        let date = el.birthday.split("-");
        [date[0], date[1], date[2]] = [date[2], date[0], date[1]];
        birthday.push(date.join("-"));
      }
    });

    birthday.forEach(el => {
      ages.push(this.getCurrentAge(el));
    });

    return ages;
  };

  render() {
    const { minAge, maxAge, onMinAge, onMaxAge } = this.props;
    return (
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <Select
          defaultValue={`Age from: ${minAge || "choose"}`}
          style={{ width: 160 }}
          value={`Age from: ${minAge || "choose"}`}
        >
          <Option value="minSlider">
            <Slider
              min={Math.min(...this.findAvailableAges())}
              max={maxAge || Math.max(...this.findAvailableAges())}
              defaultValue={minAge}
              onChange={onMinAge}
            />
          </Option>
        </Select>
        <Select
          defaultValue={`Age up to: ${maxAge || "choose"}`}
          style={{ width: 160 }}
          value={`Age up to: ${maxAge || "choose"}`}
        >
          <Option value="maxSlider">
            <Slider
              reverse={true}
              min={minAge || Math.min(...this.findAvailableAges())}
              max={Math.max(...this.findAvailableAges())}
              defaultValue={maxAge}
              onChange={onMaxAge}
            />
          </Option>
        </Select>
      </div>
    );
  }
}

export default AgeSelect;
