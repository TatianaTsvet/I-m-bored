import React, { FC } from "react";
import DrawerBody from "../drawer-body";
import { useDispatch } from "react-redux";
import "./activities-drawer.css";
import { useTypedSelector } from "../../../hooks/useTypeSelector";

const ActivitiesDrawer: FC = () => {
  const dispatch = useDispatch();
  const drawerOpen = useTypedSelector((state) => state.serviceReducers.drawer);
  const drawerClose = () => {
    dispatch({ type: "openDrawer", payload: false });
  };

  const drawer = (
    <div>
      <div
        onClick={drawerClose}
        className="absolute right-1 top-1 text-yellow-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-9 w-9"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <DrawerBody />
    </div>
  );
  return (
    <nav
      className={
        " fixed overflow-hidden z-50 bg-gray-900 bg-opacity-25 inset-0 transform  " +
        (drawerOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all  opacity-0 translate-y-full  ")
      }
    >
      <section className="w-screen max-w-lg left-0 absolute bg-gray-900 h-full ">
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
