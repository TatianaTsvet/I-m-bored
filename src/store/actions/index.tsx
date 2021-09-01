import { ActionTypes } from "./actionType";
import { Activity } from "../../types/mainTypes";
import { IActivity, IResponse } from "../../interfaces/interfaces";

export const addToActivityList = (activity: Activity) => {
  return {
    type: ActionTypes.ADD_TO_ACTIVITY_LIST,
    payload: { activity },
  };
};
export const getActivity = (randomActivity: Activity) => {
  return {
    type: ActionTypes.GET_ACTIVITY,
    payload: { randomActivity },
  };
};
export const deleteFavoriteActivity = (key: number) => {
  return {
    type: ActionTypes.DELETE_FAVORITE_ACTIVITY,
    payload: { key },
  };
};

export const openModal = (modal: boolean) => {
  return {
    type: ActionTypes.OPEN_MODAL,
    payload: { modal },
  };
};
export const openDrawer = (drawer: boolean) => {
  return {
    type: ActionTypes.OPEN_DRAWER,
    payload: { drawer },
  };
};
export const openSnackbar = (openSnackbar: boolean) => {
  return {
    type: ActionTypes.OPEN_SNACKBAR,
    payload: { openSnackbar },
  };
};
export const switchLoading = (loading: boolean) => {
  return {
    type: ActionTypes.SWITCH_LOADING,
    payload: { loading },
  };
};
export const drawerType = (type: string) => {
  return {
    type: ActionTypes.DRAWER_TYPE,
    payload: { type },
  };
};
export const openSuggestion = (modal: boolean) => {
  return {
    type: ActionTypes.OPEN_SUGGESTION,
    payload: { modal },
  };
};
export const suggestResponse = (response: string) => {
  return {
    type: ActionTypes.SUGGEST_RESPONSE,
    payload: { response },
  };
};
export const clickedLikeButton = (key: number) => {
  return {
    type: ActionTypes.CLICKED_LIKE_BUTTON,
    payload: { key },
  };
};
export const changeLiked = (liked: string) => {
  return {
    type: ActionTypes.CHANGE_LIKED,
    payload: { liked },
  };
};
export const bottomDrawerOpen = (bottomDrawer: boolean) => {
  return {
    type: ActionTypes.BOTTOM_DRAWER_OPEN,
    payload: { bottomDrawer },
  };
};
export const reallyDeleteActivity = (key: number) => {
  return {
    type: ActionTypes.REALLY_DELETE_ACTIVITY,
    payload: { key },
  };
};
