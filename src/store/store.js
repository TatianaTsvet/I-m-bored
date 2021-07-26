import { createStore, combineReducers, applyMiddleware } from "redux";
import serviceReducers from "./reducers/serviceReducers";
import mainReducers from "./reducers/mainReducers";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
const rootReducer = combineReducers({
  mainReducers,
  serviceReducers,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
