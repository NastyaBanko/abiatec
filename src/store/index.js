import { applyMiddleware, createStore, compose } from "redux";
import { routerMiddleware as createRouterMiddleware } from "connected-react-router";
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import rootSaga from './sagas'

export default ({ api, history, authManager }) => {

  const routerMiddleware = createRouterMiddleware(history);
  const sagaMiddleware = createSagaMiddleware({
    api,
    history,
    authManager,
  });

  const enhancers = process.env.NODE_ENV === 'production' ?
      compose(applyMiddleware(sagaMiddleware,  routerMiddleware)) :
      composeWithDevTools(applyMiddleware(sagaMiddleware,  routerMiddleware));

  const store = createStore(rootReducer(history), enhancers);
  sagaMiddleware.run(rootSaga);
  return store;
};
