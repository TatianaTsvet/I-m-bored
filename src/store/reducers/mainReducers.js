import { ADD_TO_ACTIVITY_LIST, GET_ACTIVITY } from "../actions/actionType";

const storageKey = "activityList";

const defaultState = {
  activity: JSON.parse(localStorage.getItem(storageKey) ?? "[]"),
  randomActivity: "",
};
const mainReducers = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TO_ACTIVITY_LIST:
      const sameActivity = !!state.activity.find(
        (item) => item.key === action.payload.key
      );
      const newActivity = sameActivity
        ? state.activity
        : [...state.activity, action.payload];

      localStorage.setItem(storageKey, JSON.stringify(newActivity));

      return {
        ...state,
        activity: newActivity,
      };
    case GET_ACTIVITY:
      return {
        ...state,
        randomActivity: action.payload.randomActivity,
      };
    default:
      return state;
  }
};

export default mainReducers;
