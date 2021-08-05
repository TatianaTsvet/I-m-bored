import {
  // OPEN_DRAWER,
  // OPEN_MODAL,
  // SWITCH_LOADING,
  // DRAWER_TYPE,
  // OPEN_SUGGESTION,
  // SUGGEST_RESPONSE,
  // OPEN_SNACKBAR,
  ActionTypes
} from "../actions/actionType";
import { ServiceState, Actions } from "../../types/serviceTypes";

const defaultState = {
  modal: false,
  loading: false,
  drawer: false,
  drawerType: "favorites",
  suggestionModal: false,
  suggestResponse: "",
  openSnackbar: false,
};
const serviceReducers = (state = defaultState, action: Actions): ServiceState => {
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
};

export default serviceReducers;
