import {
  // ADD_TO_ACTIVITY_LIST,
  // DELETE_FAVORITE_ACTIVITY,
  // GET_ACTIVITY,
  ActionTypes,
} from "../actions/actionType";
import { MainState, MainActions } from "../../types/mainTypes";

const defaultState: MainState = {
  activity: JSON.parse(localStorage.getItem("activityList") ?? "[]"),
  history: JSON.parse(localStorage.getItem("history") ?? "[]"),
  randomActivity: "",
};
const mainReducers = (state = defaultState, action: MainActions): MainState => {
  switch (action.type) {
    case ActionTypes.ADD_TO_ACTIVITY_LIST:
      const sameActivity = !!state.activity.find(
        (item) => item.key === action.payload
        // .key
      );
      const newActivity = sameActivity
        ? state.activity
        : [...state.activity, action.payload];

      localStorage.setItem("activityList", JSON.stringify(newActivity));

      return {
        ...state,
        activity: newActivity,
      };
    case ActionTypes.GET_ACTIVITY:
      return {
        ...state,
        randomActivity: action.payload,
        // .randomActivity,
        history: action.payload,
        // .randomActivity,
      };
    case ActionTypes.DELETE_FAVORITE_ACTIVITY:
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
