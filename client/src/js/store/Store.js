import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/Root";
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(thunk))
);

export default Store;