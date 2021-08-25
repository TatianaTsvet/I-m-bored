import { ActionTypes } from "../store/actions/actionType";
export interface ServiceState {
  modal: boolean;
  loading: boolean;
  drawer: boolean;
  drawerType: string;
  suggestionModal: boolean;
  suggestResponse: string | any;
  openSnackbar: boolean;
  bottomDrawer: boolean;
}

interface OpenDrawer {
  type: ActionTypes.OPEN_DRAWER;
  payload: boolean;
}
interface OpenModal {
  type: ActionTypes.OPEN_MODAL;
  payload: boolean;
}
interface SwitchLoading {
  type: ActionTypes.SWITCH_LOADING;
  payload: boolean;
}
interface DrawerType {
  type: ActionTypes.DRAWER_TYPE;
  payload: string;
}
interface OpenSuggestion {
  type: ActionTypes.OPEN_SUGGESTION;
  payload: boolean;
}
interface OpenSnackbar {
  type: ActionTypes.OPEN_SNACKBAR;
  payload: boolean;
}
interface SuggestResponse {
  type: ActionTypes.SUGGEST_RESPONSE;
  payload: string;
}
interface BottomDrawerOpen {
  type: ActionTypes.BOTTOM_DRAWER_OPEN;
  payload: boolean;
}

export type ServiceActions =
  | OpenDrawer
  | OpenModal
  | SwitchLoading
  | DrawerType
  | OpenSuggestion
  | OpenSnackbar
  | SuggestResponse
  | BottomDrawerOpen;
