import React from "react";
import { Card, Avatar } from "antd";

class CharacterCards extends React.Component {
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

  filterAge(items, item, status) {
    if (status.minAge === 0 || status.maxAge === 0) {
      return items;
    } else if (item.birthday !== "Unknown") {
      let date = item.birthday.split("-");
      [date[0], date[1], date[2]] = [date[2], date[0], date[1]];
      let curAge = this.getCurrentAge(date.join("-"));
      return curAge >= status.minAge && curAge <= status.maxAge;
    }
  }

  filter(items, status, type) {
    let result;
    let defaultStatus = type[0].toUpperCase() + type.slice(1);
    if (status === "All" || status === defaultStatus) {
      return items;
    } else if (status !== "") {
      result = items.filter(item => {
        if (type === "birthday") {
          return this.filterAge(items, item, status);
        } else return item[type] === status;
      });
    } else {
      return items;
    }
    return result;
  }

  sortAlph(items) {
    items.sort(function(a, b) {
      let nameA = a.name.toLowerCase();
      let nameB = b.name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  }

  render() {
    const {
      characters,
      currentStatus,
      currentCategory,
      minAge,
      maxAge,
      sortAlphabetical
    } = this.props;
    const types = {
      status: "status",
      category: "category",
      birthday: "birthday"
    };
    const ageInterval = {
      minAge,
      maxAge
    };
    let statusItems = this.filter(characters, currentStatus, types.status);
    let categoryItems = this.filter(
      statusItems,
      currentCategory,
      types.category
    );
    let visibleItems = this.filter(categoryItems, ageInterval, types.birthday);

    if (sortAlphabetical) {
      this.sortAlph(visibleItems);
    }

    return (
      <div>
        {visibleItems.map(el => {
          return (
            <Card
              key={el.char_id}
              style={{ width: 300, display: "inline-block", margin: "5px" }}
            >
              <p>
                <Avatar
                  style={{ height: "125px" }}
                  shape="square"
                  size={100}
                  src={el.img}
                />
              </p>
              <p style={{ margin: "5px" }}>Name: {el.name}</p>
              <p style={{ margin: "5px" }}>Nickname: {el.nickname}</p>
              <p style={{ margin: "5px" }}>
                Birthday: {el.birthday.split("-")[2] || "Unknown"}
              </p>
              <p style={{ margin: "5px" }}>Status: {el.status}</p>
              <p style={{ margin: "5px" }}>Category: {el.category}</p>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default CharacterCards;
