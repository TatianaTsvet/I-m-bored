import {
  OPEN_DRAWER,
  OPEN_MODAL,
  SWITCH_LOADING,
  DRAWER_TYPE,
  OPEN_SUGGESTION,
  SUGGEST_RESPONSE,
  OPEN_SNACKBAR,
} from "../actions/actionType";

const defaultState = {
  modal: false,
  loading: false,
  drawer: false,
  drawerType: "favorites",
  suggestionModal: false,
  suggestResponse: "",
  openSnackbar: false,
};
const serviceReducers = (state = defaultState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modal: action.payload,
      };
    case OPEN_SUGGESTION:
      return {
        ...state,
        suggestionModal: action.payload,
      };
    case OPEN_DRAWER:
      return {
        ...state,
        drawer: action.payload,
      };
    case OPEN_SNACKBAR:
      return {
        ...state,
        openSnackbar: action.payload,
      };
    case SWITCH_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case DRAWER_TYPE:
      return {
        ...state,
        drawerType: action.payload,
      };
    case SUGGEST_RESPONSE:
      return {
        ...state,
        suggestResponse: action.payload,
      };
    default:
      return state;
  }
};

export default serviceReducers;
