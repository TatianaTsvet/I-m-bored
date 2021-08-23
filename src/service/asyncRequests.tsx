import { Dispatch } from "redux";
import { ActionTypes } from "../store/actions/actionType";
import { MainActions } from "../types/mainTypes";
import { ServiceActions } from "../types/serviceTypes";

export const fetchNewActivity = (type: string) => {
  // let data = new URLSearchParams();
  let data = "";
  if (type === "random") {
    data = "";
  } else {
    data = `type=${type}`;
  }
  return (dispatch: Dispatch<MainActions | ServiceActions>) => {
    fetch(`https://www.boredapi.com/api/activity?${data}`, {
      cache: "no-cache",
    })
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: ActionTypes.GET_ACTIVITY, payload: data })
      )
      .then(() =>
        setTimeout(() => {
          dispatch({ type: ActionTypes.SWITCH_LOADING, payload: false });
        }, 1500)
      );
  };
};

export const sendActivityWithSuggestion = (suggestion: any) => {
  return (dispatch: Dispatch<ServiceActions>) => {
    fetch(`https://www.boredapi.com/api/suggestion`, {
      cache: "no-cache",
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(suggestion),
    })
      .then((res) => res.json())
      .then((res) =>
        dispatch({ type: ActionTypes.SUGGEST_RESPONSE, payload: res })
      )
      .then(() => dispatch({ type: ActionTypes.OPEN_SNACKBAR, payload: true }));
  };
};

export const fetchJokes = async (page: number) => {
  const res = await fetch(
    `https://icanhazdadjoke.com/search?page=${page}&limit=8`,
    {
      cache: "no-cache",
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  );
  return res.json();
};
