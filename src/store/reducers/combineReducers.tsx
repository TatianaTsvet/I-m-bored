import { useReducer, useCallback } from "react";
import combineReducers from "react-combine-reducers";
import { mainReducers, defaultState } from "./mainReducers";
import { serviceReducers, defaultState } from "./serviceReducers";

type ProfileReducer = (state: ProfileState, action: Action) => ProfileState;
 
const [mainReducers, serviceReducers] = combineReducers<ProfileReducer>({
  mainReducers: [mainReducers, defaultState],
  serviceReducers: [serviceReducers, defaultState],
});
