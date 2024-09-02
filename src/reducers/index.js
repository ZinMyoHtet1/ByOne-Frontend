import { thunk } from "redux-thunk";
import { combineReducers, applyMiddleware, createStore } from "redux";
import uiReducer from "./uiReducers";

const rootReducer = combineReducers({
  ui: uiReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
