import { OPEN_MODAL, SWITCH_LOADING } from "../actions/actionType";
const defaultState = {
  modal: false,
  loading: false,
};
const serviceReducers = (state = defaultState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modal: action.payload,
      };
    case SWITCH_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default serviceReducers;
