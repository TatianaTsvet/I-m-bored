import { ActionTypes } from "../actions/actionType";
import { MainState, MainActions } from "../../types/mainTypes";

const defaultState: MainState = {
  activity: JSON.parse(localStorage.getItem("activityList") ?? "[]"),
  history: JSON.parse(localStorage.getItem("history") ?? "[]"),
  randomActivity: [],
};
const mainReducers = (state = defaultState, action: MainActions): MainState => {
  switch (action.type) {
    case ActionTypes.ADD_TO_ACTIVITY_LIST:
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
    case ActionTypes.GET_ACTIVITY:
      const likedActivity = { ...action.payload, liked: true };
      const sameHistoryActivity = !!state.history.find(
        (item) => item.key === action.payload.key
      );
      const historyList = sameHistoryActivity
        ? state.history
        : [...state.history, likedActivity];
      localStorage.setItem("history", JSON.stringify(historyList));
      return {
        ...state,
        randomActivity: historyList,
        history: historyList,
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
    case ActionTypes.CLICKED_LIKE_BUTTON:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default mainReducers;
