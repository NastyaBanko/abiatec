import React from "react";
import { Select } from "antd";

const { Option } = Select;

class CategorySelect extends React.Component {
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
    const { characters, onCurrentCategory, currentCategory } = this.props;
    const availableCategory = ["All"];

    characters.forEach(el => {
      if (!availableCategory.includes(el.category)) {
        availableCategory.push(el.category);
      }
    });

    return (
      <div>
        <Select
          defaultValue={currentCategory}
          style={{ width: 120 }}
          onChange={value => {
            onCurrentCategory(value);
          }}
          value={currentCategory}
        >
          {availableCategory.map(el => {
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

export default CategorySelect;
