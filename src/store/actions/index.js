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

export const openModal = (modal) => {
  return {
    type: types.OPEN_MODAL,
    payload: { modal },
  };
};
export const switchLoading = (loading) => {
  return {
    type: types.SWITCH_LOADING,
    payload: { loading },
  };
};
