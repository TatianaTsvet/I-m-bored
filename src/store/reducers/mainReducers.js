import { GET_ACTIVITY } from "../actions/actionType";

const defaultState = {
  activity: "",
  randomActivity: "",
};
const mainReducers = (state = defaultState, action) => {
  switch (action.type) {
    case GET_ACTIVITY:
      return {
        ...state,
        randomActivity: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducers;
