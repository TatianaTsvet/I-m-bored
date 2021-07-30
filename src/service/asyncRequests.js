import { getActivity } from "../store/actions";

export const fetchNewActivity = (type) => {
  let data = new URLSearchParams();
  if (type === "random") {
    data = "";
  } else {
    data = `type=${type}`;
  }
  return (dispatch) => {
    fetch(`https://www.boredapi.com/api/activity?${data}`, {
      cache: "no-cache",
    })
      .then((res) => res.json())
      .then((data) => dispatch(getActivity(data)))
      .then(
        setTimeout(() => {
          dispatch({ type: "switchLoading", payload: false });
        }, 1500)
      );
  };
};

export const sendActivityWithSuggestion = (suggestion) => {
  return (dispatch) => {
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
      .then((res) => dispatch({ type: "suggestResponse", payload: res }))
      .then(dispatch({ type: "openSnackbar", payload: true }));
  };
};
