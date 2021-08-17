import { ActionTypes } from "../actions/actionType";
import { ServiceState, ServiceActions } from "../../types/serviceTypes";

export const defaultState = {
  modal: false,
  loading: false,
  drawer: false,
  drawerType: "favorites",
  suggestionModal: false,
  suggestResponse: "",
  openSnackbar: false,
};

export function serviceReducers(
  state: ServiceState = defaultState,
  action: ServiceActions
): ServiceState {
  switch (action.type) {
    case ActionTypes.OPEN_MODAL:
      return {
        ...state,
        modal: action.payload,
      };
    case ActionTypes.OPEN_SUGGESTION:
      return {
        ...state,
        suggestionModal: action.payload,
        suggestResponse: "",
      };
    case ActionTypes.OPEN_DRAWER:
      return {
        ...state,
        drawer: action.payload,
      };
    case ActionTypes.OPEN_SNACKBAR:
      return {
        ...state,
        openSnackbar: action.payload,
      };
    case ActionTypes.SWITCH_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ActionTypes.DRAWER_TYPE:
      return {
        ...state,
        drawerType: action.payload,
      };
    case ActionTypes.SUGGEST_RESPONSE:
      return {
        ...state,
        suggestResponse: action.payload,
      };
    default:
      return state;
  }
}
