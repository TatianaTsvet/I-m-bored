import { OPEN_MODAL } from "../actions/actionType";

const defaultState = {
  modal: false,
};
const serviceReducers = (state = defaultState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modal: action.payload,
      };
    default:
      return state;
  }
};

export default serviceReducers;
