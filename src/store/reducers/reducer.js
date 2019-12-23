import React from "react";

import { Button } from "antd";

import initialState from "../custom/handlers";
import TodoTableItems from "../../components/molecules/TodoTableItems";
// import "./reducer.css";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_STATUS":
            let doneValue = 0;
            state.items.forEach(item => {
                if (item.done) doneValue++;
            });
            state.done = doneValue;
            state.toDo = state.items.length - doneValue;
            return state;
        case "MAKE_IMPORTANT":
            let changedItem = null;
            let changedId = null;
            state.items.forEach((item, i) => {
                if (item.id === action.clickedItemId) {
                    changedItem = item;
                    changedId = i;
                }
            });
            const newItem = { ...changedItem, important: !changedItem.important };
            state.items[changedId] = newItem;
            if (changedItem.important) state.styles = { color: "red" };
            console.log(state);
            return state;
        default:
            return state;
    }
}

export default reducer;