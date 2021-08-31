import React from "react";
import { ISpinnerProps } from "../../../../interfaces/interfaces";
import "./spinner.css";

const Spinner = (props: ISpinnerProps) => {
  if (!props.loading) return null;

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 h-40 w-40 rounded-lg shadow-lg relative flex flex-col bg-white flex justify-center items-center content-center ">
            <div className="lds-dual-ring "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Spinner;
