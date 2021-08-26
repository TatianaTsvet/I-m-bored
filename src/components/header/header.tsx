import React from "react";
import { useDispatch } from "react-redux";

export default function ButtonAppBar() {
  const dispatch = useDispatch();
  const openFavoriteDrawer = () => {
    dispatch({ type: "openDrawer", payload: true });
    dispatch({ type: "drawerType", payload: "favorites" });
  };
  const openHistoryDrawer = () => {
    dispatch({ type: "drawerType", payload: "history" });
    dispatch({ type: "openDrawer", payload: true });
  };
  const sendSuggestion = () => {
    dispatch({ type: "openSuggestion", payload: true });
  };

  return (
    <header className="sticky top-0 z-50 w-full flex bg-yellow-500 h-16 shadow-md  ">
      <div className="w-3/4 p-2 my-auto  ml-5 text-2xl	">
        <h5 className="font-medium">I&apos;m Bored...</h5>
      </div>
      <div className="w-1/4 flex justify-end ">
        <button
          title="favorites"
          className="p-2 hover:text-white has-tooltip"
          onClick={openFavoriteDrawer}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
        <button
          className="p-2 hover:text-white"
          title="history"
          onClick={openHistoryDrawer}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <button
          className="p-2 hover:text-white"
          onClick={sendSuggestion}
          title="send new activity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 mr-5 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
