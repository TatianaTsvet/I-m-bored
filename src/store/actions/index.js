import * as types from "./actionType";

export const addToActivityList = (activity) => {
  return {
    type: types.ADD_TO_ACTIVITY_LIST,
    payload: { activity },
  };
};
export const getActivity = (randomActivity) => {
  return {
    type: types.GET_ACTIVITY,
    payload: { randomActivity },
  };
};
export const deleteFavoriteActivity = (key) => {
  return {
    type: types.DELETE_FAVORITE_ACTIVITY,
    payload: { key },
  };
};

export const openModal = (modal) => {
  return {
    type: types.OPEN_MODAL,
    payload: { modal },
  };
};
export const openDrawer = (drawer) => {
  return {
    type: types.OPEN_DRAWER,
    payload: { drawer },
  };
};
export const openSnackbar = (openSnackbar) => {
  return {
    type: types.OPEN_SNACKBAR,
    payload: { openSnackbar },
  };
};
export const switchLoading = (loading) => {
  return {
    type: types.SWITCH_LOADING,
    payload: { loading },
  };
};
export const drawerType = (type) => {
  return {
    type: types.DRAWER_TYPE,
    payload: { type },
  };
};
export const openSuggestion = (modal) => {
  return {
    type: types.OPEN_SUGGESTION,
    payload: { modal },
  };
};
export const suggestResponse = (response) => {
  return {
    type: types.SUGGEST_RESPONSE,
    payload: { response },
  };
};
