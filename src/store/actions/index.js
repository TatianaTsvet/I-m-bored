import * as types from "./actionType";

export const getActivity = (activity) => {
  return {
    type: types.GET_ACTIVITY,
    payload: { activity },
  };
};
export const openModal = (modal) => {
  return {
    type: types.OPEN_MODAL,
    payload: { modal },
  };
};
