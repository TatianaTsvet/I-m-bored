
import { ActionTypes } from "./actionType";

export const addToActivityList = (activity: any[]) => {
  return {
    type: ActionTypes.ADD_TO_ACTIVITY_LIST,
    payload: { activity },
  };
};
export const getActivity = (randomActivity: any[]) => {
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
export const suggestResponse = (response: any[]) => {
  return {
    type: ActionTypes.SUGGEST_RESPONSE,
    payload: { response },
  };
};
