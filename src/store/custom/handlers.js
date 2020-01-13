const initialState = {
    isLoading: false,
    error: null,
    breakingBadCharacters: [],
    currentStatus: "Status",
    currentCategory: "Category",
    minAge: 0,
    maxAge: 0,
    sortAlphabetical: false,
};

//доделать второй спинер!!

export const sortAlphabetical = (state, { payload }) => {
    return {
        ...state,
        sortAlphabetical: !state.sortAlphabetical
    };
};

export const onCurrentStatus = (state, { payload }) => {
    return {
        ...state,
        currentStatus: payload
    };
};

export const onCurrentCategory = (state, { payload }) => {
    return {
        ...state,
        currentCategory: payload
    };
};

export const onMinAge = (state, { payload }) => {
    return {
        ...state,
        minAge: payload
    };
};

export const onMaxAge = (state, { payload }) => {
    return {
        ...state,
        maxAge: payload
    };
};

export const resetSettings = (state, { payload }) => {
    return {
        ...state,
        currentStatus: "Status",
        currentCategory: "Category",
        minAge: 0,
        maxAge: 0,
        sortAlphabetical: false,
    };
};

//общий экшен для всех ошибок в Custom
export const processFailure = (state, { payload }) => ({
    ...state,
    error: payload.error,
    isLoading: false,
});

export const getBreakingBad = (state, { payload }) => ({
    ...state,
    isLoading: true,
});

export const getBreakingBadSuccess = (state, { payload }) => ({
    ...state,
    isLoading: false,
    breakingBadCharacters: payload.breakingBadCharacters
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
