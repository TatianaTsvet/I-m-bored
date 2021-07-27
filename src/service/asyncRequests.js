import { getActivity } from "../store/actions";

const fetchNewActivity = (type) => {
  let data = new URLSearchParams();
  if (type === "random") {
    data = "";
  } else {
    data = `type=${type}`;
  }
  return (dispatch) => {
    // dispatch(fetchActivity());
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
export default fetchNewActivity;
