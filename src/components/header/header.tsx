import React from "react";
import { useDispatch } from "react-redux";
import { clockIcon, heartIconOutline, mailIcon } from "../core/icons";
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
    <header className="sticky top-0 z-40 w-full flex bg-yellow-500 h-16 shadow-md  ">
      <div className="w-3/4 p-2 my-auto  ml-5 text-2xl	">
        <h5 className="font-medium">I&apos;m Bored...</h5>
      </div>
      <div className="w-1/4 flex justify-end ">
        <button
          title="favorites"
          className="p-2 hover:text-white has-tooltip"
          onClick={openFavoriteDrawer}
        >
          {heartIconOutline}
        </button>
        <button
          className="p-2 hover:text-white"
          title="history"
          onClick={openHistoryDrawer}
        >
          {clockIcon}
        </button>
        <button
          className="p-2 hover:text-white"
          onClick={sendSuggestion}
          title="send new activity"
        >
          {mailIcon}
        </button>
      </div>
    </header>
  );
}
