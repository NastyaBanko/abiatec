import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import custom from '../custom';


export default history => {
  return combineReducers({
    router: connectRouter(history),
    custom
  });
};
