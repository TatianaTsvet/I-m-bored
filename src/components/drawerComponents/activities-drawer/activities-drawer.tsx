import React, { FC } from "react";
import DrawerBody from "../drawer-body";
import { useDispatch } from "react-redux";
import "./activities-drawer.css";
import { useTypedSelector } from "../../../hooks/useTypeSelector";
import { closeIcon } from "../../core/icons";

const ActivitiesDrawer: FC = () => {
  const dispatch = useDispatch();
  const drawerOpen = useTypedSelector((state) => state.serviceReducers.drawer);
  const drawerClose = () => {
    dispatch({ type: "openDrawer", payload: false });
  };

  const drawer = (
    <div className="ml-2 mt-1 ">
      <div onClick={drawerClose} className="absolute right-2 top-2 textYellow">
        {closeIcon}
      </div>
      <DrawerBody />
    </div>
  );
  return (
    <nav
      className={
        "fixed overflow-auto z-50 bg-gray-900 bg-opacity-25 inset-0 transform   " +
        (drawerOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all  opacity-0 translate-y-full  ")
      }
    >
      <section className="w-screen max-w-lg left-0 absolute bg-gray-900 min-h-full ">
        {drawer}
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={drawerClose}
      ></section>
    </nav>
  );
};
export default ActivitiesDrawer;
