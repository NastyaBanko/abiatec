let generateId = 10;

const initialState = {
    items: [
        {
            name: "Do homework", important: false, done: false, id: generateId++
        },
        {
            name: "Play with cat", important: false, done: false, id: generateId++
        },
        {
            name: "Paint new picture", important: false, done: false, id: generateId++
        }
    ],
    done: 0,
    toDo: 0,
    rows: [],
    styles: { color: "black" },
    term: "",
    status: "All"
};

export const showStatus = () => ({ type: "SHOW_STATUS" });

// export const refreshData = () => ({ type: "REFRESH_DATA" });

export const makeImportant = (clickedItemId) => ({ type: "MAKE_IMPORTANT", clickedItemId });

export default initialState;
