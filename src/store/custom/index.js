import { handleActions, createActions } from 'redux-actions';

import initialState, * as handlers from './handlers';

export const actions = createActions({
  PROCESS_FAILURE: undefined,
  GET_GHIBLI_FILMS: undefined,
  GET_GHIBLI_FILMS_SUCCESS: undefined,
  CHANGE_COLOR: undefined,
  DONE_ITEM: undefined,
  DELETE_ITEM: undefined,
  ADD_ITEM: undefined,
  STATUS_CHANGE: undefined,
  SEARCH_CHANGE: undefined,
  ON_CHANGE_DESCRIP: undefined,
  CLICK_DESCRIP: undefined,
  CHANGE_DESCRIP: undefined,
  // SIGN_UP: undefined,
  // SIGN_UP_SUCCESS: undefined,
  // SIGN_UP_FAILURE: undefined,
});



const reducer = handleActions(
  new Map([
    // [actions.signUp, handlers.signUp],
    // [actions.signUpSuccess, handlers.signUpSuccess],
    // [actions.signUpFailure, handlers.signUpFailure],

    [actions.processFailure, handlers.processFailure],
    [actions.getGhibliFilms, handlers.getGhibliFilms],
    [actions.getGhibliFilmsSuccess, handlers.getGhibliFilmsSuccess],
    [actions.changeColor, handlers.changeColor],
    [actions.doneItem, handlers.doneItem],
    [actions.deleteItem, handlers.deleteItem],
    [actions.addItem, handlers.addItem],
    [actions.statusChange, handlers.statusChange],
    [actions.searchChange, handlers.searchChange],
    [actions.onChangeDescrip, handlers.onChangeDescrip],
    [actions.clickDescrip, handlers.clickDescrip],
    [actions.changeDescrip, handlers.changeDescrip],
  ]),
  initialState,
);

export default reducer;
