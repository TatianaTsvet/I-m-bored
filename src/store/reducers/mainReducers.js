import {
  ADD_TO_ACTIVITY_LIST,
  DELETE_FAVORITE_ACTIVITY,
  GET_ACTIVITY,
} from "../actions/actionType";

const defaultState = {
  activity: JSON.parse(localStorage.getItem("activityList") ?? "[]"),
  history: JSON.parse(localStorage.getItem("history") ?? "[]"),
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

      localStorage.setItem("activityList", JSON.stringify(newActivity));

      return {
        ...state,
        activity: newActivity,
      };
    case GET_ACTIVITY:
      return {
        ...state,
        randomActivity: action.payload.randomActivity,
        history: action.payload.randomActivity,
      };
    case DELETE_FAVORITE_ACTIVITY:
      const nonDeletedActivities = state.activity.filter(
        (item) => item.key !== action.payload
      );
      localStorage.setItem(
        "activityList",
        JSON.stringify(nonDeletedActivities)
      );

      return {
        ...state,
        activity: nonDeletedActivities,
      };
    default:
      return state;
  }
};

export default mainReducers;
