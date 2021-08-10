import { ActionTypes } from "../store/actions/actionType";

export interface Activity {
  activity: string;
  type: string;
  key: number;
  participants: number;
  liked: boolean;
}

export interface MainState {
  activity: Activity[];
  history: Activity[];
  randomActivity: Activity[];
}

interface AddToActivityList {
  type: ActionTypes.ADD_TO_ACTIVITY_LIST;
  payload: Activity;
}
interface DeleteFavoriteActivity {
  type: ActionTypes.DELETE_FAVORITE_ACTIVITY;
  payload: number;
}
interface GetActivity {
  type: ActionTypes.GET_ACTIVITY;
  payload: Activity;
}
interface ClickedLikeButton {
  type: ActionTypes.CLICKED_LIKE_BUTTON;
  payload: string;
}

export type MainActions =
  | AddToActivityList
  | DeleteFavoriteActivity
  | GetActivity
  | ClickedLikeButton;
