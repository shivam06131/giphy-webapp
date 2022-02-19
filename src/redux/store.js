import { createStore, compose, applyMiddleware } from "redux";
import { reducers } from "./reducers/gif_reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  composeEnhancers(compose(applyMiddleware(thunk)))
);
