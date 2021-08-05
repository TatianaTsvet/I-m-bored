import { ActionTypes } from "../store/actions/actionType"
export interface MainState {
    activity: any[];
    history: any[];
    randomActivity: any;
  }

  interface AddToActivityList {
    type: ActionTypes.ADD_TO_ACTIVITY_LIST;
    payload: any[];
  }
  interface DeleteFavoriteActivity {
    type: ActionTypes.DELETE_FAVORITE_ACTIVITY;
    payload: string;
  }
  interface GetActivity {
    type: ActionTypes.GET_ACTIVITY;
    payload: any[];
  }
  
  export type MainActions = AddToActivityList | DeleteFavoriteActivity | GetActivity 