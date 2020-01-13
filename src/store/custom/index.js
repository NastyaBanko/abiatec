import { handleActions, createActions } from 'redux-actions';

import initialState, * as handlers from './handlers';

export const actions = createActions({
  PROCESS_FAILURE: undefined,
  GET_BREAKING_BAD: undefined,
  GET_BREAKING_BAD_SUCCESS: undefined,
  ON_CURRENT_STATUS: undefined,
  ON_CURRENT_CATEGORY: undefined,
  ON_MIN_AGE: undefined,
  ON_MAX_AGE: undefined,
  RESET_SETTINGS: undefined,
  SORT_ALPHABETICAL: undefined,
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
    [actions.getBreakingBad, handlers.getBreakingBad],
    [actions.getBreakingBadSuccess, handlers.getBreakingBadSuccess],
    [actions.onCurrentStatus, handlers.onCurrentStatus],
    [actions.onCurrentCategory, handlers.onCurrentCategory],
    [actions.onMinAge, handlers.onMinAge],
    [actions.onMaxAge, handlers.onMaxAge],
    [actions.resetSettings, handlers.resetSettings],
    [actions.sortAlphabetical, handlers.sortAlphabetical],
  ]),
  initialState,
);

export default reducer;
