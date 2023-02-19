import { createStore } from "redux";
import { combineReducers } from "redux";
import { productState, filterState } from "./reducer";

const rootReducer = combineReducers({
  productState,
  filterState,
});

export const store = createStore(rootReducer);
