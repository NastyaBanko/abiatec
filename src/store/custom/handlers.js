let generateId = 0;
let tagKey = 1000;

const initialState = {
    isLoading: false,
    error: null,
    ghibliFilms: [],
    card: [
        {
            name: "Do homework", important: false, done: false, id: generateId++, description: "JS", clickedDescrip: false, finishChange: false, tag: null, tagKey: tagKey++
        },
        {
            name: "Play with cat", important: false, done: false, id: generateId++, description: "Tokati", clickedDescrip: false, finishChange: false, tag: null, tagKey: tagKey++
        },
        {
            name: "Paint new picture", important: false, done: false, id: generateId++, description: "Homeless", clickedDescrip: false, finishChange: false, tag: null, tagKey: tagKey++
        }
    ],
    statusCollection: { all: "All", active: "Active", done: "Done" },
    buttonStatus: "All",
    term: "",
    changedDescrip: "",
};

export const clickDescrip = (state, { payload }) => {
    let id = payload;
    let changedArray = [...state.card];

    let indexOfArray = changedArray.findIndex((el) => {
        return el.id === id;
    });
    changedArray[indexOfArray].clickedDescrip = true;

    return {
        ...state,
        card: [...changedArray]
    };
};

export const searchChange = (state, { payload }) => {
    let term = payload;
    return {
        ...state,
        term: term,
    };
};

export const onChangeDescrip = (state, { payload }) => {
    let changedDescrip = payload;
    return {
        ...state,
        changedDescrip: changedDescrip,
    };
};

export const changeDescrip = (state, { payload }) => {
    let text = payload.changedText;
    let id = payload.changedId;
    let changedArray = [...state.card];

    if (text !== '') {
        let indexOfArray = changedArray.findIndex((el) => {
            return el.id === id;
        });
        changedArray[indexOfArray].description = text;
        changedArray[indexOfArray].finishChange = true;
        changedArray[indexOfArray].clickedDescrip = false;
    }

    return {
        ...state,
        card: [...changedArray]
    };
};

export const statusChange = (state, { payload }) => {
    let status = payload;
    return {
        ...state,
        buttonStatus: status,
    };
};

export const showStatus = (state, { payload }) => {
    let status = payload;
    let result;
    if (status === "All") {
        result = [...state.card];
    } else if (status === "Active") {
        result = state.card.filter(item => {
            return !item.done;
        });
    } else if (status === "Done") {
        result = state.card.filter(item => {
            return item.done;
        });
    }
    console.log(result);
    return {
        ...state,
        buttonStatus: status,
        visibleItems: result,
    };
};

export const addItem = (state, { payload }) => {
    let text = payload;
    let name = text.split(" ").find(item => item[0] === "#");
    name = name ? name.slice(1) : name;
    const newItem = {
        name: name ? name : text,
        important: false,
        done: false,
        id: generateId++,
        description: text,
        tag: name ? "#" + name : null,
        tagKey: tagKey++
    };
    let data = [...state.card];
    data.push(newItem);
    return {
        ...state,
        card: data
    };
};

export const doneItem = (state, { payload }) => {
    let id = payload;
    let changedArray = [...state.card];

    let indexOfArray = changedArray.findIndex((el) => {
        return el.id === id;
    });
    changedArray[indexOfArray].done = !changedArray[indexOfArray].done;

    return {
        ...state,
        card: [...changedArray]
    };
};

export const deleteItem = (state, { payload }) => {
    let id = payload;
    let notDeleted = [];
    state.card.forEach(item => {
        if (item.id !== id) {
            notDeleted.push(item);
        }
    });
    return {
        ...state,
        card: notDeleted
    };
};

export const changeColor = (state, { payload }) => {
    let id = payload;
    let changedArray = [...state.card];

    let indexOfArray = changedArray.findIndex((el) => {
        return el.id === id;
    });
    changedArray[indexOfArray].important = !changedArray[indexOfArray].important;

    return {
        ...state,
        card: [...changedArray]
    };
};

//общий экшен для всех ошибок в Custom
export const processFailure = (state, { payload }) => ({
    ...state,
    error: payload.error,
    isLoading: false,
});

export const getGhibliFilms = (state, { payload }) => ({
    ...state,
    isLoading: true,
});

export const getGhibliFilmsSuccess = (state, { payload }) => ({
    ...state,
    isLoading: false,
    ghibliFilms: payload.ghibliFilms
});

// export const signUp = (state, { payload }) => ({
//     ...state,
//     isLoading: true,
//     error: undefined,
// });

// export const signUpSuccess = (state, { payload }) => ({
//     ...state,
//     isLoading: false,
//     decodedJWT: payload.decodedJWT
// });

export default initialState;
