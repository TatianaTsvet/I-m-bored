import { ActionTypes } from "../actions/actionType";
import { MainState, MainActions } from "../../types/mainTypes";

export const mainState: MainState = {
  activity: JSON.parse(localStorage.getItem("activityList") ?? "[]"),
  history: JSON.parse(localStorage.getItem("history") ?? "[]"),
  randomActivity: [],
};

export function mainReducers(
  state: MainState = mainState,
  action: MainActions
) {
  switch (action.type) {
    case ActionTypes.ADD_TO_ACTIVITY_LIST:
      action.payload.liked = true;
      const sameActivity = !!state.activity.find(
        (item) => item.key === action.payload.key
      );
      const newActivity = sameActivity
        ? state.activity
        : [...state.activity, action.payload];
      const newHistory = state.history.map((item) => {
        if (item.key === action.payload.key) {
          return { ...item, liked: true };
        } else {
          return item;
        }
      });
      localStorage.setItem("activityList", JSON.stringify(newActivity));
      localStorage.setItem("history", JSON.stringify(newHistory));

      return {
        ...state,
        history: newHistory,
        activity: newActivity,
      };
    case ActionTypes.GET_ACTIVITY:
      const randomActivity = { ...action.payload, liked: false };
      const sameHistoryActivity = !!state.history.find(
        (item) => item.key === action.payload.key
      );
      const historyList = sameHistoryActivity
        ? state.history
        : [...state.history, randomActivity];
      localStorage.setItem("history", JSON.stringify(historyList));
      return {
        ...state,
        randomActivity: [randomActivity],
        history: historyList,
      };
    case ActionTypes.DELETE_FAVORITE_ACTIVITY:
      const nonDeletedActivities = state.activity.filter(
        (item) => item.key !== action.payload
      );
      const newHistoryArr = state.history.map((item) => {
        if (item.key === action.payload) {
          return { ...item, liked: false };
        } else {
          return item;
        }
      });
      localStorage.setItem(
        "activityList",
        JSON.stringify(nonDeletedActivities)
      );
      localStorage.setItem("history", JSON.stringify(newHistoryArr));

      return {
        ...state,
        activity: nonDeletedActivities,
        history: newHistoryArr,
      };

    case ActionTypes.CHANGE_LIKED:
      const newActivityLiked = state.history
        .filter((item) => item.key === action.payload)
        .map((obj) => (obj.liked === false ? { ...obj, liked: true } : obj));

      const historyArr = state.history.map((item) => {
        if (item.key === action.payload) {
          return { ...item, liked: true };
        } else {
          return item;
        }
      });

      const newActivityState = [...state.activity, ...newActivityLiked];

      return {
        ...state,
        history: historyArr,
        activity: newActivityState,
      };

    default:
      return state;
  }
}
