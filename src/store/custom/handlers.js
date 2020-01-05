let generateId = 0;
let tagKey = 1000;

const findTags = (text) => {
    const tags = [];
    let tagNames = text.split(" ").filter(item => item[0] === "#");
    tagNames.forEach((tagName) => {
        const tagItem = {
            name: tagName,
            tagKey: tagKey++,
        };
        tags.push(tagItem);
    });
    return tags;
};

const allTags = (name, description) => {
    let tagFromName = findTags(name);
    let tagFromDescription = findTags(description);
    return tagFromName.concat(tagFromDescription);
};

const initialState = {
    isLoading: false,
    error: null,
    ghibliFilms: [],
    card: [
        {
            name: "Do homework", important: false, done: false, id: generateId++, description: "#JS", clickedDescrip: false, finishChange: false, tag: function () { return allTags(this.name, this.description) },
        },
        {
            name: "Play with cat", important: false, done: false, id: generateId++, description: "Tokati", clickedDescrip: false, finishChange: false, tag: function () { return allTags(this.name, this.description) },
        },
        {
            name: "Paint new picture", important: false, done: false, id: generateId++, description: "Homeless", clickedDescrip: false, finishChange: false, tag: function () { return allTags(this.name, this.description) },
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
    return {
        ...state,
        term: payload,
    };
};

export const onChangeDescrip = (state, { payload }) => {
    return {
        ...state,
        changedDescrip: payload,
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
    return {
        ...state,
        buttonStatus: payload,
    };
};

export const showStatus = (state, { payload }) => {
    return {
        ...state,
        buttonStatus: payload,
    };
};

export const addItem = (state, { payload }) => {
    const newItem = {
        name: payload.name,
        important: false,
        done: false,
        id: generateId++,
        description: payload.description,
        tag: function () { return allTags(payload.name, payload.description) },
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
