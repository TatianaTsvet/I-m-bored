import React, { FC } from "react";
import JokesPaper from "../jokes-paper";
import { closeIcon } from "../../core/icons";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypeSelector";
import "./jokes-main.css";

const JokesMain: FC = () => {
  const dispatch = useDispatch();
  const drawerOpen = useTypedSelector(
    (state) => state.serviceReducers.bottomDrawer
  );
  const drawerClose = () => {
    dispatch({ type: "bottomDrawerOpen", payload: false });
  };

  const drawer = (
    <div className="ml-2 mt-1 ">
      <p className="md:text-xl textYellow">Jokester</p>
      <div onClick={drawerClose} className="absolute right-2 top-2 textYellow">
        {closeIcon}
      </div>
      <JokesPaper />
    </div>
  );

  return (
    <nav
      className={
        "fixed  z-50 bg-gray-900 bg-opacity-25 inset-0 transform   " +
        (drawerOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all  opacity-0 translate-y-full  ")
      }
    >
      <section className=" bottom-0 absolute bg-gray-900 min-w-full ">
        {drawer}
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={drawerClose}
      ></section>
    </nav>
  );
};
export default JokesMain;
