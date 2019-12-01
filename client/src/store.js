import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReduce from "./reducers";

const intialState = {};

const middleware = [thunk];

const store = createStore(
  rootReduce,
  intialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);


export default store;
