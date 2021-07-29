import {
  OPEN_DRAWER,
  OPEN_MODAL,
  SWITCH_LOADING,
  DRAWER_TYPE,
} from "../actions/actionType";
const defaultState = {
  modal: false,
  loading: false,
  drawer: false,
  drawerType: "favorites",
  suggestionModal: false,
};
const serviceReducers = (state = defaultState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modal: action.payload,
      };
    case OPEN_DRAWER:
      return {
        ...state,
        drawer: action.payload,
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
    default:
      return state;
  }
};

export default serviceReducers;
