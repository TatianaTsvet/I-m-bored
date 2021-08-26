import { ActionTypes } from "../actions/actionType";
import { MainState, MainActions, Activity } from "../../types/mainTypes";

const defaultState: MainState = {
  favorites: JSON.parse(localStorage.getItem("favoritesList") ?? "[]"),
  history: JSON.parse(localStorage.getItem("historyList") ?? "[]"),
  randomActivity: [],
};

const mainReducers = (state = defaultState, action: MainActions): MainState => {
  const filterActivity = (stateActivity: Activity[], activityKey: number) =>
    stateActivity.filter((item) => item.key !== activityKey);
  const findActivity = (stateActivity: Activity[], activityKey: number) =>
    stateActivity.find((item) => item.key === activityKey);

  let newState = state;

  switch (action.type) {
    case ActionTypes.ADD_TO_ACTIVITY_LIST:
      action.payload.liked = true;
      const sameActivity = !!findActivity(state.favorites, action.payload.key);

      const newFavorites = sameActivity
        ? state.favorites
        : [...state.favorites, action.payload];
      const newHistory = state.history.map((item) => {
        if (item.key === action.payload.key) {
          return { ...item, liked: true };
        } else {
          return item;
        }
      });

      newState = {
        ...state,
        history: newHistory,
        favorites: newFavorites,
      };
      break;
    case ActionTypes.GET_ACTIVITY:
      const randomActivity = { ...action.payload, liked: false };
      const sameHistoryActivity = !!findActivity(
        state.history,
        action.payload.key
      );

      const historyList = sameHistoryActivity
        ? state.history
        : [...state.history, randomActivity];

      newState = {
        ...state,
        randomActivity: [randomActivity],
        history: historyList,
      };
      break;
    case ActionTypes.DELETE_FAVORITE_ACTIVITY:
      const nonDeletedFavorites = filterActivity(
        state.favorites,
        action.payload
      );

      const nonDeletedHistory = state.history.map((item) => {
        if (item.key === action.payload) {
          return { ...item, liked: false };
        } else {
          return item;
        }
      });

      newState = {
        ...state,
        favorites: nonDeletedFavorites,
        history: nonDeletedHistory,
      };
      break;
    case ActionTypes.REALLY_DELETE_ACTIVITY:
      const favoriteActivities = filterActivity(
        state.favorites,
        action.payload
      );
      const historyActivities = filterActivity(state.history, action.payload);

      newState = {
        ...state,
        favorites: favoriteActivities,
        history: historyActivities,
      };
      break;
    case ActionTypes.CHANGE_LIKED:
      const newFavoritesLiked = state.history
        .filter((item) => item.key === action.payload)
        .map((obj) => (obj.liked === false ? { ...obj, liked: true } : obj));
      const historyArr = state.history.map((item) => {
        if (item.key === action.payload) {
          return { ...item, liked: true };
        } else {
          return item;
        }
      });
      const newFavoritesState = [...state.favorites, ...newFavoritesLiked];
      newState = {
        ...state,
        history: historyArr,
        favorites: newFavoritesState,
      };
      break;
    default:
      newState = state;
  }
  localStorage.setItem("favoritesList", JSON.stringify(state.favorites));
  localStorage.setItem("historyList", JSON.stringify(state.history));
  return newState;
};

export default mainReducers;
