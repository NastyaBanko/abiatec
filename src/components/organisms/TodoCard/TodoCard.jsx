import React from "react";
import { Card, Button, Input } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { actions as customActions } from "../../../store/custom";

const TodoCard = props => {
  const {
    card,
    changeColor,
    doneItem,
    deleteItem,
    term,
    buttonStatus,
    onChangeDescrip,
    clickDescrip,
    changedDescrip,
    changeDescrip,
    clikedTag
  } = props;

  const search = () => {
    let filteredArr;
    if (term === "") {
      filteredArr = [...card];
    } else {
      filteredArr = card.filter(item => {
        return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
      });
    }
    return filteredArr;
  };

  const filter = (items, buttonStatus) => {
    let result;
    if (buttonStatus === "All") {
      return items;
    } else if (buttonStatus === "Active") {
      result = items.filter(item => {
        return !item.done;
      });
    } else if (buttonStatus === "Done") {
      result = items.filter(item => {
        return item.done;
      });
    } else if (buttonStatus !== "") {
      result = items.filter(item => {
        let filteredItem;
        item.tag().forEach(tag => {
          if (tag.name === buttonStatus) {
            filteredItem = item;
          }
        });
        return filteredItem;
      });
    } else {
      return items;
    }
    return result;
  };

  let visibleItems = filter(search(), buttonStatus);
  return (
    <div>
      {visibleItems.map(el => {
        let styles = {};
        let descripStyle = {};
        let changeDescripStyle = { display: "none" };
        if (el.important) {
          styles.color = "red";
          styles.fontWeight = "bold";
        }

        if (el.done) styles.textDecoration = "line-through";

        if (el.clickedDescrip) {
          descripStyle.display = "none";
          changeDescripStyle.display = "inline-block";
        }

        return (
          <Card
            title={
              <span
                style={styles}
                onClick={() => {
                  doneItem(el.id);
                }}
              >
                {el.name}
              </span>
            }
            style={{ width: 400 }}
            key={el.id}
          >
            <p style={{ display: "flex", justifyContent: "space-between" }}>
              <span
                style={descripStyle}
                onClick={() => {
                  clickDescrip(el.id);
                }}
              >
                {el.description}
              </span>
              <span style={changeDescripStyle}>
                <Input
                  style={{ width: "100px" }}
                  onChange={e => {
                    let term = e.target.value;
                    onChangeDescrip(term);
                  }}
                  type="text"
                  defaultValue={el.description}
                />
                <Button
                  onClick={() => {
                    const payload = {
                      changedText: changedDescrip,
                      changedId: el.id
                    };
                    changeDescrip(payload);
                  }}
                >
                  Change
                </Button>
              </span>
              <span>
                <Button
                  onClick={() => {
                    changeColor(el.id);
                  }}
                >
                  !
                </Button>
                <Button
                  onClick={() => {
                    deleteItem(el.id);
                  }}
                >
                  Delete
                </Button>
              </span>
            </p>
          </Card>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    card: state.custom.card,
    term: state.custom.term,
    buttonStatus: state.custom.buttonStatus,
    changedDescrip: state.custom.changedDescrip,
    clikedTag: state.custom.clikedTag
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeColor: customActions.changeColor,
      doneItem: customActions.doneItem,
      deleteItem: customActions.deleteItem,
      onChangeDescrip: customActions.onChangeDescrip,
      clickDescrip: customActions.clickDescrip,
      changeDescrip: customActions.changeDescrip
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TodoCard);
